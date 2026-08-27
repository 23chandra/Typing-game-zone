// Game 7: Neon Ninja (Cyberpunk Blade Slice & Aerial Shuriken Defense)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface NinjaTarget {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  word: string;
  typedIndex: number;
  type: 'shuriken' | 'lantern' | 'kunai' | 'dragon';
  color: string;
  size: number;
}

export class NeonNinjaGame extends BaseGame {
  private targets: NinjaTarget[] = [];
  private currentTarget: NinjaTarget | null = null;
  private bladeTrails: { points: { x: number; y: number }[]; alpha: number; color: string }[] = [];
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.2;
  private nextId: number = 1;
  private slicedCount: number = 0;
  private sliceGoal: number = 12;
  private idleTime: number = 0;
  private ninjaDashProgress: number = 0;
  private ninjaTargetPos: { x: number; y: number } = { x: 120, y: 380 };

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Bamboo Dojo Rooftop', description: 'Wooden training shurikens launched into the air. Slice with precision.', targetWPM: 30, wordCount: 10, speed: 30 },
      { level: 2, name: 'Moonlit Neon Temple', description: 'Faster spinning neon kunai and glowing lanterns.', targetWPM: 45, wordCount: 14, speed: 42 },
      { level: 3, name: 'Elemental Sky Pagoda', description: 'Elemental flame lanterns requiring rapid slicing strikes.', targetWPM: 60, wordCount: 18, speed: 52 },
      { level: 4, name: 'Shadow Clan Ambush', description: 'Multiple shadow shurikens flying across screens concurrently.', targetWPM: 75, wordCount: 22, speed: 65 },
      { level: 5, name: 'Shadow Dragon Master', description: 'Ultimate ninja trial against the Shadow Dragon spirit!', targetWPM: 90, wordCount: 28, speed: 78 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.sliceGoal = lvl.wordCount;
    this.slicedCount = 0;
    this.spawnInterval = Math.max(1.1, 2.6 - levelNumber * 0.35);
    this.spawnTimer = 0.4;
    this.targets = [];
    this.bladeTrails = [];
    this.currentTarget = null;
    this.idleTime = 0;
    this.ninjaTargetPos = { x: 120, y: this.height - 100 };
  }

