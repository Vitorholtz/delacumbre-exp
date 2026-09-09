"use client";

import { useState, type FormEvent } from "react";
import TextField from "@delacumbre/design-system/components/controls/TextField";
import TextArea from "@delacumbre/design-system/components/controls/TextArea";
import Button from "@delacumbre/design-system/components/primitives/Button";
import Modal from "@delacumbre/design-system/components/layout/Modal";
import { useIsSm } from "@delacumbre/design-system/lib/breakpoints";
import styles from "./ContactForm.module.css";

type FormErrors = {
  nome?: string;
  email?: string;
  mensagem?: string;
};

const requiredMessage = "Preencha este campo.";

export default function ContactForm() {
  const isSm = useIsSm();
  const fieldSize = isSm ? "sm" : "md";
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: FormErrors = {};
    if (!String(data.get("nome") ?? "").trim()) {
      nextErrors.nome = requiredMessage;
    }
    if (!String(data.get("email") ?? "").trim()) {
      nextErrors.email = requiredMessage;
    }
    if (!String(data.get("mensagem") ?? "").trim()) {
      nextErrors.mensagem = requiredMessage;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: sem backend ainda — só confirma na tela. Trocar por uma
    // chamada real (API route / serviço de e-mail) quando existir.
    setModalOpen(true);
    form.reset();
  };

  const clearError = (field: keyof FormErrors) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
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

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fields}>
            <div className={styles.inputsRow}>
              <TextField
                className={styles.field}
                label="Nome"
                name="nome"
                size={fieldSize}
                placeholder="Seu nome"
                error={errors.nome}
                onChange={() => clearError("nome")}
                required
              />
              <TextField
                className={styles.field}
                label="E-mail"
                name="email"
                type="email"
                size={fieldSize}
                placeholder="Seu e-mail"
                error={errors.email}
                onChange={() => clearError("email")}
                required
              />
            </div>
            <TextArea
              className={styles.field}
              label="Sua mensagem"
              name="mensagem"
              size={fieldSize}
              placeholder="Fala pra gente: qual é a sua dúvida? Pode mandar sugestão, crítica ou até xingar a gente, estamos aqui pra te ouvir."
              error={errors.mensagem}
              onInput={() => clearError("mensagem")}
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
        </form>
      </div>

      {modalOpen && (
        <Modal
          title="Mensagem enviada!"
          description="Recebemos sua mensagem e já vamos dar uma olhada. Em breve, alguém do nosso time entra em contato com você. Valeu por falar com a gente!"
          buttonLabel="Entendi"
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
