
# 📄 Product Requirements Document (PRD) - PriceWatcher

## 1. Visão Geral e Objetivo

O **PriceWatcher** é uma aplicação web que permite aos usuários monitorar produtos no **Mercado Livre** e na **Amazon**, acompanhar os preços atuais e receber alertas visuais quando um produto atinge o preço desejado.

**Objetivo Principal:** Facilitar decisões de compra inteligentes, permitindo que os usuários:
- Cadastrem links de produtos do Mercado Livre e da Amazon para monitoramento
- Definam um preço-alvo e sejam alertados quando o preço atual o atingir
- Acompanhem os preços coletados de ambas as plataformas em um único painel
- Gerenciem seus produtos monitorados de forma simples e centralizada

---

## 2. Atores do Sistema

- **Visitante:** Usuário não autenticado que acessa a página inicial e deseja criar uma conta.
- **Usuário (Autenticado):** Pessoa com conta criada que gerencia seus produtos monitorados e visualiza alertas de preço.
- **Mercado Livre / Amazon (Fontes de Dados):** Plataformas de e-commerce de onde os dados de preço são coletados via URL informada pelo usuário.
- **Sistema de Alertas:** Componente front-end responsável por comparar `preco_ml` / `preco_amzn` com `meta_de_preco` e exibir alertas visuais.

---

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP, estruturadas em épicos.

### 👤 **Épico 1: Autenticação e Gerenciamento de Conta**

- **US01 - Criar Conta:** Como um Visitante, quero preencher um formulário com meus dados (Nome, Email, Senha) para criar uma conta no PriceWatcher.
  - _Critérios de Aceitação:_
    - Email deve ser válido e único (validado via `GET /usuarios?email=...`);
    - Senha deve ter no mínimo 6 caracteres;
    - Todos os campos são obrigatórios;
    - Após criação (`POST /usuarios`), o usuário é redirecionado para o login.

- **US02 - Fazer Login:** Como um usuário cadastrado, quero inserir meu email e senha para acessar meu painel pessoal.
  - _Critérios de Aceitação:_
    - Validação via `GET /usuarios?email=...&senha=...`;
    - Persistência de sessão via `localStorage`;
    - Redirecionamento para dashboard após autenticação bem-sucedida.

- **US03 - Logout:** Como um usuário autenticado, quero fazer logout para encerrar minha sessão com segurança.
  - _Critérios de Aceitação:_
    - Dados de sessão removidos do `localStorage`;
    - Redirecionamento para a página de login.

---

### 📦 **Épico 2: Cadastro e Gerenciamento de Produtos**

- **US04 - Cadastrar Produto para Monitoramento:** Como um usuário, quero informar os links do produto no Mercado Livre e/ou na Amazon, junto de um preço-alvo, para iniciar o monitoramento.
  - _Critérios de Aceitação:_
    - Campos: `url_ml`, `url_amzn`, `id_link_usuario` (tracking/afiliado), `meta_de_preco`;
    - Ao menos uma URL (ML ou Amazon) deve ser informada;
    - Produto é vinculado ao `id_usuario` da sessão ativa;
    - Cadastro realizado via `POST /produtos`.

- **US05 - Listar Produtos Monitorados:** Como um usuário, quero ver todos os produtos que cadastrei em um painel principal.
  - _Critérios de Aceitação:_
    - Listagem via `GET /produtos?id_usuario=...`;
    - Exibição em cards com: URLs, `meta_de_preco`, `preco_ml`, `preco_amzn`;
    - Destaque visual quando `preco_ml` ou `preco_amzn` ≤ `meta_de_preco`.

- **US06 - Editar Produto Monitorado:** Como um usuário, quero atualizar o preço-alvo ou os preços coletados de um produto já cadastrado.
  - _Critérios de Aceitação:_
    - Atualização via `PATCH /produtos/:id`;
    - Campos editáveis: `meta_de_preco`, `preco_ml`, `preco_amzn`, `url_ml`, `url_amzn`.

- **US07 - Remover Produto do Monitoramento:** Como um usuário, quero remover um produto da minha lista quando não tenho mais interesse em acompanhá-lo.
  - _Critérios de Aceitação:_
    - Confirmação antes de remover;
    - Remoção via `DELETE /produtos/:id`;
    - Produto desaparece imediatamente da lista.

---

### 💰 **Épico 3: Monitoramento e Alertas de Preço**

- **US08 - Definir Preço-Alvo:** Como um usuário, quero informar um preço máximo (`meta_de_preco`) que estou disposto a pagar para ser alertado quando o produto atingir esse valor.
  - _Critérios de Aceitação:_
    - Campo numérico para inserir `meta_de_preco` no cadastro ou edição;
    - Lógica de comparação aplicada no front-end:
      ```js
      if (preco_ml <= meta_de_preco || preco_amzn <= meta_de_preco) {
        // disparar alerta visual
      }
      ```

- **US09 - Receber Alerta Visual de Preço-Alvo Atingido:** Como um usuário, quero ser notificado visualmente quando o preço de um produto monitorado atingir ou for inferior ao meu preço-alvo.
  - _Critérios de Aceitação:_
    - Alerta exibido no card do produto (badge, cor de destaque ou tooltip);
    - Diferenciação entre alerta do ML e da Amazon;
    - Verificação automática ao carregar o painel de produtos.

- **US10 - Atualizar Preços Manualmente:** Como um usuário, quero atualizar os preços (`preco_ml` e `preco_amzn`) de um produto para refletir os valores atuais das lojas.
  - _Critérios de Aceitação:_
    - Opção de edição rápida nos cards do painel;
    - Atualização via `PATCH /produtos/:id`;
    - Alertas são recalculados imediatamente após a atualização.

---

### 📱 **Épico 4: Interface e User Experience**

- **US11 - Visualizar Dashboard Responsivo:** Como um usuário em qualquer dispositivo, quero acessar o PriceWatcher com layout otimizado para mobile, tablet e desktop.
  - _Critérios de Aceitação:_
    - Responsive design nos breakpoints: 320px, 768px, 1024px;
    - Layout adaptável sem scroll horizontal excessivo;
    - Toque/click em elementos interativos sem dificuldade.

- **US12 - Navegar com Menu Intuitivo:** Como um usuário, quero ter acesso fácil aos principais recursos via menu bem estruturado.
  - _Critérios de Aceitação:_
    - Menu com links para: Home, Meus Produtos, Cadastrar Produto, Perfil, Logout;
    - Menu mobile com ícone hamburger;
    - Indicativo da página atual (ativa).

---

## 4. Escopo de Funcionalidades

### ✅ **MVP (Fase 1) — Alinhado ao Tech Spec**
- Autenticação simples via `GET /usuarios?email=...&senha=...` + `localStorage`
- Cadastro de produtos com URLs (ML e Amazon), link de afiliado e preço-alvo
- Listagem de produtos por usuário (`GET /produtos?id_usuario=...`)
- Edição e remoção de produtos via `PATCH` e `DELETE`
- Alerta visual no front-end quando preço ≤ meta
- Interface responsiva

### 🔄 **Fase 2 (Melhorias)**
- Atualização automatizada de `preco_ml` e `preco_amzn` via script ou scraper
- Gráfico de histórico de preços com dados temporais (Chart.js)
- Notificações in-app persistentes
- Filtros e ordenação no painel de produtos

### 🚀 **Fase 3 (Expansão)**
- Integração real com APIs do Mercado Livre e Amazon
- Notificações via email para usuários premium
- Suporte a outros marketplaces (Shopee, Magazine Luiza, etc.)
- Mobile app nativa
- Machine Learning para previsão de preços