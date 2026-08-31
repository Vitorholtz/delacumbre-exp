"use client";

import { useEffect, useRef, useState } from "react";
import HowToCard from "@delacumbre/design-system/components/cards/HowToCard";
import styles from "./HowToBook.module.css";

type Step = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  mediaColor?: string;
};

const STEPS: Step[] = [
  {
    title: "Encontre seu destino",
    description:
      "Veja os próximos destinos contraturísticos abertos, o roteiro dia a dia e quantas vagas ainda restam antes de decidir pra onde vai.",
    image: "/how-to/destino.png",
    imageAlt: "Cartaz da expedição ao Egito, exemplo de destino contraturístico",
  },
  {
    title: "Escolha como pagar",
    description:
      "Cartão parcelado sem juros ou entrada + saldo via PIX — você escolhe como fechar, sem letra miúda escondida.",
    image: "/how-to/pagamento.png",
    imageAlt: "Simulação de parcelamento no cartão de crédito, 12x de R$665 sem juros",
  },
  {
    title: "Fale com a gente",
    description:
      "Ficou alguma dúvida? Chama no direct do Instagram. Sem formulário, sem robô — quem responde é gente de verdade.",
    image: "/how-to/duvida.png",
    imageAlt: "Formulário de dúvida para o guia, com botão de confirmar inscrição",
  },
];

const TIERS = ["sm", "md", "lg"] as const;
const LAST_INDEX = STEPS.length - 1;

// Curva suave (smoothstep) pra a chegada/saída do card não ter velocidade
// constante — acelera no meio, desacelera nas pontas.
function ease(t: number) {
  return t * t * (3 - 2 * t);
}

export default function HowToBook() {
  const trackRef = useRef<HTMLDivElement>(null);

  // A pilha só trava e sobrepõe via scroll quando o navegador roda JS e o
  // usuário não pediu menos movimento — sem isso, os cards ficam em fluxo
  // normal (ver .stack no CSS).
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduceMotion) setPinned(true);
  }, []);

  // Scroll da própria página (não um container à parte) — o track é alto
  // (N * 100vh) e o palco fica sticky por cima. Isso É a trava (a página
  // "para" visualmente enquanto o track ainda tem altura sobrando) e a
  // liberação acontece sozinha assim que o scroll passa do fim do track.
  useEffect(() => {
    if (!pinned) return;
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-card-index]"),
    );

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = track.getBoundingClientRect();
      const trackHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress =
        trackHeight > 0
          ? Math.min(Math.max(scrolled / trackHeight, 0), 1)
          : 0;
      const segment = progress * LAST_INDEX;

      // `cards` junta os 3 tiers (sm/md/lg); em qualquer breakpoint dois
      // deles estão escondidos via display:none (offsetHeight 0) — pegar o
      // primeiro visível evita medir o tier errado.
      const visibleCard = cards.find((card) => card.offsetParent !== null);
      const corridorHeight = visibleCard?.parentElement?.offsetHeight ?? 0;

      cards.forEach((card) => {
        const index = Number(card.dataset.cardIndex);
        const distance = segment - index;

        let translateY = 0;
        let scale = 1;

        if (distance <= -1) {
          // ainda não chegou — esperando embaixo do corredor, fora de vista
          translateY = corridorHeight;
          scale = 0.94;
        } else if (distance < 0) {
          // chegando: desliza de baixo pra cima até ocupar o lugar
          const t = ease(1 + distance); // 0 → 1
          translateY = (1 - t) * corridorHeight;
          scale = 0.94 + 0.06 * t;
        } else {
          // já foi substituído: encolhe e desaparece no lugar
          const t = ease(Math.min(distance, 1)); // 0 → 1
          scale = 1 - 0.55 * t;
        }

        card.style.transform = `translateY(${translateY}px) scale(${scale})`;
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, [pinned]);

  return (
    <section
      id="como-reservar"
      className={`${styles.wrapper} ${pinned ? styles.pinned : ""}`}
    >
      <div
        ref={trackRef}
        className={styles.track}
        style={pinned ? { height: `${STEPS.length * 100}vh` } : undefined}
      >
        <div className={styles.sticky}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <div className={styles.textCol}>
                <p className={styles.heading}>Como reservar?</p>
                <p className={styles.description}>
                  Três passos: escolha o destino, pague do seu jeito e fale
                  comigo se sobrar dúvida.
                </p>
              </div>

              {TIERS.map((tier) => (
                <div
                  key={tier}
                  className={[
                    styles[`stack_${tier}`],
                    pinned ? styles[`stack_${tier}_pinned`] : "",
                  ].join(" ")}
                >
                  {STEPS.map((step, index) => (
                    <div
                      key={step.title}
                      className={styles.cardSlot}
                      data-card-index={index}
                      style={{ zIndex: index }}
                    >
                      <HowToCard
                        title={step.title}
                        description={step.description}
                        image={step.image}
                        imageAlt={step.imageAlt}
                        mediaColor={step.mediaColor}
                        size={tier}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
