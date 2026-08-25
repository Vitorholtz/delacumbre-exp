import PresentationCard from "@/components/PresentationCard";
import styles from "./page.module.css";

const bio =
  'Escritor e documentarista. Meu "eu" literário entrou em erupção exatamente aqui, peregrinando pelas sarjetas do Sudeste Asiático da forma mais visceral e humana possível. Além das quase quinhentas páginas de "Um drink numa bota suja de lama", escrevi também sobre a Coréia do Norte, quando estive por lá, em 2018, na obra "Distopia verídica – o grande livro de colorir da família Kim e outras liturgias".';

export default function PresentationCardPage() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">
          Apresentação do guia — Delacumbre EXP
        </h1>
        <p className="text-body-sm">
          Card de apresentação com foto, selo, título e botões, nos tamanhos
          LG, MD e SM do Figma.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className="text-heading-md">LG</h2>
        <PresentationCard
          image="/travel-guide/Marcos-Delacumbre.png"
          imageAlt="Marcos DeLacumbre segurando réplicas de armas em um campo"
          titleLine1="Muito prazer, sou"
          highlightName="Marcos DeLacumbre"
          bio={bio}
          secondaryLabel="Ver expedições"
          size="lg"
        />
      </section>

      <section className={styles.section}>
        <h2 className="text-heading-md">MD</h2>
        <PresentationCard
          image="/travel-guide/Marcos-Delacumbre.png"
          imageAlt="Marcos DeLacumbre segurando réplicas de armas em um campo"
          titleLine1="Muito prazer, sou"
          highlightName="Marcos DeLacumbre"
          bio={bio}
          secondaryLabel="Ver expedições"
          size="md"
        />
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">SM</h2>
        <PresentationCard
          image="/travel-guide/Marcos-Delacumbre.png"
          imageAlt="Marcos DeLacumbre segurando réplicas de armas em um campo"
          titleLine1="Muito prazer, sou"
          highlightName="Marcos DeLacumbre"
          bio={bio}
          secondaryLabel="Ver expedições"
          size="sm"
        />
      </section>
    </main>
  );
}
