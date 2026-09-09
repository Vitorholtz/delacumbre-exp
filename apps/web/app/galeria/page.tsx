import type { Metadata } from "next";
import Reveal from "@delacumbre/design-system/components/layout/Reveal";
import ExpeditionHeader from "@/components/ExpeditionHeader";
import SiteFooter from "@/components/SiteFooter";
import GalleryExplorer from "./_components/GalleryExplorer";
import { GALLERY_EXPEDITIONS } from "./_data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Galeria de imagens | Delacumbre EXP",
  description:
    "Fotos e vídeos reais das expedições Delacumbre EXP — sem still de banco de imagem, sem pose de brochura de agência de viagem.",
};

export default function GaleriaPage() {
  return (
    <main>
      <ExpeditionHeader />
      <div className={styles.page}>
        <Reveal>
          <div className={styles.titleSection}>
            <div className={styles.titleSectionInner}>
              <p className={styles.title}>Galeria de imagens</p>
              <p className={styles.description}>
                Fotos e vídeos direto do campo — sem still de banco de imagem,
                sem pose de brochura de agência de viagem.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <GalleryExplorer expeditions={GALLERY_EXPEDITIONS} />
        </Reveal>
      </div>
      <SiteFooter />
    </main>
  );
}
