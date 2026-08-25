"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";
import Icon from "../primitives/Icon";
import styles from "./GalleryThumb.module.css";

type GalleryThumbProps = {
  type: "image" | "video";
  src: string;
  alt: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: CSSProperties;
};

export default function GalleryThumb({
  type,
  src,
  alt,
  onClick,
  className,
  style,
}: GalleryThumbProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const showFirstFrame = () => {
      video.currentTime = 0.1;
    };
    video.addEventListener("loadedmetadata", showFirstFrame);
    return () => video.removeEventListener("loadedmetadata", showFirstFrame);
  }, []);

  const classes = [styles.thumb, styles[type], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      style={style}
      onClick={onClick}
      aria-label={
        type === "video" ? `Reproduzir vídeo: ${alt}` : `Ampliar imagem: ${alt}`
      }
    >
      {type === "video" ? (
        <video
          ref={videoRef}
          src={src}
          className={styles.media}
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <img src={src} alt="" className={styles.media} />
      )}
      <span className={styles.overlay} aria-hidden="true" />
      {type === "video" ? (
        <Icon name="play_circle" size={40} className={styles.playIcon} />
      ) : (
        <span className={styles.searchBadge} aria-hidden="true">
          <Icon name="search" size={20} />
        </span>
      )}
    </button>
  );
}
