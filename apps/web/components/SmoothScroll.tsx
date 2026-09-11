"use client";

import { useEffect } from "react";
import { usePrefersReducedMotion } from "@delacumbre/design-system/lib/motion";

// Quanto menor, mais "líquida" fica a rolagem (mais quadros até alcançar o
// alvo); quanto maior, mais perto do scroll nativo instantâneo. 0.1 (padrão
// mais comum desse tipo de suavização por lerp) convergia rápido demais pro
// efeito ser sentido; 0.04 estica a inércia mais ainda.
const EASE = 0.04;
// Abaixo desta distância do alvo, encerra a animação e crava a posição final
// — um lerp puro nunca chega a zero de verdade (é uma assíntota), e sem
// isso o loop de rAF rodaria pra sempre.
const SNAP_THRESHOLD_PX = 0.5;
// Só usado quando o navegador reporta o delta em "linhas" (deltaMode 1) em
// vez de pixels — mouses/drivers antigos. Valor arbitrário de altura de
// linha, só pra a rolagem não ficar minúscula nesses casos raros.
const LINE_HEIGHT_PX = 40;

function normalizeDeltaY(event: WheelEvent) {
  if (event.deltaMode === 1) return event.deltaY * LINE_HEIGHT_PX;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

// Sobe a árvore a partir do alvo do evento procurando um ancestral que já
// tem seu próprio scroll vertical (o Menu fullscreen, principalmente — ver
// Menu.module.css). Sem esse escape, o wheel hijack global tomaria conta do
// scroll interno dele e travaria a navegação por dentro do menu.
function hasScrollableAncestor(target: EventTarget | null) {
  let node = target instanceof Element ? target : null;
  while (node && node !== document.body) {
    const overflowY = getComputedStyle(node).overflowY;
    const scrolls = overflowY === "auto" || overflowY === "scroll";
    if (scrolls && node.scrollHeight > node.clientHeight) return true;
    node = node.parentElement;
  }
  return false;
}

/** Troca o salto abrupto do scroll de roda de mouse por uma rolagem com leve
 *  inércia, sem depender de lib externa: intercepta o wheel, acumula um
 *  alvo e anima até ele quadro a quadro via rAF.
 *
 *  Fica de fora de propósito: gestos majoritariamente horizontais (deltaX >
 *  deltaY, como o scroll-snap do Carousel e a galeria horizontal), toque
 *  (touch não dispara "wheel" — já tem inércia nativa do sistema) e
 *  `prefers-reduced-motion`. */
export default function SmoothScroll() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let target = window.scrollY;
    let current = target;
    let animating = false;
    let frame = 0;

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const step = () => {
      current += (target - current) * EASE;
      const reachedTarget = Math.abs(target - current) < SNAP_THRESHOLD_PX;
      if (reachedTarget) current = target;
      window.scrollTo({ top: current, behavior: "instant" });
      if (reachedTarget) {
        animating = false;
        return;
      }
      frame = requestAnimationFrame(step);
    };

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (hasScrollableAncestor(event.target)) return;

      event.preventDefault();
      if (!animating) {
        current = window.scrollY;
        target = window.scrollY;
      }
      target = Math.max(0, Math.min(target + normalizeDeltaY(event), maxScroll()));
      if (!animating) {
        animating = true;
        frame = requestAnimationFrame(step);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion]);

  return null;
}
