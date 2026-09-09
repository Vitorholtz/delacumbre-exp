import { useEffect, useState } from "react";

// Resoluções de referência (Figma) — ver docs/BREAKPOINTS.md
export const referenceWidths = {
  smMobile: 390,
  smTablet: 768,
  md: 1440,
  lg: 1920,
} as const;

// Breakpoints técnicos — min-width reais usados em @media no código
export const breakpoints = {
  smToMd: 810,
  mdToLg: 1536,
} as const;

/** Verdadeiro abaixo do breakpoint técnico SM→MD (810px) — para componentes
 *  que expõem tamanho via prop (ex: TextField/TextArea `size`) em vez de
 *  reagir sozinhos por `@media`, e por isso precisam saber o tier em JS. */
export function useIsSm() {
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoints.smToMd - 1}px)`);
    const update = () => setIsSm(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isSm;
}
