import Image from "next/image";
import Button from "@delacumbre/design-system/components/primitives/Button";
import LocationCard from "@delacumbre/design-system/components/cards/LocationCard";
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
                  A capital do caos,
                  <br />
                  <span className={styles.highlight}>paraíso da transgressão</span>
                </p>
                <p className={styles.paragraph}>
                  Se você nunca soltou o seu leão, ou acha que já, espere até pisar no
                  Sudeste Asiático. É automático, quer ver? Welcome to Bangkok! Mal
                  desceu do avião e você já está suado, escutando a saudação nos
                  autofalantes do Aeroporto de Suvarnabhumi, na capital do caos
                  Oriental, no paraíso da transgressão (e juro que não há duplo
                  sentido aqui); embarcando num táxi suspeito pra me encontrar na
                  lendária Khao San Road – o caldeirão pulsante da metrópole, onde
                  Deus e Diabo; devotos e hereges convivem em trégua (ou não), 24
                  horas por dia, sete dias na semana.
                </p>
              </div>

              <div className={styles.imageColumnInline}>
                <ImageWithLocation
                  variant="inline"
                  src="/expedicoes/holiday-camboja-bangkok/light-content/choeung-ek.jpg"
                  alt="Marcos observando as caveiras expostas no memorial de Choeung Ek"
                  name="Choeung Ek"
                  country="Phnom Penh • Camboja"
                />
              </div>
            </div>

            <ImageWithLocation
              variant="full"
              src="/expedicoes/holiday-camboja-bangkok/light-content/shooting-range.jpg"
              alt="Fumaça de disparo de fuzil num campo de tiro cercado de mata, no Camboja"
              name="Shooting range"
              country="Phnom Penh • Camboja"
            />

            <div className={styles.textOnlyBlock}>
              <p className={styles.heading}>
                Do estampido do cano{" "}
                <span className={styles.highlight}>ao silêncio milenar de pedra</span>
              </p>
              <p className={styles.paragraph}>
                O estrondo do AK-47 ainda ecoa no peito quando a poeira vermelha da
                clareira dá lugar às árvores da estrada pra Siem Reap. Não existe
                transição suave entre atirar de verdade numa tarde em Phnom Penh e
                pedalar entre portões esculpidos há quase mil anos — e não devia
                existir. Aqui você troca de personagem sem pedir licença: de
                atirador a peregrino, a poucas horas de estrada, carregando a mesma
                versão sua nas duas cenas.
              </p>
            </div>

            <ImageWithLocation
              variant="full"
              src="/expedicoes/holiday-camboja-bangkok/light-content/angkor-thom-gate.jpg"
              alt="Grupo pedalando em direção ao portão esculpido de Angkor Thom, no Camboja"
              name="Angkor Thom"
              country="Siem Reap • Camboja"
            />

            <div className={styles.textOnlyBlock}>
              <p className={styles.heading}>
                Isso aqui não é{" "}
                <span className={styles.highlight}>turismo, é rito de passagem</span>
              </p>
              <div className={styles.paragraphButtonsGroup}>
                <p className={styles.paragraph}>
                  Treze dias não vão te bronzear, vão te lascar — e é exatamente isso
                  que você veio buscar. Quando voltar, ninguém vai perguntar se foi
                  uma boa viagem; vão perguntar o que aconteceu com você lá dentro.
                  Bora?
                </p>

                <div className={styles.buttons}>
                  <Button variant="primary" size="lg" href="#reservar" className={styles.ctaButton}>
                    Reservar
                  </Button>
                  <Button variant="secondary" size="lg" href="#sobre" className={styles.ctaButton}>
                    Saber mais
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
