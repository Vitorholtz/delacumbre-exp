"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FloatingButton from "@delacumbre/design-system/components/primitives/FloatingButton";
import LocationCard from "@delacumbre/design-system/components/cards/LocationCard";
import SocialProof from "@delacumbre/design-system/components/primitives/SocialProof";
import styles from "./IntroSection.module.css";

type Slide = {
  image: string;
  alt: string;
  quote: string;
  location: { name: string; country: string };
};

const SLIDES: Slide[] = [
  {
    image: "/expedicoes/holiday-camboja-bangkok/intro/rajadamnern-stadium.png",
    alt: "Luta de muay thai no ringue do Rajadamnern Stadium, em Bangkok",
    quote:
      "Soco, cotovelada, joelhada — e uma plateia gritando em tailandês que só faz sentido depois da terceira Chang.",
    location: { name: "Rajadamnern Stadium", country: "Bangkok" },
  },
  {
    image: "/expedicoes/holiday-camboja-bangkok/intro/khao-san-road.jpg",
    alt: "Grupo em cima de um tuk-tuk à noite na Khao San Road, em Bangkok",
    quote:
      "Um tuk-tuk suspeito, uma rua que nunca dorme e a sensação de que qualquer coisa pode — e vai — acontecer.",
    location: { name: "Khao San Road", country: "Bangkok" },
  },
  {
    image: "/expedicoes/holiday-camboja-bangkok/intro/maeklong-railway-market.jpg",
    alt: "Trem passando entre as barracas do Maeklong Railway Market, em Bangkok",
    quote:
      "O trem passa a centímetros das bananas e ninguém se mexe até o último segundo. Isso aqui não é metáfora, é terça-feira.",
    location: { name: "Maeklong Railway Market", country: "Bangkok" },
  },
];

const ROTATION_INTERVAL_MS = 5000;
const TRANSITION_MS = 350;

export default function IntroSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const swapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Ref (não state) porque o setInterval do auto-rotate é criado uma única
  // vez (deps []) e fecha sobre esta função — precisa sempre ler o estado
  // mais recente, não o valor congelado do primeiro render.
  const transitioningRef = useRef(false);

  const swapTo = (nextIndex: number | ((current: number) => number)) => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;
    setVisible(false);
    swapTimeoutRef.current = setTimeout(() => {
      setIndex((current) => {
        const target =
          typeof nextIndex === "function" ? nextIndex(current) : nextIndex;
        return ((target % SLIDES.length) + SLIDES.length) % SLIDES.length;
      });
      setVisible(true);
      transitioningRef.current = false;
    }, TRANSITION_MS);
  };

  useEffect(() => {
    const cycle = setInterval(() => {
      swapTo((current) => current + 1);
    }, ROTATION_INTERVAL_MS);

    return () => {
      clearInterval(cycle);
      if (swapTimeoutRef.current) clearTimeout(swapTimeoutRef.current);
    };
  }, []);

  const slide = SLIDES[index];
  const fadeClass = visible ? styles.fadeVisible : styles.fadeHidden;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.heading}>
            Bem-vindo a <span className={styles.highlight}>Bangkok</span>
          </p>

          <div className={styles.slider}>
            <div className={`${styles.quoteStatic} ${fadeClass}`}>
              <SocialProof quote={slide.quote} />
            </div>

            <div className={styles.imageOuter}>
              <div className={`${styles.imageWrap} ${fadeClass}`}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className={styles.image}
                />
                <div className={styles.scrim} aria-hidden="true" />

                <div className={styles.quoteOverlay}>
                  <SocialProof quote={slide.quote} />
                </div>
              </div>

              <div className={`${styles.locationWrap} ${fadeClass}`}>
                <LocationCard
                  name={slide.location.name}
                  country={slide.location.country}
                  size="sm"
                  className={styles.locationSm}
                />
                <LocationCard
                  name={slide.location.name}
                  country={slide.location.country}
                  size="md"
                  className={styles.locationMd}
                />
              </div>
            </div>

            <div className={styles.controls}>
              <div className={styles.arrows}>
                <FloatingButton
                  icon="arrow_back"
                  label="Foto anterior"
                  onClick={() => swapTo((current) => current - 1)}
                  size="sm"
                  className={styles.sizeSm}
                />
                <FloatingButton
                  icon="arrow_forward"
                  label="Próxima foto"
                  onClick={() => swapTo((current) => current + 1)}
                  size="sm"
                  className={styles.sizeSm}
                />
                <FloatingButton
                  icon="arrow_back"
                  label="Foto anterior"
                  onClick={() => swapTo((current) => current - 1)}
                  size="md"
                  className={styles.sizeMd}
                />
                <FloatingButton
                  icon="arrow_forward"
                  label="Próxima foto"
                  onClick={() => swapTo((current) => current + 1)}
                  size="md"
                  className={styles.sizeMd}
                />
              </div>

              <div className={styles.indicator}>
                {SLIDES.map((item, i) => (
                  <button
                    key={item.image}
                    type="button"
                    aria-label={`Ver foto ${i + 1} de ${SLIDES.length}`}
                    aria-current={i === index}
                    onClick={() => swapTo(i)}
                    className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
