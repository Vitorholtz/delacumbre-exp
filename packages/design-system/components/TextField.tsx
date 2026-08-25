"use client";

import {
  useId,
  useRef,
  type ChangeEvent,
  type InputHTMLAttributes,
} from "react";
import styles from "./TextField.module.css";

type TextFieldSize = "md" | "sm";
type TextFieldMask = "phone" | "cpf";

type TextFieldProps = {
  label: string;
  optional?: boolean;
  error?: string;
  size?: TextFieldSize;
  mask?: TextFieldMask;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "className">;

const labelTextClassBySize: Record<TextFieldSize, string> = {
  md: "text-body-md",
  sm: "text-body-sm",
};

const inputTextClassBySize: Record<TextFieldSize, string> = {
  md: "text-body-lg",
  sm: "text-body-md",
};

function formatPhone(digits: string): string {
  const d = digits.slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function formatCpf(digits: string): string {
  const d = digits.slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

const maskFormatters: Record<TextFieldMask, (digits: string) => string> = {
  phone: formatPhone,
  cpf: formatCpf,
};

const maskPlaceholders: Record<TextFieldMask, string> = {
  phone: "(11) 91234-5678",
  cpf: "000.000.000-00",
};

const maskInputModes: Record<
  TextFieldMask,
  InputHTMLAttributes<HTMLInputElement>["inputMode"]
> = {
  phone: "tel",
  cpf: "numeric",
};

export default function TextField({
  label,
  optional = false,
  error,
  size = "md",
  mask,
  className,
  id,
  type = "text",
  placeholder,
  inputMode,
  onChange,
  ...rest
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const inputRef = useRef<HTMLInputElement>(null);

  const classes = [styles.field, styles[size], className]
    .filter(Boolean)
    .join(" ");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (mask) {
      const digits = event.target.value.replace(/\D/g, "");
      event.target.value = maskFormatters[mask](digits);
    }
    onChange?.(event);
  };

  return (
    <div className={classes} onClick={() => inputRef.current?.focus()}>
      <div className={styles.labelRow}>
        <label
          htmlFor={inputId}
          className={`${styles.label} ${labelTextClassBySize[size]}`}
        >
          {label}
        </label>
        {optional && (
          <span className={`${styles.optional} ${labelTextClassBySize[size]}`}>
            Opcional
          </span>
        )}
      </div>
      <input
        ref={inputRef}
        id={inputId}
        type={mask === "phone" ? "tel" : type}
        inputMode={inputMode ?? (mask ? maskInputModes[mask] : undefined)}
        placeholder={placeholder ?? (mask ? maskPlaceholders[mask] : undefined)}
        className={`${styles.input} ${inputTextClassBySize[size]}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        onChange={handleChange}
        {...rest}
      />
      {error && (
        <p id={errorId} className={`${styles.error} ${labelTextClassBySize[size]}`}>
          {error}
        </p>
      )}
    </div>
  );
}
