// Game 20: Ghost Buster (Haunted Manor & Proton Beam Vacuum Containment)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface Ghost {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  word: string;
  typedIndex: number;
  type: 'poltergeist' | 'specter' | 'banshee' | 'slimer';
  color: string;
  size: number;
  isTrapped: boolean;
  trapProgress: number;
  wavePhase: number;
}

export class GhostBusterGame extends BaseGame {
  private ghosts: Ghost[] = [];
  private currentTarget: Ghost | null = null;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.4;
  private nextId: number = 1;
  private capturedCount: number = 0;
  private captureGoal: number = 12;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Library Reading Hall', description: 'Floating poltergeists drifting between dusty bookshelves. Lock on with proton beam.', targetWPM: 30, wordCount: 10, speed: 28 },
      { level: 2, name: 'Ballroom Hall of Mirrors', description: 'Fast translucent specters phasing across grand chandeliers.', targetWPM: 45, wordCount: 14, speed: 38 },
      { level: 3, name: 'Attic of Lost Relics', description: 'Shrieking banshees with erratic floating trajectories.', targetWPM: 60, wordCount: 18, speed: 48 },
      { level: 4, name: 'Ectoplasm Catacombs', description: 'Toxic slime ghosts deploying slime trail hazards.', targetWPM: 75, wordCount: 22, speed: 60 },
      { level: 5, name: 'Gozerian Portal Chamber', description: 'Contain the Colossal Ancient Ghost God before total dimensional breach!', targetWPM: 90, wordCount: 28, speed: 75, bossHealth: 8 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.captureGoal = lvl.wordCount;
    this.capturedCount = 0;
    this.spawnInterval = Math.max(1.1, 2.7 - levelNumber * 0.35);
    this.spawnTimer = 0.4;
    this.ghosts = [];
    this.currentTarget = null;
    this.idleTime = 0;
  }

