"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@delacumbre/design-system/components/primitives/Button";
import FloatingButton from "@delacumbre/design-system/components/primitives/FloatingButton";
import Pill from "@delacumbre/design-system/components/controls/Pill";
import styles from "./Carousel.module.css";

type Expedition = {
  slug: string;
  image: string;
  imageAlt: string;
  title: string;
  vagasLabel: string;
  description: string;
  ctaHref: string;
  pdfHref: string;
};

// Conteúdo espelhando o mock do Figma: 1 slide da expedição real (Camboja &
// Bangkok, 2026) + 3 placeholders com fotos reais das expedições anteriores
// de Marcos na África (Egito, Mauritânia) e da Grande Muralha — nenhuma das
// 3 tem vaga/data/preço confirmado pra virar expedição vendável ainda, então
// vagas continua em placeholder. Descrições fictícias, no tom de
// docs/BRAND.md, escritas pra preencher o espaço — trocar por copy real
// (e confirmar se Egito/Mauritânia/Muralha vão virar expedição de novo)
// antes de publicar.
const EXPEDITIONS: Expedition[] = [
  {
    slug: "holiday-camboja-bangkok",
    image: "/carousel/camboja-bangkok.png",
    imageAlt:
      "Monges em trajes laranjas diante do templo de Angkor Wat, refletido na água",
    title: "Holiday in Camboja & Bangkok",
    vagasLabel: "5/10 vagas",
    description:
      "Segue os monges até dentro de Angkor Wat de dia, os becos de Bangkok à noite. Entre templo e caos, você aprende a distinguir o que é sagrado do que é só barulho.",
    ctaHref: "/expedicoes/holiday-camboja-bangkok",
    pdfHref: "#",
  },
  {
    slug: "egito",
    image: "/carousel/egito.png",
    imageAlt: "Marcos DeLacumbre caminhando pelas pirâmides de Gizé, no Egito",
    title: "Egito",
    vagasLabel: "5/10 vagas",
    description:
      "Deserto, pirâmide e um camelo que ninguém pediu. O Egito não é cartão-postal — é ficar cara a cara com 4 mil anos de história enquanto foge da fila de turista.",
    ctaHref: "/expedicoes/egito",
    pdfHref: "#",
  },
  {
    slug: "mauritania",
    image: "/carousel/mauritania.png",
    imageAlt:
      "Viajantes deitados sobre um vagão de minério cruzando o deserto do Saara, na Mauritânia",
    title: "Mauritânia",
    vagasLabel: "5/10 vagas",
    description:
      "Vinte horas em cima de minério, dormindo no vagão, respirando poeira do Saara. Se conforto é o seu limite de aventura, essa expedição não é pra você.",
    ctaHref: "/expedicoes/mauritania",
    pdfHref: "#",
  },
  {
    slug: "grande-muralha",
    image: "/carousel/china.png",
    imageAlt: "Trecho da Grande Muralha da China entre montanhas",
    title: "A Grande Muralha",
    vagasLabel: "5/10 vagas",
    description:
      "Longe do trecho lotado de turista, a Muralha vira trilha de verdade — degrau alto, neblina, silêncio. Aqui você caminha a história, não fotografa ela de longe.",
    ctaHref: "/expedicoes/grande-muralha",
    pdfHref: "#",
  },
];

