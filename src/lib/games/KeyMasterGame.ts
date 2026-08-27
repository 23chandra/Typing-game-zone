// Game 21: Key Master (Visual Keyboard Heatmap & Finger Placement Lab)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { WORD_LISTS } from '../wordLists';
import { soundEngine } from '../soundEngine';

interface KeyCap {
  key: string;
  display: string;
  finger: string;
  fingerName: string;
  hand: 'left' | 'right';
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
  hitCount: number;
  errorCount: number;
  isPressed: boolean;
}

export class KeyMasterGame extends BaseGame {
  private targetWords: string[] = [];
  private currentWordIndex: number = 0;
  private currentTypedIndex: number = 0;
  private keycaps: Record<string, KeyCap> = {};
  private activeKey: string = '';
  private ripples: { x: number; y: number; r: number; alpha: number; color: string }[] = [];
  private drillType: 'homeRow' | 'topRow' | 'bottomRow' | 'numbers' | 'code' = 'homeRow';
  private idleTime: number = 0;

  public getLevels(): GameLevelDef[] {
    return [
      { level: 1, name: 'Home Row Anchor (ASDF JKL;)', description: 'Master touch-typing anchor keys and finger positioning.', targetWPM: 25, wordCount: 10, speed: 25 },
      { level: 2, name: 'Top Row Elevation (QWERTY UIOP)', description: 'Expand finger reach to upper keyboard letters.', targetWPM: 40, wordCount: 14, speed: 40 },
      { level: 3, name: 'Bottom Row Agility (ZXCV BNM)', description: 'Smooth diagonal finger transitions to the bottom row.', targetWPM: 55, wordCount: 18, speed: 55 },
      { level: 4, name: 'Number & Symbol Mastery', description: 'Reach top numeric row and common punctuation syntax.', targetWPM: 70, wordCount: 22, speed: 70 },
      { level: 5, name: 'Grand Code Syntax Pangrams', description: 'Full keyboard fluency test across all alphanumeric & symbol keys!', targetWPM: 85, wordCount: 28, speed: 85 }
    ];
  }

  public initLevel(levelNumber: number): void {
    const drillMap: ('homeRow' | 'topRow' | 'bottomRow' | 'numbers' | 'code')[] = [
      'homeRow', 'topRow', 'bottomRow', 'numbers', 'code'
    ];
    this.drillType = drillMap[levelNumber - 1] || 'homeRow';

    if (this.drillType === 'homeRow') {
      this.targetWords = [...WORD_LISTS.practiceDrills.homeRow];
    } else if (this.drillType === 'topRow') {
      this.targetWords = [...WORD_LISTS.practiceDrills.topRow];
    } else if (this.drillType === 'bottomRow') {
      this.targetWords = [...WORD_LISTS.practiceDrills.bottomRow];
    } else if (this.drillType === 'numbers') {
      this.targetWords = [...WORD_LISTS.practiceDrills.numberRow];
    } else {
      this.targetWords = [...WORD_LISTS.pangrams];
    }

    this.currentWordIndex = 0;
    this.currentTypedIndex = 0;
    this.initKeyboardLayout();
    this.ripples = [];
    this.idleTime = 0;
  }

  private initKeyboardLayout(): void {
    const layout = [
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.']
    ];

    const fingerColors: Record<string, string> = {
      lp: '#ff0080', // Left Pinky
      lr: '#7928ca', // Left Ring
      lm: '#0070f3', // Left Middle
      li: '#00dfd8', // Left Index
      ri: '#50e3c2', // Right Index
      rm: '#f9cb28', // Right Middle
      rr: '#ff884d', // Right Ring
      rp: '#ff4d4d'  // Right Pinky
    };

    const getFingerInfo = (k: string): { finger: string; name: string; hand: 'left' | 'right' } => {
      if (['1', 'q', 'a', 'z'].includes(k)) return { finger: 'lp', name: 'Left Pinky', hand: 'left' };
      if (['2', 'w', 's', 'x'].includes(k)) return { finger: 'lr', name: 'Left Ring', hand: 'left' };
      if (['3', 'e', 'd', 'c'].includes(k)) return { finger: 'lm', name: 'Left Middle', hand: 'left' };
      if (['4', '5', 'r', 't', 'f', 'g', 'v', 'b'].includes(k)) return { finger: 'li', name: 'Left Index', hand: 'left' };
      if (['6', '7', 'y', 'u', 'h', 'j', 'n', 'm'].includes(k)) return { finger: 'ri', name: 'Right Index', hand: 'right' };
      if (['8', 'i', 'k', ','].includes(k)) return { finger: 'rm', name: 'Right Middle', hand: 'right' };
      if (['9', 'o', 'l', '.'].includes(k)) return { finger: 'rr', name: 'Right Ring', hand: 'right' };
      return { finger: 'rp', name: 'Right Pinky', hand: 'right' };
    };

    const keySize = Math.min(38, (this.width - 140) / 10);
    const startY = this.height * 0.36;

    layout.forEach((row, rIdx) => {
      const offsetX = (this.width - row.length * (keySize + 6)) / 2;
      row.forEach((k, cIdx) => {
        const info = getFingerInfo(k);
        this.keycaps[k] = {
          key: k,
          display: k.toUpperCase(),
          finger: info.finger,
          fingerName: info.name,
          hand: info.hand,
          color: fingerColors[info.finger] || '#00dfd8',
          x: offsetX + cIdx * (keySize + 6),
          y: startY + rIdx * (keySize + 7),
          w: keySize,
          h: keySize,
          hitCount: 0,
          errorCount: 0,
          isPressed: false
        };
      });
    });

    // Spacebar
    this.keycaps[' '] = {
      key: ' ',
      display: 'SPACEBAR',
      finger: 'thumb',
      fingerName: 'Left or Right Thumb',
      hand: 'right',
      color: '#50e3c2',
      x: this.width / 2 - 130,
      y: startY + 4 * (keySize + 7),
      w: 260,
      h: keySize * 0.85,
      hitCount: 0,
      errorCount: 0,
      isPressed: false
    };
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey(char === ' ');

    const currentWord = this.targetWords[this.currentWordIndex] || '';
    const expected = currentWord[this.currentTypedIndex]?.toLowerCase();
    const pressedKey = char.toLowerCase();

    if (this.keycaps[pressedKey]) {
      this.keycaps[pressedKey].isPressed = true;
      const k = this.keycaps[pressedKey];
      this.ripples.push({
        x: k.x + k.w / 2,
        y: k.y + k.h / 2,
        r: 10,
        alpha: 0.9,
        color: k.color
      });
    }

    if (pressedKey === expected) {
      if (this.keycaps[pressedKey]) this.keycaps[pressedKey].hitCount++;
      this.currentTypedIndex++;
      this.recordKeystroke(true);

      if (this.currentTypedIndex >= currentWord.length) {
        this.currentWordIndex++;
        this.currentTypedIndex = 0;
        this.wordsCompletedInLevel++;
        this.score += 50;
        soundEngine.playChime();
        this.addFloatingText(this.width / 2, this.height * 0.28, '✨ DRILL MASTERED! +50', '#50e3c2', 20);

        if (this.currentWordIndex >= this.targetWords.length) {
          this.triggerLevelClear();
        }
      }
    } else {
      if (this.keycaps[pressedKey]) this.keycaps[pressedKey].errorCount++;
      this.recordKeystroke(false);
    }
  }

