export const LANGUAGES = ["en", "tr"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  tr: "Türkçe",
};

/** Locale used for number formatting. */
export const LOCALES: Record<Language, string> = { en: "en-US", tr: "tr-TR" };

/*
 * Tokens available in every text (filled in by `src/i18n/index.tsx` from `src/config.ts`):
 * `{app}` app name, `{email}` support address, `{developer}` developer name, `{ios}` minimum iOS version.
 * Never write the app name out in a translation.
 */

export interface Item {
  title: string;
  text: string;
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

/** Texts shared by every page: header, footer, legal and support pages. Lives in `src/i18n/<language>.ts`. */
export interface BaseDictionary {
  meta: { title: string; description: string };
  nav: {
    features: string;
    care: string;
    memories: string;
    pro: string;
    privacy: string;
    faq: string;
    download: string;
    comingSoon: string;
    language: string;
    menu: string;
    skip: string;
  };
  /** Store button: `small`/`large` when the app is live, `soonSmall`/`soonLarge` before release. */
  appStore: { small: string; large: string; soonSmall: string; soonLarge: string };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    privacy: string;
    terms: string;
    support: string;
    rights: string;
    trademarks: string;
  };
  legal: {
    updated: string;
    back: string;
    privacyTitle: string;
    privacyIntro: string;
    privacySections: LegalSection[];
    termsTitle: string;
    termsIntro: string;
    termsSections: LegalSection[];
  };
  support: {
    title: string;
    intro: string;
    emailLabel: string;
    emailHint: string;
    topics: Item[];
  };
}

/** A feature section of the landing page: text on one side, a screenshot on the other. */
export interface FeatureSection {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  screenshotAlt: string;
}

/** Texts of the landing page. Lives in `src/i18n/home/<language>.ts`. */
export interface HomeDictionary {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    secondary: string;
    badges: string[];
    screenshotAlt: string;
    chipVaccine: string;
    chipVaccineBody: string;
    chipWalk: string;
    chipMemory: string;
  };
  stats: { value: string; label: string }[];
  /** Small grid of everything the app does. */
  overview: { eyebrow: string; title: string; subtitle: string; items: Item[] };
  care: FeatureSection;
  training: FeatureSection;
  memories: FeatureSection;
  ask: FeatureSection;
  family: FeatureSection;
  nearby: FeatureSection;
  onboarding: FeatureSection;
  privacy: { eyebrow: string; title: string; subtitle: string; items: Item[] };
  pro: { eyebrow: string; title: string; subtitle: string; free: string; freeItems: string[]; proTitle: string; proItems: string[]; trial: string };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; subtitle: string };
}

export interface Dictionary extends BaseDictionary {
  home: HomeDictionary;
}
