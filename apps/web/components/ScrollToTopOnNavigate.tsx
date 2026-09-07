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
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
