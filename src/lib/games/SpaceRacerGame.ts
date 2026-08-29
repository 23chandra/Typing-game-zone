// Game 10: Space Racer (Synthwave Warp Speed Cyber Racer)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface WarpGate {
  id: number;
  z: number; // depth: 1000 down to 0
  lane: number; // -1 (left), 0 (center), 1 (right)
  word: string;
  typedIndex: number;
  cleared: boolean;
  color: string;
}

export class SpaceRacerGame extends BaseGame {
  private gates: WarpGate[] = [];
  private currentTarget: WarpGate | null = null;
  private playerLane: number = 0;
  private playerVisualLane: number = 0;
  private currentSpeed: number = 200;
  private warpBoostTime: number = 0;
  private gridOffset: number = 0;
  private spawnTimer: number = 0;
  private nextId: number = 1;
  private gatesClearedCount: number = 0;
  private gatesGoal: number = 12;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Neon Highway Sector 1', description: 'Cruise down the synthwave grid at 80 MPH warp speed.', targetWPM: 30, wordCount: 10, speed: 220 },
      { level: 2, name: 'Cyber Horizon Circuit', description: 'Faster warp gates and lane shift maneuvers.', targetWPM: 45, wordCount: 14, speed: 280 },
      { level: 3, name: 'Asteroid Beltway Expressway', description: 'Hyper-acceleration through dense orbital warp corridors.', targetWPM: 60, wordCount: 18, speed: 340 },
      { level: 4, name: 'Black Hole Event Horizon', description: 'Extreme speed warp gates under intense gravitational pull.', targetWPM: 75, wordCount: 22, speed: 410 },
      { level: 5, name: 'Grand Prix Warp Championship', description: 'Reach maximum hyper-drive velocity and claim the trophy!', targetWPM: 90, wordCount: 28, speed: 490 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.gatesGoal = lvl.wordCount;
    this.gatesClearedCount = 0;
    this.currentSpeed = lvl.speed;
    this.spawnTimer = 0.5;
    this.gates = [];
    this.currentTarget = null;
    this.playerLane = 0;
    this.playerVisualLane = 0;
    this.warpBoostTime = 0;
    this.idleTime = 0;
  }

