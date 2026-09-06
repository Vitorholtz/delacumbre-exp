import Image from "next/image";
import PricingCard from "@delacumbre/design-system/components/cards/PricingCard";
import { PRICING_OPTIONS } from "./PricingSection.data";
import styles from "./PricingSection.module.css";

const EXPEDITION_HREF = "/expedicoes/holiday-camboja-bangkok";

function PricingRow({
  size,
  className,
}: {
  size: "sm" | "md" | "lg";
  className: string;
}) {
  const isStacked = size === "sm";

  return (
    <div className={className}>
      {PRICING_OPTIONS.map((option, index) => {
        const isLast = index === PRICING_OPTIONS.length - 1;
        const cardClassName = isStacked
          ? styles.cardStacked
          : isLast
            ? styles.cardFillAuto
            : styles.cardFill;

        return (
          <PricingCard
            key={option.id}
            {...option}
            size={size}
            className={cardClassName}
            buttonHref={`${EXPEDITION_HREF}/checkout?pagamento=${option.id}`}
          />
        );
      })}
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="precos" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.heading}>
            Tem bastante tempo
            <br />
            pra pagar <span className={styles.highlight}>devagarinho.</span>
          </p>

          <PricingRow
            size="sm"
            className={`${styles.row} ${styles.rowSm}`}
          />
          <PricingRow
            size="md"
            className={`${styles.row} ${styles.rowMd}`}
          />
          <PricingRow
            size="lg"
            className={`${styles.row} ${styles.rowLg}`}
          />

          <div className={styles.warningList}>
            <p className={styles.warningHeading}>iMPORTANTE</p>
            <div className={styles.warningItems}>
              <div className={styles.warningItem}>
                <Image
                  src="/expedicoes/holiday-camboja-bangkok/pricing/timer-1.svg"
                  alt=""
                  width={28}
                  height={28}
                  className={styles.warningIcon}
                />
                <p className={styles.warningText}>
                  Em caso de desistência, o valor da entrada e parcelamento
                  NÃO SERÁ devolvido integralmente, já que os pagamentos em
                  Bangkok também são feitos antecipadamente (consulte tabela
                  de ressarcimento/multa no contrato).
                </p>
              </div>
              <div className={styles.warningItem}>
                <Image
                  src="/expedicoes/holiday-camboja-bangkok/pricing/timer-2.svg"
                  alt=""
                  width={28}
                  height={28}
                  className={styles.warningIcon}
                />
                <p className={styles.warningText}>
                  A confirmação da vaga será efetuada após o envio de
                  documentação solicitada e pagamento da entrada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
