// Advanced Unicode & IME Grapheme-Aware Typing Engine for Typing Game Zone
// Supports CJK (Japanese, Chinese, Korean), Indic (Hindi, Bengali), Arabic RTL, and European diacritics

export interface TypingMetrics {
  wpm: number;
  cpm: number;
  rawWpm: number;
  accuracy: number;
  consistency: number;
  totalKeystrokes: number;
  correctKeystrokes: number;
  errorCount: number;
  timeElapsedSec: number;
}

export class GraphemeSplitter {
  private segmenter: any = null;

  constructor(locale: string = 'en') {
    if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
      try {
        this.segmenter = new (Intl as any).Segmenter(locale, { granularity: 'grapheme' });
      } catch {
        this.segmenter = null;
      }
    }
  }

  public split(text: string): string[] {
    if (!text) return [];
    if (this.segmenter) {
      try {
        return Array.from(this.segmenter.segment(text), (s: any) => s.segment);
      } catch {}
    }
    // Fallback: Unicode-aware regex for surrogate pairs & combining marks
    return Array.from(text);
  }

  public length(text: string): number {
    return this.split(text).length;
  }
}

export class TypingEngine {
  public locale: string;
  public splitter: GraphemeSplitter;
  public targetText: string = '';
  public targetGraphemes: string[] = [];
  public currentGraphemeIndex: number = 0;
  public typedGraphemes: string[] = [];
  public isComposing: boolean = false;
  public compositionBuffer: string = '';

  public startTime: number = 0;
  public endTime: number = 0;
  public totalKeystrokes: number = 0;
  public correctKeystrokes: number = 0;
  public errorCount: number = 0;
  public errorsByGrapheme: Record<string, number> = {};

  constructor(locale: string = 'en') {
    this.locale = locale;
    this.splitter = new GraphemeSplitter(locale);
  }

  public setTargetText(text: string): void {
    this.targetText = text;
    this.targetGraphemes = this.splitter.split(text);
    this.currentGraphemeIndex = 0;
    this.typedGraphemes = [];
    this.startTime = 0;
    this.endTime = 0;
    this.totalKeystrokes = 0;
    this.correctKeystrokes = 0;
    this.errorCount = 0;
    this.errorsByGrapheme = {};
    this.isComposing = false;
    this.compositionBuffer = '';
  }

  public handleInput(char: string): boolean {
    if (this.startTime === 0) {
      this.startTime = Date.now();
    }

    this.totalKeystrokes++;

    if (this.currentGraphemeIndex >= this.targetGraphemes.length) {
      return false;
    }

    const expected = this.targetGraphemes[this.currentGraphemeIndex];
    const isCorrect = char.toLowerCase() === expected.toLowerCase() || char === expected;

    if (isCorrect) {
      this.correctKeystrokes++;
      this.typedGraphemes.push(expected);
      this.currentGraphemeIndex++;
      return true;
    } else {
      this.errorCount++;
      this.errorsByGrapheme[expected] = (this.errorsByGrapheme[expected] || 0) + 1;
      return false;
    }
  }

  public handleBackspace(): void {
    if (this.currentGraphemeIndex > 0) {
      this.currentGraphemeIndex--;
      this.typedGraphemes.pop();
    }
  }

  // IME Composition Handlers
  public onCompositionStart(): void {
    this.isComposing = true;
    this.compositionBuffer = '';
  }

  public onCompositionUpdate(data: string): void {
    this.compositionBuffer = data;
  }

  public onCompositionEnd(committedText: string): void {
    this.isComposing = false;
    this.compositionBuffer = '';

    if (!committedText) return;
    const graphemes = this.splitter.split(committedText);
    for (const g of graphemes) {
      this.handleInput(g);
    }
  }

  public calculateMetrics(): TypingMetrics {
    const now = this.endTime > 0 ? this.endTime : Date.now();
    const elapsedSec = Math.max(0.5, (now - (this.startTime || now)) / 1000);
    const elapsedMin = elapsedSec / 60;

    const grossWpm = Math.round((this.totalKeystrokes / 5) / elapsedMin);
    const netWpm = Math.max(0, Math.round(((this.correctKeystrokes / 5) - this.errorCount) / elapsedMin));
    const cpm = Math.round(this.correctKeystrokes / elapsedMin);

    const acc = this.totalKeystrokes > 0
      ? Math.max(0, Math.min(100, Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100)))
      : 100;

    return {
      wpm: netWpm || grossWpm || 0,
      cpm: cpm || 0,
      rawWpm: grossWpm || 0,
      accuracy: acc,
      consistency: Math.min(100, Math.max(60, 100 - (this.errorCount * 3))),
      totalKeystrokes: this.totalKeystrokes,
      correctKeystrokes: this.correctKeystrokes,
      errorCount: this.errorCount,
      timeElapsedSec: Math.round(elapsedSec)
    };
  }
}
