// Game 12: Deep Sea Submarine (Abyssal Trench Sonar & Bioluminescent Fauna)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface SeaCreature {
  id: number;
  x: number;
  y: number;
  word: string;
  typedIndex: number;
  speed: number;
  type: 'jellyfish' | 'anglerfish' | 'manta' | 'kraken';
  color: string;
  size: number;
  pulsePhase: number;
}

export class DeepSeaGame extends BaseGame {
  private creatures: SeaCreature[] = [];
  private currentTarget: SeaCreature | null = null;
  private subY: number = 250;
  private subTargetY: number = 250;
  private bubbles: { x: number; y: number; r: number; speed: number }[] = [];
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.4;
  private nextId: number = 1;
  private creaturesCataloged: number = 0;
  private creatureGoal: number = 12;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Sunlight Twilight Zone (200m)', description: 'Bioluminescent jellyfish drifting through the upper coral shelf.', targetWPM: 30, wordCount: 10, speed: 25 },
      { level: 2, name: 'Midnight Bathyal Zone (1,000m)', description: 'Luminous anglerfish hunting in the total oceanic darkness.', targetWPM: 45, wordCount: 14, speed: 36 },
      { level: 3, name: 'Abyssal Plain (4,000m)', description: 'Electric neon manta rays gliding across geothermal vents.', targetWPM: 60, wordCount: 18, speed: 48 },
      { level: 4, name: 'Hadal Trench Vents (7,000m)', description: 'High-pressure hydrothermal vent fauna in boiling currents.', targetWPM: 75, wordCount: 22, speed: 60 },
      { level: 5, name: 'Mariana Trench Abyss - The Kraken', description: 'Survive the legendary Colossal Kraken deep within the Mariana Trench (11,000m)!', targetWPM: 90, wordCount: 28, speed: 75, bossHealth: 8 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.creatureGoal = lvl.wordCount;
    this.creaturesCataloged = 0;
    this.spawnInterval = Math.max(1.1, 2.7 - levelNumber * 0.35);
    this.spawnTimer = 0.5;
    this.creatures = [];
    this.currentTarget = null;
    this.subY = this.height / 2;
    this.subTargetY = this.height / 2;
    this.idleTime = 0;

    // Ambient Oxygen Bubbles
    if (this.bubbles.length === 0) {
      for (let i = 0; i < 35; i++) {
        this.bubbles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          r: Math.random() * 3.5 + 1.5,
          speed: Math.random() * 40 + 20
        });
      }
    }
  }

  private spawnCreature(): void {
    if (this.creaturesCataloged + this.creatures.length >= this.creatureGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'medium' : 'space';
    const word = getRandomWord(cat);
    const isBoss = this.currentLevel === 5 && this.creatures.length === 0 && this.creaturesCataloged === 0;
    const type: 'jellyfish' | 'anglerfish' | 'manta' | 'kraken' = isBoss
      ? 'kraken'
      : this.currentLevel >= 3 && Math.random() < 0.4
      ? 'manta'
      : Math.random() < 0.5
      ? 'anglerfish'
      : 'jellyfish';

    const baseSpeed = 25 + this.currentLevel * 7;
    const speed = isBoss ? 18 : type === 'manta' ? baseSpeed * 1.3 : baseSpeed;

    this.creatures.push({
      id: this.nextId++,
      x: this.width + 40,
      y: Math.random() * (this.height - 180) + 90,
      word,
      typedIndex: 0,
      speed,
      type,
      color: type === 'kraken' ? '#ff0080' : type === 'anglerfish' ? '#f9cb28' : type === 'manta' ? '#7928ca' : '#00dfd8',
      size: type === 'kraken' ? 55 : type === 'manta' ? 32 : 22,
      pulsePhase: Math.random() * Math.PI * 2
    });
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    if (this.currentTarget) {
      const next = this.currentTarget.word[this.currentTarget.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === next) {
        this.currentTarget.typedIndex++;
        this.recordKeystroke(true);
        soundEngine.playSonar();
        this.subTargetY = this.currentTarget.y; // Submarine pitches toward target
        this.spawnSparks(this.currentTarget.x, this.currentTarget.y, '#50e3c2', 4);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.catalogCreature(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.creatures
      .filter(c => c.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => a.x - b.x)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      soundEngine.playSonar();
      this.subTargetY = match.y;
      this.spawnSparks(match.x, match.y, '#50e3c2', 4);

      if (match.word.length === 1) {
        this.catalogCreature(match);
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

  private catalogCreature(creature: SeaCreature): void {
    soundEngine.playChime();
    this.spawnExplosion(creature.x, creature.y, creature.color, 24);
    this.triggerScreenShake(0.12, 5);
    this.addFloatingText(creature.x, creature.y - 25, '🌊 SONAR SCAN COMPLETE! +70', '#50e3c2', 18);

    const idx = this.creatures.indexOf(creature);
    if (idx !== -1) this.creatures.splice(idx, 1);

    this.creaturesCataloged++;
    this.wordsCompletedInLevel++;
    this.score += 70;

    if (this.creaturesCataloged >= this.creatureGoal && this.creatures.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    this.subY += (this.subTargetY - this.subY) * dt * 4;

    // Ambient Bubbles Rise
    for (const b of this.bubbles) {
      b.y -= b.speed * dt;
      if (b.y < -10) {
        b.y = this.height + 10;
        b.x = Math.random() * this.width;
      }
    }

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnCreature();
      this.spawnTimer = this.spawnInterval;
    }

    for (let i = this.creatures.length - 1; i >= 0; i--) {
      const c = this.creatures[i];
      c.x -= c.speed * dt;
      c.pulsePhase += dt * 3;

      if (c.x <= 140) {
        this.takeDamage(20);
        this.spawnExplosion(c.x, c.y, '#ee0000', 25);
        this.addFloatingText(140, c.y - 25, 'HULL COLLISION! -20 HP', '#ee0000', 18);
        if (this.currentTarget === c) this.currentTarget = null;
        this.creatures.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Deep Abyssal Ocean Canvas Gradient
    const ocean = ctx.createLinearGradient(0, 0, 0, this.height);
    ocean.addColorStop(0, '#021226');
    ocean.addColorStop(0.5, '#010a14');
    ocean.addColorStop(1, '#000408');
    ctx.fillStyle = ocean;
    ctx.fillRect(0, 0, this.width, this.height);

    // Oceanic Caustic Light Wave Shafts
    ctx.strokeStyle = 'rgba(0, 223, 216, 0.05)';
    ctx.lineWidth = 14;
    for (let l = 0; l < 5; l++) {
      ctx.beginPath();
      const lx = l * 180 + Math.sin(this.idleTime * 2 + l) * 20;
      ctx.moveTo(lx, 0);
      ctx.lineTo(lx - 80, this.height);
      ctx.stroke();
    }

    // Oxygen Bubbles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (const b of this.bubbles) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // HUD Counter
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#00dfd8';
    ctx.fillText(`SPECIES CATALOGED: ${this.creaturesCataloged} / ${this.creatureGoal}`, 30, 25);

    // 2. Render Submarine Searchlight Cone
    ctx.save();
    const lightCone = ctx.createRadialGradient(150, this.subY, 20, 360, this.subY, 220);
    lightCone.addColorStop(0, 'rgba(249, 203, 40, 0.35)');
    lightCone.addColorStop(1, 'rgba(249, 203, 40, 0)');
    ctx.fillStyle = lightCone;
    ctx.beginPath();
    ctx.moveTo(150, this.subY);
    ctx.lineTo(400, this.subY - 80);
    ctx.lineTo(400, this.subY + 80);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 3. Render Deep Sea Submarine (Left: x = 110)
    this.renderSubmarine(ctx, 110, this.subY);

    // 4. Render Bioluminescent Fauna
    for (const creature of this.creatures) {
      this.renderSeaCreature(ctx, creature);
    }
  }

  private renderSubmarine(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.save();
    ctx.translate(x, y);

    // Submarine Hull (Yellow & Steel)
    ctx.fillStyle = '#d69e2e';
    ctx.beginPath();
    ctx.ellipse(0, 0, 36, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    // Conning Tower
    ctx.fillStyle = '#b7791f';
    ctx.fillRect(-10, -25, 20, 10);
    // Periscope
    ctx.fillRect(-2, -32, 4, 8);
    ctx.fillRect(-2, -32, 8, 3);

    // Glass Front Porthole
    ctx.fillStyle = '#00dfd8';
    ctx.shadowColor = '#00dfd8';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(26, 0, 8, -Math.PI / 2, Math.PI / 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Spinning Rear Propeller
    const propY = Math.sin(this.idleTime * 25) * 8;
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-38, -propY);
    ctx.lineTo(-38, propY);
    ctx.stroke();

    ctx.restore();
  }

  private renderSeaCreature(ctx: CanvasRenderingContext2D, c: SeaCreature): void {
    ctx.save();
    const isTarget = this.currentTarget === c;
    const pulse = Math.sin(c.pulsePhase) * 3;

    ctx.translate(c.x, c.y);
    ctx.fillStyle = c.color;
    ctx.shadowColor = c.color;
    ctx.shadowBlur = isTarget ? 20 : 10;

    if (c.type === 'jellyfish') {
      // Pulsing Bioluminescent Jellyfish Bell
      ctx.beginPath();
      ctx.arc(0, -6, 16 + pulse, Math.PI, 0);
      ctx.fill();

      // Undulating Tentacles
      ctx.strokeStyle = c.color;
      ctx.lineWidth = 1.5;
      for (let t = -10; t <= 10; t += 5) {
        const tentWave = Math.sin(this.idleTime * 8 + t) * 6;
        ctx.beginPath();
        ctx.moveTo(t, 0);
        ctx.quadraticCurveTo(t + tentWave, 14, t, 26);
        ctx.stroke();
      }
    } else if (c.type === 'anglerfish') {
      // Anglerfish with glowing lure
      ctx.beginPath();
      ctx.ellipse(0, 0, 20, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      // Esca / Glowing Lure
      ctx.strokeStyle = '#cbd5e0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-10, -10);
      ctx.quadraticCurveTo(-18, -25, -28, -18);
      ctx.stroke();
      ctx.fillStyle = '#f9cb28';
      ctx.beginPath();
      ctx.arc(-28, -18, 5, 0, Math.PI * 2);
      ctx.fill();
    } else if (c.type === 'kraken') {
      // Giant Mariana Trench Kraken
      ctx.beginPath();
      ctx.arc(0, 0, 35 + pulse, 0, Math.PI * 2);
      ctx.fill();
      // Glowing menacing yellow eyes
      ctx.fillStyle = '#f9cb28';
      ctx.fillRect(-16, -10, 8, 6);
      ctx.fillRect(8, -10, 8, 6);
    } else {
      // Manta Ray
      ctx.beginPath();
      ctx.moveTo(18, 0);
      ctx.lineTo(-18, -16);
      ctx.lineTo(-12, 0);
      ctx.lineTo(-18, 16);
      ctx.closePath();
      ctx.fill();
    }

    ctx.shadowBlur = 0;
    ctx.restore();

    // Word Badge
    this.drawWordBadge(ctx, c.word, c.typedIndex, c.x, c.y + c.size + 14, isTarget, '#50e3c2', 13);
  }
}
