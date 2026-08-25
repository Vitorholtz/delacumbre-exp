import type { InputHTMLAttributes, ReactNode } from "react";
import Icon from "./Icon";
import styles from "./Checkbox.module.css";

type CheckboxSize = "lg" | "md" | "sm";

type CheckboxProps = {
  label?: ReactNode;
  size?: CheckboxSize;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "className">;

const labelTextClassBySize: Record<CheckboxSize, string> = {
  lg: "text-body-md",
  md: "text-body-sm",
  sm: "text-caption",
};

export default function Checkbox({
  label,
  size = "lg",
  className,
  ...rest
}: CheckboxProps) {
  const classes = [styles.wrapper, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes}>
      <input
        type="checkbox"
        className={`visually-hidden ${styles.input}`}
        {...rest}
      />
      <span className={styles.spacer}>
        <span className={styles.box} aria-hidden="true">
          <Icon name="check" size={16} className={styles.check} />
        </span>
      </span>
      {label && (
        <span className={`${styles.label} ${labelTextClassBySize[size]}`}>
          {label}
        </span>
      )}
    </label>
  );
}
