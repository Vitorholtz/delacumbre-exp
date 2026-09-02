import QuoteIcon from "./QuoteIcon";
import styles from "./SocialProof.module.css";

type SocialProofAuthor = {
  name: string;
  context: string;
};

type SocialProofProps = {
  quote: string;
  /** Ausente quando a citação não tem autoria atrelada (ex: legenda de foto). */
  author?: SocialProofAuthor;
  className?: string;
};

export default function SocialProof({
  quote,
  author,
  className,
}: SocialProofProps) {
  const classes = [styles.socialProof, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <QuoteIcon className={styles.icon} />
      <div className={styles.content}>
        <p className={styles.quote}>{quote}</p>
        {author && (
          <p className={styles.attribution}>
            {author.name} | {author.context}
          </p>
        )}
      </div>
    </div>
  );
}
