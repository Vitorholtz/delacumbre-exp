"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { usePrefersReducedMotion } from "@delacumbre/design-system/lib/motion";
import styles from "./RisingImage.module.css";

/** Curso da subida em cada sentido, como fração da altura do frame — e, ao
 *  mesmo tempo, a sobra que a camada tem pra fora dele, já que uma coisa é
 *  o limite da outra. Subir esse número aumenta o curso, mas também recorta
 *  mais a foto na vertical (a camada fica `1 + 2 × ratio` mais alta que o
 *  frame), o que nesta foto custa o topo do templo e os pés da turma. */
const OVERSCAN_RATIO = 0.12;

/** Quanto a foto anda a mais que a página, enquanto o frame está por perto
 *  do centro da tela.
 *
 *  O deslocamento é proporcional à distância entre o centro do frame e o
 *  centro da viewport, e não ao progresso da travessia inteira. A diferença
 *  é toda prática: pelo progresso, o curso se espalha por (altura da
 *  viewport + altura do frame) px de scroll, e sobram só ~27px de
 *  movimento pro trecho em que o frame está inteiro na tela — o resto
 *  acontece com metade da foto fora da vista. Foi o que fez uma tentativa
 *  anterior parecer parada. Ancorado no centro, o mesmo curso rende ~132px
 *  bem onde o usuário está olhando, e fica encostado no limite enquanto a
 *  foto entra e sai. */
const SPEED = 0.5;

type RisingImageProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Classe do frame: proporção, margem e afins são de quem consome. */
  className?: string;
  imageClassName?: string;
};

/** Foto que sobe dentro do próprio frame conforme a página desce — o
 *  recorte se move sobre a imagem, e a borda parada do frame é a referência
 *  que torna o movimento legível.
 *
 *  Todo o efeito acontece dentro do frame de propósito: nada no layout ao
 *  redor se mexe, nenhum vizinho é coberto e o LocationCard, que atravessa
 *  a borda de baixo da foto, continua intacto.
 *
 *  Vive aqui, e não no design system, porque hoje é uma foto numa seção só
 *  — se aparecer um segundo uso, é o gatilho pra promover (regra 2 do
 *  CLAUDE.md). Componente próprio (e não o efeito direto no
 *  TravelInfoSection) pra não transformar a seção inteira, com seus 24
 *  ThingsToDoCard, em client component por causa do scroll. */
export default function RisingImage({
  src,
  alt,
  sizes,
  className,
  imageClassName,
}: RisingImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!frame || !layer) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      // O frame nunca é transformado (quem se move é a camada de dentro),
      // então o rect dele é sempre a posição real — sem realimentação.
      const rect = frame.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Distância entre o centro do frame e o centro da tela: positiva
      // enquanto a foto está abaixo do centro (entrando), negativa depois
      // que passa dele (saindo). Como a página desce, esse valor só
      // diminui — e o recorte sobe junto.
      const fromCenter = rect.top + rect.height / 2 - viewportHeight / 2;

      // O limite é a própria sobra da camada: passar dele descobriria o
      // topo ou a base do frame.
      const limit = rect.height * OVERSCAN_RATIO;
      const offset = Math.min(Math.max(fromCenter * SPEED, -limit), limit);
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={frameRef}
      className={[styles.frame, className].filter(Boolean).join(" ")}
      style={{ "--rise-overscan": `${OVERSCAN_RATIO * 100}%` } as CSSProperties}
    >
      <div ref={layerRef} className={styles.layer}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={imageClassName}
        />
      </div>
    </div>
  );
}
