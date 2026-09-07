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
        {children}
      </body>
    </html>
  );
}
