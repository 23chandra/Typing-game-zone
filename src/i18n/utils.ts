// i18n Utilities for Typing Game Zone

import { SUPPORTED_LOCALES, DEFAULT_LOCALE, getLanguageConfig, type SupportedLocale } from './config';
import { LOCALES, getDictionary } from './locales';
import type { TranslationSchema } from './schema';

export const LANG_STORAGE_KEY = 'typing_game_zone_lang';

/**
 * Nested key path type helper (e.g. 'nav.games', 'st.wpm', 'hero.title1')
 */
type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends Record<string, any>
    ? `${K}.${NestedKeyOf<T[K]>}`
    : K;
}[keyof T & string];

export type TranslationKey = NestedKeyOf<TranslationSchema>;

/**
 * Access translated string with safe fallback and interpolation
 */
export function t(
  path: string,
  locale: string = DEFAULT_LOCALE,
  params?: Record<string, string | number>
): string {
  const dict = getDictionary(locale);
  const enDict = LOCALES.en;

  const parts = path.split('.');
  let current: any = dict;
  let fallback: any = enDict;

  for (const part of parts) {
    current = current ? current[part] : undefined;
    fallback = fallback ? fallback[part] : undefined;
  }

  let text = typeof current === 'string' ? current : typeof fallback === 'string' ? fallback : path;

  if (params && typeof text === 'string') {
    for (const [key, val] of Object.entries(params)) {
      text = text.replace(new RegExp(`{${key}}`, 'g'), String(val));
    }
  }

  return text;
}

/**
 * Generate a localized relative URL for any internal route
 */
export function getLocaleUrl(path: string, targetLocale: string = DEFAULT_LOCALE): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const segments = cleanPath.split('/').filter(Boolean);

  // If first segment is a locale code, remove it
  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as SupportedLocale)) {
    segments.shift();
  }

  const remainingPath = segments.join('/');
  const locale = (targetLocale || DEFAULT_LOCALE).toLowerCase().split('-')[0];

  return `/${locale}/${remainingPath ? remainingPath + '/' : ''}`.replace(/\/+/g, '/');
}

/**
 * Extract locale from URL pathname
 */
export function getLocaleFromPath(pathname: string): SupportedLocale {
  const segments = (pathname || '/').split('/').filter(Boolean);
  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as SupportedLocale)) {
    return segments[0] as SupportedLocale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Format numbers according to locale conventions
 */
export function formatNumber(num: number, locale: string = DEFAULT_LOCALE): string {
  const config = getLanguageConfig(locale);
  try {
    return new Intl.NumberFormat(config.isoLocale).format(num);
  } catch {
    return num.toLocaleString();
  }
}

/**
 * Format date according to locale conventions
 */
export function formatDate(
  date: Date | string | number,
  locale: string = DEFAULT_LOCALE,
  options?: Intl.DateTimeFormatOptions
): string {
  const config = getLanguageConfig(locale);
  const d = typeof date === 'object' ? date : new Date(date);
  try {
    return new Intl.DateTimeFormat(config.isoLocale, options || {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(d);
  } catch {
    return d.toLocaleDateString();
  }
}

/**
 * Generate full reciprocal hreflang links for SEO
 */
export function getHreflangAlternates(pathname: string, siteUrl: string = 'https://typinggamezone.com') {
  const cleanSegments = pathname.split('/').filter(Boolean);
  if (cleanSegments.length > 0 && SUPPORTED_LOCALES.includes(cleanSegments[0] as SupportedLocale)) {
    cleanSegments.shift();
  }
  const remaining = cleanSegments.join('/');
  const suffix = remaining ? `${remaining}/` : '';

  const links: Array<{ hreflang: string; href: string }> = SUPPORTED_LOCALES.map(loc => ({
    hreflang: loc,
    href: `${siteUrl}/${loc}/${suffix}`
  }));

  links.push({
    hreflang: 'x-default',
    href: `${siteUrl}/en/${suffix}`
  });

  return links;
}
