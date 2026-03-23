# 📄 Product Requirements Document (PRD) - PriceWatcher

## 1. Visão Geral e Objetivo

O **PriceWatcher** é uma aplicação web que permite aos usuários monitorar produtos em diferentes lojas online, acompanhar o histórico de preços e receber notificações quando há queda de preço.

**Objetivo Principal:** Facilitar decisões de compra inteligentes, permitindo que os usuários:
- Acompanhem a evolução de preços ao longo do tempo
- Identifiquem promoções genuínas versus falsas ofertas
- Recebam alertas quando um produto atinge o preço desejado
- Visualizem gráficos de histórico de preços para análise comparativa

---

## 2. Atores do Sistema

- **Visitante:** Usuário não autenticado que acessa a mensagem inicial e deseja criar uma conta.
- **Usuário (Autenticado):** Pessoa que possui uma conta, gerencia listas de monitoramento e visualiza alertas de preço.
- **Lojas Online (Fontes de Dados):** Plataformas de e-commerce (Amazon, Mercado Livre, Shopee, etc.) de onde os dados de preço são coletados.
- **Sistema de Notificações:** Componente responsável por enviar alertas via email ou notificações in-app.

---

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP (Minimum Viable Product), estruturadas em épicos.

### 👤 **Épico 1: Autenticação e Gerenciamento de Conta**

- **US01 - Criar Conta:** Como um Visitante, quero preencher um formulário com meus dados (Email, Senha, Nome) para criar uma conta no PriceWatcher.
  - _Critérios de Aceitação:_
    - Email deve ser válido e único;
    - Senha deve ter no mínimo 6 caracteres;
    - Todos os campos são obrigatórios;
    - Após criação, o usuário é redirecionado para o login.

- **US02 - Fazer Login:** Como um usuário cadastrado, quero inserir meu email e senha para acessar meu painel pessoal.
  - _Critérios de Aceitação:_
    - Validação de credenciais;
    - Armazenamento seguro de sessão (token ou session storage);
    - Redirecionamento para dashboard após autenticação bem-sucedida.

- **US03 - Logout:** Como um usuário autenticado, quero fazer logout para encerrar minha sessão seguramente.

### 🔍 **Épico 2: Busca e Adição de Produtos**

- **US04 - Pesquisar Produto:** Como um usuário, quero buscar um produto por nome ou código para encontrá-lo no PriceWatcher.
  - _Critérios de Aceitação:_
    - Campo de busca responsivo;
    - Resultados exibidos em tempo real (debounced);
    - Mostrar produtos já monitorados com destaque visual.

- **US05 - Visualizar Detalhes do Produto:** Como um usuário, quero clicar em um produto para ver informações detalhadas incluindo preço atual, histórico e lojas disponíveis.
  - _Critérios de Aceitação:_
    - Exibir preço atual, preço mínimo, preço máximo do histórico;
    - Listar todas as lojas onde o produto está disponível;
    - Mostrar última data de atualização;
    - Link direto para a loja.

- **US06 - Adicionar Produto ao Monitoramento:** Como um usuário, quero clicar em "Monitorar" para adicionar um produto à minha lista de acompanhamento.
  - _Critérios de Aceitação:_
    - Produto aparece na lista "Meus Produtos";
    - Se já está sendo monitorado, exibir mensagem apropriada;
    - Botão muda de estado (ativo/inativo).

### 💰 **Épico 3: Monitoramento e Alertas de Preço**

- **US07 - Listar Produtos Monitorados:** Como um usuário, quero ver todos os produtos que estou monitorando em um painel principal.
  - _Critérios de Aceitação:_
    - Exibição em cards ou tabela com preço atual, variação de preço e status;
    - Filtros por categoria, preço ou status de alerta;
    - Opção de ordenação (preço, data adicionado, etc.).

- **US08 - Definir Preço-Alvo:** Como um usuário, quero informar um preço máximo que estou disposto a pagar para um produto e receber notificação quando o preço atingir esse valor.
  - _Critérios de Aceitação:_
    - Campo para inserir preço-alvo;
    - Comparação automática com preço atual;
    - Se preço atual ≤ preço-alvo, mostrar alerta imediato;
    - Armazenar preferência para futuras verificações.

- **US09 - Receber Notificação de Queda de Preço:** Como um usuário, quero ser notificado quando um produto monitorado sofre queda significativa de preço.
  - _Critérios de Aceitação:_
    - Notificação in-app exibida no canto superior;
    - Histórico de notificações acessível;
    - Opção de marcar como "lida" ou descartar;
    - (Futuro) Email de notificação para usuários premium.

