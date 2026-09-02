import SocialProof from "@/components/primitives/SocialProof";
import styles from "./page.module.css";

export default function SocialProofPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Prova social — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Ícone de citação + texto, com autoria opcional. Pensado para ficar
          sobre foto ou fundo escuro — usado tanto em depoimentos rotativos
          (Hero) quanto em legendas de foto sem autor (sliders de
          localização).
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Com autoria</h2>
        <div className={styles.backdrop}>
          <SocialProof
            quote="A Delacumbre não vende conforto, vende a versão de mim que eu não conhecia."
            author={{ name: "Carla Menezes", context: "Expedição Marrocos, 2023" }}
          />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Sem autoria</h2>
        <p className={`${styles.hint} text-caption`}>
          Omita <code>author</code> quando a citação for uma legenda solta,
          sem atribuição — ex: uma foto de local dentro de um slider.
        </p>
        <div className={styles.backdrop}>
          <SocialProof quote="Soco, cotovelada, joelhada — e uma plateia gritando em tailandês que só faz sentido depois da terceira Chang." />
        </div>

        <pre className={styles.code}>
          {`import SocialProof from "@/components/primitives/SocialProof";\n\n<SocialProof\n  quote="A Delacumbre não vende conforto..."\n  author={{ name: "Carla Menezes", context: "Expedição Marrocos, 2023" }}\n/>\n\n<SocialProof quote="Legenda sem autor." />`}
        </pre>
      </section>
    </main>
  );
}
