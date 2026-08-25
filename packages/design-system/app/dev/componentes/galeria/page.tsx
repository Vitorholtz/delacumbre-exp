import Gallery from "@/components/Gallery";
import type { GalleryMediaItem } from "@/components/Gallery";
import styles from "./page.module.css";

const items: GalleryMediaItem[] = [
  {
    type: "image",
    src: encodeURI("/gallery/Foto tuk-tuk.jpg"),
    alt: "Grupo se divertindo em cima de um tuk-tuk à noite",
  },
  {
    type: "image",
    src: "/gallery/angkor.jpeg",
    alt: "Estátuas de guardiões na entrada de Angkor Thom, Camboja",
  },
  {
    type: "image",
    src: encodeURI("/gallery/cambodia-shooting-range (1).jpg"),
    alt: "Turista atirando com fuzil AK-47 em campo de tiro no Camboja",
  },
  {
    type: "image",
    src: "/gallery/DSC06651.JPG",
    alt: "Participante posando com réplicas de fuzil e lança-foguete em campo de tiro",
  },
  {
    type: "image",
    src: encodeURI("/gallery/DSCF2025 (1).JPG"),
    alt: "Torres com rostos esculpidos do templo Bayon, em Angkor Thom",
  },
  {
    type: "image",
    src: "/gallery/Maeklong-Railway-Market-1.jpg",
    alt: "Barracas do mercado sobre os trilhos de Maeklong, na Tailândia",
  },
  {
    type: "image",
    src: "/gallery/escorpiao.webp",
    alt: "Escorpiões grelhados vendidos como comida de rua",
  },
  {
    type: "image",
    src: "/gallery/IMG_9363.jpg",
    alt: "Momento descontraído em um bar durante a expedição",
  },
  {
    type: "image",
    src: encodeURI("/gallery/IMG_9358 (1).jpg"),
    alt: "Grupo reunido em um bar, clima descontraído da viagem",
  },
  {
    type: "image",
    src: "/gallery/IMG_8910.jpg",
    alt: "Selfie em carrinho de trilho (norry) na zona rural do Camboja",
  },
  {
    type: "image",
    src: encodeURI("/gallery/IMG_3564 (1).jpg"),
    alt: "Participante posando sozinho com réplicas de armas em campo aberto",
  },
  {
    type: "video",
    src: "/gallery/md-videobg.mp4",
    alt: "Vídeo de destaque da expedição",
  },
];

export default function GaleriaPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Galeria — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Grade de mídia (fotos e vídeos) com thumb interativo — hover mostra a
          lupa (imagem) ou aumenta o ícone de play (vídeo) — e slider em tela
          cheia com navegação entre todos os itens.
        </p>
      </header>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <Gallery items={items} />
      </section>
    </main>
  );
}
