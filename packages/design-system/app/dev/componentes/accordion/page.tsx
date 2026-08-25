import AccordionItem from "@/components/navigation/AccordionItem";
import FaqList from "./FaqList";
import styles from "./page.module.css";

const description =
  "O pacote inclui todos os serviços descritos na apresentação da viagem, como hospedagem, traslados, passeios e demais experiências previstas no roteiro. Para evitar qualquer dúvida, você sempre poderá consultar a relação completa do que está e do que não está incluso antes de confirmar sua reserva.";

export default function AccordionPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Accordion — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Item de perguntas frequentes, com ícone que alterna entre + e ×, nos
          3 tamanhos do Figma.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <AccordionItem
            size="lg"
            title="O que está incluso no valor da viagem?"
            defaultOpen
          >
            {description}
          </AccordionItem>
          <AccordionItem size="md" title="O que está incluso no valor da viagem?">
            {description}
          </AccordionItem>
          <div className={styles.smWrap}>
            <AccordionItem
              size="sm"
              title="O que está incluso no valor da viagem?"
            >
              {description}
            </AccordionItem>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Lista (uma pergunta por vez)</h2>
        <FaqList description={description} />
        <p className={`${styles.hint} text-caption`}>
          Clique em uma pergunta para abrir — as outras fecham
          automaticamente.
        </p>
      </section>
    </main>
  );
}
