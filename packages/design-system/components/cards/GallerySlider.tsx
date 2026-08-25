"use client";

import { useEffect, useRef, useState } from "react";
import FloatingButton from "../primitives/FloatingButton";
import styles from "./GallerySlider.module.css";

export type GalleryMediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

type GallerySliderProps = {
  items: GalleryMediaItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

type SlideDirection = "next" | "prev";

const SLIDE_DURATION_MS = 350;
const CLOSE_DURATION_MS = 250;

function Media({ item }: { item: GalleryMediaItem }) {
  return item.type === "video" ? (
    <video
      key={item.src}
      src={item.src}
      className={styles.media}
      controls
      autoPlay
      muted
      playsInline
    />
  ) : (
    <img src={item.src} alt={item.alt} className={styles.media} />
  );
}

export default function GallerySlider({
  items,
  index,
  onClose,
  onNavigate,
}: GallerySliderProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const hasMultiple = items.length > 1;

  const [visible, setVisible] = useState(false);
  const closingRef = useRef(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [exiting, setExiting] = useState<{
    index: number;
    direction: SlideDirection;
  } | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = (nextIndex: number, direction: SlideDirection) => {
    if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
    setExiting({ index, direction });
    onNavigate(nextIndex);
    exitTimeoutRef.current = setTimeout(() => {
      setExiting(null);
    }, SLIDE_DURATION_MS);
  };

  const goPrev = () =>
    navigate((index - 1 + items.length) % items.length, "prev");
  const goNext = () => navigate((index + 1) % items.length, "next");

  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setVisible(false);
    closeTimeoutRef.current = setTimeout(onClose, CLOSE_DURATION_MS);
  };

  useEffect(() => {
    closeButtonRef.current?.focus();
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
      if (hasMultiple && event.key === "ArrowLeft") goPrev();
      if (hasMultiple && event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, hasMultiple]);

  const enterClass = exiting
    ? exiting.direction === "next"
      ? styles.slideEnterNext
      : styles.slideEnterPrev
    : "";
  const exitClass =
    exiting?.direction === "next" ? styles.slideExitNext : styles.slideExitPrev;

  return (
    <div
      className={`${styles.backdrop} ${visible ? styles.backdropVisible : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de mídia"
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      {hasMultiple && (
        <div className={styles.navContainer}>
          <FloatingButton
            icon="arrow_back"
            label="Mídia anterior"
            onClick={goPrev}
          />
        </div>
      )}

      <div className={styles.mediaWrap}>
        {exiting && (
          <div
            key={`exit-${exiting.index}`}
            className={`${styles.slide} ${exitClass}`}
          >
            <Media item={items[exiting.index]} />
          </div>
        )}
        <div
          key={`current-${index}`}
          className={`${styles.slide} ${enterClass}`}
        >
          <Media item={item} />
        </div>
      </div>

      {hasMultiple && (
        <div className={`${styles.navContainer} ${styles.navContainerEnd}`}>
          <FloatingButton
            icon="arrow_forward"
            label="Próxima mídia"
            onClick={goNext}
          />
        </div>
      )}

      <div className={styles.closeContainer}>
        <FloatingButton
          ref={closeButtonRef}
          icon="close"
          label="Fechar galeria"
          onClick={requestClose}
        />
      </div>
    </div>
  );
}
