// LocalStorage management for Player Stats, Game Scores, Levels, and Achievements

export interface GameScoreRecord {
  highScore: number;
  highestWPM: number;
  highestAccuracy: number;
  unlockedLevel: number;
  stars: number; // 0 to 3 stars per game
  timesPlayed: number;
  lastPlayed: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'speed' | 'accuracy' | 'arcade' | 'adventure' | 'fighting' | 'mastery';
  unlocked: boolean;
  unlockedAt?: number;
  progress?: number;
  maxProgress?: number;
}

export interface PlayerProfile {
  totalWordsTyped: number;
  totalKeystrokes: number;
  totalErrors: number;
  totalGamesPlayed: number;
  bestWPM: number;
  averageWPM: number;
  averageAccuracy: number;
  gameRecords: Record<string, GameScoreRecord>;
  achievements: Record<string, Achievement>;
  soundSwitch: 'clicky' | 'thock' | 'linear' | 'typewriter' | 'off';
  soundVolume: number;
}

const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  { id: 'first_blood', title: 'First Keystroke', description: 'Complete your very first typing game.', icon: '🎯', category: 'mastery', unlocked: false },
  { id: 'speed_50', title: 'Speed Cadet', description: 'Reach 50 WPM in any game or test.', icon: '⚡', category: 'speed', unlocked: false },
  { id: 'speed_75', title: 'Speed Veteran', description: 'Reach 75 WPM in any game or test.', icon: '🚀', category: 'speed', unlocked: false },
  { id: 'speed_100', title: 'Speed Demon', description: 'Break the sound barrier with 100+ WPM!', icon: '🔥', category: 'speed', unlocked: false },
  { id: 'speed_120', title: 'Keyboard God', description: 'Achieve legendary 120+ WPM typing speed.', icon: '👑', category: 'speed', unlocked: false },
  { id: 'accuracy_95', title: 'Marksman', description: 'Finish a game with at least 95% accuracy.', icon: '🏹', category: 'accuracy', unlocked: false },
  { id: 'accuracy_100', title: 'Flawless Victory', description: 'Complete a level with 100% perfect accuracy.', icon: '💎', category: 'accuracy', unlocked: false },
  { id: 'streak_25', title: 'Hot Hands', description: 'Achieve a 25-word streak without an error.', icon: '✨', category: 'accuracy', unlocked: false },
  { id: 'streak_50', title: 'Unstoppable Flow', description: 'Achieve a 50-word flawless streak.', icon: '🌟', category: 'accuracy', unlocked: false },
  { id: 'space_defender', title: 'Galactic Savior', description: 'Defeat the Mothership Boss in Type Defender.', icon: '🛸', category: 'arcade', unlocked: false },
  { id: 'meteor_shield', title: 'Planetary Guardian', description: 'Survive Level 5 in Meteor Strike.', icon: '☄️', category: 'arcade', unlocked: false },
  { id: 'matrix_hacker', title: 'Zero Trace Hacker', description: 'Infiltrate the Quantum Core in Cyber Hacker.', icon: '💻', category: 'adventure', unlocked: false },
  { id: 'ninja_master', title: 'Ghost Blade', description: 'Slice all targets in Neon Ninja Level 5.', icon: '🥷', category: 'adventure', unlocked: false },
  { id: 'brawler_champ', title: 'World Warrior', description: 'Defeat Grandmaster Shin in Street Fighter Typer.', icon: '🥊', category: 'fighting', unlocked: false },
  { id: 'archmage_duel', title: 'Supreme Archmage', description: 'Outcast the Elder Dragon in Wizard Duel.', icon: '🧙‍♂️', category: 'fighting', unlocked: false },
  { id: 'samurai_flash', title: 'One Cut Legend', description: 'Execute a sub-0.5s reaction cut in Samurai Showdown.', icon: '⚔️', category: 'fighting', unlocked: false },
  { id: 'game_explorer_5', title: 'Zone Explorer', description: 'Play at least 5 different games.', icon: '🎮', category: 'mastery', unlocked: false, progress: 0, maxProgress: 5 },
  { id: 'game_explorer_20', title: 'Typing Legend', description: 'Play all 20+ games in the Zone!', icon: '🏆', category: 'mastery', unlocked: false, progress: 0, maxProgress: 20 },
  { id: 'words_1000', title: 'Wordsmith', description: 'Type a total of 1,000 words across all games.', icon: '📚', category: 'mastery', unlocked: false, progress: 0, maxProgress: 1000 },
  { id: 'words_10000', title: 'Typing Titan', description: 'Type a total of 10,000 words across all games.', icon: '📜', category: 'mastery', unlocked: false, progress: 0, maxProgress: 10000 }
];

const STORAGE_KEY = 'typing_game_zone_profile_v1';

export class StorageManager {
  private static instance: StorageManager;

  public static get(): StorageManager {
    if (!StorageManager.instance) {
      StorageManager.instance = new StorageManager();
    }
    return StorageManager.instance;
  }

