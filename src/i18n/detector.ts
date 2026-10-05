// Language Detection & Persistence for Typing Game Zone

import { DEFAULT_LOCALE, type SupportedLocale, isValidLocale } from './config';
import { LANG_STORAGE_KEY, getLocaleFromPath } from './utils';

/**
 * Detect language following strict hierarchy:
 * 1. Explicit URL locale
 * 2. User's saved localStorage preference
 * 3. Browser language
 * 4. Default to 'en'
 */
export function detectLanguage(urlPathname?: string): SupportedLocale {
  // 1. Explicit URL locale
  if (urlPathname) {
    const urlLocale = getLocaleFromPath(urlPathname);
    if (urlLocale && urlLocale !== DEFAULT_LOCALE) {
      return urlLocale;
    }
  }

  if (typeof window !== 'undefined') {
    // Check current window location
    const pathLocale = getLocaleFromPath(window.location.pathname);
    if (pathLocale && pathLocale !== DEFAULT_LOCALE) {
      return pathLocale;
    }

    // 2. User's saved localStorage preference
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && isValidLocale(saved)) {
        return saved;
      }
    } catch {}

    // 3. Browser language (navigator.languages)
    try {
      if (navigator.languages && navigator.languages.length > 0) {
        for (const raw of navigator.languages) {
          const code = raw.toLowerCase().split('-')[0];
          if (isValidLocale(code)) {
            return code;
          }
        }
      }
      if (navigator.language) {
        const code = navigator.language.toLowerCase().split('-')[0];
        if (isValidLocale(code)) {
          return code;
        }
      }
    } catch {}
  }

  return DEFAULT_LOCALE;
}

/**
 * Save user language choice without affecting theme or audio settings
 */
export function saveLanguagePreference(locale: SupportedLocale): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, locale);
  } catch {}
}
