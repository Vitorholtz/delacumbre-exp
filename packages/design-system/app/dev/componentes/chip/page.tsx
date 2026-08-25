"use client";

import { useState } from "react";
import Chip from "@/components/controls/Chip";
import styles from "./page.module.css";

export default function ChipPage() {
  const [selected, setSelected] = useState(false);

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Chip — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Chip de seleção/filtro, com ícone opcional e mini pill de destaque.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Com ícone</h2>
        <div className={styles.row}>
          <Chip label="Camboja & Bangkok 2026" />
          <Chip label="Camboja & Bangkok 2026" selected />
          <Chip label="Camboja & Bangkok 2026" disabled />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Sem ícone</h2>
        <div className={styles.row}>
          <Chip label="Camboja & Bangkok 2026" showIcon={false} />
          <Chip label="Camboja & Bangkok 2026" showIcon={false} selected />
          <Chip label="Camboja & Bangkok 2026" showIcon={false} disabled />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Mini pill</h2>
        <div className={styles.row}>
          <Chip label="Camboja & Bangkok 2026" miniPill />
          <Chip label="Camboja & Bangkok 2026" miniPill selected />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Interativo</h2>
        <div className={styles.row}>
          <Chip
            label="Camboja & Bangkok 2026"
            selected={selected}
            onClick={() => setSelected((v) => !v)}
          />
        </div>
        <p className={`${styles.hint} text-caption`}>
          Clique no chip para alternar o estado selecionado.
        </p>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import Chip from "@/components/controls/Chip";\n\n<Chip label="Camboja & Bangkok 2026" icon="hiking" />\n<Chip label="Camboja & Bangkok 2026" selected onClick={...} />\n<Chip label="Camboja & Bangkok 2026" showIcon={false} miniPill />`}
        </pre>
      </section>
    </main>
  );
}
