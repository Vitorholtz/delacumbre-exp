import { Kanit } from "next/font/google";
import localFont from "next/font/local";

export const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const berringer = localFont({
  src: "../fonts/Berringer-Regular.ttf",
  variable: "--font-berringer",
  weight: "400",
  style: "normal",
  display: "swap",
});

// Berringer Aged (variante desgastada, usada no título "Cenas lamentáveis")
export const berringerAged = localFont({
  src: "../fonts/Berringer Aged.ttf",
  variable: "--font-berringer-aged",
  weight: "400",
  style: "normal",
  display: "swap",
});

// Auto-hospedada: Material Symbols Sharp não está disponível via
// next/font/google. Fonte variável completa (~3.5MB) — candidata a subset
// futuro quando o conjunto de ícones do site estiver definido.
export const materialSymbolsSharp = localFont({
  src: "../fonts/MaterialSymbolsSharp-Variable.woff2",
  variable: "--font-material-symbols-sharp",
  weight: "100 700",
  style: "normal",
  display: "block",
});
