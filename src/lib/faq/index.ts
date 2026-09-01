import type { FAQItem, FAQCategory, FAQCategoryType, FAQUIStrings } from './types';
import { getLocalizedFAQUI, getLocalizedFAQCategories } from './ui';

import { enFAQ } from './locales/en';
import { hiFAQ } from './locales/hi';
import { esFAQ } from './locales/es';
import { frFAQ } from './locales/fr';
import { deFAQ } from './locales/de';
import { jaFAQ } from './locales/ja';
import { ptFAQ } from './locales/pt';
import { ruFAQ } from './locales/ru';
import { arFAQ } from './locales/ar';
import { zhFAQ } from './locales/zh';
import { itFAQ } from './locales/it';
import { koFAQ } from './locales/ko';
import { idFAQ } from './locales/id';
import { trFAQ } from './locales/tr';
import { viFAQ } from './locales/vi';
import { bnFAQ } from './locales/bn';

export * from './types';
export * from './ui';

export const FAQ_LOCALES: Record<string, FAQItem[]> = {
  en: enFAQ,
  hi: hiFAQ,
  es: esFAQ,
  fr: frFAQ,
  de: deFAQ,
  ja: jaFAQ,
  pt: ptFAQ,
  ru: ruFAQ,
  ar: arFAQ,
  zh: zhFAQ,
  it: itFAQ,
  ko: koFAQ,
  id: idFAQ,
  tr: trFAQ,
  vi: viFAQ,
  bn: bnFAQ,
};

/**
 * Returns the localized FAQ items for the given locale.
 * Falls back to English if the locale is not available.
 */
export function getLocalizedFAQData(locale: string = 'en'): FAQItem[] {
  const normalizedLocale = (locale || 'en').toLowerCase().trim();
  return FAQ_LOCALES[normalizedLocale] || FAQ_LOCALES.en || enFAQ;
}

/**
 * Default English FAQ data for backward compatibility
 */
export const FAQ_DATA: FAQItem[] = enFAQ;

/**
 * Default English FAQ categories for backward compatibility
 */
export const FAQ_CATEGORIES: FAQCategory[] = getLocalizedFAQCategories('en');

/**
 * Generates Schema.org FAQPage JSON-LD structured data
 */
export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.shortAnswer + ' ' + item.answerHtml.replace(/<[^>]*>/g, '')
      }
    }))
  };
}
