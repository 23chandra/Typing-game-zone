
// Web Audio API procedural sound synthesizer for mechanical switches & arcade effects

export type SwitchSoundType = 'clicky' | 'thock' | 'linear' | 'typewriter' | 'pop' | 'beep' | 'off';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private currentSwitch: SwitchSoundType = 'clicky';
  private volume: number = 0.85;
  private isMuted: boolean = false;
  private noiseBuffer: AudioBuffer | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const savedSwitch = localStorage.getItem('typing_sound_switch') as SwitchSoundType;
        const savedVolume = localStorage.getItem('typing_sound_volume');
        const savedMuted = localStorage.getItem('typing_sound_muted');

        const validSwitches: SwitchSoundType[] = ['clicky', 'thock', 'linear', 'typewriter', 'pop', 'beep', 'off'];
        if (savedSwitch && validSwitches.includes(savedSwitch)) {
          this.currentSwitch = savedSwitch;
        } else {
          this.currentSwitch = 'clicky';
        }

        if (savedVolume !== null && !isNaN(parseFloat(savedVolume))) {
          this.volume = Math.max(0.1, Math.min(1.0, parseFloat(savedVolume)));
        } else {
          this.volume = 0.85;
        }

        if (savedMuted === 'true') {
          this.isMuted = true;
        } else {
          this.isMuted = false;
        }
      } catch {
        this.currentSwitch = 'clicky';
        this.volume = 0.85;
        this.isMuted = false;
      }
    }
  }

  public getContext(): AudioContext | null {
    if (!this.ctx && typeof window !== 'undefined') {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass({ latencyHint: 'interactive' });
        }
      } catch (e) {
        console.warn('AudioContext creation error:', e);
      }
    }
    return this.ctx;
  }

  public initContext(): AudioContext | null {
    const ctx = this.getContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  private getOrCreateNoiseBuffer(ctx: AudioContext): AudioBuffer {
    if (this.noiseBuffer && this.noiseBuffer.sampleRate === ctx.sampleRate) {
      return this.noiseBuffer;
    }
    const bufferSize = Math.floor(ctx.sampleRate * 0.1);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    this.noiseBuffer = buffer;
    return buffer;
  }

  public setSwitch(type: SwitchSoundType) {
    this.currentSwitch = type;
    if (type !== 'off') {
      this.isMuted = false;
      if (typeof window !== 'undefined') {
        localStorage.setItem('typing_sound_muted', 'false');
      }
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('typing_sound_switch', type);
      window.dispatchEvent(new CustomEvent('typing:sound-change', {
        detail: { switch: type, isMuted: this.isMuted, volume: this.volume }
      }));
    }
  }

  public getSwitch(): SwitchSoundType {
    return this.currentSwitch;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (typeof window !== 'undefined') {
      localStorage.setItem('typing_sound_volume', this.volume.toString());
      window.dispatchEvent(new CustomEvent('typing:sound-change', {
        detail: { switch: this.currentSwitch, isMuted: this.isMuted, volume: this.volume }
      }));
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('typing_sound_muted', this.isMuted.toString());
      window.dispatchEvent(new CustomEvent('typing:sound-change', {
        detail: { switch: this.currentSwitch, isMuted: this.isMuted, volume: this.volume }
      }));
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Play procedural keystroke sound based on current switch type
   */
  public playKey(isSpace = false, isEnter = false) {
    if (this.isMuted || this.currentSwitch === 'off') return;
    
    const ctx = this.initContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => {
        this._synthesizeKey(isSpace, isEnter);
      }).catch(() => {});
      return;
    }

    this._synthesizeKey(isSpace, isEnter);
  }

  private _synthesizeKey(isSpace = false, isEnter = false) {
    const ctx = this.ctx;
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const masterGain = ctx.createGain();
      const finalVolume = Math.max(0.01, this.volume * (isSpace || isEnter ? 1.0 : 0.85));
      masterGain.gain.setValueAtTime(finalVolume, now);
      masterGain.connect(ctx.destination);

      switch (this.currentSwitch) {
        case 'clicky':
          this.playBlueSwitch(now, masterGain, isSpace);
          break;
        case 'thock':
          this.playThockSwitch(now, masterGain, isSpace);
          break;
        case 'linear':
          this.playLinearSwitch(now, masterGain, isSpace);
          break;
        case 'typewriter':
          this.playTypewriter(now, masterGain, isSpace, isEnter);
          break;
        case 'pop':
          this.playPop(now, masterGain, isSpace);
          break;
        case 'beep':
          this.playBeep(now, masterGain, isSpace);
          break;
      }
    } catch (e) {
      console.warn('Error in _synthesizeKey:', e);
    }
  }

  // 1. Mechanical Blue Clicky: Sharp crisp click with metallic snap + bottom out
  private playBlueSwitch(now: number, masterGain: GainNode, isSpace: boolean) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // High snap click transient
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    const clickFilter = ctx.createBiquadFilter();

    clickFilter.type = 'bandpass';
    clickFilter.frequency.setValueAtTime(isSpace ? 2600 : 3400 + (Math.random() * 400 - 200), now);
    clickFilter.Q.setValueAtTime(2.5, now);

    const baseFreq = isSpace ? 3200 : 4200 + (Math.random() * 500 - 250);
    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(baseFreq, now);
    clickOsc.frequency.exponentialRampToValueAtTime(1200, now + 0.018);

    clickGain.gain.setValueAtTime(0.9, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

    clickOsc.connect(clickFilter);
    clickFilter.connect(clickGain);
    clickGain.connect(masterGain);
    clickOsc.start(now);
    clickOsc.stop(now + 0.025);

    // Second micro-click (spring release tick)
    const tickOsc = ctx.createOscillator();
    const tickGain = ctx.createGain();
    tickOsc.type = 'sine';
    tickOsc.frequency.setValueAtTime(isSpace ? 4000 : 4800, now + 0.012);
    tickGain.gain.setValueAtTime(0.001, now);
    tickGain.gain.setValueAtTime(0.4, now + 0.012);
    tickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.026);
    tickOsc.connect(tickGain);
    tickGain.connect(masterGain);
    tickOsc.start(now + 0.012);
    tickOsc.stop(now + 0.03);

    // Bottom out chassis thud
    const bodyOsc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    bodyOsc.type = 'sine';
    const bodyFreq = isSpace ? 150 : 230 + (Math.random() * 40 - 20);
    bodyOsc.frequency.setValueAtTime(bodyFreq, now);
    bodyOsc.frequency.exponentialRampToValueAtTime(75, now + 0.05);

    bodyGain.gain.setValueAtTime(0.7, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(masterGain);
    bodyOsc.start(now);
    bodyOsc.stop(now + 0.06);
  }

  // 2. Creamy Thock (Holy Panda / Inks): Low deep resonant thud
  private playThockSwitch(now: number, masterGain: GainNode, isSpace: boolean) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Deep resonant bottom-out
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isSpace ? 550 : 750, now);

    const freq = isSpace ? 130 : 185 + (Math.random() * 25 - 12);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 2.4, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.65, now + 0.065);

    oscGain.gain.setValueAtTime(1.0, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.08);

    // Damped stem pop
    const popOsc = ctx.createOscillator();
    const popGain = ctx.createGain();
    popOsc.type = 'sine';
    popOsc.frequency.setValueAtTime(isSpace ? 450 : 650, now);
    popOsc.frequency.exponentialRampToValueAtTime(180, now + 0.03);
    popGain.gain.setValueAtTime(0.55, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
    popOsc.connect(popGain);
    popGain.connect(masterGain);
    popOsc.start(now);
    popOsc.stop(now + 0.04);
  }

  // 3. Linear Switch (Red): Smooth, cushioned mechanical stroke
  private playLinearSwitch(now: number, masterGain: GainNode, isSpace: boolean) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    // Plastic stem bottom out
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    const baseFreq = isSpace ? 190 : 280 + (Math.random() * 30 - 15);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.045);

    oscGain.gain.setValueAtTime(0.8, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(oscGain);
    oscGain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.055);

    // Soft friction swoosh
    const buffer = this.getOrCreateNoiseBuffer(ctx);
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(isSpace ? 600 : 900, now);
    filter.Q.setValueAtTime(1.8, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.35, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);
    noise.start(now);
    noise.stop(now + 0.04);
  }

  // 4. Typewriter: Heavy mechanical clack + bell for Enter
  private playTypewriter(now: number, masterGain: GainNode, isSpace: boolean, isEnter: boolean) {
    if (!this.ctx) return;
    const ctx = this.ctx;

    if (isEnter) {
      // Typewriter Carriage Return Bell Chime
      const bell = ctx.createOscillator();
      const bellGain = ctx.createGain();
      bell.type = 'sine';
      bell.frequency.setValueAtTime(2489, now); // D#7
      bellGain.gain.setValueAtTime(0.9, now);
      bellGain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      bell.connect(bellGain);
      bellGain.connect(masterGain);
      bell.start(now);
      bell.stop(now + 0.9);

      // Bell Harmonic
      const bell2 = ctx.createOscillator();
      const bellGain2 = ctx.createGain();
      bell2.type = 'sine';
      bell2.frequency.setValueAtTime(4978, now);
      bellGain2.gain.setValueAtTime(0.35, now);
      bellGain2.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      bell2.connect(bellGain2);
      bellGain2.connect(masterGain);
      bell2.start(now);
      bell2.stop(now + 0.55);
      return;
    }

    // Heavy typewriter bar strike
    const barOsc = ctx.createOscillator();
    const barGain = ctx.createGain();
    barOsc.type = 'triangle';
    barOsc.frequency.setValueAtTime(isSpace ? 1800 : 2400, now);
    barOsc.frequency.exponentialRampToValueAtTime(600, now + 0.03);
    barGain.gain.setValueAtTime(0.85, now);
    barGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
    barOsc.connect(barGain);
    barGain.connect(masterGain);
    barOsc.start(now);
    barOsc.stop(now + 0.04);

    // Chassis Clatter
    const clackOsc = ctx.createOscillator();
    const clackGain = ctx.createGain();
    clackOsc.type = 'sawtooth';
    clackOsc.frequency.setValueAtTime(isSpace ? 140 : 200, now);
    clackOsc.frequency.exponentialRampToValueAtTime(50, now + 0.06);
    clackGain.gain.setValueAtTime(0.65, now);
    clackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);
    clackOsc.connect(clackGain);
    clackGain.connect(masterGain);
    clackOsc.start(now);
    clackOsc.stop(now + 0.07);
  }

  // 5. Playful Bubble Pop
  private playPop(now: number, masterGain: GainNode, isSpace: boolean) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    const startFreq = isSpace ? 320 : 460 + Math.random() * 220;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(startFreq * 2.8, now + 0.045);

    oscGain.gain.setValueAtTime(0.9, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(oscGain);
    oscGain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.055);
  }

  // 6. Digital Blip / Retro 8-Bit Beep
  private playBeep(now: number, masterGain: GainNode, isSpace: boolean) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    const baseFreq = isSpace ? 440 : 660 + (Math.random() * 80 - 40);
    osc.type = 'square';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.setValueAtTime(baseFreq * 1.5, now + 0.02);

    oscGain.gain.setValueAtTime(0.35, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    osc.connect(oscGain);
    oscGain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  /**
   * Sound effect for typing error / typo
   */
  public playError() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.09);

      gain.gain.setValueAtTime(this.volume * 0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.095);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch {}
  }

  /**
   * Arcade Laser Blast (for Type Defender)
   */
  public playLaser() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.12);

      gain.gain.setValueAtTime(Math.max(0.001, this.volume * 0.6), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.125);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch {}
  }

  /**
   * Arcade Explosion / Target Destroyed
   */
  public playExplosion() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const buffer = this.getOrCreateNoiseBuffer(ctx);
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);
      filter.frequency.linearRampToValueAtTime(90, now + 0.22);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(Math.max(0.001, this.volume * 0.8), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.26);
    } catch {}
  }

  /**
   * Victory Fanfare Chord / Completion Chime
   */
  public playVictory() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const chords = [523.25, 659.25, 783.99, 1046.5]; // C Major arpeggio
      const now = Math.max(ctx.currentTime, 0.001);

      chords.forEach((freq, index) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + index * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(Math.max(0.001, this.volume * 0.45), startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.65);
      });
    } catch {}
  }

  /**
   * Ninja Katana Blade Slice / Whoosh
   */
  public playSlice() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.09);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600, now);
      filter.Q.setValueAtTime(3.5, now);

      gain.gain.setValueAtTime(Math.max(0.001, this.volume * 0.65), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.095);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {}
  }

  /**
   * Wizard Magic Spell Cast
   */
  public playMagic() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.18);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(Math.max(0.001, this.volume * 0.5), now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.23);
    } catch {}
  }

  /**
   * Punch / Combat Hit Impact
   */
  public playHit() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(190, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.075);

      gain.gain.setValueAtTime(Math.max(0.001, this.volume * 0.85), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.085);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch {}
  }

  /**
   * Word Complete / Chime Score
   */
  public playChime() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.08);

      gain.gain.setValueAtTime(Math.max(0.001, this.volume * 0.5), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);
    } catch {}
  }

  /**
   * Game Over descending tone
   */
  public playGameOver() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const freqs = [440, 392, 349, 293];
      freqs.forEach((freq, idx) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + idx * 0.12;

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(Math.max(0.001, this.volume * 0.45), startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.14);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.15);
      });
    } catch {}
  }

  /**
   * Submarine Sonar Ping
   */
  public playSonar() {
    if (this.isMuted || this.volume <= 0.001 || this.currentSwitch === 'off') return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const now = Math.max(ctx.currentTime, 0.001);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(Math.max(0.001, this.volume * 0.6), now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.95);
    } catch {}
  }
}

export const soundEngine = new SoundEngine();