  public handleBackspaceKey(): void {
    if (this.currentTypedIndex > 0) {
      this.currentTypedIndex--;
      soundEngine.playKey();
    }
  }

  public updateGame(dt: number): void {
    this.idleTime += dt;

    // Reset key press animation states
    for (const k of Object.values(this.keycaps)) {
      if (k.isPressed) k.isPressed = false;
    }

    // Ripples update
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.r += dt * 70;
      r.alpha -= dt * 2.5;
      if (r.alpha <= 0) {
        this.ripples.splice(i, 1);
      }
    }
  }

  public renderGame(ctx: CanvasRenderingContext2D): void {
    // 1. Sleek Mechanical Studio Canvas
    const bg = ctx.createLinearGradient(0, 0, 0, this.height);
    bg.addColorStop(0, '#090d14');
    bg.addColorStop(1, '#111827');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, this.width, this.height);

    const currentWord = this.targetWords[this.currentWordIndex] || 'COMPLETE!';
    const expectedChar = currentWord[this.currentTypedIndex]?.toLowerCase() || '';
    const activeCap = this.keycaps[expectedChar];

    // 2. Active Target Pangram Word Box (Top)
    this.drawWordBadge(ctx, currentWord, this.currentTypedIndex, this.width / 2, 70, true, '#50e3c2', 26);

    // Dynamic Finger Placement Guide Banner
    if (activeCap) {
      ctx.font = 'bold 12px "Geist Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = activeCap.color;
      ctx.shadowColor = activeCap.color;
      ctx.shadowBlur = 10;
      ctx.fillText(`👉 USE: ${activeCap.fingerName.toUpperCase()} [KEY: ${activeCap.display}]`, this.width / 2, 115);
      ctx.shadowBlur = 0;
      ctx.textAlign = 'left';
    }

    // 3. Render Expanding Keystroke Ripple Waves
    for (const rip of this.ripples) {
      ctx.save();
      ctx.strokeStyle = rip.color;
      ctx.lineWidth = 2.5;
      ctx.globalAlpha = Math.max(0, rip.alpha);
      ctx.shadowColor = rip.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // 4. Render 3D Keycaps
    for (const cap of Object.values(this.keycaps)) {
      this.renderKeycap(ctx, cap, cap.key === expectedChar);
    }
  }

  private renderKeycap(ctx: CanvasRenderingContext2D, k: KeyCap, isTarget: boolean): void {
    ctx.save();
    const pressOffset = k.isPressed ? 3 : 0;
    const ky = k.y + pressOffset;

    // Key Shadow / Bottom Bevel
    ctx.fillStyle = '#0a0d14';
    ctx.fillRect(k.x, ky + 4, k.w, k.h);

    // Keycap Top Surface
    if (isTarget) {
      // Glowing Target Key
      ctx.fillStyle = k.color;
      ctx.shadowColor = k.color;
      ctx.shadowBlur = 16;
    } else {
      ctx.fillStyle = '#1e293b';
    }

    ctx.beginPath();
    ctx.roundRect(k.x, ky, k.w, k.h, 4);
    ctx.fill();

    // Finger Color Accent Bar on keycap top
    ctx.fillStyle = k.color;
    ctx.fillRect(k.x + 2, ky + 2, k.w - 4, 3);
    ctx.shadowBlur = 0;

    // Keycap Letter Text
    ctx.font = `bold ${k.key === ' ' ? 10 : 13}px "Geist Mono", monospace`;
    ctx.fillStyle = isTarget ? '#0a0d14' : '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(k.display, k.x + k.w / 2, ky + k.h / 2 + 5);

    ctx.restore();
  }
}