  private spawnTarget(): void {
    if (this.slicedCount + this.targets.length >= this.sliceGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'fantasy' : 'combat';
    const word = getRandomWord(cat);
    const fromLeft = Math.random() < 0.5;
    const startX = fromLeft ? -20 : this.width + 20;
    const startY = Math.random() * (this.height - 220) + 100;
    const vx = fromLeft ? Math.random() * 80 + 60 : -(Math.random() * 80 + 60);
    const vy = -(Math.random() * 70 + 40);

    const isLantern = Math.random() < 0.3;
    const type: 'shuriken' | 'lantern' | 'kunai' = isLantern ? 'lantern' : Math.random() < 0.5 ? 'shuriken' : 'kunai';

    this.targets.push({
      id: this.nextId++,
      x: startX,
      y: startY,
      vx,
      vy,
      rotation: 0,
      vRot: (Math.random() - 0.5) * 12,
      word,
      typedIndex: 0,
      type,
      color: type === 'lantern' ? '#ff4d4d' : this.currentLevel >= 4 ? '#ff0080' : '#50e3c2',
      size: type === 'lantern' ? 24 : 18
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        soundEngine.playSlice();
        this.createSliceTrail(this.currentTarget.x, this.currentTarget.y);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.sliceTarget(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.targets
      .filter(t => t.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => b.y - a.y)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      soundEngine.playSlice();
      this.createSliceTrail(match.x, match.y);

      if (match.word.length === 1) {
        this.sliceTarget(match);
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

  private createSliceTrail(targetX: number, targetY: number): void {
    const startX = this.ninjaTargetPos.x;
    const startY = this.ninjaTargetPos.y - 20;

    this.bladeTrails.push({
      points: [
        { x: startX, y: startY },
        { x: targetX, y: targetY }
      ],
      alpha: 1.0,
      color: '#50e3c2'
    });

    this.ninjaTargetPos = { x: targetX, y: targetY };
    this.spawnSparks(targetX, targetY, '#50e3c2', 8);
  }

  private sliceTarget(target: NinjaTarget): void {
    soundEngine.playSlice();
    this.spawnExplosion(target.x, target.y, target.color, 26);
    this.triggerScreenShake(0.14, 6);
    this.addFloatingText(target.x, target.y - 25, '+75 SLICED!', '#50e3c2', 18);

    const idx = this.targets.indexOf(target);
    if (idx !== -1) this.targets.splice(idx, 1);

    this.slicedCount++;
    this.wordsCompletedInLevel++;
    this.score += 75;

    if (this.slicedCount >= this.sliceGoal && this.targets.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTarget();
      this.spawnTimer = this.spawnInterval;
    }

    // Blade trails decay
    for (let i = this.bladeTrails.length - 1; i >= 0; i--) {
      this.bladeTrails[i].alpha -= dt * 4;
      if (this.bladeTrails[i].alpha <= 0) {
        this.bladeTrails.splice(i, 1);
      }
    }

    // Ninja smooth return to floor
    const defaultX = 120;
    const defaultY = this.height - 100;
    this.ninjaTargetPos.x += (defaultX - this.ninjaTargetPos.x) * dt * 3;
    this.ninjaTargetPos.y += (defaultY - this.ninjaTargetPos.y) * dt * 3;

    // Targets physics
    for (let i = this.targets.length - 1; i >= 0; i--) {
      const t = this.targets[i];
      t.x += t.vx * dt;
      t.y += t.vy * dt;
      t.vy += 45 * dt; // Gravity arch
      t.rotation += t.vRot * dt;

      if (t.y > this.height + 40) {
        this.takeDamage(15);
        this.addFloatingText(t.x, this.height - 60, 'MISSED TARGET! -15 HP', '#ee0000', 18);
        if (this.currentTarget === t) this.currentTarget = null;
        this.targets.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Neon Cyberpunk Moonlight Sky
    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    sky.addColorStop(0, '#05070d');
    sky.addColorStop(0.5, '#0c1424');
    sky.addColorStop(1, '#1a2238');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);

    // Full Glowing Moon
    ctx.save();
    ctx.fillStyle = '#edf2f7';
    ctx.shadowColor = '#00dfd8';
    ctx.shadowBlur = 35;
    ctx.beginPath();
    ctx.arc(this.width - 120, 85, 45, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Distant Bamboo Stalks
    ctx.fillStyle = 'rgba(15, 30, 45, 0.6)';
    for (let b = 0; b < 12; b++) {
      ctx.fillRect(b * 75 + 15, 0, 10, this.height);
    }

    // Japanese Pagoda Rooftop Floor
    const floorY = this.height - 75;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, floorY, this.width, 75);
    ctx.fillStyle = '#50e3c2';
    ctx.fillRect(0, floorY, this.width, 3);

    // Curved Rooftop Tiles
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2;
    for (let rx = 0; rx < this.width; rx += 25) {
      ctx.beginPath();
      ctx.arc(rx + 12, floorY + 14, 12, Math.PI, 0);
      ctx.stroke();
    }

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText(`TARGETS SLICED: ${this.slicedCount} / ${this.sliceGoal}`, 30, 25);

    // 2. Blade Slash Trails
    for (const trail of this.bladeTrails) {
      ctx.save();
      ctx.strokeStyle = trail.color;
      ctx.lineWidth = 4;
      ctx.globalAlpha = Math.max(0, trail.alpha);
      ctx.shadowColor = trail.color;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.moveTo(trail.points[0].x, trail.points[0].y);
      ctx.lineTo(trail.points[1].x, trail.points[1].y);
      ctx.stroke();

      // White core
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }

    // 3. Render Cyber-Ninja Hero
    this.renderCyberNinja(ctx, this.ninjaTargetPos.x, this.ninjaTargetPos.y);

    // 4. Render Aerial Shurikens & Lanterns
    for (const t of this.targets) {
      this.renderNinjaTarget(ctx, t);
    }
  }

  private renderCyberNinja(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.save();
    ctx.translate(x, y);

    // Shadow Dash Blur Effect
    ctx.fillStyle = 'rgba(80, 227, 194, 0.2)';
    ctx.beginPath();
    ctx.arc(-10, -30, 16, 0, Math.PI * 2);
    ctx.fill();

    // Body / Cyber Suit (Dark Charcoal & Cyan Accents)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-12, -45, 24, 35);
    ctx.fillStyle = '#50e3c2';
    ctx.fillRect(-8, -35, 16, 4);

    // Glowing Neon Scarf Fluttering behind
    const scarfWave = Math.sin(this.idleTime * 10) * 8;
    ctx.fillStyle = '#ff0080';
    ctx.shadowColor = '#ff0080';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(-10, -48);
    ctx.quadraticCurveTo(-26, -55 + scarfWave, -45, -45 + scarfWave);
    ctx.lineTo(-45, -38 + scarfWave);
    ctx.quadraticCurveTo(-26, -48 + scarfWave, -10, -42);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    // Head / Mask
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(0, -56, 12, 0, Math.PI * 2);
    ctx.fill();

    // Cyan Cyber Visor
    ctx.fillStyle = '#00dfd8';
    ctx.shadowColor = '#00dfd8';
    ctx.shadowBlur = 10;
    ctx.fillRect(-2, -58, 12, 4);
    ctx.shadowBlur = 0;

    // Twin Katana on Back / Drawn
    ctx.strokeStyle = '#50e3c2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(8, -45);
    ctx.lineTo(26, -70);
    ctx.stroke();

    ctx.restore();
  }

  private renderNinjaTarget(ctx: CanvasRenderingContext2D, t: NinjaTarget): void {
    ctx.save();
    const isTarget = this.currentTarget === t;
    ctx.translate(t.x, t.y);
    ctx.rotate(t.rotation);

    if (t.type === 'lantern') {
      // Glowing Japanese Festival Lantern
      ctx.fillStyle = '#e53e3e';
      ctx.shadowColor = '#ff4d4d';
      ctx.shadowBlur = 14;
      ctx.fillRect(-14, -18, 28, 36);
      ctx.fillStyle = '#f9cb28';
      ctx.fillRect(-10, -12, 20, 24);
      ctx.shadowBlur = 0;
    } else {
      // 4-Point Metallic Shuriken
      ctx.fillStyle = t.color;
      ctx.shadowColor = t.color;
      ctx.shadowBlur = isTarget ? 15 : 6;
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-5, -t.size);
        ctx.lineTo(0, -t.size * 0.7);
        ctx.lineTo(5, -t.size);
        ctx.closePath();
        ctx.fill();
      }
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    ctx.restore();

    // Word Badge
    this.drawWordBadge(ctx, t.word, t.typedIndex, t.x, t.y + t.size + 16, isTarget, '#50e3c2', 13);
  }
}
