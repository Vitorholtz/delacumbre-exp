import type { Metadata } from "next";
import CenasLamentaveis from "@/components/CenasLamentaveis";
import ExpeditionHeader from "@/components/ExpeditionHeader";
import GuidePresentation from "@/components/GuidePresentation";
import ChecklistSection from "./_components/ChecklistSection";
import Hero from "./_components/Hero";
import IntroSection from "./_components/IntroSection";
import ItinerarySection from "./_components/ItinerarySection";
import LightContentSection from "./_components/LightContentSection";
import MapSection from "./_components/MapSection";
import PricingSection from "./_components/PricingSection";
import TextBlockSection from "./_components/TextBlockSection";
import TravelInfoSection from "./_components/TravelInfoSection";

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
      <IntroSection />
      <TravelInfoSection />
      <MapSection />
      <LightContentSection />
      <TextBlockSection />
      <CenasLamentaveis />
      <GuidePresentation />
      <ItinerarySection />
      <ChecklistSection
        headingPrefix="O que "
        headingHighlight="está"
        headingSuffix=" incluso?"
        tone="positive"
        columns={INCLUDED_COLUMNS}
      />
      <ChecklistSection
        headingPrefix="O que "
        headingHighlight="não"
        headingSuffix=" está incluso"
        tone="negative"
        columns={NOT_INCLUDED_COLUMNS}
      />
      <PricingSection />
    </main>
  );
}
