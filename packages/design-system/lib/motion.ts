import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** Verdadeiro quando o sistema pede menos movimento — para componentes que
 *  precisam decidir isso em JS (animação controlada por scroll, timers),
 *  não só em `@media (prefers-reduced-motion)`.
 *
 *  `useSyncExternalStore` em vez de useState+useEffect de propósito: o
 *  snapshot de servidor (`false`) faz o SSR sair já no estado que a maioria
 *  recebe, então não há salto de layout na hidratação, e ler um sistema
 *  externo aqui não dispara render em cascata como um setState em efeito. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}
