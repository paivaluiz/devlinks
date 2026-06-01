---
title: "Teste de frontmatter realista no ADO"
type: reference
status: approved
owner: "@luizpaiva"
created: 2026-04-11
lang: pt
area: system
version: "2.0"
tags:
  - teste
  - frontmatter
  - changelog
changelog:
  - version: "2.0"
    date: 2026-05-30
    summary: "Mudança da convenção de cerca Mermaid do projeto: da cerca de crases padrão para a cerca de dois-pontos, porque o tenant Azure DevOps Services que hospeda o projeto renderiza apenas a cerca de dois-pontos. Três operações: nova seção de cerca e tipos, conversão dos exemplos e ajuste do gate. Bump MAJOR — a troca da cerca canônica invalida prescrição anterior."
  - version: "1.1"
    date: 2026-05-29
    summary: "Renomeação de identificador nos exemplos de diagrama, alinhando ao nome canônico atual. Bump MINOR — atualização de exemplos, sem mudança prescritiva."
  - version: "1.0"
    date: 2026-05-18
    summary: "Criação inicial. Convenções de diagramas para o projeto: tipo top-down para flows, shapes, subgraph por escopo e labels. Orientações para outros tipos de diagrama."
---

# Teste de frontmatter realista (arquivo temporário — apagar depois)

| | |
| --- | --- |
| **Tipo** | Referência |
| **Status** | Aprovado |
| **Versão** | 2.0 — 30/05/2026 |

Cole **todo** este conteúdo (com o bloco `---` do topo) numa página nova da Wiki
do ADO. O que interessa é **como o frontmatter acima renderiza**, em especial:

1. O array **`changelog`** (3 entradas com `summary` longo): vira uma célula
   gigante? uma sublista? texto corrido? ilegível?
2. As **`tags`** (lista): viram célula com lista ou texto?
3. A tabela do frontmatter fica **larga demais** (9+ colunas) e quebra o layout?
4. No geral: o frontmatter na Wiki fica **aceitável** ou **polui** o topo do doc?

Me diga o que achou — e se preferir, manda um print.
