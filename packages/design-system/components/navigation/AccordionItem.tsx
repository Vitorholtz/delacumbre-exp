"use client";

import { useId, useState, type ReactNode } from "react";
import Icon from "../primitives/Icon";
import styles from "./AccordionItem.module.css";

type AccordionSize = "lg" | "md" | "sm";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  size?: AccordionSize;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
};

const titleTextClassBySize: Record<AccordionSize, string> = {
  lg: "text-heading-md",
  md: "text-heading-md",
  sm: "text-heading-sm",
};

const descriptionTextClassBySize: Record<AccordionSize, string> = {
  lg: "text-body-lg",
  md: "text-body-md",
  sm: "text-body-sm",
};

export default function AccordionItem({
  title,
  children,
  size = "lg",
  defaultOpen = false,
  open,
  onToggle,
  className,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const panelId = useId();

  const handleClick = () => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onToggle?.(next);
  };

  const classes = [
    styles.item,
    styles[size],
    isOpen ? styles.open : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={handleClick}>
      <h3 className={styles.heading}>
        <button
          type="button"
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className={`${styles.title} ${titleTextClassBySize[size]}`}>
            {title}
          </span>
          <Icon name="add" size={24} className={styles.icon} />
        </button>
      </h3>
      <div className={styles.panelWrap}>
        <div className={styles.panelInner}>
          <div
            id={panelId}
            className={`${styles.description} ${descriptionTextClassBySize[size]}`}
            aria-hidden={!isOpen}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
