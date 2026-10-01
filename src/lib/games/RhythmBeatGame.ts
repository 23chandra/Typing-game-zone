// Game 18: Rhythm Beat Typer (4-Lane Synthwave Rhythm Highway & Audio Visualizer)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface BeatNote {
  id: number;
  lane: number; // 0, 1, 2, 3
  y: number;
  word: string;
  typedIndex: number;
  speed: number;
  color: string;
}

export class RhythmBeatGame extends BaseGame {
  private notes: BeatNote[] = [];
  private currentTarget: BeatNote | null = null;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.2;
  private nextId: number = 1;
  private notesHitCount: number = 0;
  private notesGoal: number = 15;
  private bpm: number = 110;
  private laneColors: string[] = ['#00dfd8', '#ff0080', '#f9cb28', '#7928ca'];
  private idleTime: number = 0;
  private equalizerBars: number[] = [0.4, 0.7, 0.9, 0.5, 0.8, 0.6, 0.3, 0.85, 0.65, 0.45];

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Synth Groove - 110 BPM', description: 'Match rhythm beats falling down the 4-lane synthwave highway.', targetWPM: 30, wordCount: 12, speed: 110 },
      { level: 2, name: 'Cyber Pulse - 128 BPM', description: 'Faster BPM tempo with staggered multi-lane syncopation.', targetWPM: 45, wordCount: 16, speed: 128 },
      { level: 3, name: 'Neon Overdrive - 145 BPM', description: 'High-energy electro beats requiring instant reflex timing.', targetWPM: 60, wordCount: 20, speed: 145 },
      { level: 4, name: 'Speedcore Rave - 165 BPM', description: 'Frenetic speedcore BPM tempo and rapid lane switching.', targetWPM: 75, wordCount: 24, speed: 165 },
      { level: 5, name: 'Grand Master DJ Apex - 185 BPM', description: 'Master the ultimate 185 BPM rhythm typhoon and reach DJ transcendence!', targetWPM: 90, wordCount: 30, speed: 185 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.notesGoal = lvl.wordCount;
    this.notesHitCount = 0;
    this.bpm = lvl.speed;
    this.spawnInterval = Math.max(0.9, (60 / this.bpm) * 3.5);
    this.spawnTimer = 0.4;
    this.notes = [];
    this.currentTarget = null;
    this.idleTime = 0;
  }

