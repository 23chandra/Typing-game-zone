import type { SupportedLocale } from '../../i18n/config';

export type FAQCategoryType = 'games' | 'speed' | 'technique' | 'keyboards' | 'practice';

export interface FAQItem {
  id: string;
  question: string;
  category: FAQCategoryType;
  categoryLabel: string;
  shortAnswer: string;
  answerHtml: string;
  keywords: string[];
}

export interface FAQCategory {
  id: 'all' | FAQCategoryType;
  label: string;
  count: number;
  icon: string;
}

export interface FAQUIStrings {
  badge: string;
  defaultTitle: string;
  defaultSubtitle: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  expandAll: string;
  collapseAll: string;
  showing: string;
  of: string;
  questions: string;
  categoryLabel: string;
  allQuestions: string;
  related: string;
  noResultsTitle: string;
  noResultsDesc: string;
  resetFilters: string;
}
