// Categorized word dictionaries for 21 games, speed tests, and practice drills
// Powered by modular native datasets in src/data/typing/

import { getCurrentLanguage } from './i18n';
import { KEYBOARD_LAYOUTS } from './keyboardLayouts';
export { KEYBOARD_LAYOUTS };
import {
  LOCALIZED_WORDS,
  MONKEYTYPE_QUOTES,
  getWordPoolForLanguage as getPoolHelper,
  getRandomWord as getWordHelper,
  getRandomWords as getWordsHelper,
  type TypingQuote
} from '../data/typing/index';

export const MONKEYTYPE_ENGLISH_200 = LOCALIZED_WORDS.en.pool200;
export const MONKEYTYPE_ENGLISH_1K = [...LOCALIZED_WORDS.en.pool200, ...LOCALIZED_WORDS.en.pool1k];

export const MONKEYTYPE_CODE_SNIPPETS: string[] = [
  'const result = await fetch("/api/v1/scores", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });',
  'function calculateWpm(keystrokes: number, timeElapsedSec: number): number { const minutes = timeElapsedSec / 60; return Math.round((keystrokes / 5) / minutes); }',
  'export default defineConfig({ site: "https://typinggamezone.com", integrations: [sitemap(), tailwindcss()] });',
  'interface GameEntity { id: string; x: number; y: number; vx: number; vy: number; update(delta: number): void; render(ctx: CanvasRenderingContext2D): void; }',
  'document.addEventListener("keydown", (event: KeyboardEvent) => { if (event.key === "Escape") { togglePauseState(); } });'
];