  private spawnNote(): void {
    if (this.notesHitCount + this.notes.length >= this.notesGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'space';
    const word = getRandomWord(cat);
    const lane = Math.floor(Math.random() * 4);
    const speed = (this.bpm / 60) * (this.currentLevel >= 4 ? 48 : 40);

    this.notes.push({
      id: this.nextId++,
      lane,
      y: -25,
      word,
      typedIndex: 0,
      speed,
      color: this.laneColors[lane]
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        const nx = this.getLaneX(this.currentTarget.lane);
        this.spawnSparks(nx, this.currentTarget.y, '#50e3c2', 5);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.hitNote(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.notes
      .filter(n => n.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => b.y - a.y)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      const nx = this.getLaneX(match.lane);
      this.spawnSparks(nx, match.y, '#50e3c2', 5);

      if (match.word.length === 1) {
        this.hitNote(match);
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

  private getLaneX(lane: number): number {
    const laneW = (this.width - 160) / 4;
    return 80 + lane * laneW + laneW / 2;
  }

  private hitNote(note: BeatNote): void {
    const strikeY = this.height - 75;
    const accuracyDelta = Math.abs(note.y - strikeY);
    const nx = this.getLaneX(note.lane);

    soundEngine.playChime();
    this.spawnExplosion(nx, note.y, note.color, 25);
    this.triggerScreenShake(0.12, 5);

    if (accuracyDelta < 30) {
      this.addFloatingText(nx, note.y - 25, '🔥 PERFECT!! +100', '#f9cb28', 22);
      this.score += 100;
    } else {
      this.addFloatingText(nx, note.y - 25, '✨ GREAT! +70', '#50e3c2', 18);
      this.score += 70;
    }

    const idx = this.notes.indexOf(note);
    if (idx !== -1) this.notes.splice(idx, 1);

    this.notesHitCount++;
    this.wordsCompletedInLevel++;

    if (this.notesHitCount >= this.notesGoal && this.notes.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    // Equalizer bars dynamic animation
    for (let i = 0; i < this.equalizerBars.length; i++) {
      this.equalizerBars[i] = 0.3 + Math.abs(Math.sin(this.idleTime * (this.bpm / 20) + i * 0.8)) * 0.7;
    }

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnNote();
      this.spawnTimer = this.spawnInterval;
    }

    const strikeY = this.height - 75;

    for (let i = this.notes.length - 1; i >= 0; i--) {
      const n = this.notes[i];
      n.y += n.speed * dt;

      if (n.y >= strikeY + 40) {
        this.takeDamage(20);
        const nx = this.getLaneX(n.lane);
        this.spawnExplosion(nx, strikeY, '#ee0000', 25);
        this.addFloatingText(nx, strikeY - 20, 'NOTE MISSED! -20 HP', '#ee0000', 18);
        if (this.currentTarget === n) this.currentTarget = null;
        this.notes.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Synthwave Equalizer Background
    const bg = ctx.createLinearGradient(0, 0, 0, this.height);
    bg.addColorStop(0, '#090014');
    bg.addColorStop(0.6, '#18002e');
    bg.addColorStop(1, '#2c004d');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, this.width, this.height);

    // Audio Visualizer Equalizer Bars at top
    for (let i = 0; i < this.equalizerBars.length; i++) {
      const barH = 35 * this.equalizerBars[i];
      ctx.fillStyle = 'rgba(0, 223, 216, 0.35)';
      ctx.fillRect(this.width / 2 - 120 + i * 25, 45 - barH, 18, barH);
    }

    // 2. 4-Lane 3D Perspective Highway
    const laneW = (this.width - 160) / 4;
    const startX = 80;
    const strikeY = this.height - 75;

    // Highway surface
    ctx.fillStyle = '#0f051d';
    ctx.fillRect(startX, 0, this.width - 160, this.height);

    // Lane Dividers
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    for (let l = 0; l <= 4; l++) {
      ctx.beginPath();
      ctx.moveTo(startX + l * laneW, 0);
      ctx.lineTo(startX + l * laneW, this.height);
      ctx.stroke();
    }

    // Target Judgment Strike Bar (Bottom)
    ctx.fillStyle = '#50e3c2';
    ctx.shadowColor = '#50e3c2';
    ctx.shadowBlur = 15;
    ctx.fillRect(startX, strikeY - 2, this.width - 160, 4);
    ctx.shadowBlur = 0;

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#f9cb28';
    ctx.fillText(`BEAT NOTES HIT: ${this.notesHitCount} / ${this.notesGoal}`, 30, 25);
    ctx.fillStyle = '#00dfd8';
    ctx.textAlign = 'right';
    ctx.fillText(`TEMPO: ${this.bpm} BPM [4-LANE SYNTH]`, this.width - 30, 25);
    ctx.textAlign = 'left';

    // 3. Render Falling Neon Beat Notes
    for (const note of this.notes) {
      this.renderBeatNote(ctx, note, laneW);
    }
  }

  private renderBeatNote(ctx: CanvasRenderingContext2D, n: BeatNote, laneW: number): void {
    ctx.save();
    const isTarget = this.currentTarget === n;
    const nx = this.getLaneX(n.lane);
    const noteW = laneW - 16;
    const noteH = 34;

    ctx.translate(nx, n.y);

    // Neon Gem Body
    ctx.fillStyle = isTarget ? 'rgba(0, 223, 216, 0.35)' : 'rgba(15, 10, 25, 0.9)';
    ctx.strokeStyle = isTarget ? '#50e3c2' : n.color;
    ctx.lineWidth = isTarget ? 2.5 : 1.5;
    ctx.shadowColor = isTarget ? '#50e3c2' : n.color;
    ctx.shadowBlur = isTarget ? 18 : 8;

    ctx.beginPath();
    ctx.roundRect(-noteW / 2, -noteH / 2, noteW, noteH, 6);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.restore();

    // Word Badge inside note
    this.drawWordBadge(ctx, n.word, n.typedIndex, nx, n.y, isTarget, '#50e3c2', 13);
  }
}
