import Image from "next/image";
import Header from "@/components/layout/Header";
import styles from "./page.module.css";

const backdrop = "/gallery/angkor.jpeg";

export default function HeaderPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Header — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Barra fixa no topo da interface, com botão de voltar e logo
          opcionais e um botão de menu sempre presente. Sem fundo por padrão;
          ganha fundo licorice translúcido com blur (mesma receita do{" "}
          <code>LocationCard</code>) a partir de um pequeno scroll — role esta
          página para ver o efeito acontecer nos exemplos abaixo. O padding,
          o tamanho dos botões e o tamanho da logo se adaptam sozinhos no
          breakpoint técnico SM→MD do projeto (810px); redimensione a janela
          para conferir a versão SM.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Composição</h2>
        <p className={`${styles.hint} text-caption`}>
          Botão de voltar e logo existem ou não dependendo da interface — o
          botão de menu é o único elemento sempre presente. Cada exemplo abaixo
          está contido no próprio quadro só para efeito de demonstração; em
          uso real o header é fixo na janela inteira.
        </p>
        <div className={styles.grid}>
          <div className={styles.example}>
            <div className={styles.previewFrame}>
              <Image
                src={backdrop}
                alt=""
                fill
                sizes="(min-width: 810px) 400px, 100vw"
                className={styles.previewBackdrop}
              />
              <Header
                backButton={{ label: "Voltar", href: "#" }}
                logo={{
                  src: "/header/delacumbre-logo.svg",
                  alt: "Delacumbre EXP",
                }}
              />
            </div>
            <p className={`${styles.caption} text-caption-xs`}>
              Completo — botão de voltar + logo
            </p>
          </div>

          <div className={styles.example}>
            <div className={styles.previewFrame}>
              <Image
                src={backdrop}
                alt=""
                fill
                sizes="(min-width: 810px) 400px, 100vw"
                className={styles.previewBackdrop}
              />
              <Header
                logo={{
                  src: "/header/delacumbre-logo.svg",
                  alt: "Delacumbre EXP",
                }}
              />
            </div>
            <p className={`${styles.caption} text-caption-xs`}>
              Sem botão de voltar
            </p>
          </div>

          <div className={styles.example}>
            <div className={styles.previewFrame}>
              <Image
                src={backdrop}
                alt=""
                fill
                sizes="(min-width: 810px) 400px, 100vw"
                className={styles.previewBackdrop}
              />
              <Header backButton={{ label: "Voltar", href: "#" }} />
            </div>
            <p className={`${styles.caption} text-caption-xs`}>Sem logo</p>
          </div>

          <div className={styles.example}>
            <div className={styles.previewFrame}>
              <Image
                src={backdrop}
                alt=""
                fill
                sizes="(min-width: 810px) 400px, 100vw"
                className={styles.previewBackdrop}
              />
              <Header />
            </div>
            <p className={`${styles.caption} text-caption-xs`}>Só o menu</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso</h2>
        <pre className={styles.code}>
          {`import Header from "@/components/layout/Header";\n\n<Header\n  backButton={{ label: "Voltar", href: "/" }}\n  logo={{ src: "/header/delacumbre-logo.svg", alt: "Delacumbre EXP" }}\n  onMenuClick={() => setMenuOpen(true)}\n/>`}
        </pre>
        <p className="text-body-sm">
          <code>backButton</code> e <code>logo</code> são opcionais — omita o
          que não fizer sentido para a interface. <code>onMenuClick</code>{" "}
          abre o menu (a implementar); <code>menuLabel</code> troca o nome
          acessível do botão de menu (padrão &quot;Menu&quot;).
        </p>
      </section>
    </main>
  );
}
