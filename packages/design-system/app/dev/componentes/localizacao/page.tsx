import LocationCard from "@/components/LocationCard";
import styles from "./page.module.css";

export default function LocationCardPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Localização — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Card de localização com pin, nos tamanhos MD e SM do Figma. Sem
          interação — pensado para ficar sobre foto, por isso o fundo com
          desfoque.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.backdrop}>
          <LocationCard name="Nome do local" country="País" size="md" />
          <LocationCard name="Nome do local" country="País" size="sm" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Exemplos</h2>
        <div className={styles.backdrop}>
          <LocationCard name="Atar" country="Mauritânia" size="md" />
          <LocationCard name="Siem Reap" country="Camboja" size="sm" />
          <LocationCard name="Jaisalmer" country="Índia" size="sm" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import LocationCard from "@/components/LocationCard";\n\n<LocationCard name="Atar" country="Mauritânia" />\n<LocationCard name="Siem Reap" country="Camboja" size="sm" />`}
        </pre>
      </section>
    </main>
  );
}
