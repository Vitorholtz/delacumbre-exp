"use client";

import { useState } from "react";
import Button from "@/components/primitives/Button";
import Modal from "@/components/layout/Modal";
import styles from "./page.module.css";

export default function ModalPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Modal — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Confirmação centralizada, com camada de backdrop (blur + escurecido)
          atrás. Texto, descrição e botão se adaptam sozinhos no breakpoint
          técnico SM→MD (810px) — não existe uma versão LG dedicada no Figma,
          então o layout MD segue até LG. Fecha com clique no botão, clique
          fora do card, ou tecla Esc.
        </p>
      </header>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Abrir</h2>
        <div className={styles.row}>
          <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
            Abrir modal
          </Button>
        </div>
        <p className={`${styles.hint} text-caption`}>
          Redimensione a janela antes de abrir pra conferir as duas variantes
          do Figma (MD e SM).
        </p>

        <pre className={styles.code}>
          {`import { useState } from "react";\nimport Modal from "@/components/layout/Modal";\n\nconst [open, setOpen] = useState(false);\n\n{open && (\n  <Modal\n    title="Mensagem enviada!"\n    description="Recebemos sua mensagem e já vamos dar uma olhada. Em breve, alguém do nosso time entra em contato com você. Valeu por falar com a gente!"\n    buttonLabel="Entendi"\n    onClose={() => setOpen(false)}\n  />\n)}`}
        </pre>
      </section>

      {open && (
        <Modal
          title="Mensagem enviada!"
          description="Recebemos sua mensagem e já vamos dar uma olhada. Em breve, alguém do nosso time entra em contato com você. Valeu por falar com a gente!"
          buttonLabel="Entendi"
          onClose={() => setOpen(false)}
        />
      )}
    </main>
  );
}
