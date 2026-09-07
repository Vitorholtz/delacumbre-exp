"use client";

import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export default function FixedPortal({ children }: { children: ReactNode }) {
  // #fixed-layer já existe no HTML vindo do servidor (ver layout.tsx), então
  // já está disponível no primeiro render do cliente — sem precisar de um
  // efeito só pra buscá-lo depois do mount.
  const [container] = useState<HTMLElement | null>(() =>
    typeof document === "undefined"
      ? null
      : document.getElementById("fixed-layer"),
  );

  if (!container) return null;
  return createPortal(children, container);
}
