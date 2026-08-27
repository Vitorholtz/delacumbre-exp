import Image from "next/image";
import Link from "next/link";
import Button from "@delacumbre/design-system/components/primitives/Button";
import styles from "./UltimaChamada.module.css";

const EXPEDITION_HREF = "/expedicoes/holiday-camboja-bangkok";
const PDF_HREF = "#";

export default function UltimaChamada() {
  return (
    <section id="ultima-chamada" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.stamp}>
          <Image
            src="/ultima-chamada/selo-expedicao.png"
            alt="Selo da Expedição Holiday in Camboja & Bangkok — Ásia, Abril, 2027"
            fill
            sizes="(min-width: 1536px) 720px, 600px"
            className={styles.stampImage}
          />
        </div>

        <p className={styles.text}>
          Garanta sua vaga na{" "}
          <Link href={EXPEDITION_HREF} className={styles.link}>
            Expedição Holiday in Camboja &amp; Bangkok
          </Link>{" "}
          e ganhe colecionáveis exclusivos pra usar durante a viagem e,
          depois, deixar largados nessa sua estante imunda.
        </p>

        <div className={`${styles.buttons} ${styles.buttonsDesktop}`}>
          <Button
            variant="primary"
            size="lg"
            href={EXPEDITION_HREF}
            className={styles.ctaButton}
          >
            Conferir
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={PDF_HREF}
            className={styles.ctaButton}
          >
            PDF completo
          </Button>
        </div>
        <div className={`${styles.buttons} ${styles.buttonsCompact}`}>
          <Button
            variant="primary"
            size="md"
            href={EXPEDITION_HREF}
            className={styles.ctaButton}
          >
            Conferir
          </Button>
          <Button
            variant="secondary"
            size="md"
            href={PDF_HREF}
            className={styles.ctaButton}
          >
            PDF completo
          </Button>
        </div>
      </div>
    </section>
  );
}
