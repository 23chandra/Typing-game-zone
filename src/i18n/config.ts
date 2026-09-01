// Internationalization (i18n) Configuration for Typing Game Zone
// Supports 16 global languages:
// 1. English (en)
// 2. Hindi (hi)
// 3. Spanish (es)
// 4. French (fr)
// 5. German (de)
// 6. Japanese (ja)
// 7. Portuguese (pt)
// 8. Russian (ru)
// 9. Arabic (ar)
// 10. Chinese Simplified (zh)
// 11. Italian (it)
// 12. Korean (ko)
// 13. Indonesian (id)
// 14. Turkish (tr)
// 15. Vietnamese (vi)
// 16. Bengali (bn)

export interface LanguageConfig {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
  isRTL?: boolean;
  region: string;
  script: 'latin' | 'devanagari' | 'kana' | 'cyrillic' | 'arabic' | 'hanzi' | 'hangul' | 'bengali';
  defaultKeyboard: 'qwerty' | 'azerty' | 'qwertz' | 'cyrillic' | 'arabic' | 'devanagari' | 'bengali' | 'dvorak';
  primaryMetric: 'wpm' | 'cpm' | 'kpm';
  isoLocale: string;
  currency: string;
  dateFormat: string;
}

export const SUPPORTED_LOCALES = [
  'en',
  'hi',
  'es',
  'fr',
  'de',
  'ja',
  'pt',
  'ru',
  'ar',
  'zh',
  'it',
  'ko',
  'id',
  'tr',
  'vi',
  'bn'
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = 'en';

export const LANGUAGES: Record<SupportedLocale, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    region: 'Global / North America',
    script: 'latin',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'wpm',
    isoLocale: 'en-US',
    currency: 'USD',
    dateFormat: 'MMM d, yyyy'
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    region: 'India & South Asia',
    script: 'devanagari',
    defaultKeyboard: 'devanagari',
    primaryMetric: 'wpm',
    isoLocale: 'hi-IN',
    currency: 'INR',
    dateFormat: 'd MMM, yyyy'
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    region: 'Spain & Latin America',
    script: 'latin',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'wpm',
    isoLocale: 'es-ES',
    currency: 'EUR',
    dateFormat: 'd MMM yyyy'
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    region: 'France & Francophonie',
    script: 'latin',
    defaultKeyboard: 'azerty',
    primaryMetric: 'wpm',
    isoLocale: 'fr-FR',
    currency: 'EUR',
    dateFormat: 'd MMM yyyy'
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    region: 'Germany, Austria & Switzerland',
    script: 'latin',
    defaultKeyboard: 'qwertz',
    primaryMetric: 'wpm',
    isoLocale: 'de-DE',
    currency: 'EUR',
    dateFormat: 'dd.MM.yyyy'
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    region: 'Japan',
    script: 'kana',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'cpm',
    isoLocale: 'ja-JP',
    currency: 'JPY',
    dateFormat: 'yyyy年M月d日'
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    region: 'Brazil & Portugal',
    script: 'latin',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'wpm',
    isoLocale: 'pt-BR',
    currency: 'BRL',
    dateFormat: 'd de MMM de yyyy'
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    region: 'Eastern Europe & Central Asia',
    script: 'cyrillic',
    defaultKeyboard: 'cyrillic',
    primaryMetric: 'wpm',
    isoLocale: 'ru-RU',
    currency: 'RUB',
    dateFormat: 'd MMM yyyy г.'
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    isRTL: true,
    region: 'Middle East & North Africa',
    script: 'arabic',
    defaultKeyboard: 'arabic',
    primaryMetric: 'wpm',
    isoLocale: 'ar-SA',
    currency: 'SAR',
    dateFormat: 'd MMM yyyy'
  },
  zh: {
    code: 'zh',
    name: 'Chinese Simplified',
    nativeName: '简体中文',
    flag: '🇨🇳',
    region: 'China & East Asia',
    script: 'hanzi',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'cpm',
    isoLocale: 'zh-CN',
    currency: 'CNY',
    dateFormat: 'yyyy年M月d日'
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    region: 'Italy',
    script: 'latin',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'wpm',
    isoLocale: 'it-IT',
    currency: 'EUR',
    dateFormat: 'd MMM yyyy'
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    region: 'South Korea',
    script: 'hangul',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'cpm',
    isoLocale: 'ko-KR',
    currency: 'KRW',
    dateFormat: 'yyyy년 M월 d일'
  },
  id: {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩',
    region: 'Southeast Asia',
    script: 'latin',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'wpm',
    isoLocale: 'id-ID',
    currency: 'IDR',
    dateFormat: 'd MMM yyyy'
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    region: 'Turkey & Central Asia',
    script: 'latin',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'wpm',
    isoLocale: 'tr-TR',
    currency: 'TRY',
    dateFormat: 'd MMM yyyy'
  },
  vi: {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    flag: '🇻🇳',
    region: 'Vietnam',
    script: 'latin',
    defaultKeyboard: 'qwerty',
    primaryMetric: 'wpm',
    isoLocale: 'vi-VN',
    currency: 'VND',
    dateFormat: 'd MMM, yyyy'
  },
  bn: {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇧🇩',
    region: 'Bangladesh & India',
    script: 'bengali',
    defaultKeyboard: 'bengali',
    primaryMetric: 'wpm',
    isoLocale: 'bn-BD',
    currency: 'BDT',
    dateFormat: 'd MMM, yyyy'
  }
};

export const LANGUAGE_LIST = Object.values(LANGUAGES);

export function getLanguageConfig(locale: string): LanguageConfig {
  const code = (locale || '').toLowerCase().split('-')[0] as SupportedLocale;
  return LANGUAGES[code] || LANGUAGES[DEFAULT_LOCALE];
}

export function isValidLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function isRTL(locale: string): boolean {
  return !!getLanguageConfig(locale).isRTL;
}
