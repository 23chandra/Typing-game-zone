// Complete Strongly Typed Translation Schema for Typing Game Zone

export interface TranslationSchema {
  // Navigation & Header
  nav: {
    games: string;
    arcade: string;
    speedTest: string;
    practiceLab: string;
    leaderboards: string;
    play: string;
    playGame: string;
    commandPalette: string;
    themes: string;
    siteTheme: string;
    soundProfile: string;
    switchSynthesis: string;
    activeStreak: string;
    novice: string;
    language: string;
    searchLang: string;
    allGames: string;
    home: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    startTest: string;
    browseGames: string;
    activeTypists: string;
    gamesCount: string;
    switchSounds: string;
    colorThemes: string;
  };

  // Game Categories & Catalog
  cat: {
    all: string;
    arcade: string;
    action: string;
    adventure: string;
    fighting: string;
    puzzle: string;
    practice: string;
  };

  // Speed Test Suite
  st: {
    mode: string;
    time: string;
    words: string;
    quote: string;
    zen: string;
    custom: string;
    wpm: string;
    cpm: string;
    raw: string;
    acc: string;
    consistency: string;
    characters: string;
    testType: string;
    timeElapsed: string;
    nextTest: string;
    repeatTest: string;
    practiceMissed: string;
    replay: string;
    shareScore: string;
    copied: string;
    ghostDuel: string;
    clickToFocus: string;
    customModalTitle: string;
    customDurationPrompt: string;
    customTextPrompt: string;
    capsLockOn: string;
    punc: string;
    num: string;
    nativeMode: string;
    latinMode: string;
    resultsTitle: string;
    speedSummary: string;
    accuracySummary: string;
  };

  // Practice Lab
  prac: {
    title: string;
    subtitle: string;
    focus: string;
    drillHome: string;
    drillTop: string;
    drillBottom: string;
    drillNumbers: string;
    drillSymbols: string;
    drillWeak: string;
    drillPangrams: string;
    drillNgrams: string;
    metronome: string;
    colorMode: string;
    themeSync: string;
    fingerQuadrant: string;
    layout: string;
    keyboardLayout: string;
    bpm: string;
    instructions: string;
    leftPinky: string;
    leftRing: string;
    leftMiddle: string;
    leftIndex: string;
    rightIndex: string;
    rightMiddle: string;
    rightRing: string;
    rightPinky: string;
    thumbs: string;
  };

  // Leaderboards & Career Hub
  lead: {
    title: string;
    subtitle: string;
    levelProgress: string;
    activeStreak: string;
    bestStreak: string;
    careerWords: string;
    totalStrokes: string;
    dailyQuests: string;
    dailyQuestsDesc: string;
    todaysChallenges: string;
    activityHeatmap: string;
    activityHeatmapDesc: string;
    activeDays: string;
    totalXp: string;
    bestWpmRecord: string;
    averageWpm: string;
    accuracy: string;
    gamesCompleted: string;
    weakKeysTitle: string;
    weakKeysDesc: string;
    practiceDrills: string;
    prestigeAchievements: string;
    gameRecords: string;
    gameRecordsDesc: string;
    exportStats: string;
    resetStats: string;
    claimXp: string;
    claimed: string;
  };

  // Game Engine & HUD
  game: {
    level: string;
    score: string;
    targetWpm: string;
    health: string;
    pause: string;
    resume: string;
    restart: string;
    nextLevel: string;
    victory: string;
    gameOver: string;
    howToPlay: string;
    typeToShoot: string;
    levelCleared: string;
    performanceGrade: string;
    tryAgain: string;
    newRecord: string;
    xpEarned: string;
    targeting: string;
    typeFirstLetter: string;
    mistakes: string;
    backspaceErase: string;
    pauseKey: string;
    escOrIcon: string;
    backToGames: string;
    playNow: string;
  };

  // Footer & Common UI
  footer: {
    quickTheme: string;
    themeSubtitle: string;
    allThemes: string;
    gameGenres: string;
    practiceAndTools: string;
    audioSynthesizer: string;
    audioDesc: string;
    rights: string;
    operational: string;
    languageSelect: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
    faq: string;
  };

  // SEO & Metadata
  seo: {
    homeTitle: string;
    homeDescription: string;
    gamesTitle: string;
    gamesDescription: string;
    speedTestTitle: string;
    speedTestDescription: string;
    practiceTitle: string;
    practiceDescription: string;
    leaderboardsTitle: string;
    leaderboardsDescription: string;
    faqTitle: string;
    faqDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    termsTitle: string;
    termsDescription: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
}
