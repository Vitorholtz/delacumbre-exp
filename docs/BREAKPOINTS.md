# Estratégia de breakpoints — Delacumbre EXP

Este documento existe para que qualquer pessoa (ou agente) que precise
tornar um componente responsivo saiba, sem reinventar, quais valores usar
e por quê. É a base técnica global do projeto — mas nunca a referência
final: o protótipo do Figma de cada componente é sempre a fonte da
verdade sobre o comportamento visual específico dele. Este documento só
define o andaime técnico compartilhado por trás disso.

## Resoluções de referência (Figma)

A experiência foi desenhada em 4 resoluções de referência:

| Tier | Resolução | O que representa |
|---|---|---|
| **SM — mobile** | 390 × 844 | Celular |
| **SM — tablet** | 768 × 1024 | Tablet (retrato) |
| **MD** | 1440 × 1024 | Laptop / desktop padrão |
| **LG** | 1920 × 1080 | Desktop grande / monitor |

**SM mobile e SM tablet são a mesma experiência, não duas.** O tablet deve
seguir a mesma estrutura e proporções do mobile — a diferença é só o
layout se adaptar ao espaço disponível (espaçamento, padding, tamanho de
grid), nunca uma bifurcação de lógica visual. Um componente não deve ter
um "modo tablet" e um "modo mobile" tratados como layouts diferentes; deve
ter um modo SM que escala fluidamente entre 390 e 768+.

## Regra geral por tier

- **LG** — componentes e estilos usados em resoluções LG ou maiores.
- **MD** — componentes e estilos usados em resoluções MD, antes de virar LG.
- **SM** — componentes e estilos usados da base até o breakpoint técnico
  SM→MD (cobre mobile e tablet como uma experiência só, ver acima).

Isso é a regra padrão, não uma obrigação rígida: um componente pode
precisar só de MD e SM, ou nenhuma variação — depende do que o protótipo
pedir para aquele componente especificamente.

## Breakpoints técnicos (código)

Os breakpoints técnicos usados em `@media (min-width: ...)` **não são
iguais às resoluções do Figma acima** — têm uma margem de segurança para
que a transição entre layouts aconteça de forma natural, sem espremer um
componente perto do limite:

| Transição | Breakpoint técnico | Por quê |
|---|---|---|
| SM → MD | **810px** | ~5,5% acima da referência tablet (768px). Um tablet real reportando algo perto de 768px (variação de zoom, DPI, orientação) continua recebendo o layout SM em vez de saltar cedo demais para um layout MD pensado para 1440px. |
| MD → LG | **1536px** | ~6,7% acima da referência MD (1440px), pela mesma lógica — protege laptops grandes (MacBook 14"/16": 1512–1728px lógicos) de caírem no layout LG (pensado para monitor de 1920px) antes da hora. Também é o breakpoint `2xl` já consagrado na indústria (Tailwind). |

A lógica da margem é sempre a mesma: **o breakpoint técnico fica um pouco
acima da referência do tier menor**, nunca abaixo da referência do tier
maior. Isso protege quem está perto do limite inferior de não ser jogado
cedo demais para um layout desenhado assumindo mais espaço do que ele tem.

Esses dois números são a fonte da verdade — ver
`packages/design-system/styles/tokens/breakpoints.css` (comentário, já que
custom properties não funcionam em `@media`) e
`packages/design-system/lib/breakpoints.ts` (para uso em JS/TS).

## Tipografia por breakpoint

Texto de leitura (parágrafos/descrição) segue a mesma lógica de tier,
reaproveitando os tokens de tipografia já existentes — não inventar
tamanho novo:

| Tier | Tamanho | Token |
|---|---|---|
| LG | 22px | `--text-body-lg` / `--leading-body-lg` |
| MD | 18px | `--text-body-md` / `--leading-body-md` |
| SM | 16px | `--text-body-sm` / `--leading-body-sm` |

Exemplo real: `apps/web/components/Carousel.module.css`, `.description`.

## Largura máxima de conteúdo por seção

Cada seção do site tem uma largura máxima de conteúdo definida no
protótipo. O padding lateral do protótipo (120px MD / 200px LG) **não é
um valor fixo replicado em CSS** — ele nasce como efeito colateral do
`max-width` + centralização automática nas resoluções de referência (ver
abaixo). O padding fixo que o código de fato aplica é bem menor:

| Tier | Largura máxima do conteúdo | Padding lateral fixo (implementação) |
|---|---|---|
| LG | 1520px | 32px |
| MD | 1200px | 32px |
| SM — tablet | 100% | 48px |
| SM — mobile | 100% | 24px |

