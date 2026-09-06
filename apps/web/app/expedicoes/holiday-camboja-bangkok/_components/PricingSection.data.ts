export type PaymentMethodId = "a-vista" | "cartao" | "parcelamento";

type PriceAmount = {
  prefix: string;
  value: string;
};

export type PricingOption = {
  id: PaymentMethodId;
  title: string;
  installmentLabel?: string;
  pricePrefix: string;
  priceValue: string;
  priceSuffix?: string;
  totalAmounts?: PriceAmount[];
  totalCaption?: string;
  secondaryAmount?: PriceAmount;
  secondaryCaption?: string;
  howToItems?: string[];
  includedItems: string[];
  checkout: {
    paymentMethod: string;
    installmentText: string;
    installmentHighlight: string;
    totalText: string;
  };
};

export const PRICING_OPTIONS: PricingOption[] = [
  {
    id: "a-vista",
    title: "À vista (10% OFF)",
    pricePrefix: "R$",
    priceValue: "7190",
    priceSuffix: "no PIX",
    secondaryAmount: { prefix: "US$", value: "800" },
    secondaryCaption: "pagos em Bangkok",
    includedItems: ["Economia de R$800"],
    checkout: {
      paymentMethod: "À vista (PIX)",
      installmentText: "R$7190 ",
      installmentHighlight: "no PIX",
      totalText: "Total: R$7190 + US$800 (em Bangkok)",
    },
  },
  {
    id: "cartao",
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
    checkout: {
      paymentMethod: "Cartão de crédito",
      installmentText: "12x de R$665 ",
      installmentHighlight: "sem juros",
      totalText: "Total: R$7990 + US$800 (em Bangkok)",
    },
  },
  {
    id: "parcelamento",
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
    checkout: {
      paymentMethod: "Parcelamento direto",
      installmentText: "R$7590 ",
      installmentHighlight: "em partes",
      totalText: "Total: R$7590 + US$800 (em Bangkok)",
    },
  },
];
