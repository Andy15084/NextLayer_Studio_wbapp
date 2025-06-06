import type { Locale } from "../../middleware";

export interface LocaleNavigationParams {
  locale: Locale;
  pathname: string;
  locales: readonly string[];
}

/**
 * Creates a new pathname with the locale changed
 */
export function pathnameWithLocale({
  locale,
  pathname,
  locales,
}: LocaleNavigationParams): string {
  // Check if the pathname already has a locale
  const pathSegments = pathname.split('/').filter(Boolean);
  const hasLocalePrefix = locales.includes(pathSegments[0]);

  // Remove the locale prefix if it exists
  const pathWithoutLocale = hasLocalePrefix
    ? `/${pathSegments.slice(1).join('/')}`
    : pathname;

  // Return the new path with the new locale
  return `/${locale}${pathWithoutLocale}`;
} 