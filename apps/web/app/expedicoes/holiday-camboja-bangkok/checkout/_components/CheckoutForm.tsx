"use client";

import type { FormEvent } from "react";
import TextField from "@delacumbre/design-system/components/controls/TextField";
import TextArea from "@delacumbre/design-system/components/controls/TextArea";
import Checkbox from "@delacumbre/design-system/components/controls/Checkbox";
import Button from "@delacumbre/design-system/components/primitives/Button";
import styles from "./CheckoutForm.module.css";

export default function CheckoutForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: sem backend ainda — feedback de confirmação fica pra depois.
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <div className={styles.inputsRow}>
          <TextField
            className={styles.field}
            label="Nome completo"
            name="nome"
            size="sm"
            placeholder="Seu nome"
            required
          />
          <TextField
            className={styles.field}
            label="E-mail"
            name="email"
            type="email"
            size="sm"
            placeholder="Seu e-mail"
            required
          />
        </div>
        <div className={styles.inputsRow}>
          <TextField
            className={styles.field}
            label="Whatsapp/telefone"
            name="telefone"
            mask="phone"
            size="sm"
            required
          />
          <TextField
            className={styles.field}
            label="CPF"
            name="cpf"
            mask="cpf"
            size="sm"
            required
          />
        </div>
        <TextArea
          className={styles.field}
          label="Algo que seu guia precisa saber?"
          name="observacoes"
          size="sm"
          optional
          placeholder="Conte algo que você gostaria que o guia soubesse antes de entrar em contato..."
        />
        <Checkbox
          name="autorizacao"
          size="md"
          required
          label="Autorizo o compartilhamento dos meus dados de contato com o líder desta expedição para que ele possa entrar em contato comigo sobre minha inscrição."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className={styles.submitDesktop}
      >
        Confirmar
      </Button>
      <Button
        type="submit"
        variant="primary"
        size="md"
        className={styles.submitCompact}
      >
        Confirmar
      </Button>
    </form>
  );
}
