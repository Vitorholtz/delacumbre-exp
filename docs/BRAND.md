# Identidade da marca — Delacumbre EXP

Este documento existe para orientar decisões de copy, UX e tom de voz na
página e nas interfaces da Delacumbre EXP. Foi construído a partir do
material real de venda de uma expedição (Camboja & Bangkok, 2026) — não é
teoria de marca inventada, é a linguagem que a marca já usa na prática.

## O que é a Delacumbre EXP

Expedições guiadas por Marcos DeLacumbre — escritor e documentarista — para
**destinos contraturísticos**: lugares e experiências que o turismo
convencional evita ou suaviza. A marca não vende "viagens", vende
**expedições**: a palavra é escolhida a dedo e usada de forma consistente no
material (nunca "pacote turístico", nunca "excursão").

O guia não é um narrador neutro. Ele é personagem central do produto — sua
biografia, seus livros ("Um drink numa bota suja de lama", "Distopia
verídica"), sua atuação prévia na África (Egito, Marrocos, Saara Ocidental,
Mauritânia) e sua relação pessoal com cada destino são parte do que está
sendo vendido. Comprar uma expedição Delacumbre é, em parte, comprar acesso a
essa figura e sua forma de ver o mundo.

## Voz e tom

- **Primeira pessoa, literária, confessional.** O texto de venda é narrado
  pelo próprio Marcos, como um capítulo de livro, não como copy de agência.
  Frases longas, imagéticas, com metáforas recorrentes ("soltar o leão",
  "camada de couro mais paquidérmica").
- **Irreverente e transgressivo, mas nunca gratuito.** Palavrão e gíria
  pesada aparecem, mas pontuais — como tempero de uma frase de efeito ("isso
  tá bom pra caralho"), não como recheio constante. O tom brinca com o
  perigo ("uma vez que você se envenena em Bangkok, a ameaça é você") sem
  nunca soar descuidado com segurança real.
- **Contraste deliberado entre extremos.** Beleza e violência, luxo e
  sujeira, sagrado e profano andam juntos na mesma frase ("Deus e Diabo;
  devotos e hereges convivem em trégua"). Esse contraste é o motor central
  do texto, não um acidente de estilo.
- **Peso histórico tratado com seriedade real.** Quando o texto entra em
  Khmer Rouge, S-21, campos de extermínio, o tom muda — sem ironia, sem
  gracinha. A marca sabe distinguir "aventura provocadora" de "sofrimento
  histórico alheio" e não mistura os dois registros.
- **Cúmplice, não vendedor.** Fecha com convite direto e informal ("Bora?"),
  nunca com um CTA genérico de e-commerce. Dúvidas se resolvem "no direct do
  Instagram", não em um formulário corporativo.

## Valores que aparecem no texto

- **Imersão real acima de conforto.** O roteiro é desenhado para produzir
  experiências fortes (campo de tiro, prisão histórica, vila flutuante,
  caverna de morcegos), não pontos turísticos de cartão-postal.
- **Referência literária/intelectual por trás do aventureiro.** Cita Jon
  Krakauer e "Into the Wild" com naturalidade — a marca pressupõe um público
  que lê, não só que posta.
- **Transformação pessoal como promessa central.** O texto trata a viagem
  como rito de passagem ("a forja de um personagem"), não como lazer.
- **Transparência sobre o que está incluso.** Listas explícitas de
  incluso/não incluso, política de cancelamento e forma de pagamento sem
  meias palavras — o tom é solto, mas a informação comercial é direta.

## O que a marca NÃO é

- Não é turismo de luxo tradicional, nem greenwashing de "turismo
  sustentável" institucional.
- Não é copy motivacional genérica de "descubra o mundo" — evita clichê de
  agência de viagem.
- Não é irreverente por irreverência: o palavrão e a provocação servem a
  frase, não substituem ela.
- Não trata história/tragédia real como pano de fundo estético descartável.

## Público-alvo (inferido do texto e do preço)

Adultos com poder aquisitivo médio-alto (expedição na faixa de R$7.000–7.400
+ US$700), interessados em experiências fora do roteiro turístico padrão,
com tolerância (ou apetite) por desconforto físico e temas pesados, afinidade
com literatura de viagem/aventura, e disposição para uma jornada guiada por
uma figura pessoal forte, não por uma operadora anônima.

## Vocabulário recorrente

- **"Expedição"** — nunca "viagem", "pacote" ou "excursão".
- **"Contraturístico"** — já usado como tagline oficial (`app/layout.tsx`).
- Nome de destino + ano no formato do material: *"Holiday in Cambodia (&
  Bangkok)"*, *"Ásia | Abril | 2026"*.
- Blocos de "Foto e frase estilo citação" aparecem repetidamente como recurso
  de ritmo no material de venda — ver seção seguinte.

## Estrutura de conteúdo padrão (repete entre expedições)

O material de venda de cada expedição segue sempre a mesma sequência, o que
é diretamente relevante para a construção da página — vários blocos já têm
componente correspondente no design system:

1. Capa com foto de impacto + nome da expedição + região/mês/ano.
2. Mapa da rota.
3. Foto + frase estilo citação (recurso usado várias vezes ao longo do
   texto para dar respiro/ritmo — **candidato a um componente de citação/quote
   no DS, que hoje não existe**).
4. Texto imersivo de venda, em primeira pessoa, com fotos reais da expedição
   intercaladas.
5. Bloco pessoal do guia — história de como ele chegou àquele destino
   (`PresentationCard` já cobre isso).
6. Bloco de datas/vagas/ícones de destaque (`Pill`/`Chip` com ícones já
   cobrem os ícones; falta um componente de "vagas/datas").
7. Roteiro dia a dia (`ListItem`/`AccordionItem` já servem para isso).
8. O que está incluso / não incluso (duas listas — `ListItem` cobre).
9. Preço: à vista, parcelado, forma de parcelamento, condições de
   cancelamento em letra miúda (`PricingCard` já cobre a maior parte disso).
10. Contato direto (Instagram/e-mail) — não formulário.

## Nota sobre o fix do `PresentationCard`

O default `secondaryLabel = "Foda-se"` removido durante a revisão técnica
não estava errado por ser "pesado demais" para a marca — o texto real mostra
que a marca usa linguagem tão ou mais pesada quando faz sentido. O problema
era outro: era um **default silencioso** de um componente reutilizável, não
copy real escrita para um contexto — um botão de CTA não pode ter como
fallback uma palavra que não é, de fato, uma chamada para ação. A regra
correta não é "suavizar o tom", é "todo texto que vai pro ar precisa ser
escrito de propósito, nunca herdado de um valor padrão".
