# app-finances-multiplatform

## Descrição

A aplicação `app-finances-multiplatform` tem como objetivo organizar as finanças pessoais de forma eficiente e centralizada, permitindo o gerenciamento de receitas, despesas, contas bancárias e cartões de crédito. Além disso, oferece funcionalidades para o acompanhamento de investimentos, planejamento de pagamentos futuros e ferramentas financeiras diversas, como calculadoras de CDB a longo prazo e valorização monetária.

## Funcionalidades

- **Gerenciamento de Contas Bancárias e Cartões de Crédito:**
  - Consolidação de todas as contas e cartões em um só lugar.
  - Visualização do saldo, receitas e despesas.
  - Demonstração dos dados na dashboard com nome e logo do banco.

- **Registro e Controle de Transações:**
  - Adição de receitas, despesas e transferências entre contas.
  - Detalhamento de cada transação com valor, data/hora, categoria e conta.
  - Marcação de transações como pagas ou não.
  - Gerenciamento de despesas parceladas, com definição automática das parcelas.

- **Acompanhamento de Despesas no Cartão de Crédito:**
  - Registro de compras, incluindo compras parceladas.
  - Configuração da data de fechamento do cartão para envio de notificações.

- **Investimentos:**
  - Registro de aportes com data/hora e objetivos.
  - Sugestões de dicas de investimentos.

- **Planejamento e Ferramentas Financeiras:**
  - Planejamento de pagamentos futuros.
  - Calculadoras financeiras para diversos propósitos (ex.: CDB a longo prazo, valorização monetária).

## Estruturas de Dados

### Usuário

- **Nome:** Nome do usuário.
- **Email:** Endereço de email do usuário.
- **Configurações:** Preferências e configurações personalizadas do usuário.

### Contas

- **Usuário:** Identificação do usuário dono da conta.
- **Tipo:** Tipo da conta (corrente, poupança, etc.).
- **Saldo:** Saldo disponível na conta.
- **Quantidade de receitas:** Número total de receitas na conta.
- **Quantidade de despesas:** Número total de despesas na conta.
- **Flag de demonstração na dashboard:** Indica se a conta deve ser mostrada na dashboard.
- **Banco Nome e Logo:** Nome e logo do banco associado à conta.

### Transações

- **Id:** Identificador único da transação.
- **Usuário:** Identificação do usuário que realizou a transação.
- **Receitas / Despesas / Transferência entre contas:**
  - **Valor:** Valor da transação.
  - **Data / Hora:** Data e hora da transação.
  - **Categoria:** Categoria da transação.
  - **Conta:** Conta associada à transação.
  - **Flag de Paga ou não:** Indicação se a transação está paga ou não, dependendo do tipo.
  - **Despesa Parcelada:** Permite definir a quantidade de parcelas que serão automaticamente geradas.
- **Despesas no Cartão de Crédito:**
  - **Lançamento de compras:** Registro de compras no cartão de crédito.
  - **Lançamento de compras parceladas:** Registro de compras parceladas no cartão de crédito.
  - **Definição da data de fechamento do cartão:** Configuração para envio de notificações de fechamento do cartão.
- **Investimentos:**
  - **Aportes:** Registro de aportes financeiros.
  - **Data / Hora:** Data e hora do aporte.
  - **Objetivos:** Objetivos do investimento.
  - **Dicas de Investimentos:** Sugestões e dicas sobre investimentos.

### Categorias

- **Usuário:** Identificação do usuário associado à categoria.
- **Tipo:** Tipo de categoria (receita, despesa, etc.).
- **Nome:** Nome da categoria.
- **Ícone:** Ícone representativo da categoria.

## Licença

Este projeto está licenciado sob a Licença Apache 2.0 - veja o arquivo [LICENSE](LICENSE) para detalhes.
