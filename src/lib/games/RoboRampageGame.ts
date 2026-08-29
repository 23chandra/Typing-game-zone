// Game 8: Robo Rampage (Heavy Assault Titan Mech Rampage)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface RogueMech {
  id: number;
  x: number;
  y: number;
  word: string;
  typedIndex: number;
  type: 'drone' | 'walker' | 'turret' | 'titan';
  speed: number;
  hp: number;
  maxHp: number;
  color: string;
  size: number;
  targetLock: number;
}

interface Missile {
  x: number;
  y: number;
  tx: number;
  ty: number;
  progress: number;
  color: string;
}

export class RoboRampageGame extends BaseGame {
  private mechs: RogueMech[] = [];
  private currentTarget: RogueMech | null = null;
  private missiles: Missile[] = [];
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.4;
  private nextId: number = 1;
  private destroyedCount: number = 0;
  private destroyGoal: number = 12;
  private mechGatlingSpin: number = 0;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Industrial Outpost Beta', description: 'Rogue security quad-drones patrolling warehouse sectors.', targetWPM: 30, wordCount: 10, speed: 28 },
      { level: 2, name: 'Cybernetic Highway Grid', description: 'Bipedal assault combat walkers deploying energy shields.', targetWPM: 45, wordCount: 14, speed: 38 },
      { level: 3, name: 'Heavy Arms Foundry', description: 'Armored heavy missile turrets locking targeting systems.', targetWPM: 60, wordCount: 18, speed: 48 },
      { level: 4, name: 'Siege Mech Convoy Assault', description: 'Elite rogue mech battalion advancing under plasma bombardment.', targetWPM: 75, wordCount: 22, speed: 60 },
      { level: 5, name: 'Autonomous Titan War Mech', description: 'Confront the Autonomous Super-Titan War Mech in a high-stakes duel!', targetWPM: 90, wordCount: 28, speed: 75, bossHealth: 8 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.destroyGoal = lvl.wordCount;
    this.destroyedCount = 0;
    this.spawnInterval = Math.max(1.1, 2.7 - levelNumber * 0.35);
    this.spawnTimer = 0.5;
    this.mechs = [];
    this.missiles = [];
    this.currentTarget = null;
    this.idleTime = 0;
    this.mechGatlingSpin = 0;

    if (levelNumber === 5) {
      this.spawnBossTitan();
    }
  }

  private spawnBossTitan(): void {
    this.mechs.push({
      id: this.nextId++,
      x: this.width + 40,
      y: this.height - 130,
      word: getRandomWord('hard'),
      typedIndex: 0,
      type: 'titan',
      speed: 20,
      hp: 8,
      maxHp: 8,
      color: '#ff0080',
      size: 55,
      targetLock: 0
    });
  }

