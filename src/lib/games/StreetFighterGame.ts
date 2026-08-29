// Game 13: Street Fighter Typer (2D Arcade Martial Arts Brawler)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface OpponentDef {
  name: string;
  title: string;
  hp: number;
  attackInterval: number;
  skinColor: string;
  giColor: string;
  hairColor: string;
  style: 'boxer' | 'kickboxer' | 'cyborg' | 'ninja' | 'demon';
}

export class StreetFighterGame extends BaseGame {
  private opponentHp: number = 100;
  private opponentMaxHp: number = 100;
  private opponentLagHp: number = 100;
  private playerLagHp: number = 100;
  private opponentAttackTimer: number = 4.5;
  private opponentAttackInterval: number = 4.5;
  private currentWord: string = '';
  private typedIndex: number = 0;
  private comboMeter: number = 0;
  private playerAnim: 'idle' | 'punch' | 'kick' | 'shoryuken' | 'hadoken' = 'idle';
  private opponentAnim: 'idle' | 'attack' | 'hit' = 'idle';
  private animTimer: number = 0;
  private fireball: { x: number; y: number; vx: number; radius: number; active: boolean; isSuper: boolean } | null = null;
  private idleTime: number = 0;

  private opponents: OpponentDef[] = [
    { name: 'Ryuuto The Brawler', title: 'Street Boxing Champion', hp: 100, attackInterval: 4.5, skinColor: '#fcd3a1', giColor: '#c53030', hairColor: '#2d3748', style: 'boxer' },
    { name: 'Cobra Vance', title: 'Muay Thai Kick Specialist', hp: 140, attackInterval: 3.8, skinColor: '#e2a970', giColor: '#d69e2e', hairColor: '#1a202c', style: 'kickboxer' },
    { name: 'Titan-09', title: 'Heavy Cybernetic Juggernaut', hp: 190, attackInterval: 3.2, skinColor: '#cbd5e0', giColor: '#4a5568', hairColor: '#e53e3e', style: 'cyborg' },
    { name: 'Viper Ren', title: 'Grandmaster Shadow Ninja', hp: 240, attackInterval: 2.7, skinColor: '#f7fafc', giColor: '#805ad5', hairColor: '#9f7aea', style: 'ninja' },
    { name: 'Lord Akuma-Jin', title: 'Undefeated Demon Overlord', hp: 300, attackInterval: 2.2, skinColor: '#feb2b2', giColor: '#1a202c', hairColor: '#e53e3e', style: 'demon' }
  ];

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Downtown Dojo - Street Boxer', description: 'Land clean boxing strikes and charge your super meter.', targetWPM: 30, wordCount: 10, speed: 4.5, bossHealth: 100 },
      { level: 2, name: 'Bangkok Alley - Cobra Vance', description: 'Counter aggressive Muay Thai roundhouse kicks.', targetWPM: 45, wordCount: 14, speed: 3.8, bossHealth: 140 },
      { level: 3, name: 'Cyber Ring - Titan-09', description: 'Heavy cybernetic armor requires multi-hit combos to break.', targetWPM: 60, wordCount: 18, speed: 3.2, bossHealth: 190 },
      { level: 4, name: 'Shadow Temple - Viper Ren', description: 'Fast shadow dashes and shuriken counter-strikes.', targetWPM: 75, wordCount: 22, speed: 2.7, bossHealth: 240 },
      { level: 5, name: 'Inferno Throne - Lord Akuma', description: 'Unleash full super Hadoken barrages against the Demon Lord!', targetWPM: 90, wordCount: 28, speed: 2.2, bossHealth: 300 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const opp = this.opponents[levelNumber - 1] || this.opponents[0];
    this.opponentHp = opp.hp;
    this.opponentMaxHp = opp.hp;
    this.opponentLagHp = opp.hp;
    this.playerLagHp = this.health;
    this.opponentAttackInterval = opp.attackInterval;
    this.opponentAttackTimer = opp.attackInterval;
    this.comboMeter = 0;
    this.playerAnim = 'idle';
    this.opponentAnim = 'idle';
    this.fireball = null;
    this.idleTime = 0;
    this.nextWord();
  }

