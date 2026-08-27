
// Web Audio API procedural sound synthesizer for mechanical switches & arcade effects

export type SwitchSoundType = 'clicky' | 'thock' | 'linear' | 'typewriter' | 'off';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private currentSwitch: SwitchSoundType = 'clicky';
  private volume: number = 0.5;
  private isMuted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      // Load preference from localStorage
      const savedSwitch = localStorage.getItem('typing_sound_switch') as SwitchSoundType;
      const savedVolume = localStorage.getItem('typing_sound_volume');
      const savedMuted = localStorage.getItem('typing_sound_muted');

      if (savedSwitch) this.currentSwitch = savedSwitch;
      if (savedVolume) this.volume = parseFloat(savedVolume);
      if (savedMuted) this.isMuted = savedMuted === 'true';
    }
  }

  public initContext() {
    try {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  public setSwitch(type: SwitchSoundType) {
    this.currentSwitch = type;
    if (typeof window !== 'undefined') {
      localStorage.setItem('typing_sound_switch', type);
    }
  }

  public getSwitch(): SwitchSoundType {
    return this.currentSwitch;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (typeof window !== 'undefined') {
      localStorage.setItem('typing_sound_volume', this.volume.toString());
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('typing_sound_muted', this.isMuted.toString());
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
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const gainNode = this.ctx.createGain();
    const finalVolume = this.volume * (isSpace || isEnter ? 0.9 : 0.7);
    gainNode.gain.setValueAtTime(finalVolume, now);
    gainNode.connect(this.ctx.destination);

    switch (this.currentSwitch) {
      case 'clicky':
        this.playBlueSwitch(now, gainNode, isSpace);
        break;
      case 'thock':
        this.playThockSwitch(now, gainNode, isSpace);
        break;
      case 'linear':
        this.playLinearSwitch(now, gainNode, isSpace);
        break;
      case 'typewriter':
        this.playTypewriter(now, gainNode, isSpace, isEnter);
        break;
    }
  }

  // Mechanical Blue Clicky: Sharp crisp click with metallic transient
  private playBlueSwitch(now: number, masterGain: GainNode, isSpace: boolean) {
    if (!this.ctx) return;

    // High snap transient (oscillator)
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    const baseFreq = isSpace ? 2800 : 3400 + (Math.random() * 400 - 200);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.015);

    oscGain.gain.setValueAtTime(0.8, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    osc.connect(oscGain);
    oscGain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.025);

    // Body bottom out thud
    const bottomOsc = this.ctx.createOscillator();
    const bottomGain = this.ctx.createGain();
    bottomOsc.type = 'sine';
    bottomOsc.frequency.setValueAtTime(isSpace ? 140 : 220 + (Math.random() * 40 - 20), now);
    bottomOsc.frequency.exponentialRampToValueAtTime(60, now + 0.04);

    bottomGain.gain.setValueAtTime(0.5, now);
    bottomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    bottomOsc.connect(bottomGain);
    bottomGain.connect(masterGain);
    bottomOsc.start(now);
    bottomOsc.stop(now + 0.05);
  }

  // Creamy Thock (Holy Panda / Inks): Low deep resonant pop
  private playThockSwitch(now: number, masterGain: GainNode, isSpace: boolean) {
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);

    const freq = isSpace ? 120 : 180 + (Math.random() * 30 - 15);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 2.2, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, now + 0.06);

    oscGain.gain.setValueAtTime(1.0, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  // Linear Switch (Red): Muted smooth stroke
  private playLinearSwitch(now: number, masterGain: GainNode, isSpace: boolean) {
    if (!this.ctx) return;

    const bufferSize = this.ctx.sampleRate * 0.03;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(isSpace ? 400 : 650 + (Math.random() * 80 - 40), now);
    filter.Q.setValueAtTime(3.0, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);

    noise.start(now);
    noise.stop(now + 0.035);
  }

  // Typewriter: Heavy mechanical clack + bell for Enter
  private playTypewriter(now: number, masterGain: GainNode, isSpace: boolean, isEnter: boolean) {
    if (!this.ctx) return;

    if (isEnter) {
      // Typewriter Carriage Bell Chime
      const bell = this.ctx.createOscillator();
      const bellGain = this.ctx.createGain();
      bell.type = 'sine';
      bell.frequency.setValueAtTime(2489, now); // D#7
      bellGain.gain.setValueAtTime(0.7, now);
      bellGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      bell.connect(bellGain);
      bellGain.connect(masterGain);
      bell.start(now);
      bell.stop(now + 0.85);
      return;
    }

    // Heavy typewriter strike
    this.playBlueSwitch(now, masterGain, isSpace);
  }

  /**
   * Sound effect for typing error / typo
   */
  public playError() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.linearRampToValueAtTime(90, now + 0.08);

    gain.gain.setValueAtTime(this.volume * 0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  /**
   * Arcade Laser Blast (for Type Defender)
   */
  public playLaser() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.12);

    gain.gain.setValueAtTime(this.volume * 0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.13);
  }

  /**
   * Arcade Explosion / Target Destroyed
   */
  public playExplosion() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.25;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.08));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.linearRampToValueAtTime(100, now + 0.2);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(this.volume * 0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 0.26);
  }

  /**
   * Victory Fanfare Chord / Completion Chime
   */
  public playVictory() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const chords = [523.25, 659.25, 783.99, 1046.5]; // C Major arpeggio
    const now = this.ctx.currentTime;

    chords.forEach((freq, index) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + index * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(this.volume * 0.3, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.65);
    });
  }

  /**
   * Ninja Katana Blade Slice / Whoosh
   */
  public playSlice() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(2200, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.09);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1500, now);
    filter.Q.setValueAtTime(4.0, now);

    gain.gain.setValueAtTime(this.volume * 0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  /**
   * Wizard Magic Spell Cast
   */
  public playMagic() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.18);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(this.volume * 0.4, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.23);
  }

  /**
   * Punch / Combat Hit Impact
   */
  public playHit() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.07);

    gain.gain.setValueAtTime(this.volume * 0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  /**
   * Word Complete / Chime Score
   */
  public playChime() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.08);

    gain.gain.setValueAtTime(this.volume * 0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.13);
  }

  /**
   * Game Over descending tone
   */
  public playGameOver() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const freqs = [440, 392, 349, 293];
    freqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.12;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(this.volume * 0.35, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.15);
    });
  }

  /**
   * Submarine Sonar Ping
   */
  public playSonar() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(this.volume * 0.5, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.95);
  }
}

export const soundEngine = new SoundEngine();
