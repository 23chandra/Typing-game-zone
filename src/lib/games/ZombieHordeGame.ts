// Game 6: Zombie Horde (Post-Apocalyptic Street Survival)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface ZombieEnemy {
  id: number;
  x: number;
  y: number;
  speed: number;
  word: string;
  typedIndex: number;
  type: 'walker' | 'runner' | 'brute' | 'abomination';
  hp: number;
  maxHp: number;
  animTimer: number;
  color: string;
}

export class ZombieHordeGame extends BaseGame {
  private zombies: ZombieEnemy[] = [];
  private currentTarget: ZombieEnemy | null = null;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.4;
  private nextId: number = 1;
  private zombiesKilled: number = 0;
  private zombiesGoal: number = 12;
  private barricadeX: number = 110;
  private muzzleFlashTimer: number = 0;
  private bulletTracers: { x1: number; y1: number; x2: number; y2: number; life: number }[] = [];
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Quiet Suburbs Outskirts', description: 'Slow-moving walkers advancing down the abandoned street.', targetWPM: 30, wordCount: 10, speed: 28 },
      { level: 2, name: 'Downtown Quarantine Zone', description: 'Infected sprinters dashing toward your sandbag barricade.', targetWPM: 45, wordCount: 14, speed: 42 },
      { level: 3, name: 'Hazardous Hospital Ward', description: 'Armored heavy toxic brutes requiring sustained multi-word fire.', targetWPM: 60, wordCount: 18, speed: 52 },
      { level: 4, name: 'Midnight Necropolis Horde', description: 'Frenzied zombie swarm attacking simultaneously from the fog.', targetWPM: 75, wordCount: 22, speed: 65 },
      { level: 5, name: 'Colossal Abomination Mutation', description: 'Survive the mega toxic mutant abomination with earth-shattering slams!', targetWPM: 90, wordCount: 28, speed: 80, bossHealth: 8 }
    ];
  }

  public override handleResize(): void {
    super.handleResize();
    this.barricadeX = Math.max(50, Math.min(110, this.width * 0.16));
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.zombiesGoal = lvl.wordCount;
    this.zombiesKilled = 0;
    this.spawnInterval = Math.max(1.0, 2.8 - levelNumber * 0.35);
    this.spawnTimer = 0.5;
    this.zombies = [];
    this.bulletTracers = [];
    this.currentTarget = null;
    this.barricadeX = Math.max(50, Math.min(110, this.width * 0.16));
    this.idleTime = 0;

    if (levelNumber === 5) {
      this.spawnBossAbomination();
    }
  }

  private spawnBossAbomination(): void {
    this.zombies.push({
      id: this.nextId++,
      x: this.width + 40,
      y: this.height - 130,
      speed: 24,
      word: getRandomWord('hard'),
      typedIndex: 0,
      type: 'abomination',
      hp: 8,
      maxHp: 8,
      animTimer: 0,
      color: '#7928ca'
    });
  }

  private spawnZombie(): void {
    if (this.zombiesKilled + this.zombies.length >= this.zombiesGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'combat' : 'hard';
    const word = getRandomWord(cat);
    const isBrute = this.currentLevel >= 3 && Math.random() < 0.28;
    const isRunner = !isBrute && this.currentLevel >= 2 && Math.random() < 0.38;

    const baseSpeed = 26 + this.currentLevel * 8;
    const speed = isRunner ? baseSpeed * 1.5 : isBrute ? baseSpeed * 0.75 : baseSpeed;

    this.zombies.push({
      id: this.nextId++,
      x: this.width + 30,
      y: this.height - 95 - (Math.random() * 50),
      speed,
      word,
      typedIndex: 0,
      type: isBrute ? 'brute' : isRunner ? 'runner' : 'walker',
      hp: isBrute ? 2 : 1,
      maxHp: isBrute ? 2 : 1,
      animTimer: Math.random() * 5,
      color: isBrute ? '#7928ca' : isRunner ? '#ff0080' : '#48bb78'
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
        this.fireShotgun(this.currentTarget.x, this.currentTarget.y);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.hitZombie(this.currentTarget);
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.zombies
      .filter(z => z.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => a.x - b.x)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      soundEngine.playHit();
      this.fireShotgun(match.x, match.y);

      if (match.word.length === 1) {
        this.hitZombie(match);
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

  private fireShotgun(targetX: number, targetY: number): void {
    this.muzzleFlashTimer = 0.08;
    this.bulletTracers.push({
      x1: this.barricadeX + 25,
      y1: this.height - 110,
      x2: targetX,
      y2: targetY - 15,
      life: 0.12
    });
    this.spawnSparks(targetX, targetY - 15, '#50e3c2', 5);
  }

  private hitZombie(zombie: ZombieEnemy): void {
    zombie.hp--;
    if (zombie.hp > 0) {
      zombie.word = getRandomWord('medium');
      zombie.typedIndex = 0;
      this.spawnExplosion(zombie.x, zombie.y, '#ff4d4d', 20);
      this.triggerScreenShake(0.18, 7);
      soundEngine.playHit();
      this.addFloatingText(zombie.x, zombie.y - 45, `ARMOR BROKEN! (${zombie.hp} HP)`, '#ff0080', 20);
      return;
    }

    soundEngine.playExplosion();
    this.spawnExplosion(zombie.x, zombie.y, zombie.color, zombie.type === 'abomination' ? 45 : 22);
    this.triggerScreenShake(zombie.type === 'abomination' ? 0.35 : 0.14, zombie.type === 'abomination' ? 12 : 6);
    this.addFloatingText(zombie.x, zombie.y - 35, zombie.type === 'abomination' ? '👑 BOSS ELIMINATED! +300' : '+60 HEADSHOT!', '#50e3c2', 20);

    const idx = this.zombies.indexOf(zombie);
    if (idx !== -1) this.zombies.splice(idx, 1);
    if (this.currentTarget === zombie) this.currentTarget = null;

    this.zombiesKilled++;
    this.wordsCompletedInLevel++;
    this.score += zombie.type === 'abomination' ? 300 : 60;

    if (this.zombiesKilled >= this.zombiesGoal && this.zombies.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    if (this.muzzleFlashTimer > 0) this.muzzleFlashTimer -= dt;

    // Bullet Tracers Decay
    for (let i = this.bulletTracers.length - 1; i >= 0; i--) {
      this.bulletTracers[i].life -= dt;
      if (this.bulletTracers[i].life <= 0) {
        this.bulletTracers.splice(i, 1);
      }
    }

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnZombie();
      this.spawnTimer = this.spawnInterval;
    }

    for (let i = this.zombies.length - 1; i >= 0; i--) {
      const z = this.zombies[i];
      z.x -= z.speed * dt;
      z.animTimer += dt * (z.type === 'runner' ? 10 : 5);

      if (z.x <= this.barricadeX + 25) {
        this.takeDamage(20);
        this.spawnExplosion(z.x, z.y, '#ee0000', 30);
        this.addFloatingText(this.barricadeX, this.height - 160, 'BARRICADE BREACHED! -20 HP', '#ee0000', 20);
        if (this.currentTarget === z) this.currentTarget = null;
        this.zombies.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Dark Rainy Post-Apocalyptic Street
    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    sky.addColorStop(0, '#040608');
    sky.addColorStop(0.5, '#0b0f14');
    sky.addColorStop(1, '#151d26');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);

    // Fog Layer
    ctx.fillStyle = 'rgba(20, 30, 40, 0.45)';
    ctx.fillRect(0, 100, this.width, this.height - 180);

    // Flickering Streetlight on the street
    const lightX = this.width * 0.65;
    ctx.save();
    const lightFlicker = Math.sin(this.idleTime * 15) > 0.8 ? 0.3 : 0.8;
    const cone = ctx.createRadialGradient(lightX, 50, 10, lightX, 250, 180);
    cone.addColorStop(0, `rgba(249, 203, 40, ${0.4 * lightFlicker})`);
    cone.addColorStop(1, 'rgba(249, 203, 40, 0)');
    ctx.fillStyle = cone;
    ctx.beginPath();
    ctx.moveTo(lightX - 8, 40);
    ctx.lineTo(lightX - 120, this.height - 80);
    ctx.lineTo(lightX + 120, this.height - 80);
    ctx.lineTo(lightX + 8, 40);
    ctx.closePath();
    ctx.fill();

    // Streetlight post
    ctx.fillStyle = '#2d3748';
    ctx.fillRect(lightX - 4, 30, 8, this.height - 110);
    ctx.fillRect(lightX - 16, 30, 32, 10);
    ctx.restore();

    // Wet Asphalt Street Floor
    const floorY = this.height - 80;
    ctx.fillStyle = '#11161d';
    ctx.fillRect(0, floorY, this.width, 80);
    ctx.strokeStyle = '#232d3b';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, floorY, this.width, 80);

    // Broken Yellow Street Dividing Lines
    ctx.fillStyle = 'rgba(246, 224, 94, 0.3)';
    for (let lx = 30; lx < this.width; lx += 80) {
      ctx.fillRect(lx, floorY + 38, 45, 4);
    }

    // Telemetry Counter (Top)
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText(`ZOMBIES ELIMINATED: ${this.zombiesKilled} / ${this.zombiesGoal}`, 30, 25);

    // 2. Sandbag Fortified Barricade & Survivor Hero
    this.renderSurvivorAndBarricade(ctx, floorY);

    // 3. Bullet Tracers
    for (const tracer of this.bulletTracers) {
      ctx.save();
      ctx.strokeStyle = '#f9cb28';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#f9cb28';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.moveTo(tracer.x1, tracer.y1);
      ctx.lineTo(tracer.x2, tracer.y2);
      ctx.stroke();
      ctx.restore();
    }

    // 4. Render Zombie Enemies
    for (const z of this.zombies) {
      this.renderZombieEnemy(ctx, z, floorY);
    }
  }

  private renderSurvivorAndBarricade(ctx: CanvasRenderingContext2D, floorY: number): void {
    ctx.save();

    // Sandbags Stack
    const sx = this.barricadeX;
    ctx.fillStyle = '#8b6914';
    // Bottom sandbag row
    ctx.fillRect(sx - 15, floorY - 35, 40, 16);
    ctx.fillRect(sx + 20, floorY - 35, 40, 16);
    // Middle row
    ctx.fillStyle = '#a67c1e';
    ctx.fillRect(sx - 5, floorY - 50, 40, 16);
    ctx.fillRect(sx + 30, floorY - 50, 30, 16);
    // Top row
    ctx.fillStyle = '#c49429';
    ctx.fillRect(sx + 5, floorY - 65, 38, 16);

    // Barricade Spikes
    ctx.strokeStyle = '#718096';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(sx + 45, floorY - 50);
    ctx.lineTo(sx + 75, floorY - 40);
    ctx.moveTo(sx + 45, floorY - 30);
    ctx.lineTo(sx + 78, floorY - 20);
    ctx.stroke();

    // Survivor Character (Standing behind barricade at sx - 20)
    const px = sx - 22;
    const py = floorY - 55;

    // Body
    ctx.fillStyle = '#2b6cb0'; // Navy tactical vest
    ctx.fillRect(px - 10, py - 35, 20, 35);

    // Head
    ctx.fillStyle = '#fcd3a1';
    ctx.beginPath();
    ctx.arc(px, py - 46, 11, 0, Math.PI * 2);
    ctx.fill();

    // Tactical Helmet / NVG Goggles
    ctx.fillStyle = '#2d3748';
    ctx.fillRect(px - 11, py - 56, 22, 10);
    ctx.fillStyle = '#00dfd8'; // Glowing night vision lenses
    ctx.fillRect(px - 1, py - 48, 6, 3);
    ctx.fillRect(px + 6, py - 48, 6, 3);

    // Shotgun Barrel (Aiming forward to sx + 35)
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(px + 4, py - 26, 42, 7);
    ctx.fillStyle = '#8b5a2b';
    ctx.fillRect(px - 2, py - 24, 12, 9);

    // Muzzle Flash
    if (this.muzzleFlashTimer > 0) {
      ctx.save();
      ctx.fillStyle = '#f9cb28';
      ctx.shadowColor = '#f9cb28';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(px + 48, py - 23, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();
  }

  private renderZombieEnemy(ctx: CanvasRenderingContext2D, z: ZombieEnemy, floorY: number): void {
    ctx.save();
    const isTarget = this.currentTarget === z;
    const legSwing = Math.sin(z.animTimer) * (z.type === 'runner' ? 14 : 7);
    const wobble = Math.sin(z.animTimer * 0.5) * 3;

    // Floor Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.beginPath();
    ctx.ellipse(z.x, floorY - 5, z.type === 'abomination' ? 45 : 18, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(z.x, floorY - 10 + wobble);

    if (z.type === 'abomination') {
      // Colossal Boss Abomination
      ctx.fillStyle = '#44337a';
      ctx.fillRect(-35, -95, 70, 70);
      // Glowing toxic veins
      ctx.strokeStyle = '#48bb78';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-25, -80);
      ctx.lineTo(0, -60);
      ctx.lineTo(25, -85);
      ctx.stroke();

      // Giant mutated head
      ctx.fillStyle = '#6b46c1';
      ctx.beginPath();
      ctx.arc(0, -110, 22, 0, Math.PI * 2);
      ctx.fill();
      // 3 Glowing Red Eyes
      ctx.fillStyle = '#ee0000';
      ctx.fillRect(-12, -115, 6, 5);
      ctx.fillRect(-2, -118, 6, 5);
      ctx.fillRect(8, -115, 6, 5);

      // Boss HP Bar
      const hpPct = z.hp / z.maxHp;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(-45, -145, 90, 8);
      ctx.fillStyle = '#ff0080';
      ctx.fillRect(-45, -145, 90 * hpPct, 8);
    } else {
      // Regular Walker, Runner, or Brute
      const size = z.type === 'brute' ? 1.4 : 1.0;
      ctx.scale(size, size);

      // Legs (Walking animation)
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(-10 + legSwing * 0.4, -30, 8, 30);
      ctx.fillRect(2 - legSwing * 0.4, -30, 8, 30);

      // Tattered Shirt / Torso
      ctx.fillStyle = z.color;
      ctx.fillRect(-12, -62, 24, 34);

      // Outstretched Claws (Reaching Left)
      ctx.fillStyle = '#68d391';
      ctx.fillRect(-26, -55, 18, 7);

      // Decayed Zombie Head
      ctx.fillStyle = '#48bb78';
      ctx.beginPath();
      ctx.arc(0, -72, 11, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Menacing Eyes
      ctx.fillStyle = z.type === 'runner' ? '#ff0080' : '#f6e05e';
      ctx.fillRect(-7, -74, 4, 3);
      ctx.fillRect(1, -74, 4, 3);
    }

    ctx.restore();

    // Word Badge
    const badgeY = z.type === 'abomination' ? floorY - 160 : floorY - 100;
    this.drawWordBadge(ctx, z.word, z.typedIndex, z.x, badgeY, isTarget, '#50e3c2', 14);
  }
}
