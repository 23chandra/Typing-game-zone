// Game 15: Samurai Showdown (Cinematic Sunset One-Cut Quickdraw)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

type DuelPhase = 'STANDOFF' | 'DRAW_SIGNAL' | 'SLASH_ANIMATION' | 'ROUND_OVER';

interface SamuraiOpponent {
  name: string;
  title: string;
  reaction: number;
  armorColor: string;
  hatType: 'straw' | 'cowl' | 'blindfold' | 'kabuto' | 'shogun';
}

export class SamuraiShowdownGame extends BaseGame {
  private phase: DuelPhase = 'STANDOFF';
  private standoffTimer: number = 0;
  private drawWord: string = '';
  private typedIndex: number = 0;
  private reactionStartTime: number = 0;
  private opponentReactionTime: number = 2.2;
  private sakuraPetals: { x: number; y: number; speedX: number; speedY: number; size: number; rotation: number; vRot: number }[] = [];
  private slashProgress: number = 0;
  private roundWins: number = 0;
  private roundGoal: number = 5;
  private playerWonLastRound: boolean = false;
  private idleTime: number = 0;

  private opponents: SamuraiOpponent[] = [
    { name: 'Kojiro The Wanderer', title: 'Exiled Ronin Duelist', reaction: 2.2, armorColor: '#4a5568', hatType: 'straw' },
    { name: 'Lady Renka', title: 'Dual-Blade Wind Master', reaction: 1.8, armorColor: '#3182ce', hatType: 'cowl' },
    { name: 'Master Zato', title: 'Blind Temple Swordsman', reaction: 1.45, armorColor: '#d69e2e', hatType: 'blindfold' },
    { name: 'Kenshi Hayabusa', title: 'Shadow Clan Assassin', reaction: 1.15, armorColor: '#805ad5', hatType: 'kabuto' },
    { name: 'Shogun Nobunaga-O', title: 'Supreme General of the Sun', reaction: 0.88, armorColor: '#e53e3e', hatType: 'shogun' }
  ];

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Cherry Blossom Meadow - Ronin Kojiro', description: 'Wait for the signal, then strike instantly before 2.2s reaction.', targetWPM: 30, wordCount: 5, speed: 2.2 },
      { level: 2, name: 'Bamboo Ridge - Lady Renka', description: 'Dual blade strikes at 1.8s lightning speed.', targetWPM: 45, wordCount: 5, speed: 1.8 },
      { level: 3, name: 'Moonlit Sanctum - Master Zato', description: 'Listen to the wind. Striking with sub-1.45s intuition.', targetWPM: 60, wordCount: 5, speed: 1.45 },
      { level: 4, name: 'Storm Spire - Kenshi Hayabusa', description: 'Extremely fast 1.15s reaction quickdraw trial.', targetWPM: 75, wordCount: 5, speed: 1.15 },
      { level: 5, name: 'Imperial Castle - Supreme Shogun', description: 'The legendary one-cut standoff against Shogun Nobunaga (0.88s)!', targetWPM: 90, wordCount: 5, speed: 0.88 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const opp = this.opponents[levelNumber - 1] || this.opponents[0];
    this.opponentReactionTime = opp.reaction;
    this.roundGoal = 5;
    this.roundWins = 0;
    this.phase = 'STANDOFF';
    this.standoffTimer = Math.random() * 2.2 + 1.8;
    this.slashProgress = 0;
    this.idleTime = 0;

    // Initialize Sakura Petals with rotation
    if (this.sakuraPetals.length === 0) {
      for (let i = 0; i < 45; i++) {
        this.sakuraPetals.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          speedX: Math.random() * 40 + 25,
          speedY: Math.random() * 35 + 15,
          size: Math.random() * 3.5 + 2,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 4
        });
      }
    }
  }

  public handleInputChar(char: string): void {
    if (this.phase === 'STANDOFF') {
      // False start penalty
      this.recordKeystroke(false);
      this.takeDamage(25);
      this.addFloatingText(220, this.height * 0.45, 'FALSE START! FOUL!', '#ee0000', 22);
      return;
    }

    if (this.phase === 'DRAW_SIGNAL') {
      soundEngine.playKey();
      const expected = this.drawWord[this.typedIndex]?.toLowerCase();
      if (char.toLowerCase() === expected) {
        this.typedIndex++;
        this.recordKeystroke(true);
        this.spawnSparks(this.width / 2, this.height * 0.44, '#50e3c2', 5);

        if (this.typedIndex >= this.drawWord.length) {
          const reactionTime = (Date.now() - this.reactionStartTime) / 1000;
          if (reactionTime <= this.opponentReactionTime) {
            this.executeSlash(true, reactionTime);
          } else {
            this.executeSlash(false, reactionTime);
          }
        }
      } else {
        this.recordKeystroke(false);
      }
    }
  }

  public handleBackspaceKey(): void {
    if (this.phase === 'DRAW_SIGNAL' && this.typedIndex > 0) {
      this.typedIndex--;
      soundEngine.playKey();
    }
  }

  private executeSlash(playerWon: boolean, reactionSec: number): void {
    soundEngine.playSlice();
    this.phase = 'SLASH_ANIMATION';
    this.slashProgress = 0;
    this.playerWonLastRound = playerWon;

    if (playerWon) {
      this.roundWins++;
      this.wordsCompletedInLevel++;
      this.score += 150;
      this.triggerFlash(0.18, 'rgba(255, 255, 255, 0.85)');
      this.triggerScreenShake(0.35, 12);
      this.spawnExplosion(this.width - 220, this.height - 120, '#ff0080', 35);
      this.addFloatingText(this.width / 2, this.height * 0.3, `⚔️ ONE CUT VICTORY! (${reactionSec.toFixed(2)}s)`, '#50e3c2', 26);
    } else {
      this.takeDamage(35);
      this.triggerFlash(0.2, 'rgba(238, 0, 0, 0.6)');
      this.triggerScreenShake(0.35, 14);
      this.spawnExplosion(220, this.height - 120, '#ee0000', 35);
      this.addFloatingText(this.width / 2, this.height * 0.3, `💀 TOO SLOW! (${reactionSec.toFixed(2)}s vs ${this.opponentReactionTime.toFixed(2)}s)`, '#ee0000', 24);
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    // Sakura Petals Drift
    for (const petal of this.sakuraPetals) {
      petal.x += petal.speedX * dt;
      petal.y += petal.speedY * dt;
      petal.rotation += petal.vRot * dt;
      if (petal.x > this.width + 20 || petal.y > this.height + 20) {
        petal.x = Math.random() * this.width - 80;
        petal.y = -15;
      }
    }

    if (this.phase === 'STANDOFF') {
      this.standoffTimer -= dt;
      if (this.standoffTimer <= 0) {
        // Trigger DRAW SIGNAL
        this.phase = 'DRAW_SIGNAL';
        const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'combat' : 'hard';
        this.drawWord = getRandomWord(cat);
        this.typedIndex = 0;
        this.reactionStartTime = Date.now();
        soundEngine.playLaser();
        this.triggerFlash(0.12, 'rgba(249, 203, 40, 0.45)');
        this.addFloatingText(this.width / 2, this.height * 0.25, '⚡ STRIKE NOW! ⚡', '#f9cb28', 30);
      }
    } else if (this.phase === 'DRAW_SIGNAL') {
      const elapsed = (Date.now() - this.reactionStartTime) / 1000;
      if (elapsed > this.opponentReactionTime) {
        this.executeSlash(false, elapsed);
      }
    } else if (this.phase === 'SLASH_ANIMATION') {
      this.slashProgress += dt * 2.8;
      if (this.slashProgress >= 1) {
        if (this.roundWins >= this.roundGoal) {
          this.triggerLevelClear();
        } else {
          // Next round reset
          this.phase = 'STANDOFF';
          this.standoffTimer = Math.random() * 2.2 + 1.8;
        }
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    const opp = this.opponents[this.currentLevel - 1] || this.opponents[0];

    // 1. Cinematic Japanese Twilight Sunset
    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    sky.addColorStop(0, '#100407');
    sky.addColorStop(0.45, '#3b0d18');
    sky.addColorStop(0.75, '#c53030');
    sky.addColorStop(1, '#f9cb28');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);

    // Giant Setting Crimson Sun
    ctx.save();
    ctx.fillStyle = 'rgba(249, 203, 40, 0.9)';
    ctx.shadowColor = '#ff0080';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.arc(this.width / 2, this.height * 0.48, 65, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Background Mountain Ridge & Torii Gate Silhouette
    ctx.fillStyle = '#1c080d';
    ctx.beginPath();
    ctx.moveTo(0, this.height - 130);
    ctx.lineTo(this.width * 0.35, this.height - 180);
    ctx.lineTo(this.width * 0.7, this.height - 140);
    ctx.lineTo(this.width, this.height - 170);
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.closePath();
    ctx.fill();

    // Torii Gate on horizon
    const toriiX = this.width / 2;
    const toriiY = this.height * 0.48 - 40;
    ctx.fillStyle = '#0a0204';
    ctx.fillRect(toriiX - 25, toriiY, 50, 6);
    ctx.fillRect(toriiX - 22, toriiY + 10, 44, 4);
    ctx.fillRect(toriiX - 16, toriiY + 6, 5, 34);
    ctx.fillRect(toriiX + 11, toriiY + 6, 5, 34);

    // Cinematic Letterbox Black Bars (Classic Samurai Film)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.width, 32);
    ctx.fillRect(0, this.height - 32, this.width, 32);

    // Drifting Sakura Blossom Petals
    for (const p of this.sakuraPetals) {
      ctx.save();
      ctx.fillStyle = 'rgba(255, 128, 191, 0.85)';
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 1.8, p.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Grass Hill Foreground
    const floorY = this.height - 90;
    ctx.fillStyle = '#120407';
    ctx.fillRect(0, floorY, this.width, 60);

    // Wind-swept grass blades
    ctx.strokeStyle = '#2b0b12';
    ctx.lineWidth = 2;
    for (let gx = 10; gx < this.width; gx += 16) {
      const gTilt = Math.sin(this.idleTime * 4 + gx * 0.1) * 8;
      ctx.beginPath();
      ctx.moveTo(gx, floorY);
      ctx.quadraticCurveTo(gx + gTilt * 0.5, floorY - 10, gx + gTilt + 4, floorY - 18);
      ctx.stroke();
    }

    // Telemetry HUD Bar (Top Letterbox)
    ctx.font = 'bold 12px "Geist Mono", monospace';
    ctx.fillStyle = '#f9cb28';
    ctx.fillText(`WINS: ${this.roundWins}/${this.roundGoal}`, 20, 21);
    if (this.width >= 560) {
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`OPPONENT: ${opp.name}`, this.width * 0.35, 21);
    }
    ctx.fillStyle = '#50e3c2';
    ctx.textAlign = 'right';
    ctx.fillText(`PARRY: ${this.opponentReactionTime.toFixed(2)}s`, this.width - 20, 21);
    ctx.textAlign = 'left';

    const playerX = Math.max(65, Math.min(210, this.width * 0.22));
    const oppX = Math.max(playerX + 110, Math.min(this.width - 65, this.width * 0.78));

    // 2. Render Player Samurai (Left)
    this.renderPlayerSamurai(ctx, playerX, floorY);

    // 3. Render Opponent Samurai (Right)
    this.renderOpponentSamurai(ctx, oppX, floorY, opp);

    // 4. Standoff & Draw Prompts
    if (this.phase === 'STANDOFF') {
      ctx.save();
      ctx.textAlign = 'center';
      ctx.font = '600 18px "Geist", sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.fillText('... Steady your blade ... Wait for the signal ...', this.width / 2, this.height * 0.35);
      ctx.restore();
    } else if (this.phase === 'DRAW_SIGNAL') {
      // Big Calligraphy "DRAW!"
      ctx.save();
      ctx.textAlign = 'center';
      ctx.font = 'bold 36px "Geist", sans-serif';
      ctx.fillStyle = '#f9cb28';
      ctx.shadowColor = '#ff0080';
      ctx.shadowBlur = 16;
      ctx.fillText('⚔️ IAI DRAW! ⚔️', this.width / 2, this.height * 0.33);
      ctx.restore();

      // Word Box Prompt
      this.drawWordBadge(ctx, this.drawWord, this.typedIndex, this.width / 2, this.height * 0.44, true, '#50e3c2', 26);

      // Remaining Reaction Countdown Bar
      const elapsed = (Date.now() - this.reactionStartTime) / 1000;
      const timeRemainingPct = Math.max(0, 1 - elapsed / this.opponentReactionTime);
      const barW = 280;
      const barX = this.width / 2 - barW / 2;
      const barY = this.height * 0.44 + 28;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(barX - 2, barY - 2, barW + 4, 8);
      ctx.fillStyle = timeRemainingPct < 0.35 ? '#ee0000' : '#50e3c2';
      ctx.fillRect(barX, barY, barW * timeRemainingPct, 4);
    } else if (this.phase === 'SLASH_ANIMATION') {
      // White/Red Diagonal Lightning Slash Cut
      ctx.save();
      ctx.strokeStyle = this.playerWonLastRound ? '#50e3c2' : '#ee0000';
      ctx.lineWidth = 5;
      ctx.shadowColor = this.playerWonLastRound ? '#00dfd8' : '#ff0080';
      ctx.shadowBlur = 25;
      ctx.beginPath();
      ctx.moveTo(80, this.height - 60);
      ctx.lineTo(this.width - 80, 80);
      ctx.stroke();

      // Secondary white core line
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }
  }

  private renderPlayerSamurai(ctx: CanvasRenderingContext2D, x: number, floorY: number): void {
    ctx.save();
    const bob = Math.sin(this.idleTime * 3) * 1.5;
    const isSlashing = this.phase === 'SLASH_ANIMATION' && this.playerWonLastRound;
    const px = isSlashing ? x + this.slashProgress * 120 : x;
    const py = floorY - 5 + bob;

    // Floor Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.ellipse(px, floorY, 26, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(px, py);

    // Hakama Pants (Navy Blue)
    ctx.fillStyle = '#1a202c';
    ctx.beginPath();
    ctx.moveTo(-16, -40);
    ctx.lineTo(-24, -5);
    ctx.lineTo(-6, -5);
    ctx.lineTo(0, -25);
    ctx.lineTo(6, -5);
    ctx.lineTo(24, -5);
    ctx.lineTo(16, -40);
    ctx.closePath();
    ctx.fill();

    // White Kimono / Haori Top with Gold Sash
    ctx.fillStyle = '#f7fafc';
    ctx.fillRect(-16, -72, 32, 34);
    // Gold Obi Sash
    ctx.fillStyle = '#d69e2e';
    ctx.fillRect(-17, -44, 34, 6);

    // Left Arm resting on Katana Sheath
    ctx.fillStyle = '#e2a970';
    ctx.fillRect(-12, -60, 14, 18);

    // Katana Sheath (Black & Gold)
    ctx.strokeStyle = '#1a202c';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-10, -42);
    ctx.lineTo(-38, -25);
    ctx.stroke();
    // Gold Tsuba Guard & Hilt
    ctx.strokeStyle = '#d69e2e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-8, -45);
    ctx.lineTo(14, -58);
    ctx.stroke();

    // Head
    ctx.fillStyle = '#e2a970';
    ctx.beginPath();
    ctx.arc(0, -82, 12, 0, Math.PI * 2);
    ctx.fill();

    // Straw Jingasa Conical Hat (Conical triangle)
    ctx.fillStyle = '#7b4b24';
    ctx.beginPath();
    ctx.moveTo(0, -102);
    ctx.lineTo(-26, -84);
    ctx.lineTo(26, -84);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#4a2810';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();
  }

  private renderOpponentSamurai(ctx: CanvasRenderingContext2D, x: number, floorY: number, opp: SamuraiOpponent): void {
    ctx.save();
    const bob = Math.sin(this.idleTime * 3 + 1) * 1.5;
    const isSlashing = this.phase === 'SLASH_ANIMATION' && !this.playerWonLastRound;
    const px = isSlashing ? x - this.slashProgress * 120 : x;
    const py = floorY - 5 + bob;

    // Floor Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.ellipse(px, floorY, 26, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(px, py);

    // Opponent Hakama (Dark)
    ctx.fillStyle = '#111827';
    ctx.beginPath();
    ctx.moveTo(-16, -40);
    ctx.lineTo(-24, -5);
    ctx.lineTo(-6, -5);
    ctx.lineTo(0, -25);
    ctx.lineTo(6, -5);
    ctx.lineTo(24, -5);
    ctx.lineTo(16, -40);
    ctx.closePath();
    ctx.fill();

    // Armor / Robe (Opponent Armor Color)
    ctx.fillStyle = opp.armorColor;
    ctx.fillRect(-16, -72, 32, 34);

    // Opponent Katana
    ctx.strokeStyle = '#f9cb28';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(10, -42);
    ctx.lineTo(38, -25);
    ctx.stroke();

    // Head
    ctx.fillStyle = '#fcd3a1';
    ctx.beginPath();
    ctx.arc(0, -82, 12, 0, Math.PI * 2);
    ctx.fill();

    // Helmet / Hat Type
    if (opp.hatType === 'shogun') {
      // Ornate Gold Kabuto with Crescent Moon Horn
      ctx.fillStyle = '#e53e3e';
      ctx.beginPath();
      ctx.arc(0, -88, 14, Math.PI, 0);
      ctx.fill();
      // Gold Crescent Moon Crest
      ctx.fillStyle = '#f9cb28';
      ctx.beginPath();
      ctx.arc(0, -96, 12, Math.PI * 0.8, Math.PI * 2.2);
      ctx.lineTo(0, -92);
      ctx.closePath();
      ctx.fill();
    } else if (opp.hatType === 'kabuto') {
      // Iron warrior kabuto
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(-16, -92, 32, 12);
      ctx.fillStyle = '#f9cb28';
      ctx.fillRect(-3, -98, 6, 8);
    } else if (opp.hatType === 'blindfold') {
      // Blindfold
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-12, -84, 24, 5);
      // White topknot hair
      ctx.fillStyle = '#e2e8f0';
      ctx.beginPath();
      ctx.arc(0, -92, 6, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Straw hat
      ctx.fillStyle = '#4a2810';
      ctx.beginPath();
      ctx.moveTo(0, -100);
      ctx.lineTo(-24, -84);
      ctx.lineTo(24, -84);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }
}