  public getProfile(): PlayerProfile {
    if (typeof window === 'undefined') return this.getDefaultProfile();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this.getDefaultProfile();
      const parsed = JSON.parse(raw);
      
      // Merge missing achievements if any
      const achievements: Record<string, Achievement> = {};
      DEFAULT_ACHIEVEMENTS.forEach(ach => {
        achievements[ach.id] = parsed.achievements?.[ach.id] || { ...ach };
      });

      return {
        totalWordsTyped: parsed.totalWordsTyped || 0,
        totalKeystrokes: parsed.totalKeystrokes || 0,
        totalErrors: parsed.totalErrors || 0,
        totalGamesPlayed: parsed.totalGamesPlayed || 0,
        bestWPM: parsed.bestWPM || 0,
        averageWPM: parsed.averageWPM || 0,
        averageAccuracy: parsed.averageAccuracy || 100,
        gameRecords: parsed.gameRecords || {},
        achievements,
        soundSwitch: parsed.soundSwitch || 'clicky',
        soundVolume: parsed.soundVolume ?? 0.5
      };
    } catch {
      return this.getDefaultProfile();
    }
  }

  public saveProfile(profile: PlayerProfile): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  public getGameRecord(gameId: string): GameScoreRecord {
    const profile = this.getProfile();
    return profile.gameRecords[gameId] || {
      highScore: 0,
      highestWPM: 0,
      highestAccuracy: 0,
      unlockedLevel: 1,
      stars: 0,
      timesPlayed: 0,
      lastPlayed: 0
    };
  }

  public recordGameResult(
    gameId: string,
    score: number,
    wpm: number,
    accuracy: number,
    levelCompleted: number,
    wordsTyped: number,
    keystrokes: number,
    errors: number
  ): { newHighScore: boolean; newBestWPM: boolean; unlockedAchievements: Achievement[] } {
    const profile = this.getProfile();
    const prevRecord = this.getGameRecord(gameId);

    const newHighScore = score > prevRecord.highScore;
    const newBestWPM = wpm > prevRecord.highestWPM;
    const overallNewBestWPM = wpm > profile.bestWPM;

    // Update game record
    const stars = Math.min(3, Math.max(prevRecord.stars, accuracy >= 98 && wpm >= 60 ? 3 : accuracy >= 90 ? 2 : 1));
    const nextUnlockedLevel = Math.max(prevRecord.unlockedLevel, levelCompleted + 1);

    profile.gameRecords[gameId] = {
      highScore: Math.max(prevRecord.highScore, score),
      highestWPM: Math.max(prevRecord.highestWPM, wpm),
      highestAccuracy: Math.max(prevRecord.highestAccuracy, accuracy),
      unlockedLevel: Math.min(5, nextUnlockedLevel),
      stars,
      timesPlayed: prevRecord.timesPlayed + 1,
      lastPlayed: Date.now()
    };

    // Update global profile
    profile.totalWordsTyped += wordsTyped;
    profile.totalKeystrokes += keystrokes;
    profile.totalErrors += errors;
    profile.totalGamesPlayed += 1;
    if (overallNewBestWPM) profile.bestWPM = wpm;

    // Recalculate average WPM
    profile.averageWPM = Math.round(
      (profile.averageWPM * (profile.totalGamesPlayed - 1) + wpm) / profile.totalGamesPlayed
    );
    profile.averageAccuracy = Math.round(
      (profile.averageAccuracy * (profile.totalGamesPlayed - 1) + accuracy) / profile.totalGamesPlayed
    );

    // Evaluate Achievements
    const unlockedAchievements: Achievement[] = [];

    const checkUnlock = (id: string, condition: boolean) => {
      const ach = profile.achievements[id];
      if (ach && !ach.unlocked && condition) {
        ach.unlocked = true;
        ach.unlockedAt = Date.now();
        unlockedAchievements.push(ach);
      }
    };

    checkUnlock('first_blood', profile.totalGamesPlayed >= 1);
    checkUnlock('speed_50', wpm >= 50);
    checkUnlock('speed_75', wpm >= 75);
    checkUnlock('speed_100', wpm >= 100);
    checkUnlock('speed_120', wpm >= 120);
    checkUnlock('accuracy_95', accuracy >= 95);
    checkUnlock('accuracy_100', accuracy === 100 && wordsTyped >= 10);
    checkUnlock('words_1000', profile.totalWordsTyped >= 1000);
    checkUnlock('words_10000', profile.totalWordsTyped >= 10000);

    const playedGameCount = Object.keys(profile.gameRecords).length;
    checkUnlock('game_explorer_5', playedGameCount >= 5);
    checkUnlock('game_explorer_20', playedGameCount >= 20);

    // Game-specific level 5 boss completions
    if (gameId === 'type-defender' && levelCompleted >= 5) checkUnlock('space_defender', true);
    if (gameId === 'meteor-strike' && levelCompleted >= 5) checkUnlock('meteor_shield', true);
    if (gameId === 'cyber-hacker' && levelCompleted >= 5) checkUnlock('matrix_hacker', true);
    if (gameId === 'neon-ninja' && levelCompleted >= 5) checkUnlock('ninja_master', true);
    if (gameId === 'street-fighter' && levelCompleted >= 5) checkUnlock('brawler_champ', true);
    if (gameId === 'wizard-duel' && levelCompleted >= 5) checkUnlock('archmage_duel', true);
    if (gameId === 'samurai-showdown' && levelCompleted >= 5) checkUnlock('samurai_flash', true);

    this.saveProfile(profile);

    return {
      newHighScore,
      newBestWPM,
      unlockedAchievements
    };
  }

  private getDefaultProfile(): PlayerProfile {
    const achievements: Record<string, Achievement> = {};
    DEFAULT_ACHIEVEMENTS.forEach(ach => {
      achievements[ach.id] = { ...ach };
    });

    return {
      totalWordsTyped: 0,
      totalKeystrokes: 0,
      totalErrors: 0,
      totalGamesPlayed: 0,
      bestWPM: 0,
      averageWPM: 0,
      averageAccuracy: 100,
      gameRecords: {},
      achievements,
      soundSwitch: 'clicky',
      soundVolume: 0.5
    };
  }
}

export const storage = StorageManager.get();
