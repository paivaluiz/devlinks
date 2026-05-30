# Teste de capacidade Mermaid no Azure DevOps (arquivo temporário — apagar depois)

Cole **todo** este conteúdo numa página nova da Wiki do ADO e veja o que renderiza.
Para cada bloco, anote: **renderizou?** (✅/❌). Os blocos da seção C testam recursos,
não tipos. Se algum falhar, me diga o número — pode ser sintaxe minha, não falta de
suporte do ADO.

---

## A. Tipos clássicos

### 01 · flowchart (subgraph + classDef + `<br/>` + decisão)

::: mermaid
flowchart TD
    classDef ok fill:#dcfce7,stroke:#166534,color:#000
    Start(["início<br/>linha 2"]) --> SG
    subgraph SG["Try"]
        B["passo 1"] --> C{"decisão?"}
        C -->|sim| D["ok"]
        C -->|não| E["falha"]
    end
    SG --> Fim(["fim"])
    class D ok
:::

### 02 · graph (keyword antigo — confirmar alias)

::: mermaid
graph LR
    X[A] --> Y[B] --> Z[C]
:::

### 03 · sequenceDiagram

::: mermaid
sequenceDiagram
    participant TF as Typeform
    participant PA as Power Automate
    participant DV as Dataverse
    TF->>PA: webhook (payload)
    PA->>DV: Add Row
    DV-->>PA: ok
:::

### 04 · classDiagram

::: mermaid
classDiagram
    class Pessoa {
        +String nome
        +cadastrar()
    }
    Pessoa <|-- Assessorado
    Pessoa <|-- Operador
:::

### 05 · stateDiagram-v2

::: mermaid
stateDiagram-v2
    [*] --> Pendente
    Pendente --> Aprovado: validar
    Pendente --> Rejeitado: recusar
    Aprovado --> [*]
:::

### 06 · erDiagram

::: mermaid
erDiagram
    ASSESSORADO ||--o{ CONTRATO : possui
    ASSESSORADO {
        string nome
        string cpf
    }
    CONTRATO {
        string id
        date assinado_em
    }
:::

### 07 · gantt

::: mermaid
gantt
    title Cronograma da Sprint
    dateFormat YYYY-MM-DD
    section Sprint 01
    Bloco 00 :a1, 2026-06-01, 5d
    Bloco 01 :after a1, 5d
:::

### 08 · pie

::: mermaid
pie title Distribuição de blocos
    "Governança" : 30
    "Aplicação" : 50
    "Automação" : 20
:::

### 09 · journey (user journey)

::: mermaid
journey
    title Jornada do Assessorado
    section Cadastro
      Preencher formulário: 5: Assessorado
      Validar dados: 3: Sistema
:::

### 10 · gitGraph

::: mermaid
gitGraph
    commit
    branch develop
    commit
    checkout main
    merge develop
:::

### 11 · requirementDiagram

::: mermaid
requirementDiagram
    requirement req1 {
        id: 1
        text: cifrar PII em trânsito
        risk: high
        verifymethod: test
    }
    element e1 {
        type: flow
    }
    e1 - satisfies -> req1
:::

---

## B. Tipos novos (Mermaid 9.3+/10+/11 — dependem da versão do engine)

### 12 · timeline

::: mermaid
timeline
    title Roadmap Nexus Core
    2026 Q2 : Sprint 01
    2026 Q3 : Sprint 02 : Sprint 03
:::

### 13 · mindmap

::: mermaid
mindmap
  root((Nexus Core))
    Governança
    Arquitetura
    Dados
    Segurança
:::

### 14 · quadrantChart

::: mermaid
quadrantChart
    title Esforço vs Valor
    x-axis Baixo --> Alto
    y-axis Baixo --> Alto
    quadrant-1 Prioridade
    quadrant-2 Planejar
    quadrant-3 Descartar
    quadrant-4 Quick wins
    Item A: [0.3, 0.6]
    Item B: [0.7, 0.8]
:::

### 15 · xychart-beta

::: mermaid
xychart-beta
    title "Receita por mês"
    x-axis [jan, fev, mar]
    y-axis "Valor" 0 --> 100
    bar [30, 50, 80]
    line [20, 40, 70]
:::

### 16 · sankey-beta

::: mermaid
sankey-beta

A,B,10
B,C,5
A,C,3
:::

### 17 · block-beta

::: mermaid
block-beta
    columns 3
    a["A"] b["B"] c["C"]
:::

### 18 · C4Context

::: mermaid
C4Context
    title Contexto do Hub
    Person(op, "Operador")
    System(hub, "Hub de Empregabilidade")
    Rel(op, hub, "usa")
:::

---

## C. Recursos dentro de flowchart

### 19 · Markdown strings — negrito/itálico com crase (a forma "certa")

::: mermaid
flowchart LR
    A["`**negrito** e *itálico*`"] --> B["texto normal"]
:::

### 20 · `**negrito**` sem crase (o que temos hoje no workflow.md)

::: mermaid
flowchart LR
    A["**negrito sem crase**"] --> B["normal"]
:::

### 21 · Diretiva de init (tema)

::: mermaid
%%{init: {"theme": "forest"}}%%
flowchart LR
    A --> B --> C
:::

### 22 · Ícone Font Awesome (a doc diz que não suporta)

::: mermaid
flowchart LR
    A["fa:fa-check OK"] --> B["fim"]
:::
