// Game 2: Meteor Strike (Planetary Orbital Defense & Comet Interceptor)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface Meteor {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  word: string;
  typedIndex: number;
  color: string;
  trailColor: string;
  isSpecial: boolean;
  specialType?: 'bomb' | 'shield';
  rotation: number;
  vRot: number;
}

export class MeteorStrikeGame extends BaseGame {
  private meteors: Meteor[] = [];
  private currentTarget: Meteor | null = null;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.2;
  private nextId: number = 1;
  private earthRadius: number = 240;
  private earthY: number = 660;
  private wordsCompleted: number = 0;
  private wordsGoal: number = 12;
  private idleTime: number = 0;
  private shieldPulse: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Upper Atmosphere Entry', description: 'Single burning meteors entering Earth atmosphere. Type words to intercept.', targetWPM: 30, wordCount: 10, speed: 40 },
      { level: 2, name: 'Comet Cluster & Power Drops', description: 'Faster multi-angle burning comets and special Bomb/Shield power meteors.', targetWPM: 45, wordCount: 14, speed: 50 },
      { level: 3, name: 'Orbital Debris Storm', description: 'Dense cluster of high-velocity fragmentation meteorites.', targetWPM: 60, wordCount: 18, speed: 62 },
      { level: 4, name: 'Gravity Anomaly Inbound', description: 'Hyper-acceleration comet strikes testing planetary shield limits.', targetWPM: 75, wordCount: 22, speed: 75 },
      { level: 5, name: 'Extinction Titan Asteroid', description: 'Super-massive Extinction Titan meteor cluster with multi-word defense!', targetWPM: 90, wordCount: 28, speed: 88 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.wordsGoal = lvl.wordCount;
    this.wordsCompleted = 0;
    this.spawnInterval = Math.max(1.0, 2.8 - levelNumber * 0.35);
    this.spawnTimer = 0.5;
    this.meteors = [];
    this.currentTarget = null;
    this.idleTime = 0;
    this.shieldPulse = 0;
  }

