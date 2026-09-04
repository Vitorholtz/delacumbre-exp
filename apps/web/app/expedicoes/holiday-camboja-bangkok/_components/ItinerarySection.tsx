import styles from "./ItinerarySection.module.css";

type ItineraryDay = {
  day: number;
  date: string;
  title: string;
  rest: string;
};

// Dia 6 corrigido para 15/04 — o frame MD/LG do Figma repete "16/04" nos
// dias 6 e 7 (erro de digitação), mas o frame SM traz a sequência correta
// e consecutiva (10/04 → 22/04 em 13 dias), usada aqui como fonte de verdade.
const ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    date: "10/04",
    title: "Recepção em Bangkok",
    rest: " – Transfers aeroporto x Khao San Road. Confraternização do grupo a partir das 18h, no Rajadamnern Stadium e fim de noite na Khao San Road.",
  },
  {
    day: 2,
    date: "11/04",
    title: "Bangkok",
    rest: " – Visita ao Maeklong Railway Market e Damnoensaduak Floating Market.",
  },
  {
    day: 3,
    date: "12/04",
    title: "Voo para Phnom Penh",
    rest: " – Transfer para o aeroporto e chegada a Phnom Penh. Caminhada pela orla do Rio Mekong e arredores do palácio real, pagoda dourada e monumento da independência. Navegação no Mekong com open bar e visita ao mercado noturno.",
  },
  {
    day: 4,
    date: "13/04",
    title: "Phnom Penh",
    rest: " – Visita ao Museu S-21, campo de concentração Choeung Ek; prática de tiro em shooting range e visita ao mercado municipal.",
  },
  {
    day: 5,
    date: "14/04",
    title: "Battambang",
    rest: " – 5 horas de viagem a Battambang; visita às “Killing caves” e caverna “Phnom Sampeau” para revoada de morcegos ao pôr do sol.",
  },
  {
    day: 6,
    date: "15/04",
    title: "Siem Reap",
    rest: " – Passeio em trem de bambu, em Battambang, e depois estrada para Siem Reap – chegada programada para o meio da tarde.",
  },
  {
    day: 7,
    date: "16/04",
    title: "Siem Reap",
    rest: " – Almoço e caminhada com elefantes no santuário. À tarde, navegação e visita às comunidades flutuantes do lago Tonle Sap.",
  },
  {
    day: 8,
    date: "17/04",
    title: "Siem Reap",
    rest: " – Dia cheio com visitação desde o amanhecer ao Angkor Wat e demais ruínas do complexo.",
  },
  {
    day: 9,
    date: "18/04",
    title: "Siem Reap para Phnom Penh",
    rest: " – Estrada para Phnom Penh, com parada em comunidades locais.",
  },
  {
    day: 10,
    date: "19/04",
    title: "Koh Rong",
    rest: " – Estrada para Sihanoukville e embarque no ferry para a ilha de Koh Rong. Dia livre na ilha com atividades de mergulho, snorkeling e navegação opcionais.",
  },
  {
    day: 11,
    date: "20/04",
    title: "Koh Rong",
    rest: " – Dia livre na ilha com atividades de mergulho, snorkeling e navegação opcionais.",
  },
  {
    day: 12,
    date: "21/04",
    title: "Phnom Penh x Bangkok",
    rest: " – Embarque no ferry e transporte para o aeroporto de Phnom Penh. Voo de volta para a Tailândia e confraternização final em Bangkok.",
  },
  {
    day: 13,
    date: "22/04",
    title: "Bangkok",
    rest: " – Fim de expedição e início dos traslados de volta ao aeroporto.",
  },
];

const ROW_SIZE = 3;

function chunkRows(days: ItineraryDay[], size: number): ItineraryDay[][] {
  const rows: ItineraryDay[][] = [];
  for (let i = 0; i < days.length; i += size) {
    rows.push(days.slice(i, i + size));
  }
  return rows;
}

function DateBadge({ day, date }: { day: number; date: string }) {
  return (
    <div className={styles.dateContainer}>
      <p className={styles.dateText}>
        <span>{`Dia ${day} `}</span>
        <span className={styles.dateDot}>•</span>
        <span>{` ${date}`}</span>
      </p>
    </div>
  );
}

function DayDescription({ title, rest }: { title: string; rest: string }) {
  return (
    <p className={styles.description}>
      <span className={styles.descriptionHighlight}>{title}</span>
      {rest}
    </p>
  );
}

export default function ItinerarySection() {
  const rows = chunkRows(ITINERARY, ROW_SIZE);
  const lastRowIndex = rows.length - 1;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.heading}>Roteiro</p>

          {/* SM — linha do tempo vertical com marcador (thread) por dia */}
          <div className={styles.threadList}>
            {ITINERARY.map((item, index) => (
              <div key={item.day} className={styles.threadRow}>
                <div className={styles.thread} aria-hidden="true">
                  <span className={styles.threadLineTop} />
                  <span
                    className={`${styles.dot} ${index === 0 ? styles.dotFirst : ""}`}
                  />
                  {index < ITINERARY.length - 1 && (
                    <span className={styles.threadLineBottom} />
                  )}
                </div>
                <div className={styles.threadContent}>
                  <DateBadge day={item.day} date={item.date} />
                  <DayDescription title={item.title} rest={item.rest} />
                </div>
              </div>
            ))}
          </div>

          {/* MD/LG — grade de 3 colunas ligada por uma linha horizontal */}
          <div className={styles.grid}>
            {rows.map((row, rowIndex) => {
              const isFirstRow = rowIndex === 0;
              const isLastRow = rowIndex === lastRowIndex;
              const isIncompleteLastRow = isLastRow && row.length < ROW_SIZE;
              // Sem 2º item na fileira, não há o que ligar internamente —
              // só o vazamento à esquerda (vindo da fileira anterior) até
              // encostar no pill.
              const showInternalLine = row.length > 1;

              return (
                <div key={row[0].day} className={styles.row}>
                  {showInternalLine && (
                    <span
                      className={`${styles.line} ${isIncompleteLastRow ? styles.lineLast : ""}`}
                      aria-hidden="true"
                    />
                  )}
                  {/* nada antes do Dia 1 */}
                  {!isFirstRow && (
                    <span className={styles.lineBleedLeft} aria-hidden="true" />
                  )}
                  {/* nada depois do último dia */}
                  {!isLastRow && (
                    <span className={styles.lineBleedRight} aria-hidden="true" />
                  )}
                  {row.map((item) => (
                    <div key={item.day} className={styles.day}>
                      <DateBadge day={item.day} date={item.date} />
                      <DayDescription title={item.title} rest={item.rest} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
