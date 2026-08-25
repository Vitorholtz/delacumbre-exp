import ListItem from "../navigation/ListItem";
import Hyperlink from "../primitives/Hyperlink";
import styles from "./CheckoutCard.module.css";

type CheckoutCardSize = "lg" | "md" | "sm";

type CheckoutCardProps = {
  image: string;
  imageAlt: string;
  expeditionName: string;
  dateRange: string;
  destination: string;
  paymentMethod: string;
  changeHref?: string;
  installmentText: string;
  installmentHighlight: string;
  totalText: string;
  size?: CheckoutCardSize;
  className?: string;
};

const valueTextClassBySize: Record<CheckoutCardSize, string> = {
  lg: "text-body-lg",
  md: "text-body-md",
  sm: "text-body-sm",
};

const hyperlinkSizeBySize: Record<CheckoutCardSize, "md" | "sm"> = {
  lg: "md",
  md: "sm",
  sm: "sm",
};

export default function CheckoutCard({
  image,
  imageAlt,
  expeditionName,
  dateRange,
  destination,
  paymentMethod,
  changeHref = "#",
  installmentText,
  installmentHighlight,
  totalText,
  size = "lg",
  className,
}: CheckoutCardProps) {
  const classes = [styles.card, styles[size], className]
    .filter(Boolean)
    .join(" ");
  const valueTextClass = valueTextClassBySize[size];

  return (
    <div className={classes}>
      <div className={styles.hero}>
        <img src={image} alt={imageAlt} className={styles.heroImage} />
        <div className={styles.heroVignette} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className={styles.table}>
          <div className={styles.row}>
            <span className={styles.label}>
              <ListItem icon="hiking" label="Expedição" size={size} />
            </span>
            <p className={`${styles.value} ${valueTextClass}`}>
              {expeditionName}
            </p>
          </div>
          <div className="divider-dashed" />

          <div className={styles.row}>
            <span className={styles.label}>
              <ListItem icon="calendar_today" label="Data" size={size} />
            </span>
            <p className={`${styles.value} ${valueTextClass}`}>{dateRange}</p>
          </div>
          <div className="divider-dashed" />

          <div className={styles.row}>
            <span className={styles.label}>
              <ListItem icon="location_on" label="Destino" size={size} />
            </span>
            <p className={`${styles.value} ${valueTextClass}`}>
              {destination}
            </p>
          </div>
          <div className="divider-dashed" />

          <div className={styles.row}>
            <span className={styles.label}>
              <ListItem icon="attach_money" label="Pagamento" size={size} />
            </span>
            <div className={styles.paymentValue}>
              <p className={`${styles.value} ${valueTextClass}`}>
                {paymentMethod}
              </p>
              <Hyperlink
                href={changeHref}
                icon="swap_horiz"
                size={hyperlinkSizeBySize[size]}
              >
                Alterar
              </Hyperlink>
            </div>
          </div>
        </div>

        <div className={styles.pricingBox}>
          <p className={`${styles.pricingLine} ${valueTextClass}`}>
            {installmentText}
            <span className={styles.highlight}>{installmentHighlight}</span>
          </p>
          <p className={`${styles.pricingLine} ${valueTextClass}`}>
            {totalText}
          </p>
        </div>
      </div>
    </div>
  );
}
