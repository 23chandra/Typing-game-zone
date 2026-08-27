// Game 5: Cyber Hacker (Matrix Digital Rain & ICE Protocol Override)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { getRandomWord } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface SecurityNode {
  id: number;
  x: number;
  y: number;
  word: string;
  typedIndex: number;
  timeLimit: number;
  timeRemaining: number;
  isFirewall: boolean;
  color: string;
  pulsePhase: number;
}

export class CyberHackerGame extends BaseGame {
  private nodes: SecurityNode[] = [];
  private currentTarget: SecurityNode | null = null;
  private matrixDrops: { x: number; y: number; speed: number; chars: string[] }[] = [];
  private traceProgress: number = 0;
  private traceSpeed: number = 4;
  private spawnTimer: number = 0;
  private spawnInterval: number = 2.0;
  private nextId: number = 1;
  private breachedCount: number = 0;
  private breachGoal: number = 12;
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Local Subnet Gateway Bypass', description: 'Infiltrate public gateway nodes before ICE trace completes.', targetWPM: 30, wordCount: 10, speed: 3.0 },
      { level: 2, name: 'Corporate Intranet Firewall', description: 'Multi-layer security nodes with shorter countdown timers.', targetWPM: 45, wordCount: 14, speed: 4.5 },
      { level: 3, name: 'Encrypted Sovereign Vault', description: 'Breach cryptographic keys and security ICE sentinels.', targetWPM: 60, wordCount: 18, speed: 6.0 },
      { level: 4, name: 'AI Sentinel Countermeasure', description: 'High-speed active ICE trace counter-hacking protocol.', targetWPM: 75, wordCount: 22, speed: 7.5 },
      { level: 5, name: 'Quantum Core Mainframe Override', description: 'Override the central quantum mainframe under emergency lockdown!', targetWPM: 90, wordCount: 28, speed: 9.0 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const lvl = this.getLevels()[levelNumber - 1] || this.getLevels()[0];
    this.breachGoal = lvl.wordCount;
    this.breachedCount = 0;
    this.traceSpeed = lvl.speed;
    this.traceProgress = 0;
    this.spawnInterval = Math.max(1.0, 2.5 - levelNumber * 0.3);
    this.spawnTimer = 0.3;
    this.nodes = [];
    this.currentTarget = null;
    this.idleTime = 0;

    // Initialize Matrix Digital Rain
    if (this.matrixDrops.length === 0) {
      const cols = Math.floor(this.width / 22);
      for (let c = 0; c < cols; c++) {
        this.matrixDrops.push({
          x: c * 22 + 10,
          y: Math.random() * this.height,
          speed: Math.random() * 90 + 45,
          chars: Array.from({ length: 14 }, () =>
            String.fromCharCode(12448 + Math.floor(Math.random() * 96))
          )
        });
      }
    }
  }

