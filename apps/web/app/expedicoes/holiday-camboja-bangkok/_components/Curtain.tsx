import type { ReactNode } from "react";
import styles from "./Curtain.module.css";

type CurtainProps = {
  /** Fica travado na tela enquanto a cortina passa por cima. */
  pinned: ReactNode;
  /** Sobe por cima do que está travado. Precisa ter fundo opaco — aqui é o
   *  painel dune da LightContentSection, com a borda rasgada por onde a
   *  seção de trás aparece enquanto o rasgo passa. */
  children: ReactNode;
};

/** Cortina: a seção de baixo sobe por cima da de cima, que fica travada.
 *
 *  Só CSS — `position: sticky` no palco, dentro de um track que é alto
 *  porque contém a própria cortina. Não precisa de scroll listener nem de
 *  medir nada em JS, então as duas seções seguem sendo server components.
 *
 *  Vive aqui, e não no design system, porque hoje é uma composição de duas
 *  seções desta página — se aparecer um segundo uso, é o gatilho pra
 *  promover (regra 2 do CLAUDE.md). */
export default function Curtain({ pinned, children }: CurtainProps) {
  return (
    <div className={styles.track}>
      <div className={styles.stage}>{pinned}</div>
      <div className={styles.rising}>{children}</div>
    </div>
  );
}
