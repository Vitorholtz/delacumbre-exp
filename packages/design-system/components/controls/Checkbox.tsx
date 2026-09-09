import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import Icon from "../primitives/Icon";
import {
  labelTextClassBySize,
  type SelectableControlSize,
} from "./selectableControlSize";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
  label?: ReactNode;
  size?: SelectableControlSize;
  error?: string;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "className">;

export default function Checkbox({
  label,
  size = "lg",
  error,
  className,
  id,
  ...rest
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const labelTextClass = labelTextClassBySize[size];
  const classes = [styles.wrapper, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.field}>
      <label className={classes}>
        <input
          id={inputId}
          type="checkbox"
          className={`visually-hidden ${styles.input}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...rest}
        />
        <span className={styles.spacer}>
          <span className={styles.box} aria-hidden="true">
            <Icon name="check" size={16} className={styles.check} />
          </span>
        </span>
        {label && (
          <span className={`${styles.label} ${labelTextClass}`}>{label}</span>
        )}
      </label>
      {error && (
        <p id={errorId} className={`${styles.error} ${labelTextClass}`}>
          {error}
        </p>
      )}
    </div>
  );
}
