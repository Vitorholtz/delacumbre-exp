import Button from "../primitives/Button";
import styles from "./PresentationCard.module.css";

type PresentationCardSize = "sm" | "md" | "lg";

type PresentationCardProps = {
  image: string;
  imageAlt: string;
  tagLabel?: string;
  titleLine1: string;
  highlightName: string;
  bio: string;
  primaryLabel?: string;
  primaryHref?: string;
  onPrimaryClick?: () => void;
  secondaryLabel: string;
  secondaryHref?: string;
  onSecondaryClick?: () => void;
  size?: PresentationCardSize;
  className?: string;
};

const titleClassBySize: Record<PresentationCardSize, string> = {
  sm: "text-heading-lg",
  md: "text-display-lg",
  lg: "text-display-lg",
};

const bioClassBySize: Record<PresentationCardSize, string> = {
  sm: "text-body-sm",
  md: "text-body-md",
  lg: "text-body-lg",
};

const buttonSizeBySize: Record<PresentationCardSize, "lg" | "md"> = {
  sm: "md",
  md: "lg",
  lg: "lg",
};

export default function PresentationCard({
  image,
  imageAlt,
  tagLabel = "Seu guia",
  titleLine1,
  highlightName,
  bio,
  primaryLabel = "Fale comigo",
  primaryHref,
  onPrimaryClick,
  secondaryLabel,
  secondaryHref,
  onSecondaryClick,
  size = "lg",
  className,
}: PresentationCardProps) {
  const classes = [styles.card, styles[size], className]
    .filter(Boolean)
    .join(" ");
  const buttonSize = buttonSizeBySize[size];

  return (
    <div className={classes}>
      <div className={styles.imageWrap}>
        <img src={image} alt={imageAlt} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <div className={styles.titleBlock}>
            <span className={styles.tag}>{tagLabel}</span>
            <p className={`${styles.title} ${titleClassBySize[size]}`}>
              {titleLine1}
              <br />
              <span className={styles.highlight}>{highlightName}</span>,
            </p>
          </div>
          <p className={`${styles.bio} ${bioClassBySize[size]}`}>{bio}</p>
        </div>

        <div className={styles.buttonRow}>
          {primaryHref ? (
            <Button
              variant="primary"
              size={buttonSize}
              className={styles.button}
              href={primaryHref}
            >
              {primaryLabel}
            </Button>
          ) : (
            <Button
              variant="primary"
              size={buttonSize}
              className={styles.button}
              onClick={onPrimaryClick}
            >
              {primaryLabel}
            </Button>
          )}
          {secondaryHref ? (
            <Button
              variant="secondary"
              size={buttonSize}
              className={`${styles.button} ${styles.secondaryButton}`}
              href={secondaryHref}
            >
              {secondaryLabel}
            </Button>
          ) : (
            <Button
              variant="secondary"
              size={buttonSize}
              className={`${styles.button} ${styles.secondaryButton}`}
              onClick={onSecondaryClick}
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
