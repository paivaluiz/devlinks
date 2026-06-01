---
title: "Teste de capacidade Markdown no Azure DevOps"
type: reference
status: draft
owner: "@luizpaiva"
created: 2026-05-30
lang: pt
area: system
version: "0.1"
tags:
  - teste
  - markdown
---

# Teste de Markdown no ADO (arquivo temporário — apagar depois)

Cole **todo** este conteúdo (incluindo o bloco `---` do topo) numa página nova
da Wiki do ADO e anote, por item (A, B, C…), o que renderiza ✅ ou falha ❌.

---

## A · Frontmatter YAML (o teste crítico)

O bloco `---` no **topo** deste arquivo (title, type, status, tags…): o ADO
**esconde** como metadado, mostra como **tabela**, ou imprime como **texto/linha
horizontal**? É o que define se nossos docs (todos têm frontmatter) ficam limpos
na Wiki. Anote o comportamento.

---

## B · Tabela de metadados com cabeçalho vazio

Esta tabela `| | |` aparece em **todo** documento do projeto, logo após o H1:

| | |
| --- | --- |
| **Tipo** | Referência |
| **Status** | Rascunho |
| **Versão** | 0.1 — 30/05/2026 |

Renderiza como tabela de 2 colunas sem cabeçalho visível?

---

## C · Headings e separador

# C — H1
## C — H2
### C — H3
#### C — H4

O separador `---` abaixo vira linha horizontal?

---

## 🔒 D · Emoji em heading

Este H2 começa com emoji (`🔒`). O emoji aparece no título renderizado?

---

## E · Ênfase inline

- **negrito** e *itálico* e ***negrito itálico***
- `inline code`
- ~~tachado (strikethrough)~~
- emojis em texto: ✅ 🟥 📐 ⬜ 🔄 ☑️
- quebra de linha com br: linha 1<br/>linha 2

---

## F · Links

- Externo: [Microsoft Learn](https://learn.microsoft.com/azure/devops)
- Interno relativo (estilo do repo): [workflow.md](../docs/workflow.md)
- Âncora interna: [ir para a seção H](#h--tabelas)

---

## G · Blocos de código

```bash
echo "fenced bash com linguagem"
```

```python
def soma(a, b):
    return a + b
```

```yaml
chave: valor
lista:
  - item
```

```text
saída genérica sem linguagem
```

---

## H · Tabelas

| Coluna A | Centralizada | À direita |
| :--- | :---: | ---: |
| valor | `code` | 42 |
| **bold** | *ital* | ✅ |
| linha com <br/> quebra | emoji 🟥 | 100 |

---

## I · Citações (blockquote)

> Citação de uma linha.

> Citação de várias linhas
> com **negrito**, `code` e emoji 📌.
>
> Segundo parágrafo da citação.

---

## J · Listas

Não-ordenada com aninhamento (2 espaços por nível):

- Nível 1
  - Nível 2
    - Nível 3

Ordenada:

1. Primeiro
2. Segundo
3. Terceiro

Lista de tarefas (checkbox GFM):

- [ ] Tarefa aberta
- [x] Tarefa concluída

---

## K · Recursos além do uso atual (definir para o futuro)

### K1 — Bloco colapsável (HTML `<details>`)

<details>
<summary>Clique para expandir</summary>

Conteúdo escondido até clicar.

</details>

### K2 — Nota de rodapé

Frase com nota de rodapé.[^nota]

[^nota]: Conteúdo da nota de rodapé.

### K3 — Imagem

![texto alternativo de teste](https://learn.microsoft.com/favicon.ico)

### K4 — Tabela de conteúdo automática

[[_TOC_]]

### K5 — Menção e work item (sintaxe ADO)

Menção `@<alias>` e work item `#123` — sintaxe específica do ADO.
