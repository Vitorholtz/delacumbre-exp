import TextField from "@/components/TextField";
import styles from "./page.module.css";

export default function TextFieldPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Text field — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Campo de texto nos tamanhos MD e SM do Figma. Estados de foco,
          hover, preenchido e erro são pilotados via CSS (
          <code>:focus</code>, <code>:placeholder-shown</code>).
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <TextField size="md" label="Nome" placeholder="Seu nome" />
          <TextField size="sm" label="Nome" placeholder="Seu nome" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Opcional</h2>
        <div className={styles.column}>
          <TextField label="Sobrenome" optional placeholder="Seu sobrenome" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Com valor</h2>
        <div className={styles.column}>
          <TextField
            label="Nome"
            placeholder="Seu nome"
            defaultValue="João da Silva Medeiros"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Erro</h2>
        <div className={styles.column}>
          <TextField
            label="Nome"
            placeholder="Seu nome"
            defaultValue="João da Silva Medeiros"
            error="Mensagem de erro em uma linha"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Desabilitado</h2>
        <div className={styles.column}>
          <TextField label="Nome" placeholder="Seu nome" disabled />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Máscaras</h2>
        <div className={styles.column}>
          <TextField label="WhatsApp" mask="phone" />
          <TextField label="CPF" mask="cpf" />
        </div>
        <p className={`${styles.hint} text-caption`}>
          A formatação é aplicada enquanto o usuário digita — funciona colando
          o número também.
        </p>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import TextField from "@/components/TextField";\n\n<TextField label="Nome" placeholder="Seu nome" />\n<TextField label="Sobrenome" optional />\n<TextField label="E-mail" error="E-mail inválido" size="sm" />\n<TextField label="WhatsApp" mask="phone" />\n<TextField label="CPF" mask="cpf" />`}
        </pre>
      </section>
    </main>
  );
}
