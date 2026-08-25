import CheckoutCard from "@/components/CheckoutCard";
import styles from "./page.module.css";

export default function CheckoutCardPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Checkout — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Card de resumo do pedido com imagem, tabela de detalhes e caixa de
          preço, nos tamanhos LG, MD e SM do Figma.
        </p>
      </header>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <CheckoutCard
            image="/checkout-card/checkout-thumb.png"
            imageAlt="Expedição Holiday in Camboja & Bangkok"
            expeditionName="Holiday in Canboja & Bangkok"
            dateRange="10 a 22 de abril de 2027"
            destination="Canboja & Bangkok"
            paymentMethod="Cartão de crédito"
            installmentText="12x de R$665 "
            installmentHighlight="sem juros"
            totalText="Total: R$7990 + US$800 (em Bangkok)"
            size="lg"
          />
          <CheckoutCard
            image="/checkout-card/checkout-thumb.png"
            imageAlt="Expedição Holiday in Camboja & Bangkok"
            expeditionName="Holiday in Canboja & Bangkok"
            dateRange="10 a 22 de abril de 2027"
            destination="Canboja & Bangkok"
            paymentMethod="Cartão de crédito"
            installmentText="12x de R$665 "
            installmentHighlight="sem juros"
            totalText="Total: R$7990 + US$800 (em Bangkok)"
            size="md"
          />
          <CheckoutCard
            image="/checkout-card/checkout-thumb.png"
            imageAlt="Expedição Holiday in Camboja & Bangkok"
            expeditionName="Holiday in Canboja & Bangkok"
            dateRange="10 a 22 de abril de 2027"
            destination="Canboja & Bangkok"
            paymentMethod="Cartão de crédito"
            installmentText="12x de R$665 "
            installmentHighlight="sem juros"
            totalText="Total: R$7990 + US$800 (em Bangkok)"
            size="sm"
          />
        </div>
      </section>
    </main>
  );
}
