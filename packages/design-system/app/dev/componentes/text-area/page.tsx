import TextArea from "@/components/TextArea";
import styles from "./page.module.css";

const longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";

export default function TextAreaPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Text area — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Campo de texto multilinha, nos tamanhos MD e SM do Figma. Mesmos
          padrões de interação do Text field: foco vira borda de destaque,
          desfocar com texto volta pra borda normal com texto branco.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <TextArea
            size="md"
            label="Sua mensagem"
            placeholder="Fala pra gente: qual é a sua dúvida? Pode mandar sugestão, crítica ou até xingar a gente, estamos aqui pra te ouvir."
          />
          <TextArea
            size="sm"
            label="Sua mensagem"
            placeholder="Fala pra gente: qual é a sua dúvida? Pode mandar sugestão, crítica ou até xingar a gente, estamos aqui pra te ouvir."
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Opcional</h2>
        <div className={styles.column}>
          <TextArea
            label="Comentário adicional"
            optional
            placeholder="Algo mais que queira nos contar?"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Com valor</h2>
        <div className={styles.column}>
          <TextArea label="Sua mensagem" defaultValue={longText} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Erro</h2>
        <div className={styles.column}>
          <TextArea
            label="Sua mensagem"
            defaultValue={longText}
            error="Mensagem de erro em uma linha"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Desabilitado</h2>
        <div className={styles.column}>
          <TextArea label="Sua mensagem" placeholder="Sua mensagem" disabled />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import TextArea from "@/components/TextArea";\n\n<TextArea label="Sua mensagem" placeholder="Conta pra gente..." />\n<TextArea label="Comentário" optional size="sm" />\n<TextArea label="Sua mensagem" error="Campo obrigatório" />`}
        </pre>
      </section>
    </main>
  );
}
