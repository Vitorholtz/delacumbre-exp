"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// O <Link> do Next só re-scrolla pro topo se decidir que o topo da nova
// página "não está visível" na posição de scroll atual (ver docs de
// <Link scroll>) — entre páginas de alturas bem diferentes essa heurística
// erra e a navegação chega no meio da página nova. Por isso forçamos o
// topo a cada troca de rota — exceto quando a URL aponta pra uma âncora
// específica (deep link tipo /pagina#secao), que deve ser respeitada.
export default function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    // `behavior: "instant"` explícito: globals.css aplica `scroll-behavior:
    // smooth` no <html> pras âncoras internas, e sem isso esta ida ao topo
    // herdaria a suavidade e viraria uma rolagem animada da página inteira a
    // cada troca de rota. O `data-scroll-behavior` do layout cobre a rolagem
    // que o próprio Next faz; esta aqui é nossa, e precisa se declarar.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
