@AGENTS.md

# Regras do projeto Delacumbre EXP

Monorepo com dois pacotes: `packages/design-system` (biblioteca de componentes,
tokens e vitrine em `/dev` — fonte de verdade visual) e `apps/web` (o site real
da Delacumbre EXP, que consome o design system via
`@delacumbre/design-system`). As regras abaixo são fixas e não-negociáveis
para o desenvolvimento de `apps/web`.

## 1. Componentes e tokens em primeiro lugar

- Toda UI de `apps/web` é construída com componentes de
  `@delacumbre/design-system` e tokens de `styles/tokens/` (cores, tipografia,
  espaçamento, raio, sombra). Nunca hex, px ou valores soltos direto na
  página — se um valor não existe como token, ver regra 4.
- Antes de escrever JSX/CSS novo, verifique em
  `packages/design-system/app/dev` (rode `npm run dev:ds`) se já existe um
  componente do DS que resolve a necessidade. Reuso sempre vem antes de
  criação.
- Não invente variantes, tamanhos, cores ou padrões visuais que não tenham
  sido pedidos ou que não existam nos tokens/nas variantes já documentadas em
  `/dev`. Na dúvida sobre uma variante nova, pergunte antes de criar.

## 2. Quando criar um componente novo em vez de usar o DS

- Um componente só nasce dentro de `apps/web` quando for genuinamente
  específico daquela página (copy/layout que não se repete em outro lugar).
- Promova um componente de `apps/web` para o design system quando ele
  atender pelo menos um destes critérios:
  - **Reuso**: já é (ou claramente será) usado em 2+ lugares.
  - **Padrão estrutural**: é reutilizável independente do conteúdo
    específico (ex: um grupo de accordion controlado é estrutural; o
    conteúdo das perguntas de uma FAQ específica não é).
- Promover significa: mover para `packages/design-system/components/<categoria>/`,
  seguindo a regra 5.

## 3. Organização dentro do design system

- `components/` é dividido por categoria: `primitives/`, `controls/`,
  `navigation/`, `cards/`, `layout/` — espelhando as seções do menu em
  `/dev` (`app/dev/_components/DevSidebar.tsx`). Um componente novo entra na
  categoria mais próxima do seu uso; não crie uma sexta categoria sem
  necessidade clara.
- Duplicação entre dois componentes: se a divergência visual/semântica for
  real (ex: caixa+check vs. círculo+ponto), não force os dois num só
  componente com prop de variante — extraia só o que é genuinamente
  compartilhado (tipos, mapas de tamanho→classe, um shell/wrapper comum) para
  um módulo interno, como em `controls/selectableControlSize.ts` e
  `controls/FieldShell.tsx`.

## 4. Escala de espaçamento e raio

- Ao precisar de um valor de espaçamento/raio fora da escala em
  `styles/tokens/spacing.css` / `radius.css`, use o valor literal com um
  comentário `/* Npx — fora da escala de espaçamento|raio */`. Não invente um
  token novo para um valor usado uma única vez.
- Assim que esse mesmo valor aparecer em um **segundo** componente, promova-o
  a token (`--space-N` / `--radius-N`) e atualize os dois usos, seguindo o
  padrão já estabelecido em `spacing.css`/`radius.css`.

## 5. Todo componente novo do DS precisa de vitrine

- Componente novo em `packages/design-system/components/` ganha uma página
  de demo em `app/dev/componentes/<slug>/page.tsx` (variantes, tamanhos,
  estados, seção final "Uso" com snippet de import) e uma entrada em
  `DevSidebar.tsx`, seguindo o padrão dos componentes já existentes.

## 6. Convenções já estabelecidas (manter, não redescutir)

- `<img>` em vez de `next/image` é uma decisão deliberada no design system
  (regra já desligada globalmente em `eslint.config.mjs` para
  `packages/design-system/components/**`) — não adicione `next/image` nem
  comentários de disable novos.
- `"use client"` só em componentes com estado/interatividade real; mantenha
  os demais como server components.
- Copy/conteúdo de marca (nomes, textos padrão, links) não deve virar default
  hardcoded dentro de um componente do DS — passe como prop, mesmo que o
  valor "óbvio" se repita nas páginas de demo.
