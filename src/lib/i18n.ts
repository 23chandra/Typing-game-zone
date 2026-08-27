// Multi-Language Internationalization (i18n) Engine for Typing Game Zone
// Supports 8 global languages: English (en), Hindi (hi), Spanish (es), French (fr), German (de), Japanese (ja), Portuguese (pt), Russian (ru)

export interface LanguageDef {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageDef[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' }
];

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.games': 'Games (21)',
    'nav.arcade': 'Arcade Lounge',
    'nav.speedTest': 'Speed Test',
    'nav.practiceLab': 'Practice Lab',
    'nav.leaderboards': 'Leaderboards',
    'nav.play': 'Play',
    'nav.playGame': 'Play Game',
    'nav.commandPalette': 'Command Palette',
    'nav.themes': 'Themes',
    'nav.siteTheme': 'Site Theme (17)',
    'nav.soundProfile': 'Sound Profile',
    'nav.switchSynthesis': 'Switch Synthesis',
    'nav.activeStreak': 'Streak',
    'nav.novice': 'Novice',

    // Hero Section
    'hero.badge': '21 2D TYPING GAMES • SPEED TEST SUITE • PRACTICE LAB',
    'hero.title1': 'Master The Keyboard.',
    'hero.title2': 'Play 21 Retro 2D Games.',
    'hero.subtitle': 'Immerse yourself in arcade boss battles, neon slicing, zombie shootouts, and Monkeytype-grade speed tests with realistic mechanical switch audio synthesis.',
    'hero.startTest': 'Start Typing Test',
    'hero.browseGames': 'Browse 21 Games',
    'hero.activeTypists': 'Active Typists',
    'hero.gamesCount': 'Free 2D Games',
    'hero.switchSounds': 'Switch Audio Profiles',
    'hero.colorThemes': 'Color Themes',

    // Category Tabs
    'cat.all': 'All Games (21)',
    'cat.arcade': 'Arcade (4)',
    'cat.action': 'Action (5)',
    'cat.adventure': 'Adventure (4)',
    'cat.fighting': 'Fighting (4)',
    'cat.puzzle': 'Puzzle (3)',
    'cat.practice': 'Practice (1)',

    // Speed Test
    'st.mode': 'Mode',
    'st.time': 'Time',
    'st.words': 'Words',
    'st.quote': 'Quote',
    'st.zen': 'Zen',
    'st.custom': 'Custom',
    'st.wpm': 'WPM',
    'st.raw': 'Raw',
    'st.acc': 'Acc',
    'st.consistency': 'Consistency',
    'st.characters': 'Characters',
    'st.testType': 'Test Type',
    'st.timeElapsed': 'Time Elapsed',
    'st.nextTest': 'Next Test',
    'st.repeatTest': 'Repeat Test',
    'st.practiceMissed': 'Practice Missed',
    'st.replay': 'Replay',
    'st.shareScore': 'Share Score',
    'st.copied': 'Copied to Clipboard!',
    'st.ghostDuel': 'Ghost Duel',
    'st.clickToFocus': 'Click or Press Any Key to Focus & Start',

    // Practice Lab
    'prac.title': 'Touch Typing Practice Lab',
    'prac.subtitle': 'ANSI QWERTY 15.0u Matrix with dynamic finger quadrant highlights and cadence metronome.',
    'prac.focus': 'Keyboard Focus',
    'prac.drillHome': 'Home Row (ASDF JKL;)',
    'prac.drillTop': 'Top Row (QWERTY)',
    'prac.drillBottom': 'Bottom Row (ZXCVBNM)',
    'prac.drillNumbers': 'Numbers Row (1-0)',
    'prac.drillSymbols': 'Special Symbols (!@#$)',
    'prac.drillWeak': 'Weak Keys AI Drill',
    'prac.metronome': 'Metronome',
    'prac.colorMode': 'Color Mode',
    'prac.themeSync': 'Theme Sync',
    'prac.fingerQuadrant': 'Finger Quadrant',

    // Leaderboards & Career Hub
    'lead.title': 'Career Hub & Quests',
    'lead.subtitle': 'Level up from Novice to Keyboard Titan, complete daily challenges, and review your 365-day activity cadence.',
    'lead.levelProgress': 'Level Progress',
    'lead.activeStreak': 'Active Streak',
    'lead.bestStreak': 'Best Streak',
    'lead.careerWords': 'Career Words',
    'lead.totalStrokes': 'Total Strokes',
    'lead.dailyQuests': 'Daily Quests',
    'lead.dailyQuestsDesc': '3 fresh challenges refreshed every 24 hours. Complete to earn bonus XP!',
    'lead.todaysChallenges': "Today's Challenges",
    'lead.activityHeatmap': 'Daily Typing Heatmap',
    'lead.activityHeatmapDesc': 'Your daily activity timeline across tests, games, and practice sessions.',
    'lead.activeDays': 'active days',
    'lead.totalXp': 'total XP',
    'lead.bestWpmRecord': 'Best WPM Record',
    'lead.averageWpm': 'Average WPM',
    'lead.accuracy': 'Accuracy',
    'lead.gamesCompleted': 'Games Completed',
    'lead.weakKeysTitle': 'Weak Key AI Diagnostics',
    'lead.weakKeysDesc': 'Real-time analysis of your most error-prone keys with custom corrective drills.',
    'lead.practiceDrills': 'Practice Drills →',
    'lead.prestigeAchievements': 'Prestige Achievements (25)',
    'lead.gameRecords': 'Game Records & Leaderboards',
    'lead.gameRecordsDesc': 'Your personal performance across all 21 games.',
    'lead.exportStats': 'Export Stats (JSON)',
    'lead.resetStats': 'Reset Career Stats',
    'lead.claimXp': 'Claim XP',
    'lead.claimed': 'Claimed',

    // Game HUD & Common
    'game.level': 'Level',
    'game.score': 'Score',
    'game.targetWpm': 'Target WPM',
    'game.health': 'Health',
    'game.pause': 'Pause',
    'game.resume': 'Resume',
    'game.restart': 'Restart',
    'game.nextLevel': 'Next Level',
    'game.victory': 'VICTORY!',
    'game.gameOver': 'GAME OVER',
    'game.howToPlay': 'How to Play',
    'game.typeToShoot': 'Type words to attack and survive!',

