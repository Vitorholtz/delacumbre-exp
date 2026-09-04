import type { HeadingContent, ImageWithLocationContent } from "./sectionContent";

export const lightContentSectionContent = {
  intro: {
    heading: {
      prefix: "A capital do caos,",
      highlight: "paraíso da transgressão",
      breakBeforeHighlight: true,
    } satisfies HeadingContent,
    paragraph:
      "Se você nunca soltou o seu leão, ou acha que já, espere até pisar no " +
      "Sudeste Asiático. É automático, quer ver? Welcome to Bangkok! Mal " +
      "desceu do avião e você já está suado, escutando a saudação nos " +
      "autofalantes do Aeroporto de Suvarnabhumi, na capital do caos " +
      "Oriental, no paraíso da transgressão (e juro que não há duplo " +
      "sentido aqui); embarcando num táxi suspeito pra me encontrar na " +
      "lendária Khao San Road – o caldeirão pulsante da metrópole, onde " +
      "Deus e Diabo; devotos e hereges convivem em trégua (ou não), 24 " +
      "horas por dia, sete dias na semana.",
    image: {
      src: "/expedicoes/holiday-camboja-bangkok/light-content/choeung-ek.jpg",
      alt: "Marcos observando as caveiras expostas no memorial de Choeung Ek",
      name: "Choeung Ek",
      country: "Phnom Penh • Camboja",
    } satisfies ImageWithLocationContent,
  },
  shootingRange: {
    src: "/expedicoes/holiday-camboja-bangkok/light-content/shooting-range.jpg",
    alt: "Fumaça de disparo de fuzil num campo de tiro cercado de mata, no Camboja",
    name: "Shooting range",
    country: "Phnom Penh • Camboja",
  } satisfies ImageWithLocationContent,
  fromGunToStone: {
    heading: {
      prefix: "Do estampido do cano",
      highlight: "ao silêncio milenar de pedra",
    } satisfies HeadingContent,
    paragraph:
      "O estrondo do AK-47 ainda ecoa no peito quando a poeira vermelha da " +
      "clareira dá lugar às árvores da estrada pra Siem Reap. Não existe " +
      "transição suave entre atirar de verdade numa tarde em Phnom Penh e " +
      "pedalar entre portões esculpidos há quase mil anos — e não devia " +
      "existir. Aqui você troca de personagem sem pedir licença: de " +
      "atirador a peregrino, a poucas horas de estrada, carregando a mesma " +
      "versão sua nas duas cenas.",
  },
  angkorThom: {
    src: "/expedicoes/holiday-camboja-bangkok/light-content/angkor-thom-gate.jpg",
    alt: "Grupo pedalando em direção ao portão esculpido de Angkor Thom, no Camboja",
    name: "Angkor Thom",
    country: "Siem Reap • Camboja",
  } satisfies ImageWithLocationContent,
  closing: {
    heading: {
      prefix: "Isso aqui não é",
      highlight: "turismo, é rito de passagem",
    } satisfies HeadingContent,
    paragraph:
      "Treze dias não vão te bronzear, vão te lascar — e é exatamente isso " +
      "que você veio buscar. Quando voltar, ninguém vai perguntar se foi " +
      "uma boa viagem; vão perguntar o que aconteceu com você lá dentro. " +
      "Bora?",
    primaryCtaLabel: "Reservar",
    primaryCtaHref: "#reservar",
    secondaryCtaLabel: "Saber mais",
    secondaryCtaHref: "#sobre",
  },
};
