"use client";

import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import FloatingButton from "../primitives/FloatingButton";
import { breakpoints } from "../../lib/breakpoints";
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
const SWIPE_THRESHOLD_PX = 40;

function useIsSm() {
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoints.smToMd - 1}px)`);
    const update = () => setIsSm(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isSm;
}

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const hasMultiple = items.length > 1;
  const isSm = useIsSm();
  const floatingButtonSize = isSm ? "sm" : "md";

  const [visible, setVisible] = useState(false);
  const closingRef = useRef(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [exiting, setExiting] = useState<{
    index: number;
    direction: SlideDirection;
  } | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = (nextIndex: number, direction: SlideDirection) => {
    if (exiting) return; // ignora clique/swipe repetido enquanto a transição atual roda
    setExiting({ index, direction });
    onNavigate(nextIndex);
    exitTimeoutRef.current = setTimeout(() => {
      setExiting(null);
    }, SLIDE_DURATION_MS);
  };

  const goPrev = () =>
    navigate((index - 1 + items.length) % items.length, "prev");
  const goNext = () => navigate((index + 1) % items.length, "next");

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    // não inicia o gesto de swipe a partir dos controles nativos do vídeo
    // (evita conflito com o scrub/seek de "controls")
    if ((event.target as HTMLElement).closest("video")) return;
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || !hasMultiple) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) goNext();
    else goPrev();
  };

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

      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], video[controls], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
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
      ref={dialogRef}
      className={`${styles.backdrop} ${visible ? styles.backdropVisible : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de mídia"
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div className={styles.closeContainer}>
        <FloatingButton
          ref={closeButtonRef}
          icon="close"
          label="Fechar galeria"
          size={floatingButtonSize}
          onClick={requestClose}
        />
      </div>

      <div
        className={styles.mediaWrap}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
        <div className={styles.navRow}>
          <div className={styles.navContainer}>
            <FloatingButton
              icon="arrow_back"
              label="Mídia anterior"
              size={floatingButtonSize}
              onClick={goPrev}
            />
          </div>
          <div className={`${styles.navContainer} ${styles.navContainerEnd}`}>
            <FloatingButton
              icon="arrow_forward"
              label="Próxima mídia"
              size={floatingButtonSize}
              onClick={goNext}
            />
          </div>
        </div>
      )}
    </div>
  );
}
