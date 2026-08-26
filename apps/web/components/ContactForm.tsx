"use client";

import { useState, type FormEvent } from "react";
import TextField from "@delacumbre/design-system/components/controls/TextField";
import TextArea from "@delacumbre/design-system/components/controls/TextArea";
import Button from "@delacumbre/design-system/components/primitives/Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: sem backend ainda — só confirma na tela. Trocar por uma
    // chamada real (API route / serviço de e-mail) quando existir.
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contato" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p className={styles.heading}>
            Ficou na dúvida?
            <br />
            fala com a gente!
          </p>
          <p className={styles.description}>
            Manda sua dúvida, sugestão ou crítica aqui embaixo — a gente lê
            tudo e responde o mais rápido possível.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <div className={styles.inputsRow}>
              <TextField
                className={styles.field}
                label="Nome"
                name="nome"
                placeholder="Seu nome"
                required
              />
              <TextField
                className={styles.field}
                label="E-mail"
                name="email"
                type="email"
                placeholder="Seu e-mail"
                required
              />
            </div>
            <TextArea
              className={styles.field}
              label="Sua mensagem"
              name="mensagem"
              placeholder="Fala pra gente: qual é a sua dúvida? Pode mandar sugestão, crítica ou até xingar a gente, estamos aqui pra te ouvir."
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className={styles.submitDesktop}
          >
            Enviar
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="md"
            className={styles.submitCompact}
          >
            Enviar
          </Button>

          <p role="status" aria-live="polite" className={styles.confirmation}>
            {sent && "Mensagem registrada — em breve alguém da equipe te chama."}
          </p>
        </form>
      </div>
    </section>
  );
}
