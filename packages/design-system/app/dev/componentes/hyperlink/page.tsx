import Hyperlink from "@/components/Hyperlink";
import styles from "./page.module.css";

export default function HyperlinkPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Hyperlink — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Link de texto com ícone opcional, nos 4 tamanhos do Figma.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Tamanhos</h2>
        <div className={styles.column}>
          <Hyperlink href="#" size="lg">
            Nome do item
          </Hyperlink>
          <Hyperlink href="#" size="md">
            Nome do item
          </Hyperlink>
          <Hyperlink href="#" size="sm">
            Nome do item
          </Hyperlink>
          <Hyperlink href="#" size="xsm">
            Nome do item
          </Hyperlink>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Sem ícone</h2>
        <div className={styles.column}>
          <Hyperlink href="#" showIcon={false}>
            Nome do item
          </Hyperlink>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Interno x externo</h2>
        <div className={styles.column}>
          <Hyperlink href="/dev/tokens" icon="arrow_forward">
            Rota interna (next/link)
          </Hyperlink>
          <Hyperlink href="https://www.figma.com">
            Link externo (abre em nova aba)
          </Hyperlink>
        </div>
        <p className={`${styles.hint} text-caption`}>
          Detecta automaticamente: caminhos internos usam <code>next/link</code>
          ; URLs <code>http(s)</code> ganham{" "}
          <code>target=&quot;_blank&quot;</code>.
        </p>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import Hyperlink from "@/components/Hyperlink";\n\n<Hyperlink href="/expedicoes">Ver todas</Hyperlink>\n<Hyperlink href="https://instagram.com/delacumbre">Instagram</Hyperlink>\n<Hyperlink href="/sobre" size="sm" showIcon={false}>Sobre nós</Hyperlink>`}
        </pre>
      </section>
    </main>
  );
}
