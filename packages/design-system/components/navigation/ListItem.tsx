import Icon from "../primitives/Icon";
import styles from "./ListItem.module.css";

type ListItemSize = "lg" | "md" | "sm" | "xsm";
type ListItemTone = "positive" | "negative";

type ListItemProps = {
  label: string;
  icon?: string;
  size?: ListItemSize;
  tone?: ListItemTone;
  className?: string;
};

const iconSizeBySize: Record<ListItemSize, 16 | 20 | 24> = {
  lg: 24,
  md: 20,
  sm: 20,
  xsm: 16,
};

const labelTextClassBySize: Record<ListItemSize, string> = {
  lg: "text-body-lg",
  md: "text-body-md",
  sm: "text-body-sm",
  xsm: "text-caption",
};

export default function ListItem({
  label,
  icon = "filter",
  size = "lg",
  tone = "positive",
  className,
}: ListItemProps) {
  const classes = [styles.item, styles[size], className]
    .filter(Boolean)
    .join(" ");
  const iconClasses = [styles.icon, styles[tone]].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <span className={styles.iconWrap}>
        <Icon name={icon} size={iconSizeBySize[size]} className={iconClasses} />
      </span>
      <span className={`${styles.label} ${labelTextClassBySize[size]}`}>
        {label}
      </span>
    </div>
  );
}
