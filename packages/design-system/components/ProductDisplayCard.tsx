"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import GalleryThumb from "./GalleryThumb";
import GallerySlider, { type GalleryMediaItem } from "./GallerySlider";
import styles from "./ProductDisplayCard.module.css";

type ProductDisplayCardSize = "lg" | "md" | "sm";

type ProductDisplayCardProps = {
  media: GalleryMediaItem;
  title: string;
  description: string;
  size?: ProductDisplayCardSize;
  className?: string;
};

const titleTextClassBySize: Record<ProductDisplayCardSize, string> = {
  lg: "text-heading-xl",
  md: "text-heading-lg",
  sm: "text-heading-md",
};

const descriptionTextClassBySize: Record<ProductDisplayCardSize, string> = {
  lg: "text-body-lg",
  md: "text-body-md",
  sm: "text-body-sm",
};

const imageHeightBySize: Record<ProductDisplayCardSize, string> = {
  lg: "30rem" /* 480px */,
  md: "25rem" /* 400px */,
  sm: "20rem" /* 320px */,
};

export default function ProductDisplayCard({
  media,
  title,
  description,
  size = "lg",
  className,
}: ProductDisplayCardProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = event.currentTarget;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const classes = [styles.card, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <GalleryThumb
        type={media.type}
        src={media.src}
        alt={media.alt}
        onClick={handleOpen}
        className={styles.media}
        style={{
          height: imageHeightBySize[size],
          aspectRatio: "auto",
          borderRadius: "var(--radius-md)",
        }}
      />
      <p className={`${styles.title} ${titleTextClassBySize[size]}`}>{title}</p>
      <p
        className={`${styles.description} ${descriptionTextClassBySize[size]}`}
      >
        {description}
      </p>

      {open && (
        <GallerySlider
          items={[media]}
          index={0}
          onClose={handleClose}
          onNavigate={() => {}}
        />
      )}
    </div>
  );
}
