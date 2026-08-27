// Game 21: Key Master (Visual Keyboard Heatmap & Finger Placement Lab)
import { BaseGame, type GameLevelDef } from './GameEngine';
import { WORD_LISTS } from '../wordLists';
import { soundEngine } from '../soundEngine';
import { PHYSICAL_KEYBOARD_LAYOUT, getFingerQuadrantData, QUADRANT_COLORS, type PhysicalKeyDef } from '../fingerMapping';

interface KeyCap {
  key: string;
  shiftKey?: string;
  display: string;
  finger: string;
  fingerName: string;
  quadrantName: string;
  hand: 'left' | 'right' | 'both';
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
  hitCount: number;
  errorCount: number;
  isPressed: boolean;
  isAnchor?: boolean;
}

export class KeyMasterGame extends BaseGame {
  private targetWords: string[] = [];
  private currentWordIndex: number = 0;
  private currentTypedIndex: number = 0;
  private keycaps: Record<string, KeyCap> = {};
  private uniqueKeycaps: KeyCap[] = [];
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
      this.targetWords = [...WORD_LISTS.practiceDrills.pangrams];
    }

    this.currentWordIndex = 0;
    this.currentTypedIndex = 0;
    this.initKeyboardLayout();
    this.ripples = [];
    this.idleTime = 0;
  }

  private initKeyboardLayout(): void {
    this.keycaps = {};
    this.uniqueKeycaps = [];

    const maxRowWidthUnits = 14.5;
    const baseKeySize = Math.min(36, Math.max(22, (this.width - 60) / maxRowWidthUnits));
    const startY = this.height * 0.35;
    const keyGap = 4;

    PHYSICAL_KEYBOARD_LAYOUT.forEach((row, rIdx) => {
      // Calculate total width of this row
      let totalRowUnits = 0;
      row.forEach(kd => { totalRowUnits += kd.w || 1; });
      const rowPixelWidth = totalRowUnits * baseKeySize + (row.length - 1) * keyGap;
      let curX = (this.width - rowPixelWidth) / 2;

      row.forEach(keyDef => {
        const fData = getFingerQuadrantData(keyDef.k);
        const wUnits = keyDef.w || 1;
        const kw = wUnits * baseKeySize;
        const kh = baseKeySize;

        const cap: KeyCap = {
          key: keyDef.k,
          shiftKey: keyDef.s,
          display: keyDef.display,
          finger: fData.finger,
          fingerName: fData.fingerName,
          quadrantName: fData.quadrantName,
          hand: keyDef.hand,
          color: fData.color,
          x: curX,
          y: startY + rIdx * (kh + keyGap + 2),
          w: kw,
          h: kh,
          hitCount: 0,
          errorCount: 0,
          isPressed: false,
          isAnchor: keyDef.isAnchor
        };

        this.uniqueKeycaps.push(cap);
        this.keycaps[keyDef.k.toLowerCase()] = cap;
        if (keyDef.s) this.keycaps[keyDef.s] = cap;
        if (keyDef.display) this.keycaps[keyDef.display.toLowerCase()] = cap;

        curX += kw + keyGap;
      });
    });
  }

  private getKeyCapForChar(char: string): KeyCap | undefined {
    if (!char) return undefined;
    if (this.keycaps[char]) return this.keycaps[char];
    const lower = char.toLowerCase();
    if (this.keycaps[lower]) return this.keycaps[lower];
    return undefined;
  }

  public handleInputChar(char: string): void {
    soundEngine.playKey(char === ' ');

    const currentWord = this.targetWords[this.currentWordIndex] || '';
    const expected = currentWord[this.currentTypedIndex];
    const cap = this.getKeyCapForChar(char);

    if (cap) {
      cap.isPressed = true;
      this.ripples.push({
        x: cap.x + cap.w / 2,
        y: cap.y + cap.h / 2,
        r: 10,
        alpha: 0.9,
        color: cap.color
      });
    }

    const isMatch = (expected && char === expected) || (expected && char.toLowerCase() === expected.toLowerCase());

    if (isMatch) {
      if (cap) cap.hitCount++;
      this.currentTypedIndex++;
      this.recordKeystroke(true);

      if (this.currentTypedIndex >= currentWord.length) {
        this.currentWordIndex++;
        this.currentTypedIndex = 0;
        this.wordsCompletedInLevel++;
        this.score += 50;
        soundEngine.playChime();
        this.addFloatingText(this.width / 2, this.height * 0.28, '✨ DRILL MASTERED! +50', '#10b981', 20);

        if (this.currentWordIndex >= this.targetWords.length) {
          this.triggerLevelClear();
        }
      }
    } else {
      if (cap) cap.errorCount++;
      soundEngine.playError();
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
    for (const k of this.uniqueKeycaps) {
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
    // 1. Studio Mechanical Canvas Background
    const bg = ctx.createLinearGradient(0, 0, 0, this.height);
    bg.addColorStop(0, '#090d14');
    bg.addColorStop(1, '#111827');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, this.width, this.height);

    const currentWord = this.targetWords[this.currentWordIndex] || 'DRILL COMPLETED!';
    const expectedChar = currentWord[this.currentTypedIndex] || '';
    const activeCap = this.getKeyCapForChar(expectedChar);

    // 2. Active Target Pangram Word Box (Top)
    this.drawWordBadge(ctx, currentWord, this.currentTypedIndex, this.width / 2, 60, true, '#10b981', 24);

    // Dynamic Finger Placement Guide Banner
    if (activeCap) {
      ctx.font = 'bold 13px "Geist Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = activeCap.color;
      ctx.shadowColor = activeCap.color;
      ctx.shadowBlur = 10;
      const isShift = activeCap.shiftKey && expectedChar === activeCap.shiftKey;
      const keyPrompt = isShift ? `[${activeCap.shiftKey} (Shift + ${activeCap.display})]` : `[KEY: ${activeCap.display}]`;
      const handTxt = activeCap.hand === 'left' ? 'LEFT HAND' : activeCap.hand === 'right' ? 'RIGHT HAND' : 'THUMBS';
      ctx.fillText(`👉 ${handTxt} • ${activeCap.fingerName.toUpperCase()} ${keyPrompt}`, this.width / 2, 102);
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
    for (const cap of this.uniqueKeycaps) {
      const isTarget = cap === activeCap;
      this.renderKeycap(ctx, cap, isTarget);
    }
  }

  private renderKeycap(ctx: CanvasRenderingContext2D, k: KeyCap, isTarget: boolean): void {
    ctx.save();
    const pressOffset = k.isPressed ? 2 : 0;
    const ky = k.y + pressOffset;

    // Key Shadow / Bottom Bevel
    ctx.fillStyle = '#05070a';
    ctx.fillRect(k.x, ky + 3, k.w, k.h);

    // Keycap Top Surface
    if (isTarget) {
      // Glowing Target Key
      ctx.fillStyle = k.color;
      ctx.shadowColor = k.color;
      ctx.shadowBlur = 18;
    } else {
      ctx.fillStyle = '#1e293b';
    }

    ctx.beginPath();
    ctx.roundRect(k.x, ky, k.w, k.h, 4);
    ctx.fill();

    // Finger Quadrant Color Accent Bar on keycap top
    ctx.fillStyle = k.color;
    ctx.fillRect(k.x + 2, ky + 2, k.w - 4, 3);
    ctx.shadowBlur = 0;

    // Keycap Letter Text
    const fontSize = k.key === ' ' ? 9 : k.shiftKey ? 10 : 11;
    ctx.font = `bold ${fontSize}px "Geist Mono", monospace`;
    ctx.fillStyle = isTarget ? '#ffffff' : '#e2e8f0';
    ctx.textAlign = 'center';

    if (k.shiftKey) {
      // Render dual label (Shifted symbol on top in color, Base letter below)
      ctx.fillStyle = isTarget ? '#ffffff' : k.color;
      ctx.fillText(k.shiftKey, k.x + k.w / 2, ky + k.h * 0.42);
      ctx.fillStyle = isTarget ? '#ffffff' : '#e2e8f0';
      ctx.font = `9px "Geist Mono", monospace`;
      ctx.fillText(k.display, k.x + k.w / 2, ky + k.h * 0.82);
    } else if (k.isAnchor) {
      ctx.fillText(k.display, k.x + k.w / 2, ky + k.h / 2 + 2);
      // Tactile bump dot on F and J
      ctx.fillStyle = isTarget ? '#ffffff' : k.color;
      ctx.fillRect(k.x + k.w / 2 - 3, ky + k.h - 5, 6, 2);
    } else {
      ctx.fillText(k.display, k.x + k.w / 2, ky + k.h / 2 + 4);
    }

    ctx.restore();
  }
}
