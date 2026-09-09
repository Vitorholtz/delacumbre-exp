import Button from "@delacumbre/design-system/components/primitives/Button";
import Reveal from "@delacumbre/design-system/components/layout/Reveal";
import LocationCard from "@delacumbre/design-system/components/cards/LocationCard";
import ThingsToDoCard from "@delacumbre/design-system/components/cards/ThingsToDoCard";
import RisingImage from "./RisingImage";
import styles from "./TravelInfoSection.module.css";

type Highlight = {
  image: string;
  imageAlt: string;
  title: string;
  highlight: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    image: "/ideograms/Scorpion.webp",
    imageAlt: "Escorpião",
    title: "Comidas",
    highlight: "exóticas",
  },
  {
    image: "/ideograms/Statue.webp",
    imageAlt: "Estátua de Buda",
    title: "Choque",
    highlight: "cultural",
  },
  {
    image: "/ideograms/Temple.webp",
    imageAlt: "Templo",
    title: "Templos",
    highlight: "Milenares",
  },
  {
    image: "/ideograms/AK.webp",
    imageAlt: "Fuzil",
    title: "Prática",
    highlight: "de tiro",
  },
  {
    image: "/ideograms/Boxing.webp",
    imageAlt: "Luva de boxe",
    title: "Lutas",
    highlight: "e apostas",
  },
  {
    image: "/ideograms/Elephant.webp",
    imageAlt: "Elefante",
    title: "Vida",
    highlight: "Selvagem",
  },
  {
    image: "/ideograms/Beach.webp",
    imageAlt: "Praia",
    title: "Praias",
    highlight: "paradisíacas",
  },
  {
    image: "/ideograms/Torch.webp",
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
      <Reveal>
        <div className={styles.imageLocationWrapper}>
          <RisingImage
            src="/expedicoes/holiday-camboja-bangkok/travel-info/turma.webp"
            alt="A turma da expedição reunida em frente ao Angkor Wat, no Camboja, ao pôr do sol"
            sizes="100vw"
            className={styles.imageBox}
            imageClassName={styles.image}
          />

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
      </Reveal>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Reveal>
            <div className={styles.textRow}>
              <p className={styles.heading}>Extremos que cabem num só roteiro</p>
              <p className={styles.description}>
                Entre um escorpião frito e um Buda de mil anos, entre o
                estampido de um AK-47 e a areia branca de uma praia vazia —
                treze dias que colocam devoção e desordem lado a lado, sem
                pedir licença pra nenhuma das duas.
              </p>
            </div>
          </Reveal>

          <Reveal>
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
          </Reveal>

          <Reveal>
            <div className={`${styles.buttons} ${styles.buttonsDesktop}`}>
              <Button
                variant="primary"
                size="lg"
                href="#precos"
                className={styles.ctaButton}
              >
                Reservar
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#sobre-nos"
                className={styles.ctaButton}
              >
                Saber mais
              </Button>
            </div>
            <div className={`${styles.buttons} ${styles.buttonsCompact}`}>
              <Button
                variant="primary"
                size="md"
                href="#precos"
                className={styles.ctaButtonCompact}
              >
                Reservar
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="#sobre-nos"
                className={styles.ctaButtonCompact}
              >
                Saber mais
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
