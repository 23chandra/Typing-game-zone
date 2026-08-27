// Game 19: Speed Typer Pro (Grand Prix Drag Race & Live Telemetry Dashboard)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface CompetitorCar {
  name: string;
  progress: number;
  wpm: number;
  color: string;
  lane: number;
}

export class SpeedTyperProGame extends BaseGame {
  private trackLength: number = 500;
  private playerProgress: number = 0;
  private currentWord: string = '';
  private typedIndex: number = 0;
  private instantWPM: number = 0;
  private competitors: CompetitorCar[] = [];
  private wordsCompleted: number = 0;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Amateur 400m Drag Strip', description: 'Compete against Rookie AI bots pacing at 35 WPM.', targetWPM: 35, wordCount: 15, speed: 35 },
      { level: 2, name: 'Semi-Pro Asphalt Circuit', description: 'Faster AI racers holding a steady 50 WPM drafting line.', targetWPM: 50, wordCount: 20, speed: 50 },
      { level: 3, name: 'Pro Grand Prix Championship', description: 'Championship racers pushing high-speed 70 WPM velocities.', targetWPM: 70, wordCount: 25, speed: 70 },
      { level: 4, name: 'Hyper League Qualifier', description: 'Elite bot ghosts pacing at 85+ WPM straightaways.', targetWPM: 85, wordCount: 30, speed: 85 },
      { level: 5, name: 'Formula Typer World Championship', description: 'Outrun the legendary Ghost Racer cruising at 105+ WPM!', targetWPM: 105, wordCount: 35, speed: 105 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.playerProgress = 0;
    this.wordsCompleted = 0;
    this.trackLength = 400 + levelNumber * 50;
    this.idleTime = 0;

    const botBaseWpm = lvl.targetWPM;
    this.competitors = [
      { name: 'Racer Alpha', progress: 0, wpm: botBaseWpm * 0.9, color: '#00dfd8', lane: 1 },
      { name: 'Racer Bravo', progress: 0, wpm: botBaseWpm * 0.96, color: '#f9cb28', lane: 2 },
      { name: 'Ghost Champ', progress: 0, wpm: botBaseWpm * 1.04, color: '#ff0080', lane: 3 }
    ];

    this.nextWord();
  }

  private nextWord(): void {
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'hard';
    this.currentWord = getRandomWord(cat);
    this.typedIndex = 0;
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    const expected = this.currentWord[this.typedIndex]?.toLowerCase();
    if (char.toLowerCase() === expected) {
      this.typedIndex++;
      this.recordKeystroke(true);

      // Advance Player Formula Car per correct character
      this.playerProgress += 14;

      if (this.typedIndex >= this.currentWord.length) {
        this.wordsCompleted++;
        this.wordsCompletedInLevel++;
        this.score += 50;
        soundEngine.playChime();
        this.spawnExplosion(120, this.getLaneY(0), '#50e3c2', 14);
        this.addFloatingText(this.width / 2, this.getLaneY(0) - 30, '+50 SHIFT GEAR!', '#50e3c2', 20);

        if (this.playerProgress >= this.trackLength) {
          this.addFloatingText(this.width / 2, this.height * 0.4, '🏁 1ST PLACE VICTORY! 🏁', '#f9cb28', 30);
          this.triggerLevelClear();
          return;
        }

        this.nextWord();
      }
    } else {
      this.recordKeystroke(false);
    }
  }

  public handleBackspaceKey(): void {
    if (this.typedIndex > 0) {
      this.typedIndex--;
      soundEngine.playKey();
    }
  }

