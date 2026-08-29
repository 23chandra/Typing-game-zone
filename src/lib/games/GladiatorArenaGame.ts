// Game 16: Gladiator Arena (Colosseum Beast & Weapon Clash)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface ArenaFoe {
  id: number;
  x: number;
  y: number;
  word: string;
  typedIndex: number;
  type: 'lion' | 'spearman' | 'chariot' | 'champion';
  speed: number;
  hp: number;
  maxHp: number;
  color: string;
  size: number;
}

export class GladiatorArenaGame extends BaseGame {
  private foes: ArenaFoe[] = [];
  private currentTarget: ArenaFoe | null = null;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.4;
  private nextId: number = 1;
  private defeatedCount: number = 0;
  private defeatGoal: number = 12;
  private idleTime: number = 0;
  private playerSlashAnim: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Arena Pits - Wild Beasts', description: 'Parry charging lions and wolves released from the iron gates.', targetWPM: 30, wordCount: 10, speed: 30 },
      { level: 2, name: 'Spear Legionnaires', description: 'Defeat armored Roman spear soldiers with precision shield strikes.', targetWPM: 45, wordCount: 14, speed: 40 },
      { level: 3, name: 'Heavy Centurion Champions', description: 'Dual-phase heavy sword warriors with impenetrable shields.', targetWPM: 60, wordCount: 18, speed: 50 },
      { level: 4, name: 'War Chariot Assault', description: 'High-speed war chariots charging across the sand arena.', targetWPM: 75, wordCount: 22, speed: 65 },
      { level: 5, name: 'The Emperor Gladiator Champion', description: 'Grand finale duel against the undefeated Colosseum Champion!', targetWPM: 90, wordCount: 28, speed: 78, bossHealth: 8 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.defeatGoal = lvl.wordCount;
    this.defeatedCount = 0;
    this.spawnInterval = Math.max(1.1, 2.7 - levelNumber * 0.35);
    this.spawnTimer = 0.5;
    this.foes = [];
    this.currentTarget = null;
    this.idleTime = 0;
    this.playerSlashAnim = 0;
  }

