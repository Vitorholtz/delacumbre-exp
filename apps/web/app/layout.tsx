import type { Metadata } from "next";
import {
  berringer,
  kanit,
  materialSymbolsSharp,
} from "@delacumbre/design-system/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delacumbre EXP",
  description: "Expedições para destinos contraturísticos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${kanit.variable} ${berringer.variable} ${materialSymbolsSharp.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
