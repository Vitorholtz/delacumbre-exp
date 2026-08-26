"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@delacumbre/design-system/components/primitives/Button";
import styles from "./Hero.module.css";

// Depoimentos fictícios — placeholders no tom de docs/BRAND.md, para dar
// forma à seção enquanto não temos avaliações reais de viajantes. Trocar
// por depoimentos verdadeiros (com autorização de uso) antes de publicar.
type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Cheguei em Marrocos achando que sabia o que era “diferente”. Voltei sabendo que o estrangeiro ali era eu. A Delacumbre não vende conforto, vende a versão de mim que eu não conhecia — essa eu não troco por nenhum resort five-star.",
    name: "Carla Menezes",
    context: "Expedição Marrocos, 2023",
  },
  {
    quote:
      "Dormi no deserto ouvindo silêncio de verdade pela primeira vez na vida. Não teve wi-fi, teve vertigem boa. Se você quer uma viagem que te devolve diferente de como te pegou, é essa.",
    name: "Rodrigo Tavares",
    context: "Expedição Egito & Saara Ocidental, 2022",
  },
  {
    quote:
      "Entrei numa prisão que já foi campo de extermínio e saí calada por dois dias. Não foi passeio, foi confronto. O Marcos não suaviza nada — e é exatamente por isso que topei ir de novo.",
    name: "Beatriz Lins",
    context: "Expedição África, 2024",
  },
  {
    quote:
      "Voltei com a bota suja de lama de verdade, do jeito que ele escreve nos livros. Contraturismo não é conceito bonito pra post — é ficar desconfortável até virar outra pessoa. Recomendo pra quem aguenta.",
    name: "Felipe Andrade",
    context: "Expedição Marrocos, 2024",
  },
];

const ROTATION_INTERVAL_MS = 5000;
const TRANSITION_MS = 350;

function QuoteMark() {
  return (
    <svg
      className={styles.quoteIcon}
      viewBox="0 0 40 31.613"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M37.0223 3.40145e-05H23.871V12.294L34.2928 31.613H40L37.0223 16.3083V3.40145e-05Z"
        fill="currentColor"
      />
      <path
        d="M13.1514 2.57995e-05H6.44496e-05V12.294L10.4219 31.613H16.1291L13.1514 16.3083V2.57995e-05Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const swapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      swapTimeoutRef.current = setTimeout(() => {
        setIndex((current) => (current + 1) % TESTIMONIALS.length);
        setVisible(true);
      }, TRANSITION_MS);
    }, ROTATION_INTERVAL_MS);

    return () => {
      clearInterval(cycle);
      if (swapTimeoutRef.current) clearTimeout(swapTimeoutRef.current);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="/hero/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.socialProof}>
            <QuoteMark />
            <div
              className={`${styles.testimonial} ${visible ? styles.phraseVisible : styles.phraseHidden}`}
            >
              <p className={styles.phrase}>{TESTIMONIALS[index].quote}</p>
              <p className={styles.attribution}>
                {TESTIMONIALS[index].name} — {TESTIMONIALS[index].context}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.logoWrap}>
            <Image
              src="/hero/delacumbre-logo.svg"
              alt="Delacumbre EXP"
              width={460}
              height={162}
              className={styles.logo}
              priority
            />
          </div>

          <div className={`${styles.buttons} ${styles.buttonsDesktop}`}>
            <Button
              variant="primary"
              size="lg"
              href="#destinos"
              className={styles.ctaButton}
            >
              Destinos
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#sobre-nos"
              className={styles.ctaButton}
            >
              Sobre nós
            </Button>
          </div>
          <div className={`${styles.buttons} ${styles.buttonsCompact}`}>
            <Button
              variant="primary"
              size="md"
              href="#destinos"
              className={styles.ctaButtonCompact}
            >
              Destinos
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="#sobre-nos"
              className={styles.ctaButtonCompact}
            >
              Sobre nós
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
