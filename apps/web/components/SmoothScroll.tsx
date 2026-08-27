"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const lenis = new Lenis();

    let frameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    // Intercepta cliques em links âncora (botões "Ver expedições", nav do
    // Hero etc.) antes do <Link> do Next.js processar o clique — capture:
    // true garante que isso roda primeiro, evitando o salto nativo
    // brigando com a animação do Lenis.
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      if (!document.getElementById(href.slice(1))) return;

      event.preventDefault();
      lenis.scrollTo(href);
    };
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("click", handleAnchorClick, {
        capture: true,
      });
      lenis.destroy();
    };
  }, []);

  return null;
}
