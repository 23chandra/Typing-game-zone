// Base 2D Canvas Game Engine for Typing Game Zone
// Provides physics, particle systems, floating combat text, camera shakes, DPR scaling, and telemetry

import { soundEngine } from '../soundEngine';

export interface GameLevelDef {
  level: number;
  name: string;
  description: string;
  targetWPM: number;
  wordCount: number;
  speed: number;
  bossHealth?: number;
  hazardRate?: number;
}

export interface GameStats {
  score: number;
  grossWPM: number;
  netWPM: number;
  accuracy: number;
  streak: number;
  maxStreak: number;
  totalKeystrokes: number;
  correctKeystrokes: number;
  errors: number;
  timeElapsedSec: number;
  level: number;
  health: number;
  maxHealth: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity?: number;
  rotation?: number;
  vRot?: number;
  shape?: 'circle' | 'square' | 'spark' | 'ring' | 'smoke' | 'star' | 'lightning' | 'petal' | 'glow';
}

export interface FloatingText {
  x: number;
  y: number;
  text: string;
  color: string;
  size: number;
  alpha: number;
  vy: number;
  scale: number;
}

export type GameState = 'INTRO' | 'PLAYING' | 'PAUSED' | 'LEVEL_CLEARED' | 'GAME_OVER' | 'VICTORY';

// Polyfill for CanvasRenderingContext2D.roundRect if missing in older environments
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (
    this: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: number | number[]
  ) {
    const r = typeof radii === 'number' ? radii : Array.isArray(radii) ? radii[0] || 0 : 0;
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.quadraticCurveTo(x + w, y, x + w, y + r);
    this.lineTo(x + w, y + h - r);
    this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.lineTo(x + r, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - r);
    this.lineTo(x, y + r);
    this.quadraticCurveTo(x, y, x + r, y);
    return this;
  };
}

export abstract class BaseGame {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public state: GameState = 'INTRO';

  public currentLevel: number = 1;
  public maxLevels: number = 5;
  public score: number = 0;
  public streak: number = 0;
  public maxStreak: number = 0;
  public totalKeystrokes: number = 0;
  public correctKeystrokes: number = 0;
  public errors: number = 0;
  public startTime: number = 0;
  public levelStartTime: number = 0;
  public wordsCompletedInLevel: number = 0;
  public health: number = 100;
  public maxHealth: number = 100;

  // Animation & Loop
  protected animFrameId: number | null = null;
  protected lastTimestamp: number = 0;
  protected particles: Particle[] = [];
  protected floatingTexts: FloatingText[] = [];
  protected shakeDuration: number = 0;
  protected shakeIntensity: number = 0;
  protected flashDuration: number = 0;
  protected flashColor: string = 'rgba(255, 255, 255, 0.5)';

  // Viewport
  public width: number = 800;
  public height: number = 500;
  public dpr: number = 1;

