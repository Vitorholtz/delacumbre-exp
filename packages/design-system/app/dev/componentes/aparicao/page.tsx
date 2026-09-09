import Reveal from "@/components/layout/Reveal";
import styles from "./page.module.css";

const DEMO_SECTIONS = [
  {
    title: "Primeira seção",
    text: "Role a página devagar: cada caixa espera um respiro e então desce 64px pro lugar, saindo de um desfoque de 16px.",
  },
  {
    title: "Segunda seção",
    text: "Suba a página até esta caixa voltar pra baixo da viewport: ela reseta na hora, sem animar de volta, e aparece de novo na próxima descida.",
  },
  {
    title: "Terceira seção",
    text: "Enquanto está visível, a caixa fica sem filter nem transform: é um elemento comum, não uma camada animada parada.",
  },
];

export default function AparicaoPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Aparição no scroll — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Caixa que revela a seção conforme ela entra na viewport: desce 64px de
          cima pra baixo saindo de um desfoque até o estado normal, em 1,1s,
          depois de um respiro de 0,15s. Mesmo vocabulário de fade + blur do
          Menu e do logo do Header, com deslocamento vertical e a curva
          cubic-bezier(0.22, 1, 0.36, 1) já usada no slider do IntroSection.
          Dispara quando a seção sobe 20% da altura da viewport (no máximo
          240px, e nunca mais que metade da própria seção) acima da borda de
          baixo — é esse gatilho tardio, mais que a duração, que faz o efeito
          acontecer onde o usuário está olhando. Repete: subir a página até a
          seção voltar pra baixo da viewport reseta o estado, e ela aparece de
          novo na descida seguinte. Sair de vista por cima não reseta. Quem pede
          menos movimento (prefers-reduced-motion) recebe a seção direto no
          estado final, sem animação.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">Comportamento</h2>
        <p className={`${styles.hint} text-caption`}>
          As caixas abaixo estão separadas pela mesma distância entre seções do
          site (200px SM / 360px MD e LG) — role até cada uma pra ver a aparição
          isolada, e volte pra cima pra ver o reset.
        </p>

        <div className={styles.stack}>
          {DEMO_SECTIONS.map((item) => (
            <Reveal key={item.title}>
              <div className={styles.demoSection}>
                <p className="text-heading-md">{item.title}</p>
                <p className="text-body-sm">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Uso</h2>
        <p className={`${styles.hint} text-caption`}>
          Caso padrão: envolver a seção. A caixa ocupa 100% da largura e não
          muda o layout ao redor.
        </p>

        <pre className={styles.code}>
          {`import Reveal from "@delacumbre/design-system/components/layout/Reveal";

<main>
  <Reveal>
    <Faq />
  </Reveal>
  <Reveal>
    <ContactForm />
  </Reveal>
</main>`}
        </pre>
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">Uso — blocos escalonados</h2>
        <p className={`${styles.hint} text-caption`}>
          Quando os blocos entram em vista no mesmo instante — uma página que
          cabe inteira na primeira dobra, como o checkout — o observer dispara
          em todos de uma vez e eles apareceriam juntos, num flash só.
          <code>staggerMs</code> segura cada caixa um pouco mais no estado
          inicial, e a entrada volta a ler como transição. Entre seções do site
          normal não serve pra nada: elas estão longe demais umas das outras pra
          aparecerem juntas.
        </p>

        <pre className={styles.code}>
          {`<Reveal>
  <header>...</header>
</Reveal>

<Reveal staggerMs={150}>
  <div>...</div>
</Reveal>`}
        </pre>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Uso — sem caixa em volta</h2>
        <p className={`${styles.hint} text-caption`}>
          Quando o efeito precisa cair num elemento específico da própria árvore
          da seção, use o hook direto. É o caso do <code>HowToBook</code>: o
          track dele tem 300vh e desfocar esse elemento inteiro custaria uma
          camada de composição enorme justo na seção que anima por scroll — o
          efeito fica no palco de 100vh, por dentro.
        </p>

        <pre className={styles.code}>
          {`import { useReveal } from "@delacumbre/design-system/components/layout/Reveal";

const { ref, className } = useReveal<HTMLDivElement>();

<div
  ref={ref}
  className={[styles.inner, className].filter(Boolean).join(" ")}
>
  {children}
</div>`}
        </pre>
      </section>
    </main>
  );
}