export const PRACTICE_DRILLS: Record<string, string[]> = {
  homeRow: ['asdf', 'jkl;', 'flask', 'falls', 'salad', 'slash', 'flash', 'dads', 'lass', 'half', 'glad', 'dash', 'asks', 'fads', 'alka', 'shad', 'kall', 'fall', 'hall', 'sash'],
  topRow: ['type', 'rope', 'tree', 'pour', 'port', 'wire', 'quiet', 'write', 'quote', 'query', 'power', 'tower', 'route', 'outer', 'prior', 'equip', 'upper', 'terry', 'rotor', 'weep'],
  bottomRow: ['zoom', 'cave', 'next', 'back', 'vibe', 'zone', 'clan', 'calm', 'zero', 'axon', 'czar', 'bank', 'monk', 'bomb', 'comb', 'mock', 'bone', 'cone', 'vane', 'zinc'],
  numberRow: ['1984', '2024', '100%', '$500', '99.9', '#123', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080', '1999', '2000', '1000', '1024', '4096'],
  symbols: ['const', 'let', 'function()', '() => {}', 'if (x > 0)', '{ key: val }', '[1, 2, 3]', '<div>', '</div>', 'import { x }', 'export default', 'return true;', 'npm install', 'git commit'],
  pangrams: [
    'the quick brown fox jumps over the lazy dog',
    'pack my box with five dozen liquor jugs',
    'how vexingly quick daft zebras jump',
    'sphinx of black quartz judge my vow',
    'two driven jocks help fax my big quiz'
  ],
  ngrams: ['the', 'and', 'ing', 'ion', 'tion', 'that', 'with', 'ment', 'ence', 'ance', 'ness', 'able', 'ible', 'less', 'full', 'ight', 'ough', 'ould', 'ight', 'ound'],
  pinkyDrills: ['pizza', 'plaza', 'quiz', 'lazy', 'equal', 'quick', 'quote', 'apple', 'puppy', 'power', 'pulp', 'poly', 'zeta', 'apex', 'aqua', 'proxy', 'pause', 'pace', 'page', 'park'],
  ringDrills: ['world', 'sweet', 'swear', 'swallow', 'slow', 'solo', 'solid', 'sword', 'wool', 'wood', 'loss', 'wall', 'wolf', 'walk', 'silk', 'silk'],
  middleDrills: ['decide', 'dedicate', 'elite', 'edible', 'electric', 'device', 'define', 'delete', 'defeat', 'iceberg', 'divide', 'element', 'cinema', 'diet'],
  indexDrills: ['flight', 'bright', 'knight', 'thrive', 'target', 'figure', 'gather', 'father', 'growth', 'bridge', 'future', 'ground', 'native', 'rhythm'],
  thumbDrills: ['touch typing speed test', 'practice makes perfect', 'master the home row keys', 'focus on accuracy first', 'steady typing pace']
};

export const LOCALIZED_PRACTICE_DRILLS: Record<string, Record<string, string[]>> = {
  en: PRACTICE_DRILLS,
  hi: {
    homeRow: ['कर', 'रख', 'पर', 'पल', 'कल', 'कम', 'तर', 'पत', 'सत', 'रत', 'कच', 'पट', 'चर', 'फूट', 'खत', 'छाप', 'रोटी', 'पेड़', 'पत्ता', 'ताकत', 'उपाय', 'उत्तर', 'उचित', 'सफर'],
    topRow: ['बात', 'घर', 'हाथ', 'दिन', 'गीत', 'आग', 'बाग', 'दाल', 'जीत', 'भाई', 'दाम', 'बीज', 'घास', 'धूप', 'बाल', 'दवा', 'झील', 'गेंद', 'डाक', 'गाना', 'पूजा', 'भीड़'],
    bottomRow: ['मन', 'वन', 'लय', 'समय', 'नयन', 'मान', 'नाम', 'शान', 'लाभ', 'वंश', 'सेवा', 'सपना', 'नियम', 'सत्य', 'वाणी', 'न्याय', 'शांति', 'संयम', 'नमन', 'माला', 'यश'],
    numberRow: ['१२३४', '५६७८', '२०२६', '१००%', '₹५००', '३.१४', '७७७', '९११', '३६५', '२४/७', '१८००', '४०४', '५००', '८०८०', '१९९९', '२०००', '१०००', '१०२४', '४०९६'],
    symbols: ['सत्यमेव जयते।', 'नमस्ते!', 'क्या हाल है?', '१ + २ = ३', 'ज्ञान = शक्ति', 'सफलता = मेहनत', 'लक्ष्य: विजय', 'शुभकामनाएं!'],
    pangrams: [
      'ऋषियों को सताने वाले दुष्ट राक्षसों के संहार के लिए भगवान ने अवतार लिया',
      'सभी मानव जन्म से स्वतंत्र और अधिकारों में समान हैं',
      'सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः',
      'सच्चा मित्र वही है जो विपत्ति के समय साथ दे',
      'परिश्रम ही सफलता की कुंजी है और ज्ञान सबसे बड़ा धन है'
    ],
    ngrams: ['और', 'है', 'की', 'के', 'का', 'में', 'को', 'से', 'यह', 'भी', 'था', 'कुछ', 'कर', 'सब', 'दिन', 'काम', 'घर', 'सच'],
    pinkyDrills: ['औजार', 'ओस', 'झाड़ी', 'छाता', 'टोकरी', 'ढोल', 'आवाज', 'ऊंट', 'ऐनक', 'ऋषि', 'डमरू', 'झरना', 'चमक', 'टीका', 'औषधि'],
    ringDrills: ['ऐरावत', 'एकता', 'मित्र', 'देश', 'दुआ', 'तारा', 'तलवार', 'मेहनत', 'मातृभूमि', 'दौड़', 'तैरना', 'दीपक', 'दान'],
    middleDrills: ['आकाश', 'अमर', 'नदी', 'गगन', 'कमल', 'कलम', 'किताब', 'अधिकार', 'कविता', 'कौशल', 'नियम', 'गति', 'ज्ञान'],
    indexDrills: ['भारत', 'ईश्वर', 'ऊर्जा', 'इतिहास', 'उपहार', 'विकास', 'वीर', 'लाख', 'हवा', 'पानी', 'सूरज', 'जीवन', 'योद्धा', 'प्रयास', 'विजय'],
    thumbDrills: ['सत्य और शांति', 'ज्ञान ही शक्ति है', 'मेहनत का फल मीठा होता है', 'समय का सदुपयोग करो', 'सदा सच बोलो']
  },
  ja: {
    homeRow: ['ちはし', 'はきく', 'まのり', 'ちと', 'しま', 'のは', 'きり', 'くま', 'まき', 'ちから', 'はな', 'ことり', 'くもり', 'まち'],
    topRow: ['たてい', 'すかん', 'ならせ', 'たい', 'すし', 'かね', 'らい', 'せかい', 'つき', 'ゆき', 'うみ', 'そら', 'てがみ', 'いぬ'],
    bottomRow: ['つさそ', 'ひこみ', 'もねる', 'つみ', 'さる', 'ひかり', 'こころ', 'みち', 'もり', 'ねこ', 'ゆめ', 'ほん', 'やま', 'かわ'],
    numberRow: ['1984', '2026', '100%', '¥500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['こんにちは！', 'ありがとう。', 'はじめまして。', '「タイピング」', '1 + 2 = 3', '日本語・練習'],
    pangrams: [
      'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせす',
      'すべての人間は、生まれながらにして自由であり、かつ、尊厳と権利とについて平等である',
      'あめつちほしそら やまかはみねたに くもきりむろこけ ひといぬうへすゑ ゆわさるおふせよ'
    ],
    ngrams: ['です', 'ます', 'こと', 'もの', 'から', 'まで', 'そして', 'しかし', 'また', 'ない', 'ある', 'する'],
    pinkyDrills: ['せかい', 'たいよう', 'ちから', 'つばさ', 'れもん', 'るり', 'ぷりん', 'ろく', 'ぴあの'],
    ringDrills: ['てがみ', 'ともだち', 'さくら', 'らくだ', 'りす', 'わに', 'ろけっと'],
    middleDrills: ['いぬ', 'しろ', 'そら', 'にじ', 'のり', 'ねこ', 'きつね', 'みどり'],
    indexDrills: ['すずめ', 'はなび', 'ひかり', 'ほし', 'やま', 'うみ', 'かぜ', 'つき', 'みち', 'ゆき'],
    thumbDrills: ['きょうも いちにち がんばろう', 'にほんごの れんしゅう', 'ゆめを あきらめない']
  },
  ru: {
    homeRow: ['фавы', 'апро', 'ролд', 'ждэ', 'вода', 'пара', 'роса', 'поле', 'дело', 'лапа', 'жара', 'факт', 'роль', 'гора', 'флот'],
    topRow: ['йцук', 'кене', 'нгшщ', 'зхъ', 'утро', 'кино', 'небо', 'звук', 'перо', 'снег', 'урок', 'круг', 'окно', 'стих', 'рука'],
    bottomRow: ['ячсм', 'митб', 'бюэ', 'свет', 'мост', 'зима', 'тема', 'брат', 'маяк', 'чудо', 'юбка', 'смех', 'хлеб', 'трава'],
    numberRow: ['1984', '2026', '100%', '500₽', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Привет, мир!', 'Как дела?', '1 + 2 = 3', '«Победа»', 'Знание — сила.', 'Шаг за шагом.'],
    pangrams: [
      'съешь ещё этих мягких французских булок, да выпей чаю',
      'в чащах юга жил-был цитрус, но фальшивый экземпляр',
      'южно-эфиопский грач увёл мышь за хобот'
    ],
    ngrams: ['что', 'как', 'это', 'все', 'так', 'она', 'они', 'был', 'для', 'нет', 'при', 'про', 'под', 'над'],
    pinkyDrills: ['факел', 'экран', 'ягода', 'замок', 'халат', 'щука', 'шарф', 'поезд', 'юрист', 'шторм'],
    ringDrills: ['волна', 'сырок', 'дымка', 'лучник', 'щенок', 'шмель', 'шляпа', 'выбор'],
    middleDrills: ['ветер', 'дерево', 'камыш', 'лампа', 'мечта', 'новости', 'улыбка', 'песня'],
    indexDrills: ['радость', 'победа', 'солнце', 'правда', 'голубь', 'город', 'народ', 'жизнь', 'память'],
    thumbDrills: ['мир и добро', 'знание это сила', 'учись с удовольствием', 'вперед к цели']
  },
  ar: {
    homeRow: ['شسي', 'يبلا', 'اتنم', 'كط', 'بيت', 'نور', 'علم', 'عمل', 'سلام', 'شمس', 'بحر', 'كتاب', 'قلم', 'سماء', 'طريق'],
    topRow: ['ضصث', 'قفغ', 'عهخ', 'حجد', 'ذهب', 'فرح', 'غيمة', 'خير', 'حب', 'جنة', 'دار', 'قلب', 'عين', 'صوت', 'حياة'],
    bottomRow: ['ئءؤ', 'رلاى', 'ةوز', 'ظ', 'ورد', 'زهر', 'رمل', 'وطن', 'أمل', 'نهار', 'ليل', 'روح', 'رؤية', 'زمان'],
    numberRow: ['١٩٨٤', '٢٠٢٦', '١٠٠٪', '٥٠٠$', '٣.١٤', '٧٧٧', '٩١١', '٣٦٥', '٢٤/٧', '١٨٠٠', '٤٠٤', '٥٠٠', '٨٠٨٠'],
    symbols: ['السلام عليكم!', 'كيف حالك؟', '١ + ٢ = ٣', '«النجاح»', 'العلم نور.', 'خطوة بخطوة.'],
    pangrams: [
      'نص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومطرز بحروف ذهبية',
      'كل إنسان يولد حرا ومتساويا في الكرامة والحقوق',
      'العلم نور والجهل ظلام في طريق الحياة'
    ],
    ngrams: ['في', 'من', 'على', 'إلى', 'عن', 'مع', 'هذا', 'هذه', 'التي', 'الذي', 'كان', 'ليس', 'قال', 'كل'],
    pinkyDrills: ['شجرة', 'طائر', 'ضباب', 'حجر', 'ظلام', 'كوكب', 'جسر', 'شاطئ', 'طفل'],
    ringDrills: ['سفينة', 'صحراء', 'غابة', 'قمر', 'صديق', 'سعادة', 'خيال'],
    middleDrills: ['ياسمين', 'ثمرة', 'هلال', 'مطر', 'طاقة', 'تاريخ', 'نجاح'],
    indexDrills: ['بستان', 'لوحة', 'فضاء', 'عالم', 'نجمة', 'أرض', 'إيمان', 'راية'],
    thumbDrills: ['السلام والمحبة', 'العلم ينير العقول', 'العمل سر النجاح', 'الأمل يصنع المعجزات']
  },
  de: {
    homeRow: ['asdf', 'jklö', 'äfal', 'saal', 'glas', 'fall', 'dass', 'kahl', 'sofa', 'jagdt', 'ölk', 'käse', 'saft', 'dachs'],
    topRow: ['qwert', 'zuiop', 'ütre', 'baum', 'zeit', 'tier', 'post', 'ruhe', 'topf', 'wort', 'über', 'tür', 'quer', 'oper'],
    bottomRow: ['yxcv', 'bnm,', 'blau', 'mond', 'mann', 'nacht', 'vogel', 'zahn', 'boot', 'bahn', 'mast', 'bank', 'zone'],
    numberRow: ['1984', '2026', '100%', '500€', '3,14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Hallo Welt!', 'Wie geht es?', '1 + 2 = 3', '»Erfolg«', 'Wissen ist Macht.', 'Schritt für Schritt.'],
    pangrams: [
      'zwölf boxkämpfer jagen viktor quer über den großen sylter deich',
      'jeder mensch hat das recht auf bildung und freiheit',
      'falsches üben von xylophonmusik quält jeden größeren zwerg'
    ],
    ngrams: ['der', 'die', 'das', 'und', 'ist', 'von', 'mit', 'den', 'auf', 'für', 'nicht', 'sich', 'dem', 'dass'],
    pinkyDrills: ['platz', 'qual', 'apfel', 'pause', 'öster', 'käfig', 'zwerg', 'extra', 'äquator', 'üppig'],
    ringDrills: ['wald', 'sohn', 'mond', 'wolf', 'dunst', 'wunder', 'sand'],
    middleDrills: ['erde', 'klima', 'insel', 'licht', 'leben', 'natur', 'kind'],
    indexDrills: ['freude', 'glaube', 'herbst', 'vogel', 'blume', 'sonne', 'traum', 'reise'],
    thumbDrills: ['ruhe und kraft', 'wissen ist macht', 'übung macht den meister', 'jeder tag zählt']
  },
  es: {
    homeRow: ['asdf', 'jklñ', 'faja', 'sala', 'hola', 'hada', 'lado', 'seda', 'sofa', 'kilo', 'año', 'daño', 'niño', 'leña'],
    topRow: ['qwer', 'tyui', 'opqu', 'pero', 'toro', 'rio', 'roca', 'tubo', 'pelo', 'puerta', 'queso', 'tipo', 'pino', 'rosa'],
    bottomRow: ['zxcv', 'bnm,', 'zona', 'vaso', 'vino', 'bien', 'mano', 'cielo', 'boca', 'nave', 'caza', 'coche', 'mapa'],
    numberRow: ['1984', '2026', '100%', '500€', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['¡Hola mundo!', '¿Cómo estás?', '1 + 2 = 3', '«Éxito»', 'El saber es poder.', 'Paso a paso.'],
    pangrams: [
      'el veloz murciélago hindú comía feliz cardillo y kiwi',
      'todos los seres humanos nacen libres e iguales en dignidad y derechos',
      'benjamín pidió una copa de champán en el quiosco de la esquina'
    ],
    ngrams: ['que', 'los', 'del', 'las', 'por', 'con', 'para', 'como', 'pero', 'mas', 'este', 'todo', 'bien', 'solo'],
    pinkyDrills: ['plaza', 'queso', 'playa', 'zumo', 'peña', 'caña', 'árbol', 'paño', 'zapato', 'azúcar'],
    ringDrills: ['sol', 'luna', 'vino', 'santo', 'oro', 'silla', 'lago'],
    middleDrills: ['cielo', 'dardo', 'isla', 'monte', 'idea', 'letra', 'mundo'],
    indexDrills: ['fuego', 'guitarra', 'tierra', 'hierba', 'viento', 'hermano', 'tiempo', 'camino'],
    thumbDrills: ['paz y amor', 'el saber es poder', 'la práctica hace al maestro', 'vive el presente']
  },
  fr: {
    homeRow: ['qsdf', 'jklm', 'fade', 'mars', 'salle', 'lama', 'dame', 'rose', 'flamme', 'mode', 'merci', 'sofa', 'sage'],
    topRow: ['azer', 'tyui', 'opau', 'porte', 'tour', 'arbre', 'peau', 'vent', 'route', 'jour', 'peur', 'toit', 'fleur'],
    bottomRow: ['wxcv', 'bn,;', 'voie', 'beau', 'nuit', 'chat', 'base', 'bonbon', 'vague', 'cœur', 'main', 'zone'],
    numberRow: ['1984', '2026', '100%', '500€', '3,14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Bonjour le monde !', 'Comment allez-vous ?', '1 + 2 = 3', '« Succès »', 'Le savoir est une force.'],
    pangrams: [
      'portez ce vieux whisky au juge blond qui fume',
      'tous les êtres humains naissent libres et égaux en dignité et en droits',
      'le cœur déçu mais fier, l\'exilé joyeux s\'approcha du rivage'
    ],
    ngrams: ['les', 'des', 'que', 'qui', 'dans', 'pour', 'avec', 'tout', 'plus', 'bien', 'fait', 'sans', 'sous', 'vers'],
    pinkyDrills: ['plage', 'quai', 'pomme', 'puzzle', 'azur', 'poire', 'piège', 'piano', 'zèbre'],
    ringDrills: ['soleil', 'lune', 'source', 'oiseau', 'saule', 'valse'],
    middleDrills: ['étoile', 'ciel', 'monde', 'livre', 'image', 'neige'],
    indexDrills: ['nature', 'histoire', 'voyage', 'bonheur', 'flamme', 'rivière', 'liberté'],
    thumbDrills: ['paix et liberté', 'le savoir est une force', 'petit à petit l\'oiseau fait son nid']
  },
  bn: {
    homeRow: ['কর', 'পল', 'তল', 'চর', 'টক', 'পট', 'খত', 'ছাতা', 'খবর', 'রোটি', 'তাল', 'কথা', 'পাতা', 'কলম', 'পথ'],
    topRow: ['ভাত', 'ঘর', 'হাত', 'দিন', 'গান', 'আগুন', 'বাঘ', 'ডাল', 'ভাই', 'বীজ', 'ঘাস', 'রোদ', 'ঝিল', 'গাছ'],
    bottomRow: ['মন', 'বন', 'লয়', 'সময়', 'নাম', 'মান', 'লাভ', 'স্বপ্ন', 'নিয়ম', 'সত্য', 'নদী', 'শান্তি', 'মালা'],
    numberRow: ['১২৩৪', '৫৬৭৮', '২০২৬', '১০০%', '৳৫০০', '৩.১৪', '৭৭৭', '৯১১', '৩৬৫', '২৪/৭', '১৮০০', '৪০৪', '৫০০', '৮০৮০'],
    symbols: ['শুভ সকাল!', 'কেমন আছেন?', '১ + ২ = ৩', '«জয়»', 'জ্ঞানই শক্তি।', 'ধাপে ধাপে উন্নতি।'],
    pangrams: [
      'সব মানুষ স্বাধীনভাবে সমান মর্যাদা ও অধিকার নিয়ে জন্মগ্রহণ করে',
      'সাধু ও চরিত্রবান ব্যক্তি সবার শ্রদ্ধাভাজন হন',
      'জ্ঞান ও প্রজ্ঞার আলো সর্বত্র ছড়িয়ে দাও'
    ],
    ngrams: ['এবং', 'হয়', 'এর', 'কে', 'তে', 'যে', 'না', 'সব', 'করে', 'ছিল', 'হবে', 'এই', 'তার', 'এক'],
    pinkyDrills: ['ঔষধ', 'ওজন', 'ঝুড়ি', 'ছাতা', 'টাকা', 'ঢোল', 'আকাশ', 'উট', 'ঋতু', 'ডিম'],
    ringDrills: ['ঐতিহ্য', 'একতা', 'মিত্র', 'দেশ', 'তারা', 'মেহনত', 'আলো'],
    middleDrills: ['নদী', 'গগন', 'কমল', 'কলম', 'বই', 'কবিতা', 'নিয়ম'],
    indexDrills: ['বাংলাদেশ', 'ভারত', 'ইতিহাস', 'উপহার', 'বীর', 'হাওয়া', 'পানি', 'সূর্য', 'জীবন', 'বিজয়'],
    thumbDrills: ['সত্য ও শান্তি', 'জ্ঞানই পরম শক্তি', 'পরিশ্রম সৌভাগ্যের প্রসূতি', 'সদা সত্য কথা বলো']
  },
  pt: {
    homeRow: ['asdf', 'jklç', 'fala', 'sala', 'lado', 'seda', 'fada', 'kilo', 'sofa', 'laço', 'ação', 'maçã', 'faça'],
    topRow: ['qwer', 'tyui', 'opqu', 'tempo', 'porto', 'rio', 'rua', 'tubo', 'povo', 'queijo', 'tipo', 'ouro', 'rosa'],
    bottomRow: ['zxcv', 'bnm,', 'zona', 'vaso', 'vento', 'bem', 'mão', 'céu', 'boca', 'nave', 'noite', 'mapa', 'voz'],
    numberRow: ['1984', '2026', '100%', 'R$500', '3,14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Olá Mundo!', 'Como vai você?', '1 + 2 = 3', '«Sucesso»', 'O saber é poder.', 'Passo a passo.'],
    pangrams: [
      'um pequeno jabuti xereta viu dez cegonhas felizes',
      'todos os seres humanos nascem livres e iguais em dignidade e direitos',
      'gazeta publica hoje breve anúncio de faxina na quermesse'
    ],
    ngrams: ['que', 'para', 'com', 'não', 'uma', 'por', 'mais', 'como', 'mas', 'foi', 'ele', 'sua', 'tudo', 'bem'],
    pinkyDrills: ['praça', 'queijo', 'praia', 'zebra', 'poema', 'açúcar', 'paço', 'zíper'],
    ringDrills: ['sol', 'lua', 'sonho', 'ouro', 'sapo', 'lago'],
    middleDrills: ['céu', 'mar', 'ilha', 'monte', 'ideia', 'mundo', 'vida'],
    indexDrills: ['fogo', 'terra', 'vento', 'irmão', 'tempo', 'caminho', 'futuro'],
    thumbDrills: ['paz e harmonia', 'o saber é poder', 'a prática leva à perfeição']
  },
  zh: {
    homeRow: ['大家', '可以', '开发', '社会', '设计', '快乐', '好好', '打字', '练习', '提升', '速度', '天天'],
    topRow: ['世界', '朋友', '希望', '梦想', '光明', '特别', '科学', '网络', '英雄', '太空', '星星', '雨水'],
    bottomRow: ['成功', '平安', '天地', '日月', '火风', '爱心', '声音', '文明', '真理', '自然', '森林', '海洋'],
    numberRow: ['1984', '2026', '100%', '¥500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['你好，世界！', '今天过得怎么样？', '1 + 2 = 3', '《成功之路》', '知识就是力量。'],
    pangrams: [
      '人人生而自由，在尊严和权利上一律平等',
      '千里之行始于足下，坚持不懈方能成功',
      '好好学习天天向上，打字练习提升速度'
    ],
    ngrams: ['我们', '他们', '这个', '那个', '因为', '所以', '虽然', '但是', '如果', '而且'],
    pinkyDrills: ['苹果', '汽车', '青年', '左右', '气象', '字母', '清晨', '跑步'],
    ringDrills: ['未来', '书本', '阳光', '蓝天', '白云', '绿色', '温暖'],
    middleDrills: ['电脑', '科技', '音乐', '创造', '思考', '故事', '探索'],
    indexDrills: ['奋斗', '辉煌', '壮丽', '坚强', '勇敢', '热情', '友谊', '胜利'],
    thumbDrills: ['和平与发展', '知识就是力量', '千里之行始于足下', '熟能生巧']
  },
  ko: {
    homeRow: ['바다', '하늘', '나라', '사람', '마음', '하나', '모두', '아이', '사랑', '바람', '가을', '나비'],
    topRow: ['구름', '소리', '태양', '새싹', '기쁨', '빛', '꽃', '길', '꿈', '별', '파도', '달'],
    bottomRow: ['나무', '숲', '물', '달', '친구', '학교', '희망', '가을', '봄', '겨울', '산', '강'],
    numberRow: ['1984', '2026', '100%', '₩500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['안녕하세요!', '오늘 하루 어떠셨나요?', '1 + 2 = 3', '「성공」', '아는 것이 힘이다.'],
    pangrams: [
      '모든 인간은 태어날 때부터 자유로우며 그 존엄과 권리에 있어 동등하다',
      '다람쥐 헌 쳇바퀴에 타고파',
      '키스의 고유조건은 입술끼리 만나야 하고 특별한 기술은 필요치 않다'
    ],
    ngrams: ['그리고', '하지만', '그러나', '그래서', '우리는', '그들은', '이것은', '저것은'],
    pinkyDrills: ['피아노', '카메라', '편지', '파도', '코끼리', '포도', '퀴즈'],
    ringDrills: ['자전거', '신발', '선물', '달리기', '오솔길', '은하수'],
    middleDrills: ['도서관', '컴퓨터', '이야기', '아침', '인사', '기억'],
    indexDrills: ['행복', '용기', '열정', '우정', '도전', '성공', '노력', '승리'],
    thumbDrills: ['평화와 번영', '아는 것이 힘이다', '천 리 길도 한 걸음부터', '연습이 최고다']
  },
  it: {
    homeRow: ['asdf', 'jkl;', 'fede', 'sale', 'lago', 'fase', 'sole', 'dado', 'seta', 'mare', 'casa', 'cosa', 'solo'],
    topRow: ['qwer', 'tyui', 'opqu', 'tempo', 'porto', 'rete', 'riva', 'tubo', 'puro', 'quota', 'tipo', 'oro', 'rosa'],
    bottomRow: ['zxcv', 'bnm,', 'zona', 'vaso', 'vino', 'bene', 'mano', 'cielo', 'bocca', 'nave', 'notte', 'mappa', 'voce'],
    numberRow: ['1984', '2026', '100%', '500€', '3,14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Ciao Mondo!', 'Come stai?', '1 + 2 = 3', '«Successo»', 'Sapere è potere.', 'Passo dopo passo.'],
    pangrams: [
      'quel vil barbone ci vendette un fiasco di buon pecorino',
      'tutti gli esseri umani nascono liberi ed eguali in dignità e diritti',
      'pranzo d\'acqua fa volti sgomenti ma chissà perché'
    ],
    ngrams: ['che', 'per', 'con', 'non', 'una', 'del', 'più', 'come', 'anche', 'sono', 'alla', 'ogni', 'tutto', 'bene'],
    pinkyDrills: ['piazza', 'quota', 'pozzo', 'zero', 'pizza', 'aprile', 'pezzo'],
    ringDrills: ['sole', 'luna', 'sogno', 'oro', 'sabbia', 'lago'],
    middleDrills: ['cielo', 'mare', 'isola', 'monte', 'idea', 'mondo', 'vita'],
    indexDrills: ['fuoco', 'terra', 'vento', 'tempo', 'cammino', 'futuro', 'libertà'],
    thumbDrills: ['pace e amore', 'sapere è potere', 'la pratica rende perfetti']
  },
  tr: {
    homeRow: ['asdf', 'jklş', 'i;kal', 'fark', 'sade', 'kale', 'halk', 'saat', 'dost', 'kasa', 'şaka', 'aşk', 'ışık'],
    topRow: ['qwer', 'tyui', 'opğü', 'renk', 'tarih', 'yol', 'ümit', 'para', 'güneş', 'tepe', 'ördek', 'şehir', 'öykü'],
    bottomRow: ['zxcv', 'bnmö', 'ç.,', 'zaman', 'vatan', 'büyük', 'çiçek', 'deniz', 'bahar', 'öğren', 'mavi', 'nehir'],
    numberRow: ['1984', '2026', '100%', '500₺', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Merhaba Dünya!', 'Nasılsınız?', '1 + 2 = 3', '«Başarı»', 'Bilgi güçtür.', 'Adım adım zafer.'],
    pangrams: [
      'pijamalı hasta yağız şoföre çabucak güvendi',
      'bütün insanlar hür, haysiyet ve haklar bakımından eşit doğarlar',
      'vurguncu vahşi akrep gibi çabucak kaçtı'
    ],
    ngrams: ['bir', 've', 'bu', 'için', 'ile', 'da', 'de', 'çok', 'gibi', 'daha', 'kadar', 'sonra', 'olan', 'her'],
    pinkyDrills: ['ağaç', 'paket', 'şeker', 'pazar', 'çarşı', 'özgür', 'şapka'],
    ringDrills: ['sabah', 'orman', 'dünya', 'yıldız', 'sevgi'],
    middleDrills: ['deniz', 'kitap', 'insan', 'akıl', 'hayat'],
    indexDrills: ['rüzgar', 'güneş', 'toprak', 'bayrak', 'gelecek', 'başarı'],
    thumbDrills: ['barış ve huzur', 'bilgi en büyük güçtür', 'çalışmak başarının anahtarıdır']
  },
  vi: {
    homeRow: ['asdf', 'jkl;', 'sao', 'hoa', 'lao', 'da', 'song', 'khoa', 'la', 'lang', 'tay', 'chan', 'nam'],
    topRow: ['qwer', 'tyui', 'opqu', 'troi', 'que', 'yeu', 'uoc', 'rung', 'phong', 'toi', 'tien', 'ngay'],
    bottomRow: ['zxcv', 'bnm,', 'vang', 'xanh', 'bien', 'nuoc', 'moi', 'chim', 'mai', 'mua', 'nang', 'gio'],
    numberRow: ['1984', '2026', '100%', '500₫', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Xin chào thế giới!', 'Bạn khỏe không?', '1 + 2 = 3', '«Thành công»', 'Kiến thức là sức mạnh.'],
    pangrams: [
      'tất cả mọi người sinh ra đều được tự do và bình đẳng về nhân phẩm và quyền lợi',
      'con cò bay lả bay la bay từ cửa phủ bay ra cánh đồng',
      'người khôn ngoan biết lắng nghe và học hỏi mỗi ngày'
    ],
    ngrams: ['cua', 'va', 'trong', 'cho', 'voi', 'khong', 'nhung', 'duoc', 'nguoi', 'co', 'nay', 'mot', 'rat'],
    pinkyDrills: ['phong', 'que', 'xuan', 'phim', 'quy', 'xanh'],
    ringDrills: ['sao', 'song', 'lang', 'suoi', 'lua'],
    middleDrills: ['dat', 'moi', 'duong', 'tam', 'tinh'],
    indexDrills: ['que huong', 'dat nuoc', 'yeu thuong', 'tu do', 'thanh cong'],
    thumbDrills: ['hoa binh va hanh phuc', 'kien thuc la suc manh', 'co chi thi nen']
  },
  id: {
    homeRow: ['asdf', 'jkl;', 'fajar', 'salam', 'kaca', 'desa', 'halo', 'jalan', 'sama', 'lupa', 'saja', 'lama'],
    topRow: ['qwer', 'tyui', 'opqu', 'pohon', 'waktu', 'ruang', 'pagi', 'tahu', 'roti', 'pintu', 'raja', 'terang'],
    bottomRow: ['zxcv', 'bnm,', 'zaman', 'cahaya', 'bulan', 'nama', 'mata', 'bumi', 'cinta', 'warna', 'batu', 'mobil'],
    numberRow: ['1984', '2026', '100%', 'Rp500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500', '8080'],
    symbols: ['Halo Dunia!', 'Bagaimana kabarmu?', '1 + 2 = 3', '«Sukses»', 'Ilmu adalah kekuatan.'],
    pangrams: [
      'semua orang dilahirkan merdeka dan mempunyai martabat dan hak-hak yang sama',
      'fajar telah menyingsing dan burung berkicau menyambut hari baru',
      'belajar mengetik dengan cepat dan akurat membutuhkan latihan rutin'
    ],
    ngrams: ['yang', 'dan', 'di', 'ini', 'dengan', 'untuk', 'dari', 'tidak', 'akan', 'pada', 'juga', 'ke', 'ada'],
    pinkyDrills: ['pohon', 'pulau', 'peta', 'pasar', 'pena', 'zaman'],
    ringDrills: ['surat', 'langit', 'suara', 'ombak', 'senang'],
    middleDrills: ['danau', 'emas', 'kawan', 'indah', 'teman'],
    indexDrills: ['garuda', 'harapan', 'bintang', 'gunung', 'terbang', 'sukses'],
    thumbDrills: ['damai dan sejahtera', 'ilmu adalah kekuatan', 'rajin pangkal pandai']
  }
};

export const LOCALIZED_PRACTICE_DRILLS_LATIN: Record<string, Record<string, string[]>> = {
  hi: {
    homeRow: ['flask', 'salad', 'flash', 'glad', 'dash', 'asks', 'fall', 'hall', 'sash', 'kall', 'alka'],
    topRow: ['type', 'rope', 'tree', 'pour', 'port', 'wire', 'quiet', 'write', 'power', 'tower', 'route'],
    bottomRow: ['zoom', 'cave', 'next', 'back', 'vibe', 'zone', 'clan', 'calm', 'zero', 'bank', 'monk', 'bomb'],
    numberRow: ['1984', '2026', '100%', '$500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500'],
    symbols: ['namaste!', 'kaise ho?', '1 + 2 = 3', 'shubhkaamnayein', 'satyamev jayate'],
    pangrams: [
      'the quick brown fox jumps over the lazy dog',
      'namaste sabhi dosto ko typing game zone me swagat hai',
      'mehnat karne walo ki kabhi haar nahi hoti',
      'satyamev jayate nanritam satyena pantha vitato devayanah'
    ],
    ngrams: ['hai', 'kya', 'nahi', 'karo', 'apna', 'baat', 'dost', 'pyar', 'aaj', 'kal', 'suno', 'dekho'],
    pinkyDrills: ['pizza', 'plaza', 'quiz', 'lazy', 'equal', 'quick', 'quote', 'apple', 'puppy', 'power'],
    ringDrills: ['world', 'sweet', 'swear', 'swallow', 'slow', 'solo', 'solid', 'sword', 'wool', 'wood'],
    middleDrills: ['decide', 'dedicate', 'elite', 'edible', 'electric', 'device', 'define', 'delete', 'defeat'],
    indexDrills: ['bharat', 'shanti', 'jeevan', 'suraj', 'hawa', 'pani', 'vijay', 'yoddha', 'prayas', 'roshni'],
    thumbDrills: ['satya aur shanti', 'gyan hi shakti hai', 'mehnat ka phal meetha hota hai']
  },
  ja: {
    homeRow: ['ashita', 'katana', 'sakura', 'hikari', 'kimono', 'kokoro', 'arigato', 'sayonara', 'tamago', 'taberu'],
    topRow: ['tokyo', 'kyoto', 'osaka', 'sensou', 'sekai', 'sensei', 'tsubasa', 'tsurugi', 'suzume', 'hotaru'],
    bottomRow: ['matsuri', 'mizu', 'nihon', 'neko', 'inu', 'yama', 'kawa', 'sora', 'tsuki', 'hoshizora'],
    numberRow: ['1984', '2026', '100%', '¥500', '3.14', '777', '911', '365', '24/7', '1800', '404', '500'],
    symbols: ['konnichiwa!', 'arigatou gozaimasu.', '1 + 2 = 3', 'typing practice', 'ganbatte!'],
    pangrams: [
      'the quick brown fox jumps over the lazy dog',
      'irohanihoheto chirinuruwo wakayotareso tsunenaramu',
      'subete no ningen wa umarenagarani shite jiyuu de ari'
    ],
    ngrams: ['desu', 'masu', 'koto', 'mono', 'kara', 'made', 'soshite', 'shikashi', 'mata', 'nai', 'aru'],
    pinkyDrills: ['pizza', 'plaza', 'quiz', 'lazy', 'equal', 'quick', 'quote', 'apple', 'puppy'],
    ringDrills: ['sakura', 'sensou', 'sekai', 'sensei', 'suzume', 'sayonara'],
    middleDrills: ['katana', 'kimono', 'kokoro', 'kawa', 'hikari', 'densha'],
    indexDrills: ['nihon', 'tokyo', 'matsuri', 'tsubasa', 'arigato', 'hotaru'],
    thumbDrills: ['kyou mo ichinichi ganbarou', 'nihongo no renshuu', 'yume wo akiramenai']
  }
};

export const WORD_LISTS = {
  easy: LOCALIZED_WORDS.en.gameWords.easy,
  medium: LOCALIZED_WORDS.en.gameWords.medium,
  hard: LOCALIZED_WORDS.en.gameWords.hard,
  space: LOCALIZED_WORDS.en.gameWords.space,
  cyber: LOCALIZED_WORDS.en.gameWords.cyber,
  fantasy: LOCALIZED_WORDS.en.gameWords.fantasy,
  combat: LOCALIZED_WORDS.en.gameWords.combat,
  practiceDrills: PRACTICE_DRILLS,
};

export function getPracticeDrillWords(
  drillType: string = 'homeRow',
  param2: number | string = 25,
  param3: string = 'en',
  param4: 'native' | 'latin' | number = 'native'
): string[] {
  let count = 25;
  let lang = 'en';
  let scriptMode: 'native' | 'latin' = 'native';

  if (typeof param2 === 'number') {
    count = param2;
    lang = param3 || 'en';
    scriptMode = (param4 as 'native' | 'latin') || 'native';
  } else if (typeof param2 === 'string') {
    lang = param2;
    scriptMode = (param3 as 'native' | 'latin') || 'native';
    count = typeof param4 === 'number' ? param4 : 25;
  }

  const cleanLang = (lang || 'en').toLowerCase().trim().split('-')[0];

  let drillsMap = LOCALIZED_PRACTICE_DRILLS[cleanLang];
  if (scriptMode === 'latin' && cleanLang !== 'en' && LOCALIZED_PRACTICE_DRILLS_LATIN[cleanLang]) {
    drillsMap = LOCALIZED_PRACTICE_DRILLS_LATIN[cleanLang];
  }

  let pool = drillsMap?.[drillType];

  if (!pool || pool.length === 0) {
    if (cleanLang !== 'en' && LOCALIZED_PRACTICE_DRILLS[cleanLang]?.homeRow) {
      pool = LOCALIZED_PRACTICE_DRILLS[cleanLang].homeRow;
    } else if (PRACTICE_DRILLS[drillType]) {
      pool = cleanLang === 'en' ? PRACTICE_DRILLS[drillType] : getWordPoolForLanguage(cleanLang, '200');
    } else {
      pool = getWordPoolForLanguage(cleanLang, '200');
    }
  }

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  return result;
}

export function getWordPoolForLanguage(
  lang: string,
  poolType: '200' | '1k' = '200',
  _scriptMode: 'native' | 'latin' = 'native'
): string[] {
  return getPoolHelper(lang, poolType);
}

export function getRandomWord(
  category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium',
  lang?: string
): string {
  const curLang = lang || getCurrentLanguage();
  return getWordHelper(category, curLang);
}

export function getRandomWords(
  count: number,
  category: 'easy' | 'medium' | 'hard' | 'space' | 'cyber' | 'fantasy' | 'combat' = 'medium',
  lang?: string
): string[] {
  const curLang = lang || getCurrentLanguage();
  return getWordsHelper(count, category, curLang);
}

export function generateMonkeytypeWordList(
  count: number,
  language = 'english',
  includePunc = false,
  includeNum = false,
  langCode = 'en',
  scriptMode: 'native' | 'latin' = 'native'
): string[] {
  const targetLang = (langCode && langCode !== 'en') ? langCode : language;
  const pool = getWordPoolForLanguage(targetLang, '200', scriptMode);
  const words: string[] = [];
  const puncs = ['.', ',', '!', '?', ';', ':', '-', '...', '—', '"'];

  for (let i = 0; i < count; i++) {
    const baseWord = pool[Math.floor(Math.random() * pool.length)];
    let finalWord = baseWord;

    if (includeNum && Math.random() < 0.16) {
      finalWord = `${Math.floor(Math.random() * 999 + 1)}`;
    } else if (includePunc) {
      const rand = Math.random();
      if (rand < 0.18 && i > 0) {
        const punc = puncs[Math.floor(Math.random() * puncs.length)];
        if (punc === '"') {
          finalWord = `"${finalWord}"`;
        } else {
          finalWord = `${finalWord}${punc}`;
        }
      } else if (rand > 0.88) {
        finalWord = finalWord.charAt(0).toUpperCase() + finalWord.slice(1);
      }
    }

    words.push(finalWord);
  }

  return words;
}

export function getMonkeytypeQuote(
  lengthType: 'all' | 'short' | 'medium' | 'long' | 'thicc' = 'all',
  lang?: string
): TypingQuote {
  let list = MONKEYTYPE_QUOTES;
  if (lang) {
    const langQuotes = MONKEYTYPE_QUOTES.filter(q => q.lang === lang);
    if (langQuotes.length > 0) list = langQuotes;
  }
  if (lengthType !== 'all') {
    const filtered = list.filter(q => q.length === lengthType);
    if (filtered.length > 0) list = filtered;
  }
  return list[Math.floor(Math.random() * list.length)] || MONKEYTYPE_QUOTES[0];
}

export function generateWeakKeysDrill(weakKeys: string[], count = 25, lang = 'en'): string[] {
  if (!weakKeys || weakKeys.length === 0) {
    weakKeys = ['p', 'q', 'z', 'x', 'b'];
  }
  const cleanKeys = weakKeys.map(k => k.toLowerCase());
  const wordPool = getWordPoolForLanguage(lang, '200');

  const matchingWords = wordPool.filter(w => {
    const lower = w.toLowerCase();
    return cleanKeys.some(k => lower.includes(k));
  });

  const pool = matchingWords.length >= 8 ? matchingWords : wordPool;
  const result: string[] = [];

  for (let i = 0; i < count; i++) {
    const word = pool[Math.floor(Math.random() * pool.length)];
    result.push(word);
  }

  return result;
}

export { LOCALIZED_WORDS, MONKEYTYPE_QUOTES };
