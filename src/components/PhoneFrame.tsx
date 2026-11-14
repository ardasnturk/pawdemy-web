import { useEffect, useState, type ReactNode } from "react";
import { screenshot, type ScreenSlot } from "../config";
import { useLanguage } from "../i18n";

/** An iPhone-shaped frame. Holds a screenshot or an HTML mock of a screen. */
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[3rem] bg-gray-950 p-[0.55rem] shadow-2xl shadow-orange-950/25 ring-1 ring-black/10 dark:shadow-black/60 dark:ring-white/15 ${className}`}>
      <div className="@container relative aspect-[1206/2622] w-full overflow-hidden rounded-[2.5rem] bg-surface dark:bg-night">
        {children}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[1.4%] h-[3.6%] w-[31%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

/** A screenshot in the visitor's language, falling back to English. */
export function Screen({ slot, alt, className = "", eager = false }: { slot: ScreenSlot; alt: string; className?: string; eager?: boolean }) {
  const { language } = useLanguage();
  const sources = [screenshot(language, slot), screenshot("en", slot)];
  const [attempt, setAttempt] = useState(0);
  useEffect(() => setAttempt(0), [language, slot]);
  if (attempt >= sources.length) return null;
  return (
    <img
      src={sources[attempt]}
      alt={alt}
      width={1206}
      height={2622}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setAttempt((current) => current + 1)}
      className={`block h-full w-full object-cover ${className}`}
    />
  );
}
