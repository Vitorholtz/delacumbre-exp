import Image from "next/image";
import Link from "next/link";
import Button from "@delacumbre/design-system/components/primitives/Button";
import styles from "./UltimaChamada.module.css";

type UltimaChamadaProps = {
  expeditionHref: string;
  expeditionName: string;
  stampSrc: string;
  stampAlt: string;
  pdfHref: string;
};

export default function UltimaChamada({
  expeditionHref,
  expeditionName,
  stampSrc,
  stampAlt,
  pdfHref,
}: UltimaChamadaProps) {
  return (
    <section id="ultima-chamada" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.stamp}>
          <Image
            src={stampSrc}
            alt={stampAlt}
            fill
            sizes="(min-width: 1536px) 720px, 600px"
            className={styles.stampImage}
          />
        </div>

        <p className={styles.text}>
          Garanta sua vaga na{" "}
          <Link href={expeditionHref} className={styles.link}>
            Expedição {expeditionName}
          </Link>{" "}
          e ganhe colecionáveis exclusivos pra usar durante a viagem e,
          depois, deixar largados nessa sua estante imunda.
        </p>

        <div className={`${styles.buttons} ${styles.buttonsDesktop}`}>
          <Button
            variant="primary"
            size="lg"
            href={expeditionHref}
            className={styles.ctaButton}
          >
            Conferir
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={pdfHref}
            className={styles.ctaButton}
          >
            PDF completo
          </Button>
        </div>
        <div className={`${styles.buttons} ${styles.buttonsCompact}`}>
          <Button
            variant="primary"
            size="md"
            href={expeditionHref}
            className={styles.ctaButton}
          >
            Conferir
          </Button>
          <Button
            variant="secondary"
            size="md"
            href={pdfHref}
            className={styles.ctaButton}
          >
            PDF completo
          </Button>
        </div>
      </div>
    </section>
  );
}
