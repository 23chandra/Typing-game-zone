// Game 9: Dungeon Escape (2D Platform Runner & Trap Dodger)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface DungeonTrap {
  id: number;
  x: number;
  type: 'spike' | 'blade' | 'lava' | 'wall';
  word: string;
  typedIndex: number;
  cleared: boolean;
  size: number;
}

export class DungeonEscapeGame extends BaseGame {
  private traps: DungeonTrap[] = [];
  private currentTarget: DungeonTrap | null = null;
  private runnerX: number = 110;
  private runnerY: number = 0;
  private runnerVY: number = 0;
  private isJumping: boolean = false;
  private worldScrollX: number = 0;
  private scrollSpeed: number = 120;
  private spawnDistanceTimer: number = 0;
  private nextId: number = 1;
  private trapsClearedCount: number = 0;
  private trapsGoal: number = 12;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'The Ancient Catacombs', description: 'Leap over floor spikes and crumbling brick traps.', targetWPM: 30, wordCount: 10, speed: 120 },
      { level: 2, name: 'Spike Gauntlet Corridor', description: 'Rapid series of swinging pendulums and spike pits.', targetWPM: 45, wordCount: 14, speed: 145 },
      { level: 3, name: 'Infernal Lava Caverns', description: 'Timing critical leaps across molten bubbling lava trenches.', targetWPM: 60, wordCount: 18, speed: 170 },
      { level: 4, name: 'Cursed Crypt Vaults', description: 'Collapsing dungeon walls and phantom traps.', targetWPM: 75, wordCount: 22, speed: 195 },
      { level: 5, name: 'Dragon Lair Collapse', description: 'Outrun the collapsing cavern ceiling and infernal breath!', targetWPM: 90, wordCount: 28, speed: 225 }
    ];
  }

  public override handleResize(): void {
    super.handleResize();
    this.runnerX = Math.max(50, Math.min(140, this.width * 0.16));
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.trapsGoal = lvl.wordCount;
    this.trapsClearedCount = 0;
    this.scrollSpeed = lvl.speed;
    this.spawnDistanceTimer = 1.0;
    this.traps = [];
    this.currentTarget = null;
    this.runnerX = Math.max(50, Math.min(140, this.width * 0.16));
    this.runnerY = this.height - 85;
    this.runnerVY = 0;
    this.isJumping = false;
    this.idleTime = 0;
  }

  private spawnTrap(): void {
    if (this.trapsClearedCount + this.traps.length >= this.trapsGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'fantasy' : 'hard';
    const word = getRandomWord(cat);
    const types: ('spike' | 'blade' | 'lava' | 'wall')[] = ['spike', 'blade', 'lava', 'wall'];
    const type = types[Math.floor(Math.random() * types.length)];

    this.traps.push({
      id: this.nextId++,
      x: this.width + 40,
      type,
      word,
      typedIndex: 0,
      cleared: false,
      size: 28
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.spawnSparks(this.currentTarget.x, this.height - 90, '#50e3c2', 4);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.clearTrap(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.traps
      .filter(t => !t.cleared && t.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => a.x - b.x)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.spawnSparks(match.x, this.height - 90, '#50e3c2', 4);

      if (match.word.length === 1) {
        this.clearTrap(match);
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

  private clearTrap(trap: DungeonTrap): void {
    trap.cleared = true;
    soundEngine.playChime();
    this.spawnExplosion(trap.x, this.height - 90, '#50e3c2', 18);
    this.addFloatingText(trap.x, this.height - 120, '✨ LEAP OVER TRAP!', '#50e3c2', 18);

    // Runner Jump
    this.runnerVY = -6.5;
    this.isJumping = true;

    this.trapsClearedCount++;
    this.wordsCompletedInLevel++;
    this.score += 65;

    if (this.trapsClearedCount >= this.trapsGoal && this.traps.every(t => t.cleared || t.x < this.runnerX)) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    this.worldScrollX += this.scrollSpeed * dt;

    // Jump Physics
    if (this.isJumping) {
      this.runnerY += this.runnerVY * dt * 60;
      this.runnerVY += 18 * dt; // Gravity
      if (this.runnerY >= this.height - 85) {
        this.runnerY = this.height - 85;
        this.isJumping = false;
        this.runnerVY = 0;
      }
    }

    // Spawn trap timer
    this.spawnDistanceTimer -= dt;
    if (this.spawnDistanceTimer <= 0) {
      this.spawnTrap();
      this.spawnDistanceTimer = Math.max(1.4, 3.2 - this.currentLevel * 0.3);
    }

    // Traps move left
    for (let i = this.traps.length - 1; i >= 0; i--) {
      const trap = this.traps[i];
      trap.x -= this.scrollSpeed * dt;

      // Trap collision
      if (trap.x <= this.runnerX + 25 && trap.x >= this.runnerX - 25 && !trap.cleared && !this.isJumping) {
        this.takeDamage(20);
        trap.cleared = true;
        this.spawnExplosion(trap.x, this.height - 90, '#ee0000', 25);
        this.addFloatingText(this.runnerX, this.height - 130, 'TRAP HIT! -20 HP', '#ee0000', 20);
        if (this.currentTarget === trap) this.currentTarget = null;
      }

      if (trap.x < -100) {
        this.traps.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    const floorY = this.height - 85;

    // 1. Dark Cavern Brick Background
    ctx.fillStyle = '#0a080d';
    ctx.fillRect(0, 0, this.width, this.height);

    // Stone Dungeon Masonry Wall
    ctx.fillStyle = '#171420';
    for (let r = 0; r < 8; r++) {
      const rowOffset = (r % 2) * 35 - (this.worldScrollX * 0.3) % 70;
      for (let c = -1; c < Math.ceil(this.width / 70) + 2; c++) {
        ctx.strokeRect(c * 70 + rowOffset, r * 30 + 40, 68, 28);
      }
    }

    // Flickering Wall Torches with warm lighting
    for (let t = 0; t < 4; t++) {
      const tx = ((t * 220 - this.worldScrollX * 0.5) % (this.width + 200)) - 50;
      if (tx > -50 && tx < this.width + 50) {
        // Torch Light Halo
        const flicker = Math.sin(this.idleTime * 12 + t) * 6;
        const torchHalo = ctx.createRadialGradient(tx, 120, 5, tx, 120, 80 + flicker);
        torchHalo.addColorStop(0, 'rgba(246, 173, 85, 0.45)');
        torchHalo.addColorStop(1, 'rgba(246, 173, 85, 0)');
        ctx.fillStyle = torchHalo;
        ctx.beginPath();
        ctx.arc(tx, 120, 80 + flicker, 0, Math.PI * 2);
        ctx.fill();

        // Torch Sconce
        ctx.fillStyle = '#4a5568';
        ctx.fillRect(tx - 3, 115, 6, 20);
        ctx.fillStyle = '#ed8936';
        ctx.beginPath();
        ctx.arc(tx, 112, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Dungeon Stone Floor
    ctx.fillStyle = '#231d30';
    ctx.fillRect(0, floorY, this.width, 85);
    ctx.fillStyle = '#50e3c2';
    ctx.fillRect(0, floorY, this.width, 3);

    // Floor Cobblestones
    ctx.fillStyle = '#171322';
    for (let cx = 0; cx < this.width + 50; cx += 45) {
      const gx = cx - (this.worldScrollX % 45);
      ctx.fillRect(gx, floorY + 12, 38, 16);
      ctx.fillRect(gx + 20, floorY + 36, 38, 16);
    }

    // Level HUD Progress
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText(`TRAPS CLEARED: ${this.trapsClearedCount} / ${this.trapsGoal}`, 30, 25);

    // 2. Render Traps
    for (const trap of this.traps) {
      this.renderDungeonTrap(ctx, trap, floorY);
    }

    // 3. Render Runner Hero
    this.renderRunnerHero(ctx, this.runnerX, this.runnerY);
  }

  private renderRunnerHero(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.save();
    const runCycle = Math.sin(this.idleTime * 14);
    const leg1 = runCycle * 14;
    const leg2 = -runCycle * 14;

    ctx.translate(x, y);

    // Explorer Legs
    ctx.fillStyle = '#4a5568';
    ctx.fillRect(-8 + leg1 * 0.4, -28, 8, 28);
    ctx.fillRect(2 + leg2 * 0.4, -28, 8, 28);

    // Leather Explorer Jacket (Brown)
    ctx.fillStyle = '#8b5a2b';
    ctx.fillRect(-12, -58, 24, 30);
    // Explorer Satchel Strap
    ctx.strokeStyle = '#d69e2e';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-10, -56);
    ctx.lineTo(10, -32);
    ctx.stroke();

    // Head
    ctx.fillStyle = '#fcd3a1';
    ctx.beginPath();
    ctx.arc(0, -68, 11, 0, Math.PI * 2);
    ctx.fill();

    // Fedora Explorer Hat
    ctx.fillStyle = '#5c3a21';
    ctx.fillRect(-18, -75, 36, 4);
    ctx.fillRect(-10, -85, 20, 10);

    // Lantern in Hand (Extended forward: 16)
    ctx.fillStyle = '#f6e05e';
    ctx.shadowColor = '#f6e05e';
    ctx.shadowBlur = 12;
    ctx.fillRect(14, -50, 10, 14);
    ctx.shadowBlur = 0;

    ctx.restore();
  }

  private renderDungeonTrap(ctx: CanvasRenderingContext2D, trap: DungeonTrap, floorY: number): void {
    ctx.save();
    const isTarget = this.currentTarget === trap;
    ctx.translate(trap.x, floorY);

    if (trap.type === 'spike') {
      // Floor Steel Spikes
      ctx.fillStyle = trap.cleared ? '#4a5568' : '#e53e3e';
      for (let s = 0; s < 3; s++) {
        ctx.beginPath();
        ctx.moveTo(-16 + s * 14, 0);
        ctx.lineTo(-9 + s * 14, -26);
        ctx.lineTo(-2 + s * 14, 0);
        ctx.closePath();
        ctx.fill();
      }
    } else if (trap.type === 'lava') {
      // Molten Lava Pit
      ctx.fillStyle = '#dd6b20';
      ctx.fillRect(-22, 0, 44, 25);
      ctx.fillStyle = '#f6e05e';
      ctx.fillRect(-16, 4, 32, 10);
    } else if (trap.type === 'blade') {
      // Pendulum Axe Blade
      ctx.strokeStyle = '#718096';
      ctx.lineWidth = 3;
      const swingAngle = Math.sin(this.idleTime * 6) * 0.4;
      ctx.save();
      ctx.translate(0, -90);
      ctx.rotate(swingAngle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 70);
      ctx.stroke();
      // Crescent Blade
      ctx.fillStyle = '#edf2f7';
      ctx.beginPath();
      ctx.arc(0, 70, 20, 0, Math.PI);
      ctx.fill();
      ctx.restore();
    } else {
      // Collapsing Stone Wall
      ctx.fillStyle = '#4a5568';
      ctx.fillRect(-14, -48, 28, 48);
    }

    ctx.restore();

    // Word Badge
    this.drawWordBadge(ctx, trap.word, trap.typedIndex, trap.x, floorY - 70, isTarget, '#50e3c2', 13);
  }
}
