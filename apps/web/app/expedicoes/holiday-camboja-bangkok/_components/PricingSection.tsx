import Image from "next/image";
import PricingCard from "@delacumbre/design-system/components/cards/PricingCard";
import styles from "./PricingSection.module.css";

type PricingCardData = Omit<
  Parameters<typeof PricingCard>[0],
  "size" | "className"
>;

const CARDS: PricingCardData[] = [
  {
    title: "À vista (10% OFF)",
    pricePrefix: "R$",
    priceValue: "7190",
    priceSuffix: "no PIX",
    secondaryAmount: { prefix: "US$", value: "800" },
    secondaryCaption: "pagos em Bangkok",
    includedItems: ["Economia de R$800"],
  },
  {
    title: "Cartão de crédito",
    installmentLabel: "12x de",
    pricePrefix: "R$",
    priceValue: "665",
    priceSuffix: "sem juros",
    totalAmounts: [
      { prefix: "R$", value: "7990 " },
      { prefix: "US$", value: "800" },
    ],
    totalCaption: "pagos em Bangkok",
    includedItems: [
      "Sem entrada",
      "Parcelamento sem juros",
      "Mais praticidade",
    ],
  },
  {
    title: "Parcelamento direto (5% OFF)",
    pricePrefix: "R$",
    priceValue: "7590",
    priceSuffix: "em partes",
    secondaryAmount: { prefix: "US$", value: "800" },
    secondaryCaption: "pagos em Bangkok",
    howToItems: [
      "Entrada de R$ 4.590",
      "Saldo de R$ 3.000 parcelado via PIX",
    ],
    includedItems: ["Ideal para quem prefere evitar o cartão."],
  },
];

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
      {CARDS.map((card, index) => {
        const isLast = index === CARDS.length - 1;
        const cardClassName = isStacked
          ? styles.cardStacked
          : isLast
            ? styles.cardFillAuto
            : styles.cardFill;

        return (
          <PricingCard
            key={card.title}
            {...card}
            size={size}
            className={cardClassName}
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
