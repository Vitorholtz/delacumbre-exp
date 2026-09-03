import Image from "next/image";
import LocationCard from "@delacumbre/design-system/components/cards/LocationCard";
import styles from "./TextBlockSection.module.css";

export default function TextBlockSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.heading}>
              A noite não
              <br />
              <span className={styles.highlight}>pede desculpas</span>
            </p>
            <p className={styles.paragraph}>
              Tem gente que volta de expedição com foto de templo. Você vai
              voltar com uma história que jura nunca contar pra família e um
              bar, em algum beco de Bangkok, onde ninguém lembra seu nome —
              mas todo mundo lembra o que você fez em cima da mesa. As provas
              estão logo aí embaixo. A culpa é sua por ter vindo.
            </p>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageBlock}>
              <div className={styles.imageBox}>
                <Image
                  src="/expedicoes/holiday-camboja-bangkok/text-block/khao-san-bar.jpg"
                  alt="Grupo animado servindo drinks num bar iluminado de neon em Khao San Road"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.locationRow}>
                <LocationCard
                  name="Khao San Road"
                  country="Bangkok • Tailândia"
                  size="sm"
                  className={styles.locationSm}
                />
                <LocationCard
                  name="Khao San Road"
                  country="Bangkok • Tailândia"
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
