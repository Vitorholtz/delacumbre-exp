import Image from "next/image";
import LocationCard from "@delacumbre/design-system/components/cards/LocationCard";
import Heading from "./Heading";
import { textBlockSectionContent as content } from "./TextBlockSection.data";
import styles from "./TextBlockSection.module.css";

export default function TextBlockSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.heading}>
              <Heading {...content.heading} highlightClassName={styles.highlight} />
            </p>
            <p className={styles.paragraph}>{content.paragraph}</p>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageBlock}>
              <div className={styles.imageBox}>
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.locationRow}>
                <LocationCard
                  name={content.image.name}
                  country={content.image.country}
                  size="sm"
                  className={styles.locationSm}
                />
                <LocationCard
                  name={content.image.name}
                  country={content.image.country}
                  size="md"
                  className={styles.locationMd}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
