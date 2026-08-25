import HowToCard from "@/components/HowToCard";
import styles from "./page.module.css";

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

export default function HowToCardPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">How to — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Card de destaque com título, descrição e imagem, nos tamanhos LG,
          MD e SM do Figma. Sem interação.
        </p>
      </header>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <HowToCard
            image="/how-to-thumbs/Thumb1.png"
            imageAlt="Cartaz da expedição Egito"
            title="encontre seu destino"
            description={description}
            size="lg"
          />
          <HowToCard
            image="/how-to-thumbs/Thumb1.png"
            imageAlt="Cartaz da expedição Egito"
            title="encontre seu destino"
            description={description}
            size="md"
          />
          <HowToCard
            image="/how-to-thumbs/Thumb1.png"
            imageAlt="Cartaz da expedição Egito"
            title="encontre seu destino"
            description={description}
            size="sm"
          />
        </div>
      </section>
    </main>
  );
}
