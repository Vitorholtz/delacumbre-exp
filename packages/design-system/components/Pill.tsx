import Icon from "./Icon";
import styles from "./Pill.module.css";

type PillSize = "lg" | "md" | "sm";

type PillProps = {
  label: string;
  icon?: string;
  showIcon?: boolean;
  size?: PillSize;
  className?: string;
};

const iconSizeBySize: Record<PillSize, 20 | 24 | 28> = {
  lg: 28,
  md: 24,
  sm: 20,
};

const labelTextClassBySize: Record<PillSize, string> = {
  lg: "text-body-md",
  md: "text-body-sm",
  sm: "text-caption",
};

export default function Pill({
  label,
  icon = "hiking",
  showIcon = true,
  size = "lg",
  className,
}: PillProps) {
  const classes = [
    styles.pill,
    styles[size],
    showIcon ? styles.withIcon : styles.noIcon,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {showIcon && (
        <Icon name={icon} size={iconSizeBySize[size]} className={styles.icon} />
      )}
      <span className={labelTextClassBySize[size]}>{label}</span>
    </div>
  );
}
