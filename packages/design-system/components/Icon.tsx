import type { CSSProperties } from "react";

type IconSize = 16 | 20 | 24 | 28 | 40 | 64;

type IconProps = {
  /** Nome do ícone no Material Symbols Sharp (ex: "hiking", "check"). */
  name: string;
  size?: IconSize;
  className?: string;
  /** Quando o ícone carrega significado próprio (não decorativo). */
  label?: string;
};

export default function Icon({ name, size = 24, className, label }: IconProps) {
  const style = {
    fontSize: `${size / 16}rem`,
    "--icon-optical-size": size,
  } as CSSProperties;

  return (
    <span
      className={["icon", className].filter(Boolean).join(" ")}
      style={style}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {name}
    </span>
  );
}
