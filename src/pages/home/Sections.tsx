import { AppStoreButton } from "../../components/AppStoreButton";
import { Icon } from "../../components/Icon";
import { PhoneFrame, Screen } from "../../components/PhoneFrame";
import { Reveal } from "../../components/Reveal";
import type { ScreenSlot } from "../../config";
import { useLanguage, type FeatureSection } from "../../i18n";

const PASTELS = ["bg-peach", "bg-lilac", "bg-mint", "bg-sky"];

function Eyebrow({ children }: { children: string }) {
  return <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">{children}</p>;
}

export function Hero() {
  const { t } = useLanguage();
  const hero = t.home.hero;
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-peach/70 blur-3xl animate-blob dark:bg-brand/15" />
      <div aria-hidden="true" className="pointer-events-none absolute top-60 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-lilac/60 blur-3xl animate-blob dark:bg-accent/10" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal><Eyebrow>{hero.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-rounded)" }}>
              {hero.title} <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">{hero.highlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}><p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">{hero.subtitle}</p></Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreButton />
              <a href="#features" className="inline-flex items-center gap-2 font-semibold text-brand-dark hover:underline dark:text-brand-light">
                {hero.secondary} <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {hero.badges.map((badge) => (
                <li key={badge} className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1.5 text-sm font-medium shadow-card dark:bg-white/10">
                  <Icon name="check" className="h-4 w-4 text-good" /> {badge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal variant="scale" delay={120} className="relative mx-auto w-full max-w-[19rem]">
          <PhoneFrame className="animate-float">
            <Screen slot="home" alt={hero.screenshotAlt} eager />
          </PhoneFrame>
          <div className="absolute -left-20 top-24 hidden w-52 rounded-2xl bg-white/95 p-3.5 shadow-xl backdrop-blur sm:block dark:bg-gray-900/90">
            <p className="flex items-center gap-2 text-sm font-semibold"><span className="grid h-7 w-7 place-items-center rounded-lg bg-mint text-good"><Icon name="shield" className="h-4 w-4" /></span>{hero.chipVaccine}</p>
            <p className="mt-1 text-xs text-gray-500">{hero.chipVaccineBody}</p>
          </div>
          <div className="absolute -right-16 top-1/2 hidden rounded-2xl bg-white/95 px-3.5 py-3 text-sm font-semibold shadow-xl backdrop-blur sm:block dark:bg-gray-900/90">
            <span className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-peach align-middle text-xs font-bold text-ink">E</span>{hero.chipWalk}
          </div>
          <div className="absolute -left-10 bottom-20 hidden rounded-2xl bg-white/95 px-3.5 py-3 text-sm font-semibold shadow-xl backdrop-blur sm:block dark:bg-gray-900/90">
            <Icon name="pin" className="mr-1.5 inline h-4 w-4 text-accent" />{hero.chipMemory}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Stats() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-4 rounded-[2rem] bg-white p-6 shadow-card sm:grid-cols-4 sm:p-8 dark:bg-white/[0.04] dark:shadow-none">
        {t.home.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80} className="text-center">
            <p className="num text-4xl font-extrabold text-brand sm:text-5xl">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Overview() {
  const { t } = useLanguage();
  const overview = t.home.overview;
  const icons = ["shield", "calendar", "target", "heart", "chart", "megaphone"] as const;
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <Reveal className="max-w-2xl">
        <Eyebrow>{overview.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{overview.title}</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{overview.subtitle}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {overview.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <div className="h-full rounded-[1.75rem] bg-white p-6 shadow-card transition hover:-translate-y-1 dark:bg-white/[0.04] dark:shadow-none">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${PASTELS[index % PASTELS.length]} text-ink`}>
                <Icon name={icons[index % icons.length]} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Text on one side and a framed screenshot on the other, alternating sides. */
export function Feature({ id, section, slot, flip = false, tint }: { id?: string; section: FeatureSection; slot: ScreenSlot; flip?: boolean; tint: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div className={`grid items-center gap-12 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal variant={flip ? "right" : "left"}>
          <Eyebrow>{section.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{section.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{section.text}</p>
          <ul className="mt-7 space-y-3">
            {section.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand-dark dark:text-brand-light">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-gray-800 dark:text-gray-200">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal variant="scale" className="relative mx-auto w-full max-w-[18rem]">
          <div aria-hidden="true" className={`absolute inset-x-[-18%] inset-y-[8%] rounded-[3rem] ${tint} dark:opacity-20`} />
          <PhoneFrame className="relative">
            <Screen slot={slot} alt={section.screenshotAlt} />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  );
}

export function Privacy() {
  const { t } = useLanguage();
  const privacy = t.home.privacy;
  const icons = ["phone", "lock", "person"] as const;
  return (
    <section id="privacy" className="scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-ink px-6 py-16 text-white sm:px-12">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-light">{privacy.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{privacy.title}</h2>
          <p className="mt-4 text-lg text-gray-300">{privacy.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {privacy.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="h-full rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <Icon name={icons[index]} className="h-7 w-7 text-brand-light" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pro() {
  const { t } = useLanguage();
  const pro = t.home.pro;
  return (
    <section id="pro" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>{pro.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{pro.title}</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{pro.subtitle}</p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2rem] bg-white p-8 shadow-card dark:bg-white/[0.04] dark:shadow-none">
            <h3 className="text-2xl font-bold">{pro.free}</h3>
            <ul className="mt-6 space-y-3">
              {pro.freeItems.map((item) => (
                <li key={item} className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 text-good" />{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-[2rem] bg-gradient-to-br from-brand to-accent p-8 text-white shadow-xl shadow-brand/30">
            <h3 className="flex items-center gap-2 text-2xl font-bold"><Icon name="sparkles" className="h-6 w-6" />{pro.proTitle}</h3>
            <ul className="mt-6 space-y-3">
              {pro.proItems.map((item) => (
                <li key={item} className="flex items-center gap-3"><Icon name="check" className="h-5 w-5" />{item}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/85">{pro.trial}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
      <Reveal><h2 className="text-center text-4xl font-bold tracking-tight">{t.home.faq.title}</h2></Reveal>
      <div className="mt-10 space-y-3">
        {t.home.faq.items.map((item) => (
          <details key={item.q} className="group rounded-2xl bg-white p-5 shadow-card dark:bg-white/[0.04] dark:shadow-none">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
              {item.q}
              <Icon name="chevron" className="h-4 w-4 shrink-0 transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CallToAction() {
  const { t } = useLanguage();
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal variant="scale" className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand via-brand-dark to-accent px-6 py-16 text-center text-white">
        <img src="/assets/icon.png" alt="" className="mx-auto h-20 w-20 rounded-[1.4rem] shadow-xl" />
        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">{t.home.cta.title}</h2>
        <p className="mt-4 text-lg text-white/85">{t.home.cta.subtitle}</p>
        <div className="mt-8"><AppStoreButton inverted /></div>
      </Reveal>
    </section>
  );
}
