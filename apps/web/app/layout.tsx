import type { Metadata } from "next";
import {
  berringer,
  berringerAged,
  kanit,
  materialSymbolsSharp,
} from "@delacumbre/design-system/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delacumbre EXP",
  description: "Expedições para destinos contraturísticos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${kanit.variable} ${berringer.variable} ${berringerAged.variable} ${materialSymbolsSharp.variable}`}
    >
      <body>
        <SmoothScroll />
        <GrainOverlay />
        {/* Alvo do portal do FixedPortal — fica fora do #smooth-content de
            propósito: o ScrollSmoother anima esse wrapper com CSS transform,
            e transform no ancestral vira o container de referência de
            position:fixed, quebrando header/menu. Fora dele, ficam fixos ao
            viewport normalmente. */}
        <div id="fixed-layer" />
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
