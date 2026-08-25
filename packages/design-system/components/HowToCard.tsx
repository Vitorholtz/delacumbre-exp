import styles from "./HowToCard.module.css";

type HowToCardSize = "lg" | "md" | "sm";

type HowToCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  size?: HowToCardSize;
  className?: string;
};

const titleTextClassBySize: Record<HowToCardSize, string> = {
  lg: "text-display-lg",
  md: "text-heading-xl",
  sm: "text-heading-lg",
};

const descriptionTextClassBySize: Record<HowToCardSize, string> = {
  lg: "text-body-lg",
  md: "text-body-md",
  sm: "text-body-sm",
};

export default function HowToCard({
  image,
  imageAlt,
  title,
  description,
  size = "lg",
  className,
}: HowToCardProps) {
  const classes = [styles.card, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className={styles.content}>
        <p className={`${styles.title} ${titleTextClassBySize[size]}`}>
          {title}
        </p>
        <p
          className={`${styles.description} ${descriptionTextClassBySize[size]}`}
        >
          {description}
        </p>
      </div>
      <div className={styles.imageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} className={styles.image} />
      </div>
    </div>
  );
}
