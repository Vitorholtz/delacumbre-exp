import Reveal from "@delacumbre/design-system/components/layout/Reveal";
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

const FEATURED_EXPEDITION_HREF = "/expedicoes/holiday-camboja-bangkok";
const FEATURED_EXPEDITION_NAME = "Holiday in Camboja & Bangkok";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Reveal>
        <Carousel />
      </Reveal>
      <Reveal>
        <GuidePresentation />
      </Reveal>
      {/* HowToBook cuida da própria aparição por dentro (useReveal) — o
          track dele tem 300vh e não pode ser desfocado inteiro. */}
      <HowToBook />
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <ContactForm />
      </Reveal>
      <Reveal>
        <CenasLamentaveis />
      </Reveal>
      <Reveal>
        <CollectiblesSection
          expeditionName={FEATURED_EXPEDITION_NAME}
          vacancies="5/10 vagas"
        />
      </Reveal>
      <Reveal>
        <UltimaChamada
          expeditionHref={FEATURED_EXPEDITION_HREF}
          expeditionName={FEATURED_EXPEDITION_NAME}
          stampSrc="/ultima-chamada/selo-expedicao.png"
          stampAlt="Selo da Expedição Holiday in Camboja & Bangkok — Ásia, Abril, 2027"
          pdfHref="#"
        />
      </Reveal>
      <SiteFooter />
    </main>
  );
}
