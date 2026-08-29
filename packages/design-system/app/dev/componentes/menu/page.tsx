"use client";

import { useState } from "react";
import Button from "@/components/primitives/Button";
import Menu from "@/components/layout/Menu";
import styles from "./page.module.css";

const links = [
  { label: "Destinos", href: "#" },
  { label: "Sobre nós", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contato", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Whatsapp", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "E-mail", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function MenuPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1 className="text-heading-xl">Menu — Delacumbre EXP</h1>
        <p className="text-body-sm">
          Overlay em tela cheia, acionado pelo botão de menu do Header.
          Fundo licorice a 96% de opacidade com blur; abre com um fade
          suave saindo de um leve desfoque até ficar nítido, e cada item
          de navegação entra com um leve atraso em sequência. Aciona
          fecho com clique no X, tecla Esc, ou ao navegar por um item.
        </p>
      </header>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <h2 className="text-heading-md">Abrir</h2>
        <div className={styles.row}>
          <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
            Abrir menu
          </Button>
        </div>
        <p className={`${styles.hint} text-caption`}>
          Redimensione a janela antes de abrir pra conferir os quatro
          tamanhos do Figma (LG, MD, SM tablet, SM mobile) — o alinhamento
          dos itens e dos chips de idioma muda especificamente entre
          mobile (esquerda) e tablet+ (centro), exceção documentada no
          Menu.module.css.
        </p>
      </section>

      {open && (
        <Menu
          onClose={() => setOpen(false)}
          links={links}
          languages={[
            { label: "Português (BR)", selected: true },
            // Site é mono-idioma por enquanto — desabilitados até termos
            // a versão multilíngue.
            { label: "English", disabled: true },
            { label: "Español", disabled: true },
          ]}
          socialLinks={socialLinks}
          logo={{
            src: "/header/delacumbre-logo.svg",
            alt: "Delacumbre EXP",
          }}
        />
      )}
    </main>
  );
}
