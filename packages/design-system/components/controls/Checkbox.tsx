import type { InputHTMLAttributes, ReactNode } from "react";
import Icon from "../primitives/Icon";
import {
  labelTextClassBySize,
  type SelectableControlSize,
} from "./selectableControlSize";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
  label?: ReactNode;
  size?: SelectableControlSize;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "className">;

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
