import { Fragment } from "react";
import Button from "./Button";
import ListItem from "./ListItem";
import styles from "./PricingCard.module.css";

type PricingCardSize = "sm" | "md" | "lg";

type PriceAmount = {
  prefix: string;
  value: string;
};

type PricingCardProps = {
  title: string;
  installmentLabel?: string;
  pricePrefix: string;
  priceValue: string;
  priceSuffix?: string;
  totalLabel?: string;
  totalAmounts?: PriceAmount[];
  totalCaption?: string;
  secondaryAmount?: PriceAmount;
  secondaryCaption?: string;
  howToTitle?: string;
  howToItems?: string[];
  includedItems: string[];
  buttonLabel?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  size?: PricingCardSize;
  className?: string;
};

const headingClassBySize: Record<PricingCardSize, string> = {
  sm: "text-heading-sm",
  md: "text-heading-sm",
  lg: "text-heading-md",
};

const amountPrefixClassBySize: Record<PricingCardSize, string> = {
  sm: "text-heading-md",
  md: "text-heading-md",
  lg: "text-heading-lg",
};

const amountValueClassBySize: Record<PricingCardSize, string> = {
  sm: "text-heading-xl",
  md: "text-heading-xl",
  lg: "text-display-lg",
};

const amountCaptionClassBySize: Record<PricingCardSize, string> = {
  sm: "text-caption",
  md: "text-caption",
  lg: "text-body-sm",
};

const buttonSizeBySize: Record<PricingCardSize, "lg" | "md"> = {
  sm: "md",
  md: "lg",
  lg: "lg",
};

function Amount({
  amount,
  size,
}: {
  amount: PriceAmount;
  size: PricingCardSize;
}) {
  return (
    <p className={styles.amount}>
      <span className={amountPrefixClassBySize[size]}>{amount.prefix}</span>
      <span className={amountValueClassBySize[size]}>{amount.value}</span>
    </p>
  );
}

export default function PricingCard({
  title,
  installmentLabel,
  pricePrefix,
  priceValue,
  priceSuffix,
  totalLabel = "Total:",
  totalAmounts,
  totalCaption,
  secondaryAmount,
  secondaryCaption,
  howToTitle = "Como Funciona?",
  howToItems,
  includedItems,
  buttonLabel = "Reservar",
  buttonHref,
  onButtonClick,
  size = "lg",
  className,
}: PricingCardProps) {
  const classes = [styles.card, styles[size], className]
    .filter(Boolean)
    .join(" ");
  const headingClass = headingClassBySize[size];
  const amountCaptionClass = amountCaptionClassBySize[size];

  return (
    <div className={classes}>
      <div className={styles.content}>
        <p className={`${styles.title} ${headingClass}`}>{title}</p>

        <div className={styles.priceBox}>
          {installmentLabel && (
            <p className={`${styles.priceLine} text-body-lg`}>
              {installmentLabel}
            </p>
          )}
          <p className={styles.price}>
            <span className="text-heading-xl">{pricePrefix}</span>
            <span className="text-display-xl">{priceValue}</span>
          </p>
          {priceSuffix && (
            <p className={`${styles.priceLine} text-body-md`}>
              {priceSuffix}
            </p>
          )}
        </div>

        {totalAmounts && totalAmounts.length > 0 && (
          <div className={styles.totalBlock}>
            <p className={`${styles.blockTitle} ${headingClass}`}>
              {totalLabel}
            </p>
            <div className={styles.totalContainer}>
              <div className={styles.amountRow}>
                {totalAmounts.map((amount, index) => (
                  <Fragment key={`${amount.prefix}-${amount.value}`}>
                    {index > 0 && (
                      <span className={`${styles.plus} text-heading-lg`}>
                        +
                      </span>
                    )}
                    <Amount amount={amount} size={size} />
                  </Fragment>
                ))}
              </div>
              {totalCaption && (
                <p
                  className={`${styles.captionRight} ${amountCaptionClass}`}
                >
                  {totalCaption}
                </p>
              )}
            </div>
          </div>
        )}

        {secondaryAmount && (
          <div className={styles.secondaryBlock}>
            <p className={`${styles.plus} text-heading-lg`}>+</p>
            <div className={styles.totalContainer}>
              <Amount amount={secondaryAmount} size={size} />
              {secondaryCaption && (
                <p className={`${styles.priceLine} ${amountCaptionClass}`}>
                  {secondaryCaption}
                </p>
              )}
            </div>
          </div>
        )}

        <div className={styles.divider} />

        {howToItems && howToItems.length > 0 && (
          <div className={styles.itemsBlock}>
            <p className={`${styles.blockTitle} ${headingClass}`}>
              {howToTitle}
            </p>
            <div className={styles.itemsList}>
              {howToItems.map((item) => (
                <ListItem key={item} icon="arrow_right" label={item} size="sm" />
              ))}
            </div>
          </div>
        )}

        <div className={styles.itemsList}>
          {includedItems.map((item) => (
            <ListItem key={item} icon="check" label={item} size="sm" />
          ))}
        </div>
      </div>

      <div className={styles.buttonRow}>
        {buttonHref ? (
          <Button
            variant="primary"
            size={buttonSizeBySize[size]}
            className={styles.button}
            href={buttonHref}
          >
            {buttonLabel}
          </Button>
        ) : (
          <Button
            variant="primary"
            size={buttonSizeBySize[size]}
            className={styles.button}
            onClick={onButtonClick}
          >
            {buttonLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
