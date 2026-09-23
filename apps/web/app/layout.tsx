import type { Metadata } from "next";
// Precisa ser o PRIMEIRO import de CSS do app: no build de produção a ordem
// das folhas segue a ordem de import, e os utilitários globais (.text-*,
// .container...) têm a mesma especificidade das classes dos CSS Modules que
// os compõem/sobrescrevem. Importado depois dos componentes, o globals.css
// caía num chunk carregado por último e desfazia os ajustes por breakpoint
// dos módulos (ex: títulos presos no tamanho SM em MD/LG) — só em produção,
// já que o `next dev` injeta o CSS em outra ordem.
import "./globals.css";
import {
  berringer,
  berringerAged,
  kanit,
  materialSymbolsSharp,
} from "@delacumbre/design-system/lib/fonts";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";
import BackToTopButton from "@/components/BackToTopButton";

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
        <SmoothScroll />
        <GrainOverlay />
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