  private spawnNode(): void {
    if (this.breachedCount + this.nodes.length >= this.breachGoal) return;
    const cat = this.currentLevel === 1 ? 'easy' : this.currentLevel <= 3 ? 'cyber' : 'hard';
    const word = getRandomWord(cat);
    const x = Math.random() * (this.width - 240) + 120;
    const y = Math.random() * (this.height - 200) + 80;
    const limit = Math.max(4.0, 9.0 - this.currentLevel * 0.85);

    this.nodes.push({
      id: this.nextId++,
      x,
      y,
      word,
      typedIndex: 0,
      timeLimit: limit,
      timeRemaining: limit,
      isFirewall: Math.random() < 0.3,
      color: this.currentLevel >= 4 ? '#ff0080' : '#00dfd8',
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
        this.spawnSparks(this.currentTarget.x, this.currentTarget.y, '#50e3c2', 4);

        if (this.currentTarget.typedIndex >= this.currentTarget.word.length) {
          this.breachNode(this.currentTarget);
          this.currentTarget = null;
        }
      } else {
        this.recordKeystroke(false);
      }
      return;
    }

    const match = this.nodes
      .filter(n => n.word[0].toLowerCase() === char.toLowerCase())
      .sort((a, b) => a.timeRemaining - b.timeRemaining)[0];

    if (match) {
      this.currentTarget = match;
      this.currentTarget.typedIndex = 1;
      this.recordKeystroke(true);
      this.spawnSparks(match.x, match.y, '#50e3c2', 4);

      if (match.word.length === 1) {
        this.breachNode(match);
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

  private breachNode(node: SecurityNode): void {
    soundEngine.playChime();
    this.spawnExplosion(node.x, node.y, '#50e3c2', 22);
    this.traceProgress = Math.max(0, this.traceProgress - 10);
    this.addFloatingText(node.x, node.y - 25, 'ACCESS GRANTED! -10% ICE', '#50e3c2', 18);

    const idx = this.nodes.indexOf(node);
    if (idx !== -1) this.nodes.splice(idx, 1);

    this.breachedCount++;
    this.wordsCompletedInLevel++;
    this.score += 80;

    if (this.breachedCount >= this.breachGoal && this.nodes.length === 0) {
      this.triggerLevelClear();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    // Matrix Rain Stream
    for (const drop of this.matrixDrops) {
      drop.y += drop.speed * dt;
      if (drop.y > this.height) {
        drop.y = -70;
        drop.chars = Array.from({ length: 14 }, () =>
          String.fromCharCode(12448 + Math.floor(Math.random() * 96))
        );
      }
    }

    // ICE Trace Progress
    this.traceProgress += this.traceSpeed * dt;
    if (this.traceProgress >= 100) {
      this.takeDamage(100);
      return;
    }

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnNode();
      this.spawnTimer = this.spawnInterval;
    }

    // Nodes countdown timer
    for (let i = this.nodes.length - 1; i >= 0; i--) {
      const n = this.nodes[i];
      n.timeRemaining -= dt;
      n.pulsePhase += dt * 3;

      if (n.timeRemaining <= 0) {
        this.takeDamage(15);
        this.traceProgress = Math.min(100, this.traceProgress + 15);
        this.spawnExplosion(n.x, n.y, '#ee0000', 25);
        this.addFloatingText(n.x, n.y - 25, 'ICE TRACER LOCKED! +15% ICE', '#ee0000', 18);
        if (this.currentTarget === n) this.currentTarget = null;
        this.nodes.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Cyberpunk Terminal Background
    ctx.fillStyle = '#030805';
    ctx.fillRect(0, 0, this.width, this.height);

    // Matrix Digital Rain
    ctx.font = '12px monospace';
    for (const drop of this.matrixDrops) {
      for (let j = 0; j < drop.chars.length; j++) {
        const charY = drop.y - j * 15;
        if (charY > 0 && charY < this.height) {
          const alpha = Math.max(0.1, 1 - j / drop.chars.length);
          if (j === 0) {
            ctx.fillStyle = '#ffffff'; // White glowing tip
          } else {
            ctx.fillStyle = `rgba(0, 255, 128, ${alpha * 0.45})`;
          }
          ctx.fillText(drop.chars[j], drop.x, charY);
        }
      }
    }

    // Data Pipeline Connectors Between Nodes
    ctx.strokeStyle = 'rgba(0, 223, 216, 0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dist = Math.hypot(this.nodes[i].x - this.nodes[j].x, this.nodes[i].y - this.nodes[j].y);
        if (dist < 220) {
          ctx.beginPath();
          ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
          ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.setLineDash([]);

    // 2. High-Tech ICE Trace Top Bar
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(30, 16, this.width - 60, 24);
    const traceW = (this.width - 64) * (this.traceProgress / 100);
    const traceGrad = ctx.createLinearGradient(32, 0, 32 + traceW, 0);
    traceGrad.addColorStop(0, '#00dfd8');
    traceGrad.addColorStop(0.6, '#f9cb28');
    traceGrad.addColorStop(1, '#ee0000');
    ctx.fillStyle = traceGrad;
    ctx.fillRect(32, 18, traceW, 20);

    ctx.font = 'bold 11px "Geist Mono", monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(
      `SECURITY ICE TRACE: ${Math.floor(this.traceProgress)}% [NODES BREACHED: ${this.breachedCount}/${this.breachGoal}]`,
      44,
      32
    );

    // 3. Cyberdeck Terminal Console at Bottom
    const deskY = this.height - 45;
    ctx.fillStyle = '#09140e';
    ctx.fillRect(0, deskY, this.width, 45);
    ctx.strokeStyle = '#00dfd8';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, deskY, this.width, 45);

    // Animated Oscilloscope Sine Wave on deck
    ctx.strokeStyle = '#50e3c2';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = 40; x < 240; x += 3) {
      const y = deskY + 22 + Math.sin(x * 0.08 + this.idleTime * 8) * 8;
      if (x === 40) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.font = '10px "Geist Mono", monospace';
    ctx.fillStyle = '#50e3c2';
    ctx.fillText('CYBERDECK LINK ACTIVE // NEURAL BUS STABLE', 260, deskY + 26);

    // 4. Render Target Nodes
    for (const node of this.nodes) {
      this.renderSecurityNode(ctx, node);
    }
  }

  private renderSecurityNode(ctx: CanvasRenderingContext2D, node: SecurityNode): void {
    ctx.save();
    const isTarget = this.currentTarget === node;
    const timePct = Math.max(0, node.timeRemaining / node.timeLimit);
    const pulse = isTarget ? Math.sin(node.pulsePhase) * 3 : 0;

    // Glowing Node Core
    ctx.translate(node.x, node.y);
    ctx.fillStyle = isTarget ? 'rgba(0, 223, 216, 0.25)' : 'rgba(0, 0, 0, 0.85)';
    ctx.strokeStyle = isTarget ? '#50e3c2' : node.color;
    ctx.lineWidth = isTarget ? 2.5 : 1.5;
    ctx.shadowColor = isTarget ? '#50e3c2' : node.color;
    ctx.shadowBlur = isTarget ? 16 : 8;

    // Hexagonal / Round Node Box
    ctx.strokeRect(-55 - pulse, -28 - pulse, 110 + pulse * 2, 56 + pulse * 2);
    ctx.fillRect(-55, -28, 110, 56);
    ctx.shadowBlur = 0;

    // Countdown Bar underneath
    ctx.fillStyle = timePct < 0.35 ? '#ee0000' : '#50e3c2';
    ctx.fillRect(-52, 22, 104 * timePct, 4);

    ctx.restore();

    // Word Badge inside node
    this.drawWordBadge(ctx, node.word, node.typedIndex, node.x, node.y, isTarget, '#50e3c2', 14);
  }
}
