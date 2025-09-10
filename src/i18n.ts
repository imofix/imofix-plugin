import de from "./locales/de/default.json";
import en from "./locales/en/default.json";
import fr from "./locales/en/default.json";
import it from "./locales/en/default.json";

const locales = {
  de,
  en,
  fr,
  it,
};

export type SupportedLanguage = "de" | "en" | "fr" | "it";

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  "de",
  "en",
  "fr",
  "it",
];

export const DEFAULT_LANGUAGE: SupportedLanguage = "de";

export function detectBrowserLanguage(): SupportedLanguage {
  for (let i = 0; i < SUPPORTED_LANGUAGES.length; i++) {
    const w = SUPPORTED_LANGUAGES[i];

    if (
      window.location.pathname.indexOf(`/${w}/`) > -1 ||
      window.location.search.indexOf(`lang=${w}`) > -1
    ) {
      return w;
    }
  }

  const navigatorLanguages = window.navigator.languages.map(
    (l) => l.split("-")[0],
  ) as SupportedLanguage[];

  for (let i = 0; i < navigatorLanguages.length; i++) {
    if (SUPPORTED_LANGUAGES.indexOf(navigatorLanguages[i]) > -1) {
      return navigatorLanguages[i];
    }
  }

  return DEFAULT_LANGUAGE;
}

export function getT(lang: string) {
  const l = SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)
    ? (lang as SupportedLanguage)
    : SUPPORTED_LANGUAGES[0];

  return function t(
    key: keyof (typeof locales)[(typeof SUPPORTED_LANGUAGES)[0]],
  ) {
    return locales[l][key];
  };
}