  private spawnMeteor(): void {
    if (this.wordsCompleted + this.meteors.length >= this.wordsGoal) return;
    const isSpecial = Math.random() < 0.22;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'space';
    const word = getRandomWord(cat);

    const minMarginX = this.width < 460 ? 45 : 70;
    const maxMarginX = Math.max(minMarginX + 40, this.width - minMarginX);
    let startX = Math.random() * (maxMarginX - minMarginX) + minMarginX;
    let attempts = 0;
    while (attempts < 10 && this.meteors.some(m => Math.abs(m.x - startX) < 55 && m.y < 120)) {
      startX = Math.random() * (maxMarginX - minMarginX) + minMarginX;
      attempts++;
    }

    const targetX = this.width / 2 + (Math.random() - 0.5) * Math.min(260, this.width * 0.7);
    const targetY = this.height;

    const angle = Math.atan2(targetY, targetX - startX);
    const speed = (32 + this.currentLevel * 10) * (Math.random() * 0.3 + 0.85);

    this.meteors.push({
      id: this.nextId++,
      x: startX,
      y: -25,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: Math.random() * 8 + 18,
      word,
      typedIndex: 0,
      color: isSpecial ? '#f9cb28' : this.currentLevel >= 4 ? '#ff0080' : '#ff4d4d',
      trailColor: isSpecial ? '#ffefcf' : '#ff884d',
      isSpecial,
      specialType: isSpecial ? (Math.random() < 0.5 ? 'bomb' : 'shield') : undefined,
      rotation: 0,
      vRot: (Math.random() - 0.5) * 6
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.spawnSparks(this.currentTarget.x, this.currentTarget.y, '#50e3c2', 5);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.destroyMeteor(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.meteors
      .filter(m => m.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => b.y - a.y)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.spawnSparks(match.x, match.y, '#50e3c2', 5);

      if (match.word.length === 1) {
        this.destroyMeteor(match);
        this.currentTarget = null;
      }
    } else {
      this.recordKeystroke(false);
    }
  }

  public handleBackspaceKey(): void {
    if (this.currentTarget && this.currentTarget.typedIndex > 0) {
      this.currentTarget.typedIndex--;
      soundEngine.playKey();
    }
  }

  private destroyMeteor(meteor: Meteor): void {
    soundEngine.playExplosion();
    this.spawnExplosion(meteor.x, meteor.y, meteor.color, 28);
    this.triggerScreenShake(0.2, 8);

    if (meteor.isSpecial) {
      if (meteor.specialType === 'bomb') {
        this.addFloatingText(meteor.x, meteor.y - 30, '💣 ORBITAL BOMB! CLEARED ALL', '#f9cb28', 24);
        for (const m of this.meteors) {
          if (m !== meteor) {
            this.spawnExplosion(m.x, m.y, '#f9cb28', 18);
            this.wordsCompleted++;
          }
        }
        this.meteors = [];
        this.triggerFlash(0.2, 'rgba(249, 203, 40, 0.4)');
      } else if (meteor.specialType === 'shield') {
        this.health = Math.min(this.maxHealth, this.health + 30);
        this.addFloatingText(meteor.x, meteor.y - 30, '🛡️ SHIELD RECHARGED +30 HP', '#50e3c2', 22);
        this.triggerFlash(0.15, 'rgba(80, 227, 194, 0.4)');
      }
    } else {
      this.addFloatingText(meteor.x, meteor.y - 25, '+50 INTERCEPTED', '#50e3c2', 18);
    }

    const idx = this.meteors.indexOf(meteor);
    if (idx !== -1) this.meteors.splice(idx, 1);

    this.wordsCompleted++;
    this.wordsCompletedInLevel++;
    this.score += 50;

    if (this.wordsCompleted >= this.wordsGoal && this.meteors.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    this.shieldPulse += dt * 3;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnMeteor();
      this.spawnTimer = this.spawnInterval;
    }

    for (let i = this.meteors.length - 1; i >= 0; i--) {
      const m = this.meteors[i];
      m.x += m.vx * dt;
      m.y += m.vy * dt;
      m.rotation += m.vRot * dt;

      // Fiery Comet Tail Particles
      if (Math.random() < 0.75) {
        this.particles.push({
          x: m.x + (Math.random() - 0.5) * 10,
          y: m.y - m.radius * 0.6,
          vx: (Math.random() - 0.5) * 25,
          vy: -Math.random() * 35 - 15,
          size: Math.random() * 4 + 2,
          color: m.trailColor,
          alpha: 0.8,
          decay: 0.05,
          shape: 'smoke'
        });
      }

      // Atmospheric Shield Impact Check
      const distToCenter = Math.hypot(m.x - this.width / 2, m.y - this.earthY);
      if (distToCenter <= this.earthRadius + 50 || m.y >= this.height - 40) {
        this.takeDamage(20);
        this.spawnExplosion(m.x, m.y, '#ee0000', 32);
        this.addFloatingText(m.x, m.y - 25, 'SURFACE IMPACT! -20 HP', '#ee0000', 20);
        if (this.currentTarget === m) this.currentTarget = null;
        this.meteors.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Starry Space Backdrop
    ctx.fillStyle = '#060911';
    ctx.fillRect(0, 0, this.width, this.height);

    // 2. Earth Atmosphere & Planetary Horizon (Bottom Center)
    ctx.save();
    // Glowing Atmospheric Aura
    const atmo = ctx.createRadialGradient(
      this.width / 2,
      this.earthY,
      this.earthRadius,
      this.width / 2,
      this.earthY,
      this.earthRadius + 60
    );
    atmo.addColorStop(0, 'rgba(0, 223, 216, 0.4)');
    atmo.addColorStop(0.5, 'rgba(0, 112, 243, 0.2)');
    atmo.addColorStop(1, 'rgba(0, 112, 243, 0)');
    ctx.fillStyle = atmo;
    ctx.beginPath();
    ctx.arc(this.width / 2, this.earthY, this.earthRadius + 60, 0, Math.PI * 2);
    ctx.fill();

    // Planet Earth Globe
    const earthGrad = ctx.createRadialGradient(
      this.width / 2 - 50,
      this.earthY - 100,
      20,
      this.width / 2,
      this.earthY,
      this.earthRadius
    );
    earthGrad.addColorStop(0, '#0070f3');
    earthGrad.addColorStop(0.7, '#003e8a');
    earthGrad.addColorStop(1, '#001433');
    ctx.fillStyle = earthGrad;
    ctx.beginPath();
    ctx.arc(this.width / 2, this.earthY, this.earthRadius, 0, Math.PI * 2);
    ctx.fill();

    // Earth Continents (Green shading on sphere)
    ctx.fillStyle = '#38a169';
    ctx.beginPath();
    ctx.ellipse(this.width / 2 - 60, this.earthY - 150, 45, 25, 0.3, 0, Math.PI * 2);
    ctx.ellipse(this.width / 2 + 70, this.earthY - 170, 55, 30, -0.2, 0, Math.PI * 2);
    ctx.fill();

    // Hexagonal Defense Shield Grid
    ctx.strokeStyle = `rgba(80, 227, 194, ${0.4 + Math.sin(this.shieldPulse) * 0.15})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.arc(this.width / 2, this.earthY, this.earthRadius + 45, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText(`METEORS INTERCEPTED: ${this.wordsCompleted} / ${this.wordsGoal}`, 30, 25);

    // 3. Render Falling Meteors & Burning Fireballs
    for (const meteor of this.meteors) {
      this.renderMeteor(ctx, meteor);
    }
  }

  private renderMeteor(ctx: CanvasRenderingContext2D, m: Meteor): void {
    ctx.save();
    const isTarget = this.currentTarget === m;
    ctx.translate(m.x, m.y);
    ctx.rotate(m.rotation);

    // Outer Fire Glow
    ctx.shadowColor = m.trailColor;
    ctx.shadowBlur = isTarget ? 24 : 14;

    // Fiery Core
    ctx.fillStyle = m.color;
    ctx.beginPath();
    ctx.arc(0, 0, m.radius, 0, Math.PI * 2);
    ctx.fill();

    // Molten Inner Crust Cracks
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, 0, m.radius * 0.45, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Special Drop Icon (Bomb / Shield)
    if (m.isSpecial) {
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(m.specialType === 'bomb' ? '💣' : '🛡️', 0, 5);
    }

    ctx.restore();

    // Word Badge
    this.drawWordBadge(ctx, m.word, m.typedIndex, m.x, m.y + m.radius + 16, isTarget, '#50e3c2', 13);
  }
}
