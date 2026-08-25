import PricingCard from "@/components/PricingCard";
import styles from "./page.module.css";

const includedItems = [
  "Sem entrada",
  "Parcelamento sem juros",
  "Mais praticidade",
];

const howToItems = [
  "Entrada de R$ 4.590",
  "Saldo de R$ 3.000 parcelado via PIX",
];

export default function PricingCardPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Pricing — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Card de preço com valor em destaque, detalhamento do total, seção
          &quot;Como funciona&quot; e botão de reserva, nos tamanhos LG, MD e
          SM do Figma.
        </p>
      </header>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.row}>
          <PricingCard
            title="Cartão de crédito"
            installmentLabel="12x de"
            pricePrefix="R$"
            priceValue="665"
            priceSuffix="sem juros"
            totalAmounts={[
              { prefix: "R$", value: "7990 " },
              { prefix: "US$", value: "800" },
            ]}
            totalCaption="pagos em Bangkok"
            secondaryAmount={{ prefix: "US$", value: "800" }}
            secondaryCaption="pagos em Bangkok"
            howToItems={howToItems}
            includedItems={includedItems}
            size="lg"
          />
          <PricingCard
            title="Cartão de crédito"
            installmentLabel="12x de"
            pricePrefix="R$"
            priceValue="665"
            priceSuffix="sem juros"
            totalAmounts={[
              { prefix: "R$", value: "7990 " },
              { prefix: "US$", value: "800" },
            ]}
            totalCaption="pagos em Bangkok"
            secondaryAmount={{ prefix: "US$", value: "800" }}
            secondaryCaption="pagos em Bangkok"
            howToItems={howToItems}
            includedItems={includedItems}
            size="md"
          />
          <PricingCard
            title="Cartão de crédito"
            installmentLabel="12x de"
            pricePrefix="R$"
            priceValue="665"
            priceSuffix="sem juros"
            totalAmounts={[
              { prefix: "R$", value: "7990 " },
              { prefix: "US$", value: "800" },
            ]}
            totalCaption="pagos em Bangkok"
            secondaryAmount={{ prefix: "US$", value: "800" }}
            secondaryCaption="pagos em Bangkok"
            howToItems={howToItems}
            includedItems={includedItems}
            size="sm"
          />
        </div>
      </section>
    </main>
  );
}
