import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import GuidePresentation from "@/components/GuidePresentation";
import HowToBook from "@/components/HowToBook";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import CenasLamentaveis from "@/components/CenasLamentaveis";
import CollectiblesSection from "@/components/CollectiblesSection";
import UltimaChamada from "@/components/UltimaChamada";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Carousel />
      <GuidePresentation />
      <HowToBook />
      <Faq />
      <ContactForm />
      <CenasLamentaveis />
      <CollectiblesSection />
      <UltimaChamada />
      <SiteFooter />
    </main>
  );
}
