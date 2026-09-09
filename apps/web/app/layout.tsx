import type { Metadata } from "next";
import {
  berringer,
  berringerAged,
  kanit,
  materialSymbolsSharp,
} from "@delacumbre/design-system/lib/fonts";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delacumbre EXP",
  description: "Expedições para destinos contraturísticos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // `data-scroll-behavior="smooth"`: com o `scroll-behavior: smooth` que
    // globals.css aplica pras âncoras internas, este atributo é o que faz o
    // Next voltar a neutralizar a rolagem suave durante a troca de rota (era
    // o padrão até o Next 15; no 16 virou opt-in). Sem ele, mudar de página
    // animaria o scroll da página inteira em vez de chegar no topo direto.
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${kanit.variable} ${berringer.variable} ${berringerAged.variable} ${materialSymbolsSharp.variable}`}
    >
      <body>
        <ScrollToTopOnNavigate />
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