  private spawnGate(): void {
    if (this.gatesClearedCount + this.gates.length >= this.gatesGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'space' : 'hard';
    const word = getRandomWord(cat);
    const lanes = [-1, 0, 1];
    // Prefer lane without gate near spawn distance (z > 700)
    const validLanes = lanes.filter(l => !this.gates.some(g => g.lane === l && g.z > 680));
    const lane = validLanes.length > 0 ? validLanes[Math.floor(Math.random() * validLanes.length)] : lanes[Math.floor(Math.random() * lanes.length)];

    this.gates.push({
      id: this.nextId++,
      z: 1000,
      lane,
      word,
      typedIndex: 0,
      cleared: false,
      color: lane === -1 ? '#00dfd8' : lane === 0 ? '#ff0080' : '#f9cb28'
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.playerLane = this.currentTarget.lane;

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.clearGate(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.gates
      .filter(g => !g.cleared && g.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => a.z - b.z)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.playerLane = match.lane;
      this.recordKeystroke(true);

      if (match.word.length === 1) {
        this.clearGate(match);
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

  private clearGate(gate: WarpGate): void {
    gate.cleared = true;
    soundEngine.playChime();
    this.warpBoostTime = 0.6;
    this.triggerFlash(0.12, 'rgba(0, 223, 216, 0.4)');
    this.addFloatingText(this.width / 2, this.height * 0.35, '⚡ WARP BOOST! +80 PTS', '#00dfd8', 22);

    const screenPos = this.project3D(gate.lane, gate.z);
    this.spawnExplosion(screenPos.x, screenPos.y, gate.color, 25);

    this.gatesClearedCount++;
    this.wordsCompletedInLevel++;
    this.score += 80;

    if (this.gatesClearedCount >= this.gatesGoal && this.gates.every(g => g.cleared || g.z <= 0)) {
      this.triggerLevelClear();
    }
  }

  private project3D(lane: number, z: number): { x: number; y: number; scale: number } {
    const horizonY = this.height * 0.45;
    const fov = 300;
    const depth = Math.max(1, z + fov);
    const scale = fov / depth;
    const laneWidth = Math.min(260, this.width * 0.38);

    const x = this.width / 2 + lane * laneWidth * scale;
    const y = horizonY + (this.height - horizonY) * scale;
    return { x, y, scale };
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    const speed = this.warpBoostTime > 0 ? this.currentSpeed * 1.8 : this.currentSpeed;
    if (this.warpBoostTime > 0) this.warpBoostTime -= dt;

    this.gridOffset = (this.gridOffset + speed * dt * 0.6) % 80;

    // Smooth visual lane shift
    this.playerVisualLane += (this.playerLane - this.playerVisualLane) * dt * 8;

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnGate();
      this.spawnTimer = Math.max(1.2, 2.8 - this.currentLevel * 0.3);
    }

    for (let i = this.gates.length - 1; i >= 0; i--) {
      const g = this.gates[i];
      g.z -= speed * dt;

      if (g.z <= 40 && !g.cleared) {
        this.takeDamage(20);
        g.cleared = true;
        this.addFloatingText(this.width / 2, this.height - 100, 'WARP BARRIER MISSED! -20 HP', '#ee0000', 20);
        if (this.currentTarget === g) this.currentTarget = null;
      }

      if (g.z <= -100) {
        this.gates.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    const horizonY = this.height * 0.45;

    // 1. Synthwave Sunset Sky (Gradient & Mountains)
    const sky = ctx.createLinearGradient(0, 0, 0, horizonY);
    sky.addColorStop(0, '#0a001a');
    sky.addColorStop(0.5, '#28004d');
    sky.addColorStop(1, '#ff0080');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, horizonY);

    // Wireframe Retro Sun
    ctx.save();
    ctx.fillStyle = '#f9cb28';
    ctx.shadowColor = '#ff0080';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.arc(this.width / 2, horizonY, 55, Math.PI, 0);
    ctx.fill();
    // Sun horizontal stripes
    ctx.fillStyle = '#28004d';
    for (let s = 10; s < 50; s += 8) {
      ctx.fillRect(this.width / 2 - 55, horizonY - s, 110, 3);
    }
    ctx.restore();

    // 2. 3D Synthwave Ground Grid
    const ground = ctx.createLinearGradient(0, horizonY, 0, this.height);
    ground.addColorStop(0, '#10002b');
    ground.addColorStop(1, '#050014');
    ctx.fillStyle = ground;
    ctx.fillRect(0, horizonY, this.width, this.height - horizonY);

    // Perspective Road Grid Lines
    ctx.strokeStyle = '#00dfd8';
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#00dfd8';
    ctx.shadowBlur = 8;

    // Perspective Vanishing Lines
    for (let l = -3; l <= 3; l++) {
      const start = this.project3D(l, 0);
      const end = this.project3D(l, 1000);
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    }

    // Horizontal Moving Grid Lines
    for (let z = this.gridOffset; z < 1000; z += 70) {
      const pLeft = this.project3D(-3, z);
      const pRight = this.project3D(3, z);
      ctx.beginPath();
      ctx.moveTo(pLeft.x, pLeft.y);
      ctx.lineTo(pRight.x, pRight.y);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;

    // 3. Render 3D Warp Rings & Gates (Sort by distance Z descending)
    const sortedGates = [...this.gates].sort((a, b) => b.z - a.z);
    for (const g of sortedGates) {
      this.renderWarpGate(ctx, g);
    }

    // 4. Render Cyber Supercar (Player in foreground)
    const carPos = this.project3D(this.playerVisualLane, 30);
    this.renderCyberCar(ctx, carPos.x, this.height - 45);

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#00dfd8';
    ctx.fillText(`WARP GATES: ${this.gatesClearedCount} / ${this.gatesGoal}`, 30, 25);
    ctx.fillStyle = '#f9cb28';
    ctx.textAlign = 'right';
    const mph = Math.round(this.currentSpeed * (this.warpBoostTime > 0 ? 1.8 : 1.0));
    ctx.fillText(`VELOCITY: ${mph} MPH ${this.warpBoostTime > 0 ? '[NITRO BOOST]' : ''}`, this.width - 30, 25);
    ctx.textAlign = 'left';
  }

  private renderCyberCar(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.save();
    ctx.translate(x, y);

    // Neon Underglow
    ctx.fillStyle = this.warpBoostTime > 0 ? 'rgba(0, 223, 216, 0.6)' : 'rgba(255, 0, 128, 0.5)';
    ctx.shadowColor = this.warpBoostTime > 0 ? '#00dfd8' : '#ff0080';
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.ellipse(0, 5, 36, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Twin Plasma Exhaust Flames
    const boostFlames = this.warpBoostTime > 0 ? 25 : 12;
    ctx.fillStyle = '#00dfd8';
    ctx.fillRect(-18, 6, 8, boostFlames + Math.random() * 6);
    ctx.fillRect(10, 6, 8, boostFlames + Math.random() * 6);

    // Aerodynamic Cyber Supercar Body
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(-28, 6);
    ctx.lineTo(-20, -18);
    ctx.lineTo(20, -18);
    ctx.lineTo(28, 6);
    ctx.closePath();
    ctx.fill();

    // Tinted Rear Windshield
    ctx.fillStyle = '#111827';
    ctx.fillRect(-14, -14, 28, 10);

    // Glowing Neon Taillight Bar
    ctx.fillStyle = '#ff0080';
    ctx.shadowColor = '#ff0080';
    ctx.shadowBlur = 10;
    ctx.fillRect(-26, 0, 52, 4);

    ctx.restore();
  }

  private renderWarpGate(ctx: CanvasRenderingContext2D, g: WarpGate): void {
    const isTarget = this.currentTarget === g;
    const pos = this.project3D(g.lane, g.z);
    const gateW = 180 * pos.scale;
    const gateH = 140 * pos.scale;

    ctx.save();
    ctx.strokeStyle = g.color;
    ctx.lineWidth = Math.max(2, 4 * pos.scale);
    ctx.shadowColor = g.color;
    ctx.shadowBlur = isTarget ? 20 : 10;

    // Glowing Arch Ring
    ctx.beginPath();
    ctx.arc(pos.x, pos.y - gateH / 2, gateW / 2, Math.PI, 0);
    ctx.lineTo(pos.x + gateW / 2, pos.y);
    ctx.lineTo(pos.x - gateW / 2, pos.y);
    ctx.closePath();
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();

    // Word Badge (scaled with perspective)
    if (g.z < 800) {
      const fontSize = Math.max(10, Math.min(18, Math.round(18 * pos.scale)));
      this.drawWordBadge(ctx, g.word, g.typedIndex, pos.x, pos.y - gateH - 12, isTarget, '#50e3c2', fontSize);
    }
  }
}
