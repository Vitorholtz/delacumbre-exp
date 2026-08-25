import FloatingButton from "@/components/FloatingButton";
import styles from "./page.module.css";

export default function FloatingButtonPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Botão flutuante — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Botão circular só com ícone, nos tamanhos MD e SM do Figma.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.row}>
          <FloatingButton icon="arrow_forward" label="Próximo" size="md" />
          <FloatingButton icon="arrow_forward" label="Próximo" size="sm" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Estados</h2>
        <div className={styles.row}>
          <FloatingButton icon="arrow_forward" label="Próximo" />
          <FloatingButton icon="arrow_forward" label="Próximo" disabled />
        </div>
        <p className={`${styles.hint} text-caption`}>
          Passe o mouse ou navegue com Tab para ver hover e foco.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Outros ícones</h2>
        <div className={styles.row}>
          <FloatingButton icon="arrow_back" label="Anterior" />
          <FloatingButton icon="close" label="Fechar" />
          <FloatingButton icon="add" label="Adicionar" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import FloatingButton from "@/components/FloatingButton";\n\n<FloatingButton icon="arrow_forward" label="Próximo" />\n<FloatingButton icon="close" label="Fechar" size="sm" />\n<FloatingButton icon="arrow_forward" label="Ver expedição" href="/expedicoes" />`}
        </pre>
        <p className="text-body-sm">
          <code>label</code> é obrigatório: o botão não tem texto visível, então
          é ele quem dá o nome acessível ao elemento.
        </p>
      </section>
    </main>
  );
}
