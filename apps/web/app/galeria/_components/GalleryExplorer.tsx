"use client";

import { useState } from "react";
import Chip from "@delacumbre/design-system/components/controls/Chip";
import ListItem from "@delacumbre/design-system/components/navigation/ListItem";
import Hyperlink from "@delacumbre/design-system/components/primitives/Hyperlink";
import Icon from "@delacumbre/design-system/components/primitives/Icon";
import Gallery from "@delacumbre/design-system/components/cards/Gallery";
import type { GalleryExpedition } from "../_data";
import styles from "./GalleryExplorer.module.css";

type GalleryExplorerProps = {
  expeditions: GalleryExpedition[];
};

export default function GalleryExplorer({ expeditions }: GalleryExplorerProps) {
  const [selectedSlug, setSelectedSlug] = useState(expeditions[0].slug);
  const selected =
    expeditions.find((expedition) => expedition.slug === selectedSlug) ??
    expeditions[0];

  const photoCount = selected.items.filter(
    (item) => item.type === "image",
  ).length;
  const videoCount = selected.items.filter(
    (item) => item.type === "video",
  ).length;
  const hasItems = selected.items.length > 0;

  return (
    <>
      <div className={styles.chipRow}>
        <div className={styles.chipRowInner}>
          {expeditions.map((expedition) => (
            <Chip
              key={expedition.slug}
              label={expedition.title}
              showIcon={false}
              selected={expedition.slug === selected.slug}
              miniPillLabel={expedition.isNew ? "Novo" : undefined}
              onClick={() => setSelectedSlug(expedition.slug)}
            />
          ))}
        </div>
      </div>

      <div className={styles.galleryContainer}>
        <div className={styles.galleryContainerInner}>
          {hasItems && (
            <div className={styles.topHeading}>
              <div className={styles.filtersList}>
                <ListItem
                  icon="filter"
                  label={`${photoCount} ${photoCount === 1 ? "foto" : "fotos"}`}
                  size="sm"
                  className={styles.statSizeLg}
                />
                <ListItem
                  icon="filter"
                  label={`${photoCount} ${photoCount === 1 ? "foto" : "fotos"}`}
                  size="xsm"
                  className={styles.statSizeSm}
                />
                <ListItem
                  icon="video_library"
                  label={`${videoCount} ${videoCount === 1 ? "vídeo" : "vídeos"}`}
                  size="sm"
                  className={styles.statSizeLg}
                />
                <ListItem
                  icon="video_library"
                  label={`${videoCount} ${videoCount === 1 ? "vídeo" : "vídeos"}`}
                  size="xsm"
                  className={styles.statSizeSm}
                />
              </div>
              <Hyperlink
                href={selected.ctaHref}
                size="md"
                className={styles.statSizeLg}
              >
                Página da expedição
              </Hyperlink>
              <Hyperlink
                href={selected.ctaHref}
                size="xsm"
                className={styles.statSizeSm}
              >
                Página da expedição
              </Hyperlink>
            </div>
          )}

          {hasItems ? (
            <Gallery items={selected.items} />
          ) : (
            <div className={styles.emptyState}>
              <Icon name="hide_image" size={40} className={styles.emptyIcon} />
              <p className={styles.emptyTitle}>Sem imagens ainda</p>
              <p className={styles.emptyText}>
                {selected.title} ainda não tem galeria — ou não rolou de
                novo, ou a data nem fechou direito. Assim que tiver registro
                de verdade, ele entra aqui.
              </p>
              <Hyperlink href={selected.ctaHref} size="sm" underline="always">
                Ver página da expedição
              </Hyperlink>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
