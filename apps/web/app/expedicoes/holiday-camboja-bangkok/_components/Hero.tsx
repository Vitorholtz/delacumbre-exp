import Image from "next/image";
import Button from "@delacumbre/design-system/components/primitives/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageBox}>
          <Image
            src="/expedicoes/holiday-camboja-bangkok/hero/hero-bg.png"
            alt=""
            fill
            priority
            className={styles.bg}
            aria-hidden="true"
          />
          <div className={styles.scrim} aria-hidden="true" />
          <div className={styles.badge}>
            <Image
              src="/expedicoes/holiday-camboja-bangkok/hero/stamp.png"
              alt="Expedição Holiday in Camboja & Bangkok — Ásia, abril de 2027"
              width={548}
              height={219}
              className={styles.stamp}
            />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.description}>
            Bangkok te recebe suado, tonto e já rendido ao caos — depois o
            Camboja cala a boca de todo mundo. Treze dias entre o sagrado e o
            profano de Bangkok e o peso mudo dos campos do Khmer Rouge: essa
            é a expedição que separa quem foi ao Sudeste Asiático de quem só
            passou por ele.
          </p>

          <div className={`${styles.buttons} ${styles.buttonsDesktop}`}>
            <Button
              variant="primary"
              size="lg"
              href="#reservar"
              className={styles.ctaButton}
            >
              Reservar
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#sobre"
              className={styles.ctaButton}
            >
              Saber mais
            </Button>
          </div>
          <div className={`${styles.buttons} ${styles.buttonsCompact}`}>
            <Button
              variant="primary"
              size="md"
              href="#reservar"
              className={styles.ctaButtonCompact}
            >
              Reservar
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="#sobre"
              className={styles.ctaButtonCompact}
            >
              Saber mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
