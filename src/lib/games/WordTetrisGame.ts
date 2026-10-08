// Game 17: Word Tetris (Falling Block Word Matcher & Neon Matrix)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface FallingBlock {
  id: number;
  col: number; // 0 to 4
  x: number;
  y: number;
  vy: number;
  word: string;
  typedIndex: number;
  color: string;
  isLanded: boolean;
}

export class WordTetrisGame extends BaseGame {
  private blocks: FallingBlock[] = [];
  private currentTarget: FallingBlock | null = null;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.2;
  private nextId: number = 1;
  private clearedCount: number = 0;
  private clearGoal: number = 12;
  private colCount: number = 5;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Tetra Matrix Intro', description: 'Clear falling 3-4 letter word tetrominoes before they hit the base.', targetWPM: 30, wordCount: 10, speed: 30 },
      { level: 2, name: 'Dual Drop Cadence', description: 'Faster descent rates and alternating column drops.', targetWPM: 45, wordCount: 14, speed: 42 },
      { level: 3, name: 'Color Bomb Blitz', description: 'Multi-column simultaneous drops requiring quick priority targeting.', targetWPM: 60, wordCount: 18, speed: 55 },
      { level: 4, name: 'Danger Ceiling Overload', description: 'High gravity drop speed with ceiling alarm hazards.', targetWPM: 75, wordCount: 22, speed: 68 },
      { level: 5, name: 'Hyper Gravity Tetramania', description: 'Ultimate word tetris master challenge with blitz drop rates!', targetWPM: 90, wordCount: 28, speed: 82 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.clearGoal = lvl.wordCount;
    this.clearedCount = 0;
    this.spawnInterval = Math.max(1.1, 2.6 - levelNumber * 0.3);
    this.spawnTimer = 0.5;
    this.blocks = [];
    this.currentTarget = null;
    this.idleTime = 0;
  }

  public get activeColCount(): number {
    return this.width < 450 ? 3 : this.width < 650 ? 4 : 6;
  }

  public get colPadX(): number {
    return this.width < 450 ? 12 : 36;
  }

  public get colWidth(): number {
    return (this.width - this.colPadX * 2) / this.activeColCount;
  }

  public get groundY(): number {
    return this.height - Math.min(65, this.height * 0.16);
  }

  private spawnBlock(): void {
    if (this.clearedCount + this.blocks.length >= this.clearGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'hard';
    const word = getRandomWord(cat, this.lang);
    const col = Math.floor(Math.random() * this.activeColCount);
    const x = this.colPadX + col * this.colWidth + this.colWidth / 2;
    const speed = (30 + this.currentLevel * 9) * (Math.random() * 0.25 + 0.9) * this.speedScale;

    const colors = ['#00dfd8', '#ff0080', '#f9cb28', '#7928ca', '#0070f3'];

    this.blocks.push({
      id: this.nextId++,
      col,
      x,
      y: -25,
      vy: speed,
      word,
      typedIndex: 0,
      color: colors[col % colors.length],
      isLanded: false
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey(char === ' ');

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex];
      if (next && this.matchesChar(char, next)) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.spawnSparks(this.currentTarget.x, this.currentTarget.y, '#50e3c2', 5);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.lastWordCompletedTime = Date.now();
          this.destroyBlock(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        if (char === ' ' && (this.currentTarget.typedIndex === 0 || Date.now() - this.lastWordCompletedTime < 1200)) {
          return;
        }
        this.recordKeystroke(false);
      }
      return;
    }

    if (char === ' ') return;

    const match = this.blocks
      .filter(b => !b.isLanded && this.matchesFirstChar(b.word, char))
      .sort((a, b) => b.y - a.y)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.spawnSparks(match.x, match.y, '#50e3c2', 5);

      if (match.word.length === 1) {
        this.lastWordCompletedTime = Date.now();
        this.destroyBlock(match);
        this.currentTarget = null;
      }
    } else {
      this.recordKeystroke(false);
    }
  }

