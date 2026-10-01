// LocalStorage management for Player Stats, Game Scores, Levels, Achievements,
// XP & Level Progression, Daily Activity Heatmaps, Daily Quests, Weak Key Analytics, and Ghost Telemetry

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

export interface DailyActivityRecord {
  date: string; // "YYYY-MM-DD"
  wordsTyped: number;
  testsCompleted: number;
  gamesCompleted: number;
  drillsCompleted: number;
  xpEarned: number;
  bestWPM: number;
}

export interface KeyStatRecord {
  char: string;
  total: number;
  errors: number;
  totalLatencyMs: number;
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  completed: boolean;
  claimed: boolean;
  xpReward: number;
  icon: string;
  type: 'wpm' | 'words' | 'games' | 'drills' | 'accuracy';
}

export interface PlayerRankTier {
  level: number;
  title: string;
  icon: string;
  color: string;
  minXP: number;
  maxXP: number;
  progressPercent: number;
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
  soundSwitch: 'clicky' | 'thock' | 'linear' | 'typewriter' | 'pop' | 'beep' | 'off';
  soundVolume: number;
  // Feature 1: XP & Level Progression
  xp: number;
  currentStreak: number;
  bestStreak: number;
  lastActiveDate: string; // "YYYY-MM-DD"
  // Feature 2: Daily Activity Heatmap
  dailyActivity: Record<string, DailyActivityRecord>;
  // Feature 3: Daily Quests
  dailyQuestsDate: string;
  dailyQuests: DailyQuest[];
  // Feature 4: Weak Keys Diagnostic
  keyStats: Record<string, KeyStatRecord>;
  // Feature 5: Ghost Personal Best Trajectory
  ghostPB?: { wpm: number; mode: string; duration: number };
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
  { id: 'words_10000', title: 'Typing Titan', description: 'Type a total of 10,000 words across all games.', icon: '📜', category: 'mastery', unlocked: false, progress: 0, maxProgress: 10000 },
  { id: 'streak_3_days', title: 'Consistent Striker', description: 'Maintain a 3-day typing streak.', icon: '📅', category: 'mastery', unlocked: false },
  { id: 'streak_7_days', title: 'Weekly Champion', description: 'Maintain a 7-day daily typing streak.', icon: '🔥', category: 'mastery', unlocked: false },
  { id: 'level_10', title: 'Rhythm Master', description: 'Reach Player Level 10.', icon: '🎖️', category: 'mastery', unlocked: false },
  { id: 'level_25', title: 'Cyber Overlord', description: 'Reach Player Level 25.', icon: '⚡', category: 'mastery', unlocked: false },
  { id: 'level_50', title: 'Grandmaster Titan', description: 'Ascend to Max Level 50 Titan!', icon: '👑', category: 'mastery', unlocked: false }
];

const STORAGE_KEY = 'typing_game_zone_profile_v2';
const LEGACY_STORAGE_KEY = 'typing_game_zone_profile_v1';

export class StorageManager {
  private static instance: StorageManager;

  public static get(): StorageManager {
    if (!StorageManager.instance) {
      StorageManager.instance = new StorageManager();
    }
    return StorageManager.instance;
  }

