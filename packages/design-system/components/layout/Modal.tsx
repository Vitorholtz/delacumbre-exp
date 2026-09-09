"use client";

import { useEffect, useId, useRef, useState } from "react";
import Button from "../primitives/Button";
import styles from "./Modal.module.css";

type ModalProps = {
  title: string;
  description: string;
  buttonLabel: string;
  onClose: () => void;
  className?: string;
};

const CLOSE_DURATION_MS = 300;

// Selo giratório da marca — parte fixa do visual do Modal (Figma), não copy
// de página, então fica hardcoded aqui (mesmo padrão de Footer.tsx).
const stampSrc = "/modal/stamp.png";

export default function Modal({
  title,
  description,
  buttonLabel,
  onClose,
  className,
}: ModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const closingRef = useRef(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setVisible(false);
    closeTimeoutRef.current = setTimeout(onClose, CLOSE_DURATION_MS);
  };

  useEffect(() => {
    dialogRef.current?.focus();
    const raf = requestAnimationFrame(() => setVisible(true));

    return () => {
      cancelAnimationFrame(raf);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const overlayClasses = [styles.overlay, visible ? styles.visible : ""]
    .filter(Boolean)
    .join(" ");
  const dialogClasses = [styles.dialog, className].filter(Boolean).join(" ");

  return (
    <div className={overlayClasses} onClick={requestClose}>
      <div
        ref={dialogRef}
        className={dialogClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.stampWrap}>
          <img src={stampSrc} alt="" className={styles.stamp} />
        </div>

        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        <p id={descriptionId} className={styles.description}>
          {description}
        </p>

        <Button
          variant="primary"
          size="lg"
          onClick={requestClose}
          className={styles.confirmDesktop}
        >
          {buttonLabel}
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={requestClose}
          className={styles.confirmCompact}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
