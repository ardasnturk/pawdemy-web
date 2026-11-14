/**
 * Everything that changes when the app is renamed or released lives here.
 * Translations use the tokens `{app}`, `{email}`, `{developer}` and `{ios}`, which `src/i18n/index.tsx`
 * fills in, and the HTML entries use `%APP_NAME%`, which `vite.config.ts` fills in.
 */

/** App name. Renaming the app = changing this line. */
export const APP_NAME = "Pawly";
export const BUNDLE_ID = "com.ardasnturk.pawly";
export const DEVELOPER = "Arda Sentürk";
export const SUPPORT_EMAIL = "support@ardasnturk.com";
/** Oldest supported iOS version, shown in the copy. */
export const MIN_IOS = "17";

/**
 * App Store page, e.g. "https://apps.apple.com/app/id6834713847".
 * `null` = not released yet: store buttons render as a "Coming soon" label.
 */
export const APP_STORE_URL: string | null = null;

/** Public address of the site without a trailing slash; must match `public/CNAME`. */
export const SITE_URL: string | null = "https://pawly.ardasnturk.com";

export type ScreenSlot = "home" | "care" | "training" | "memories" | "ask" | "family" | "profile" | "species" | "nearby";

/**
 * Raw iPhone screenshots in `public/screens/<language>/<slot>.png` (1206×2622, demo data from the app's
 * `-demoData` launch argument). A missing language falls back to English.
 */
export function screenshot(language: string, slot: ScreenSlot): string {
  return `/screens/${language}/${slot}.png`;
}
