
# price-watcher

### **Autor:** Augusto Emanuel Pereira

Este projeto tem como objetivo implementar uma aplicaÃ§Ã£o web que permite aos usuÃ¡rios monitorar produtos em diferentes lojas online e receber notificaÃ§Ãµes quando houver queda de preÃ§o.

A aplicaÃ§Ã£o busca facilitar decisÃµes de compra, permitindo acompanhar o histÃ³rico de preÃ§os, detectar promoÃ§Ãµes reais e evitar falsas ofertas.

O frontend foi desenvolvido com HTML, CSS e JavaScript, enquanto o backend pode ser simulado com uma API Fake utilizando JSON Server (ou integrado futuramente com APIs reais e scraping de dados).

---

## ðŸ“š DocumentaÃ§Ã£o do Projeto

Para entender as regras de negÃ³cio, o escopo e a arquitetura tÃ©cnica da aplicaÃ§Ã£o, consulte os documentos abaixo:

- [ðŸ“„ Product Requirements Document (PRD)](./docs/prd.md) - VisÃ£o geral, funcionalidades e histÃ³rias de usuÃ¡rio.
- [ðŸ› ï¸ EspecificaÃ§Ã£o TÃ©cnica (Tech Spec)](./docs/spec.md) - Estrutura de dados, rotas da API e arquitetura do sistema.

---

## ðŸŽ¨ Design

