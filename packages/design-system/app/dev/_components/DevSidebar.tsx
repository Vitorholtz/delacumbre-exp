"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DevSidebar.module.css";

type NavItem = {
  label: string;
  href: string;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

// Cada componente novo ganha uma entrada aqui, na categoria mais próxima do seu uso.
const navSections: NavSection[] = [
  {
    title: "Fundação",
    items: [
      { label: "Tokens", href: "/dev/tokens" },
      { label: "Ícones", href: "/dev/icones" },
    ],
  },
  {
    title: "Controles & formulários",
    items: [
      { label: "Botões", href: "/dev/componentes/botoes" },
      { label: "Botão flutuante", href: "/dev/componentes/botao-flutuante" },
      { label: "Botão de menu", href: "/dev/componentes/botao-menu" },
      { label: "Chip", href: "/dev/componentes/chip" },
      { label: "Check box", href: "/dev/componentes/checkbox" },
      { label: "Radio button", href: "/dev/componentes/radio-button" },
      { label: "Pill", href: "/dev/componentes/pill" },
      { label: "Text field", href: "/dev/componentes/text-field" },
      { label: "Text area", href: "/dev/componentes/text-area" },
    ],
  },
  {
    title: "Navegação & listas",
    items: [
      { label: "Hyperlink", href: "/dev/componentes/hyperlink" },
      { label: "Item de lista", href: "/dev/componentes/item-de-lista" },
      { label: "Accordion", href: "/dev/componentes/accordion" },
    ],
  },
  {
    title: "Cards & mídia",
    items: [
      { label: "Localização", href: "/dev/componentes/localizacao" },
      { label: "Things to do", href: "/dev/componentes/things-to-do" },
      { label: "How to", href: "/dev/componentes/how-to" },
      { label: "Checkout", href: "/dev/componentes/checkout" },
      { label: "Pricing", href: "/dev/componentes/pricing" },
      {
        label: "Apresentação do guia",
        href: "/dev/componentes/apresentacao-guia",
      },
      { label: "Display de produto", href: "/dev/componentes/produto" },
      {
        label: "Imagens de expedição",
        href: "/dev/componentes/imagens-expedicao",
      },
      { label: "Galeria", href: "/dev/componentes/galeria" },
    ],
  },
  {
    title: "Estrutura de página",
    items: [
      { label: "Header", href: "/dev/componentes/header" },
      { label: "Menu", href: "/dev/componentes/menu" },
      { label: "Footer", href: "/dev/componentes/footer" },
    ],
  },
];

export default function DevSidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.sidebar} aria-label="Navegação de desenvolvimento">
      <Link href="/dev" className={styles.brand}>
        <span className="text-heading-sm">Delacumbre EXP</span>
        <span className={`${styles.brandSubtitle} text-caption`}>
          Design System
        </span>
      </Link>

      {navSections.map((section) => (
        <div key={section.title} className={styles.section}>
          <span className={`${styles.sectionTitle} text-caption`}>
            {section.title}
          </span>
          {section.items.length > 0 ? (
            <ul className={styles.list}>
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <span className={`${styles.empty} text-caption-xs`}>Em breve</span>
          )}
        </div>
      ))}
    </nav>
  );
}
