import Icon from "@/components/Icon";
import styles from "./page.module.css";

const icons = [
  { name: "hiking", usedIn: "Chip (default)" },
  { name: "filter", usedIn: "List-item (default)" },
  { name: "arrow_right", usedIn: "Pricing card — Como funciona" },
  { name: "check", usedIn: "Pricing card — itens incluídos" },
  { name: "calendar_today", usedIn: "Checkout card — Data" },
  { name: "location_on", usedIn: "Checkout card — Destino" },
  { name: "attach_money", usedIn: "Checkout card — Pagamento" },
  { name: "swap_horiz", usedIn: "Checkout card — Alterar pagamento" },
  { name: "play_circle", usedIn: "Gallery thumb — mídia de vídeo" },
  { name: "search", usedIn: "Gallery thumb — ampliar imagem (hover)" },
  { name: "arrow_back", usedIn: "Gallery slider — mídia anterior" },
  { name: "arrow_forward", usedIn: "Gallery slider — próxima mídia" },
  { name: "close", usedIn: "Gallery slider — fechar" },
  { name: "arrow_upward", usedIn: "Footer — voltar ao topo" },
];

const sizes: Array<20 | 24> = [24, 20];

export default function IconsPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Ícones — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Google Material Symbols Sharp, carregada como fonte de ícones
          (ligature font — o nome do ícone é o próprio conteúdo do elemento).
          Esta lista cresce conforme novos ícones aparecerem nos componentes.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Ícones usados no Figma</h2>
        <div className={styles.iconGrid}>
          {icons.map((icon) => (
            <div key={icon.name} className={styles.iconCard}>
              <div className={styles.iconPreview}>
                {sizes.map((size) => (
                  <Icon key={size} name={icon.name} size={size} />
                ))}
              </div>
              <div className={`${styles.iconLabel} text-caption`}>
                {icon.name}
                <br />
                <span className={styles.iconUsage}>{icon.usedIn}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import Icon from "@/components/Icon";\n\n<Icon name="hiking" />\n<Icon name="check" size={20} />\n<Icon name="close" label="Fechar" />`}
        </pre>
        <p className="text-body-sm">
          Por padrão o ícone é decorativo (<code>aria-hidden</code>). Passe{" "}
          <code>label</code> quando ele carregar significado próprio (ex: botão
          só com ícone).
        </p>
      </section>
    </main>
  );
}
