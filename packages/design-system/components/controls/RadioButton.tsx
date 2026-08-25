import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./RadioButton.module.css";

type RadioButtonSize = "lg" | "md" | "sm";

type RadioButtonProps = {
  label?: ReactNode;
  size?: RadioButtonSize;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "className">;

const labelTextClassBySize: Record<RadioButtonSize, string> = {
  lg: "text-body-md",
  md: "text-body-sm",
  sm: "text-caption",
};

export default function RadioButton({
  label,
  size = "lg",
  className,
  ...rest
}: RadioButtonProps) {
  const classes = [styles.wrapper, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classes}>
      <input
        type="radio"
        className={`visually-hidden ${styles.input}`}
        {...rest}
      />
      <span className={styles.spacer}>
        <span className={styles.circle} aria-hidden="true">
          <span className={styles.dot} />
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
