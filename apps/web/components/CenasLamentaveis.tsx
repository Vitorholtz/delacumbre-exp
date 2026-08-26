import Image from "next/image";
import Button from "@delacumbre/design-system/components/primitives/Button";
import styles from "./CenasLamentaveis.module.css";

type MarqueeImage = {
  src: string;
  alt: string;
  ratio: number; // largura/altura — mesma proporção em qualquer breakpoint
  objectPosition?: string;
};

// Repetida em loop pelo marquee — a mistura de maiúscula/minúscula
// ("cenAs") é assim no Figma, provavelmente pro efeito de carimbo
// desgastado da fonte Aged (ver nota do componente). Não é typo, mas vale
// confirmar com quem fez o design se não for essa a intenção.
const TITLE_PHRASE = "cenAs lamentáveis";
const TITLE_REPEATS = 6; // largura de sobra pra cobrir monitores ultra-wide sem espaço em branco no loop

const IMAGES: MarqueeImage[] = [
  {
    src: "/cenas-lamentaveis/img-3576.png",
    alt: "Grupo reunido numa festa à luz de ventilador de teto",
    ratio: 680 / 420,
    // Crop customizado do Figma (não é o center-crop padrão) — mantém o
    // enquadramento original em vez do recorte automático.
    objectPosition: "36% 84%",
  },
  {
    src: "/cenas-lamentaveis/img-9358.png",
    alt: "Cena noturna da expedição",
    ratio: 237 / 420,
  },
  {
    src: "/cenas-lamentaveis/tuk-tuk.png",
    alt: "Grupo se divertindo em cima de um tuk-tuk à noite",
    ratio: 315 / 420,
  },
  {
    src: "/cenas-lamentaveis/abraco.png",
    alt: "Dupla dançando animada num bar com banda ao vivo",
    ratio: 315 / 420,
  },
  {
    src: "/cenas-lamentaveis/img-9386.png",
    alt: "Cena da expedição num corredor iluminado",
    ratio: 315 / 420,
  },
  {
    src: "/cenas-lamentaveis/img-9363.png",
    alt: "Cena noturna da expedição",
    ratio: 315 / 420,
  },
  {
    src: "/cenas-lamentaveis/foto-1.png",
    alt: "Viajante caracterizado com chifres de diabinho",
    ratio: 236 / 420,
  },
  {
    src: "/cenas-lamentaveis/foto-2.png",
    alt: "Cena de bar da expedição",
    ratio: 236 / 420,
  },
];

// Repetido 2x por metade do loop — 8 fotos não cobrem sozinhas a largura de
// um monitor ultra-wide, o que deixaria um vão em branco visível no loop.
const IMAGE_SET = [...IMAGES, ...IMAGES];

function TitleHalf() {
  return (
    <div className={styles.titleTrackHalf}>
      {Array.from({ length: TITLE_REPEATS }).map((_, index) => (
        <span key={index} className={styles.titlePhrase}>
          {TITLE_PHRASE}
        </span>
      ))}
    </div>
  );
}

function ImageHalf({ decorative }: { decorative?: boolean }) {
  return (
    <div className={styles.imageTrackHalf}>
      {IMAGE_SET.map((image, index) => (
        <div
          key={index}
          className={styles.imageItem}
          style={{ aspectRatio: image.ratio }}
        >
          <Image
            src={image.src}
            alt={decorative ? "" : image.alt}
            fill
            sizes="(min-width: 810px) 500px, 300px"
            className={styles.image}
            style={{ objectPosition: image.objectPosition ?? "50% 50%" }}
          />
        </div>
      ))}
    </div>
  );
}

export default function CenasLamentaveis() {
  return (
    <section className={styles.wrapper} aria-label="Cenas lamentáveis">
      <div className={styles.stack}>
        <div className={styles.titleMarquee} aria-hidden="true">
          <div className={styles.titleTrack}>
            <TitleHalf />
            <TitleHalf />
          </div>
          <div className={`${styles.edgeFade} ${styles.edgeFadeLeft}`} />
          <div className={`${styles.edgeFade} ${styles.edgeFadeRight}`} />
        </div>

        <div className={styles.imageMarquee}>
          <div className={styles.imageTrack}>
            <ImageHalf />
            <ImageHalf decorative />
          </div>
          <div
            className={`${styles.edgeFade} ${styles.edgeFadeLeft}`}
            aria-hidden="true"
          />
          <div
            className={`${styles.edgeFade} ${styles.edgeFadeRight}`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Abre a galeria de imagens — componente ainda não existe, ver tarefa futura */}
      <Button
        variant="primary"
        size="lg"
        href="#"
        className={styles.ctaDesktop}
      >
        Quero imagens!
      </Button>
      <Button
        variant="primary"
        size="md"
        href="#"
        className={styles.ctaCompact}
      >
        Quero imagens!
      </Button>
    </section>
  );
}
