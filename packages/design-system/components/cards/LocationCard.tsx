import PinIcon from "../primitives/PinIcon";
import styles from "./LocationCard.module.css";

type LocationCardSize = "md" | "sm";

type LocationCardProps = {
  name: string;
  country: string;
  size?: LocationCardSize;
  className?: string;
};

const nameTextClassBySize: Record<LocationCardSize, string> = {
  md: "text-body-lg",
  sm: "text-body-sm",
};

const countryTextClassBySize: Record<LocationCardSize, string> = {
  md: "text-body-sm",
  sm: "text-caption",
};

export default function LocationCard({
  name,
  country,
  size = "md",
  className,
}: LocationCardProps) {
  const classes = [styles.card, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <PinIcon size={size} className={styles.pin} />
      <div className={styles.content}>
        <p className={`${styles.name} ${nameTextClassBySize[size]}`}>{name}</p>
        <p className={`${styles.country} ${countryTextClassBySize[size]}`}>
          {country}
        </p>
      </div>
    </div>
  );
}
