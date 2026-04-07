
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
  - **Bootstrap 5.3.3** *(Framework CSS escolhido — veja justificativa abaixo)*
  - JavaScript (ES6+)

- **Backend (simulado):**
  - JSON Server `v0.17.4`

- **APIs Públicas Integradas:**
  - **Mercado Livre API v1**
  - **Amazon Product Advertising API v5.0 (PA API 5.0)**

- **Bibliotecas:**
  - jQuery `v3.7.1`
  - Chart.js `v4.4.3` (para gráficos de histórico de preço)
  - Bootstrap Icons `v1.11.3`

---

## 🧠 Justificativa das Escolhas Técnicas

### 🎨 Framework CSS — Bootstrap 5.3.3

O **Bootstrap** foi escolhido como framework CSS após análise comparativa com alternativas como Tailwind CSS e Materialize CSS, com base nos seguintes critérios:

| Critério | Bootstrap 5.3.3 | Tailwind CSS | Materialize CSS |
|---|---|---|---|
| ⭐ Stars no GitHub | ~170k | ~82k | ~39k |
| 📦 Componentes prontos | ✅ Cards, Modais, Toasts | ❌ Utility-first | ✅ Limitados |
| 📱 Responsividade | ✅ Grid 12 colunas | ✅ | ✅ |
| 📅 Manutenção ativa | ✅ Atualizações frequentes | ✅ | ⚠️ Lento |
| 📖 Documentação | ✅ Extensa e em PT-BR | ✅ | ✅ |

**Por que Bootstrap para o Price Watcher?**
- O sistema de **grid responsivo de 12 colunas** garante que os cards de produtos se adaptem perfeitamente a dispositivos móveis e desktops, atendendo diretamente ao **ID 01 e ID 02**.
- Componentes prontos como **Cards**, **Modais**, **Badges de preço** e **Toasts de notificação** aceleram o desenvolvimento (**ID 04**).
- O Bootstrap 5 não depende de jQuery, tornando o projeto mais leve e moderno.

---

### 🔌 APIs Públicas — Mercado Livre & Amazon

#### 🛒 Mercado Livre API v1
- **Documentação:** [developers.mercadolibre.com.br](https://developers.mercadolibre.com.br)
- **Autenticação:** OAuth 2.0 (token de acesso gratuito)

> O Mercado Livre é a maior plataforma de e-commerce da América Latina. Sua API pública é gratuita, bem documentada e retorna dados em JSON com preço, histórico e URLs — ideal para monitoramento de preços em tempo real (**IDs 17, 18 e 19**).

#### 📦 Amazon PA API v5.0
- **Documentação:** [webservices.amazon.com/paapi5](https://webservices.amazon.com/paapi5/documentation/)
- **Autenticação:** AWS Signature v4

> Integrar a Amazon permite comparar preços entre o mercado nacional e internacional, enriquecendo a funcionalidade de **Comparação entre Lojas** do sistema.

---

## ⚙️ Funcionalidades

- 🔎 Cadastro de produtos via link ou nome
- 📉 Monitoramento automático de preços
- 🔔 Notificações de queda de preço (Bootstrap Toasts)
- 📊 Histórico de preços com gráficos (Chart.js)
- 🛒 Comparação entre lojas (Mercado Livre vs Amazon)
- ⭐ Lista de desejos
- 🚨 Detecção de falsas promoções

---

## ✅ Checklist | Indicadores de Desempenho (ID)

#### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.

- [x] ID 01 - Prototipar interfaces responsivas  (mobile e desktop)
  > ✔️ Protótipo criado no **Stitch** com telas de Home, Lista de Produtos, Detalhes e Alertas — versões mobile e desktop. [Ver protótipo](https://stitch.withgoogle.com/projects/1963391761961224150)
- [x] ID 02 - Implementar layout com Bootstrap 5
  > ✔️ **Bootstrap v5.3.3** instalado via NPM (`npm install bootstrap@5.3.3`). Integrado ao projeto como dependência oficial no `package.json`.
- [ ] ID 03 - Utilizar Flexbox ou Grid
- [ ] ID 04 - Utilizar componentes prontos (cards, modais, botões, toasts)
- [ ] ID 05 - Usar unidades relativas (% , rem, vh, vw)
- [ ] ID 06 - Aplicar Design System consistente

---

#### RA2 - Tratamento de formulários

- [ ] ID 07 - Validação de campos obrigatórios
- [ ] ID 08 - Validações com REGEX
- [ ] ID 09 - Uso de inputs (checkbox, select, etc.)
- [ ] ID 10 - Uso de localStorage

---

#### RA3 - Otimização do desenvolvimento

- [x] ID 11 - Uso de Node.js e NPM
  > ✔️ Ambiente criado com **Node.js v20.x (LTS)**. Dependências instaladas via NPM: `bootstrap@5.3.3`, `jquery@3.7.1`, `chart.js@4.4.3`, `bootstrap-icons@1.11.3`, `json-server@0.17.4`. Arquivo `package.json` gerado e versionado.
- [x] ID 12 - Versionamento com Git
  > ✔️ Repositório inicializado com `git init`. `.gitignore` configurado (node_modules, .env). Commits realizados com mensagens descritivas.
- [x] ID 13 - README padronizado
  > ✔️ README com seções de apresentação, tecnologias com justificativas, design, checklist e manual de execução.
- [ ] ID 14 - Organização modular de arquivos

---

#### RA4 - Interatividade com JavaScript

- [ ] ID 15 - Manipulação do DOM
- [ ] ID 16 - Eventos e animações

---

#### RA5 - Requisições assíncronas

- [ ] ID 17 - Requisições para API Fake (JSON Server)
- [ ] ID 18 - Exibição dinâmica de dados
- [ ] ID 19 - Integração com APIs externas (Mercado Livre e Amazon)

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
# Abra o index.html no navegador ou use a extensão Live Server (VS Code)
```

---

## 🔑 Variáveis de Ambiente

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

> ⚠️ Nunca suba o arquivo `.env` para o repositório. Ele já está listado no `.gitignore`.
