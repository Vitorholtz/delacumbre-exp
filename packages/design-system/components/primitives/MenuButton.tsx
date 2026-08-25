import type { ButtonHTMLAttributes } from "react";
import styles from "./MenuButton.module.css";

type MenuButtonSize = "md" | "sm";

type MenuButtonProps = {
  size?: MenuButtonSize;
  /** Nome acessível — o botão só tem ícone, sem texto visível. */
  label?: string;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function MenuButton({
  size = "md",
  label = "Menu",
  className,
  ...rest
}: MenuButtonProps) {
  const classes = [styles.button, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} aria-label={label} {...rest}>
      <span className={styles.bars} aria-hidden="true">
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={`${styles.bar} ${styles.barShort}`} />
      </span>
    </button>
  );
}
