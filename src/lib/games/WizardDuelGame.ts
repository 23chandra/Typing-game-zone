// Game 14: Wizard Duel (Elemental Spellcaster Clash & Arcane Battles)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface WizardOpponent {
  name: string;
  title: string;
  hp: number;
  castRate: number;
  robeColor: string;
  staffColor: string;
  element: 'fire' | 'frost' | 'thunder' | 'dark' | 'cosmic';
}

export class WizardDuelGame extends BaseGame {
  private wizardHp: number = 100;
  private wizardMaxHp: number = 100;
  private wizardLagHp: number = 100;
  private playerLagHp: number = 100;
  private castTimer: number = 4.5;
  private castInterval: number = 4.5;
  private currentIncantation: string = '';
  private typedIndex: number = 0;
  private spellType: 'fire' | 'frost' | 'lightning' = 'fire';
  private spellBeams: { x: number; y: number; tx: number; ty: number; color: string; life: number; maxLife: number }[] = [];
  private runicCircleAngle: number = 0;
  private idleTime: number = 0;
  private arcaneMotes: { x: number; y: number; angle: number; dist: number; speed: number; color: string }[] = [];

  private duelOpponents: WizardOpponent[] = [
    { name: 'Pyromancer Ignis', title: 'Infernal Flame Scholar', hp: 100, castRate: 4.5, robeColor: '#c53030', staffColor: '#ff4d4d', element: 'fire' },
    { name: 'Frost Witch Glacia', title: 'Arch-Sorceress of the Glacial Peak', hp: 140, castRate: 3.9, robeColor: '#2b6cb0', staffColor: '#00dfd8', element: 'frost' },
    { name: 'Stormcaller Zephyr', title: 'High Cleric of the Tempest', hp: 180, castRate: 3.3, robeColor: '#d69e2e', staffColor: '#f9cb28', element: 'thunder' },
    { name: 'Necromancer Malakor', title: 'Warlock of the Shadow Crypt', hp: 230, castRate: 2.8, robeColor: '#553c9a', staffColor: '#7928ca', element: 'dark' },
    { name: 'Grand Archmage Aurelius', title: 'Keeper of the Ancient Celestial Dragon', hp: 300, castRate: 2.3, robeColor: '#97266d', staffColor: '#ff0080', element: 'cosmic' }
  ];

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Sanctum Spire - Pyromancer Ignis', description: 'Counter fire incantations before the flame meter expires.', targetWPM: 30, wordCount: 8, speed: 4.5, bossHealth: 100 },
      { level: 2, name: 'Glacial Cavern - Witch Glacia', description: 'Weave frost incantations to shatter ice shields (3.9s limit).', targetWPM: 45, wordCount: 12, speed: 3.9, bossHealth: 140 },
      { level: 3, name: 'Thunder Peak - Stormcaller Zephyr', description: 'Lightning-fast spell duels under crackling thunderbolts.', targetWPM: 60, wordCount: 15, speed: 3.3, bossHealth: 180 },
      { level: 4, name: 'Shadow Abyss - Malakor', description: 'Dispel dark necrotic curses draining your vital life force.', targetWPM: 75, wordCount: 18, speed: 2.8, bossHealth: 230 },
      { level: 5, name: 'Celestial Nexus - Grand Archmage', description: 'Final mystical clash against Archmage Aurelius and the Astral Dragon!', targetWPM: 90, wordCount: 22, speed: 2.3, bossHealth: 300 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const opp = this.duelOpponents[levelNumber - 1] || this.duelOpponents[0];
    this.wizardHp = opp.hp;
    this.wizardMaxHp = opp.hp;
    this.wizardLagHp = opp.hp;
    this.playerLagHp = this.health;
    this.castInterval = opp.castRate;
    this.castTimer = opp.castRate;
    this.spellBeams = [];
    this.idleTime = 0;

    // Arcane Motes orbiting player staff
    this.arcaneMotes = [];
    for (let i = 0; i < 6; i++) {
      this.arcaneMotes.push({
        x: 0,
        y: 0,
        angle: (i * Math.PI * 2) / 6,
        dist: Math.random() * 12 + 10,
        speed: Math.random() * 2 + 2,
        color: i % 2 === 0 ? '#50e3c2' : '#00dfd8'
      });
    }

    this.nextIncantation();
  }

