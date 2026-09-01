import type { TranslationSchema } from '../schema';
import type { SupportedLocale } from '../config';

import { en } from './en';
import { hi } from './hi';
import { es } from './es';
import { fr } from './fr';
import { de } from './de';
import { ja } from './ja';
import { pt } from './pt';
import { ru } from './ru';
import { ar } from './ar';
import { zh } from './zh';
import { it } from './it';
import { ko } from './ko';
import { id } from './id';
import { tr } from './tr';
import { vi } from './vi';
import { bn } from './bn';

export const LOCALES: Record<SupportedLocale, TranslationSchema> = {
  en,
  hi,
  es,
  fr,
  de,
  ja,
  pt,
  ru,
  ar,
  zh,
  it,
  ko,
  id,
  tr,
  vi,
  bn
};

export function getDictionary(locale: string): TranslationSchema {
  const code = (locale || '').toLowerCase().split('-')[0] as SupportedLocale;
  return LOCALES[code] || LOCALES.en;
}
