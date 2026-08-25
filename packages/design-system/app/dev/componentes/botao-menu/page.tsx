import MenuButton from "@/components/MenuButton";
import styles from "./page.module.css";

export default function MenuButtonPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Botão de menu — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Ícone de hambúrguer nos tamanhos MD e SM do Figma. No hover, a
          terceira linha cresce até igualar as outras duas e um fundo
          arredondado aparece.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.row}>
          <MenuButton size="md" />
          <MenuButton size="sm" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Estados</h2>
        <div className={styles.row}>
          <MenuButton label="Abrir menu" />
          <MenuButton label="Abrir menu" disabled />
        </div>
        <p className={`${styles.hint} text-caption`}>
          Passe o mouse ou navegue com Tab para ver hover e foco.
        </p>
        <pre className={styles.code}>
          {`import MenuButton from "@/components/MenuButton";\n\n<MenuButton label="Abrir menu" />\n<MenuButton label="Abrir menu" size="sm" aria-expanded={isOpen} />`}
        </pre>
      </section>
    </main>
  );
}
