import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import Icon from "./Icon";
import styles from "./Hyperlink.module.css";

type HyperlinkSize = "lg" | "md" | "sm" | "xsm";

type HyperlinkProps = {
  href: string;
  children: ReactNode;
  icon?: string;
  showIcon?: boolean;
  /** "hover" revela o sublinhado só no hover (padrão); "always" mantém sempre visível. */
  underline?: "hover" | "always";
  size?: HyperlinkSize;
  className?: string;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children"
>;

const textClassBySize: Record<HyperlinkSize, string> = {
  lg: "text-body-lg",
  md: "text-body-md",
  sm: "text-body-sm",
  xsm: "text-caption",
};

const iconSizeBySize: Record<HyperlinkSize, 16 | 20 | 24> = {
  lg: 24,
  md: 20,
  sm: 20,
  xsm: 16,
};

export default function Hyperlink({
  href,
  children,
  icon = "open_in_new",
  showIcon = true,
  underline = "hover",
  size = "lg",
  className,
  ...rest
}: HyperlinkProps) {
  const classes = [
    styles.link,
    styles[size],
    textClassBySize[size],
    underline === "always" ? styles.underlineAlways : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {showIcon && (
        <span className={styles.iconWrap}>
          <Icon name={icon} size={iconSizeBySize[size]} />
        </span>
      )}
    </>
  );

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {content}
    </a>
  );
}