- [ðŸŽ¨ Design System](./docs/design-system.md) - Identidade visual da aplicaÃ§Ã£o.
- [ðŸ–¼ï¸ ProtÃ³tipo no Figma](https://www.figma.com/design/gDR2vWH7VWbVcbxkZj9I7S/PriceWatcher?node-id=0-1&t=b1BywPwWQzpRqaQO-1) - Telas interativas.

---

## ðŸŒ Site em ProduÃ§Ã£o - GitHub Pages

https://seu-usuario.github.io/price-watcher/

---

## ðŸ’» Tecnologias e DependÃªncias

- **Frontend:**
  - HTML5
  - CSS3
  - **Bootstrap 5.3.3** *(Framework CSS escolhido â€” veja justificativa abaixo)*
  - JavaScript (ES6+)

- **Backend (simulado):**
  - JSON Server `v0.17.4`

- **APIs PÃºblicas Integradas:**
  - **Mercado Livre API v1**
  - **Amazon Product Advertising API v5.0 (PA API 5.0)**

- **Bibliotecas:**
  - jQuery `v3.7.1`
  - Chart.js `v4.4.3` (para grÃ¡ficos de histÃ³rico de preÃ§o)
  - Bootstrap Icons `v1.11.3`

---

## ðŸ§  Justificativa das Escolhas TÃ©cnicas

### ðŸŽ¨ Framework CSS â€” Bootstrap 5.3.3

O **Bootstrap** foi escolhido como framework CSS apÃ³s anÃ¡lise comparativa com alternativas como Tailwind CSS e Materialize CSS, com base nos seguintes critÃ©rios:

| CritÃ©rio | Bootstrap 5.3.3 | Tailwind CSS | Materialize CSS |
|---|---|---|---|
| â­ Stars no GitHub | ~170k | ~82k | ~39k |
| ðŸ“¦ Componentes prontos | âœ… Cards, Modais, Toasts | âŒ Utility-first | âœ… Limitados |
| ðŸ“± Responsividade | âœ… Grid 12 colunas | âœ… | âœ… |
| ðŸ“… ManutenÃ§Ã£o ativa | âœ… AtualizaÃ§Ãµes frequentes | âœ… | âš ï¸ Lento |
| ðŸ“– DocumentaÃ§Ã£o | âœ… Extensa e em PT-BR | âœ… | âœ… |

**Por que Bootstrap para o Price Watcher?**
- O sistema de **grid responsivo de 12 colunas** garante que os cards de produtos se adaptem perfeitamente a dispositivos mÃ³veis e desktops, atendendo diretamente ao **ID 01 e ID 02**.
- Componentes prontos como **Cards**, **Modais**, **Badges de preÃ§o** e **Toasts de notificaÃ§Ã£o** aceleram o desenvolvimento (**ID 04**).
- O Bootstrap 5 nÃ£o depende de jQuery, tornando o projeto mais leve e moderno.

---

### ðŸ”Œ APIs PÃºblicas â€” Mercado Livre & Amazon

#### ðŸ›’ Mercado Livre API v1
- **DocumentaÃ§Ã£o:** [developers.mercadolibre.com.br](https://developers.mercadolibre.com.br)
- **AutenticaÃ§Ã£o:** OAuth 2.0 (token de acesso gratuito)

> O Mercado Livre Ã© a maior plataforma de e-commerce da AmÃ©rica Latina. Sua API pÃºblica Ã© gratuita, bem documentada e retorna dados em JSON com preÃ§o, histÃ³rico e URLs â€” ideal para monitoramento de preÃ§os em tempo real (**IDs 17, 18 e 19**).

#### ðŸ“¦ Amazon PA API v5.0
- **DocumentaÃ§Ã£o:** [webservices.amazon.com/paapi5](https://webservices.amazon.com/paapi5/documentation/)
- **AutenticaÃ§Ã£o:** AWS Signature v4

> Integrar a Amazon permite comparar preÃ§os entre o mercado nacional e internacional, enriquecendo a funcionalidade de **ComparaÃ§Ã£o entre Lojas** do sistema.

---

## âš™ï¸ Funcionalidades

- ðŸ”Ž Cadastro de produtos via link ou nome
- ðŸ“‰ Monitoramento automÃ¡tico de preÃ§os
- ðŸ”” NotificaÃ§Ãµes de queda de preÃ§o (Bootstrap Toasts)
- ðŸ“Š HistÃ³rico de preÃ§os com grÃ¡ficos (Chart.js)
- ðŸ›’ ComparaÃ§Ã£o entre lojas (Mercado Livre vs Amazon)
- â­ Lista de desejos
- ðŸš¨ DetecÃ§Ã£o de falsas promoÃ§Ãµes

---

## âœ… Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

#### RA1 - Utilizar Frameworks CSS para estilizaÃ§Ã£o de elementos HTML e criaÃ§Ã£o de layouts responsivos.

- [ ] ID 01 - Prototipa interfaces adaptÃ¡veis para no mÃ­nimo os tamanhos de tela mobile e desktop, usando ferramentas de design tradicionais (Figma, Quant UX ou Sketch) ou IA (Stitch).
- [ ] ID 02 - Implementa layout responsivo com Framework CSS (Bootstrap, Materialize, Tailwind + DaisyUI) usando Flexbox ou Grid do prÃ³prio framework.
- [ ] ID 03 - Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
- [ ] ID 04 - Utiliza componentes prontos de um Framework CSS (ex.: card, button) e componentes JavaScript do framework (ex.: modal, carousel).
- [ ] ID 05 - Cria layout fluido usando unidades relativas (vw, vh, %, em, rem) no lugar de unidades fixas (px).
- [ ] ID 06 - Aplica um Design System consistente (cores, tipografia, padrÃµes de componentes) em toda a aplicaÃ§Ã£o.
- [ ] ID 07 - Utiliza Sass (SCSS) com ou sem framework, aplicando variÃ¡veis, mixins e funÃ§Ãµes para modularizar o cÃ³digo.
- [ ] ID 08 - Aplica tipografia responsiva (media queries mobile first) ou tipografia fluida (funÃ§Ã£o clamp() + unidades relativas).
- [ ] ID 09 - Aplica tÃ©cnicas de responsividade de imagens usando CSS (object-fit, containers com unidades relativas).
- [ ] ID 10 - Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo (srcset, picture, ou parÃ¢metros do Cloudinary).

#### RA2 - Realizar tratamento de formulÃ¡rios e aplicar validaÃ§Ãµes customizadas no lado cliente.

- [ ] ID 11 - Implementa validaÃ§Ã£o HTML nativa (campos obrigatÃ³rios, tipos, limites de caracteres) com mensagens de erro/sucesso no lado cliente.
- [ ] ID 12 - Aplica expressÃµes regulares (REGEX) para validaÃ§Ãµes customizadas (e-mail, telefone, datas, etc.)
- [ ] ID 13 - Utiliza elementos de seleÃ§Ã£o em formulÃ¡rios (checkbox, radio, select) para coleta de dados.
- [ ] ID 14 - Implementa leitura e escrita no Web Storage (localStorage/sessionStorage) para persistir dados localmente.

#### RA3 - Aplicar ferramentas para otimizaÃ§Ã£o do processo de desenvolvimento web.

- [ ] ID 15 - Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependÃªncias.
- [ ] ID 16 - Utiliza boas prÃ¡ticas de versionamento no Git/GitHub (branch main ou branches especÃ­ficos, uso de .gitignore).
- [ ] ID 17 - MantÃ©m um README.md padronizado, conforme template da disciplina, com checklist preenchido.
- [ ] ID 18 - Organiza arquivos do projeto de forma modular, seguindo padrÃ£o de exemplo fornecido.
- [ ] ID 19 - Configura linters e formatadores (ESLint, Prettier) para manter qualidade e padronizaÃ§Ã£o do cÃ³digo.

#### RA4 - Aplicar bibliotecas de funÃ§Ãµes e componentes em JavaScript para aprimorar a interatividade de pÃ¡ginas web.

- [ ] ID 20 - Utiliza jQuery para manipulaÃ§Ã£o do DOM e interatividade (eventos, animaÃ§Ãµes, manipulaÃ§Ã£o de elementos)
- [ ] ID 21 - Integra e configura um plugin jQuery relevante (ex.: jQuery Mask Plugin).

#### RA5 - Efetuar requisiÃ§Ãµes assÃ­ncronas para uma API fake e APIs pÃºblicas, permitindo a obtenÃ§Ã£o e manipulaÃ§Ã£o de dados dinamicamente.

- [ ] ID 22 - Realiza requisiÃ§Ãµes assÃ­ncronas para uma API fake (ex.: JSON Server) para persistir dados de um formulÃ¡rio.
- [ ] ID 23 - Realiza requisiÃ§Ãµes assÃ­ncronas para uma API fake para exibir dados na pÃ¡gina.
- [ ] ID 24 - Realiza requisiÃ§Ãµes assÃ­ncronas para APIs pÃºblicas reais (OpenWeather, ViaCEP etc.), exibindo os dados e tratando erros.

---

## ðŸš€ Manual de execuÃ§Ã£o

**Clonar o repositÃ³rio:**
```bash
git clone https://github.com/seu-usuario/price-watcher.git
cd price-watcher
```

**Instalar dependÃªncias:**
```bash
npm install
```

> As seguintes dependÃªncias serÃ£o instaladas automaticamente:
> - `bootstrap@5.3.3`
> - `bootstrap-icons@1.11.3`
> - `jquery@3.7.1`
> - `chart.js@4.4.3`
> - `json-server@0.17.4`

**Iniciar o JSON Server (API Fake):**
```bash
npx json-server --watch db.json --port 3001
```

**Abrir o projeto:**
```bash
# Abra o index.html no navegador ou use a extensÃ£o Live Server (VS Code)
```

---

## ðŸ”‘ VariÃ¡veis de Ambiente

Crie um arquivo `.env` na raiz do projeto com suas credenciais:

```env
# Mercado Livre
ML_CLIENT_ID=seu_client_id
ML_CLIENT_SECRET=seu_client_secret

# Amazon PA API
AMAZON_ACCESS_KEY=sua_access_key
AMAZON_SECRET_KEY=sua_secret_key
AMAZON_PARTNER_TAG=seu_partner_tag
```

> âš ï¸ Nunca suba o arquivo `.env` para o repositÃ³rio. Ele jÃ¡ estÃ¡ listado no `.gitignore`.