import ProductDisplayCard from "@/components/cards/ProductDisplayCard";
import styles from "./page.module.css";

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

const media = {
  type: "image" as const,
  src: "/product-display/product-thumb.png",
  alt: "Tags de identificação militar em uma mesa de madeira",
};

export default function ProductDisplayCardPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Display de produto — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Card de exibição com imagem, título e descrição, nos tamanhos LG, MD e
          SM do Figma. A imagem reusa o componente de thumb de galeria: hover
          com badge de lupa, efeito de pressão e clique abre no slider em tela
          cheia.
        </p>
      </header>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <ProductDisplayCard
            media={media}
            title="Lorem Ipsum is simply dummy text"
            description={description}
            size="lg"
          />
          <ProductDisplayCard
            media={media}
            title="Lorem Ipsum is simply dummy text"
            description={description}
            size="md"
          />
          <ProductDisplayCard
            media={media}
            title="Lorem Ipsum is simply dummy text"
            description={description}
            size="sm"
          />
        </div>
      </section>
    </main>
  );
}
