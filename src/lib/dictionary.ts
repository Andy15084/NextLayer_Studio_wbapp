import 'server-only';
import type { Locale } from '../../middleware';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  sk: () => import('@/dictionaries/sk.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  cs: () => import('@/dictionaries/cs.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
}; 