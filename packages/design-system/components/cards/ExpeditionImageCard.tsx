import LocationCard from "./LocationCard";
import styles from "./ExpeditionImageCard.module.css";

type ExpeditionImageCardSize = "lg" | "md" | "sm";
type ExpeditionImageCardWidth = "full" | "half";

type ExpeditionImageCardProps = {
  image: string;
  imageAlt: string;
  locationName: string;
  country: string;
  size?: ExpeditionImageCardSize;
  width?: ExpeditionImageCardWidth;
  className?: string;
};

export default function ExpeditionImageCard({
  image,
  imageAlt,
  locationName,
  country,
  size = "lg",
  width = "full",
  className,
}: ExpeditionImageCardProps) {
  const classes = [styles.card, styles[size], styles[width], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className={styles.imageWrap}>
        <img src={image} alt={imageAlt} className={styles.image} />
      </div>
      <div className={styles.locationWrap}>
        <LocationCard
          name={locationName}
          country={country}
          size={size === "sm" ? "sm" : "md"}
        />
      </div>
    </div>
  );
}
