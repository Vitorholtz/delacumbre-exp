import styles from "./page.module.css";

const colorGroups = [
  {
    title: "Licorice — base escura",
    items: [
      { name: "licorice", varName: "--color-licorice" },
      { name: "licorice dark", varName: "--color-licorice-dark" },
      { name: "licorice light", varName: "--color-licorice-light" },
      {
        name: "licorice super light",
        varName: "--color-licorice-super-light",
      },
      { name: "licorice 60%", varName: "--color-licorice-60" },
      { name: "licorice 80%", varName: "--color-licorice-80" },
    ],
  },
  {
    title: "Hunyadi Yellow & Dune — destaque",
    items: [
      { name: "hunyadi yellow", varName: "--color-hunyadi-yellow" },
      { name: "dune", varName: "--color-dune" },
      { name: "dune 40%", varName: "--color-dune-40" },
    ],
  },
  {
    title: "White",
    items: [
      { name: "white", varName: "--color-white" },
      { name: "white 20%", varName: "--color-white-20" },
      { name: "white 50%", varName: "--color-white-50" },
    ],
  },
  {
    title: "Outras",
    items: [
      { name: "scarlet rush", varName: "--color-scarlet-rush" },
      { name: "russet (papel a definir)", varName: "--color-russet" },
      { name: "olive muted", varName: "--color-olive-muted" },
    ],
  },
];

const typeScale = [
  {
    name: "display-xl",
    className: "text-display-xl",
    family: "Berringer",
    size: "4.5rem",
    leading: "1.056",
    px: "72px / 76px",
  },
  {
    name: "display-lg",
    className: "text-display-lg",
    family: "Berringer",
    size: "3.5rem",
    leading: "1.071",
    px: "56px / 60px",
  },
  {
    name: "heading-xl",
    className: "text-heading-xl",
    family: "Berringer",
    size: "2.75rem",
    leading: "1.091",
    px: "44px / 48px",
  },
  {
    name: "heading-lg",
    className: "text-heading-lg",
    family: "Berringer",
    size: "2.25rem",
    leading: "1.111",
    px: "36px / 40px",
  },
  {
    name: "heading-md",
    className: "text-heading-md",
    family: "Berringer",
    size: "1.75rem",
    leading: "1.143",
    px: "28px / 32px",
  },
  {
    name: "heading-sm",
    className: "text-heading-sm",
    family: "Berringer",
    size: "1.375rem",
    leading: "1.273",
    px: "22px / 28px",
  },
  {
    name: "body-lg",
    className: "text-body-lg",
    family: "Kanit Light",
    size: "1.375rem",
    leading: "1.455",
    px: "22px / 32px",
  },
  {
    name: "body-md",
    className: "text-body-md",
    family: "Kanit Light",
    size: "1.125rem",
    leading: "1.556",
    px: "18px / 28px",
  },
  {
    name: "body-sm",
    className: "text-body-sm",
    family: "Kanit Light",
    size: "1rem",
    leading: "1.5",
    px: "16px / 24px",
  },
  {
    name: "caption",
    className: "text-caption",
    family: "Kanit Light",
    size: "0.875rem",
    leading: "1.429",
    px: "14px / 20px",
  },
  {
    name: "caption-xs",
    className: "text-caption-xs",
    family: "Kanit Medium",
    size: "0.75rem",
    leading: "1.333",
    px: "12px / 16px",
    note: "Ajustado do Figma (10px/14px) para 12px/16px",
  },
];

const spacingSteps = [
  "1",
  "1-5",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "10",
  "12",
  "14",
  "16",
];

const radiusSteps = [
  { name: "sm", varName: "--radius-sm" },
  { name: "12", varName: "--radius-12" },
  { name: "md", varName: "--radius-md" },
  { name: "lg", varName: "--radius-lg" },
  { name: "full", varName: "--radius-full" },
];

export default function TokensPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Tokens — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Conferência visual dos tokens extraídos do Figma. Use esta página para
          comparar lado a lado com os frames originais.
        </p>
      </header>

      <nav className={styles.toc}>
        <a className="text-caption" href="#cores">
          Cores
        </a>
        <a className="text-caption" href="#tipografia">
          Tipografia
        </a>
        <a className="text-caption" href="#espacamento">
          Espaçamento
        </a>
        <a className="text-caption" href="#raio">
          Raio de borda
        </a>
        <a className="text-caption" href="#sombra">
          Sombra de foco
        </a>
      </nav>

      <section id="cores" className={styles.section}>
        <h2 className="text-heading-md">Cores</h2>
        {colorGroups.map((group) => (
          <div key={group.title} className={styles.colorGroup}>
            <h3 className={`${styles.groupTitle} text-caption`}>
              {group.title}
            </h3>
            <div className={styles.swatchGrid}>
              {group.items.map((color) => (
                <div key={color.varName} className={styles.swatch}>
                  <div
                    className={styles.swatchColor}
                    style={{ background: `var(${color.varName})` }}
                  />
                  <div className={`${styles.swatchLabel} text-caption`}>
                    {color.name}
                    <br />
                    {color.varName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="tipografia" className={styles.section}>
        <h2 className="text-heading-md">Tipografia</h2>
        <div className={styles.typeTable}>
          {typeScale.map((type) => (
            <div key={type.className} className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className="text-caption">{type.name}</span>
                <span className={`${styles.typeMetaDetail} text-caption`}>
                  {type.family} · {type.size} / {type.leading}
                </span>
                <span className={`${styles.typeMetaPx} text-caption-xs`}>
                  {"note" in type ? type.note : `Figma: ${type.px}`}
                </span>
              </div>
              <span className={type.className}>Delacumbre EXP</span>
            </div>
          ))}
        </div>
      </section>

      <section id="espacamento" className={styles.section}>
        <h2 className="text-heading-md">Espaçamento</h2>
        {spacingSteps.map((step) => (
          <div key={step} className={styles.spacingRow}>
            <span className={`${styles.spacingLabel} text-caption`}>
              --space-{step}
            </span>
            <div
              className={styles.spacingBar}
              style={{ width: `var(--space-${step})` }}
            />
          </div>
        ))}
      </section>

      <section id="raio" className={styles.section}>
        <h2 className="text-heading-md">Raio de borda</h2>
        <div className={styles.tokenList}>
          {radiusSteps.map((radius) => (
            <div key={radius.varName} className={styles.tokenItem}>
              <div
                className={styles.radiusBox}
                style={{ borderRadius: `var(${radius.varName})` }}
              />
              <span className="text-caption">{radius.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="sombra"
        className={`${styles.section} ${styles.lastSection}`}
      >
        <h2 className="text-heading-md">Sombra de foco</h2>
        <div className={styles.tokenList}>
          <div className={styles.tokenItem}>
            <div
              className={styles.radiusBox}
              style={{ boxShadow: "var(--shadow-focus)" }}
            />
            <span className="text-caption">--shadow-focus</span>
          </div>
        </div>
      </section>
    </main>
  );
}
