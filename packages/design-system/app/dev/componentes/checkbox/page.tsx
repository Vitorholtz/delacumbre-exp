import Checkbox from "@/components/controls/Checkbox";
import styles from "./page.module.css";

export default function CheckboxPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Check box — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Caixa de seleção, com ou sem texto, nos 3 tamanhos do Figma.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Sem texto</h2>
        <div className={styles.row}>
          <Checkbox aria-label="Opção 1" />
          <Checkbox aria-label="Opção 2" defaultChecked />
          <Checkbox aria-label="Opção 3" disabled />
          <Checkbox aria-label="Opção 4" disabled defaultChecked />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Com texto — tamanhos</h2>
        <div className={styles.column}>
          <Checkbox
            size="lg"
            label="Autorizo o compartilhamento dos meus dados."
          />
          <Checkbox
            size="md"
            label="Autorizo o compartilhamento dos meus dados."
          />
          <Checkbox
            size="sm"
            label="Autorizo o compartilhamento dos meus dados."
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Estados</h2>
        <div className={styles.column}>
          <Checkbox label="Não selecionado" />
          <Checkbox label="Selecionado" defaultChecked />
          <Checkbox label="Desabilitado" disabled />
          <Checkbox label="Desabilitado e selecionado" disabled defaultChecked />
        </div>
        <p className={`${styles.hint} text-caption`}>
          Passe o mouse, clique ou navegue com Tab para ver hover, foco e
          seleção.
        </p>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import Checkbox from "@/components/controls/Checkbox";\n\n<Checkbox label="Autorizo o compartilhamento dos meus dados." />\n<Checkbox aria-label="Selecionar item" />\n<Checkbox size="sm" label="Termos de uso" disabled />`}
        </pre>
      </section>
    </main>
  );
}