  private nextWord(): void {
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'combat' : 'hard';
    this.currentWord = getRandomWord(cat);
    this.typedIndex = 0;
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey();

    const expected = this.currentWord[this.typedIndex]?.toLowerCase();
    if (char.toLowerCase() === expected) {
      this.typedIndex++;
      this.recordKeystroke(true);
      soundEngine.playHit();

      // Alternate dynamic strike animations on key hits
      if (this.typedIndex % 3 === 1) {
        this.playerAnim = 'punch';
        this.animTimer = 0.16;
      } else if (this.typedIndex % 3 === 2) {
        this.playerAnim = 'kick';
        this.animTimer = 0.16;
      } else {
        this.playerAnim = 'shoryuken';
        this.animTimer = 0.22;
      }

      const playerX = Math.max(65, Math.min(200, this.width * 0.22));
      const oppX = Math.max(playerX + 110, Math.min(this.width - 65, this.width * 0.78));

      this.comboMeter = Math.min(100, this.comboMeter + 6);
      this.spawnSparks(playerX + 40, this.height - 130, '#50e3c2', 4);

      if (this.typedIndex >= this.currentWord.length) {
        this.executeFinisher();
      }
    } else {
      this.recordKeystroke(false);
      this.comboMeter = Math.max(0, this.comboMeter - 10);
    }
  }

  public handleBackspaceKey(): void {
    if (this.typedIndex > 0) {
      this.typedIndex--;
      soundEngine.playKey();
    }
  }