  private nextIncantation(): void {
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'fantasy' : 'hard';
    this.currentIncantation = getRandomWord(cat);
    this.typedIndex = 0;
    const types: ('fire' | 'frost' | 'lightning')[] = ['fire', 'frost', 'lightning'];
    this.spellType = types[Math.floor(Math.random() * types.length)];
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    const expected = this.currentIncantation[this.typedIndex]?.toLowerCase();
    if (char.toLowerCase() === expected) {
      this.typedIndex++;
      this.recordKeystroke(true);
      soundEngine.playMagic();
      this.spawnSparks(180, this.height - 145, this.getSpellColor(), 4);

      if (this.typedIndex >= this.currentIncantation.length) {
        this.castSpell();
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

  private getSpellColor(): string {
    return this.spellType === 'fire' ? '#ff4d4d' : this.spellType === 'frost' ? '#00dfd8' : '#f9cb28';
  }

  private castSpell(): void {
    soundEngine.playMagic();
    const color = this.getSpellColor();
    const damage = 35;
    const playerX = Math.max(60, Math.min(180, this.width * 0.22));
    const oppX = Math.max(playerX + 110, Math.min(this.width - 60, this.width * 0.78));

    this.spellBeams.push({
      x: playerX + 15,
      y: this.height - 145,
      tx: oppX - 15,
      ty: this.height - 145,
      color,
      life: 0.38,
      maxLife: 0.38
    });

    this.spawnExplosion(oppX, this.height - 145, color, 30);
    this.triggerScreenShake(0.22, 9);
    this.triggerFlash(0.12, color);
    this.wizardHp -= damage;

    this.wordsCompletedInLevel++;
    this.score += 70;
    this.addFloatingText(oppX, this.height - 190, `✨ ${this.spellType.toUpperCase()} BURST! -${damage} HP`, color, 22);

    if (this.wizardHp <= 0) {
      this.wizardHp = 0;
      this.addFloatingText(this.width / 2, this.height * 0.35, '🌟 SPELL DUEL WON! 🌟', '#f9cb28', 30);
      this.triggerLevelClear();
      return;
    }

    this.castTimer = this.castInterval;
    this.nextIncantation();
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    this.runicCircleAngle += dt * 1.5;
    const playerX = Math.max(60, Math.min(180, this.width * 0.22));
    const oppX = Math.max(playerX + 110, Math.min(this.width - 60, this.width * 0.78));

    // Smooth Health Lag Bars
    if (this.wizardLagHp > this.wizardHp) {
      this.wizardLagHp = Math.max(this.wizardHp, this.wizardLagHp - dt * 50);
    }
    if (this.playerLagHp > this.health) {
      this.playerLagHp = Math.max(this.health, this.playerLagHp - dt * 40);
    }

    // Arcane Motes Update
    for (const m of this.arcaneMotes) {
      m.angle += m.speed * dt;
    }

    // Spell beams decay
    for (let i = this.spellBeams.length - 1; i >= 0; i--) {
      this.spellBeams[i].life -= dt;
      if (this.spellBeams[i].life <= 0) {
        this.spellBeams.splice(i, 1);
      }
    }

    // Opponent Cast Timer
    if (this.wizardHp > 0 && this.health > 0) {
      this.castTimer -= dt;
      if (this.castTimer <= 0) {
        this.castTimer = this.castInterval;
        this.takeDamage(25);
        const opp = this.duelOpponents[this.currentLevel - 1] || this.duelOpponents[0];
        this.spellBeams.push({
          x: oppX - 15,
          y: this.height - 145,
          tx: playerX + 15,
          ty: this.height - 145,
          color: opp.staffColor,
          life: 0.38,
          maxLife: 0.38
        });
        this.spawnExplosion(playerX, this.height - 145, opp.staffColor, 25);
        this.addFloatingText(playerX, this.height - 190, `CURSE STRIKE! -25 HP`, '#ee0000', 20);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    const opp = this.duelOpponents[this.currentLevel - 1] || this.duelOpponents[0];

    // 1. Mystical Arcane Nexus Sky Canvas
    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    sky.addColorStop(0, '#06040d');
    sky.addColorStop(0.5, '#120b24');
    sky.addColorStop(1, '#24143d');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);

    // Floating Starlight Nebula Particles in background
    ctx.fillStyle = '#ffffff';
    for (let s = 0; s < 25; s++) {
      const sx = (s * 37 + this.idleTime * 4) % this.width;
      const sy = (s * 19) % (this.height - 120);
      const sAlpha = Math.sin(this.idleTime * 2 + s) * 0.4 + 0.5;
      ctx.globalAlpha = Math.max(0.1, sAlpha);
      ctx.fillRect(sx, sy, 2, 2);
    }
    ctx.globalAlpha = 1.0;

    // Astral Dragon Silhouette (Level 5 Boss)
    if (opp.element === 'cosmic') {
      ctx.save();
      ctx.fillStyle = 'rgba(255, 0, 128, 0.2)';
      ctx.shadowColor = '#ff0080';
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.arc(this.width - 190, this.height * 0.3, 50, 0, Math.PI * 2);
      ctx.fill();
      // Glowing Dragon Horns
      ctx.fillStyle = '#ff0080';
      ctx.beginPath();
      ctx.moveTo(this.width - 230, this.height * 0.25);
      ctx.lineTo(this.width - 270, this.height * 0.15);
      ctx.lineTo(this.width - 220, this.height * 0.22);
      ctx.moveTo(this.width - 150, this.height * 0.25);
      ctx.lineTo(this.width - 110, this.height * 0.15);
      ctx.lineTo(this.width - 160, this.height * 0.22);
      ctx.fill();
      ctx.restore();
    }

    // Arcane Platform Stone Floor
    const floorY = this.height - 85;
    ctx.fillStyle = '#1c152e';
    ctx.fillRect(0, floorY, this.width, 85);
    ctx.fillStyle = '#7928ca';
    ctx.fillRect(0, floorY, this.width, 3);

    const playerX = Math.max(60, Math.min(180, this.width * 0.22));
    const oppX = Math.max(playerX + 110, Math.min(this.width - 60, this.width * 0.78));

    // Glowing Runic Circles on Floor (Player & Opponent)
    this.drawRunicCircle(ctx, playerX, floorY, '#50e3c2', this.runicCircleAngle);
    this.drawRunicCircle(ctx, oppX, floorY, opp.staffColor, -this.runicCircleAngle);

    // 2. Health & Telemetry Bars UI
    const barWidth = Math.min(260, (this.width - 120) / 2);
    const barH = 16;
    const topY = 24;

    // Player Mana/Health (Left)
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(36, topY - 2, barWidth + 8, barH + 4);
    const pLagPct = Math.max(0, this.playerLagHp / this.maxHealth);
    ctx.fillStyle = '#ee0000';
    ctx.fillRect(40, topY, barWidth * pLagPct, barH);
    const pHealthPct = Math.max(0, this.health / this.maxHealth);
    ctx.fillStyle = '#00dfd8';
    ctx.fillRect(40, topY, barWidth * pHealthPct, barH);

    ctx.font = 'bold 11px "Geist Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`ARCHMAGE  ${this.health} / 100`, 44, topY + 12);

    // Opponent Wizard Health (Right)
    const oppRightX = this.width - 40;
    const oppLeftX = oppRightX - barWidth;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(oppLeftX - 4, topY - 2, barWidth + 8, barH + 4);
    const oppLagPct = Math.max(0, this.wizardLagHp / this.wizardMaxHp);
    ctx.fillStyle = '#f9cb28';
    ctx.fillRect(oppRightX - barWidth * oppLagPct, topY, barWidth * oppLagPct, barH);
    const oppHealthPct = Math.max(0, this.wizardHp / this.wizardMaxHp);
    ctx.fillStyle = opp.staffColor;
    ctx.fillRect(oppRightX - barWidth * oppHealthPct, topY, barWidth * oppHealthPct, barH);

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'right';
    ctx.fillText(`${opp.name}  ${Math.floor(this.wizardHp)} HP`, oppRightX - 4, topY + 12);
    ctx.textAlign = 'left';

    // Opponent Cast Timer Bar
    const castPct = Math.max(0, this.castTimer / this.castInterval);
    ctx.fillStyle = castPct < 0.35 ? '#ff0080' : '#f9cb28';
    ctx.fillRect(oppLeftX, topY + barH + 4, barWidth * castPct, 4);

    // 3. Render Player Wizard (Left)
    this.renderPlayerMage(ctx, playerX, floorY);

    // 4. Render Opponent Wizard (Right)
    this.renderOpponentMage(ctx, oppX, floorY, opp);

    // 5. Render Spell Beams & Clashing Lightning
    for (const beam of this.spellBeams) {
      ctx.save();
      const alpha = beam.life / beam.maxLife;
      ctx.globalAlpha = Math.max(0, alpha);

      // Core Laser Beam
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(beam.x, beam.y);
      ctx.lineTo(beam.tx, beam.ty);
      ctx.stroke();

      // Outer Glowing Energy Beam
      ctx.strokeStyle = beam.color;
      ctx.lineWidth = 12;
      ctx.shadowColor = beam.color;
      ctx.shadowBlur = 20;
      ctx.stroke();

      // Spiral Helical Lightning
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ffffff';
      ctx.beginPath();
      const segments = 16;
      for (let s = 0; s <= segments; s++) {
        const t = s / segments;
        const bx = beam.x + (beam.tx - beam.x) * t;
        const by = beam.y + (beam.ty - beam.y) * t + Math.sin(t * Math.PI * 4 + this.idleTime * 15) * 14;
        if (s === 0) ctx.moveTo(bx, by);
        else ctx.lineTo(bx, by);
      }
      ctx.stroke();
      ctx.restore();
    }

    // 6. Word Combat Prompt (Center Screen)
    this.drawWordBadge(ctx, this.currentIncantation, this.typedIndex, this.width / 2, this.height * 0.44, true, this.getSpellColor(), 24);
  }

  private drawRunicCircle(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, angle: number): void {
    ctx.save();
    ctx.translate(x, y - 5);
    ctx.scale(1, 0.35); // Perspective oval

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;

    // Outer Circle
    ctx.beginPath();
    ctx.arc(0, 0, 55, 0, Math.PI * 2);
    ctx.stroke();

    // Inner Inscribed Square rotating
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.rect(-35, -35, 70, 70);
    ctx.stroke();

    ctx.restore();
  }

  private renderPlayerMage(ctx: CanvasRenderingContext2D, x: number, floorY: number): void {
    ctx.save();
    const levitate = Math.sin(this.idleTime * 3) * 6;
    const py = floorY - 20 + levitate;

    ctx.translate(x, py);

    // Flowing Robes (Indigo & Cyan Trim)
    ctx.fillStyle = '#2b6cb0';
    ctx.beginPath();
    ctx.moveTo(-16, -65);
    ctx.lineTo(-24, 0);
    ctx.lineTo(24, 0);
    ctx.lineTo(16, -65);
    ctx.closePath();
    ctx.fill();

    // Gold Robe Trim
    ctx.strokeStyle = '#50e3c2';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Arcane Hood / Head
    ctx.fillStyle = '#1a365d';
    ctx.beginPath();
    ctx.arc(0, -75, 15, 0, Math.PI * 2);
    ctx.fill();

    // Glowing Eyes under hood
    ctx.fillStyle = '#50e3c2';
    ctx.shadowColor = '#50e3c2';
    ctx.shadowBlur = 8;
    ctx.fillRect(-6, -75, 4, 3);
    ctx.fillRect(2, -75, 4, 3);
    ctx.shadowBlur = 0;

    // Wizard Staff (Right hand)
    const staffX = 22;
    ctx.strokeStyle = '#8b5a2b';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(staffX, -95);
    ctx.lineTo(staffX, 10);
    ctx.stroke();

    // Floating Crystal Orb atop staff
    ctx.fillStyle = this.getSpellColor();
    ctx.shadowColor = this.getSpellColor();
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(staffX, -102 + Math.sin(this.idleTime * 6) * 3, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Orbiting Arcane Motes
    for (const m of this.arcaneMotes) {
      const mx = staffX + Math.cos(m.angle) * m.dist;
      const my = -102 + Math.sin(m.angle) * m.dist * 0.4;
      ctx.fillStyle = m.color;
      ctx.beginPath();
      ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  private renderOpponentMage(ctx: CanvasRenderingContext2D, x: number, floorY: number, opp: WizardOpponent): void {
    ctx.save();
    const levitate = Math.sin(this.idleTime * 3 + 1.5) * 6;
    const py = floorY - 20 + levitate;

    ctx.translate(x, py);

    // Opponent Robes
    ctx.fillStyle = opp.robeColor;
    ctx.beginPath();
    ctx.moveTo(-16, -65);
    ctx.lineTo(-24, 0);
    ctx.lineTo(24, 0);
    ctx.lineTo(16, -65);
    ctx.closePath();
    ctx.fill();

    // Trim
    ctx.strokeStyle = opp.staffColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Head / Hood
    ctx.fillStyle = '#171923';
    ctx.beginPath();
    ctx.arc(0, -75, 15, 0, Math.PI * 2);
    ctx.fill();

    // Glowing Eyes
    ctx.fillStyle = opp.staffColor;
    ctx.shadowColor = opp.staffColor;
    ctx.shadowBlur = 8;
    ctx.fillRect(-6, -75, 4, 3);
    ctx.fillRect(2, -75, 4, 3);
    ctx.shadowBlur = 0;

    // Opponent Staff (Left side: -22)
    const staffX = -22;
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(staffX, -95);
    ctx.lineTo(staffX, 10);
    ctx.stroke();

    // Crystal Orb
    ctx.fillStyle = opp.staffColor;
    ctx.shadowColor = opp.staffColor;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(staffX, -102 + Math.sin(this.idleTime * 6 + 2) * 3, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.restore();
  }
}
