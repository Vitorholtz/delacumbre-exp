import RadioButton from "@/components/RadioButton";
import styles from "./page.module.css";

export default function RadioButtonPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Radio button — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Seleção única, com ou sem texto, nos 3 tamanhos do Figma.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Sem texto</h2>
        <div className={styles.row}>
          <RadioButton name="sem-texto" aria-label="Opção 1" />
          <RadioButton name="sem-texto" aria-label="Opção 2" defaultChecked />
          <RadioButton name="sem-texto-disabled" aria-label="Opção 3" disabled />
          <RadioButton
            name="sem-texto-disabled"
            aria-label="Opção 4"
            disabled
            defaultChecked
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Com texto — tamanhos</h2>
        <div className={styles.column}>
          <RadioButton
            name="tamanho-lg"
            size="lg"
            label="Autorizo o compartilhamento dos meus dados."
          />
          <RadioButton
            name="tamanho-md"
            size="md"
            label="Autorizo o compartilhamento dos meus dados."
          />
          <RadioButton
            name="tamanho-sm"
            size="sm"
            label="Autorizo o compartilhamento dos meus dados."
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Grupo</h2>
        <div className={styles.column}>
          <RadioButton name="destino" label="Mauritânia" defaultChecked />
          <RadioButton name="destino" label="Camboja & Bangkok" />
          <RadioButton name="destino" label="Índia" />
        </div>
        <p className={`${styles.hint} text-caption`}>
          Mesmo <code>name</code> nos três — só um pode ficar selecionado por
          vez.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Estados</h2>
        <div className={styles.column}>
          <RadioButton name="estados" label="Não selecionado" />
          <RadioButton name="estados-2" label="Selecionado" defaultChecked />
          <RadioButton name="estados-3" label="Desabilitado" disabled />
          <RadioButton
            name="estados-4"
            label="Desabilitado e selecionado"
            disabled
            defaultChecked
          />
        </div>
        <p className={`${styles.hint} text-caption`}>
          Passe o mouse, clique ou navegue com Tab/setas para ver hover, foco
          e seleção.
        </p>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import RadioButton from "@/components/RadioButton";\n\n<RadioButton name="destino" label="Mauritânia" />\n<RadioButton name="destino" label="Camboja & Bangkok" defaultChecked />\n<RadioButton name="opcao" aria-label="Selecionar item" />`}
        </pre>
      </section>
    </main>
  );
}
