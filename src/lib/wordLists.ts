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
  type CategorizedGameWords,
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
  pinkyDrills: ['pizza', 'plaza', 'quiz', 'lazy', 'equal', 'quick', 'quote', 'apple', 'puppy', 'power', 'pulp', 'poly', 'zeta', 'apex', 'aqua', 'proxy', 'pause', 'pace', 'page', 'park']
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
  countOrLang: number | string = 25,
  langOrScript: string = 'en',
  _scriptMode?: string
): string[] {
  const count = typeof countOrLang === 'number' ? countOrLang : 25;
  const pool = PRACTICE_DRILLS[drillType] || PRACTICE_DRILLS.homeRow;
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