Implementação de referência: `.container` + `.container-inner` em
`packages/design-system/styles/utilities.css` — **duas caixas
separadas**, não uma:

```css
.container {
  width: 100%;
  padding-inline: var(--space-6); /* 24px SM mobile / 48px SM tablet / 32px MD e LG */
}

.container-inner {
  width: 100%;
  margin-inline: auto;
}
@media (min-width: 810px) {
  .container-inner { max-width: 1200px; } /* MD */
}
@media (min-width: 1536px) {
  .container-inner { max-width: 1520px; } /* LG */
}
```

Uso: `<div class="container"><div class="container-inner">...</div></div>`
— nos componentes de `apps/web` que não usam essa classe utilitária
diretamente (`GuidePresentation`, `ContactForm`, `Faq`, `HowToBook`), o
mesmo par de caixas é reproduzido como `.wrapper` (padding) envolvendo
`.content` (max-width).

- **Por que duas caixas, e não uma só com `padding-inline` +
  `max-width` juntos.** Foi a primeira tentativa, e ela quebra: como o
  padding fica *dentro* da caixa que o `max-width` limita (box-sizing:
  border-box), a partir do momento em que o `max-width` "pega", o
  padding fixo se soma à margem de centralização — medido na prática,
  isso dava 152px em vez de 120px em 1440px, 232px em vez de 200px em
  1920px, e um salto abrupto (de ~200px para ~40px) bem no breakpoint
  técnico MD→LG (1536px), porque o max-width pula de 1200 para 1520 de
  uma vez. Com duas caixas, o padding da caixa externa é sempre fixo
  (32px) e a centralização da caixa interna cresce por fora dele — os
  dois nunca se somam, então os números batem exatos com o protótipo nas
  resoluções de referência.
- **Por que o padding fixo é 32px, não os 120px/200px do protótipo.**
  120px e 200px só fazem sentido exatos em 1440px e 1920px
  respectivamente — aplicados como piso fixo em toda a faixa de um tier
  (810–1535px para MD, 1536px+ para LG), eles apertam desproporcionalmente
  perto do início de cada tier. 32px é o piso deliberadamente pequeno e
  constante (mesma lógica dos 24px/48px do SM) — o respiro extra até
  120px/200px vem de graça da centralização automática assim que a
  viewport ultrapassa o max-width de cada tier.
- **Abaixo de 810px (SM), `.container` não define `max-width`** — só
  padding (24px mobile / 48px tablet, na própria classe `.container`
  agora, sem precisar de handling separado por componente).
- **Exceção: Hero e Carousel.** Os dois são propositalmente full-bleed
  (vídeo de fundo do Hero; track de cards com peek do Carousel) e não
  seguem esse padrão de max-width. O `.sectionTitle` do Carousel (só o
  título da seção, não o track de cards) é o único lugar que ainda usa a
  solução fluida anterior (`--layout-inset-md`, definida em
  `utilities.css`) — por ser full-bleed, não tem uma caixa de `max-width`
  pra se beneficiar do padrão de duas caixas acima.

## Dois padrões de implementação válidos

O projeto já tem dois jeitos de resolver responsividade, e os dois
continuam válidos — a escolha depende do componente, não é preciso
unificar em um só:

1. **Auto-adaptável via `@media`** — o componente reage ao viewport
   sozinho. Usado em `Hero` e `Carousel` (`apps/web/components/`).
2. **Prop de tamanho explícita** — o componente expõe uma prop
   (`size="md" | "sm"`, por exemplo) e quem consome decide qual usar,
   sem nenhuma media query interna. Usado em `Button`, `TextField`,
   `AccordionItem`, `Footer` (`packages/design-system/components/`).

Os dois devem usar as mesmas referências e breakpoints técnicos acima —
o que muda é só o mecanismo (CSS reagindo ao viewport vs. React escolhendo
a variante).

## Exceções

Um componente pode fugir do breakpoint técnico padrão (810px / 1536px) se
existir uma justificativa visual ou funcional clara para isso — não por
conveniência.

**Sem exceção ativa no momento.** `Hero.module.css` e `Carousel.module.css`
já migraram para os breakpoints técnicos padrão (810px/1536px); o layout
"desktop" de ambos (antes só a partir de 1440px) agora começa em 810px.

