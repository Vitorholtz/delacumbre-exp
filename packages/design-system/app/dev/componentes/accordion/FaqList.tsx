"use client";

import { useState } from "react";
import AccordionItem from "@/components/navigation/AccordionItem";
import styles from "./page.module.css";

const questions = [
  "O que está incluso no valor da viagem?",
  "Preciso de visto para participar?",
  "Como funciona o cancelamento?",
];

export default function FaqList({ description }: { description: string }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.column}>
      {questions.map((question, index) => (
        <AccordionItem
          key={question}
          size="md"
          title={question}
          open={openIndex === index}
          onToggle={(open) => setOpenIndex(open ? index : -1)}
        >
          {description}
        </AccordionItem>
      ))}
    </div>
  );
}
