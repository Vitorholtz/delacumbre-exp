import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "lg" | "md";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type ButtonAsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const sizeTextClass: Record<ButtonSize, string> = {
  lg: "text-heading-md",
  md: "text-heading-sm",
};

function ButtonLabel({ children }: { children: ReactNode }) {
  return (
    <span className={styles.textWrap}>
      <span className={styles.textDefault}>{children}</span>
      <span className={styles.textHover} aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

export default function Button({
  variant = "primary",
  size = "lg",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    sizeTextClass[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <ButtonLabel>{children}</ButtonLabel>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <ButtonLabel>{children}</ButtonLabel>
    </button>
  );
}