    // Footer
    'footer.quickTheme': 'Quick Theme Switcher',
    'footer.themeSubtitle': 'Choose from 17 curated color themes',
    'footer.allThemes': 'All 17 Themes →',
    'footer.gameGenres': 'Game Genres',
    'footer.practiceAndTools': 'Practice & Tools',
    'footer.audioSynthesizer': 'Audio Synthesizer',
    'footer.audioDesc': 'Real-time Web Audio synthesis simulates Cherry MX Blue clicks, Holy Panda thocks, Linear Reds, and mechanical typewriters.',
    'footer.rights': 'All rights reserved.',
    'footer.operational': 'Systems Operational • 60 FPS'
  },

  hi: {
    // Navigation
    'nav.games': 'गेम्स (21)',
    'nav.arcade': 'आर्केड लाउंज',
    'nav.speedTest': 'स्पीड टेस्ट',
    'nav.practiceLab': 'प्रैक्टिस लैब',
    'nav.leaderboards': 'लीडरबोर्ड्स',
    'nav.play': 'खेलें',
    'nav.playGame': 'गेम खेलें',
    'nav.commandPalette': 'कमांड पैलेट',
    'nav.themes': 'थीम्स',
    'nav.siteTheme': 'साइट थीम (17)',
    'nav.soundProfile': 'साउंड प्रोफाइल',
    'nav.switchSynthesis': 'स्विच सिंथेसाइज़र',
    'nav.activeStreak': 'स्ट्रीक',
    'nav.novice': 'नौसिखिया',

    // Hero Section
    'hero.badge': '21 2D टाइपिंग गेम्स • स्पीड टेस्ट लैब • टच टाइपिंग प्रैक्टिस',
    'hero.title1': 'कीबोर्ड पर महारत हासिल करें।',
    'hero.title2': '21 रेट्रो 2D गेम्स खेलें।',
    'hero.subtitle': 'आर्केड स्पेस बैटल्स, नियॉन निंजा स्लाइसिंग, ज़ॉम्बी शूटआउट और मंकीटाइप-ग्रेड स्पीड टेस्ट्स का आनंद लें असली मैकेनिकल स्विच साउंड्स के साथ।',
    'hero.startTest': 'स्पीड टेस्ट शुरू करें',
    'hero.browseGames': '21 गेम्स एक्सप्लोर करें',
    'hero.activeTypists': 'एक्टिव टाइपिस्ट्स',
    'hero.gamesCount': 'मुफ्त 2D गेम्स',
    'hero.switchSounds': 'स्विच साउंड प्रोफाइल्स',
    'hero.colorThemes': 'कलर थीम्स',

    // Category Tabs
    'cat.all': 'सभी गेम्स (21)',
    'cat.arcade': 'आर्केड (4)',
    'cat.action': 'एक्शन (5)',
    'cat.adventure': 'एडवेंचर (4)',
    'cat.fighting': 'फाइटिंग (4)',
    'cat.puzzle': 'पहेली (3)',
    'cat.practice': 'प्रैक्टिस (1)',

    // Speed Test
    'st.mode': 'मोड',
    'st.time': 'समय',
    'st.words': 'शब्द',
    'st.quote': 'उद्धरण',
    'st.zen': 'ज़ेन',
    'st.custom': 'कस्टम',
    'st.wpm': 'डब्ल्यूपीएम (WPM)',
    'st.raw': 'रॉ WPM',
    'st.acc': 'सटीकता',
    'st.consistency': 'स्थिरता',
    'st.characters': 'अक्षर',
    'st.testType': 'टेस्ट प्रकार',
    'st.timeElapsed': 'बीता समय',
    'st.nextTest': 'अगला टेस्ट',
    'st.repeatTest': 'पुनः प्रयास करें',
    'st.practiceMissed': 'गलत शब्द अभ्यास',
    'st.replay': 'रीप्ले देखें',
    'st.shareScore': 'स्कोर साझा करें',
    'st.copied': 'क्लिपबोर्ड पर कॉपी हो गया!',
    'st.ghostDuel': 'घोस्ट रेसर डुअल',
    'st.clickToFocus': 'शुरू करने के लिए क्लिक करें या कोई भी की दबाएं',

    // Practice Lab
    'prac.title': 'टच टाइपिंग प्रैक्टिस लैब',
    'prac.subtitle': 'ANSI QWERTY 15.0u मैट्रिक्स फिंगर क्वाड्रेंट गाइड्स और मेट्रोनोम कैडेंस के साथ।',
    'prac.focus': 'कीबोर्ड फोकस',
    'prac.drillHome': 'होम रो (ASDF JKL;)',
    'prac.drillTop': 'टॉप रो (QWERTY)',
    'prac.drillBottom': 'बॉटम रो (ZXCVBNM)',
    'prac.drillNumbers': 'नंबर रो (1-0)',
    'prac.drillSymbols': 'स्पेशल सिंबल्स (!@#$)',
    'prac.drillWeak': 'कमज़ोर कीज़ AI ड्रिल',
    'prac.metronome': 'मेट्रोनोम',
    'prac.colorMode': 'कलर मोड',
    'prac.themeSync': 'थीम सिंक',
    'prac.fingerQuadrant': 'फिंगर क्वाड्रेंट',

    // Leaderboards & Career Hub
    'lead.title': 'करियर हब और दैनिक क्वेस्ट्स',
    'lead.subtitle': 'नौसिखिए से कीबोर्ड टाइटन तक लेवल अप करें, 3 दैनिक चुनौतियाँ पूरी करें, और 365-दिनों का हीटमैप देखें।',
    'lead.levelProgress': 'लेवल प्रोग्रेस',
    'lead.activeStreak': 'सक्रिय स्ट्रीक',
    'lead.bestStreak': 'सर्वश्रेष्ठ स्ट्रीक',
    'lead.careerWords': 'कुल शब्द',
    'lead.totalStrokes': 'कुल स्ट्रोक्स',
    'lead.dailyQuests': 'दैनिक क्वेस्ट्स (Daily Quests)',
    'lead.dailyQuestsDesc': 'हर 24 घंटे में 3 नई चुनौतियाँ रीफ्रेश होती हैं। बोनस XP अर्जित करने के लिए पूरा करें!',
    'lead.todaysChallenges': 'आज की चुनौतियाँ',
    'lead.activityHeatmap': 'दैनिक टाइपिंग हीटमैप',
    'lead.activityHeatmapDesc': 'गेम्स, स्पीड टेस्ट्स और प्रैक्टिस सेशन की दैनिक टाइमलाइन।',
    'lead.activeDays': 'सक्रिय दिन',
    'lead.totalXp': 'कुल XP',
    'lead.bestWpmRecord': 'सर्वश्रेष्ठ WPM रिकॉर्ड',
    'lead.averageWpm': 'औसत WPM',
    'lead.accuracy': 'सटीकता (Accuracy)',
    'lead.gamesCompleted': 'पूरे किए गए गेम्स',
    'lead.weakKeysTitle': 'कमज़ोर कीज़ AI डायग्नोस्टिक्स',
    'lead.weakKeysDesc': 'आपकी सबसे ज्यादा गलतियों वाली कीज़ का रियल-टाइम AI विश्लेषण और अभ्यास।',
    'lead.practiceDrills': 'प्रैक्टिस ड्रिल्स →',
    'lead.prestigeAchievements': 'प्रतिष्ठित उपलब्धियां (25)',
    'lead.gameRecords': 'गेम रिकॉर्ड्स और लीडरबोर्ड',
    'lead.gameRecordsDesc': 'सभी 21 गेम्स में आपका व्यक्तिगत सर्वश्रेष्ठ प्रदर्शन।',
    'lead.exportStats': 'डेटा एक्सपोर्ट करें (JSON)',
    'lead.resetStats': 'करियर आँकड़े रीसेट करें',
    'lead.claimXp': 'XP प्राप्त करें',
    'lead.claimed': 'प्राप्त किया',

    // Game HUD & Common
    'game.level': 'लेवल',
    'game.score': 'स्कोर',
    'game.targetWpm': 'लक्ष्य WPM',
    'game.health': 'स्वास्थ्य (HP)',
    'game.pause': 'रोकें',
    'game.resume': 'जारी रखें',
    'game.restart': 'पुनः आरंभ',
    'game.nextLevel': 'अगला लेवल',
    'game.victory': 'शानदार जीत!',
    'game.gameOver': 'खेल समाप्त',
    'game.howToPlay': 'कैसे खेलें',
    'game.typeToShoot': 'हमला करने और बचने के लिए शब्द टाइप करें!',

    // Footer
    'footer.quickTheme': 'त्वरित थीम स्विचर',
    'footer.themeSubtitle': '17 विशेष रूप से तैयार की गई कलर थीम्स चुनें',
    'footer.allThemes': 'सभी 17 थीम्स →',
    'footer.gameGenres': 'गेम शैलियाँ',
    'footer.practiceAndTools': 'अभ्यास और टूल्स',
    'footer.audioSynthesizer': 'ऑडियो सिंथेसाइज़र',
    'footer.audioDesc': 'चेरी एमएक्स ब्लू, होली पांडा, और मैकेनिकल टाइपराइटर की असली ध्वनियों का रियल-टाइम वेब ऑडियो अनुभव।',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'footer.operational': 'सिस्टम सामान्य • 60 FPS'
  },

  es: {
    // Navigation
    'nav.games': 'Juegos (21)',
    'nav.arcade': 'Salón Arcade',
    'nav.speedTest': 'Test de Velocidad',
    'nav.practiceLab': 'Laboratorio de Práctica',
    'nav.leaderboards': 'Clasificación',
    'nav.play': 'Jugar',
    'nav.playGame': 'Jugar Ahora',
    'nav.commandPalette': 'Paleta de Comandos',
    'nav.themes': 'Temas',
    'nav.siteTheme': 'Tema del Sitio (17)',
    'nav.soundProfile': 'Perfil de Sonido',
    'nav.switchSynthesis': 'Sonido de Switches',
    'nav.activeStreak': 'Racha',
    'nav.novice': 'Novato',

    // Hero Section
    'hero.badge': '21 JUEGOS DE MECANOGRAFÍA 2D • TESTS DE VELOCIDAD • PRÁCTICA',
    'hero.title1': 'Domina el Teclado.',
    'hero.title2': 'Juega 21 Juegos Retro 2D.',
    'hero.subtitle': 'Sumérgete en batallas arcade espaciales, cortes ninja neón, hordas zombi y pruebas de velocidad al estilo Monkeytype con audio de switches mecánicos.',
    'hero.startTest': 'Iniciar Test de Velocidad',
    'hero.browseGames': 'Ver los 21 Juegos',
    'hero.activeTypists': 'Mecanógrafos Activos',
    'hero.gamesCount': 'Juegos 2D Gratis',
    'hero.switchSounds': 'Sonidos de Switches',
    'hero.colorThemes': 'Temas de Color',

    // Category Tabs
    'cat.all': 'Todos los Juegos (21)',
    'cat.arcade': 'Arcade (4)',
    'cat.action': 'Acción (5)',
    'cat.adventure': 'Aventura (4)',
    'cat.fighting': 'Lucha (4)',
    'cat.puzzle': 'Puzle (3)',
    'cat.practice': 'Práctica (1)',

    // Speed Test
    'st.mode': 'Modo',
    'st.time': 'Tiempo',
    'st.words': 'Palabras',
    'st.quote': 'Cita',
    'st.zen': 'Zen',
    'st.custom': 'Personalizado',
    'st.wpm': 'PPM (WPM)',
    'st.raw': 'PPM Bruto',
    'st.acc': 'Precisión',
    'st.consistency': 'Consistencia',
    'st.characters': 'Caracteres',
    'st.testType': 'Tipo de Test',
    'st.timeElapsed': 'Tiempo Transcurrido',
    'st.nextTest': 'Siguiente Test',
    'st.repeatTest': 'Repetir Test',
    'st.practiceMissed': 'Practicar Errores',
    'st.replay': 'Repetición',
    'st.shareScore': 'Compartir Puntuación',
    'st.copied': '¡Copiado al Portapapeles!',
    'st.ghostDuel': 'Duelo Fantasma',
    'st.clickToFocus': 'Haz clic o pulsa cualquier tecla para empezar',

    // Practice Lab
    'prac.title': 'Laboratorio de Mecanografía',
    'prac.subtitle': 'Matriz ANSI QWERTY 15.0u con cuadrantes de dedos y metrónomo de cadencia.',
    'prac.focus': 'Enfoque del Teclado',
    'prac.drillHome': 'Fila Guía (ASDF JKL;)',
    'prac.drillTop': 'Fila Superior (QWERTY)',
    'prac.drillBottom': 'Fila Inferior (ZXCVBNM)',
    'prac.drillNumbers': 'Fila Numérica (1-0)',
    'prac.drillSymbols': 'Símbolos Especiales (!@#$)',
    'prac.drillWeak': 'Práctica de Teclas Débiles AI',
    'prac.metronome': 'Metrónomo',
    'prac.colorMode': 'Modo de Color',
    'prac.themeSync': 'Sincronizar Tema',
    'prac.fingerQuadrant': 'Cuadrante de Dedos',

    // Leaderboards & Career Hub
    'lead.title': 'Centro de Carrera y Misiones',
    'lead.subtitle': 'Sube de nivel de Novato a Titán del Teclado, completa misiones diarias y consulta tu mapa de calor de 365 días.',
    'lead.levelProgress': 'Progreso de Nivel',
    'lead.activeStreak': 'Racha Activa',
    'lead.bestStreak': 'Mejor Racha',
    'lead.careerWords': 'Palabras Totales',
    'lead.totalStrokes': 'Pulsaciones Totales',
    'lead.dailyQuests': 'Misiones Diarias',
    'lead.dailyQuestsDesc': '3 nuevos desafíos cada 24 horas. ¡Complétalos para ganar XP!',
    'lead.todaysChallenges': 'Desafíos de Hoy',
    'lead.activityHeatmap': 'Mapa de Calor de Actividad',
    'lead.activityHeatmapDesc': 'Tu cronología de actividad diaria en pruebas, juegos y práctica.',
    'lead.activeDays': 'días activos',
    'lead.totalXp': 'XP total',
    'lead.bestWpmRecord': 'Récord de PPM',
    'lead.averageWpm': 'PPM Medio',
    'lead.accuracy': 'Precisión',
    'lead.gamesCompleted': 'Juegos Completados',
    'lead.weakKeysTitle': 'Diagnóstico AI de Teclas Débiles',
    'lead.weakKeysDesc': 'Análisis en tiempo real de tus teclas con más fallos y ejercicios correctivos.',
    'lead.practiceDrills': 'Ejercicios de Práctica →',
    'lead.prestigeAchievements': 'Logros de Prestigio (25)',
    'lead.gameRecords': 'Récords y Clasificaciones',
    'lead.gameRecordsDesc': 'Tu rendimiento personal en los 21 juegos.',
    'lead.exportStats': 'Exportar Datos (JSON)',
    'lead.resetStats': 'Restablecer Estadísticas',
    'lead.claimXp': 'Reclamar XP',
    'lead.claimed': 'Reclamado',

    // Game HUD & Common
    'game.level': 'Nivel',
    'game.score': 'Puntuación',
    'game.targetWpm': 'PPM Objetivo',
    'game.health': 'Salud',
    'game.pause': 'Pausa',
    'game.resume': 'Continuar',
    'game.restart': 'Reiniciar',
    'game.nextLevel': 'Siguiente Nivel',
    'game.victory': '¡VICTORIA!',
    'game.gameOver': 'FIN DE LA PARTIDA',
    'game.howToPlay': 'Cómo Jugar',
    'game.typeToShoot': '¡Escribe palabras para atacar y sobrevivir!',

    // Footer
    'footer.quickTheme': 'Selector Rápido de Temas',
    'footer.themeSubtitle': 'Elige entre 17 temas de color exclusivos',
    'footer.allThemes': 'Ver los 17 Temas →',
    'footer.gameGenres': 'Géneros de Juegos',
    'footer.practiceAndTools': 'Práctica y Herramientas',
    'footer.audioSynthesizer': 'Sintetizador de Audio',
    'footer.audioDesc': 'Síntesis Web Audio en tiempo real que simula switches mecánicos Cherry MX Blue, Holy Panda y máquinas de escribir.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.operational': 'Sistemas Operativos • 60 FPS'
  },

  fr: {
    // Navigation
    'nav.games': 'Jeux (21)',
    'nav.arcade': 'Salon Arcade',
    'nav.speedTest': 'Test de Vitesse',
    'nav.practiceLab': 'Labo Entraînement',
    'nav.leaderboards': 'Classement',
    'nav.play': 'Jouer',
    'nav.playGame': 'Jouer Maintenant',
    'nav.commandPalette': 'Palette de Commandes',
    'nav.themes': 'Thèmes',
    'nav.siteTheme': 'Thème du Site (17)',
    'nav.soundProfile': 'Profil Sonore',
    'nav.switchSynthesis': 'Son des Switches',
    'nav.activeStreak': 'Série',
    'nav.novice': 'Débutant',

    // Hero Section
    'hero.badge': '21 JEUX DE FRAPPE 2D • TESTS DE VITESSE • ENTRAÎNEMENT',
    'hero.title1': 'Maîtrisez le Clavier.',
    'hero.title2': 'Jouez à 21 Jeux Rétro 2D.',
    'hero.subtitle': 'Affrontez des boss arcade, tranchez au katana néon, repoussez des zombies et mesurez votre vitesse avec des sons authentiques de switches mécaniques.',
    'hero.startTest': 'Lancer le Test de Vitesse',
    'hero.browseGames': 'Explorer les 21 Jeux',
    'hero.activeTypists': 'Dactylos Actifs',
    'hero.gamesCount': 'Jeux 2D Gratuits',
    'hero.switchSounds': 'Profils Sonores',
    'hero.colorThemes': 'Thèmes de Couleur',

    // Category Tabs
    'cat.all': 'Tous les Jeux (21)',
    'cat.arcade': 'Arcade (4)',
    'cat.action': 'Action (5)',
    'cat.adventure': 'Aventure (4)',
    'cat.fighting': 'Combat (4)',
    'cat.puzzle': 'Puzzle (3)',
    'cat.practice': 'Pratique (1)',

    // Speed Test
    'st.mode': 'Mode',
    'st.time': 'Temps',
    'st.words': 'Mots',
    'st.quote': 'Citation',
    'st.zen': 'Zen',
    'st.custom': 'Personnalisé',
    'st.wpm': 'MPM (WPM)',
    'st.raw': 'MPM Brut',
    'st.acc': 'Précision',
    'st.consistency': 'Régularité',
    'st.characters': 'Caractères',
    'st.testType': 'Type de Test',
    'st.timeElapsed': 'Temps Écoulé',
    'st.nextTest': 'Test Suivant',
    'st.repeatTest': 'Recommencer',
    'st.practiceMissed': 'Pratiquer les Erreurs',
    'st.replay': 'Revoir',
    'st.shareScore': 'Partager le Score',
    'st.copied': 'Copié dans le Presse-papier !',
    'st.ghostDuel': 'Duel Fantôme',
    'st.clickToFocus': 'Cliquez ou appuyez sur une touche pour commencer',

    // Practice Lab
    'prac.title': 'Labo de Dactylographie',
    'prac.subtitle': 'Matrice ANSI QWERTY 15.0u avec repères de quadrants de doigts et métronome de cadence.',
    'prac.focus': 'Zone du Clavier',
    'prac.drillHome': 'Ligne Repère (ASDF JKL;)',
    'prac.drillTop': 'Ligne Supérieure (QWERTY)',
    'prac.drillBottom': 'Ligne Inférieure (ZXCVBNM)',
    'prac.drillNumbers': 'Ligne des Chiffres (1-0)',
    'prac.drillSymbols': 'Symboles Spéciaux (!@#$)',
    'prac.drillWeak': 'Exercice IA Touches Faibles',
    'prac.metronome': 'Métronome',
    'prac.colorMode': 'Mode Couleur',
    'prac.themeSync': 'Synchroniser Thème',
    'prac.fingerQuadrant': 'Quadrant des Doigts',

    // Leaderboards & Career Hub
    'lead.title': 'Hub de Carrière et Quêtes',
    'lead.subtitle': 'Montez de niveau du Débutant au Titan du Clavier, accomplissez vos quêtes quotidiennes et consultez votre calendrier de 365 jours.',
    'lead.levelProgress': 'Progression du Niveau',
    'lead.activeStreak': 'Série Active',
    'lead.bestStreak': 'Meilleure Série',
    'lead.careerWords': 'Mots Tapés',
    'lead.totalStrokes': 'Frappes Totales',
    'lead.dailyQuests': 'Quêtes Quotidiennes',
    'lead.dailyQuestsDesc': '3 défis renouvelés toutes les 24 heures pour remporter des bonus XP !',
    'lead.todaysChallenges': "Défis d'Aujourd'hui",
    'lead.activityHeatmap': "Carte d'Activité Quotidienne",
    'lead.activityHeatmapDesc': 'Votre chronologie de frappe à travers tests, jeux et entraînements.',
    'lead.activeDays': 'jours actifs',
    'lead.totalXp': 'XP total',
    'lead.bestWpmRecord': 'Record MPM',
    'lead.averageWpm': 'MPM Moyen',
    'lead.accuracy': 'Précision',
    'lead.gamesCompleted': 'Jeux Complétés',
    'lead.weakKeysTitle': 'Diagnostic IA des Touches Faibles',
    'lead.weakKeysDesc': 'Analyse en temps réel de vos touches les plus imprécises avec exercices dédiés.',
    'lead.practiceDrills': 'Pratiquer les Exercices →',
    'lead.prestigeAchievements': 'Succès de Prestige (25)',
    'lead.gameRecords': 'Records et Classements',
    'lead.gameRecordsDesc': 'Vos meilleures performances sur les 21 jeux.',
    'lead.exportStats': 'Exporter les Données (JSON)',
    'lead.resetStats': 'Réinitialiser les Stats',
    'lead.claimXp': 'Réclamer XP',
    'lead.claimed': 'Réclamé',

    // Game HUD & Common
    'game.level': 'Niveau',
    'game.score': 'Score',
    'game.targetWpm': 'MPM Cible',
    'game.health': 'Santé',
    'game.pause': 'Pause',
    'game.resume': 'Reprendre',
    'game.restart': 'Recommencer',
    'game.nextLevel': 'Niveau Suivant',
    'game.victory': 'VICTOIRE !',
    'game.gameOver': 'PARTIE TERMINÉE',
    'game.howToPlay': 'Comment Jouer',
    'game.typeToShoot': 'Tapez les mots pour attaquer et survivre !',

    // Footer
    'footer.quickTheme': 'Sélecteur de Thèmes',
    'footer.themeSubtitle': 'Choisissez parmi 17 thèmes de couleurs soignés',
    'footer.allThemes': 'Tous les 17 Thèmes →',
    'footer.gameGenres': 'Genres de Jeux',
    'footer.practiceAndTools': 'Pratique & Outils',
    'footer.audioSynthesizer': 'Synthétiseur Audio',
    'footer.audioDesc': 'Synthèse Web Audio simulant les switches mécaniques Cherry MX Blue, Holy Panda et machines à écrire.',
    'footer.rights': 'Tous droits réservés.',
    'footer.operational': 'Systèmes Opérationnels • 60 FPS'
  },

  de: {
    // Navigation
    'nav.games': 'Spiele (21)',
    'nav.arcade': 'Arcade Lounge',
    'nav.speedTest': 'Geschwindigkeitstest',
    'nav.practiceLab': 'Übungslabor',
    'nav.leaderboards': 'Bestenliste',
    'nav.play': 'Spielen',
    'nav.playGame': 'Spiel Starten',
    'nav.commandPalette': 'Befehlspalette',
    'nav.themes': 'Themes',
    'nav.siteTheme': 'Seiten-Design (17)',
    'nav.soundProfile': 'Soundprofil',
    'nav.switchSynthesis': 'Switch-Synthese',
    'nav.activeStreak': 'Serie',
    'nav.novice': 'Anfänger',

    // Hero Section
    'hero.badge': '21 2D TIPP-SPIELE • SPEEDTEST-SUITE • TASTFURÜBUNGEN',
    'hero.title1': 'Meistere die Tastatur.',
    'hero.title2': 'Spiele 21 Retro 2D Spiele.',
    'hero.subtitle': 'Erlebe Weltraum-Schlachten, Neon-Ninja-Kämpfe und Monkeytype-Geschwindigkeitstests mit authentischen mechanischen Tastatur-Sounds.',
    'hero.startTest': 'Tipptest Starten',
    'hero.browseGames': 'Alle 21 Spiele Entdecken',
    'hero.activeTypists': 'Aktive Tipper',
    'hero.gamesCount': 'Kostenlose 2D Spiele',
    'hero.switchSounds': 'Switch-Soundprofile',
    'hero.colorThemes': 'Farb-Themes',

    // Category Tabs
    'cat.all': 'Alle Spiele (21)',
    'cat.arcade': 'Arcade (4)',
    'cat.action': 'Action (5)',
    'cat.adventure': 'Abenteuer (4)',
    'cat.fighting': 'Kampf (4)',
    'cat.puzzle': 'Rätsel (3)',
    'cat.practice': 'Übung (1)',

    // Speed Test
    'st.mode': 'Modus',
    'st.time': 'Zeit',
    'st.words': 'Wörter',
    'st.quote': 'Zitat',
    'st.zen': 'Zen',
    'st.custom': 'Benutzerdefiniert',
    'st.wpm': 'WPM',
    'st.raw': 'Roh-WPM',
    'st.acc': 'Genauigkeit',
    'st.consistency': 'Konstanz',
    'st.characters': 'Zeichen',
    'st.testType': 'Test-Typ',
    'st.timeElapsed': 'Verstrichene Zeit',
    'st.nextTest': 'Nächster Test',
    'st.repeatTest': 'Wiederholen',
    'st.practiceMissed': 'Fehler Üben',
    'st.replay': 'Wiederholung',
    'st.shareScore': 'Ergebnis Teilen',
    'st.copied': 'In die Zwischenablage kopiert!',
    'st.ghostDuel': 'Geister-Duell',
    'st.clickToFocus': 'Klicken oder beliebige Taste drücken zum Starten',

    // Practice Lab
    'prac.title': 'Tastatur-Übungslabor',
    'prac.subtitle': 'ANSI QWERTY 15.0u Matrix mit Fingerquadranten-Führung und Takt-Metronom.',
    'prac.focus': 'Tastaturfokus',
    'prac.drillHome': 'Grundreihe (ASDF JKL;)',
    'prac.drillTop': 'Obere Reihe (QWERTY)',
    'prac.drillBottom': 'Untere Reihe (ZXCVBNM)',
    'prac.drillNumbers': 'Zahlenreihe (1-0)',
    'prac.drillSymbols': 'Sonderzeichen (!@#$)',
    'prac.drillWeak': 'KI-Training Schwache Tasten',
    'prac.metronome': 'Metronom',
    'prac.colorMode': 'Farbmodus',
    'prac.themeSync': 'Theme Synchronisieren',
    'prac.fingerQuadrant': 'Fingerquadrant',

    // Leaderboards & Career Hub
    'lead.title': 'Karriere-Zentrum & Quests',
    'lead.subtitle': 'Steige vom Anfänger zum Tastatur-Titan auf, erfülle tägliche Quests und sieh dir deine 365-Tage-Aktivität an.',
    'lead.levelProgress': 'Level-Fortschritt',
    'lead.activeStreak': 'Aktive Serie',
    'lead.bestStreak': 'Beste Serie',
    'lead.careerWords': 'Gesamte Wörter',
    'lead.totalStrokes': 'Tastenanschläge',
    'lead.dailyQuests': 'Tägliche Quests',
    'lead.dailyQuestsDesc': '3 frische Herausforderungen alle 24 Stunden für extra XP!',
    'lead.todaysChallenges': 'Heutige Herausforderungen',
    'lead.activityHeatmap': 'Tägliches Tipp-Heatmap',
    'lead.activityHeatmapDesc': 'Deine tägliche Aktivitäts-Zeitleiste bei Tests, Spielen und Übungen.',
    'lead.activeDays': 'aktive Tage',
    'lead.totalXp': 'Gesamt XP',
    'lead.bestWpmRecord': 'Bester WPM Rekord',
    'lead.averageWpm': 'Durchschnitts-WPM',
    'lead.accuracy': 'Genauigkeit',
    'lead.gamesCompleted': 'Abgeschlossene Spiele',
    'lead.weakKeysTitle': 'KI-Fehleranalyse für Tasten',
    'lead.weakKeysDesc': 'Echtzeitanalyse deiner fehleranfälligsten Tasten mit gezielten Übungen.',
    'lead.practiceDrills': 'Übungen Starten →',
    'lead.prestigeAchievements': 'Prestige-Erfolge (25)',
    'lead.gameRecords': 'Spiel-Rekorde & Bestenliste',
    'lead.gameRecordsDesc': 'Deine persönliche Bestleistung in allen 21 Spielen.',
    'lead.exportStats': 'Statistiken Exportieren (JSON)',
    'lead.resetStats': 'Karriere Zurücksetzen',
    'lead.claimXp': 'XP Abholen',
    'lead.claimed': 'Abgeholt',

    // Game HUD & Common
    'game.level': 'Level',
    'game.score': 'Punkte',
    'game.targetWpm': 'Ziel WPM',
    'game.health': 'Leben',
    'game.pause': 'Pause',
    'game.resume': 'Weiter',
    'game.restart': 'Neustart',
    'game.nextLevel': 'Nächstes Level',
    'game.victory': 'SIEG!',
    'game.gameOver': 'SPIEL VORBEI',
    'game.howToPlay': 'Spielanleitung',
    'game.typeToShoot': 'Tippe Wörter zum Angreifen und Überleben!',

    // Footer
    'footer.quickTheme': 'Schnell-Theme-Wechsler',
    'footer.themeSubtitle': 'Wähle aus 17 handverlesenen Farb-Themes',
    'footer.allThemes': 'Alle 17 Themes →',
    'footer.gameGenres': 'Spiel-Genres',
    'footer.practiceAndTools': 'Übung & Werkzeuge',
    'footer.audioSynthesizer': 'Audio-Synthesizer',
    'footer.audioDesc': 'Echtzeit-Web-Audio-Synthese für Cherry MX Blue, Holy Panda und Schreibmaschinen-Klänge.',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.operational': 'Systeme Betriebsbereit • 60 FPS'
  },

  ja: {
    // Navigation
    'nav.games': 'ゲーム (21)',
    'nav.arcade': 'アーケードラウンジ',
    'nav.speedTest': 'タイピング速度テスト',
    'nav.practiceLab': '練習ラボ',
    'nav.leaderboards': 'リーダーボード',
    'nav.play': 'プレイ',
    'nav.playGame': '今すぐプレイ',
    'nav.commandPalette': 'コマンドパレット',
    'nav.themes': 'テーマ',
    'nav.siteTheme': 'サイトテーマ (17)',
    'nav.soundProfile': 'サウンドプロファイル',
    'nav.switchSynthesis': '打鍵音シンセサイザー',
    'nav.activeStreak': '連続記録',
    'nav.novice': '初心者',

    // Hero Section
    'hero.badge': '21種類の2Dタイピングゲーム • 速度テスト • タッチタイピング練習',
    'hero.title1': 'キーボードを極めよう。',
    'hero.title2': '21種類のレトロ2Dゲームをプレイ。',
    'hero.subtitle': 'リアルなメカニカルスイッチの打鍵音とともに、スペースバトル、ネオン忍者、ゾンビ戦、Monkeytype仕様のタイピングテストを楽しもう。',
    'hero.startTest': '速度テストを開始',
    'hero.browseGames': '全21ゲームを見る',
    'hero.activeTypists': 'アクティブプレイヤー',
    'hero.gamesCount': '無料2Dゲーム',
    'hero.switchSounds': '打鍵音プロファイル',
    'hero.colorThemes': 'カラーテーマ',

    // Category Tabs
    'cat.all': '全ゲーム (21)',
    'cat.arcade': 'アーケード (4)',
    'cat.action': 'アクション (5)',
    'cat.adventure': 'アドベンチャー (4)',
    'cat.fighting': '格闘 (4)',
    'cat.puzzle': 'パズル (3)',
    'cat.practice': '練習 (1)',

    // Speed Test
    'st.mode': 'モード',
    'st.time': '時間',
    'st.words': '単語数',
    'st.quote': '名言',
    'st.zen': 'Zen',
    'st.custom': 'カスタム',
    'st.wpm': 'WPM (ワード/分)',
    'st.raw': 'Raw WPM',
    'st.acc': '正確度',
    'st.consistency': '安定度',
    'st.characters': '打鍵文字',
    'st.testType': 'テスト形式',
    'st.timeElapsed': '経過時間',
    'st.nextTest': '次のテスト',
    'st.repeatTest': 'もう一度',
    'st.practiceMissed': 'ミス単語の練習',
    'st.replay': 'リプレイ再生',
    'st.shareScore': 'スコアを共有',
    'st.copied': 'クリップボードにコピーしました！',
    'st.ghostDuel': 'ゴースト対決',
    'st.clickToFocus': 'クリックまたはキーを押してスタート',

    // Practice Lab
    'prac.title': 'タッチタイピング練習ラボ',
    'prac.subtitle': 'ANSI QWERTY 15.0u マトリックス、指の配置ガイド、テンポメトロノーム搭載。',
    'prac.focus': 'キーボードエリア',
    'prac.drillHome': 'ホームポジション (ASDF JKL;)',
    'prac.drillTop': '上段 (QWERTY)',
    'prac.drillBottom': '下段 (ZXCVBNM)',
    'prac.drillNumbers': '数字キー (1-0)',
    'prac.drillSymbols': '特殊記号 (!@#$)',
    'prac.drillWeak': '苦手キー AIドリル',
    'prac.metronome': 'メトロノーム',
    'prac.colorMode': 'カラーモード',
    'prac.themeSync': 'テーマ連動',
    'prac.fingerQuadrant': '指別カラー',

    // Leaderboards & Career Hub
    'lead.title': 'キャリアハブ＆デイリークエスト',
    'lead.subtitle': '初心者からキーボードタイタンへとレベルアップ！毎日のクエストをクリアして365日ヒートマップを記録しよう。',
    'lead.levelProgress': 'レベル進捗',
    'lead.activeStreak': '連続日数',
    'lead.bestStreak': '最高連続記録',
    'lead.careerWords': '累計単語数',
    'lead.totalStrokes': '総打鍵数',
    'lead.dailyQuests': 'デイリークエスト',
    'lead.dailyQuestsDesc': '24時間ごとに更新される3つの挑戦。クリアしてボーナスXPを獲得しよう！',
    'lead.todaysChallenges': '本日の挑戦',
    'lead.activityHeatmap': 'タイピング活動ヒートマップ',
    'lead.activityHeatmapDesc': 'テスト、ゲーム、練習セッションの活動タイムライン。',
    'lead.activeDays': '日活動',
    'lead.totalXp': '獲得XP',
    'lead.bestWpmRecord': '最高WPM記録',
    'lead.averageWpm': '平均WPM',
    'lead.accuracy': '正確度',
    'lead.gamesCompleted': 'クリアゲーム数',
    'lead.weakKeysTitle': '苦手キー AI診断',
    'lead.weakKeysDesc': 'エラー率の高いキーをリアルタイム分析し、最適な練習ドリルを提案します。',
    'lead.practiceDrills': '練習を開始 →',
    'lead.prestigeAchievements': '実績バッジ (25)',
    'lead.gameRecords': 'ゲーム別スコア＆記録',
    'lead.gameRecordsDesc': '全21ゲームの自己ベスト記録。',
    'lead.exportStats': 'データ出力 (JSON)',
    'lead.resetStats': 'キャリア統計をリセット',
    'lead.claimXp': 'XPを受け取る',
    'lead.claimed': '受取済',

    // Game HUD & Common
    'game.level': 'レベル',
    'game.score': 'スコア',
    'game.targetWpm': '目標WPM',
    'game.health': 'ライフ',
    'game.pause': '一時停止',
    'game.resume': '再開',
    'game.restart': 'リスタート',
    'game.nextLevel': '次のレベル',
    'game.victory': '勝利！',
    'game.gameOver': 'ゲームオーバー',
    'game.howToPlay': '遊び方',
    'game.typeToShoot': '単語をタイプして攻撃＆サバイブ！',

    // Footer
    'footer.quickTheme': 'クイックテーマ切替',
    'footer.themeSubtitle': '17種類の洗練されたテーマから選択',
    'footer.allThemes': '全17テーマを見る →',
    'footer.gameGenres': 'ゲームジャンル',
    'footer.practiceAndTools': '練習＆ツール',
    'footer.audioSynthesizer': '打鍵音シンセサイザー',
    'footer.audioDesc': 'Cherry MX Blue、Holy Panda、レトロタイプライターの打鍵音をWeb Audioでリアルタイム合成。',
    'footer.rights': '無断転載を禁じます。',
    'footer.operational': 'システム正常稼働中 • 60 FPS'
  },

  pt: {
    // Navigation
    'nav.games': 'Jogos (21)',
    'nav.arcade': 'Salão Arcade',
    'nav.speedTest': 'Teste de Velocidade',
    'nav.practiceLab': 'Laboratório de Treino',
    'nav.leaderboards': 'Classificação',
    'nav.play': 'Jogar',
    'nav.playGame': 'Jogar Agora',
    'nav.commandPalette': 'Paleta de Comandos',
    'nav.themes': 'Temas',
    'nav.siteTheme': 'Tema do Site (17)',
    'nav.soundProfile': 'Perfil de Som',
    'nav.switchSynthesis': 'Som dos Switches',
    'nav.activeStreak': 'Sequência',
    'nav.novice': 'Iniciante',

    // Hero Section
    'hero.badge': '21 JOGOS DE DIGITAÇÃO 2D • TESTES DE VELOCIDADE • PRÁTICA',
    'hero.title1': 'Domine o Teclado.',
    'hero.title2': 'Jogue 21 Jogos Retrô 2D.',
    'hero.subtitle': 'Enfrente batalhas arcade espaciais, fatiamento ninja neon, hordas de zumbis e testes no padrão Monkeytype com áudio realista de switches mecânicos.',
    'hero.startTest': 'Iniciar Teste de Digitação',
    'hero.browseGames': 'Ver Todos os 21 Jogos',
    'hero.activeTypists': 'Digitadores Ativos',
    'hero.gamesCount': 'Jogos 2D Grátis',
    'hero.switchSounds': 'Perfis de Som',
    'hero.colorThemes': 'Temas de Cores',

    // Category Tabs
    'cat.all': 'Todos os Jogos (21)',
    'cat.arcade': 'Arcade (4)',
    'cat.action': 'Ação (5)',
    'cat.adventure': 'Aventura (4)',
    'cat.fighting': 'Luta (4)',
    'cat.puzzle': 'Quebra-cabeça (3)',
    'cat.practice': 'Prática (1)',

    // Speed Test
    'st.mode': 'Modo',
    'st.time': 'Tempo',
    'st.words': 'Palavras',
    'st.quote': 'Citação',
    'st.zen': 'Zen',
    'st.custom': 'Personalizado',
    'st.wpm': 'PPM (WPM)',
    'st.raw': 'PPM Bruto',
    'st.acc': 'Precisão',
    'st.consistency': 'Consistência',
    'st.characters': 'Caracteres',
    'st.testType': 'Tipo de Teste',
    'st.timeElapsed': 'Tempo Decorrido',
    'st.nextTest': 'Próximo Teste',
    'st.repeatTest': 'Repetir',
    'st.practiceMissed': 'Praticar Erros',
    'st.replay': 'Repetição',
    'st.shareScore': 'Compartilhar Pontuação',
    'st.copied': 'Copiado para a área de transferência!',
    'st.ghostDuel': 'Duelo Fantasma',
    'st.clickToFocus': 'Clique ou pressione qualquer tecla para começar',

    // Practice Lab
    'prac.title': 'Laboratório de Digitação',
    'prac.subtitle': 'Matriz ANSI QWERTY 15.0u com guias de quadrantes de dedos e metrônomo de cadência.',
    'prac.focus': 'Foco do Teclado',
    'prac.drillHome': 'Linha Guia (ASDF JKL;)',
    'prac.drillTop': 'Linha Superior (QWERTY)',
    'prac.drillBottom': 'Linha Inferior (ZXCVBNM)',
    'prac.drillNumbers': 'Linha dos Números (1-0)',
    'prac.drillSymbols': 'Símbolos Especiais (!@#$)',
    'prac.drillWeak': 'Treino de Teclas Fracas IA',
    'prac.metronome': 'Metrônomo',
    'prac.colorMode': 'Modo de Cor',
    'prac.themeSync': 'Sincronizar Tema',
    'prac.fingerQuadrant': 'Quadrante dos Dedos',

    // Leaderboards & Career Hub
    'lead.title': 'Central de Carreira e Missões',
    'lead.subtitle': 'Evolua de Iniciante a Titã do Teclado, complete desafios diários e veja seu mapa de calor de 365 dias.',
    'lead.levelProgress': 'Progresso do Nível',
    'lead.activeStreak': 'Sequência Ativa',
    'lead.bestStreak': 'Melhor Sequência',
    'lead.careerWords': 'Palavras Digitadas',
    'lead.totalStrokes': 'Toques Totais',
    'lead.dailyQuests': 'Missões Diárias',
    'lead.dailyQuestsDesc': '3 novos desafios a cada 24 horas. Complete para ganhar XP!',
    'lead.todaysChallenges': 'Desafios de Hoje',
    'lead.activityHeatmap': 'Mapa de Calor de Atividade',
    'lead.activityHeatmapDesc': 'Sua linha do tempo diária em testes, jogos e treinos.',
    'lead.activeDays': 'dias ativos',
    'lead.totalXp': 'XP total',
    'lead.bestWpmRecord': 'Recorde de PPM',
    'lead.averageWpm': 'PPM Médio',
    'lead.accuracy': 'Precisão',
    'lead.gamesCompleted': 'Jogos Concluídos',
    'lead.weakKeysTitle': 'Diagnóstico IA de Teclas Fracas',
    'lead.weakKeysDesc': 'Análise em tempo real das suas teclas com mais erros e treinos corretivos.',
    'lead.practiceDrills': 'Iniciar Treino →',
    'lead.prestigeAchievements': 'Conquistas de Prestígio (25)',
    'lead.gameRecords': 'Recordes e Classificação',
    'lead.gameRecordsDesc': 'Seu desempenho pessoal em todos os 21 jogos.',
    'lead.exportStats': 'Exportar Dados (JSON)',
    'lead.resetStats': 'Redefinir Estatísticas',
    'lead.claimXp': 'Resgatar XP',
    'lead.claimed': 'Resgatado',

    // Game HUD & Common
    'game.level': 'Nível',
    'game.score': 'Pontos',
    'game.targetWpm': 'PPM Alvo',
    'game.health': 'Vida',
    'game.pause': 'Pausar',
    'game.resume': 'Continuar',
    'game.restart': 'Reiniciar',
    'game.nextLevel': 'Próximo Nível',
    'game.victory': 'VITÓRIA!',
    'game.gameOver': 'FIM DE JOGO',
    'game.howToPlay': 'Como Jogar',
    'game.typeToShoot': 'Digite palavras para atacar e sobreviver!',

    // Footer
    'footer.quickTheme': 'Seletor Rápido de Temas',
    'footer.themeSubtitle': 'Escolha entre 17 temas de cores refinados',
    'footer.allThemes': 'Todos os 17 Temas →',
    'footer.gameGenres': 'Gêneros de Jogos',
    'footer.practiceAndTools': 'Prática e Ferramentas',
    'footer.audioSynthesizer': 'Sintetizador de Áudio',
    'footer.audioDesc': 'Síntese Web Audio simulando Cherry MX Blue, Holy Panda e máquinas de escrever em tempo real.',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.operational': 'Sistemas Operacionais • 60 FPS'
  },

  ru: {
    // Navigation
    'nav.games': 'Игры (21)',
    'nav.arcade': 'Аркадный Зал',
    'nav.speedTest': 'Тест Скорости',
    'nav.practiceLab': 'Лаборатория Практики',
    'nav.leaderboards': 'Таблица Лидеров',
    'nav.play': 'Играть',
    'nav.playGame': 'Играть Сейчас',
    'nav.commandPalette': 'Палитра Команд',
    'nav.themes': 'Темы',
    'nav.siteTheme': 'Тема Сайта (17)',
    'nav.soundProfile': 'Звуковой Профиль',
    'nav.switchSynthesis': 'Звук Переключателей',
    'nav.activeStreak': 'Серия',
    'nav.novice': 'Новичок',

    // Hero Section
    'hero.badge': '21 2D ИГРА ДЛЯ ПЕЧАТИ • ТЕСТЫ СКОРОСТИ • СЛЕПАЯ ПЕЧАТЬ',
    'hero.title1': 'Освойте Клавиатуру.',
    'hero.title2': 'Играйте в 21 Ретро 2D Игру.',
    'hero.subtitle': 'Погрузитесь в космические аркадные битвы, взломы систем, битвы с зомби и тесты скорости уровня Monkeytype с реалистичным звуком механических свитчей.',
    'hero.startTest': 'Начать Тест Печати',
    'hero.browseGames': 'Смотреть 21 Игру',
    'hero.activeTypists': 'Активные Игроки',
    'hero.gamesCount': 'Бесплатные 2D Игры',
    'hero.switchSounds': 'Профили Звука',
    'hero.colorThemes': 'Цветовые Темы',

    // Category Tabs
    'cat.all': 'Все Игры (21)',
    'cat.arcade': 'Аркады (4)',
    'cat.action': 'Экшен (5)',
    'cat.adventure': 'Приключения (4)',
    'cat.fighting': 'Файтинги (4)',
    'cat.puzzle': 'Головоломки (3)',
    'cat.practice': 'Практика (1)',

    // Speed Test
    'st.mode': 'Режим',
    'st.time': 'Время',
    'st.words': 'Слова',
    'st.quote': 'Цитата',
    'st.zen': 'Дзен',
    'st.custom': 'Свой Текст',
    'st.wpm': 'СВМ (WPM)',
    'st.raw': 'Сырой WPM',
    'st.acc': 'Точность',
    'st.consistency': 'Стабильность',
    'st.characters': 'Символы',
    'st.testType': 'Тип Теста',
    'st.timeElapsed': 'Прошло Времени',
    'st.nextTest': 'Следующий Тест',
    'st.repeatTest': 'Повторить',
    'st.practiceMissed': 'Отработка Ошибок',
    'st.replay': 'Повтор',
    'st.shareScore': 'Поделиться Результатом',
    'st.copied': 'Скопировано в буфер обмена!',
    'st.ghostDuel': 'Дуэль с Призраком',
    'st.clickToFocus': 'Нажмите любую клавишу для старта',

    // Practice Lab
    'prac.title': 'Лаборатория Слепой Печати',
    'prac.subtitle': 'ANSI QWERTY 15.0u матрица с подсветкой зон пальцев и звуковым метрономом.',
    'prac.focus': 'Зона Клавиатуры',
    'prac.drillHome': 'Домашний Ряд (ASDF JKL;)',
    'prac.drillTop': 'Верхний Ряд (QWERTY)',
    'prac.drillBottom': 'Нижний Ряд (ZXCVBNM)',
    'prac.drillNumbers': 'Цифровой Ряд (1-0)',
    'prac.drillSymbols': 'Специальные Символы (!@#$)',
    'prac.drillWeak': 'ИИ-Тренировка Проблемных Клавиш',
    'prac.metronome': 'Метроном',
    'prac.colorMode': 'Цветовой Режим',
    'prac.themeSync': 'Синхронизация с Темой',
    'prac.fingerQuadrant': 'Зоны Пальцев',

    // Leaderboards & Career Hub
    'lead.title': 'Карьера и Ежедневные Квесты',
    'lead.subtitle': 'Повышайте уровень от Новичка до Титана Клавиатуры, выполняйте ежедневные задания и следите за активностью 365 дней в году.',
    'lead.levelProgress': 'Прогресс Уровня',
    'lead.activeStreak': 'Текущая Серия',
    'lead.bestStreak': 'Лучшая Серия',
    'lead.careerWords': 'Всего Слов',
    'lead.totalStrokes': 'Всего Нажатий',
    'lead.dailyQuests': 'Ежедневные Квесты',
    'lead.dailyQuestsDesc': '3 новых задания каждые 24 часа. Выполняйте и получайте бонусный XP!',
    'lead.todaysChallenges': 'Задания на Сегодня',
    'lead.activityHeatmap': 'Тепловая Карта Активности',
    'lead.activityHeatmapDesc': 'Ваша ежедневная хронология тестов, игр и тренировок.',
    'lead.activeDays': 'дней активности',
    'lead.totalXp': 'всего XP',
    'lead.bestWpmRecord': 'Рекорд WPM',
    'lead.averageWpm': 'Средний WPM',
    'lead.accuracy': 'Точность',
    'lead.gamesCompleted': 'Пройдено Игр',
    'lead.weakKeysTitle': 'ИИ-Диагностика Ошибок Клавиш',
    'lead.weakKeysDesc': 'Анализ самых частых ошибок в реальном времени с персональными упражнениями.',
    'lead.practiceDrills': 'Начать Тренировку →',
    'lead.prestigeAchievements': 'Престижные Достижения (25)',
    'lead.gameRecords': 'Рекорды и Таблицы Лидеров',
    'lead.gameRecordsDesc': 'Ваши личные результаты во всех 21 играх.',
    'lead.exportStats': 'Экспорт Статистики (JSON)',
    'lead.resetStats': 'Сбросить Прогресс',
    'lead.claimXp': 'Забрать XP',
    'lead.claimed': 'Получено',

    // Game HUD & Common
    'game.level': 'Уровень',
    'game.score': 'Счёт',
    'game.targetWpm': 'Целевой WPM',
    'game.health': 'Здоровье',
    'game.pause': 'Пауза',
    'game.resume': 'Продолжить',
    'game.restart': 'Перезапуск',
    'game.nextLevel': 'Следующий Уровень',
    'game.victory': 'ПОБЕДА!',
    'game.gameOver': 'ИГРА ОКОНЧЕНА',
    'game.howToPlay': 'Как Играть',
    'game.typeToShoot': 'Печатайте слова для атаки и выживания!',

    // Footer
    'footer.quickTheme': 'Быстрая Смена Темы',
    'footer.themeSubtitle': 'Выберите одну из 17 стильных тем',
    'footer.allThemes': 'Все 17 Тем →',
    'footer.gameGenres': 'Жанры Игр',
    'footer.practiceAndTools': 'Практика и Инструменты',
    'footer.audioSynthesizer': 'Синтезатор Звука',
    'footer.audioDesc': 'Генерация звуков Cherry MX Blue, Holy Panda и печатных машинок в реальном времени.',
    'footer.rights': 'Все права защищены.',
    'footer.operational': 'Системы в норме • 60 FPS'
  }
};

