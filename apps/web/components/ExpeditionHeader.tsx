"use client";

import { useEffect, useState } from "react";
import Header from "@delacumbre/design-system/components/layout/Header";
import Menu from "@delacumbre/design-system/components/layout/Menu";

const navLinks = [
  { label: "Destinos", href: "/#destinos" },
  { label: "Sobre nós", href: "/#sobre-nos" },
  { label: "FAQ", href: "/#perguntas-frequentes" },
  { label: "Contato", href: "/#contato" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/delacumbre" },
  // TODO: sem links reais ainda — trocar quando existirem.
  { label: "Whatsapp", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "E-mail", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function ExpeditionHeader() {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header
        backButton={{ label: "Voltar", href: "/" }}
        scrolled={pastHero}
        logo={{ src: "/hero/delacumbre-logo.svg", alt: "Delacumbre EXP" }}
        menuLabel="Menu"
        onMenuClick={() => setMenuOpen(true)}
      />
      {menuOpen && (
        <Menu
          onClose={() => setMenuOpen(false)}
          links={navLinks}
          languages={[
            { label: "Português (BR)", selected: true },
            // Site é mono-idioma por enquanto — desabilitados até termos
            // a versão multilíngue.
            { label: "English", disabled: true },
            { label: "Español", disabled: true },
          ]}
          socialLinks={socialLinks}
          logo={{ src: "/hero/delacumbre-logo.svg", alt: "Delacumbre EXP" }}
        />
      )}
    </>
  );
}
