"use client";

import { useEffect, useState } from "react";
import FloatingButton from "@delacumbre/design-system/components/primitives/FloatingButton";
import styles from "./BackToTopButton.module.css";

// Aparece depois de rolar uma viewport inteira (window.innerHeight) — todo
// hero/primeira dobra do site cabe nessa marca, então o botão só surge
// quando já faz sentido "voltar ao topo".
const APPEAR_AFTER_VIEWPORTS = 1;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function BackToTopButton() {
  const [pastThreshold, setPastThreshold] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastThreshold(
        window.scrollY > window.innerHeight * APPEAR_AFTER_VIEWPORTS,
      );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // SiteFooter monta duas <footer> (sm/md, uma só visível por vez via
    // CSS) — observa as duas, o botão some assim que qualquer uma entra
    // em vista, já que ela já tem o próprio botão de voltar ao topo.
    const footers = document.querySelectorAll("footer");
    if (footers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      setNearFooter(entries.some((entry) => entry.isIntersecting));
    });
    footers.forEach((footer) => observer.observe(footer));
    return () => observer.disconnect();
  }, []);

  const visible = pastThreshold && !nearFooter;
  const classes = [styles.wrapper, visible ? styles.visible : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden={!visible}>
      <FloatingButton
        icon="arrow_upward"
        label="Voltar ao topo"
        onClick={scrollToTop}
        size="sm"
        tabIndex={visible ? 0 : -1}
        className={styles.sizeSm}
      />
      <FloatingButton
        icon="arrow_upward"
        label="Voltar ao topo"
        onClick={scrollToTop}
        size="md"
        tabIndex={visible ? 0 : -1}
        className={styles.sizeMd}
      />
    </div>
  );
}
