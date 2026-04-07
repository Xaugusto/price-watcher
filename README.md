
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
  - **Bootstrap 5.3** *(Framework CSS escolhido — veja justificativa abaixo)*
  - JavaScript (ES6+)

- **Backend (simulado):**
  - JSON Server

- **APIs Públicas Integradas:**
  - **Mercado Livre API** *(veja justificativa abaixo)*
  - **Amazon Product Advertising API (PA API 5.0)** *(veja justificativa abaixo)*

- **Bibliotecas:**
  - Chart.js (para gráficos de histórico de preço)

---

## 🧠 Justificativa das Escolhas Técnicas

### 🎨 Framework CSS — Bootstrap 5.3

O **Bootstrap** foi escolhido como framework CSS após análise comparativa com alternativas como Tailwind CSS e Materialize CSS, com base nos seguintes critérios:

| Critério | Bootstrap 5.3 | Tailwind CSS | Materialize CSS |
|---|---|---|------|
| ⭐ Stars no GitHub | ~170k | ~82k | ~39k |
| 📦 Componentes prontos | ✅ Cards, Modais, Navbars, Badges | ❌ Utility-first | ✅ Limitados |
| 📱 Responsividade | ✅ Sistema de grid 12 colunas | ✅ | ✅ |
| 📅 Manutenção ativa | ✅ Atualizações frequentes | ✅ | ⚠️ Lento |
| 📖 Documentação | ✅ Extensa e em PT-BR | ✅ | ✅ |

**Por que Bootstrap para o Price Watcher?**
- O sistema de **grid responsivo de 12 colunas** garante que os cards de produtos se adaptem perfeitamente a dispositivos móveis e desktops, atendendo diretamente ao **ID 01 e ID 02**.
- Componentes prontos como **Cards**, **Modais**, **Badges de preço** e **Toasts de notificação** aceleram o desenvolvimento e reduzem código CSS customizado (**ID 04**).
- O Bootstrap 5 não depende de jQuery, tornando o projeto mais leve e moderno.
- Amplamente utilizado no mercado, demonstrando domínio de uma tecnologia relevante para recrutadores.

---

### 🔌 APIs Públicas — Mercado Livre & Amazon

#### 🛒 Mercado Livre API
- **Documentação:** [developers.mercadolibre.com.br](https://developers.mercadolibre.com.br)
- **Autenticação:** OAuth 2.0 (token de acesso gratuito)
- **Endpoint principal utilizado:**
  ```
  GET https://api.mercadolibre.com/sites/MLB/search?q={produto}
  ```

**Por que o Mercado Livre?**
> O Mercado Livre é a maior plataforma de e-commerce da América Latina, com milhões de produtos cadastrados. Sua API pública é gratuita, bem documentada, retorna dados em JSON estruturado com preço, histórico, avaliações e URLs de produtos — exatamente o que o Price Watcher precisa para monitorar e comparar preços em tempo real. A API atende diretamente aos **IDs 17, 18 e 19** do checklist.

---

#### 📦 Amazon Product Advertising API (PA API 5.0)
- **Documentação:** [webservices.amazon.com/paapi5](https://webservices.amazon.com/paapi5/documentation/)
- **Autenticação:** AWS Signature v4 (requer cadastro no Amazon Associates)
- **Operação principal utilizada:** `SearchItems` e `GetItems`

**Por que a Amazon?**
> A Amazon é referência global em e-commerce e possui um dos maiores catálogos de produtos do mundo. Integrar sua API permite comparar preços entre o mercado nacional (Mercado Livre) e internacional (Amazon), enriquecendo a funcionalidade de **Comparação entre Lojas** do sistema. Além disso, os dados retornados incluem preço, variações, imagens de alta qualidade e URL do produto — agregando valor real à experiência do usuário e demonstrando capacidade de consumir APIs com autenticação mais robusta (AWS Signature v4).

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

- [ ] ID 01 - Prototipar interfaces responsivas (mobile e desktop)
- [ ] ID 02 - Implementar layout com Bootstrap 5
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

- [ ] ID 11 - Uso de Node.js e NPM
- [ ] ID 12 - Versionamento com Git
- [ ] ID 13 - README padronizado
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

**Iniciar o JSON Server (API Fake):**
```bash
npx json-server --watch db.json --port 3001
```

**Abrir o projeto:**
```bash
# Abra o arquivo index.html no navegador ou use Live Server (VS Code)
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
