import Button from "@/components/primitives/Button";
import styles from "./page.module.css";

export default function ButtonsPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Botões — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Botão primário e secundário, nos tamanhos LG e MD do Figma.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Primário</h2>
        <div className={styles.row}>
          <Button variant="primary" size="lg">
            Botão primário
          </Button>
          <Button variant="primary" size="md">
            Botão primário
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Secundário</h2>
        <div className={styles.row}>
          <Button variant="secondary" size="lg">
            Botão secundário
          </Button>
          <Button variant="secondary" size="md">
            Botão secundário
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Estados</h2>
        <div className={styles.row}>
          <Button variant="primary">Padrão</Button>
          <Button variant="primary" disabled>
            Desabilitado
          </Button>
          <Button variant="secondary">Padrão</Button>
          <Button variant="secondary" disabled>
            Desabilitado
          </Button>
        </div>
        <p className={`${styles.hint} text-caption`}>
          Passe o mouse ou navegue com Tab para ver hover e foco.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Como link</h2>
        <div className={styles.row}>
          <Button variant="primary" href="/">
            Destinos
          </Button>
          <Button variant="secondary" href="/">
            Sobre nós
          </Button>
        </div>
        <p className={`${styles.hint} text-caption`}>
          Passar <code>href</code> renderiza um <code>next/link</code> em vez de{" "}
          <code>&lt;button&gt;</code>.
        </p>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import Button from "@/components/primitives/Button";\n\n<Button variant="primary">Reservar</Button>\n<Button variant="secondary" size="md">Sobre nós</Button>\n<Button variant="primary" href="/expedicoes">Destinos</Button>`}
        </pre>
      </section>
    </main>
  );
}
