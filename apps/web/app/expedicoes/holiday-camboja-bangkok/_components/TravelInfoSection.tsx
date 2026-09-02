import Image from "next/image";
import Button from "@delacumbre/design-system/components/primitives/Button";
import LocationCard from "@delacumbre/design-system/components/cards/LocationCard";
import ThingsToDoCard from "@delacumbre/design-system/components/cards/ThingsToDoCard";
import styles from "./TravelInfoSection.module.css";

type Highlight = {
  image: string;
  imageAlt: string;
  title: string;
  highlight: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    image: "/ideograms/Scorpion.svg",
    imageAlt: "Escorpião",
    title: "Comidas",
    highlight: "exóticas",
  },
  {
    image: "/ideograms/Statue.svg",
    imageAlt: "Estátua de Buda",
    title: "Choque",
    highlight: "cultural",
  },
  {
    image: "/ideograms/Temple.svg",
    imageAlt: "Templo",
    title: "Templos",
    highlight: "Milenares",
  },
  {
    image: "/ideograms/AK.svg",
    imageAlt: "Fuzil",
    title: "Prática",
    highlight: "de tiro",
  },
  {
    image: "/ideograms/Boxing.svg",
    imageAlt: "Luva de boxe",
    title: "Lutas",
    highlight: "e apostas",
  },
  {
    image: "/ideograms/Elephant.svg",
    imageAlt: "Elefante",
    title: "Vida",
    highlight: "Selvagem",
  },
  {
    image: "/ideograms/Beach.svg",
    imageAlt: "Praia",
    title: "Praias",
    highlight: "paradisíacas",
  },
  {
    image: "/ideograms/Torch.svg",
    imageAlt: "Tocha",
    title: "A aventura",
    highlight: "da sua vida",
  },
];

const TICKER_TEXT = "Turma única • 10 vagas • de 10 a 22 de abril de 2027";
// 4 repetições por metade — largura de sobra pra cobrir monitores
// ultra-wide sem espaço em branco no loop, mesmo princípio do CenasLamentaveis.
const TICKER_REPEATS = 4;

function TickerHalf() {
  return (
    <div className={styles.tickerTrackHalf}>
      {Array.from({ length: TICKER_REPEATS }).map((_, index) => (
        <p key={index} className={styles.tickerPhrase}>
          Turma única <span className={styles.tickerDot}>•</span> 10 vagas{" "}
          <span className={styles.tickerDot}>•</span> de 10 a 22 de abril de
          2027
        </p>
      ))}
    </div>
  );
}

const CARD_SIZES = ["sm", "md", "lg"] as const;

export default function TravelInfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageLocationWrapper}>
        <div className={styles.imageBox}>
          <Image
            src="/expedicoes/holiday-camboja-bangkok/travel-info/angkor-thom.jpg"
            alt="Fileira de estátuas de pedra na entrada de Angkor Thom, no Camboja"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            <TickerHalf />
            <TickerHalf />
          </div>
        </div>
        <p className="visually-hidden">{TICKER_TEXT}</p>

        <div className={styles.locationRow}>
          <LocationCard
            name="Angkor Wat"
            country="Camboja"
            size="sm"
            className={styles.locationSm}
          />
          <LocationCard
            name="Angkor Wat"
            country="Camboja"
            size="md"
            className={styles.locationMd}
          />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.textRow}>
            <p className={styles.heading}>Extremos que cabem num só roteiro</p>
            <p className={styles.description}>
              Entre um escorpião frito e um Buda de mil anos, entre o
              estampido de um AK-47 e a areia branca de uma praia vazia —
              treze dias que colocam devoção e desordem lado a lado, sem
              pedir licença pra nenhuma das duas.
            </p>
          </div>

          {CARD_SIZES.map((size) => (
            <div
              key={size}
              className={`${styles.cardsGrid} ${styles[`cardsGrid_${size}`]}`}
            >
              {HIGHLIGHTS.map((item) => (
                <ThingsToDoCard
                  key={`${size}-${item.title}`}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  highlight={item.highlight}
                  size={size}
                  className={styles.card}
                />
              ))}
            </div>
          ))}

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
