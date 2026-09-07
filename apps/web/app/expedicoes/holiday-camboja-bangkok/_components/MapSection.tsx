import Pill from "@delacumbre/design-system/components/controls/Pill";
import styles from "./MapSection.module.css";

type Stat = {
  icon: string;
  label: string;
};

const STATS: Stat[] = [
  { icon: "hiking", label: "+1.000 km" },
  { icon: "globe_asia", label: "2 países" },
  { icon: "map", label: "+16 cidades" },
  { icon: "things_to_do", label: "2 capitais" },
  { icon: "temple_hindu", label: "+12 templos" },
  { icon: "calendar_month", label: "13 dias absurdos" },
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1541791.3792298888!2d102.43592811485101!3d13.806075715954952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCamboja!3m2!1d12.565679!2d104.990963!4m5!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Tail%C3%A2ndia!3m2!1d13.7563309!2d100.5017651!5e0!3m2!1spt-BR!2sbr!4v1788387431301!5m2!1spt-BR!2sbr";

export default function MapSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.contentColumn}>
            <p className={styles.heading}>Prepare-se para viver o absurdo</p>

            <div className={`${styles.statsRow} ${styles.statsRowCompact}`}>
              {STATS.map((stat) => (
                <Pill key={stat.icon} icon={stat.icon} label={stat.label} size="md" />
              ))}
            </div>
            <div className={`${styles.statsRow} ${styles.statsRowDesktop}`}>
              {STATS.map((stat) => (
                <Pill key={stat.icon} icon={stat.icon} label={stat.label} size="lg" />
              ))}
            </div>
          </div>

          <div className={styles.mapContainer}>
            <div className={styles.mapFrameWrap}>
              <iframe
                className={styles.mapFrame}
                src={MAP_EMBED_SRC}
                title="Mapa da rota entre Bangkok, na Tailândia, e Phnom Penh, no Camboja"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
