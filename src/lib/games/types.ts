export interface GameTranslation {
  title: string;
  description: string;
  categoryName: string;
  difficulty: string;
  tags: string[];
}

export type GamesLocaleData = Record<string, GameTranslation>;
