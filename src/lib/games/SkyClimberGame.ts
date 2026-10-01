// Game 11: Sky Climber (Endless Vertical Cloud Hopper & Sky Ascent)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface CloudPlatform {
  id: number;
  x: number;
  y: number;
  word: string;
  typedIndex: number;
  cleared: boolean;
  type: 'normal' | 'storm' | 'star';
  size: number;
}

export class SkyClimberGame extends BaseGame {
  private clouds: CloudPlatform[] = [];
  private currentTarget: CloudPlatform | null = null;
  private climberX: number = 400;
  private climberY: number = 380;
  private climberTargetY: number = 380;
  private cameraY: number = 0;
  private nextId: number = 1;
  private altitude: number = 0;
  private goalAltitude: number = 12;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Treetop Forest Canopy', description: 'Hop onto floating cumulus clouds above the emerald forest.', targetWPM: 30, wordCount: 10, speed: 30 },
      { level: 2, name: 'Alpine Nimbus Heights', description: 'Bouncy clouds floating through high snow-capped mountain peaks.', targetWPM: 45, wordCount: 14, speed: 45 },
      { level: 3, name: 'Thunderstorm Lightning Ridge', description: 'Avoid crackling storm cloud hazards with quick typing precision.', targetWPM: 60, wordCount: 18, speed: 55 },
      { level: 4, name: 'Aurora Borealis Sky Zone', description: 'Vibrant neon aurora skies with drifting cosmic star platforms.', targetWPM: 75, wordCount: 22, speed: 70 },
      { level: 5, name: 'Stratosphere & Cosmic Crown', description: 'Ascend to the stars and touch the cosmic crown!', targetWPM: 90, wordCount: 28, speed: 85 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.goalAltitude = lvl.wordCount;
    this.altitude = 0;
    this.clouds = [];
    this.currentTarget = null;
    this.climberX = this.width / 2;
    this.climberY = this.height - 110;
    this.climberTargetY = this.height - 110;
    this.cameraY = 0;
    this.idleTime = 0;

    // Spawn initial stack of clouds
    for (let i = 0; i < 4; i++) {
      const cat = levelNumber === 1 ? 'easy' : levelNumber <= 3 ? 'medium' : 'space';
      const word = getRandomWord(cat);
      const cx = (i % 2 === 0 ? 0.32 : 0.68) * this.width + (Math.random() - 0.5) * 80;
      this.clouds.push({
        id: this.nextId++,
        x: cx,
        y: this.height - 190 - i * 115,
        word,
        typedIndex: 0,
        cleared: false,
        type: Math.random() < 0.25 ? 'star' : 'normal',
        size: 55
      });
    }
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        this.spawnSparks(this.currentTarget.x, this.currentTarget.y - this.cameraY, '#50e3c2', 4);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.bounceToCloud(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.clouds
      .filter(c => !c.cleared && c.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => b.y - a.y)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.spawnSparks(match.x, match.y - this.cameraY, '#50e3c2', 4);

      if (match.word.length === 1) {
        this.bounceToCloud(match);
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

  private bounceToCloud(cloud: CloudPlatform): void {
    cloud.cleared = true;
    soundEngine.playChime();
    this.climberX = cloud.x;
    this.climberTargetY = cloud.y - 28;
    this.spawnExplosion(cloud.x, cloud.y - this.cameraY, '#f9cb28', 20);
    this.addFloatingText(cloud.x, cloud.y - this.cameraY - 25, '⭐ CLOUD BOUNCE! +70', '#f9cb28', 18);

    this.altitude++;
    this.wordsCompletedInLevel++;
    this.score += 70;

    // Spawn next cloud higher up
    if (this.altitude + this.clouds.filter(c => !c.cleared).length < this.goalAltitude + 2) {
      const highestY = this.clouds.length > 0 ? Math.min(...this.clouds.map(c => c.y)) : this.height - 190;
      const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'space';
      this.clouds.push({
        id: this.nextId++,
        x: Math.random() * (this.width - 240) + 120,
        y: highestY - 115,
        word: getRandomWord(cat),
        typedIndex: 0,
        cleared: false,
        type: Math.random() < 0.25 ? 'star' : 'normal',
        size: 55
      });
    }

    if (this.altitude >= this.goalAltitude) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    // Smooth climber hop
    this.climberY += (this.climberTargetY - this.climberY) * dt * 8;

    // Smooth camera scroll
    const targetCameraY = (this.height - 220) - this.climberY;
    this.cameraY += (targetCameraY - this.cameraY) * dt * 5;

    // Clean up old clouds
    for (let i = this.clouds.length - 1; i >= 0; i--) {
      if (this.clouds[i].y - this.cameraY > this.height + 100) {
        this.clouds.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Atmosphere Gradient (Transitions to deep cosmic blue/violet with altitude)
    const altRatio = Math.min(1.0, this.altitude / this.goalAltitude);
    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    if (altRatio < 0.4) {
      sky.addColorStop(0, '#0284c7');
      sky.addColorStop(0.6, '#38bdf8');
      sky.addColorStop(1, '#bae6fd');
    } else if (altRatio < 0.8) {
      sky.addColorStop(0, '#311042');
      sky.addColorStop(0.5, '#6b21a8');
      sky.addColorStop(1, '#f472b6');
    } else {
      sky.addColorStop(0, '#030014');
      sky.addColorStop(0.6, '#1e0836');
      sky.addColorStop(1, '#4c1d95');
    }
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);

    // Drifting Distant Stars / Sparkles
    ctx.fillStyle = '#ffffff';
    for (let s = 0; s < 25; s++) {
      const sx = (s * 39 + this.idleTime * 2) % this.width;
      const sy = (s * 23 - this.cameraY * 0.2) % this.height;
      if (sy > 0) ctx.fillRect(sx, sy, 2, 2);
    }

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`ALTITUDE: ${this.altitude * 100} METERS [GOAL: ${this.goalAltitude * 100}M]`, 30, 25);

    // 2. Render Cloud Platforms
    for (const cloud of this.clouds) {
      this.renderCloudPlatform(ctx, cloud);
    }

    // 3. Render Climber Hero Character
    const screenClimberY = this.climberY - this.cameraY;
    this.renderClimberHero(ctx, this.climberX, screenClimberY);
  }

  private renderClimberHero(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.save();
    const isJumping = Math.abs(this.climberTargetY - this.climberY) > 5;
    const squash = isJumping ? 1.2 : 1.0;

    ctx.translate(x, y);
    ctx.scale(1 / squash, squash);

    // Explorer Backpack (Red)
    ctx.fillStyle = '#e53e3e';
    ctx.fillRect(-14, -28, 6, 16);

    // Body (Cyan Jacket)
    ctx.fillStyle = '#0070f3';
    ctx.beginPath();
    ctx.arc(0, -18, 13, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#fcd3a1';
    ctx.beginPath();
    ctx.arc(0, -32, 10, 0, Math.PI * 2);
    ctx.fill();

    // Aviator Goggles & Yellow Cap
    ctx.fillStyle = '#f9cb28';
    ctx.fillRect(-10, -42, 20, 7);
    ctx.fillStyle = '#00dfd8';
    ctx.fillRect(-6, -35, 12, 4);

    // Propeller spinning atop cap
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    const propAngle = this.idleTime * 20;
    ctx.beginPath();
    ctx.moveTo(Math.cos(propAngle) * 12, -45);
    ctx.lineTo(-Math.cos(propAngle) * 12, -45);
    ctx.stroke();

    ctx.restore();
  }

  private renderCloudPlatform(ctx: CanvasRenderingContext2D, c: CloudPlatform): void {
    const screenY = c.y - this.cameraY;
    if (screenY < -80 || screenY > this.height + 80) return;

    ctx.save();
    const isTarget = this.currentTarget === c;
    ctx.translate(c.x, screenY);

    // Cloud Puff Body
    ctx.fillStyle = c.type === 'star' ? '#fef3c7' : '#ffffff';
    ctx.shadowColor = c.type === 'star' ? '#f59e0b' : 'rgba(0, 124, 240, 0.4)';
    ctx.shadowBlur = isTarget ? 18 : 8;

    ctx.beginPath();
    ctx.arc(-20, 0, 18, 0, Math.PI * 2);
    ctx.arc(0, -10, 24, 0, Math.PI * 2);
    ctx.arc(20, 0, 18, 0, Math.PI * 2);
    ctx.fill();

    // Star Decor
    if (c.type === 'star') {
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⭐', 0, 5);
    }

    ctx.restore();

    // Word Badge
    this.drawWordBadge(ctx, c.word, c.typedIndex, c.x, screenY - 32, isTarget, '#50e3c2', 13);
  }
}
