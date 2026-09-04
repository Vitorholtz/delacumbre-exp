import Image from "next/image";
import Button from "@delacumbre/design-system/components/primitives/Button";
import LocationCard from "@delacumbre/design-system/components/cards/LocationCard";
import Heading from "./Heading";
import { lightContentSectionContent as content } from "./LightContentSection.data";
import styles from "./LightContentSection.module.css";

type ImageWithLocationProps = {
  src: string;
  alt: string;
  name: string;
  country: string;
  variant: "inline" | "full";
};

function ImageWithLocation({ src, alt, name, country, variant }: ImageWithLocationProps) {
  return (
    <div className={styles.imageBlock}>
      <div className={`${styles.imageBox} ${styles[`imageBox_${variant}`]}`}>
        <Image src={src} alt={alt} fill className={styles.image} />
      </div>
      <div className={styles.locationRow}>
        <LocationCard name={name} country={country} size="sm" className={styles.locationSm} />
        <LocationCard name={name} country={country} size="md" className={styles.locationMd} />
      </div>
    </div>
  );
}

export default function LightContentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.tornEdge} aria-hidden="true">
        <Image
          src="/expedicoes/holiday-camboja-bangkok/light-content/torn-edge.svg"
          alt=""
          fill
          className={styles.tornEdgeImage}
        />
      </div>

      <div className={styles.sectionContainer}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.textAndImageBlock}>
              <div className={styles.textColumnInline}>
                <p className={styles.heading}>
                  <Heading {...content.intro.heading} highlightClassName={styles.highlight} />
                </p>
                <p className={styles.paragraph}>{content.intro.paragraph}</p>
              </div>

              <div className={styles.imageColumnInline}>
                <ImageWithLocation variant="inline" {...content.intro.image} />
              </div>
            </div>

            <ImageWithLocation variant="full" {...content.shootingRange} />

            <div className={styles.textOnlyBlock}>
              <p className={styles.heading}>
                <Heading {...content.fromGunToStone.heading} highlightClassName={styles.highlight} />
              </p>
              <p className={styles.paragraph}>{content.fromGunToStone.paragraph}</p>
            </div>

            <ImageWithLocation variant="full" {...content.angkorThom} />

            <div className={styles.textOnlyBlock}>
              <p className={styles.heading}>
                <Heading {...content.closing.heading} highlightClassName={styles.highlight} />
              </p>
              <div className={styles.paragraphButtonsGroup}>
                <p className={styles.paragraph}>{content.closing.paragraph}</p>

                <div className={styles.buttons}>
                  <Button
                    variant="primary"
                    size="lg"
                    href={content.closing.primaryCtaHref}
                    className={styles.ctaButton}
                  >
                    {content.closing.primaryCtaLabel}
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    href={content.closing.secondaryCtaHref}
                    className={styles.ctaButton}
                  >
                    {content.closing.secondaryCtaLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.tornEdge} ${styles.tornEdgeBottom}`} aria-hidden="true">
        <Image
          src="/expedicoes/holiday-camboja-bangkok/light-content/torn-edge.svg"
          alt=""
          fill
          className={styles.tornEdgeImage}
        />
      </div>
    </section>
  );
}
