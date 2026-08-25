import ListItem from "@/components/navigation/ListItem";
import styles from "./page.module.css";

export default function ListItemPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Item de lista — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Item informativo com ícone e texto, nos 4 tamanhos do Figma. Sem
          interação.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <ListItem size="lg" label="Nome do item" />
          <ListItem size="md" label="Nome do item" />
          <ListItem size="sm" label="Nome do item" />
          <ListItem size="xsm" label="Nome do item" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Outros ícones</h2>
        <div className={styles.column}>
          <ListItem icon="hiking" label="Trilhas guiadas" />
          <ListItem icon="explore" label="Roteiro contraturístico" />
          <ListItem icon="photo_camera" label="Registro fotográfico" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import ListItem from "@/components/navigation/ListItem";\n\n<ListItem icon="hiking" label="Trilhas guiadas" />\n<ListItem icon="explore" label="Roteiro contraturístico" size="sm" />`}
        </pre>
      </section>
    </main>
  );
}
