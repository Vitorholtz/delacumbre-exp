"use client";

import { useState, type FormEvent } from "react";
import TextField from "@delacumbre/design-system/components/controls/TextField";
import TextArea from "@delacumbre/design-system/components/controls/TextArea";
import Checkbox from "@delacumbre/design-system/components/controls/Checkbox";
import Button from "@delacumbre/design-system/components/primitives/Button";
import Modal from "@delacumbre/design-system/components/layout/Modal";
import styles from "./CheckoutForm.module.css";

type FormErrors = {
  nome?: string;
  email?: string;
  telefone?: string;
  cpf?: string;
  autorizacao?: string;
};

const requiredMessage = "Preencha este campo.";

export default function CheckoutForm() {
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
    if (!String(data.get("telefone") ?? "").trim()) {
      nextErrors.telefone = requiredMessage;
    }
    if (!String(data.get("cpf") ?? "").trim()) {
      nextErrors.cpf = requiredMessage;
    }
    if (data.get("autorizacao") !== "on") {
      nextErrors.autorizacao = requiredMessage;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: sem backend ainda — só confirma na tela. Trocar por uma
    // chamada real (API route / serviço de reserva) quando existir.
    setModalOpen(true);
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
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.fields}>
          <div className={styles.inputsRow}>
            <TextField
              className={styles.field}
              label="Nome completo"
              name="nome"
              size="sm"
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
              size="sm"
              placeholder="Seu e-mail"
              error={errors.email}
              onChange={() => clearError("email")}
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
              error={errors.telefone}
              onChange={() => clearError("telefone")}
              required
            />
            <TextField
              className={styles.field}
              label="CPF"
              name="cpf"
              mask="cpf"
              size="sm"
              error={errors.cpf}
              onChange={() => clearError("cpf")}
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
            error={errors.autorizacao}
            onChange={() => clearError("autorizacao")}
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

      {modalOpen && (
        <Modal
          title="Reserva fechada!"
          description="Sua vaga tá garantida. Em breve, o líder desta expedição entra em contato pelo WhatsApp ou e-mail que você deixou aqui pra alinhar os últimos detalhes. Agora é só contar os dias (e arrumar a coragem)."
          buttonLabel="Bora!"
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