  private getLaneY(lane: number): number {
    const startY = 120;
    const laneH = (this.height - 200) / 4;
    return startY + lane * laneH + laneH / 2;
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    // Advance AI Competitor Cars
    for (const bot of this.competitors) {
      const cps = (bot.wpm * 5) / 60;
      bot.progress += cps * 14 * dt;

      if (bot.progress >= this.trackLength && this.playerProgress < this.trackLength) {
        this.takeDamage(100); // AI crossed finish line first
        return;
      }
    }

    const stats = this.getStats();
    this.instantWPM = stats.netWPM;
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Asphalt Drag Strip Track
    ctx.fillStyle = '#0e121a';
    ctx.fillRect(0, 0, this.width, this.height);

    const startY = 110;
    const trackH = this.height - 200;
    const laneH = trackH / 4;

    // Asphalt Pavement
    ctx.fillStyle = '#181f2c';
    ctx.fillRect(30, startY, this.width - 60, trackH);

    // Lane Dividing Dashes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.setLineDash([16, 16]);
    for (let l = 1; l < 4; l++) {
      ctx.beginPath();
      ctx.moveTo(30, startY + l * laneH);
      ctx.lineTo(this.width - 30, startY + l * laneH);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Finish Line Checkers (Right side)
    const finishX = this.width - 80;
    for (let f = 0; f < 10; f++) {
      ctx.fillStyle = f % 2 === 0 ? '#ffffff' : '#000000';
      ctx.fillRect(finishX, startY + f * (trackH / 10), 10, trackH / 10);
      ctx.fillStyle = f % 2 === 0 ? '#000000' : '#ffffff';
      ctx.fillRect(finishX + 10, startY + f * (trackH / 10), 10, trackH / 10);
    }

    // 2. Render Player Formula Car (Lane 0)
    this.renderFormulaCar(ctx, this.playerProgress, 0, '#50e3c2', 'PLAYER');

    // 3. Render AI Competitor Cars (Lanes 1-3)
    for (const bot of this.competitors) {
      this.renderFormulaCar(ctx, bot.progress, bot.lane, bot.color, bot.name);
    }

    // 4. Live Speedometer Dashboard & Word Prompt Bar (Bottom)
    this.renderSpeedometerDashboard(ctx);

    // Center Word Prompt
    this.drawWordBadge(ctx, this.currentWord, this.typedIndex, this.width / 2, 60, true, '#50e3c2', 24);
  }

  private renderFormulaCar(ctx: CanvasRenderingContext2D, progress: number, laneIndex: number, color: string, label: string): void {
    const cy = this.getLaneY(laneIndex);
    const trackW = this.width - 180;
    const cx = 60 + Math.min(trackW, (progress / this.trackLength) * trackW);

    ctx.save();
    ctx.translate(cx, cy);

    // Formula F1 Car Body
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.fillRect(-24, -8, 48, 16);

    // Front Nosecone
    ctx.beginPath();
    ctx.moveTo(24, -8);
    ctx.lineTo(34, 0);
    ctx.lineTo(24, 8);
    ctx.closePath();
    ctx.fill();

    // Rear Aerodynamic Spoiler Wing
    ctx.fillStyle = '#111827';
    ctx.fillRect(-28, -12, 6, 24);

    // Wheels (4 Black Tires with Silver Hubs)
    ctx.fillStyle = '#000000';
    ctx.fillRect(-18, -14, 10, 5);
    ctx.fillRect(12, -14, 10, 5);
    ctx.fillRect(-18, 9, 10, 5);
    ctx.fillRect(12, 9, 10, 5);

    // Driver Helmet with Tinted Visor
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#00dfd8';
    ctx.fillRect(1, -2, 4, 4);

    ctx.shadowBlur = 0;
    ctx.restore();

    // Driver Label & Progress Meter
    ctx.font = 'bold 9px "Geist Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${label} [${Math.round((progress / this.trackLength) * 100)}%]`, 40, cy - 14);
  }

  private renderSpeedometerDashboard(ctx: CanvasRenderingContext2D): void {
    const dashY = this.height - 70;
    ctx.fillStyle = '#0b0f17';
    ctx.fillRect(0, dashY, this.width, 70);
    ctx.strokeStyle = '#00dfd8';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, dashY, this.width, 70);

    // Analog Speedometer Needle Dial on Left
    const dialX = 80;
    const dialY = dashY + 35;
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(dialX, dialY, 26, Math.PI * 0.75, Math.PI * 2.25);
    ctx.stroke();

    // Speed Needle
    const wpmRatio = Math.min(1.0, this.instantWPM / 120);
    const needleAngle = Math.PI * 0.75 + wpmRatio * (Math.PI * 1.5);
    ctx.strokeStyle = '#ff0080';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(dialX, dialY);
    ctx.lineTo(dialX + Math.cos(needleAngle) * 22, dialY + Math.sin(needleAngle) * 22);
    ctx.stroke();
    ctx.restore();

    // Digital WPM readout
    ctx.font = 'bold 20px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText(`${this.instantWPM} WPM`, 125, dashY + 36);

    ctx.font = '10px "Geist Mono", monospace';
    ctx.fillStyle = '#8b949e';
    ctx.fillText(`ACCURACY: ${this.getStats().accuracy}% | STREAK: ${this.streak}x`, 125, dashY + 54);
  }
}
