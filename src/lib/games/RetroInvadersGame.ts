// Game 3: Retro 8-Bit Invaders (Classic CRT Pixel Arcade March)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface PixelInvader {
  id: number;
  row: number;
  col: number;
  x: number;
  y: number;
  word: string;
  typedIndex: number;
  spriteFrame: number;
  color: string;
}

export class RetroInvadersGame extends BaseGame {
  private invaders: PixelInvader[] = [];
  private currentTarget: PixelInvader | null = null;
  private marchDir: number = 1;
  private marchSpeed: number = 25;
  private stepTimer: number = 0;
  private stepInterval: number = 0.6;
  private dropDistance: number = 18;
  private nextId: number = 1;
  private wordsKilled: number = 0;
  private wordsGoal: number = 12;
  private ufo: { x: number; y: number; word: string; typedIndex: number; active: boolean } | null = null;
  private ufoTimer: number = 8;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Sector Alpha - Pixel March', description: 'Classic alien formation march. Type words to blast 8-bit invaders.', targetWPM: 30, wordCount: 9, speed: 20 },
      { level: 2, name: 'Accelerated Fleet Cadence', description: 'Invaders step faster and drop down more aggressively.', targetWPM: 45, wordCount: 12, speed: 30 },
      { level: 3, name: 'Mystery UFO Sector Scan', description: 'High value mystery flying saucers pass across the top.', targetWPM: 60, wordCount: 15, speed: 40 },
      { level: 4, name: 'Hyper Pixel Swarm', description: 'Dense multi-row formation with fast dropping cadence.', targetWPM: 75, wordCount: 18, speed: 50 },
      { level: 5, name: 'Invader Overlord Matrix', description: 'Final wave with ruthless step velocity and mystery UFO swarms!', targetWPM: 90, wordCount: 22, speed: 65 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.wordsGoal = lvl.wordCount;
    this.wordsKilled = 0;
    this.marchSpeed = lvl.speed;
    this.stepInterval = Math.max(0.25, 0.65 - levelNumber * 0.08);
    this.invaders = [];
    this.currentTarget = null;
    this.ufo = null;
    this.ufoTimer = 8;
    this.idleTime = 0;

    const rows = Math.min(4, Math.floor(lvl.wordCount / 3));
    const spacingX = (this.width - 220) / 3;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < 3; c++) {
        if (this.invaders.length >= lvl.wordCount) break;
        const cat = levelNumber === 1 ? 'easy' : levelNumber <= 3 ? 'medium' : 'space';
        const word = getRandomWord(cat);
        this.invaders.push({
          id: this.nextId++,
          row: r,
          col: c,
          x: 110 + c * spacingX,
          y: 75 + r * 65,
          word,
          typedIndex: 0,
          spriteFrame: 0,
          color: r === 0 ? '#ff0080' : r === 1 ? '#00dfd8' : '#f9cb28'
        });
      }
    }
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    // Check UFO priority if targeted
    if (this.ufo && this.ufo.active && this.currentTarget?.id === -99) {
      const next = this.ufo.word[this.ufo.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.ufo.typedIndex++;
        this.recordKeystroke(true);
        this.spawnSparks(this.ufo.x, this.ufo.y, '#f9cb28', 6);

        if (this.ufo.typedIndex >= this.ufo.word.length) {
          this.destroyUFO();
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.spawnSparks(this.currentTarget.x, this.currentTarget.y, '#50e3c2', 4);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.destroyInvader(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    // Match UFO first if first letter matches
    if (this.ufo && this.ufo.active && this.ufo.word[0].toLowerCase() === char.toLowerCase()) {
      this.ufo.typedIndex = 1;
      this.currentTarget = {
        id: -99,
        row: 0,
        col: 0,
        x: this.ufo.x,
        y: this.ufo.y,
        word: this.ufo.word,
        typedIndex: 1,
        spriteFrame: 0,
        color: '#f9cb28'
      };
      this.recordKeystroke(true);
      if (this.ufo.word.length === 1) this.destroyUFO();
      return;
    }

    const match = this.invaders
      .filter(i => i.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => b.y - a.y)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.spawnSparks(match.x, match.y, '#50e3c2', 4);

      if (match.word.length === 1) {
        this.destroyInvader(match);
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

  private destroyInvader(invader: PixelInvader): void {
    soundEngine.playExplosion();
    this.spawnExplosion(invader.x, invader.y, invader.color, 22);
    this.triggerScreenShake(0.12, 5);
    this.addFloatingText(invader.x, invader.y - 20, '+60 INVADER DESTROYED', '#50e3c2', 18);

    const idx = this.invaders.indexOf(invader);
    if (idx !== -1) this.invaders.splice(idx, 1);

    this.wordsKilled++;
    this.wordsCompletedInLevel++;
    this.score += 60;
    this.stepInterval = Math.max(0.12, this.stepInterval * 0.94); // Speed up as enemies die!

    if (this.invaders.length === 0) {
      this.triggerLevelClear();
    }
  }

  private destroyUFO(): void {
    if (this.ufo) {
      soundEngine.playVictory();
      this.spawnExplosion(this.ufo.x, this.ufo.y, '#f9cb28', 35);
      this.triggerFlash(0.15, 'rgba(249, 203, 40, 0.4)');
      this.addFloatingText(this.ufo.x, this.ufo.y - 25, '🛸 MYSTERY UFO! +250 BONUS', '#f9cb28', 24);
      this.score += 250;
      this.ufo.active = false;
      this.currentTarget = null;
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    // UFO Flyby Cycle
    this.ufoTimer -= dt;
    if (this.ufoTimer <= 0 && (!this.ufo || !this.ufo.active)) {
      this.ufo = {
        x: -60,
        y: 42,
        word: getRandomWord('space'),
        typedIndex: 0,
        active: true
      };
      this.ufoTimer = Math.random() * 12 + 10;
    }

    if (this.ufo && this.ufo.active) {
      this.ufo.x += 80 * dt;
      if (this.ufo.x > this.width + 60) {
        this.ufo.active = false;
        if (this.currentTarget?.id === -99) this.currentTarget = null;
      }
    }

    // Formation March Steps
    this.stepTimer -= dt;
    if (this.stepTimer <= 0) {
      this.stepTimer = this.stepInterval;
      soundEngine.playKey();

      let hitWall = false;
      for (const inv of this.invaders) {
        inv.x += this.marchDir * 18;
        inv.spriteFrame = inv.spriteFrame === 0 ? 1 : 0;
        if (inv.x > this.width - 70 || inv.x < 70) {
          hitWall = true;
        }
      }

      if (hitWall) {
        this.marchDir *= -1;
        for (const inv of this.invaders) {
          inv.y += this.dropDistance;
          if (inv.y >= this.height - 75) {
            this.takeDamage(30);
            this.destroyInvader(inv);
          }
        }
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Retro CRT Arcade Screen Background
    ctx.fillStyle = '#040608';
    ctx.fillRect(0, 0, this.width, this.height);

    // CRT Scanline Pattern
    ctx.fillStyle = 'rgba(0, 255, 128, 0.03)';
    for (let y = 0; y < this.height; y += 4) {
      ctx.fillRect(0, y, this.width, 1.5);
    }

    // Laser Defense Base Floor Line
    ctx.fillStyle = '#50e3c2';
    ctx.fillRect(0, this.height - 35, this.width, 3);

    // Green Defense Bunker Shields at bottom
    [100, 260, 420, 580, 700].forEach(bx => {
      ctx.fillStyle = '#48bb78';
      ctx.fillRect(bx - 20, this.height - 60, 40, 22);
      ctx.fillStyle = '#040608';
      ctx.fillRect(bx - 8, this.height - 48, 16, 12);
    });

    // 2. Render Mystery Flying Saucer UFO
    if (this.ufo && this.ufo.active) {
      ctx.save();
      const isUfoTarget = this.currentTarget?.id === -99;
      ctx.translate(this.ufo.x, this.ufo.y);

      // UFO Saucer Hull (Red & Amber)
      ctx.fillStyle = '#ff0080';
      ctx.shadowColor = '#f9cb28';
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.ellipse(0, 0, 24, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Pilot Glass Dome
      ctx.fillStyle = '#f9cb28';
      ctx.beginPath();
      ctx.arc(0, -5, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // UFO Word Badge
      this.drawWordBadge(ctx, this.ufo.word, this.ufo.typedIndex, this.ufo.x, this.ufo.y + 24, isUfoTarget, '#f9cb28', 13);
    }

    // 3. Render 8-Bit Pixel Invaders
    for (const inv of this.invaders) {
      this.renderPixelInvader(ctx, inv);
    }
  }

  private renderPixelInvader(ctx: CanvasRenderingContext2D, inv: PixelInvader): void {
    ctx.save();
    const isTarget = this.currentTarget === inv;
    ctx.fillStyle = inv.color;
    ctx.shadowColor = inv.color;
    ctx.shadowBlur = isTarget ? 14 : 5;

    // Classic 8x8 Pixel Bitmaps
    const frame0 = [
      [2,0],[5,0],[3,1],[4,1],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],
      [0,3],[1,3],[3,3],[4,3],[6,3],[7,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],
      [2,5],[5,5],[1,6],[6,6],[0,7],[7,7]
    ];
    const frame1 = [
      [2,0],[5,0],[0,1],[7,1],[0,2],[2,2],[3,2],[4,2],[5,2],[7,2],
      [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],
      [2,5],[5,5],[0,6],[2,6],[5,6],[7,6]
    ];

    const pixels = inv.spriteFrame === 0 ? frame0 : frame1;
    const pxSize = 3;
    const startX = inv.x - 12;
    const startY = inv.y - 12;

    for (const [px, py] of pixels) {
      ctx.fillRect(startX + px * pxSize, startY + py * pxSize, pxSize, pxSize);
    }
    ctx.shadowBlur = 0;
    ctx.restore();

    // Word Badge
    this.drawWordBadge(ctx, inv.word, inv.typedIndex, inv.x, inv.y + 24, isTarget, '#50e3c2', 13);
  }
}
