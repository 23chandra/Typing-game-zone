// Game 4: Laser Turret 360 (360-Degree Radial Railgun Drone Defense)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface RadialDrone {
  id: number;
  angle: number;
  distance: number;
  speed: number;
  word: string;
  typedIndex: number;
  color: string;
  size: number;
}

export class LaserTurretGame extends BaseGame {
  private drones: RadialDrone[] = [];
  private currentTarget: RadialDrone | null = null;
  private turretAngle: number = 0;
  private targetTurretAngle: number = 0;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.4;
  private nextId: number = 1;
  private wordsKilled: number = 0;
  private wordsGoal: number = 12;
  private beamDuration: number = 0;
  private beamTarget: { x: number; y: number } = { x: 0, y: 0 };
  private radarScanAngle: number = 0;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Cardinal Perimeter Scan', description: 'Hostile drones inbound from primary cardinal directions. Rotate and neutralize.', targetWPM: 30, wordCount: 10, speed: 28 },
      { level: 2, name: 'Diagonal Octant Swarm', description: 'Drones attacking from full 8-point radial perimeter vectors.', targetWPM: 45, wordCount: 14, speed: 38 },
      { level: 3, name: 'Orbital Ring Vortex', description: 'Fast orbital drones spiraling inward toward central railgun core.', targetWPM: 60, wordCount: 18, speed: 48 },
      { level: 4, name: 'Stealth Incursion Storm', description: 'Accelerated assault with stealth drones and rapid perimeter jumps.', targetWPM: 75, wordCount: 22, speed: 60 },
      { level: 5, name: 'Omni Assault Vortex Overdrive', description: 'Relentless 360-degree storm of elite combat drones!', targetWPM: 90, wordCount: 26, speed: 75 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.wordsGoal = lvl.wordCount;
    this.wordsKilled = 0;
    this.spawnInterval = Math.max(1.1, 2.8 - levelNumber * 0.35);
    this.spawnTimer = 0.5;
    this.drones = [];
    this.currentTarget = null;
    this.turretAngle = 0;
    this.targetTurretAngle = 0;
    this.idleTime = 0;
  }

