import type { ButtonHTMLAttributes } from "react";
import Icon from "../primitives/Icon";
import styles from "./Chip.module.css";

type ChipProps = {
  label: string;
  icon?: string;
  showIcon?: boolean;
  selected?: boolean;
  miniPill?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function Chip({
  label,
  icon = "hiking",
  showIcon = true,
  selected = false,
  miniPill = false,
  className,
  ...rest
}: ChipProps) {
  const classes = [
    styles.chip,
    showIcon ? styles.withIcon : styles.noIcon,
    selected ? styles.selected : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} aria-pressed={selected} {...rest}>
      {showIcon && <Icon name={icon} className={styles.icon} />}
      <span className={`${styles.label} text-body-sm`}>{label}</span>
      {miniPill && (
        <span className={`${styles.miniPill} text-caption-xs`}>Em breve</span>
      )}
    </button>
  );
}
