"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import styles from "./LoadingScreen.module.css";

const SAFETY_TIMEOUT_MS = 6000; // trava de segurança — nunca prende o usuário além disso, mesmo se algum recurso não terminar
const MIN_VISIBLE_MS = 900; // evita um "flash" quando tudo já está em cache (load quase instantâneo)
const FADE_OUT_MS = 400; // tem que bater com a transition de .hidden no CSS

function whenImageLoaded(img: HTMLImageElement) {
  if (img.complete) return Promise.resolve();
  return new Promise<void>((resolve) => {
    img.addEventListener("load", () => resolve(), { once: true });
    img.addEventListener("error", () => resolve(), { once: true });
  });
}

// Não usa o evento "load" da janela de propósito: um <video autoPlay> na
// página (ver Hero.tsx) faz o Chrome segurar esse evento por vários
// segundos esperando buffer de reprodução, mesmo com preload="metadata" —
// e vídeo de fundo é decorativo, não faz sentido travar a tela de
// carregamento por causa dele. Em vez disso, espera só o que o usuário
// realmente vê de cara: fontes (Kanit/Berringer) e as imagens que já
// nasceram no HTML sem `loading="lazy"` — imagens lazy são abaixo da
// dobra de propósito e não deveriam segurar isso também.
function whenEverythingReady() {
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  const eagerImages = Array.from(document.images).filter(
    (img) => img.loading !== "lazy",
  );
  const imagesReady = Promise.all(eagerImages.map(whenImageLoaded));
  return Promise.all([fontsReady, imagesReady]);
}

export default function LoadingScreen() {
  const ringPathId = useId();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      cancelled = true;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      setTimeout(() => setReady(true), remaining);
    };

    const safety = setTimeout(finish, SAFETY_TIMEOUT_MS);
    whenEverythingReady().then(finish);

    return () => {
      cancelled = true;
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timeout = setTimeout(() => setVisible(false), FADE_OUT_MS);
    return () => clearTimeout(timeout);
  }, [ready]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.screen} ${ready ? styles.hidden : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Carregando sua experiência"
      // Isenta esta subárvore da interceptação do Lenis (ver
      // SmoothScroll.tsx) — cobre a tela inteira, então isso já basta pra
      // travar a rolagem do fundo enquanto a tela de carregamento existe.
      data-lenis-prevent
    >
      <div className={styles.stamp}>
        <svg
          className={styles.ring}
          viewBox="0 0 489 489"
          aria-hidden="true"
        >
          <defs>
            <path
              id={ringPathId}
              d="M 244.5,244.5 m -168,0 a 168,168 0 1,1 336,0 a 168,168 0 1,1 -336,0"
            />
          </defs>
          <text className={styles.ringText}>
            <textPath href={`#${ringPathId}`} startOffset="2%">
              <tspan className={styles.ringTextMuted}>O QUE VOCÊ VIVEU </tspan>
              <tspan className={styles.ringTextHighlight}>
                NINGUÉM ROUBA
              </tspan>
              <tspan className={styles.ringTextMuted}>
                {" "}
                • DELACUMBRE EXP •{" "}
              </tspan>
            </textPath>
          </text>
        </svg>

        <div className={styles.mascotWrap}>
          <Image
            src="/loading/mascot.svg"
            alt=""
            fill
            sizes="160px"
            className={styles.mascot}
            // Sem isso o Next trata como lazy: não gera <link rel="preload">
            // e fica fora do filtro `eagerImages` de whenEverythingReady()
            // (ver abaixo) — a tela de loading passava a "ready" sem
            // esperar o próprio mascote carregar.
            priority
          />
        </div>
      </div>
    </div>
  );
}
