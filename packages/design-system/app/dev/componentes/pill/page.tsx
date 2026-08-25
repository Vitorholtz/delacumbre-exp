import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function PillPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Pill — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Etiqueta informativa com ícone opcional, nos 3 tamanhos do Figma.
          Sem interação.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Com ícone</h2>
        <div className={styles.row}>
          <Pill size="lg" label="+1.000 km" />
          <Pill size="md" label="+1.000 km" />
          <Pill size="sm" label="+1.000 km" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Sem ícone</h2>
        <div className={styles.row}>
          <Pill size="lg" label="+1.000 km" showIcon={false} />
          <Pill size="md" label="+1.000 km" showIcon={false} />
          <Pill size="sm" label="+1.000 km" showIcon={false} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import Pill from "@/components/Pill";\n\n<Pill icon="hiking" label="+1.000 km" />\n<Pill label="12 dias" showIcon={false} size="sm" />`}
        </pre>
      </section>
    </main>
  );
}
