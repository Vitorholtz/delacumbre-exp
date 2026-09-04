import Icon from "../primitives/Icon";
import { labelTextClassBySize, type SelectableControlSize } from "./selectableControlSize";
import styles from "./Pill.module.css";

type PillSize = SelectableControlSize;

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
