"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll() {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: false,
    });
    smootherRef.current = smoother;

    // Intercepta cliques em links âncora (botões "Ver expedições", nav do
    // Hero etc.) pra rolar suavemente via ScrollSmoother — sem isso o
    // navegador ainda pula pra âncora (o scroll nativo continua ativo por
    // baixo), só que instantâneo, sem o easing.
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      if (!document.getElementById(href.slice(1))) return;

      event.preventDefault();
      smoother.scrollTo(href, true, "top top");
    };
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, {
        capture: true,
      });
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  // O <Link> do Next só re-scrolla pro topo se decidir que o topo da nova
  // página "não está visível" na posição de scroll atual (ver docs de
  // <Link scroll>) — entre páginas de alturas bem diferentes essa
  // heurística erra e a navegação chega no meio da página nova. Por isso
  // forçamos o topo a cada troca de rota — exceto quando a URL aponta pra
  // uma âncora específica (deep link tipo /pagina#secao).
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
    smootherRef.current?.scrollTo(0, false);
  }, [pathname]);

  return null;
}
