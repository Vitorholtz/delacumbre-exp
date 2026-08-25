"use client";

import {
  useEffect,
  useId,
  useRef,
  type InputEvent,
  type TextareaHTMLAttributes,
} from "react";
import FieldShell from "./FieldShell";
import { fieldInputTextClassBySize, type FieldSize } from "./fieldSize";
import styles from "./TextArea.module.css";

type TextAreaProps = {
  label: string;
  optional?: boolean;
  error?: string;
  size?: FieldSize;
  className?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

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

  return (
    <FieldShell
      label={label}
      optional={optional}
      error={error}
      inputId={inputId}
      errorId={errorId}
      size={size}
      sizeClassName={styles[size]}
      onWrapperClick={() => textareaRef.current?.focus()}
      className={className}
    >
      <textarea
        ref={textareaRef}
        id={inputId}
        className={`${styles.input} ${fieldInputTextClassBySize[size]}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        value={value}
        onInput={handleInput}
        {...rest}
      />
    </FieldShell>
  );
}