  public handleBackspaceKey(): void {
    if (this.currentTarget && this.currentTarget.typedIndex > 0) {
      this.currentTarget.typedIndex--;
      if (this.currentTarget.typedIndex === 0) {
        this.currentTarget = null;
      }
      soundEngine.playKey();
    }
  }

  private destroyBlock(block: FallingBlock): void {
    this.lastWordCompletedTime = Date.now();
    soundEngine.playChime();
    this.spawnExplosion(block.x, block.y, block.color, 26);
    this.triggerScreenShake(0.14, 6);
    this.addFloatingText(block.x, block.y - 25, '+70 BLOCK CLEARED!', '#50e3c2', 20);

    const idx = this.blocks.indexOf(block);
    if (idx !== -1) this.blocks.splice(idx, 1);

    this.clearedCount++;
    this.wordsCompletedInLevel++;
    this.score += 70;

    if (this.clearedCount >= this.clearGoal) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnBlock();
      this.spawnTimer = this.spawnInterval;
    }

    const groundY = this.groundY;

    for (let i = this.blocks.length - 1; i >= 0; i--) {
      const b = this.blocks[i];
      b.y += b.vy * dt;

      if (b.y >= groundY) {
        this.takeDamage(20);
        this.spawnExplosion(b.x, b.y, '#ee0000', 25);
        this.addFloatingText(b.x, groundY - 30, 'GRID IMPACT! -20 HP', '#ee0000', 18);
        if (this.currentTarget === b) this.currentTarget = null;
        this.blocks.splice(i, 1);
        if (this.clearedCount >= this.clearGoal && this.blocks.length === 0) {
          this.triggerLevelClear();
        }
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Neon Tetris Matrix Background
    ctx.fillStyle = '#080612';
    ctx.fillRect(0, 0, this.width, this.height);

    const colWidth = this.colWidth;
    const startX = this.colPadX;
    const groundY = this.groundY;
    const totalW = this.width - startX * 2;

    // Neon Column Grids
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1.2;
    for (let c = 0; c <= this.activeColCount; c++) {
      const gx = startX + c * colWidth;
      ctx.beginPath();
      ctx.moveTo(gx, 35);
      ctx.lineTo(gx, groundY);
      ctx.stroke();
    }

    // Laser Ground Defense Baseline
    ctx.fillStyle = '#ff0080';
    ctx.shadowColor = '#ff0080';
    ctx.shadowBlur = 12;
    ctx.fillRect(startX, groundY, totalW, 4);
    ctx.shadowBlur = 0;

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText(`TETROMINOES CLEARED: ${this.clearedCount} / ${this.clearGoal}`, 30, 25);

    // 2. Render Falling Neon Word Blocks
    for (const b of this.blocks) {
      this.renderTetrisBlock(ctx, b, colWidth);
    }
  }

  private renderTetrisBlock(ctx: CanvasRenderingContext2D, b: FallingBlock, colWidth: number): void {
    ctx.save();
    const isTarget = this.currentTarget === b;
    const blockW = colWidth - 14;
    const blockH = 36;

    ctx.translate(b.x, b.y);

    // Block Bevel Shadow
    ctx.fillStyle = '#0a0d14';
    ctx.fillRect(-blockW / 2, -blockH / 2 + 4, blockW, blockH);

    // Block Front Face
    ctx.fillStyle = isTarget ? 'rgba(0, 223, 216, 0.3)' : 'rgba(20, 20, 35, 0.9)';
    ctx.strokeStyle = isTarget ? '#50e3c2' : b.color;
    ctx.lineWidth = isTarget ? 2.5 : 1.5;
    ctx.shadowColor = isTarget ? '#50e3c2' : b.color;
    ctx.shadowBlur = isTarget ? 18 : 8;

    ctx.beginPath();
    ctx.roundRect(-blockW / 2, -blockH / 2, blockW, blockH, 5);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.restore();

    // Word Badge centered inside block
    this.drawWordBadge(ctx, b.word, b.typedIndex, b.x, b.y, isTarget, '#50e3c2', 13);
  }
}
