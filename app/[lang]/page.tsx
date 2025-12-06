import Image from "next/image";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import ServiceAreas from "../components/ServiceAreas";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import { getDictionary } from "../get-dictionary";
import { Locale } from "../i18n-config";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main>
      <Hero dict={dict} />
      <Services dict={dict} />
      <WhyChooseUs dict={dict} />
      <HowItWorks dict={dict} />
      <ServiceAreas dict={dict} />
      <FAQ dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
