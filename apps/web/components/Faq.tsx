"use client";

import { useState } from "react";
import AccordionItem from "@delacumbre/design-system/components/navigation/AccordionItem";
import styles from "./Faq.module.css";

type Question = {
  title: string;
  description: string;
};

// Respostas ilustrativas, alinhadas aos números já usados no PricingCard —
// revisar com jurídico/comercial antes de virar copy definitiva.
const QUESTIONS: Question[] = [
  {
    title: "O que está incluso no valor da viagem?",
    description:
      "O pacote inclui todos os serviços descritos na apresentação da viagem, como hospedagem, traslados, passeios e demais experiências previstas no roteiro. Para evitar qualquer dúvida, você sempre poderá consultar a relação completa do que está e do que não está incluso antes de confirmar sua reserva.",
  },
  {
    title: "O que não está incluso na viagem?",
    description:
      "Passagens aéreas internacionais, seguro viagem, gastos pessoais e refeições fora do roteiro não entram no pacote — tudo isso fica listado separado, sem letra miúda escondida.",
  },
  {
    title: "Como funciona o pagamento da viagem?",
    description:
      "Entrada de R$ 4.590 + saldo de R$ 3.000 parcelado via PIX, ou cartão de crédito parcelado em até 12x de R$ 665 sem juros — o total fica em R$ 7.990 + US$ 800 pagos em Bangkok.",
  },
  {
    title: "Posso parcelar minha viagem?",
    description:
      "Pode. No cartão de crédito o parcelamento é em até 12x sem juros; no PIX você entra com R$ 4.590 e parcela o saldo direto com a gente.",
  },
  {
    title: "Preciso de passaporte ou visto para viajar?",
    description:
      "Passaporte válido por pelo menos 6 meses após a viagem é obrigatório. Visto depende do destino e da sua nacionalidade — mandamos a lista completa assim que a vaga é confirmada.",
  },
  {
    title: "Como funciona a hospedagem?",
    description:
      "A hospedagem já está no roteiro, sempre em lugares que combinam com o espírito contraturístico da expedição — nada de resort genérico. Os detalhes de cada hospedagem ficam no roteiro dia a dia.",
  },
  {
    title: "Como funciona o cancelamento?",
    description:
      "A política de cancelamento varia por prazo e já vem detalhada na proposta de cada expedição — fala com a gente que explicamos certinho antes de você fechar.",
  },
];

const TIERS = ["sm", "md", "lg"] as const;

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="perguntas-frequentes" className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.heading}>Perguntas frequentes</p>

        {TIERS.map((tier) => (
          <div
            key={tier}
            className={`${styles.list} ${styles[`list_${tier}`]}`}
          >
            {QUESTIONS.map((question, index) => (
              <AccordionItem
                key={question.title}
                size={tier}
                title={question.title}
                open={openIndex === index}
                onToggle={(open) => setOpenIndex(open ? index : -1)}
              >
                {question.description}
              </AccordionItem>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
