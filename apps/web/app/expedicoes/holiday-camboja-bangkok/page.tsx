import type { Metadata } from "next";
import CenasLamentaveis from "@/components/CenasLamentaveis";
import ExpeditionHeader from "@/components/ExpeditionHeader";
import GuidePresentation from "@/components/GuidePresentation";
import Hero from "./_components/Hero";
import IntroSection from "./_components/IntroSection";
import LightContentSection from "./_components/LightContentSection";
import MapSection from "./_components/MapSection";
import TextBlockSection from "./_components/TextBlockSection";
import TravelInfoSection from "./_components/TravelInfoSection";

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
    </main>
  );
}
