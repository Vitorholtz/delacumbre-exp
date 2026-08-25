import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, Ref } from "react";
import Link from "next/link";
import Icon from "./Icon";
import styles from "./FloatingButton.module.css";

type FloatingButtonSize = "md" | "sm";

type CommonProps = {
  icon: string;
  /** Nome acessível — o botão só tem ícone, sem texto visível. */
  label: string;
  size?: FloatingButtonSize;
  className?: string;
};

type FloatingButtonAsButtonProps = CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof CommonProps | "aria-label"
  > & {
    href?: undefined;
  };

type FloatingButtonAsLinkProps = CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof CommonProps | "aria-label"
  > & {
    href: string;
  };

type FloatingButtonProps =
  FloatingButtonAsButtonProps | FloatingButtonAsLinkProps;

const iconSizeBySize: Record<FloatingButtonSize, 20 | 24> = {
  md: 24,
  sm: 20,
};

const FloatingButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  FloatingButtonProps
>(function FloatingButton(
  { icon, label, size = "md", className, href, ...rest },
  ref,
) {
  const classes = [styles.button, styles[size], className]
    .filter(Boolean)
    .join(" ");
  const content = <Icon name={icon} size={iconSizeBySize[size]} />;

  if (href) {
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        aria-label={label}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type="button"
      className={classes}
      aria-label={label}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

export default FloatingButton;
