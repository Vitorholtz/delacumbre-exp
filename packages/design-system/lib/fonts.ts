import { Kanit } from "next/font/google";
import localFont from "next/font/local";

export const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

// ATENÇÃO: os .woff2 abaixo são SUBSETS, não as fontes completas. Um ícone
// ou caractere fora do subset não renderiza — falha silenciosa, sem erro.
//
// Ao adicionar um ícone novo, regere o subset. Para levantar a lista, use o
// HTML renderizado como fonte de verdade — é o que o <Icon> de fato emitiu,
// e pega tanto `icon="x"` quanto `{ icon: "x" }` (essa segunda forma já
// passou despercebida num grep só de atributo JSX, e os ícones que faltavam
// foram parar na tela como texto cru):
//   npm run build -w apps/web && npx next start -p 3100 &
//   for u in / /expedicoes/holiday-camboja-bangkok \
//            /expedicoes/holiday-camboja-bangkok/checkout /galeria; do
//     curl -s "http://localhost:3100$u"; done \
//     | grep -oE 'class="icon[^"]*"[^>]*>[a-z_0-9]+<' \
//     | sed -E 's/.*>([a-z_0-9]+)<.*/\1/' | sort -u
// Some a isso os ícones que só aparecem em estado interativo ou vazio
// (ex: hide_image na galeria sem itens) e os usados só na vitrine /dev.
// Depois de gerar, confirme que a fonte tem todas as ligaduras esperadas —
// um ícone ausente falha em silêncio, sem erro de build.
//   curl -H "User-Agent: Mozilla/5.0 ... Chrome/131.0.0.0 Safari/537.36" \
//     "https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=<lista>&display=block"
// e baixe o .woff2 que o CSS retornar. Os dois parâmetros são obrigatórios:
// sem User-Agent moderno vem TTF, e sem os ranges dos eixos vem uma instância
// estática que faz o font-variation-settings de tokens/icons.css virar no-op.
//
// Os Berringer cobrem ASCII + Latin-1 + travessão/aspas curvas/reticências.
// Para regerar a partir dos .ttf originais (mantidos na mesma pasta):
//   python -m fontTools.subset "Berringer Aged.ttf" --flavor=woff2 \
//     --output-file=BerringerAged.woff2 --layout-features="kern,liga,ccmp" \
//     --unicodes="U+0020-007E,U+00A0-00FF,U+2010-2015,U+2018-201D,U+2026"
export const berringer = localFont({
  src: "../fonts/BerringerRegular.woff2",
  variable: "--font-berringer",
  weight: "400",
  style: "normal",
  display: "swap",
});

// Berringer Aged (variante desgastada, usada no título "Cenas lamentáveis").
// A textura desgastada está nos próprios outlines, então mesmo subsetada ela
// é ~24x maior que a Regular. Fica fora do preload porque os 5 usos são
// títulos decorativos abaixo da dobra: com `display: swap` o texto aparece
// na fallback e troca quando a fonte chega, sem disputar a rede no load.
export const berringerAged = localFont({
  src: "../fonts/BerringerAged.woff2",
  variable: "--font-berringer-aged",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: false,
});

// Auto-hospedada: Material Symbols Sharp não está disponível via
// next/font/google. Subset com os ícones em uso (fonte variável completa tem
// 3,5MB); `display: block` evita o FOUT de mostrar o nome do ícone como
// texto cru ("arrow_back") — com ~14KB o bloqueio é imperceptível.
export const materialSymbolsSharp = localFont({
  src: "../fonts/MaterialSymbolsSharp-Subset.woff2",
  variable: "--font-material-symbols-sharp",
  weight: "100 700",
  style: "normal",
  display: "block",
});