const DESCRIPTION_TRANSITION_MS = 250;

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  const descriptionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    if (activeIndex === descriptionIndex) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setDescriptionIndex(activeIndex);
      return;
    }

    setDescriptionVisible(false);
    descriptionTimeoutRef.current = setTimeout(() => {
      setDescriptionIndex(activeIndex);
      setDescriptionVisible(true);
    }, DESCRIPTION_TRANSITION_MS);

    return () => {
      if (descriptionTimeoutRef.current) {
        clearTimeout(descriptionTimeoutRef.current);
      }
    };
  }, [activeIndex, descriptionIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ratios = new Map<number, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          ratios.set(idx, entry.intersectionRatio);
        }
        let bestIndex = 0;
        let bestRatio = -1;
        ratios.forEach((ratio, idx) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = idx;
          }
        });
        setActiveIndex(bestIndex);
      },
      { root: track, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, EXPEDITIONS.length - 1));
    const el = slideRefs.current[clamped];
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const active = EXPEDITIONS[activeIndex];
  const displayedDescription = EXPEDITIONS[descriptionIndex].description;

  return (
    <section id="destinos" className={styles.wrapper}>
      <div className={styles.sectionTitle}>
        <div className={styles.titleRow}>
          <p className={styles.heading}>
            Destinos <span className={styles.headingAccent}>contra-turísticos</span>
          </p>
          <Image
            src="/carousel/delacumbre-sons.svg"
            alt="Delacumbre & Sons"
            width={140}
            height={140}
            className={styles.logo}
          />
          <p className={styles.heading}>
            por <span className={styles.headingAccent}>Delacumbre</span>{" "}
            <span className={styles.ampersand}>&amp;</span> sons →
          </p>
        </div>

        <div className={styles.titleStack}>
          <Image
            src="/carousel/delacumbre-sons.svg"
            alt="Delacumbre & Sons"
            width={140}
            height={140}
            className={styles.logo}
          />
          <p className={styles.heading}>
            Destinos <span className={styles.headingAccent}>contra-turísticos </span>
            por <span className={styles.headingAccent}>Delacumbre</span>{" "}
            <span className={styles.ampersand}>&amp;</span> sons
          </p>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.track} ref={trackRef}>
          {EXPEDITIONS.map((item, index) => (
            <Link
              key={`${item.slug}-${index}`}
              href={item.ctaHref}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              data-index={index}
              className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ""}`}
              onNavigate={(event) => {
                if (index !== activeIndex) {
                  event.preventDefault();
                  scrollToIndex(index);
                }
              }}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1440px) 996px, 90vw"
                className={styles.slideImage}
              />
              <div className={styles.slideScrim} aria-hidden="true" />
              <p className={styles.slideTitle}>{item.title}</p>
              <Pill
                label={item.vagasLabel}
                showIcon={false}
                size="sm"
                className={styles.slidePill}
              />
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <div className={styles.content}>
            <p
              className={`${styles.description} ${descriptionVisible ? styles.descriptionVisible : styles.descriptionHidden}`}
            >
              {displayedDescription}
            </p>

            <div className={`${styles.buttons} ${styles.buttonsDesktop}`}>
              <Button
                variant="primary"
                size="lg"
                href={active.ctaHref}
                className={styles.ctaButton}
              >
                Ver tudo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={active.pdfHref}
                className={styles.ctaButton}
              >
                PDF completo
              </Button>
            </div>
            <div className={`${styles.buttons} ${styles.buttonsCompact}`}>
              <Button
                variant="primary"
                size="md"
                href={active.ctaHref}
                className={styles.ctaButtonCompact}
              >
                Ver tudo
              </Button>
              <Button
                variant="secondary"
                size="md"
                href={active.pdfHref}
                className={styles.ctaButtonCompact}
              >
                PDF completo
              </Button>
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.indicator}>
              {EXPEDITIONS.map((item, index) => (
                <button
                  key={`${item.slug}-dot-${index}`}
                  type="button"
                  aria-label={`Ir para o slide ${index + 1}`}
                  aria-current={index === activeIndex}
                  className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>

            <div className={styles.arrows}>
              <FloatingButton
                icon="arrow_back"
                label="Slide anterior"
                disabled={activeIndex === 0}
                onClick={() => scrollToIndex(activeIndex - 1)}
              />
              <FloatingButton
                icon="arrow_forward"
                label="Próximo slide"
                disabled={activeIndex === EXPEDITIONS.length - 1}
                onClick={() => scrollToIndex(activeIndex + 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
