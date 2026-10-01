// Game 1: Type Defender (Space Shooter & Alien Fleet Interceptor)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface SpaceEnemy {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  word: string;
  typedIndex: number;
  isBoss?: boolean;
  bossHp?: number;
  bossMaxHp?: number;
  size: number;
  color: string;
  shieldColor: string;
  type: 'scout' | 'cruiser' | 'interceptor' | 'boss';
}

interface LaserBolt {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
  color: string;
}

export class TypeDefenderGame extends BaseGame {
  private enemies: SpaceEnemy[] = [];
  private lasers: LaserBolt[] = [];
  private starfield: { x: number; y: number; speed: number; size: number; alpha: number }[] = [];
  private currentTarget: SpaceEnemy | null = null;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.5;
  private nextEnemyId: number = 1;
  private levelWordGoal: number = 10;
  private levelWordsKilled: number = 0;
  private shipX: number = 400;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Orbital Perimeter Recon', description: 'Alien scout drones approaching orbital perimeter. Type words to lock on and fire.', targetWPM: 30, wordCount: 8, speed: 35 },
      { level: 2, name: 'Cruiser Vanguard Swarm', description: 'Armored heavy cruisers with enhanced energy shields entering orbit.', targetWPM: 45, wordCount: 12, speed: 45 },
      { level: 3, name: 'Hyper Interceptor Squad', description: 'High-speed interceptors executing evasive maneuvers.', targetWPM: 60, wordCount: 16, speed: 55 },
      { level: 4, name: 'Asteroid Debris Fleet', description: 'Dense hostile fleet advancing behind heavy plasma shields.', targetWPM: 75, wordCount: 20, speed: 65 },
      { level: 5, name: 'Alien Mothership Dreadnought', description: 'Destroy the colossal Alien Mothership with sustained multi-word fire!', targetWPM: 90, wordCount: 25, speed: 75, bossHealth: 10 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.levelWordGoal = lvl.wordCount;
    this.levelWordsKilled = 0;
    this.spawnInterval = Math.max(1.2, 3.0 - levelNumber * 0.35);
    this.spawnTimer = 0.5;
    this.enemies = [];
    this.lasers = [];
    this.currentTarget = null;
    this.shipX = this.width / 2;
    this.idleTime = 0;

    // Initialize 3D Parallax Starfield
    if (this.starfield.length === 0) {
      for (let i = 0; i < 90; i++) {
        this.starfield.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          speed: Math.random() * 90 + 30,
          size: Math.random() * 2.2 + 1,
          alpha: Math.random() * 0.7 + 0.3
        });
      }
    }

    if (levelNumber === 5) {
      this.spawnBoss();
    }
  }

  private spawnBoss(): void {
    const word = getRandomWord('hard');
    this.enemies.push({
      id: this.nextEnemyId++,
      x: this.width / 2,
      y: 90,
      targetX: this.width / 2,
      targetY: 110,
      vx: 35,
      vy: 0,
      word,
      typedIndex: 0,
      isBoss: true,
      bossHp: 8,
      bossMaxHp: 8,
      size: 65,
      color: '#ff0080',
      shieldColor: '#7928ca',
      type: 'boss'
    });
  }

  private spawnEnemy(): void {
    if (this.levelWordsKilled + this.enemies.length >= this.levelWordGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'space';
    const word = getRandomWord(cat);
    const x = Math.random() * (this.width - 200) + 100;
    const speed = (28 + this.currentLevel * 8) * (Math.random() * 0.4 + 0.8);
    const type = this.currentLevel >= 4 ? 'cruiser' : this.currentLevel >= 3 ? 'interceptor' : 'scout';

    this.enemies.push({
      id: this.nextEnemyId++,
      x,
      y: -35,
      targetX: x,
      targetY: this.height - 75,
      vx: (Math.random() - 0.5) * 20,
      vy: speed,
      word,
      typedIndex: 0,
      size: type === 'cruiser' ? 28 : 22,
      color: this.currentLevel >= 3 ? '#ff4d4d' : '#00dfd8',
      shieldColor: '#007cf0',
      type
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const expected = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === expected) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.fireLaser(this.currentTarget.x, this.currentTarget.y);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.destroyEnemy(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.enemies
      .filter(e => e.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => b.y - a.y)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.fireLaser(match.x, match.y);

      if (match.word.length === 1) {
        this.destroyEnemy(match);
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

  private fireLaser(targetX: number, targetY: number): void {
    soundEngine.playLaser();
    this.lasers.push({
      startX: this.shipX,
      startY: this.height - 50,
      targetX,
      targetY,
      progress: 0,
      color: '#50e3c2'
    });
    this.spawnSparks(targetX, targetY, '#50e3c2', 5);
  }

  private destroyEnemy(enemy: SpaceEnemy): void {
    if (enemy.isBoss && enemy.bossHp && enemy.bossHp > 1) {
      enemy.bossHp--;
      enemy.word = getRandomWord('medium');
      enemy.typedIndex = 0;
      this.spawnExplosion(enemy.x, enemy.y, '#ff0080', 30);
      soundEngine.playExplosion();
      this.triggerScreenShake(0.22, 9);
      this.addFloatingText(enemy.x, enemy.y - 45, `DREADNOUGHT SHIELD HIT! (${enemy.bossHp} HP)`, '#ff0080', 20);
      return;
    }

    soundEngine.playExplosion();
    this.spawnExplosion(enemy.x, enemy.y, enemy.isBoss ? '#ff0080' : enemy.color, enemy.isBoss ? 55 : 22);
    this.triggerScreenShake(enemy.isBoss ? 0.35 : 0.15, enemy.isBoss ? 14 : 6);
    this.addFloatingText(enemy.x, enemy.y - 30, enemy.isBoss ? '👑 MOTHERSHIP DESTROYED! +350' : '+50 TARGET DOWN', '#50e3c2', 18);

    const idx = this.enemies.indexOf(enemy);
    if (idx !== -1) this.enemies.splice(idx, 1);

    this.levelWordsKilled++;
    this.wordsCompletedInLevel++;
    this.score += enemy.isBoss ? 350 : 50;

    if (this.levelWordsKilled >= this.levelWordGoal && this.enemies.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    this.shipX = this.width / 2;

    // Starfield Parallax Scroll
    for (const star of this.starfield) {
      star.y += star.speed * dt;
      if (star.y > this.height) {
        star.y = 0;
        star.x = Math.random() * this.width;
      }
    }

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnEnemy();
      this.spawnInterval = Math.max(1.0, this.spawnInterval * 0.98);
      this.spawnTimer = this.spawnInterval;
    }

    // Lasers Progress
    for (let i = this.lasers.length - 1; i >= 0; i--) {
      this.lasers[i].progress += dt * 9;
      if (this.lasers[i].progress >= 1) {
        this.lasers.splice(i, 1);
      }
    }

    // Enemies update
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (e.isBoss) {
        e.x += e.vx * dt;
        if (e.x > this.width - 130 || e.x < 130) {
          e.vx *= -1;
        }
      } else {
        e.y += e.vy * dt;
        e.x += e.vx * dt;
        if (e.x < 60 || e.x > this.width - 60) e.vx *= -1;

        // Perimeter Breach
        if (e.y >= this.height - 75) {
          this.takeDamage(20);
          this.spawnExplosion(e.x, e.y, '#ee0000', 30);
          this.addFloatingText(e.x, this.height - 90, 'PERIMETER BREACH! -20 HP', '#ee0000', 20);
          if (this.currentTarget === e) this.currentTarget = null;
          this.enemies.splice(i, 1);
          continue;
        }
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Deep Space Parallax Starfield
    for (const star of this.starfield) {
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fillRect(star.x, star.y, star.size, star.size);
    }

    // Orbital Defense Energy Shield Floor
    const shieldGrad = ctx.createLinearGradient(0, this.height - 75, 0, this.height);
    shieldGrad.addColorStop(0, 'rgba(0, 124, 240, 0.0)');
    shieldGrad.addColorStop(0.5, 'rgba(0, 124, 240, 0.2)');
    shieldGrad.addColorStop(1, 'rgba(0, 223, 216, 0.45)');
    ctx.fillStyle = shieldGrad;
    ctx.fillRect(0, this.height - 75, this.width, 75);

    // Defense Grid Line
    ctx.strokeStyle = 'rgba(0, 223, 216, 0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(0, this.height - 75);
    ctx.lineTo(this.width, this.height - 75);
    ctx.stroke();
    ctx.setLineDash([]);

    // 2. Render Starfighter Interceptor Ship
    this.renderStarfighter(ctx, this.shipX, this.height - 45);

    // 3. Render Lasers
    for (const laser of this.lasers) {
      const lx = laser.startX + (laser.targetX - laser.startX) * laser.progress;
      const ly = laser.startY + (laser.targetY - laser.startY) * laser.progress;

      ctx.save();
      ctx.strokeStyle = laser.color;
      ctx.lineWidth = 3.5;
      ctx.shadowColor = laser.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.moveTo(laser.startX, laser.startY);
      ctx.lineTo(lx, ly);
      ctx.stroke();
      ctx.restore();
    }

    // 4. Render Enemies & Alien Mothership
    for (const enemy of this.enemies) {
      this.renderAlienEnemy(ctx, enemy);
    }
  }

  private renderStarfighter(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.save();
    ctx.translate(x, y);

    // Twin Plasma Thruster Exhaust
    const thrustLen = Math.random() * 8 + 14;
    ctx.fillStyle = '#00dfd8';
    ctx.shadowColor = '#00dfd8';
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.moveTo(-10, 14);
    ctx.lineTo(-6, 14 + thrustLen);
    ctx.lineTo(-2, 14);
    ctx.moveTo(2, 14);
    ctx.lineTo(6, 14 + thrustLen);
    ctx.lineTo(10, 14);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Delta-Wing Hull Body (Pure White & Cyan)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(0, -28); // Nose
    ctx.lineTo(24, 14); // Right wing tip
    ctx.lineTo(0, 6);   // Engine notch
    ctx.lineTo(-24, 14); // Left wing tip
    ctx.closePath();
    ctx.fill();

    // Blue Wing Accents
    ctx.fillStyle = '#0070f3';
    ctx.beginPath();
    ctx.moveTo(0, -18);
    ctx.lineTo(16, 10);
    ctx.lineTo(0, 4);
    ctx.lineTo(-16, 10);
    ctx.closePath();
    ctx.fill();

    // Glowing Cockpit Dome
    ctx.fillStyle = '#50e3c2';
    ctx.beginPath();
    ctx.arc(0, -6, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  private renderAlienEnemy(ctx: CanvasRenderingContext2D, enemy: SpaceEnemy): void {
    ctx.save();
    const isTarget = this.currentTarget === enemy;

    if (enemy.isBoss) {
      // Colossal Mothership Dreadnought
      ctx.translate(enemy.x, enemy.y);
      ctx.fillStyle = '#7928ca';
      ctx.shadowColor = '#ff0080';
      ctx.shadowBlur = 20;

      // Heavy Oval Saucer Chassis
      ctx.beginPath();
      ctx.ellipse(0, 0, 70, 28, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ff0080';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Rotating Energy Core in center
      ctx.fillStyle = '#00dfd8';
      ctx.beginPath();
      ctx.arc(0, 0, 16 + Math.sin(this.idleTime * 6) * 3, 0, Math.PI * 2);
      ctx.fill();

      // Boss HP Bar
      const hpPct = (enemy.bossHp || 1) / (enemy.bossMaxHp || 1);
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillRect(-55, -45, 110, 8);
      ctx.fillStyle = '#ff0080';
      ctx.fillRect(-55, -45, 110 * hpPct, 8);
    } else {
      // Alien Scout / Cruiser / Interceptor
      ctx.translate(enemy.x, enemy.y);
      ctx.fillStyle = enemy.color;
      ctx.shadowColor = enemy.color;
      ctx.shadowBlur = isTarget ? 15 : 6;

      ctx.beginPath();
      ctx.moveTo(0, 16);
      ctx.lineTo(-16, -14);
      ctx.lineTo(0, -5);
      ctx.lineTo(16, -14);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();

    // Target Word Badge
    const badgeY = enemy.isBoss ? enemy.y + 40 : enemy.y + 26;
    this.drawWordBadge(ctx, enemy.word, enemy.typedIndex, enemy.x, badgeY, isTarget, '#50e3c2', 14);
  }
}