  private executeFinisher(): void {
    const isSuper = this.comboMeter >= 100;
    const damage = isSuper ? 55 : 25;
    const playerX = Math.max(65, Math.min(200, this.width * 0.22));
    const oppX = Math.max(playerX + 110, Math.min(this.width - 65, this.width * 0.78));

    this.wordsCompletedInLevel++;
    this.score += isSuper ? 150 : 50;

    if (isSuper) {
      this.comboMeter = 0;
      this.playerAnim = 'hadoken';
      this.animTimer = 0.45;
      soundEngine.playLaser();
      this.triggerFlash(0.2, 'rgba(0, 223, 216, 0.4)');
      this.triggerScreenShake(0.3, 10);
      this.addFloatingText(this.width / 2, this.height * 0.4, '🔥 SUPER HADOKEN! -55 HP', '#00dfd8', 24);

      this.fireball = {
        x: playerX + 30,
        y: this.height - 130,
        vx: 800,
        radius: 32,
        active: true,
        isSuper: true
      };
    } else {
      this.playerAnim = Math.random() < 0.5 ? 'punch' : 'kick';
      this.animTimer = 0.25;
      soundEngine.playHit();
      this.triggerScreenShake(0.12, 6);
      this.addFloatingText(oppX, this.height - 180, `CRITICAL HIT! -${damage} HP`, '#ff0080', 20);

      this.fireball = {
        x: playerX + 30,
        y: this.height - 130,
        vx: 550,
        radius: 18,
        active: true,
        isSuper: false
      };
    }

    this.nextWord();
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;
    const playerX = Math.max(65, Math.min(200, this.width * 0.22));
    const oppX = Math.max(playerX + 110, Math.min(this.width - 65, this.width * 0.78));

    // Smooth Health Lag Bars
    if (this.opponentLagHp > this.opponentHp) {
      this.opponentLagHp = Math.max(this.opponentHp, this.opponentLagHp - dt * 45);
    }
    if (this.playerLagHp > this.health) {
      this.playerLagHp = Math.max(this.health, this.playerLagHp - dt * 40);
    }

    // Animation Timers
    if (this.animTimer > 0) {
      this.animTimer -= dt;
      if (this.animTimer <= 0) {
        this.playerAnim = 'idle';
        this.opponentAnim = 'idle';
      }
    }

    // Fireball Projectile Physics
    if (this.fireball && this.fireball.active) {
      this.fireball.x += this.fireball.vx * dt;

      // Projectile particle smoke & sparks
      this.particles.push({
        x: this.fireball.x - 10,
        y: this.fireball.y + (Math.random() - 0.5) * 12,
        vx: -Math.random() * 40 - 20,
        vy: (Math.random() - 0.5) * 20,
        size: Math.random() * 5 + 3,
        color: this.fireball.isSuper ? '#00dfd8' : '#50e3c2',
        alpha: 0.8,
        decay: 0.05,
        shape: 'spark'
      });

      // Impact on opponent
      if (this.fireball.x >= oppX - 20) {
        this.fireball.active = false;
        const damage = this.fireball.isSuper ? 55 : 25;
        this.opponentHp = Math.max(0, this.opponentHp - damage);
        this.opponentAnim = 'hit';
        this.animTimer = 0.25;

        soundEngine.playExplosion();
        this.spawnExplosion(oppX, this.height - 130, this.fireball.isSuper ? '#00dfd8' : '#ff0080', this.fireball.isSuper ? 35 : 20);
        this.triggerScreenShake(this.fireball.isSuper ? 0.35 : 0.18, this.fireball.isSuper ? 12 : 7);

        if (this.opponentHp <= 0) {
          this.addFloatingText(oppX, this.height * 0.4, '💥 K.O.! VICTORY!', '#f9cb28', 32);
          this.triggerLevelClear();
        }
      }
    }

    // Opponent Attack Cycle
    if (this.opponentHp > 0 && this.health > 0) {
      this.opponentAttackTimer -= dt;
      if (this.opponentAttackTimer <= 0) {
        this.opponentAttackTimer = this.opponentAttackInterval;
        this.takeDamage(20);
        this.opponentAnim = 'attack';
        this.animTimer = 0.35;
        this.addFloatingText(playerX, this.height - 180, 'OPPONENT STRIKE! -20 HP', '#ee0000', 20);
        this.spawnExplosion(playerX, this.height - 130, '#ee0000', 25);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    const opp = this.opponents[this.currentLevel - 1] || this.opponents[0];

    // 1. Arcade Dojo Stage Canvas Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, this.height);
    bgGrad.addColorStop(0, '#0a0914');
    bgGrad.addColorStop(0.6, '#181528');
    bgGrad.addColorStop(1, '#2c1e28');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    // Traditional Dojo Pillars in background
    ctx.fillStyle = 'rgba(20, 15, 30, 0.6)';
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(i * (this.width / 5) - 20, 40, 40, this.height - 120);
    }

    // Glowing Neon Lanterns
    [80, this.width - 80].forEach(lx => {
      ctx.save();
      ctx.fillStyle = '#ff4d4d';
      ctx.shadowColor = '#ff4d4d';
      ctx.shadowBlur = 15;
      ctx.fillRect(lx - 12, 70, 24, 36);
      ctx.fillStyle = '#f9cb28';
      ctx.fillRect(lx - 8, 80, 16, 16);
      ctx.restore();
    });

    // Dojo Tatami Wooden Ring Floor
    const floorY = this.height - 85;
    ctx.fillStyle = '#3d261a';
    ctx.fillRect(0, floorY, this.width, 85);
    // Gold Rim border
    ctx.fillStyle = '#d69e2e';
    ctx.fillRect(0, floorY, this.width, 4);
    // Tatami grid planks
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 2;
    for (let x = 0; x < this.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, floorY + 4);
      ctx.lineTo(x - 20, this.height);
      ctx.stroke();
    }

    // 2. Health Bars UI (Classic 2D Arcade Style)
    const barWidth = Math.min(260, (this.width - 120) / 2);
    const barH = 16;
    const topY = 24;

    // Player Health (Left)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(36, topY - 2, barWidth + 8, barH + 4);
    // Lag red bar
    const pLagPct = Math.max(0, this.playerLagHp / this.maxHealth);
    ctx.fillStyle = '#ee0000';
    ctx.fillRect(40, topY, barWidth * pLagPct, barH);
    // Active cyan/gold health
    const pHealthPct = Math.max(0, this.health / this.maxHealth);
    const pGrad = ctx.createLinearGradient(40, 0, 40 + barWidth, 0);
    pGrad.addColorStop(0, '#00dfd8');
    pGrad.addColorStop(1, '#50e3c2');
    ctx.fillStyle = pGrad;
    ctx.fillRect(40, topY, barWidth * pHealthPct, barH);

    ctx.font = 'bold 11px "Geist Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`PLAYER  ${this.health} / 100`, 44, topY + 12);

    // Opponent Health (Right)
    const oppRightX = this.width - 40;
    const oppLeftX = oppRightX - barWidth;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(oppLeftX - 4, topY - 2, barWidth + 8, barH + 4);
    // Opponent lag yellow bar
    const oppLagPct = Math.max(0, this.opponentLagHp / this.opponentMaxHp);
    ctx.fillStyle = '#f9cb28';
    ctx.fillRect(oppRightX - barWidth * oppLagPct, topY, barWidth * oppLagPct, barH);
    // Opponent active crimson bar
    const oppHealthPct = Math.max(0, this.opponentHp / this.opponentMaxHp);
    ctx.fillStyle = '#ff0080';
    ctx.fillRect(oppRightX - barWidth * oppHealthPct, topY, barWidth * oppHealthPct, barH);

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'right';
    ctx.fillText(`${opp.name}  ${Math.floor(this.opponentHp)} HP`, oppRightX - 4, topY + 12);
    ctx.textAlign = 'left';

    // Opponent Attack Countdown Timer Bar
    const attackTimePct = Math.max(0, this.opponentAttackTimer / this.opponentAttackInterval);
    ctx.fillStyle = attackTimePct < 0.3 ? '#ff0080' : '#f9cb28';
    ctx.fillRect(oppLeftX, topY + barH + 4, barWidth * attackTimePct, 4);

    // Super Meter Bar at bottom
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(40, this.height - 24, 200, 12);
    const superPct = this.comboMeter / 100;
    const superGrad = ctx.createLinearGradient(40, 0, 240, 0);
    superGrad.addColorStop(0, '#7928ca');
    superGrad.addColorStop(1, '#ff0080');
    ctx.fillStyle = this.comboMeter >= 100 ? '#f9cb28' : superGrad;
    ctx.fillRect(40, this.height - 24, 200 * superPct, 12);

    ctx.font = 'bold 9px "Geist Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(this.comboMeter >= 100 ? '⚡ SUPER HADOKEN READY! ⚡' : `SUPER COMBO GAUGE: ${Math.floor(this.comboMeter)}%`, 44, this.height - 15);

    const playerX = Math.max(65, Math.min(200, this.width * 0.22));
    const oppX = Math.max(playerX + 110, Math.min(this.width - 65, this.width * 0.78));

    // 3. Render Player Martial Artist (Left)
    this.renderPlayerFighter(ctx, playerX, floorY);

    // 4. Render Opponent Martial Artist (Right)
    this.renderOpponentFighter(ctx, oppX, floorY, opp);

    // 5. Render Fireball / Hadoken
    if (this.fireball && this.fireball.active) {
      ctx.save();
      const fb = this.fireball;
      ctx.shadowColor = fb.isSuper ? '#00dfd8' : '#50e3c2';
      ctx.shadowBlur = fb.isSuper ? 25 : 15;

      // Outer plasma ring
      ctx.fillStyle = fb.isSuper ? '#0070f3' : '#00dfd8';
      ctx.beginPath();
      ctx.arc(fb.x, fb.y, fb.radius, 0, Math.PI * 2);
      ctx.fill();

      // Inner glowing core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(fb.x, fb.y, fb.radius * 0.55, 0, Math.PI * 2);
      ctx.fill();

      // Energy spikes
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      for (let s = 0; s < 4; s++) {
        const a = (s * Math.PI) / 2 + this.idleTime * 12;
        ctx.beginPath();
        ctx.moveTo(fb.x, fb.y);
        ctx.lineTo(fb.x + Math.cos(a) * fb.radius * 1.3, fb.y + Math.sin(a) * fb.radius * 1.3);
        ctx.stroke();
      }
      ctx.restore();
    }

    // 6. Word Combat Prompt (Center Screen)
    this.drawWordBadge(ctx, this.currentWord, this.typedIndex, this.width / 2, this.height * 0.44, true, '#50e3c2', 24);
  }

