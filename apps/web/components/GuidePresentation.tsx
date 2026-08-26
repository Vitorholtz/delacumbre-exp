import PresentationCard from "@delacumbre/design-system/components/cards/PresentationCard";
import styles from "./GuidePresentation.module.css";

const bio =
  'Escritor e documentarista. Meu "eu" literário entrou em erupção exatamente aqui, peregrinando pelas sarjetas do Sudeste Asiático da forma mais visceral e humana possível. Além das quase quinhentas páginas de "Um drink numa bota suja de lama", escrevi também sobre a Coréia do Norte, quando estive por lá, em 2018, na obra "Distopia verídica – o grande livro de colorir da família Kim e outras liturgias".';

export default function GuidePresentation() {
  return (
    <section id="sobre-nos" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={`${styles.slot} ${styles.slotSm}`}>
          <PresentationCard
            image="/travel-guide/Marcos-Delacumbre.png"
            imageAlt="Marcos DeLacumbre segurando réplicas de armas em um campo"
            titleLine1="Muito prazer, sou"
            highlightName="Marcos DeLacumbre"
            bio={bio}
            primaryHref="https://instagram.com/delacumbre"
            secondaryLabel="Ver expedições"
            secondaryHref="#destinos"
            size="sm"
          />
        </div>
        <div className={`${styles.slot} ${styles.slotMd}`}>
          <PresentationCard
            image="/travel-guide/Marcos-Delacumbre.png"
            imageAlt="Marcos DeLacumbre segurando réplicas de armas em um campo"
            titleLine1="Muito prazer, sou"
            highlightName="Marcos DeLacumbre"
            bio={bio}
            primaryHref="https://instagram.com/delacumbre"
            secondaryLabel="Ver expedições"
            secondaryHref="#destinos"
            size="md"
          />
        </div>
        <div className={`${styles.slot} ${styles.slotLg}`}>
          <PresentationCard
            image="/travel-guide/Marcos-Delacumbre.png"
            imageAlt="Marcos DeLacumbre segurando réplicas de armas em um campo"
            titleLine1="Muito prazer, sou"
            highlightName="Marcos DeLacumbre"
            bio={bio}
            primaryHref="https://instagram.com/delacumbre"
            secondaryLabel="Ver expedições"
            secondaryHref="#destinos"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}
