import type { Metadata } from "next";
import {
  berringer,
  berringerAged,
  kanit,
  materialSymbolsSharp,
} from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delacumbre EXP — Design System",
  description: "Biblioteca de componentes e tokens da Delacumbre EXP.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${kanit.variable} ${berringer.variable} ${berringerAged.variable} ${materialSymbolsSharp.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