  private spawnFoe(): void {
    if (this.defeatedCount + this.foes.length >= this.defeatGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'combat' : 'hard';
    const word = getRandomWord(cat);
    const isBoss = this.currentLevel === 5 && this.foes.length === 0 && this.defeatedCount === 0;
    const isChariot = !isBoss && this.currentLevel >= 4 && Math.random() < 0.35;
    const isBeast = !isBoss && !isChariot && this.currentLevel <= 2 && Math.random() < 0.5;
    const type: 'lion' | 'spearman' | 'chariot' | 'champion' = isBoss ? 'champion' : isChariot ? 'chariot' : isBeast ? 'lion' : 'spearman';
    const speed = (28 + this.currentLevel * 7) * (isChariot ? 1.4 : isBoss ? 0.6 : 1.0);

    this.foes.push({
      id: this.nextId++,
      x: this.width + 40,
      y: this.height - 110,
      word,
      typedIndex: 0,
      type,
      speed,
      hp: isBoss ? 6 : 1,
      maxHp: isBoss ? 6 : 1,
      color: type === 'champion' ? '#ff0080' : type === 'chariot' ? '#f9cb28' : type === 'lion' ? '#ff884d' : '#00dfd8',
      size: type === 'champion' ? 42 : type === 'chariot' ? 48 : 26
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        soundEngine.playHit();
        this.playerSlashAnim = 0.2;
        this.spawnSparks(this.currentTarget.x, this.currentTarget.y, '#50e3c2', 5);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.defeatFoe(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.foes
      .filter(f => f.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => a.x - b.x)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      soundEngine.playHit();
      this.playerSlashAnim = 0.2;
      this.spawnSparks(match.x, match.y, '#50e3c2', 5);

      if (match.word.length === 1) {
        this.defeatFoe(match);
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

  private defeatFoe(foe: ArenaFoe): void {
    if (foe.hp > 1) {
      foe.hp--;
      foe.word = getRandomWord('medium');
      foe.typedIndex = 0;
      this.spawnExplosion(foe.x, foe.y, '#ff0080', 25);
      this.triggerScreenShake(0.2, 8);
      soundEngine.playHit();
      this.addFloatingText(foe.x, foe.y - 40, `HEAVY HIT! (${foe.hp} HP LEFT)`, '#ff0080', 20);
      return;
    }

    soundEngine.playHit();
    this.spawnExplosion(foe.x, foe.y, foe.color, 24);
    this.triggerScreenShake(0.14, 6);
    this.addFloatingText(foe.x, foe.y - 30, '+80 DEFEATED!', '#50e3c2', 18);

    const idx = this.foes.indexOf(foe);
    if (idx !== -1) this.foes.splice(idx, 1);

    this.defeatedCount++;
    this.wordsCompletedInLevel++;

    if (this.defeatedCount >= this.defeatGoal && this.foes.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    if (this.playerSlashAnim > 0) this.playerSlashAnim -= dt;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnFoe();
      this.spawnTimer = this.spawnInterval;
    }

    const playerX = Math.max(50, Math.min(140, this.width * 0.16));

    for (let i = this.foes.length - 1; i >= 0; i--) {
      const f = this.foes[i];
      f.x -= f.speed * dt;

      if (f.x <= playerX + 25) {
        this.takeDamage(20);
        this.spawnExplosion(f.x, f.y, '#ee0000', 25);
        this.addFloatingText(playerX, this.height - 180, 'ARENA BREACH! -20 HP', '#ee0000', 20);
        if (this.currentTarget === f) this.currentTarget = null;
        this.foes.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Sun-Drenched Roman Colosseum Sky
    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    sky.addColorStop(0, '#c05621');
    sky.addColorStop(0.4, '#dd6b20');
    sky.addColorStop(0.75, '#f6ad55');
    sky.addColorStop(1, '#fbd38d');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);

    // Colosseum Stone Arches in background
    ctx.fillStyle = '#7b341e';
    for (let a = 0; a < 8; a++) {
      const ax = a * 110;
      ctx.fillRect(ax, 60, 30, this.height - 150);
      ctx.beginPath();
      ctx.arc(ax + 55, 60, 25, Math.PI, 0);
      ctx.fill();
    }

    // Roman Red Banners with Gold Trim
    [120, this.width / 2, this.width - 120].forEach(bx => {
      ctx.fillStyle = '#9b2c2c';
      ctx.fillRect(bx - 12, 40, 24, 60);
      ctx.fillStyle = '#d69e2e';
      ctx.fillRect(bx - 12, 95, 24, 5);
    });

    // Colosseum Sand Arena Floor
    const floorY = this.height - 85;
    ctx.fillStyle = '#d69e2e';
    ctx.fillRect(0, floorY, this.width, 85);
    // Sand Texture specs
    ctx.fillStyle = '#b7791f';
    for (let s = 0; s < 40; s++) {
      const sx = (s * 31) % this.width;
      const sy = floorY + 10 + (s * 17) % 65;
      ctx.fillRect(sx, sy, 3, 2);
    }
    // Arena Wall base
    ctx.fillStyle = '#742a2a';
    ctx.fillRect(0, floorY - 6, this.width, 6);

    // Arena Level Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`FOES VANQUISHED: ${this.defeatedCount} / ${this.defeatGoal}`, 30, 25);

    // 2. Render Player Roman Gladiator (Left)
    const playerX = Math.max(50, Math.min(140, this.width * 0.16));
    this.renderPlayerGladiator(ctx, playerX, floorY);

    // 3. Render Foes
    for (const foe of this.foes) {
      this.renderArenaFoe(ctx, foe, floorY);
    }
  }

  private renderPlayerGladiator(ctx: CanvasRenderingContext2D, x: number, floorY: number): void {
    ctx.save();
    const isAttacking = this.playerSlashAnim > 0;
    const px = x + (isAttacking ? 15 : 0);
    const py = floorY - 5;

    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(px, floorY, 26, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(px, py);

    // Legs / Greaves (Brass armor)
    ctx.fillStyle = '#d69e2e';
    ctx.fillRect(-14, -30, 12, 30);
    ctx.fillRect(2, -30, 12, 30);

    // Red Tunic & Bronze Lorica Segmentata
    ctx.fillStyle = '#9b2c2c';
    ctx.fillRect(-16, -65, 32, 35);
    ctx.fillStyle = '#b7791f';
    ctx.fillRect(-14, -60, 28, 22);

    // Scutum Shield (Curved Red with Gold Eagle)
    ctx.fillStyle = '#c53030';
    ctx.fillRect(-22, -58, 16, 42);
    ctx.strokeStyle = '#f6e05e';
    ctx.lineWidth = 2;
    ctx.strokeRect(-22, -58, 16, 42);
    // Gold Shield Boss
    ctx.fillStyle = '#f6e05e';
    ctx.beginPath();
    ctx.arc(-14, -37, 5, 0, Math.PI * 2);
    ctx.fill();

    // Gladius Sword (Right arm)
    ctx.save();
    if (isAttacking) {
      ctx.translate(14, -48);
      ctx.rotate(-Math.PI / 4);
    } else {
      ctx.translate(14, -48);
      ctx.rotate(Math.PI / 6);
    }
    // Silver blade
    ctx.fillStyle = '#edf2f7';
    ctx.fillRect(0, -32, 6, 32);
    // Gold hilt
    ctx.fillStyle = '#d69e2e';
    ctx.fillRect(-3, 0, 12, 5);
    ctx.restore();

    // Head
    ctx.fillStyle = '#fcd3a1';
    ctx.beginPath();
    ctx.arc(0, -75, 12, 0, Math.PI * 2);
    ctx.fill();

    // Roman Galea Helmet with Red Horsehair Crest
    ctx.fillStyle = '#d69e2e';
    ctx.beginPath();
    ctx.arc(0, -78, 14, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(-14, -78, 28, 8);

    // Red Plume Crest
    ctx.fillStyle = '#e53e3e';
    ctx.beginPath();
    ctx.moveTo(-16, -78);
    ctx.lineTo(0, -96);
    ctx.lineTo(16, -78);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  private renderArenaFoe(ctx: CanvasRenderingContext2D, foe: ArenaFoe, floorY: number): void {
    ctx.save();
    const isTarget = this.currentTarget === foe;
    const py = floorY - 5;

    // Floor Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(foe.x, floorY, foe.type === 'chariot' ? 45 : 22, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(foe.x, py);

    if (foe.type === 'lion') {
      // Roaring Barbarian Lion
      ctx.fillStyle = '#d69e2e';
      ctx.fillRect(-24, -30, 48, 22);
      // Legs
      ctx.fillRect(-22, -10, 8, 10);
      ctx.fillRect(-8, -10, 8, 10);
      ctx.fillRect(8, -10, 8, 10);
      ctx.fillRect(18, -10, 8, 10);
      // Mane & Head (facing left: -28)
      ctx.fillStyle = '#742a2a';
      ctx.beginPath();
      ctx.arc(-28, -22, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#d69e2e';
      ctx.beginPath();
      ctx.arc(-30, -22, 10, 0, Math.PI * 2);
      ctx.fill();
      // Animated tail
      ctx.strokeStyle = '#d69e2e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(24, -25);
      ctx.quadraticCurveTo(34, -35 + Math.sin(this.idleTime * 6) * 6, 38, -25);
      ctx.stroke();
    } else if (foe.type === 'chariot') {
      // War Chariot with spinning wheel
      ctx.fillStyle = '#742a2a';
      ctx.fillRect(-35, -35, 45, 25);
      // Spinning Chariot Spoked Wheel
      const wheelX = -12;
      const wheelY = -12;
      ctx.strokeStyle = '#d69e2e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(wheelX, wheelY, 14, 0, Math.PI * 2);
      ctx.stroke();
      const wheelAngle = this.idleTime * 10;
      for (let w = 0; w < 4; w++) {
        const wa = wheelAngle + (w * Math.PI) / 2;
        ctx.beginPath();
        ctx.moveTo(wheelX, wheelY);
        ctx.lineTo(wheelX + Math.cos(wa) * 14, wheelY + Math.sin(wa) * 14);
        ctx.stroke();
      }
      // Chariot Driver
      ctx.fillStyle = '#fcd3a1';
      ctx.beginPath();
      ctx.arc(-18, -50, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#c53030';
      ctx.fillRect(-24, -40, 16, 18);
    } else if (foe.type === 'champion') {
      // Emperor Champion Boss (Dual Axes & Horned Helm)
      ctx.fillStyle = '#1a202c';
      ctx.fillRect(-18, -65, 36, 40);
      ctx.fillStyle = '#e53e3e';
      ctx.fillRect(-16, -60, 32, 25);
      // Head & Horns
      ctx.fillStyle = '#fcd3a1';
      ctx.beginPath();
      ctx.arc(0, -78, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#d69e2e';
      ctx.beginPath();
      ctx.moveTo(-16, -85);
      ctx.lineTo(-28, -105);
      ctx.lineTo(-10, -88);
      ctx.moveTo(16, -85);
      ctx.lineTo(28, -105);
      ctx.lineTo(10, -88);
      ctx.fill();
    } else {
      // Spearman
      ctx.fillStyle = '#2b6cb0';
      ctx.fillRect(-12, -55, 24, 30);
      ctx.fillStyle = '#fcd3a1';
      ctx.beginPath();
      ctx.arc(0, -68, 10, 0, Math.PI * 2);
      ctx.fill();
      // Thrusting Pilum Spear
      ctx.strokeStyle = '#d69e2e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(12, -45);
      ctx.lineTo(-40, -45);
      ctx.stroke();
    }

    ctx.restore();

    // Word Badge above foe
    this.drawWordBadge(ctx, foe.word, foe.typedIndex, foe.x, floorY - 80, isTarget, '#50e3c2', 14);
  }
}
