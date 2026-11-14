import { useLanguage } from "../i18n";
import { CallToAction, Faq, Feature, Hero, Overview, Privacy, Pro, Stats } from "./home/Sections";

export function Home() {
  const { t } = useLanguage();
  const home = t.home;
  return (
    <>
      <Hero />
      <Stats />
      <Overview />
      <Feature id="care" section={home.care} slot="care" tint="bg-mint" />
      <Feature section={home.training} slot="training" flip tint="bg-sky" />
      <Feature id="memories" section={home.memories} slot="memories" tint="bg-peach" />
      <Feature section={home.ask} slot="ask" flip tint="bg-lilac" />
      <Feature section={home.family} slot="family" tint="bg-peach" />
      <Feature section={home.onboarding} slot="profile" flip tint="bg-mint" />
      <Privacy />
      <Pro />
      <Faq />
      <CallToAction />
    </>
  );
}
