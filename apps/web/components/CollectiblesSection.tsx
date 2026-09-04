import ProductDisplayCard from "@delacumbre/design-system/components/cards/ProductDisplayCard";
import Pill from "@delacumbre/design-system/components/controls/Pill";
import styles from "./CollectiblesSection.module.css";

const SIZES = ["sm", "md", "lg"] as const;

const cardClassBySize: Record<(typeof SIZES)[number], string> = {
  sm: styles.gridCardStack,
  md: styles.gridCardRow,
  lg: styles.gridCardRow,
};

// Único item fotografado até agora (placa de identificação militar) —
// repetido nos 3 slots do grid, igual ao mock do Figma. Trocar por
// colecionáveis reais (fotos + copy distintos por item) assim que existirem.
const COLLECTIBLE = {
  media: {
    type: "image" as const,
    src: "/colecionaveis/product-thumb.jpg",
    alt: "Placa de identificação militar gravada, pendurada em corrente sobre uma mesa de madeira",
  },
  title: "Placa de identificação da expedição",
  description:
    "Gravada com seu nome e a expedição que você sobreviveu — prova de que “trips for gangstas, road for rebels” não é força de expressão.",
};

type CollectiblesSectionProps = {
  expeditionName: string;
  vacancies: string;
};

export default function CollectiblesSection({
  expeditionName,
  vacancies,
}: CollectiblesSectionProps) {
  return (
    <section id="colecionaveis" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.title}>Colecionáveis</p>
          <div className={styles.subtitleRow}>
            <p className={styles.subtitle}>
              <span className={styles.subtitleAccent}>Expedição</span>{" "}
              {expeditionName}
            </p>
            <span className={`${styles.pillSlot} ${styles.pillSlotSm}`}>
              <Pill label={vacancies} showIcon={false} size="sm" />
            </span>
            <span className={`${styles.pillSlot} ${styles.pillSlotMd}`}>
              <Pill label={vacancies} showIcon={false} size="md" />
            </span>
          </div>
        </div>

        {SIZES.map((size) => (
          <div
            key={size}
            className={`${styles.grid} ${styles[`grid_${size}`]}`}
          >
            {[0, 1, 2].map((index) => (
              <ProductDisplayCard
                key={index}
                media={COLLECTIBLE.media}
                title={COLLECTIBLE.title}
                description={COLLECTIBLE.description}
                size={size}
                className={cardClassBySize[size]}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
