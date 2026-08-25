import ThingsToDoCard from "@/components/ThingsToDoCard";
import styles from "./page.module.css";

export default function ThingsToDoCardPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">
          Things to do — Delacumbre EXP
        </h1>
        <p className="text-body-sm">
          Card informativo com ideograma circular e título de duas linhas,
          nos tamanhos LG, MD e SM do Figma. Sem interação.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.row}>
          <ThingsToDoCard
            image="/ideograms/Scorpion.svg"
            imageAlt="Escorpião"
            title="Comidas"
            highlight="exóticas"
            size="lg"
          />
          <ThingsToDoCard
            image="/ideograms/Scorpion.svg"
            imageAlt="Escorpião"
            title="Comidas"
            highlight="exóticas"
            size="md"
          />
          <ThingsToDoCard
            image="/ideograms/Scorpion.svg"
            imageAlt="Escorpião"
            title="Comidas"
            highlight="exóticas"
            size="sm"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Exemplos</h2>
        <div className={styles.row}>
          <ThingsToDoCard
            image="/ideograms/Temple.svg"
            imageAlt="Templo"
            title="Templos"
            highlight="milenares"
            size="lg"
          />
          <ThingsToDoCard
            image="/ideograms/Beach.svg"
            imageAlt="Praia"
            title="Praias"
            highlight="desertas"
            size="md"
          />
          <ThingsToDoCard
            image="/ideograms/Elephant.svg"
            imageAlt="Elefante"
            title="Vida"
            highlight="selvagem"
            size="sm"
          />
          <ThingsToDoCard
            image="/ideograms/Boxing.svg"
            imageAlt="Boxe"
            title="Esportes"
            highlight="de combate"
            size="sm"
          />
          <ThingsToDoCard
            image="/ideograms/Statue.svg"
            imageAlt="Estátua"
            title="Ruínas"
            highlight="históricas"
            size="sm"
          />
          <ThingsToDoCard
            image="/ideograms/Torch.svg"
            imageAlt="Tocha"
            title="Trilhas"
            highlight="noturnas"
            size="sm"
          />
          <ThingsToDoCard
            image="/ideograms/AK.svg"
            imageAlt="Fuzil"
            title="Zonas"
            highlight="de conflito"
            size="sm"
          />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import ThingsToDoCard from "@/components/ThingsToDoCard";\n\n<ThingsToDoCard\n  image="/ideograms/Scorpion.svg"\n  imageAlt="Escorpião"\n  title="Comidas"\n  highlight="exóticas"\n  size="lg"\n/>`}
        </pre>
      </section>
    </main>
  );
}
