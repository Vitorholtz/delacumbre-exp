import Image from "next/image";
import Button from "@delacumbre/design-system/components/primitives/Button";
import LocationCard from "@delacumbre/design-system/components/cards/LocationCard";
import styles from "./ClosingStoriesSection.module.css";

type FullImageBlockProps = {
  src: string;
  alt: string;
  name: string;
  country: string;
};

function FullImageBlock({ src, alt, name, country }: FullImageBlockProps) {
  return (
    <div className={styles.imageBlock}>
      <div className={`${styles.imageBox} ${styles.imageBox_full}`}>
        <Image src={src} alt={alt} fill className={styles.image} />
      </div>
      <div className={styles.locationRow}>
        <LocationCard name={name} country={country} size="sm" className={styles.locationSm} />
        <LocationCard name={name} country={country} size="md" className={styles.locationMd} />
      </div>
    </div>
  );
}

export default function ClosingStoriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/* Repete a foto do shooting range já usada em LightContentSection —
              o export dessa outra foto (grupo posando com os fuzis) veio
              quebrado do Figma (asset em branco). Trocar pela foto real assim
              que o time reexportar. */}
          <FullImageBlock
            src="/expedicoes/holiday-camboja-bangkok/light-content/shooting-range.jpg"
            alt="Grupo posando com fuzis num campo aberto, após a prática de tiro"
            name="Shooting range"
            country="Phnom Penh • Camboja"
          />

          <div className={styles.textAndImageBlock}>
            <div className={styles.textColumnInline}>
              <p className={styles.heading}>
                Primeira noite,
                <br />
                <span className={styles.highlight}>já é sangue</span>
              </p>
              <p className={styles.paragraph}>
                Ainda com o cheiro de avião na roupa, a primeira parada é debaixo
                das luzes vermelhas do Rajadamnern Stadium — o ringue mais
                sagrado da Muay Thai, onde cada joelhada vem acompanhada de
                tambor e reza. Ninguém dorme cedo: o grupo grita por lutadores
                que nunca vai ver de novo, brinda com copo de plástico feito
                taça e sela o primeiro pacto da expedição em pé, suado, na fila
                do bar. Bem-vindo a Bangkok: aqui a recepção é um soco.
              </p>
            </div>

            <div className={styles.imageColumnInline}>
              <div className={styles.imageBlock}>
                <div className={`${styles.imageBox} ${styles.imageBox_inline}`}>
                  <Image
                    src="/expedicoes/holiday-camboja-bangkok/closing/rajadamnern-stadium-crowd.jpg"
                    alt="Grupo comemorando em frente ao ringue do Rajadamnern Stadium, em Bangkok"
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.locationRow}>
                  <LocationCard
                    name="Rajadamnern Stadium"
                    country="Bangkok • Tailândia"
                    size="sm"
                    className={styles.locationSm}
                  />
                  <LocationCard
                    name="Rajadamnern Stadium"
                    country="Bangkok • Tailândia"
                    size="md"
                    className={styles.locationMd}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TODO: asset também veio quebrado do Figma (mesmo problema do
              shooting range acima) — falta a foto real da bênção do monge.
              Caminho já reservado em public/expedicoes/holiday-camboja-bangkok/
              closing/monk-blessing.jpg, adicionar o arquivo assim que existir. */}
          <FullImageBlock
            src="/expedicoes/holiday-camboja-bangkok/closing/monk-blessing.jpg"
            alt="Monge fazendo uma bênção sobre um viajante, cercado de imagens sagradas"
            name="Bênção do monge"
            country="Bangkok • Tailândia"
          />

          <div className={styles.textOnlyBlock}>
            <p className={styles.heading}>
              Treze dias,
              <br />
              <span className={styles.highlight}>uma vida pra contar</span>
            </p>
            <div className={styles.paragraphButtonsGroup}>
              <p className={styles.paragraph}>
                Você já viu o roteiro, já sabe o preço, já leu até a letra
                miúda do cancelamento. Só falta uma coisa: decidir se vai ser
                você contando essa história depois, ou só escutando os outros
                contarem. As vagas são 10, o grupo já está esquentando o motor.
                Bora?
              </p>

              <div className={styles.buttons}>
                <Button variant="primary" size="lg" href="#precos" className={styles.ctaButton}>
                  Reservar
                </Button>
                <Button variant="secondary" size="lg" href="#sobre-nos" className={styles.ctaButton}>
                  Saber mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