  // Event Callbacks
  public onStatsChange?: (stats: GameStats) => void;
  public onStateChange?: (state: GameState, stats: GameStats) => void;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) throw new Error('Failed to get 2D canvas context');
    this.ctx = context;
    this.handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onWindowResize);
    }
  }

  private onWindowResize = () => {
    this.handleResize();
  };

  public handleResize(): void {
    const rect = this.canvas.getBoundingClientRect ? this.canvas.getBoundingClientRect() : { width: 800, height: 500 };
    this.width = Math.max(320, Math.floor(rect.width || 800));
    this.height = Math.max(240, Math.floor(rect.height || 500));
    this.dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
    if (this.ctx.setTransform) {
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    } else {
      this.ctx.resetTransform?.();
      this.ctx.scale(this.dpr, this.dpr);
    }
  }

  public abstract getLevels(): GameLevelDef[];
  public abstract initLevel(levelNumber: number): void;
  public abstract updateGame(dt: number): void;
  public abstract renderGame(ctx: CanvasRenderingContext2D): void;
  public abstract handleInputChar(char: string): void;
  public abstract handleBackspaceKey(): void;

  public totalPausedDuration: number = 0;
  public pauseStartTime: number = 0;

  public start(level: number = 1): void {
    this.currentLevel = level;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.totalKeystrokes = 0;
    this.correctKeystrokes = 0;
    this.errors = 0;
    this.health = 100;
    this.maxHealth = 100;
    this.particles = [];
    this.floatingTexts = [];
    this.startTime = Date.now();
    this.levelStartTime = Date.now();
    this.totalPausedDuration = 0;
    this.pauseStartTime = 0;
    this.wordsCompletedInLevel = 0;

    this.initLevel(this.currentLevel);
    this.state = 'PLAYING';
    this.notifyStateChange();

    this.lastTimestamp = typeof performance !== 'undefined' ? performance.now() : Date.now();
    if (this.animFrameId && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.animFrameId);
    }
    this.loop(this.lastTimestamp);
  }

  public pause(): void {
    if (this.state === 'PLAYING') {
      this.state = 'PAUSED';
      this.pauseStartTime = Date.now();
      this.notifyStateChange();
    }
  }

  public resume(): void {
    if (this.state === 'PAUSED') {
      this.state = 'PLAYING';
      if (this.pauseStartTime > 0) {
        this.totalPausedDuration += Date.now() - this.pauseStartTime;
        this.pauseStartTime = 0;
      }
      this.lastTimestamp = typeof performance !== 'undefined' ? performance.now() : Date.now();
      this.notifyStateChange();
    }
  }

  public nextLevel(): void {
    if (this.currentLevel < this.maxLevels) {
      this.currentLevel += 1;
      this.levelStartTime = Date.now();
      this.wordsCompletedInLevel = 0;
      this.health = Math.min(this.maxHealth, this.health + 30);
      this.initLevel(this.currentLevel);
      this.state = 'PLAYING';
      this.notifyStateChange();
    } else {
      this.triggerVictory();
    }
  }

  public restart(): void {
    this.start(this.currentLevel);
  }

  public destroy(): void {
    if (this.animFrameId && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onWindowResize);
    }
  }

  // Floating Combat & Telemetry Text
  public addFloatingText(x: number, y: number, text: string, color: string = '#50e3c2', size: number = 18): void {
    this.floatingTexts.push({
      x,
      y,
      text,
      color,
      size,
      alpha: 1.0,
      vy: -45,
      scale: 1.3
    });
  }

  // Loop & Math
  private loop = (timestamp: number) => {
    const dt = Math.min(0.1, (timestamp - this.lastTimestamp) / 1000);
    this.lastTimestamp = timestamp;

    if (this.state === 'PLAYING') {
      this.update(dt);
    }

    this.render();

    if (typeof requestAnimationFrame !== 'undefined') {
      this.animFrameId = requestAnimationFrame(this.loop);
    }
  };

  private update(dt: number): void {
    // Screen shake decay
    if (this.shakeDuration > 0) {
      this.shakeDuration -= dt;
    }
    // Screen flash decay
    if (this.flashDuration > 0) {
      this.flashDuration -= dt;
    }

    // Particles update
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt * 60;
      p.y += p.vy * dt * 60;
      if (p.gravity) p.vy += p.gravity * dt * 60;
      if (p.vRot && p.rotation !== undefined) p.rotation += p.vRot * dt * 60;
      p.alpha -= p.decay * dt * 60;
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // Floating text update
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy * dt;
      ft.alpha -= dt * 1.6;
      if (ft.scale > 1.0) ft.scale -= dt * 2;
      if (ft.alpha <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }

    this.updateGame(dt);
    this.notifyStats();
  }

  private render(): void {
    if (this.ctx.setTransform) {
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }
    this.ctx.save();

    // Apply Screen Shake
    if (this.shakeDuration > 0) {
      const intensity = this.shakeIntensity * (this.shakeDuration / 0.3);
      const offsetX = (Math.random() - 0.5) * intensity;
      const offsetY = (Math.random() - 0.5) * intensity;
      this.ctx.translate(offsetX, offsetY);
    }

    // Clear Screen
    this.ctx.fillStyle = '#0f1117';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Render Subclass Game
    this.renderGame(this.ctx);

    // Render Particles
    this.renderParticles(this.ctx);

    // Render Floating Combat Text
    this.renderFloatingTexts(this.ctx);

    // Render Screen Flash
    if (this.flashDuration > 0) {
      this.ctx.fillStyle = this.flashColor;
      this.ctx.fillRect(0, 0, this.width, this.height);
    }

    this.ctx.restore();
  }

  private renderParticles(ctx: CanvasRenderingContext2D): void {
    for (const p of this.particles) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.strokeStyle = p.color;

      if (p.shape === 'spark') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(p.x - p.vx * 0.8, p.y - p.vy * 0.8);
        ctx.lineTo(p.x, p.y);
        ctx.lineWidth = p.size * 0.6;
        ctx.stroke();
      } else if (p.shape === 'ring') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (p.shape === 'smoke') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'star') {
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const a = (i * Math.PI * 2) / 5 - Math.PI / 2 + (p.rotation || 0);
          const ia = a + Math.PI / 5;
          const r1 = p.size;
          const r2 = p.size * 0.45;
          const px = p.x + Math.cos(a) * r1;
          const py = p.y + Math.sin(a) * r1;
          const ipx = p.x + Math.cos(ia) * r2;
          const ipy = p.y + Math.sin(ia) * r2;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
          ctx.lineTo(ipx, ipy);
        }
        ctx.closePath();
        ctx.fill();
      } else if (p.shape === 'petal') {
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size * 1.8, p.size, p.rotation || Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'glow') {
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'square') {
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  private renderFloatingTexts(ctx: CanvasRenderingContext2D): void {
    for (const ft of this.floatingTexts) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, ft.alpha);
      ctx.font = `bold ${Math.round(ft.size * ft.scale)}px "Geist Mono", monospace`;
      ctx.textAlign = 'center';

      // Dark drop shadow outline for crisp legibility
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3.5;
      ctx.strokeText(ft.text, ft.x, ft.y);

      // Neon Fill
      ctx.fillStyle = ft.color;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }

  // Particle Emitters
  public spawnExplosion(x: number, y: number, color: string = '#00dfd8', count: number = 22): void {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5.5 + 1.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.5 + 2,
        color,
        alpha: 1,
        decay: Math.random() * 0.03 + 0.02,
        gravity: 0.04,
        shape: 'spark'
      });
    }
    this.particles.push({
      x,
      y,
      vx: 0,
      vy: 0,
      size: 14,
      color,
      alpha: 0.85,
      decay: 0.05,
      shape: 'ring'
    });
  }

  public spawnSparks(x: number, y: number, color: string = '#ff0080', count: number = 12): void {
    for (let i = 0; i < count; i++) {
      const angle = (Math.random() - 0.5) * Math.PI;
      const speed = Math.random() * 4.5 + 2;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2.5 + 1.5,
        color,
        alpha: 1,
        decay: Math.random() * 0.04 + 0.03,
        shape: 'spark'
      });
    }
  }

  public spawnSmoke(x: number, y: number, color: string = 'rgba(120, 120, 140, 0.6)', count: number = 8): void {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 2 - 1,
        size: Math.random() * 6 + 4,
        color,
        alpha: 0.7,
        decay: Math.random() * 0.03 + 0.02,
        shape: 'smoke'
      });
    }
  }

  public triggerScreenShake(duration: number = 0.2, intensity: number = 8): void {
    this.shakeDuration = duration;
    this.shakeIntensity = intensity;
  }

  public triggerFlash(duration: number = 0.1, color: string = 'rgba(255, 255, 255, 0.4)'): void {
    this.flashDuration = duration;
    this.flashColor = color;
  }

  // Consistent High-Contrast Word Tag Renderer
  public drawWordBadge(
    ctx: CanvasRenderingContext2D,
    word: string,
    typedIndex: number,
    x: number,
    y: number,
    isTarget: boolean = false,
    accentColor: string = '#50e3c2',
    fontSize: number = 14
  ): void {
    const typed = word.substring(0, typedIndex);
    const remaining = word.substring(typedIndex);

    ctx.font = `600 ${fontSize}px "Geist Mono", monospace`;
    const wordWidth = ctx.measureText(word).width;
    const padX = 8;
    const padY = 5;
    const badgeW = wordWidth + padX * 2;
    const badgeH = fontSize + padY * 2;
    const bx = x - badgeW / 2;
    const by = y - badgeH / 2;

    ctx.save();
    // Shadow glow for active targeted word
    if (isTarget) {
      ctx.shadowColor = accentColor;
      ctx.shadowBlur = 10;
      ctx.fillStyle = 'rgba(10, 15, 25, 0.92)';
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
    } else {
      ctx.fillStyle = 'rgba(15, 18, 25, 0.82)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 1;
    }

    ctx.beginPath();
    ctx.roundRect(bx, by, badgeW, badgeH, 5);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Word Text
    let curX = bx + padX;
    const textY = by + fontSize + 1;

    if (typed.length > 0) {
      ctx.fillStyle = '#50e3c2';
      ctx.fillText(typed, curX, textY);
      curX += ctx.measureText(typed).width;
    }

    // Highlight the next immediate character
    if (isTarget && remaining.length > 0) {
      const nextChar = remaining[0];
      const rest = remaining.substring(1);

      ctx.fillStyle = '#f9cb28'; // glowing amber next key
      ctx.fillText(nextChar, curX, textY);
      curX += ctx.measureText(nextChar).width;

      ctx.fillStyle = '#ffffff';
      ctx.fillText(rest, curX, textY);
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.fillText(remaining, curX, textY);
    }

    ctx.restore();
  }

  // Scoring & Stats
  public recordKeystroke(correct: boolean): void {
    this.totalKeystrokes++;
    if (correct) {
      this.correctKeystrokes++;
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      this.score += 10 + Math.floor(this.streak / 5) * 5;

      // Streak milestones
      if (this.streak === 5) {
        this.addFloatingText(this.width / 2, this.height * 0.35, '5x STREAK!', '#00dfd8', 20);
      } else if (this.streak === 10) {
        this.addFloatingText(this.width / 2, this.height * 0.35, '🔥 10x COMBO!', '#f9cb28', 22);
      } else if (this.streak === 20) {
        this.addFloatingText(this.width / 2, this.height * 0.35, '⚡ 20x UNSTOPPABLE!', '#ff0080', 24);
      } else if (this.streak === 30) {
        this.addFloatingText(this.width / 2, this.height * 0.35, '👑 30x GODLIKE!', '#ff4d4d', 26);
      }
    } else {
      this.errors++;
      this.streak = 0;
      this.triggerScreenShake(0.15, 5);
      soundEngine.playError();
    }
  }

  public takeDamage(amount: number): void {
    this.health = Math.max(0, this.health - amount);
    this.triggerScreenShake(0.25, 10);
    this.triggerFlash(0.15, 'rgba(238, 0, 0, 0.35)');
    soundEngine.playError();

    if (this.health <= 0) {
      this.triggerGameOver();
    }
  }

  public triggerLevelClear(): void {
    if (this.currentLevel >= this.maxLevels) {
      this.triggerVictory();
      return;
    }
    soundEngine.playVictory();
    this.addFloatingText(this.width / 2, this.height * 0.45, '⭐ LEVEL COMPLETE! ⭐', '#f9cb28', 28);
    this.state = 'LEVEL_CLEARED';
    this.notifyStateChange();
  }

  public triggerGameOver(): void {
    soundEngine.playGameOver();
    this.state = 'GAME_OVER';
    this.notifyStateChange();
  }

  public triggerVictory(): void {
    soundEngine.playVictory();
    this.addFloatingText(this.width / 2, this.height * 0.45, '👑 CHAMPION VICTORY! 👑', '#f9cb28', 32);
    this.state = 'VICTORY';
    this.notifyStateChange();
  }

  public getStats(): GameStats {
    const currentPaused = this.state === 'PAUSED' && this.pauseStartTime > 0 ? (Date.now() - this.pauseStartTime) : 0;
    const activeDuration = (Date.now() - this.startTime - this.totalPausedDuration - currentPaused);
    const elapsedSec = Math.max(1, activeDuration / 1000);
    const elapsedMin = elapsedSec / 60;
    const grossWPM = Math.round((this.correctKeystrokes / 5) / elapsedMin) || 0;
    const netWPM = Math.max(0, Math.round(((this.correctKeystrokes - this.errors) / 5) / elapsedMin)) || 0;
    const accuracy = this.totalKeystrokes > 0 ? Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100) : 100;

    return {
      score: this.score,
      grossWPM,
      netWPM,
      accuracy,
      streak: this.streak,
      maxStreak: this.maxStreak,
      totalKeystrokes: this.totalKeystrokes,
      correctKeystrokes: this.correctKeystrokes,
      errors: this.errors,
      timeElapsedSec: Math.floor(elapsedSec),
      level: this.currentLevel,
      health: this.health,
      maxHealth: this.maxHealth
    };
  }

  private notifyStats(): void {
    if (this.onStatsChange) {
      this.onStatsChange(this.getStats());
    }
  }

  private notifyStateChange(): void {
    if (this.onStateChange) {
      this.onStateChange(this.state, this.getStats());
    }
  }
}
