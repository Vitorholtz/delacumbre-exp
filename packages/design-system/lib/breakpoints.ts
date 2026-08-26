// Resoluções de referência (Figma) — ver docs/BREAKPOINTS.md
export const referenceWidths = {
  smMobile: 390,
  smTablet: 768,
  md: 1440,
  lg: 1920,
} as const;

// Breakpoints técnicos — min-width reais usados em @media no código
export const breakpoints = {
  smToMd: 810,
  mdToLg: 1536,
} as const;
