"use client";

import {
  useEffect,
  useId,
  useRef,
  type InputEvent,
  type TextareaHTMLAttributes,
} from "react";
import styles from "./TextArea.module.css";

type TextAreaSize = "md" | "sm";

type TextAreaProps = {
  label: string;
  optional?: boolean;
  error?: string;
  size?: TextAreaSize;
  className?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

const labelTextClassBySize: Record<TextAreaSize, string> = {
  md: "text-body-md",
  sm: "text-body-sm",
};

const inputTextClassBySize: Record<TextAreaSize, string> = {
  md: "text-body-lg",
  sm: "text-body-md",
};

function autoGrow(el: HTMLTextAreaElement) {
  const { borderTopWidth, borderBottomWidth } = getComputedStyle(el);
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight + parseFloat(borderTopWidth) + parseFloat(borderBottomWidth)}px`;
}

export default function TextArea({
  label,
  optional = false,
  error,
  size = "md",
  className,
  id,
  value,
  onInput,
  ...rest
}: TextAreaProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) autoGrow(textareaRef.current);
  }, [value]);

  const handleInput = (event: InputEvent<HTMLTextAreaElement>) => {
    autoGrow(event.currentTarget);
    onInput?.(event);
  };

  const classes = [styles.field, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={() => textareaRef.current?.focus()}>
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
      <textarea
        ref={textareaRef}
        id={inputId}
        className={`${styles.input} ${inputTextClassBySize[size]}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        value={value}
        onInput={handleInput}
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