const LANG_STORAGE_KEY = 'typing_game_zone_lang';

export function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch {}
  return 'en';
}

export function getLanguageDef(code: string): LanguageDef {
  return SUPPORTED_LANGUAGES.find(l => l.code === code) || SUPPORTED_LANGUAGES[0];
}

export function t(key: string, lang?: string): string {
  const targetLang = lang || getCurrentLanguage();
  const dict = TRANSLATIONS[targetLang] || TRANSLATIONS['en'];
  return dict[key] || TRANSLATIONS['en'][key] || key;
}

export function setLanguage(langCode: string): void {
  if (!TRANSLATIONS[langCode]) return;
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(LANG_STORAGE_KEY, langCode);
    document.documentElement.setAttribute('lang', langCode);
  } catch {}

  applyTranslationsToDOM(langCode);

  window.dispatchEvent(new CustomEvent('typing:language-change', {
    detail: { lang: langCode, def: getLanguageDef(langCode) }
  }));
}

export function applyTranslationsToDOM(lang?: string): void {
  if (typeof document === 'undefined') return;
  const curLang = lang || getCurrentLanguage();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const translated = t(key, curLang);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        (el as HTMLInputElement).placeholder = translated;
      } else {
        el.textContent = translated;
      }
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key) {
      el.setAttribute('title', t(key, curLang));
    }
  });
}

export function initI18n(): void {
  const curLang = getCurrentLanguage();
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', curLang);
    applyTranslationsToDOM(curLang);
  }
}
