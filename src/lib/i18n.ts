// Internationalization (i18n) Engine Adapter for Typing Game Zone
// Powered by modular dictionaries in src/i18n/

import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  LANGUAGES,
  LANGUAGE_LIST,
  getLanguageConfig,
  isRTL as checkIsRTL,
  type SupportedLocale
} from '../i18n/config';
import {
  t as translateHelper,
  formatNumber as formatNumHelper,
  formatDate as formatDateHelper,
  getLocaleUrl,
  getLocaleFromPath
} from '../i18n/utils';
import { detectLanguage, saveLanguagePreference } from '../i18n/detector';

export interface LanguageDef {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  isRTL?: boolean;
  region?: string;
}

export const SUPPORTED_LANGUAGES: LanguageDef[] = LANGUAGE_LIST.map(lang => ({
  code: lang.code,
  name: lang.name,
  nativeName: lang.nativeName,
  flag: lang.flag,
  isRTL: lang.isRTL,
  region: lang.region
}));

export function getLanguageDef(code: string): LanguageDef {
  const conf = getLanguageConfig(code);
  return {
    code: conf.code,
    name: conf.name,
    nativeName: conf.nativeName,
    flag: conf.flag,
    isRTL: conf.isRTL,
    region: conf.region
  };
}

export function isRTLLanguage(code?: string): boolean {
  const langCode = code || getCurrentLanguage();
  return checkIsRTL(langCode);
}

export function t(key: string, lang?: string): string {
  const curLang = lang || getCurrentLanguage();
  return translateHelper(key, curLang);
}

export function formatNumber(num: number, lang?: string): string {
  const targetLang = lang || getCurrentLanguage();
  return formatNumHelper(num, targetLang);
}

export function formatDate(date: Date | string | number, lang?: string, options?: Intl.DateTimeFormatOptions): string {
  const targetLang = lang || getCurrentLanguage();
  return formatDateHelper(date, targetLang, options);
}

export function detectBrowserLanguage(): string {
  return detectLanguage();
}

export function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  return detectLanguage(window.location.pathname);
}

export function setLanguage(langCode: string, navigate: boolean = true): void {
  const code = (langCode || DEFAULT_LOCALE).toLowerCase().split('-')[0] as SupportedLocale;
  const def = getLanguageDef(code);

  saveLanguagePreference(code);

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('dir', def.isRTL ? 'rtl' : 'ltr');
  }

  applyTranslationsToDOM(code);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('typing:language-change', {
      detail: { lang: code, def }
    }));

    if (navigate) {
      const currentPath = window.location.pathname;
      const targetUrl = getLocaleUrl(currentPath, code);
      if (window.location.pathname !== targetUrl) {
        window.location.href = targetUrl;
      }
    }
  }
}

export function applyTranslationsToDOM(lang?: string): void {
  if (typeof document === 'undefined') return;
  const curLang = lang || getCurrentLanguage();
  const def = getLanguageDef(curLang);

  document.documentElement.setAttribute('lang', curLang);
  document.documentElement.setAttribute('dir', def.isRTL ? 'rtl' : 'ltr');

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
    const def = getLanguageDef(curLang);
    document.documentElement.setAttribute('lang', curLang);
    document.documentElement.setAttribute('dir', def.isRTL ? 'rtl' : 'ltr');
    applyTranslationsToDOM(curLang);
  }
}

export { SUPPORTED_LOCALES, DEFAULT_LOCALE, LANGUAGES, getLocaleUrl, getLocaleFromPath };
