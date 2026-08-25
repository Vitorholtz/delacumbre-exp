import ExpeditionImageCard from "@/components/cards/ExpeditionImageCard";
import styles from "./page.module.css";

const image = "/expedition-images/expedition-thumb.jpg";
const imageAlt = "Fumaça de sinalização em meio à vegetação durante expedição";

export default function ExpeditionImageCardPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">
          Imagens de expedição — Delacumbre EXP
        </h1>
        <p className="text-body-sm">
          Card de imagem com o card de Localização sobreposto na base, nos
          tamanhos LG, MD e SM, e nas larguras Full e Half do Figma. Sem
          interação.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Largura Full</h2>
        <div className={styles.column}>
          <ExpeditionImageCard
            image={image}
            imageAlt={imageAlt}
            locationName="Nome do local"
            country="País"
            size="lg"
            width="full"
          />
          <ExpeditionImageCard
            image={image}
            imageAlt={imageAlt}
            locationName="Nome do local"
            country="País"
            size="md"
            width="full"
          />
          <ExpeditionImageCard
            image={image}
            imageAlt={imageAlt}
            locationName="Nome do local"
            country="País"
            size="sm"
            width="full"
          />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Largura Half</h2>
        <div className={styles.row}>
          <ExpeditionImageCard
            image={image}
            imageAlt={imageAlt}
            locationName="Nome do local"
            country="País"
            size="lg"
            width="half"
          />
          <ExpeditionImageCard
            image={image}
            imageAlt={imageAlt}
            locationName="Nome do local"
            country="País"
            size="md"
            width="half"
          />
          <ExpeditionImageCard
            image={image}
            imageAlt={imageAlt}
            locationName="Nome do local"
            country="País"
            size="sm"
            width="half"
          />
        </div>
      </section>
    </main>
  );
}