- **US10 - Remover Produto do Monitoramento:** Como um usuário, quero remover um produto da minha lista quando não tenho mais interesse em acompanhá-lo.
  - _Critérios de Aceitação:_
    - Confirmação antes de remover;
    - Produto desaparece da lista "Meus Produtos";
    - Histórico pode ser recuperado (soft delete).

### 📊 **Épico 4: Análise e Histórico de Preços**

- **US11 - Visualizar Gráfico de Histórico de Preços:** Como um usuário, quero ver um gráfico mostrando a evolução do preço de um produto ao longo do tempo.
  - _Critérios de Aceitação:_
    - Gráfico de linha com eixo X (data) e eixo Y (preço);
    - Possibilidade de filtrar períodos (últimos 7 dias, 30 dias, 3 meses, etc.);
    - Indicadores visuais de preço mínimo e máximo;
    - Legenda com preço atual em destaque.

- **US12 - Comparar Preços Entre Lojas:** Como um usuário, quero ver uma comparação visual dos preços do mesmo produto em diferentes lojas.
  - _Critérios de Aceitação:_
    - Tabela ou cards comparativos mostrando loja, preço, frete e preço total;
    - Destaque para a loja com melhor preço;
    - Links diretos para cada loja.

- **US13 - Consultar Histórico de Alterações:** Como um usuário, quero visualizar um log de todas as variações de preço de um produto monitorado.
  - _Critérios de Aceitação:_
    - Tabela com data, loja, preço anterior, preço novo, diferença percentual;
    - Ordenação por data (mais recente primeiro);
    - Filtro por período de tempo.

### 📱 **Épico 5: Interface e User Experience**

- **US14 - Visualizar Dashboard Responsivo:** Como um usuário em qualquer dispositivo, quero acessar o PriceWatcher com layout otimizado para mobile, tablet e desktop.
  - _Critérios de Aceitação:_
    - Responsive design em breakpoints: 320px, 768px, 1024px;
    - Layout adaptável sem scroll horizontal excessivo;
    - Toque/click em elementos interativos sem dificuldade.

- **US15 - Navegar com Menu Intuitivo:** Como um usuário, quero ter acesso fácil aos principais recursos via menu bem estruturado.
  - _Critérios de Aceitação:_
    - Menu com links para: Home, Meus Produtos, Pesquisa, Perfil, Logout;
    - Menu mobile com ícone hamburger;
    - Indicativo da página atual (ativa).

---

## 4. Escopo de Funcionalidades

### ✅ **MVP (Fase 1)**
- Autenticação básica (login/logout)
- Busca simples de produtos (via arquivo JSON local)
- Lista de produtos monitorados
- Visualização de preço atual e histórico (estático)
- Interface responsiva

### 🔄 **Fase 2 (Melhorias)**
- Integração com JSON Server para dados dinâmicos
- Gráficos interativos de histórico de preço (Chart.js)
- Sistema de alertas com preço-alvo
- Notificações in-app
- Comparação entre lojas

### 🚀 **Fase 3 (Expansão)**
- API integrada com scrapers de e-commerce reais
- Sistema de notificação via email
- Plano premium com recursos avançados
- Mobile app nativa
- Machine Learning para recomendações

---

## 5. Requisitos Não-Funcionais

- **Performance:** Página carrega em < 2 segundos
- **Segurança:** Senhas armazenadas com hash (bcrypt); tokens JWT para sessão
- **Disponibilidade:** Sistema disponível 99% das vezes
- **Escalabilidade:** Suporte para até 10.000 usuários simultâneos na Fase 1
- **Compatibilidade:** Navegadores modernos (Chrome, Firefox, Safari, Edge)

---

## 6. Critérios de Sucesso

- ✅ MVP lançado e funcional
- ✅ Mínimo 100 usuários ativos
- ✅ Taxa de retenção > 40% após 30 dias
- ✅ Tempo de resposta da API < 500ms
- ✅ Cobertura de testes > 70%

---

## 7. Roadmap Estimado

| Fase | Duração | Objetivo |
|------|---------|----------|
| **Fase 1 (MVP)** | 4-6 semanas | Funcionalidade core e interface |
| **Fase 2** | 6-8 semanas | Alertas, gráficos e notificações |
| **Fase 3** | 10-12 semanas | APIs reais e expansão |

---

**Última atualização:** Março de 2026  
**Versão:** 1.0  
**Status:** Em desenvolvimento
