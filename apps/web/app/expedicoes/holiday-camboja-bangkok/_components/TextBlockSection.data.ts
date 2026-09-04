import type { HeadingContent, ImageWithLocationContent } from "./sectionContent";

export const textBlockSectionContent = {
  heading: {
    prefix: "A noite não",
    highlight: "pede desculpas",
    breakBeforeHighlight: true,
  } satisfies HeadingContent,
  paragraph:
    "Tem gente que volta de expedição com foto de templo. Você vai " +
    "voltar com uma história que jura nunca contar pra família e um " +
    "bar, em algum beco de Bangkok, onde ninguém lembra seu nome — " +
    "mas todo mundo lembra o que você fez em cima da mesa. As provas " +
    "estão logo aí embaixo. A culpa é sua por ter vindo.",
  image: {
    src: "/expedicoes/holiday-camboja-bangkok/text-block/khao-san-bar.jpg",
    alt: "Grupo animado servindo drinks num bar iluminado de neon em Khao San Road",
    name: "Khao San Road",
    country: "Bangkok • Tailândia",
  } satisfies ImageWithLocationContent,
};
