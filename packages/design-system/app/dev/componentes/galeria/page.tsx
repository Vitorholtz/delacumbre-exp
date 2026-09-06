import Gallery from "@/components/cards/Gallery";
import type { GalleryMediaItem } from "@/components/cards/Gallery";
import styles from "./page.module.css";

const items: GalleryMediaItem[] = [
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
];

export default function GaleriaPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Galeria — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Grade de mídia (fotos e vídeos) em masonry — cada item mantém a
          proporção real da mídia (`ratio`), então fica vertical, horizontal
          ou quadrado sozinho. Thumb interativo (hover mostra a lupa na
          imagem, ou aumenta o ícone de play no vídeo) com slider em tela
          cheia navegando entre todos os itens.
        </p>
      </header>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <Gallery items={items} />
      </section>
    </main>
  );
}
