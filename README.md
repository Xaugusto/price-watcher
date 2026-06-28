
# price-watcher

### **Autor:** Augusto Emanuel Pereira

Este projeto tem como objetivo implementar uma aplicação web que permite aos usuários monitorar produtos em diferentes lojas online e receber notificações quando houver queda de preço.

A aplicação busca facilitar decisões de compra, permitindo acompanhar o histórico de preços, detectar promoções reais e evitar falsas ofertas.

O frontend foi desenvolvido com HTML, CSS e JavaScript, enquanto o backend pode ser simulado com uma API Fake utilizando JSON Server (ou integrado futuramente com APIs reais e scraping de dados).

---

## 📚 Documentação do Projeto

Para entender as regras de negócio, o escopo e a arquitetura técnica da aplicação, consulte os documentos abaixo:

- [📄 Product Requirements Document (PRD)](./docs/prd.md) - Visão geral, funcionalidades e histórias de usuário.
- [🛠️ Especificação Técnica (Tech Spec)](./docs/spec.md) - Estrutura de dados, rotas da API e arquitetura do sistema.

---

## 🎨 Design

- [🎨 Design System](./docs/design-system.md) - Identidade visual da aplicação.
- [🖼️ Protótipo no Figma](https://www.figma.com/design/gDR2vWH7VWbVcbxkZj9I7S/PriceWatcher?node-id=0-1&t=b1BywPwWQzpRqaQO-1) - Telas interativas.

---

## 🌐 Site em Produção - GitHub Pages

https://seu-usuario.github.io/price-watcher/

---

## 💻 Tecnologias e Dependências

- **Frontend:**
  - HTML5
  - CSS3
  - **Sass (SCSS)** *(Compilado para custom.css)*
  - **Bootstrap 5.3.8** *(Framework CSS escolhido — veja justificativa abaixo)*
  - JavaScript (ES6+)

- **Backend (simulado):**
  - JSON Server `v0.17.4`

- **APIs Públicas Integradas / Serviços:**
  - **Amazon Product Advertising API v5.0 (PA API 5.0)**
  - **Cloudinary** *(Para hospedagem e otimização de imagens em formato moderno WebP)*

- **Bibliotecas e Pacotes:**
  - jQuery `v3.7.1`
  - Chart.js `v4.4.3` (para gráficos de histórico de preço)
  - Bootstrap Icons `v1.13.1`
  - Material Symbols `v0.44.4`

---

## 🧠 Justificativa das Escolhas Técnicas

### 🎨 Framework CSS — Bootstrap 5.3.8

O **Bootstrap** foi escolhido como framework CSS após análise comparativa com alternativas como Tailwind CSS e Materialize CSS, com base nos seguintes critérios:

| Critério              | Bootstrap 5.3.8           | Tailwind CSS    | Materialize CSS |
| --------------------- | ------------------------- | --------------- | --------------- |
| ⭐ Stars no GitHub     | ~170k                     | ~82k            | ~39k            |
| 📦 Componentes prontos | ✅ Cards, Modais, Toasts   | ❌ Utility-first | ✅ Limitados     |
| 📱 Responsividade      | ✅ Grid 12 colunas         | ✅               | ✅               |
| 📅 Manutenção ativa    | ✅ Atualizações frequentes | ✅               | ⚠️ Lento         |
| 📖 Documentação        | ✅ Extensa e em PT-BR      | ✅               | ✅               |

**Por que Bootstrap para o Price Watcher?**
- O sistema de **grid responsivo de 12 colunas** garante que os cards de produtos se adaptem perfeitamente a dispositivos móveis e desktops, atendendo diretamente ao **ID 01 e ID 02**.
- Componentes prontos como **Cards**, **Modais**, **Badges de preço** e **Toasts de notificação** aceleram o desenvolvimento (**ID 04**).
- O Bootstrap 5 não depende de jQuery, tornando o projeto mais leve e moderno.

---

### 🔌 APIs Públicas — Amazon

#### 📦 Amazon PA API v5.0
- **Documentação:** [webservices.amazon.com/paapi5](https://webservices.amazon.com/paapi5/documentation/)
- **Autenticação:** AWS Signature v4

> Integrar a Amazon permite monitorar e comparar preços de produtos na Amazon, enriquecendo a funcionalidade de acompanhamento de preços do sistema.

---

## ⚙️ Funcionalidades

- 🔎 Cadastro de produtos via link ou nome
- 📉 Monitoramento automático de preços
- 🔔 Notificações de queda de preço (Bootstrap Toasts)
- 📊 Histórico de preços com gráficos (Chart.js)
- 🛒 Comparação de preços na Amazon
- ⭐ Lista de desejos
- 🚨 Detecção de falsas promoções

---

## ✅ Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

#### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.

- [x] ID 01 - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design tradicionais (Figma, Quant UX ou Sketch) ou IA (Stitch).
- [x] ID 02 - Implementa layout responsivo com Framework CSS (Bootstrap, Materialize, Tailwind + DaisyUI) usando Flexbox ou Grid do próprio framework.
- [x] ID 03 - Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
- [x] ID 04 - Utiliza componentes prontos de um Framework CSS (ex.: card, button) e componentes JavaScript do framework (ex.: modal, carousel).
- [x] ID 05 - Cria layout fluido usando unidades relativas (vw, vh, %, em, rem) no lugar de unidades fixas (px).
- [x] ID 06 - Aplica um Design System consistente (cores, tipografia, padrões de componentes) em toda a aplicação.
- [x] ID 07 - Utiliza Sass (SCSS) com ou sem framework, aplicando variáveis, mixins e funções para modularizar o código.
- [x] ID 08 - Aplica tipografia responsiva (media queries mobile first) ou tipografia fluida (função clamp() + unidades relativas).
- [x] ID 09 - Aplica técnicas de responsividade de imagens usando CSS (object-fit, containers com unidades relativas).
- [x] ID 10 - Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo (srcset, picture, ou parâmetros do Cloudinary).

#### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente.

- [x] ID 11 - Implementa validação HTML nativa (campos obrigatórios, tipos, limites de caracteres) com mensagens de erro/sucesso no lado cliente.
- [x] ID 12 - Aplica expressões regulares (REGEX) para validações customizadas (e-mail, telefone, datas, etc.)
- [x] ID 13 - Utiliza elementos de seleção em formulários (checkbox, radio, select) para coleta de dados.
- [x] ID 14 - Implementa leitura e escrita no Web Storage (localStorage/sessionStorage) para persistir dados localmente.

#### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web.

- [x] ID 15 - Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
- [x] ID 16 - Utiliza boas práticas de versionamento no Git/GitHub (branch main ou branches específicos, uso de .gitignore).
- [x] ID 17 - Mantém um README.md padronizado, conforme template da disciplina, com checklist preenchido.
- [x] ID 18 - Organiza arquivos do projeto de forma modular, seguindo padrão de exemplo fornecido.
- [ ] ID 19 - Configura linters e formatadores (ESLint, Prettier) para manter qualidade e padronização do código.

#### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web.

- [x] ID 20 - Utiliza jQuery para manipulação do DOM e interatividade (eventos, animações, manipulação de elementos)
- [x] ID 21 - Integra e configura um plugin jQuery relevante (ex.: jQuery Mask Plugin).

#### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo a obtenção e manipulação de dados dinamicamente.

- [x] ID 22 - Realiza requisições assíncronas para uma API fake (ex.: JSON Server) para persistir dados de um formulário.
- [x] ID 23 - Realiza requisições assíncronas para uma API fake para exibir dados na página.
- [x] ID 24 - Realiza requisições assíncronas para APIs públicas reais (OpenWeather, ViaCEP etc.), exibindo os dados e tratando erros.

---

## 🚀 Manual de execução

**Clonar o repositório:**
```bash
git clone https://github.com/seu-usuario/price-watcher.git
cd price-watcher
```

**Instalar dependências:**
```bash
npm install
```

> As seguintes dependências serão instaladas automaticamente:
> - `bootstrap@5.3.8`
> - `bootstrap-icons@1.13.1`
> - `jquery@3.7.1`
> - `material-symbols@0.44.4`
> - `cloudinary@2.10.0`

**Iniciar o JSON Server (API Fake):**
```bash
npx json-server --watch db.json --port 3001
```

**Abrir o projeto:**
```bash
# Abra o index.html no navegador ou use a extensão Live Server (VS Code)
```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com suas credenciais:

```env
# Amazon PA API
AMAZON_ACCESS_KEY=sua_access_key
AMAZON_SECRET_KEY=sua_secret_key
AMAZON_PARTNER_TAG=seu_partner_tag
```

> ⚠️ Nunca suba o arquivo `.env` para o repositório. Ele já está listado no `.gitignore`.