  private spawnGhost(): void {
    if (this.capturedCount + this.ghosts.length >= this.captureGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'fantasy';
    const word = getRandomWord(cat);
    const types: ('poltergeist' | 'specter' | 'banshee' | 'slimer')[] = ['poltergeist', 'specter', 'banshee', 'slimer'];
    const type = types[Math.floor(Math.random() * types.length)];
    const speed = (25 + this.currentLevel * 7) * (Math.random() * 0.3 + 0.85);

    this.ghosts.push({
      id: this.nextId++,
      x: Math.random() * (this.width - 240) + 120,
      y: -30,
      vx: (Math.random() - 0.5) * 35,
      vy: speed,
      word,
      typedIndex: 0,
      type,
      color: type === 'slimer' ? '#48bb78' : type === 'banshee' ? '#ff0080' : type === 'specter' ? '#00dfd8' : '#e2e8f0',
      size: type === 'slimer' ? 28 : 22,
      isTrapped: false,
      trapProgress: 0,
      wavePhase: Math.random() * Math.PI * 2
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        soundEngine.playLaser();
        this.spawnSparks(this.currentTarget.x, this.currentTarget.y, '#50e3c2', 5);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.captureGhost(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.ghosts
      .filter(g => !g.isTrapped && g.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => b.y - a.y)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      soundEngine.playLaser();
      this.spawnSparks(match.x, match.y, '#50e3c2', 5);

      if (match.word.length === 1) {
        this.captureGhost(match);
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

  private captureGhost(ghost: Ghost): void {
    ghost.isTrapped = true;
    soundEngine.playVictory();
    this.spawnExplosion(ghost.x, ghost.y, '#f9cb28', 26);
    this.triggerScreenShake(0.14, 6);
    this.addFloatingText(ghost.x, ghost.y - 25, '👻 GHOST CONTAINED! +80', '#f9cb28', 20);

    const idx = this.ghosts.indexOf(ghost);
    if (idx !== -1) this.ghosts.splice(idx, 1);

    this.capturedCount++;
    this.wordsCompletedInLevel++;
    this.score += 80;

    if (this.capturedCount >= this.captureGoal && this.ghosts.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnGhost();
      this.spawnTimer = this.spawnInterval;
    }

    // Ghost floating physics
    for (let i = this.ghosts.length - 1; i >= 0; i--) {
      const g = this.ghosts[i];
      g.y += g.vy * dt;
      g.x += g.vx * dt + Math.sin(g.wavePhase + this.idleTime * 4) * 20 * dt;
      g.wavePhase += dt * 3;

      if (g.x < 80 || g.x > this.width - 80) g.vx *= -1;

      if (g.y >= this.height - 75) {
        this.takeDamage(20);
        this.spawnExplosion(g.x, g.y, '#ee0000', 25);
        this.addFloatingText(g.x, this.height - 100, 'ECTO SPOOK! -20 HP', '#ee0000', 18);
        if (this.currentTarget === g) this.currentTarget = null;
        this.ghosts.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Spooky Haunted Manor Background
    const manor = ctx.createLinearGradient(0, 0, 0, this.height);
    manor.addColorStop(0, '#0a0514');
    manor.addColorStop(0.6, '#180e2b');
    manor.addColorStop(1, '#23153d');
    ctx.fillStyle = manor;
    ctx.fillRect(0, 0, this.width, this.height);

    // Moonlit Gothic Manor Windows in background
    [100, this.width - 100].forEach(wx => {
      ctx.fillStyle = '#00dfd8';
      ctx.shadowColor = '#00dfd8';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(wx, 90, 25, Math.PI, 0);
      ctx.fillRect(wx - 25, 90, 50, 45);
      ctx.fill();
      ctx.shadowBlur = 0;
      // Window panes
      ctx.fillStyle = '#0a0514';
      ctx.fillRect(wx - 2, 70, 4, 65);
      ctx.fillRect(wx - 25, 95, 50, 4);
    });

    // Floor
    const floorY = this.height - 75;
    ctx.fillStyle = '#140c24';
    ctx.fillRect(0, floorY, this.width, 75);
    ctx.fillStyle = '#7928ca';
    ctx.fillRect(0, floorY, this.width, 3);

    // Ghost Trap Device on the floor center
    const trapX = this.width / 2;
    ctx.fillStyle = '#f9cb28';
    ctx.fillRect(trapX - 25, floorY - 14, 50, 14);
    ctx.fillStyle = '#000000';
    ctx.fillRect(trapX - 18, floorY - 12, 36, 10);
    // Glowing Trap Beacon
    ctx.fillStyle = '#00dfd8';
    ctx.shadowColor = '#00dfd8';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(trapX, floorY - 15, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText(`GHOSTS CONTAINED: ${this.capturedCount} / ${this.captureGoal}`, 30, 25);

    // 2. High-Voltage Proton Stream (Zig-Zag Lightning Beam)
    if (this.currentTarget) {
      const gx = this.currentTarget.x;
      const gy = this.currentTarget.y;

      ctx.save();
      ctx.strokeStyle = '#ff0080';
      ctx.lineWidth = 5;
      ctx.shadowColor = '#ff0080';
      ctx.shadowBlur = 18;

      ctx.beginPath();
      const segments = 12;
      for (let s = 0; s <= segments; s++) {
        const t = s / segments;
        const bx = trapX + (gx - trapX) * t + (s % 2 === 0 ? 1 : -1) * (Math.random() * 12 + 6);
        const by = floorY - 15 + (gy - (floorY - 15)) * t;
        if (s === 0) ctx.moveTo(trapX, floorY - 15);
        else ctx.lineTo(bx, by);
      }
      ctx.stroke();

      // White Lightning Core
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    // 3. Render Floating Ectoplasm Ghosts
    for (const ghost of this.ghosts) {
      this.renderGhost(ctx, ghost);
    }
  }

  private renderGhost(ctx: CanvasRenderingContext2D, g: Ghost): void {
    ctx.save();
    const isTarget = this.currentTarget === g;
    const tailWave = Math.sin(g.wavePhase + this.idleTime * 6) * 6;

    ctx.translate(g.x, g.y);
    ctx.fillStyle = g.color;
    ctx.shadowColor = g.color;
    ctx.shadowBlur = isTarget ? 24 : 12;
    ctx.globalAlpha = 0.88;

    // Ghost Head & Undulating Sheet Body
    ctx.beginPath();
    ctx.arc(0, -10, g.size, Math.PI, 0); // Rounded top
    // Wavy skirt tail
    ctx.lineTo(g.size, 16);
    ctx.quadraticCurveTo(g.size * 0.5, 24 + tailWave, 0, 16);
    ctx.quadraticCurveTo(-g.size * 0.5, 24 - tailWave, -g.size, 16);
    ctx.closePath();
    ctx.fill();

    // Spooky Glowing Eyes
    ctx.fillStyle = '#0a0514';
    ctx.beginPath();
    ctx.arc(-7, -10, 4.5, 0, Math.PI * 2);
    ctx.arc(7, -10, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Small glowing pupils
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-6, -11, 2, 0, Math.PI * 2);
    ctx.arc(8, -11, 2, 0, Math.PI * 2);
    ctx.fill();

    // Open "O" mouth
    ctx.fillStyle = '#0a0514';
    ctx.beginPath();
    ctx.ellipse(0, 0, 4, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1.0;
    ctx.restore();

    // Word Badge
    this.drawWordBadge(ctx, g.word, g.typedIndex, g.x, g.y + g.size + 18, isTarget, '#50e3c2', 13);
  }
}
