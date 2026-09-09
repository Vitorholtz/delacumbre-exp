import type { Metadata } from "next";
import Reveal from "@delacumbre/design-system/components/layout/Reveal";
import CenasLamentaveis from "@/components/CenasLamentaveis";
import CollectiblesSection from "@/components/CollectiblesSection";
import ContactForm from "@/components/ContactForm";
import ExpeditionHeader from "@/components/ExpeditionHeader";
import GuidePresentation from "@/components/GuidePresentation";
import SiteFooter from "@/components/SiteFooter";
import UltimaChamada from "@/components/UltimaChamada";
import ChecklistSection from "./_components/ChecklistSection";
import Curtain from "./_components/Curtain";
import ClosingStoriesSection from "./_components/ClosingStoriesSection";
import Hero from "./_components/Hero";
import IntroSection from "./_components/IntroSection";
import ItinerarySection from "./_components/ItinerarySection";
import LightContentSection from "./_components/LightContentSection";
import MapSection from "./_components/MapSection";
import PricingSection from "./_components/PricingSection";
import TextBlockSection from "./_components/TextBlockSection";
import TransitionSection from "./_components/TransitionSection";
import TravelInfoSection from "./_components/TravelInfoSection";

const EXPEDITION_HREF = "/expedicoes/holiday-camboja-bangkok";
const EXPEDITION_NAME = "Holiday in Camboja & Bangkok";

const INCLUDED_COLUMNS: [string[], string[]] = [
  [
    "Seguro saúde",
    "Todas as hospedagens",
    "Todos os transportes urbanos",
    "Traslados de aeroporto (ida e volta)",
    "Todos os transportes entre cidades",
    "Ingressos para todos os museus e templos",
  ],
  [
    "Ingressos para a reserva ecológica de elefantes",
    "Ingressos para as lutas de Muay Thai",
    "Um carregador (30 munições) de AK-47 ou M-16",
    "Motoristas",
    "Guias locais",
    "Assessoria para compra de voos e suporte para dúvidas",
  ],
];

const NOT_INCLUDED_COLUMNS: [string[], string[]] = [
  [
    "Voo seu país → Bangkok; Bangkok → seu país",
    "Voo Bangkok → Phnom Penh; Phnom Penh → Bangkok",
    "Visto de entrada no Camboja (30 USD)",
  ],
  [
    "Prática de tiro com demais armas e objetos para explodir (adicional opcional)",
    "Tatuagem do Mike Tyson no rosto (opcional)",
  ],
];

export const metadata: Metadata = {
  title: "Holiday in Camboja & Bangkok | Delacumbre EXP",
  description:
    "Expedição contraturística pelo Camboja e Bangkok — Ásia, abril de 2027.",
};

export default function HolidayCambojaBangkok() {
  return (
    <main>
      <ExpeditionHeader />
      <Hero />
      <Reveal>
        <IntroSection />
      </Reveal>
      {/* Sem Reveal aqui, mesmo motivo da ClosingStoriesSection: com 2 telas
          de altura, um Reveal em volta da seção inteira deixaria a grade de
          cards sem animação nenhuma. O efeito foi pra dentro, por bloco. */}
      <TravelInfoSection />
      <Reveal>
        <MapSection />
      </Reveal>
      {/* Cortina: a TransitionSection trava na tela e a LightContentSection
          sobe por cima dela, entrando pela borda rasgada. A subida é a
          aparição desta seção, então ela não leva Reveal — os dois efeitos
          juntos deixariam a entrada embolada. */}
      <Curtain
        pinned={
          <Reveal>
            <TransitionSection />
          </Reveal>
        }
      >
        <LightContentSection />
      </Curtain>
      <Reveal>
        <TextBlockSection />
      </Reveal>
      <Reveal>
        <CenasLamentaveis />
      </Reveal>
      <Reveal>
        <GuidePresentation />
      </Reveal>
      <Reveal>
        <ItinerarySection />
      </Reveal>
      <Reveal>
        <ChecklistSection
          headingPrefix="O que "
          headingHighlight="está"
          headingSuffix=" incluso?"
          tone="positive"
          columns={INCLUDED_COLUMNS}
        />
      </Reveal>
      <Reveal>
        <ChecklistSection
          headingPrefix="O que "
          headingHighlight="não"
          headingSuffix=" está incluso"
          tone="negative"
          columns={NOT_INCLUDED_COLUMNS}
        />
      </Reveal>
      <Reveal>
        <PricingSection />
      </Reveal>
      <Reveal>
        <ContactForm />
      </Reveal>
      {/* Sem Reveal aqui: com 3,4 telas de altura, um Reveal em volta da
          seção inteira só animaria a primeira delas. O efeito foi pra dentro,
          num Reveal por bloco — ver ClosingStoriesSection.tsx. */}
      <ClosingStoriesSection />
      <Reveal>
        <CollectiblesSection
          expeditionName={EXPEDITION_NAME}
          vacancies="5/10 vagas"
        />
      </Reveal>
      <Reveal>
        <UltimaChamada
          expeditionHref={EXPEDITION_HREF}
          expeditionName={EXPEDITION_NAME}
          stampSrc="/ultima-chamada/selo-expedicao.png"
          stampAlt="Selo da Expedição Holiday in Camboja & Bangkok — Ásia, Abril, 2027"
          pdfHref="#"
        />
      </Reveal>
      <SiteFooter />
    </main>
  );
}
