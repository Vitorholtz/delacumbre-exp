"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import GalleryThumb from "./GalleryThumb";
import GallerySlider, { type GalleryMediaItem } from "./GallerySlider";
import styles from "./Gallery.module.css";

export type { GalleryMediaItem };

type GalleryProps = {
  items: GalleryMediaItem[];
  className?: string;
};

export default function Gallery({ items, className }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex]);

  const openAt =
    (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
      triggerRef.current = event.currentTarget;
      setOpenIndex(index);
    };

  const close = () => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  };

  const classes = [styles.gallery, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <GalleryThumb
            key={item.src}
            type={item.type}
            src={item.src}
            alt={item.alt}
            onClick={openAt(index)}
          />
        ))}
      </div>

      {openIndex !== null && (
        <GallerySlider
          items={items}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      )}
    </div>
  );
}
