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

const titleLine1ClassBySize: Record<PresentationCardSize, string> = {
  sm: "text-heading-lg",
  md: "text-heading-xl",
  lg: "text-heading-xl",
};

const titleNameClassBySize: Record<PresentationCardSize, string> = {
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
            <span className={`${styles.tag} text-caption-xs`}>{tagLabel}</span>
            <div className={styles.title}>
              <p className={titleLine1ClassBySize[size]}>{titleLine1}</p>
              <p className={`${styles.highlight} ${titleNameClassBySize[size]}`}>
                {highlightName}
                {size === "sm" ? (
                  <span className={styles.commaNeutral}>,</span>
                ) : (
                  ","
                )}
              </p>
            </div>
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