  private renderPlayerFighter(ctx: CanvasRenderingContext2D, x: number, floorY: number): void {
    ctx.save();
    const bob = Math.sin(this.idleTime * 4) * 2;
    const isShoryuken = this.playerAnim === 'shoryuken';
    const py = floorY - 5 + (isShoryuken ? -25 : bob);

    // Floor Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(x, floorY, 28, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(x, py);

    // Legs / Hakama Pants (Pure White Gi)
    ctx.fillStyle = '#f7fafc';
    if (this.playerAnim === 'kick') {
      // Extended Roundhouse Kick Leg
      ctx.fillRect(-10, -35, 14, 35); // Standing leg
      ctx.fillRect(0, -38, 48, 14); // Kicking leg
      // Red Footwrap
      ctx.fillStyle = '#c53030';
      ctx.fillRect(44, -38, 10, 14);
    } else {
      ctx.fillRect(-16, -35, 14, 35);
      ctx.fillRect(2, -35, 14, 35);
      // Red Footwraps
      ctx.fillStyle = '#c53030';
      ctx.fillRect(-16, -6, 14, 6);
      ctx.fillRect(2, -6, 14, 6);
    }

    // Torso / Gi Jacket
    ctx.fillStyle = '#0070f3';
    ctx.fillRect(-18, -68, 36, 36);
    // V-neck chest
    ctx.fillStyle = '#fcd3a1';
    ctx.beginPath();
    ctx.moveTo(-10, -68);
    ctx.lineTo(0, -50);
    ctx.lineTo(10, -68);
    ctx.closePath();
    ctx.fill();

    // Black Belt & Fluttering Belt Ties
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(-19, -38, 38, 6);
    ctx.fillRect(-10, -34, 6, 18 + Math.sin(this.idleTime * 5) * 4);
    ctx.fillRect(-2, -34, 6, 14 + Math.cos(this.idleTime * 5) * 4);

    // Arms & Hands
    ctx.fillStyle = '#fcd3a1';
    if (this.playerAnim === 'punch') {
      ctx.fillRect(10, -62, 45, 12); // Extended jab fist
      ctx.fillStyle = '#ffffff'; // White hand wraps
      ctx.fillRect(45, -64, 14, 16);
    } else if (this.playerAnim === 'hadoken') {
      ctx.fillRect(10, -58, 35, 16); // Dual palms forward
      ctx.fillStyle = '#00dfd8'; // Glowing blue energy aura on hands
      ctx.beginPath();
      ctx.arc(42, -50, 14, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.playerAnim === 'shoryuken') {
      ctx.fillRect(10, -90, 14, 40); // Skyward Uppercut
      ctx.fillStyle = '#f9cb28'; // Flame aura
      ctx.beginPath();
      ctx.arc(17, -92, 16, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Guard Stance
      ctx.fillRect(8, -62, 16, 14);
      ctx.fillRect(16, -54, 14, 14);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(14, -64, 12, 14);
    }

    // Head & Hair
    ctx.fillStyle = '#fcd3a1';
    ctx.beginPath();
    ctx.arc(0, -78, 14, 0, Math.PI * 2);
    ctx.fill();

    // Brown spiky hair
    ctx.fillStyle = '#4a2810';
    ctx.beginPath();
    ctx.arc(0, -82, 15, Math.PI, 0);
    ctx.lineTo(8, -78);
    ctx.lineTo(4, -86);
    ctx.lineTo(-4, -88);
    ctx.lineTo(-12, -78);
    ctx.closePath();
    ctx.fill();

    // Red Headband with Flowing Ribbons
    ctx.fillStyle = '#e53e3e';
    ctx.fillRect(-15, -84, 30, 5);
    // Flowing ribbons trailing behind to the left
    const ribbonWave = Math.sin(this.idleTime * 8) * 6;
    ctx.beginPath();
    ctx.moveTo(-14, -82);
    ctx.quadraticCurveTo(-26, -82 + ribbonWave, -38, -78 + ribbonWave);
    ctx.lineTo(-38, -74 + ribbonWave);
    ctx.quadraticCurveTo(-26, -78 + ribbonWave, -14, -78);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  private renderOpponentFighter(ctx: CanvasRenderingContext2D, x: number, floorY: number, opp: OpponentDef): void {
    ctx.save();
    const bob = Math.sin(this.idleTime * 3.5 + 1) * 2;
    const isHit = this.opponentAnim === 'hit';
    const isAttack = this.opponentAnim === 'attack';
    const py = floorY - 5 + bob + (isHit ? -8 : 0);

    // Floor Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(x + (isHit ? 15 : 0), floorY, 28, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(x + (isHit ? 15 : 0), py);

    // Demon Aura (Level 5 Boss)
    if (opp.style === 'demon') {
      ctx.save();
      ctx.fillStyle = 'rgba(229, 62, 62, 0.25)';
      ctx.shadowColor = '#e53e3e';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(0, -50, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Legs
    ctx.fillStyle = opp.giColor;
    ctx.fillRect(-16, -35, 14, 35);
    ctx.fillRect(2, -35, 14, 35);

    // Torso
    ctx.fillStyle = opp.giColor;
    ctx.fillRect(-18, -68, 36, 36);

    // Attack or Guard Arms
    ctx.fillStyle = opp.skinColor;
    if (isAttack) {
      ctx.fillRect(-50, -62, 45, 14); // Heavy punch toward player
      ctx.fillStyle = '#ff0080';
      ctx.beginPath();
      ctx.arc(-50, -55, 12, 0, Math.PI * 2);
      ctx.fill();
    } else if (isHit) {
      ctx.fillRect(10, -68, 16, 20); // Recoil arms back
    } else {
      // Intimidating Stance
      ctx.fillRect(-22, -62, 14, 16);
      ctx.fillRect(-14, -50, 14, 16);
    }

    // Head
    ctx.fillStyle = opp.skinColor;
    ctx.beginPath();
    ctx.arc(0, -78, 14, 0, Math.PI * 2);
    ctx.fill();

    // Hair / Mask / Horns
    ctx.fillStyle = opp.hairColor;
    if (opp.style === 'demon') {
      // Red glowing eyes & horned mane
      ctx.beginPath();
      ctx.moveTo(-14, -85);
      ctx.lineTo(-24, -105);
      ctx.lineTo(-8, -88);
      ctx.moveTo(14, -85);
      ctx.lineTo(24, -105);
      ctx.lineTo(8, -88);
      ctx.fill();

      // Glowing Eyes
      ctx.fillStyle = '#f9cb28';
      ctx.fillRect(-8, -80, 4, 3);
      ctx.fillRect(-1, -80, 4, 3);
    } else if (opp.style === 'cyborg') {
      // Glowing cyber visor
      ctx.fillStyle = '#00dfd8';
      ctx.fillRect(-12, -82, 18, 5);
    } else if (opp.style === 'ninja') {
      // Ninja cowl mask
      ctx.fillStyle = '#805ad5';
      ctx.fillRect(-14, -86, 28, 20);
      ctx.fillStyle = '#fcd3a1';
      ctx.fillRect(-10, -82, 16, 6);
    } else {
      // Boxer hair
      ctx.beginPath();
      ctx.arc(0, -84, 15, Math.PI, 0);
      ctx.fill();
    }

    ctx.restore();
  }
}
