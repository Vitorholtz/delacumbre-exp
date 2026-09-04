import Image from "next/image";
import styles from "./TransitionSection.module.css";

export default function TransitionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Image
          src="/carousel/delacumbre-sons.svg"
          alt="Delacumbre & Sons"
          width={220}
          height={220}
          className={styles.logo}
        />
        <p className={styles.heading}>
          Tem <span className={styles.highlight}>coragem</span>
          <br />
          pra continuar?
        </p>
      </div>
    </section>
  );
}
