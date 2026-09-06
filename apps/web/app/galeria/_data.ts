import type { GalleryMediaItem } from "@delacumbre/design-system/components/cards/Gallery";

export type GalleryExpedition = {
  slug: string;
  title: string;
  /** Mostra o mini pill "Novo" no chip — só a expedição vigente tem. */
  isNew?: boolean;
  ctaHref: string;
  items: GalleryMediaItem[];
};

// Mídia real da expedição, já usada em outras partes do site (packages/
// design-system/public/gallery, copiada pra apps/web/public/gallery) mais
// um punhado de fotos de CenasLamentaveis.tsx que não se repetem nesse
// acervo (abraco/foto-1/foto-2/img-3576). `ratio` vem das dimensões reais
// de cada arquivo (largura/altura), não é chute — é o que faz o masonry
// decidir sozinho se o item fica vertical, horizontal ou quadrado.
const CAMBOJA_BANGKOK_ITEMS: GalleryMediaItem[] = [
  {
    type: "image",
    src: encodeURI("/gallery/Foto tuk-tuk.jpg"),
    alt: "Grupo se divertindo em cima de um tuk-tuk à noite",
    ratio: 4284 / 5712,
  },
  {
    type: "image",
    src: "/gallery/angkor.jpeg",
    alt: "Estátuas de guardiões na entrada de Angkor Thom, Camboja",
    ratio: 1616 / 1080,
  },
  {
    type: "image",
    src: encodeURI("/gallery/cambodia-shooting-range (1).jpg"),
    alt: "Turista atirando com fuzil AK-47 em campo de tiro no Camboja",
    ratio: 2000 / 1125,
  },
  {
    type: "image",
    src: "/gallery/DSC06651.JPG",
    alt: "Participante posando com réplicas de fuzil e lança-foguete em campo de tiro",
    ratio: 6000 / 4000,
  },
  {
    type: "image",
    src: encodeURI("/gallery/DSCF2025 (1).JPG"),
    alt: "Torres com rostos esculpidos do templo Bayon, em Angkor Thom",
    ratio: 3648 / 2736,
  },
  {
    type: "image",
    src: "/gallery/Maeklong-Railway-Market-1.jpg",
    alt: "Barracas do mercado sobre os trilhos de Maeklong, na Tailândia",
    ratio: 1400 / 974,
  },
  {
    type: "image",
    src: "/gallery/escorpiao.webp",
    alt: "Escorpiões grelhados vendidos como comida de rua",
    ratio: 1000 / 667,
  },
  {
    type: "image",
    src: "/gallery/IMG_9363.jpg",
    alt: "Momento descontraído em um bar durante a expedição",
    ratio: 3024 / 4032,
  },
  {
    type: "image",
    src: encodeURI("/gallery/IMG_9358 (1).jpg"),
    alt: "Grupo reunido em um bar, clima descontraído da viagem",
    ratio: 2066 / 3672,
  },
  {
    type: "image",
    src: "/gallery/IMG_8910.jpg",
    alt: "Selfie em carrinho de trilho (norry) na zona rural do Camboja",
    ratio: 3024 / 4032,
  },
  {
    type: "image",
    src: encodeURI("/gallery/IMG_3564 (1).jpg"),
    alt: "Participante posando sozinho com réplicas de armas em campo aberto",
    ratio: 3024 / 4032,
  },
  {
    type: "video",
    src: "/gallery/md-videobg.mp4",
    alt: "Vídeo de destaque da expedição",
    ratio: 1280 / 720,
  },
  {
    type: "image",
    src: "/cenas-lamentaveis/abraco.jpg",
    alt: "Dupla dançando animada num bar com banda ao vivo",
    ratio: 1200 / 1600,
  },
  {
    type: "image",
    src: "/cenas-lamentaveis/foto-1.jpg",
    alt: "Viajante caracterizado com chifres de diabinho",
    ratio: 1013 / 1800,
  },
  {
    type: "image",
    src: "/cenas-lamentaveis/foto-2.png",
    alt: "Cena de bar da expedição",
    ratio: 900 / 1600,
  },
  {
    type: "image",
    src: "/cenas-lamentaveis/img-3576.jpg",
    alt: "Grupo reunido numa festa à luz de ventilador de teto",
    ratio: 1800 / 1350,
  },
];

// Egito, Mauritânia e Grande Muralha espelham os mesmos slugs/títulos do
// Carousel da home (apps/web/components/Carousel.tsx) — expedições
// anteriores sem galeria própria ainda, ver estado vazio em GalleryExplorer.
export const GALLERY_EXPEDITIONS: GalleryExpedition[] = [
  {
    slug: "holiday-camboja-bangkok",
    title: "Holiday in Camboja & Bangkok",
    isNew: true,
    ctaHref: "/expedicoes/holiday-camboja-bangkok",
    items: CAMBOJA_BANGKOK_ITEMS,
  },
  {
    slug: "egito",
    title: "Egito",
    ctaHref: "/expedicoes/egito",
    items: [],
  },
  {
    slug: "mauritania",
    title: "Mauritânia",
    ctaHref: "/expedicoes/mauritania",
    items: [],
  },
  {
    slug: "grande-muralha",
    title: "A Grande Muralha",
    ctaHref: "/expedicoes/grande-muralha",
    items: [],
  },
];