  private spawnRogueMech(): void {
    if (this.destroyedCount + this.mechs.length >= this.destroyGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'combat' : 'hard';
    const word = getRandomWord(cat);
    const isWalker = this.currentLevel >= 3 && Math.random() < 0.35;
    const isDrone = !isWalker && Math.random() < 0.45;
    const type: 'drone' | 'walker' | 'turret' = isDrone ? 'drone' : isWalker ? 'walker' : 'turret';

    const baseSpeed = 25 + this.currentLevel * 7;
    const speed = type === 'drone' ? baseSpeed * 1.3 : baseSpeed;

    this.mechs.push({
      id: this.nextId++,
      x: this.width + 30,
      y: type === 'drone' ? this.height - 180 - Math.random() * 80 : this.height - 110,
      word,
      typedIndex: 0,
      type,
      speed,
      hp: type === 'walker' ? 2 : 1,
      maxHp: type === 'walker' ? 2 : 1,
      color: type === 'walker' ? '#7928ca' : type === 'drone' ? '#00dfd8' : '#f9cb28',
      size: type === 'walker' ? 32 : 22,
      targetLock: 0
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.fireMechSalvo(this.currentTarget.x, this.currentTarget.y);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.destroyMech(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.mechs
      .filter(m => m.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => a.x - b.x)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.fireMechSalvo(match.x, match.y);

      if (match.word.length === 1) {
        this.destroyMech(match);
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

  private fireMechSalvo(tx: number, ty: number): void {
    soundEngine.playLaser();
    this.mechGatlingSpin += 12;
    const playerX = Math.max(50, Math.min(130, this.width * 0.16));
    this.missiles.push({
      x: playerX + 40,
      y: this.height - 125,
      tx,
      ty,
      progress: 0,
      color: '#50e3c2'
    });
    this.spawnSparks(tx, ty, '#50e3c2', 5);
  }

  private destroyMech(mech: RogueMech): void {
    if (mech.hp > 1) {
      mech.hp--;
      mech.word = getRandomWord('medium');
      mech.typedIndex = 0;
      this.spawnExplosion(mech.x, mech.y, '#ff4d4d', 25);
      this.triggerScreenShake(0.2, 8);
      soundEngine.playExplosion();
      this.addFloatingText(mech.x, mech.y - 35, `ARMOR STRIPPED! (${mech.hp} HP)`, '#ff0080', 20);
      return;
    }

    soundEngine.playExplosion();
    this.spawnExplosion(mech.x, mech.y, mech.color, mech.type === 'titan' ? 50 : 25);
    this.triggerScreenShake(mech.type === 'titan' ? 0.35 : 0.15, mech.type === 'titan' ? 14 : 6);
    this.addFloatingText(mech.x, mech.y - 30, mech.type === 'titan' ? '💥 TITAN DESTROYED! +350' : '+70 MECH DOWN!', '#50e3c2', 20);

    const idx = this.mechs.indexOf(mech);
    if (idx !== -1) this.mechs.splice(idx, 1);

    this.destroyedCount++;
    this.wordsCompletedInLevel++;
    this.score += mech.type === 'titan' ? 350 : 70;

    if (this.destroyedCount >= this.destroyGoal && this.mechs.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    this.mechGatlingSpin += dt * 5;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnRogueMech();
      this.spawnTimer = this.spawnInterval;
    }

    // Missiles Update
    for (let i = this.missiles.length - 1; i >= 0; i--) {
      const m = this.missiles[i];
      m.progress += dt * 6.5;

      // Exhaust Smoke
      const mx = m.x + (m.tx - m.x) * m.progress;
      const my = m.y + (m.ty - m.y) * m.progress;
      this.particles.push({
        x: mx,
        y: my,
        vx: -Math.random() * 30 - 10,
        vy: (Math.random() - 0.5) * 15,
        size: Math.random() * 4 + 2,
        color: 'rgba(200, 220, 255, 0.7)',
        alpha: 0.8,
        decay: 0.06,
        shape: 'smoke'
      });

      if (m.progress >= 1) {
        this.missiles.splice(i, 1);
      }
    }

    const playerX = Math.max(50, Math.min(130, this.width * 0.16));

    // Rogue Mechs Advance
    for (let i = this.mechs.length - 1; i >= 0; i--) {
      const m = this.mechs[i];
      m.x -= m.speed * dt;

      if (m.x <= playerX + 25) {
        this.takeDamage(20);
        this.spawnExplosion(m.x, m.y, '#ee0000', 30);
        this.addFloatingText(playerX, this.height - 180, 'HULL IMPACT! -20 HP', '#ee0000', 20);
        if (this.currentTarget === m) this.currentTarget = null;
        this.mechs.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Industrial Cyberpunk Sky
    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    sky.addColorStop(0, '#060a10');
    sky.addColorStop(0.5, '#0f1824');
    sky.addColorStop(1, '#1b2a3d');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);

    // Industrial Factory Silhouettes & Vents
    ctx.fillStyle = '#0a1017';
    for (let f = 0; f < 6; f++) {
      ctx.fillRect(f * 150 + 20, 90, 65, this.height - 170);
      // Red warning beacon on top of chimney
      ctx.fillStyle = '#ee0000';
      ctx.fillRect(f * 150 + 48, 82, 8, 8);
      ctx.fillStyle = '#0a1017';
    }

    // Metallic Factory Floor with Hazard Stripes
    const floorY = this.height - 85;
    ctx.fillStyle = '#17202a';
    ctx.fillRect(0, floorY, this.width, 85);
    ctx.fillStyle = '#00dfd8';
    ctx.fillRect(0, floorY, this.width, 3);

    // Yellow & Black Industrial Hazard Stripes
    ctx.fillStyle = '#d69e2e';
    for (let hx = 0; hx < this.width; hx += 32) {
      ctx.beginPath();
      ctx.moveTo(hx, floorY + 4);
      ctx.lineTo(hx + 14, floorY + 4);
      ctx.lineTo(hx + 4, floorY + 16);
      ctx.lineTo(hx - 10, floorY + 16);
      ctx.closePath();
      ctx.fill();
    }

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText(`ROGUE UNITS NEUTRALIZED: ${this.destroyedCount} / ${this.destroyGoal}`, 30, 25);

    // 2. Render Player Titan Mech (Left)
    const playerX = Math.max(50, Math.min(130, this.width * 0.16));
    this.renderPlayerMech(ctx, playerX, floorY);

    // 3. Render Missiles In Flight
    for (const m of this.missiles) {
      ctx.save();
      const mx = m.x + (m.tx - m.x) * m.progress;
      const my = m.y + (m.ty - m.y) * m.progress;
      ctx.fillStyle = '#50e3c2';
      ctx.shadowColor = '#00dfd8';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(mx, my, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 4. Render Rogue Mech Enemies
    for (const mech of this.mechs) {
      this.renderRogueMech(ctx, mech, floorY);
    }
  }

  private renderPlayerMech(ctx: CanvasRenderingContext2D, x: number, floorY: number): void {
    ctx.save();
    const bob = Math.sin(this.idleTime * 4) * 2;
    const py = floorY - 5 + bob;

    // Floor Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.ellipse(x, floorY, 40, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(x, py);

    // Heavy Dual Hydraulic Mech Legs
    ctx.fillStyle = '#2d3748';
    ctx.fillRect(-26, -42, 14, 42);
    ctx.fillRect(12, -42, 14, 42);
    // Steel Feet
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(-32, -8, 24, 8);
    ctx.fillRect(6, -8, 24, 8);

    // Armored Cockpit Torso (Cyan & White Armor)
    ctx.fillStyle = '#2b6cb0';
    ctx.fillRect(-28, -90, 56, 52);
    ctx.fillStyle = '#4299e1';
    ctx.fillRect(-22, -84, 44, 40);

    // Glowing Holographic Cockpit Visor
    ctx.fillStyle = '#00dfd8';
    ctx.shadowColor = '#00dfd8';
    ctx.shadowBlur = 12;
    ctx.fillRect(-16, -78, 36, 12);
    ctx.shadowBlur = 0;

    // Dual Shoulder Missile Pods
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(-36, -98, 16, 22);
    ctx.fillRect(20, -98, 16, 22);
    // Red missile warheads visible in rack
    ctx.fillStyle = '#ee0000';
    ctx.fillRect(-34, -94, 12, 4);
    ctx.fillRect(22, -94, 12, 4);

    // Heavy Rotary Gatling Cannon (Extended right)
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(26, -64, 38, 12);
    // Spinning Barrels
    ctx.fillStyle = '#718096';
    ctx.fillRect(64, -66, 14, 16);

    ctx.restore();
  }

  private renderRogueMech(ctx: CanvasRenderingContext2D, m: RogueMech, floorY: number): void {
    ctx.save();
    const isTarget = this.currentTarget === m;

    if (m.type === 'drone') {
      // Quad-Rotor Flying Combat Drone
      ctx.translate(m.x, m.y);
      ctx.fillStyle = '#2d3748';
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Visor
      ctx.fillStyle = '#00dfd8';
      ctx.fillRect(-10, -4, 20, 8);

      // Spinning Rotors
      ctx.strokeStyle = '#718096';
      ctx.lineWidth = 2;
      [-18, 18].forEach(rx => {
        ctx.beginPath();
        ctx.moveTo(rx - 14, -12);
        ctx.lineTo(rx + 14, -12);
        ctx.stroke();
      });
    } else if (m.type === 'titan') {
      // Super Titan War Mech Boss
      ctx.translate(m.x, floorY - 15);
      ctx.fillStyle = '#1a202c';
      ctx.fillRect(-38, -95, 76, 75);
      ctx.fillStyle = '#ff0080';
      ctx.fillRect(-30, -85, 60, 55);

      // Glowing Red Eye
      ctx.fillStyle = '#ee0000';
      ctx.shadowColor = '#ee0000';
      ctx.shadowBlur = 15;
      ctx.fillRect(-18, -75, 36, 14);
      ctx.shadowBlur = 0;

      // Boss HP Bar
      const hpPct = m.hp / m.maxHp;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(-45, -125, 90, 8);
      ctx.fillStyle = '#ff0080';
      ctx.fillRect(-45, -125, 90 * hpPct, 8);
    } else {
      // Bipedal Walker
      ctx.translate(m.x, floorY - 10);
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(-12, -30, 8, 30);
      ctx.fillRect(4, -30, 8, 30);
      ctx.fillStyle = m.color;
      ctx.fillRect(-16, -60, 32, 32);
      // Eye visor
      ctx.fillStyle = '#f9cb28';
      ctx.fillRect(-12, -54, 24, 6);
    }

    ctx.restore();

    // Target Word Badge
    const badgeY = m.type === 'drone' ? m.y - 35 : m.type === 'titan' ? floorY - 145 : floorY - 85;
    this.drawWordBadge(ctx, m.word, m.typedIndex, m.x, badgeY, isTarget, '#50e3c2', 14);
  }
}
