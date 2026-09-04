import ListItem from "@delacumbre/design-system/components/navigation/ListItem";
import styles from "./ChecklistSection.module.css";

type ChecklistTone = "positive" | "negative";

type ChecklistSectionProps = {
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  tone: ChecklistTone;
  columns: [string[], string[]];
};

const ICON_BY_TONE: Record<ChecklistTone, string> = {
  positive: "check",
  negative: "close",
};

function ChecklistColumns({
  columns,
  icon,
  tone,
  size,
  className,
}: {
  columns: [string[], string[]];
  icon: string;
  tone: ChecklistTone;
  size: "sm" | "md" | "lg";
  className: string;
}) {
  return (
    <div className={className}>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className={styles.listContainer}>
          {column.map((label) => (
            <ListItem key={label} icon={icon} label={label} tone={tone} size={size} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ChecklistSection({
  headingPrefix,
  headingHighlight,
  headingSuffix,
  tone,
  columns,
}: ChecklistSectionProps) {
  const icon = ICON_BY_TONE[tone];
  const highlightClass =
    tone === "positive" ? styles.highlightPositive : styles.highlightNegative;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.heading}>
            {headingPrefix}
            <span className={highlightClass}>{headingHighlight}</span>
            {headingSuffix}
          </p>

          <ChecklistColumns
            columns={columns}
            icon={icon}
            tone={tone}
            size="sm"
            className={`${styles.listWrapper} ${styles.listWrapperSm}`}
          />
          <ChecklistColumns
            columns={columns}
            icon={icon}
            tone={tone}
            size="md"
            className={`${styles.listWrapper} ${styles.listWrapperMd}`}
          />
          <ChecklistColumns
            columns={columns}
            icon={icon}
            tone={tone}
            size="lg"
            className={`${styles.listWrapper} ${styles.listWrapperLg}`}
          />
        </div>
      </div>
    </section>
  );
}
