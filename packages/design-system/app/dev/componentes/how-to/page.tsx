import HowToCard from "@/components/cards/HowToCard";
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

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <HowToCard
            image="/how-to-thumbs/Thumb.png"
            imageAlt="Cartaz da expedição Egito"
            title="encontre seu destino"
            description={description}
            size="lg"
          />
          <HowToCard
            image="/how-to-thumbs/Thumb-1.png"
            imageAlt="Formulário de dúvida para o guia, com botão de confirmar inscrição"
            title="encontre seu destino"
            description={description}
            size="md"
          />
          <HowToCard
            image="/how-to-thumbs/Thumb-2.png"
            imageAlt="Simulação de parcelamento no cartão de crédito, 12x de R$665 sem juros"
            title="encontre seu destino"
            description={description}
            size="sm"
          />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Sem imagem</h2>
        <p className="text-body-sm">
          image/imageAlt são opcionais — sem eles, o bloco de mídia vira uma
          cor sólida (mediaColor, com fallback para o amarelo padrão). Usado
          no card &quot;Fale com a gente&quot; da seção Como reservar.
        </p>
        <div className={styles.column}>
          <HowToCard
            mediaColor="var(--color-russet)"
            title="fale com a gente"
            description={description}
            size="lg"
          />
        </div>
      </section>
    </main>
  );
}
