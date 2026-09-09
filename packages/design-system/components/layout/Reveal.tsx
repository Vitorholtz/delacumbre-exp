"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "../../lib/motion";
import styles from "./Reveal.module.css";

/** Fração da viewport que não conta como "em vista": a seção só começa a
 *  aparecer depois de subir esse tanto acima da borda de baixo. É o que faz
 *  o efeito acontecer onde o usuário está olhando, em vez de na beirada
 *  inferior da tela — mais determinante pro efeito ser percebido do que a
 *  duração ou o atraso da transição. */
const TRIGGER_INSET_RATIO = 0.2;

/** Teto do recuo acima: em telas altas, 20% viraria um recuo grande demais,
 *  e a seção só apareceria bem depois de já estar confortavelmente em vista. */
const TRIGGER_INSET_MAX_PX = 240;

/** Precisam acompanhar a transição em Reveal.module.css (0,15s de atraso +
 *  1,1s de duração). */
const REVEAL_DELAY_MS = 150;
const REVEAL_DURATION_MS = 1100;

type RevealState = "pending" | "revealing" | "done";

/** Aparição da seção conforme ela entra na viewport: desce de cima pra
 *  baixo saindo de um desfoque até o estado normal.
 *
 *  Repete: quando o usuário sobe a página e a seção volta pra baixo da
 *  viewport, ela retorna ao estado inicial e aparece de novo na próxima
 *  descida. Sair de vista por *cima* não reseta — a seção reentraria já
 *  colada na borda de cima, acima da linha do gatilho, e o efeito viraria
 *  um piscar em vez de uma aparição.
 *
 *  Use o componente `Reveal` quando puder envolver a seção numa caixa; use
 *  este hook direto quando a seção precisar do efeito num elemento
 *  específico da própria árvore, sem uma caixa extra em volta (é o caso do
 *  `HowToBook`, cujo track tem 300vh e não pode ser desfocado inteiro).
 *  Desestruture o retorno (`const { ref, className } = useReveal()`) — ler
 *  `resultado.className` durante o render dispara a regra `react-hooks/refs`,
 *  que trata o objeto inteiro como uma ref.
 *
 *  `staggerMs` atrasa só esta caixa, pra escalonar blocos que entram em
 *  vista juntos (o caso é a página de checkout, onde tudo já está na
 *  primeira dobra e sem escalonamento tudo apareceria no mesmo instante).
 *  Entre seções do site normal não serve pra nada: elas estão longe demais
 *  umas das outras pra aparecerem juntas. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  staggerMs = 0,
) {
  const ref = useRef<T>(null);
  const [state, setState] = useState<RevealState>("pending");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    // Sem IntersectionObserver (ou com menos movimento pedido), a seção vai
    // direto pro estado final — nunca fica presa invisível.
    if (
      prefersReducedMotion ||
      !element ||
      typeof IntersectionObserver === "undefined"
    ) {
      setState("done");
      return;
    }

    let frame = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    // Espelha o estado em variável local (não lê o `state` do render) pra o
    // observer poder ser criado uma única vez, sem depender do que já foi
    // renderizado.
    let revealed = false;

    const clearPending = () => {
      cancelAnimationFrame(frame);
      if (timeout) clearTimeout(timeout);
      timeout = undefined;
    };

    // Nunca exigir mais do que metade da própria seção: sem esse teto, uma
    // seção mais baixa que o recuo e encostada no fim do documento nunca
    // teria scroll sobrando pra cruzar a linha do gatilho, e ficaria
    // escondida pra sempre.
    const inset = Math.round(
      Math.min(
        window.innerHeight * TRIGGER_INSET_RATIO,
        TRIGGER_INSET_MAX_PX,
        element.offsetHeight / 2,
      ),
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        if (revealed || !entries[entries.length - 1].isIntersecting) return;
        revealed = true;
        clearPending();
        // rAF antes de trocar de estado: garante que o estado inicial
        // (escondido) já pintou. Sem isso, numa seção que já está em vista
        // na hidratação, o navegador junta as duas pinturas e a transição
        // não acontece — a seção só aparece de uma vez.
        //
        // O escalonamento segura a troca de estado em vez de virar
        // transition-delay no CSS: assim a caixa fica de fato parada no
        // estado inicial, e a conta do "done" continua sendo uma só.
        frame = requestAnimationFrame(() => {
          timeout = setTimeout(() => {
            setState("revealing");
            timeout = setTimeout(
              () => setState("done"),
              REVEAL_DELAY_MS + REVEAL_DURATION_MS,
            );
          }, staggerMs);
        });
      },
      { rootMargin: `0px 0px -${inset}px 0px` },
    );

    // Observer separado, sem o recuo, só pro reset. Reaproveitar o de cima
    // resetaria assim que a seção cruzasse a linha do gatilho de volta — com
    // até `inset` px dela ainda na tela, o que aparece como um pop. Aqui a
    // seção precisa ter saído por completo da viewport.
    const resetObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!revealed || entry.isIntersecting) return;
        // `top` positivo = a seção está abaixo da viewport (usuário subiu a
        // página). Quem saiu por cima fica como está — ver o comentário no
        // topo do hook.
        if (entry.boundingClientRect.top <= 0) return;
        revealed = false;
        clearPending();
        setState("pending");
      },
      { rootMargin: "0px" },
    );

    revealObserver.observe(element);
    resetObserver.observe(element);

    return () => {
      revealObserver.disconnect();
      resetObserver.disconnect();
      clearPending();
    };
  }, [prefersReducedMotion, staggerMs]);

  // Em "done" não sobra classe nenhuma de propósito — ver o comentário sobre
  // containing block em Reveal.module.css. Voltar de "done" pra "pending"
  // (reset) é instantâneo porque a transição mora em `.visible`, não em
  // `.reveal` — também explicado lá.
  const className =
    state === "pending"
      ? styles.reveal
      : state === "revealing"
        ? `${styles.reveal} ${styles.visible}`
        : "";

  return { ref, className, state };
}

type RevealProps = {
  children: ReactNode;
  /** Atraso extra só desta caixa, pra escalonar blocos que entram em vista
   *  juntos — ver `useReveal`. */
  staggerMs?: number;
  className?: string;
};

export default function Reveal({
  children,
  staggerMs,
  className,
}: RevealProps) {
  const { ref, className: revealClassName } =
    useReveal<HTMLDivElement>(staggerMs);

  return (
    <div
      ref={ref}
      className={[styles.box, revealClassName, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
