"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FloatingButton from "../primitives/FloatingButton";
import MenuButton from "../primitives/MenuButton";
import styles from "./Header.module.css";

type HeaderBackButton = {
  icon?: string;
  label: string;
  href?: string;
  onClick?: () => void;
};

type HeaderLogo = {
  src: string;
  alt: string;
  href?: string;
};

type HeaderProps = {
  /** Ausente em interfaces sem navegação de retorno (ex: home). */
  backButton?: HeaderBackButton;
  /** Ausente em interfaces onde a logo não faz sentido (ex: dentro de um flow). */
  logo?: HeaderLogo;
  onMenuClick?: () => void;
  menuLabel?: string;
  /**
   * "always" mostra a logo o tempo todo (padrão); "onScroll" só a revela
   * junto com o fundo, quando o header está no estado "scrolled" — usado em
   * interfaces onde a logo aparece depois de um trecho da página (ex: hero).
   */
  logoVisibility?: "always" | "onScroll";
  /**
   * Controla o estado "scrolled" de fora (ex: um IntersectionObserver
   * ligado a uma seção específica da página, como o fim do hero). Quando
   * omitido, o header decide sozinho a partir do scroll da janela.
   */
  scrolled?: boolean;
  /** Distância rolada, em px, a partir da qual o header recebe fundo + blur — ignorado quando `scrolled` é controlado de fora. */
  scrollThreshold?: number;
  className?: string;
};

export default function Header({
  backButton,
  logo,
  onMenuClick,
  menuLabel = "Menu",
  logoVisibility = "always",
  scrolled: scrolledProp,
  scrollThreshold = 24,
  className,
}: HeaderProps) {
  const isControlled = scrolledProp !== undefined;
  const [internalScrolled, setInternalScrolled] = useState(false);

  useEffect(() => {
    if (isControlled) return;
    const handleScroll = () => {
      setInternalScrolled(window.scrollY > scrollThreshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isControlled, scrollThreshold]);

  const scrolled = isControlled ? scrolledProp : internalScrolled;
  // Fica escondida (mas montada — pra transição de fade/blur rolar) até
  // o scroll cruzar o limite, quando logoVisibility é "onScroll".
  const logoHidden = Boolean(logo) && logoVisibility === "onScroll" && !scrolled;

  const classes = [styles.header, scrolled ? styles.scrolled : "", className]
    .filter(Boolean)
    .join(" ");

  const logoImage = logo && (
    <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
  );

  return (
    <header className={classes}>
      <div className={styles.start}>
        {backButton &&
          (backButton.href ? (
            <>
              <FloatingButton
                icon={backButton.icon ?? "arrow_back"}
                label={backButton.label}
                href={backButton.href}
                size="sm"
                className={styles.sizeSm}
              />
              <FloatingButton
                icon={backButton.icon ?? "arrow_back"}
                label={backButton.label}
                href={backButton.href}
                size="md"
                className={styles.sizeMd}
              />
            </>
          ) : (
            <>
              <FloatingButton
                icon={backButton.icon ?? "arrow_back"}
                label={backButton.label}
                onClick={backButton.onClick}
                size="sm"
                className={styles.sizeSm}
              />
              <FloatingButton
                icon={backButton.icon ?? "arrow_back"}
                label={backButton.label}
                onClick={backButton.onClick}
                size="md"
                className={styles.sizeMd}
              />
            </>
          ))}
      </div>

      <div
        className={[styles.logo, logoHidden ? styles.logoHidden : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {logo &&
          (logo.href ? (
            <Link
              href={logo.href}
              aria-label={logo.alt}
              className={styles.logoLink}
            >
              {logoImage}
            </Link>
          ) : (
            logoImage
          ))}
      </div>

      <div className={styles.end}>
        <MenuButton
          label={menuLabel}
          onClick={onMenuClick}
          size="sm"
          className={styles.sizeSm}
        />
        <MenuButton
          label={menuLabel}
          onClick={onMenuClick}
          size="md"
          className={styles.sizeMd}
        />
      </div>
    </header>
  );
}
