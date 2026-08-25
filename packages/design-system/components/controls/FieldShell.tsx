import type { ReactNode } from "react";
import { fieldLabelTextClassBySize, type FieldSize } from "./fieldSize";
import styles from "./FieldShell.module.css";

type FieldShellProps = {
  label: string;
  optional?: boolean;
  error?: string;
  inputId: string;
  errorId: string;
  size: FieldSize;
  /** Classe de tamanho (ex: styles.md) do módulo do próprio consumidor,
   *  necessária para os seletores `.md .input`/`.sm .input` locais dele. */
  sizeClassName?: string;
  onWrapperClick: () => void;
  className?: string;
  children: ReactNode;
};

export default function FieldShell({
  label,
  optional = false,
  error,
  inputId,
  errorId,
  size,
  sizeClassName,
  onWrapperClick,
  className,
  children,
}: FieldShellProps) {
  const labelTextClass = fieldLabelTextClassBySize[size];
  const classes = [styles.field, sizeClassName, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onWrapperClick}>
      <div className={styles.labelRow}>
        <label
          htmlFor={inputId}
          className={`${styles.label} ${labelTextClass}`}
        >
          {label}
        </label>
        {optional && (
          <span className={`${styles.optional} ${labelTextClass}`}>
            Opcional
          </span>
        )}
      </div>
      {children}
      {error && (
        <p id={errorId} className={`${styles.error} ${labelTextClass}`}>
          {error}
        </p>
      )}
    </div>
  );
}