  private spawnDrone(): void {
    if (this.wordsKilled + this.drones.length >= this.wordsGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'space';
    const word = getRandomWord(cat);
    const angle = Math.random() * Math.PI * 2;
    const spawnDist = Math.hypot(this.width / 2, this.height / 2) + 25;
    const speed = (28 + this.currentLevel * 8) * (Math.random() * 0.3 + 0.85);

    this.drones.push({
      id: this.nextId++,
      angle,
      distance: spawnDist,
      speed,
      word,
      typedIndex: 0,
      color: this.currentLevel >= 4 ? '#ff0080' : '#00dfd8',
      size: 18
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.aimAndFire(this.currentTarget);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.destroyDrone(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.drones
      .filter(d => d.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => a.distance - b.distance)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.aimAndFire(match);

      if (match.word.length === 1) {
        this.destroyDrone(match);
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

  private aimAndFire(drone: RadialDrone): void {
    const cx = this.width / 2;
    const cy = this.height / 2;
    const tx = cx + Math.cos(drone.angle) * drone.distance;
    const ty = cy + Math.sin(drone.angle) * drone.distance;

    this.targetTurretAngle = drone.angle;
    this.turretAngle = drone.angle;
    this.beamTarget = { x: tx, y: ty };
    this.beamDuration = 0.14;
    soundEngine.playLaser();
    this.spawnSparks(tx, ty, '#50e3c2', 6);
  }

  private destroyDrone(drone: RadialDrone): void {
    soundEngine.playExplosion();
    const cx = this.width / 2;
    const cy = this.height / 2;
    const tx = cx + Math.cos(drone.angle) * drone.distance;
    const ty = cy + Math.sin(drone.angle) * drone.distance;

    this.spawnExplosion(tx, ty, drone.color, 24);
    this.triggerScreenShake(0.14, 6);
    this.addFloatingText(tx, ty - 20, '+60 DRONE DOWN', '#50e3c2', 18);

    const idx = this.drones.indexOf(drone);
    if (idx !== -1) this.drones.splice(idx, 1);

    this.wordsKilled++;
    this.wordsCompletedInLevel++;
    this.score += 60;

    if (this.wordsKilled >= this.wordsGoal && this.drones.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    this.radarScanAngle += dt * 2.8;
    if (this.beamDuration > 0) this.beamDuration -= dt;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnDrone();
      this.spawnTimer = this.spawnInterval;
    }

    const cx = this.width / 2;
    const cy = this.height / 2;

    for (let i = this.drones.length - 1; i >= 0; i--) {
      const d = this.drones[i];
      d.distance -= d.speed * dt;

      if (d.distance <= 40) {
        this.takeDamage(20);
        const tx = cx + Math.cos(d.angle) * d.distance;
        const ty = cy + Math.sin(d.angle) * d.distance;
        this.spawnExplosion(tx, ty, '#ee0000', 30);
        this.addFloatingText(cx, cy - 60, 'TURRET HULL DAMAGE! -20 HP', '#ee0000', 20);
        if (this.currentTarget === d) this.currentTarget = null;
        this.drones.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    const cx = this.width / 2;
    const cy = this.height / 2;

    // 1. Radar Combat Screen Canvas
    ctx.fillStyle = '#050a12';
    ctx.fillRect(0, 0, this.width, this.height);

    // Radial Holographic Range Rings
    ctx.strokeStyle = 'rgba(0, 223, 216, 0.16)';
    ctx.lineWidth = 1.2;
    [65, 125, 185, 245, 305].forEach(r => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(cx - 320, cy);
    ctx.lineTo(cx + 320, cy);
    ctx.moveTo(cx, cy - 320);
    ctx.lineTo(cx, cy + 320);
    ctx.stroke();

    // Rotating Radar Sweep Beam
    ctx.save();
    const sweepGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 320);
    sweepGrad.addColorStop(0, 'rgba(0, 223, 216, 0.35)');
    sweepGrad.addColorStop(1, 'rgba(0, 223, 216, 0)');
    ctx.fillStyle = sweepGrad;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, 320, this.radarScanAngle - 0.35, this.radarScanAngle);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 2. High-Intensity Laser Railgun Beam
    if (this.beamDuration > 0) {
      ctx.save();
      ctx.strokeStyle = '#50e3c2';
      ctx.lineWidth = 5;
      ctx.shadowColor = '#50e3c2';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(this.beamTarget.x, this.beamTarget.y);
      ctx.stroke();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    // 3. Heavy Railgun Central Base & Turret
    ctx.save();
    // Central Armored Base Ring
    ctx.fillStyle = '#111827';
    ctx.strokeStyle = '#00dfd8';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00dfd8';
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Rotating Railgun Dual Barrels
    ctx.translate(cx, cy);
    ctx.rotate(this.turretAngle);

    // Twin Magnetic Accelerator Barrels
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, -7, 42, 5);
    ctx.fillRect(0, 2, 42, 5);

    // Glowing Accelerator Rings
    ctx.fillStyle = '#50e3c2';
    ctx.fillRect(28, -8, 6, 16);
    ctx.fillRect(36, -8, 6, 16);

    // Central Glowing Plasma Core
    ctx.fillStyle = '#00dfd8';
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 4. Render Radial Drones
    for (const d of this.drones) {
      const dx = cx + Math.cos(d.angle) * d.distance;
      const dy = cy + Math.sin(d.angle) * d.distance;
      const isTarget = this.currentTarget === d;

      ctx.save();
      ctx.translate(dx, dy);
      ctx.fillStyle = d.color;
      ctx.shadowColor = d.color;
      ctx.shadowBlur = isTarget ? 15 : 6;

      ctx.beginPath();
      ctx.arc(0, 0, d.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // Word Badge
      this.drawWordBadge(ctx, d.word, d.typedIndex, dx, dy + d.size + 14, isTarget, '#50e3c2', 13);
    }
  }
}