Nenhum dos dois teve um protótipo dedicado feito especificamente para a
faixa 810–1439px — a migração reaproveita ali a composição já validada
para o desktop (mesma lógica de "sem protótipo específico, sem variação
nova" usada no restante do projeto), por decisão explícita do time, não
porque um protótipo novo tenha surgido. Um efeito colateral dessa decisão,
sem risco de quebra visual (overflow/corte), só de acabamento nessa faixa
estreita:

- **Hero:** o texto do depoimento usa 14px em SM e 16px a partir de
  810px — MD e LG compartilham o mesmo tamanho (não há uma variação
  própria de LG).

**Carousel — peek dos vizinhos contínuo em qualquer largura.** O slide
desktop tem largura máxima de 996px, mas não mais uma largura fixa: a
largura real é `min(996px, 100% do .track já descontado o padding)`, e o
padding do `.track` (`--carousel-peek`, definido em `.wrapper`) usa
`max(<piso>, calc((100vw - 996px) / 2))`. Sem o piso, essa fórmula calc
sozinha fica negativa abaixo de ~996px de viewport, e o navegador crava o
padding em 0 — escondendo o vizinho por completo (o bug que motivou essa
mudança). A partir de ~1076px (quando o piso de 40px é o vigente — ver
abaixo) a fórmula calc assume sozinha e reproduz, sem descontinuidade, o
mesmo peek já validado nas referências de 1440/1920px.

O piso em si **não** é um valor único — acompanha o mesmo padding lateral
que `.sectionTitle`/`.actions` já usam em cada tier, pra manter a borda do
card alinhada com o resto da seção: `--space-6` (24px) na base (SM
mobile), `--space-12` (48px) a partir de 768px (SM tablet), `--space-10`
(40px) a partir de 810px — esse último sem um valor do Figma pra
810–1076px (faixa sem protótipo dedicado), escolhido só por ficar entre o
padding do tablet e o ponto onde a fórmula calc assume sozinha. Continua
sendo CSS `min()`/`max()`/`calc()` puro dentro de cada tier — o único uso
de breakpoint aqui é pra trocar qual piso está em vigor, igual a qualquer
outro ajuste por tier no projeto.

**Blocos texto+imagem/card com coluna fixa — vira `row` em 1264px, não
810px.** Padrão recorrente: uma coluna de texto fluida (`flex: 1 0 0`,
max-width 486px MD) ao lado de uma coluna de imagem ou card com **largura
fixa** (588px MD — não fluida). Entre 810px e 1264px o container já assume
`max-width: 1200px`, mas descontando o padding lateral (32px×2), a coluna
fixa de 588px não sobra espaço pra conviver com a de texto sem espremê-la.
1264px = 1200px (max-width do container, valendo desde 810px) + 64px de
padding — o ponto em que a largura fixa finalmente cabe com folga. Sem
protótipo dedicado pra essa faixa intermediária (mesmo racional do
Hero/Carousel abaixo), esses blocos reaproveitam o layout empilhado da
referência SM até 1264px em vez de forçar o `row` do MD cedo demais.
Onde a imagem tem aspect-ratio dependente da largura (`.imageBox_inline`
etc.), o breakpoint da proporção acompanha a mesma exceção, pra não assumir
a proporção widescreen do MD enquanto ainda está empilhada em largura
total. Componentes que seguem esse padrão hoje:

- `LightContentSection` (`.textAndImageBlock`) —
  `apps/web/app/expedicoes/holiday-camboja-bangkok/_components/`.
- `TextBlockSection` (`.content`/`.textColumn`/`.imageColumn`) — mesma
  pasta.
- `HowToBook` (`.content`/`.textCol`/`.stack_md`, card `HowToCard` size
  `md`) — `apps/web/components/`, usado também na home
  (`apps/web/app/page.tsx`).

O mesmo problema também aparece numa variação sem coluna fixa:
`PricingSection` (`.rowSm`/`.rowMd`) tem 3 `PricingCard` lado a lado com
`flex: 1 0 0` sem piso — nenhuma largura é tecnicamente fixa, mas a largura
"confortável" de cada card MD é 384px (`PricingCard.module.css` `.md`), e
3×384px + 2 gaps de 24px + padding lateral de 64px também somam 1264px.
Abaixo disso os cards encolhem além do previsto e os títulos quebram/
apertam — mesma exceção, mesmo breakpoint, mecanismo um pouco diferente
(flex sem piso em vez de largura fixa).

Ao criar um bloco novo desse mesmo formato (texto fluido + coluna com
largura fixa), aplique 1264px como o breakpoint de `row` por padrão, em vez
de repetir 810px e reintroduzir o mesmo squeeze.

## Objetivo

Essa estratégia existe para ser simples, consistente, previsível, fácil
de manter e fiel aos protótipos do Figma — sem criar breakpoints ou
variações novas a não ser que o protótipo de um componente
especificamente peça.
