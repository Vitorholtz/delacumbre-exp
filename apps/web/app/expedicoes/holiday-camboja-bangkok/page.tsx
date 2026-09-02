import type { Metadata } from "next";
import ExpeditionHeader from "@/components/ExpeditionHeader";
import Hero from "./_components/Hero";
import IntroSection from "./_components/IntroSection";
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
    </main>
  );
}
