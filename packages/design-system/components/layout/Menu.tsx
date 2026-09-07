"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import FloatingButton from "../primitives/FloatingButton";
import Chip from "../controls/Chip";
import Hyperlink from "../primitives/Hyperlink";
import styles from "./Menu.module.css";

type MenuNavLink = {
  label: string;
  href: string;
};

type MenuLanguageOption = {
  label: string;
  selected?: boolean;
  /** Idioma ainda não disponível (site é mono-idioma por enquanto). */
  disabled?: boolean;
  onClick?: () => void;
};

type MenuSocialLink = {
  label: string;
  href: string;
};

type MenuLogo = {
  src: string;
  alt: string;
};

type MenuProps = {
  onClose: () => void;
  /** Rótulo decorativo no canto superior esquerdo (padrão "Menu"). */
  label?: string;
  closeLabel?: string;
  links: MenuNavLink[];
  languages?: MenuLanguageOption[];
  socialLinks: MenuSocialLink[];
  logo: MenuLogo;
  className?: string;
};

const CLOSE_DURATION_MS = 500;

/* Mesma técnica de troca de texto do Button (ver Button.module.css) — cada
   item vem duplicado, o texto de cima some pra cima e a cópia de baixo
   entra no lugar dele. */
function NavLinkLabel({ children }: { children: ReactNode }) {
  return (
    <span className={styles.textWrap}>
      <span className={styles.textDefault}>{children}</span>
      <span className={styles.textHover} aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

export default function Menu({
  onClose,
  label = "Menu",
  closeLabel = "Fechar menu",
  links,
  languages,
  socialLinks,
  logo,
  className,
}: MenuProps) {
  // Duas refs porque o botão de fechar é renderizado duas vezes (uma por
  // breakpoint — ver .sizeSm/.sizeMd); só a instância visível aceita foco,
  // a outra (display: none) ignora o .focus() silenciosamente.
  const closeButtonSmRef = useRef<HTMLButtonElement>(null);
  const closeButtonMdRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const closingRef = useRef(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setVisible(false);
    closeTimeoutRef.current = setTimeout(onClose, CLOSE_DURATION_MS);
  };

  useEffect(() => {
    closeButtonSmRef.current?.focus();
    closeButtonMdRef.current?.focus();
    const raf = requestAnimationFrame(() => setVisible(true));

    return () => {
      cancelAnimationFrame(raf);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = [styles.menu, visible ? styles.visible : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      // Isenta esta subárvore da interceptação do Lenis (ver
      // SmoothScroll.tsx) — como o menu cobre a tela inteira, isso já
      // basta pra rolagem (wheel/touch) ficar nativa aqui dentro e nunca
      // alcançar o fundo por trás. overscroll-behavior: contain (ver
      // Menu.module.css) cuida do resto: impede que o scroll "vaze" pro
      // fundo quando o menu atinge o limite do seu próprio scroll.
      data-lenis-prevent
    >
      <div className={styles.header}>
        <p className={`${styles.watermark} text-heading-lg`}>{label}</p>
        <FloatingButton
          ref={closeButtonSmRef}
          icon="close"
          label={closeLabel}
          onClick={requestClose}
          size="sm"
          className={styles.sizeSm}
        />
        <FloatingButton
          ref={closeButtonMdRef}
          icon="close"
          label={closeLabel}
          onClick={requestClose}
          size="md"
          className={styles.sizeMd}
        />
      </div>

      <div className={styles.middle}>
        {languages && languages.length > 0 && (
          <div className={styles.languages}>
            {languages.map((lang) => (
              <Chip
                key={lang.label}
                label={lang.label}
                showIcon={false}
                selected={lang.selected}
                disabled={lang.disabled}
                onClick={lang.onClick}
              />
            ))}
          </div>
        )}

        <nav className={styles.nav} aria-label="Navegação principal">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navItem}
              style={{ transitionDelay: `${index * 60}ms` }}
              onClick={requestClose}
            >
              <NavLinkLabel>{`/${link.label}`}</NavLinkLabel>
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.footer}>
        <nav className={styles.socialLinks} aria-label="Redes sociais">
          {socialLinks.map((social) => (
            <Hyperlink
              key={social.label}
              href={social.href}
              showIcon={false}
              size="md"
              className={styles.socialLink}
            >
              {social.label}
            </Hyperlink>
          ))}
        </nav>
        <img src={logo.src} alt={logo.alt} className={styles.logo} />
      </div>
    </div>
  );
}