  public getTodayString(): string {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  public getProfile(): PlayerProfile {
    if (typeof window === 'undefined') return this.getDefaultProfile();
    try {
      let raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        // Migration from v1 if exists
        const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacyRaw) {
          raw = legacyRaw;
        } else {
          return this.getDefaultProfile();
        }
      }

      const parsed = JSON.parse(raw);
      const today = this.getTodayString();

      // Merge missing achievements if any
      const achievements: Record<string, Achievement> = {};
      DEFAULT_ACHIEVEMENTS.forEach(ach => {
        achievements[ach.id] = parsed.achievements?.[ach.id] || { ...ach };
      });

      // Maintain streak
      let currentStreak = parsed.currentStreak || 0;
      const lastActiveDate = parsed.lastActiveDate || '';
      if (lastActiveDate) {
        const lastDate = new Date(lastActiveDate);
        const nowDate = new Date(today);
        const diffDays = Math.round((nowDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
        if (diffDays > 1) {
          currentStreak = 0; // Streak broken
        }
      }

      // Check daily quests expiration
      let dailyQuests = parsed.dailyQuests;
      let dailyQuestsDate = parsed.dailyQuestsDate;
      if (!dailyQuests || dailyQuestsDate !== today) {
        dailyQuests = this.generateDailyQuests(today);
        dailyQuestsDate = today;
      }

      const profile: PlayerProfile = {
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
        soundVolume: parsed.soundVolume ?? 0.85,
        xp: parsed.xp || 0,
        currentStreak,
        bestStreak: parsed.bestStreak || currentStreak,
        lastActiveDate: parsed.lastActiveDate || today,
        dailyActivity: parsed.dailyActivity || {},
        dailyQuestsDate,
        dailyQuests,
        keyStats: parsed.keyStats || {},
        ghostPB: parsed.ghostPB
      };

      return profile;
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

  // XP & Leveling Curve: Level 1 to 50
  public getLevelInfo(xp: number): PlayerRankTier {
    let level = 1;
    while (level < 50) {
      const nextLevelXP = 50 * level * level + 100 * level;
      if (xp < nextLevelXP) break;
      level++;
    }

    const currentLevelMinXP = level === 1 ? 0 : 50 * (level - 1) * (level - 1) + 100 * (level - 1);
    const nextLevelXP = level === 50 ? currentLevelMinXP + 10000 : 50 * level * level + 100 * level;
    const progressPercent = Math.min(100, Math.max(0, Math.round(((xp - currentLevelMinXP) / (nextLevelXP - currentLevelMinXP)) * 100)));

    let title = 'Novice Keyer';
    let icon = '🌱';
    let color = '#10b981';

    if (level >= 50) {
      title = 'Keyboard Titan';
      icon = '👑';
      color = '#e2b714';
    } else if (level >= 40) {
      title = 'Speed Demon';
      icon = '🔥';
      color = '#f97316';
    } else if (level >= 30) {
      title = 'Keyboard Samurai';
      icon = '⚔️';
      color = '#ef4444';
    } else if (level >= 20) {
      title = 'Cyber Hacker';
      icon = '💻';
      color = '#eab308';
    } else if (level >= 10) {
      title = 'Rhythm Striker';
      icon = '⚡';
      color = '#8b5cf6';
    } else if (level >= 5) {
      title = 'Cadet Typist';
      icon = '🎯';
      color = '#3b82f6';
    }

    return {
      level,
      title,
      icon,
      color,
      minXP: currentLevelMinXP,
      maxXP: nextLevelXP,
      progressPercent
    };
  }

  public addXP(amount: number, reason = ''): { newXP: number; oldLevel: number; newLevel: number; levelUp: boolean } {
    const profile = this.getProfile();
    const oldLevel = this.getLevelInfo(profile.xp).level;
    profile.xp += amount;
    const newLevel = this.getLevelInfo(profile.xp).level;
    const levelUp = newLevel > oldLevel;

    // Record in today's daily activity
    const today = this.getTodayString();
    if (!profile.dailyActivity[today]) {
      profile.dailyActivity[today] = {
        date: today,
        wordsTyped: 0,
        testsCompleted: 0,
        gamesCompleted: 0,
        drillsCompleted: 0,
        xpEarned: 0,
        bestWPM: 0
      };
    }
    profile.dailyActivity[today].xpEarned += amount;

    if (levelUp) {
      if (newLevel >= 10 && profile.achievements.level_10) profile.achievements.level_10.unlocked = true;
      if (newLevel >= 25 && profile.achievements.level_25) profile.achievements.level_25.unlocked = true;
      if (newLevel >= 50 && profile.achievements.level_50) profile.achievements.level_50.unlocked = true;
    }

    this.saveProfile(profile);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('typing:xp-gained', {
        detail: { amount, newXP: profile.xp, oldLevel, newLevel, levelUp, reason }
      }));
    }

    return { newXP: profile.xp, oldLevel, newLevel, levelUp };
  }

  // Daily Activity & Streak Recording
  public recordActivity(words: number, tests = 0, games = 0, drills = 0, wpm = 0): void {
    const profile = this.getProfile();
    const today = this.getTodayString();

    // Streak update
    if (!profile.currentStreak || profile.currentStreak === 0) {
      profile.currentStreak = 1;
      if (profile.bestStreak < 1) profile.bestStreak = 1;
      profile.lastActiveDate = today;
    } else if (profile.lastActiveDate !== today) {
      const lastDate = new Date(profile.lastActiveDate);
      const nowDate = new Date(today);
      const diffDays = Math.round((nowDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

      if (diffDays === 1) {
        profile.currentStreak += 1;
      } else if (diffDays > 1) {
        profile.currentStreak = 1;
      }

      if (profile.currentStreak > profile.bestStreak) {
        profile.bestStreak = profile.currentStreak;
      }
      profile.lastActiveDate = today;

      if (profile.currentStreak >= 3 && profile.achievements.streak_3_days) {
        profile.achievements.streak_3_days.unlocked = true;
      }
      if (profile.currentStreak >= 7 && profile.achievements.streak_7_days) {
        profile.achievements.streak_7_days.unlocked = true;
      }
    }

    if (!profile.dailyActivity[today]) {
      profile.dailyActivity[today] = {
        date: today,
        wordsTyped: 0,
        testsCompleted: 0,
        gamesCompleted: 0,
        drillsCompleted: 0,
        xpEarned: 0,
        bestWPM: 0
      };
    }

    profile.dailyActivity[today].wordsTyped += words;
    profile.dailyActivity[today].testsCompleted += tests;
    profile.dailyActivity[today].gamesCompleted += games;
    profile.dailyActivity[today].drillsCompleted += drills;
    if (wpm > profile.dailyActivity[today].bestWPM) {
      profile.dailyActivity[today].bestWPM = wpm;
    }

    // Award standard word XP
    const wordXP = words * 2;
    if (wordXP > 0) {
      profile.xp += wordXP;
      profile.dailyActivity[today].xpEarned += wordXP;
    }

    this.saveProfile(profile);
  }

  // Feature 3: Deterministic Daily Quests Generator
  public generateDailyQuests(dateStr: string): DailyQuest[] {
    let seed = 0;
    for (let i = 0; i < dateStr.length; i++) {
      seed = (seed << 5) - seed + dateStr.charCodeAt(i);
      seed |= 0;
    }
    const rand = (min: number, max: number) => {
      seed = (seed * 9301 + 49297) % 233280;
      const rnd = seed / 233280;
      return Math.floor(min + rnd * (max - min));
    };

    const targetWPM = rand(50, 85);
    const targetWords = rand(150, 400);
    const targetGamesOrDrills = rand(2, 4);

    return [
      {
        id: `quest_wpm_${dateStr}`,
        title: 'Velocity Sprint',
        description: `Achieve ${targetWPM}+ WPM in any Speed Test or Game`,
        target: targetWPM,
        current: 0,
        completed: false,
        claimed: false,
        xpReward: 150,
        icon: '⚡',
        type: 'wpm'
      },
      {
        id: `quest_words_${dateStr}`,
        title: 'Word Forge',
        description: `Type ${targetWords} total words today across the zone`,
        target: targetWords,
        current: 0,
        completed: false,
        claimed: false,
        xpReward: 120,
        icon: '📚',
        type: 'words'
      },
      {
        id: `quest_games_${dateStr}`,
        title: 'Arcade & Drill Champion',
        description: `Complete ${targetGamesOrDrills} Game stages or Practice Drills`,
        target: targetGamesOrDrills,
        current: 0,
        completed: false,
        claimed: false,
        xpReward: 180,
        icon: '🎮',
        type: 'games'
      }
    ];
  }

  public updateDailyQuestProgress(type: 'wpm' | 'words' | 'games' | 'drills' | 'accuracy', value: number): void {
    const profile = this.getProfile();
    let updated = false;

    profile.dailyQuests.forEach(quest => {
      if (quest.completed || quest.claimed) return;

      if (quest.type === type) {
        if (type === 'wpm' || type === 'accuracy') {
          if (value >= quest.target) {
            quest.current = quest.target;
            quest.completed = true;
            updated = true;
          } else if (value > quest.current) {
            quest.current = value;
            updated = true;
          }
        } else {
          quest.current = Math.min(quest.target, quest.current + value);
          if (quest.current >= quest.target) {
            quest.completed = true;
          }
          updated = true;
        }
      }
    });

    if (updated) {
      this.saveProfile(profile);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('typing:quest-updated', { detail: { quests: profile.dailyQuests } }));
      }
    }
  }

  public claimQuestReward(questId: string): { claimed: boolean; xpEarned: number } {
    const profile = this.getProfile();
    const quest = profile.dailyQuests.find(q => q.id === questId);
    if (quest && quest.completed && !quest.claimed) {
      quest.claimed = true;
      this.saveProfile(profile);
      this.addXP(quest.xpReward, `Daily Quest: ${quest.title}`);
      return { claimed: true, xpEarned: quest.xpReward };
    }
    return { claimed: false, xpEarned: 0 };
  }

  // Feature 4: Weak Keys Diagnostic & Analytics
  public recordKeystroke(char: string, isError: boolean, latencyMs = 0): void {
    if (!char || char.length !== 1) return;
    const clean = char.toLowerCase();
    const profile = this.getProfile();

    if (!profile.keyStats[clean]) {
      profile.keyStats[clean] = {
        char: clean,
        total: 0,
        errors: 0,
        totalLatencyMs: 0
      };
    }

    const stat = profile.keyStats[clean];
    stat.total += 1;
    if (isError) stat.errors += 1;
    if (latencyMs > 0) stat.totalLatencyMs += latencyMs;

    this.saveProfile(profile);
  }

  public getWeakestKeys(topN = 5): { char: string; errorRate: number; total: number; errors: number }[] {
    const profile = this.getProfile();
    const stats = Object.values(profile.keyStats).filter(s => s.total >= 2);

    if (stats.length === 0) {
      return [
        { char: 'p', errorRate: 15, total: 20, errors: 3 },
        { char: 'q', errorRate: 14, total: 15, errors: 2 },
        { char: 'z', errorRate: 12, total: 18, errors: 2 },
        { char: 'x', errorRate: 10, total: 22, errors: 2 },
        { char: 'b', errorRate: 9, total: 30, errors: 3 }
      ];
    }

    return stats
      .map(s => ({
        char: s.char,
        errorRate: Math.round((s.errors / s.total) * 100),
        total: s.total,
        errors: s.errors
      }))
      .sort((a, b) => b.errorRate - a.errorRate || b.errors - a.errors)
      .slice(0, topN);
  }

  // Feature 5: Ghost Personal Best Trajectory
  public saveGhostPB(wpm: number, mode: string, duration: number): void {
    const profile = this.getProfile();
    if (!profile.ghostPB || wpm > profile.ghostPB.wpm) {
      profile.ghostPB = { wpm, mode, duration };
      this.saveProfile(profile);
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
  ): { newHighScore: boolean; newBestWPM: boolean; xpEarned: number; unlockedAchievements: Achievement[] } {
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

    // Recalculate average WPM & Accuracy
    profile.averageWPM = Math.round(
      (profile.averageWPM * (profile.totalGamesPlayed - 1) + wpm) / profile.totalGamesPlayed
    );
    profile.averageAccuracy = Math.round(
      (profile.averageAccuracy * (profile.totalGamesPlayed - 1) + accuracy) / profile.totalGamesPlayed
    );

    // Calculate Game XP
    const baseGameXP = 50 * levelCompleted;
    const accuracyBonus = Math.round(accuracy * 0.5);
    const speedBonus = Math.round(wpm * 0.75);
    const totalGameXP = baseGameXP + accuracyBonus + speedBonus;

    this.recordActivity(wordsTyped, 0, 1, 0, wpm);
    this.addXP(totalGameXP, `Cleared ${gameId} Lvl ${levelCompleted}`);
    this.updateDailyQuestProgress('games', 1);
    this.updateDailyQuestProgress('wpm', wpm);
    this.updateDailyQuestProgress('words', wordsTyped);
    this.updateDailyQuestProgress('accuracy', accuracy);

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
      xpEarned: totalGameXP,
      unlockedAchievements
    };
  }

  public getDefaultProfile(): PlayerProfile {
    const achievements: Record<string, Achievement> = {};
    DEFAULT_ACHIEVEMENTS.forEach(ach => {
      achievements[ach.id] = { ...ach };
    });

    const today = this.getTodayString();

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
      soundVolume: 0.85,
      xp: 0,
      currentStreak: 0,
      bestStreak: 0,
      lastActiveDate: '',
      dailyActivity: {},
      dailyQuestsDate: today,
      dailyQuests: this.generateDailyQuests(today),
      keyStats: {}
    };
  }
}

export const storage = StorageManager.get();

