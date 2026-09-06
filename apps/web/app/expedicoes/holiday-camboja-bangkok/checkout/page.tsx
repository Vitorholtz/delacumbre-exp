import type { Metadata } from "next";
import FloatingButton from "@delacumbre/design-system/components/primitives/FloatingButton";
import CheckoutCard from "@delacumbre/design-system/components/cards/CheckoutCard";
import { PRICING_OPTIONS } from "../_components/PricingSection.data";
import CheckoutForm from "./_components/CheckoutForm";
import styles from "./page.module.css";

const EXPEDITION_NAME = "Holiday in Camboja & Bangkok";
const PRICING_HREF = "/expedicoes/holiday-camboja-bangkok#precos";
const CARD_IMAGE = "/checkout-card/checkout-thumb.png";
const CARD_IMAGE_ALT = "Expedição Holiday in Camboja & Bangkok";

export const metadata: Metadata = {
  title: "Confirmar reserva — Holiday in Camboja & Bangkok | Delacumbre EXP",
};

export default async function CheckoutPage({
  searchParams,
}: PageProps<"/expedicoes/holiday-camboja-bangkok/checkout">) {
  const { pagamento } = await searchParams;
  const option =
    PRICING_OPTIONS.find((item) => item.id === pagamento) ?? PRICING_OPTIONS[0];

  return (
    <main>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <p className={styles.heading}>Confirmar reserva</p>
            <FloatingButton icon="close" label="Fechar" href={PRICING_HREF} />
          </header>

          <div className={styles.content}>
            <div className={styles.formWrapper}>
              <p className={styles.headerText}>
                Confira os detalhes da sua expedição e informe seus dados
                para que o líder entre em contato.
              </p>
              <CheckoutForm />
            </div>

            <div className={`${styles.cardSlot} ${styles.cardSlotSm}`}>
              <CheckoutCard
                className={styles.cardFull}
                image={CARD_IMAGE}
                imageAlt={CARD_IMAGE_ALT}
                expeditionName={EXPEDITION_NAME}
                dateRange="10 a 22 de abril de 2027"
                destination="Camboja & Bangkok"
                paymentMethod={option.checkout.paymentMethod}
                changeHref={PRICING_HREF}
                installmentText={option.checkout.installmentText}
                installmentHighlight={option.checkout.installmentHighlight}
                totalText={option.checkout.totalText}
                size="sm"
              />
            </div>
            <div className={`${styles.cardSlot} ${styles.cardSlotMd}`}>
              <CheckoutCard
                className={styles.cardFull}
                image={CARD_IMAGE}
                imageAlt={CARD_IMAGE_ALT}
                expeditionName={EXPEDITION_NAME}
                dateRange="10 a 22 de abril de 2027"
                destination="Camboja & Bangkok"
                paymentMethod={option.checkout.paymentMethod}
                changeHref={PRICING_HREF}
                installmentText={option.checkout.installmentText}
                installmentHighlight={option.checkout.installmentHighlight}
                totalText={option.checkout.totalText}
                size="md"
              />
            </div>
            <div className={`${styles.cardSlot} ${styles.cardSlotLg}`}>
              <CheckoutCard
                className={styles.cardFull}
                image={CARD_IMAGE}
                imageAlt={CARD_IMAGE_ALT}
                expeditionName={EXPEDITION_NAME}
                dateRange="10 a 22 de abril de 2027"
                destination="Camboja & Bangkok"
                paymentMethod={option.checkout.paymentMethod}
                changeHref={PRICING_HREF}
                installmentText={option.checkout.installmentText}
                installmentHighlight={option.checkout.installmentHighlight}
                totalText={option.checkout.totalText}
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
