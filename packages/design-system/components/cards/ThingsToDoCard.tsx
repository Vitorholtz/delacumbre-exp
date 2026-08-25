import styles from "./ThingsToDoCard.module.css";

type ThingsToDoCardSize = "lg" | "md" | "sm";

type ThingsToDoCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  highlight: string;
  size?: ThingsToDoCardSize;
  className?: string;
};

const titleTextClassBySize: Record<ThingsToDoCardSize, string> = {
  lg: "text-heading-lg",
  md: "text-heading-md",
  sm: "text-heading-sm",
};

export default function ThingsToDoCard({
  image,
  imageAlt,
  title,
  highlight,
  size = "lg",
  className,
}: ThingsToDoCardProps) {
  const classes = [styles.card, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className={styles.imageWrap}>
        <img src={image} alt={imageAlt} className={styles.image} />
      </div>
      <p className={`${styles.title} ${titleTextClassBySize[size]}`}>
        {title}
        <br />
        <span className={styles.highlight}>{highlight}</span>
      </p>
    </div>
  );
}
