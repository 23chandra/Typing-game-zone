import type { GameMetadata } from './gameRegistry';
import { GAME_REGISTRY, ALL_GAMES } from './gameRegistry';
import type { GameTranslation, GamesLocaleData } from './types';

import { enGames } from './locales/en';
import { hiGames } from './locales/hi';
import { esGames } from './locales/es';
import { frGames } from './locales/fr';
import { deGames } from './locales/de';
import { jaGames } from './locales/ja';
import { ptGames } from './locales/pt';
import { ruGames } from './locales/ru';
import { arGames } from './locales/ar';
import { zhGames } from './locales/zh';
import { itGames } from './locales/it';
import { koGames } from './locales/ko';
import { idGames } from './locales/id';
import { trGames } from './locales/tr';
import { viGames } from './locales/vi';
import { bnGames } from './locales/bn';

export * from './types';

export const GAMES_LOCALES: Record<string, GamesLocaleData> = {
  en: enGames,
  hi: hiGames,
  es: esGames,
  fr: frGames,
  de: deGames,
  ja: jaGames,
  pt: ptGames,
  ru: ruGames,
  ar: arGames,
  zh: zhGames,
  it: itGames,
  ko: koGames,
  id: idGames,
  tr: trGames,
  vi: viGames,
  bn: bnGames
};

/**
 * Returns the localized metadata fields for a given game ID and locale.
 * Falls back to English if the translation is missing.
 */
export function getGameTranslation(gameId: string, locale: string = 'en'): GameTranslation {
  const norm = (locale || 'en').toLowerCase().trim();
  const localeData = GAMES_LOCALES[norm] || GAMES_LOCALES.en;
  if (localeData && localeData[gameId]) {
    return localeData[gameId];
  }
  return enGames[gameId] || {
    title: gameId,
    description: '',
    categoryName: 'Arcade',
    difficulty: 'Intermediate',
    tags: []
  };
}

export type LocalizedGameMetadata = GameMetadata & {
  originalTitle: string;
};

/**
 * Merges localized fields (title, description, categoryName, difficulty, tags) into a GameMetadata object.
 */
export function getLocalizedGame(game: GameMetadata, locale: string = 'en'): LocalizedGameMetadata {
  const trans = getGameTranslation(game.id, locale);
  return {
    ...game,
    title: trans.title || game.title,
    description: trans.description || game.description,
    categoryName: trans.categoryName || game.categoryName,
    difficulty: (trans.difficulty || game.difficulty) as any,
    tags: trans.tags && trans.tags.length > 0 ? trans.tags : game.tags,
    originalTitle: game.title
  };
}

/**
 * Returns all games localized for the given locale.
 */
export function getLocalizedGames(games: GameMetadata[] = ALL_GAMES, locale: string = 'en'): LocalizedGameMetadata[] {
  return games.map(g => getLocalizedGame(g, locale));
}

/**
 * Returns a single localized game by its ID.
 */
export function getLocalizedGameById(id: string, locale: string = 'en'): LocalizedGameMetadata | undefined {
  const rawGame = GAME_REGISTRY[id];
  if (!rawGame) return undefined;
  return getLocalizedGame(rawGame, locale);
}
