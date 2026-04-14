    # SDD - Software Design Document
    ## PriceWatcher - Sistema de Monitoramento Inteligente de Preços

    **Versão:** 1.0  
    **Data:** Abril 2026  
    **Status:** Design  

    ---

    ## 1. Introdução

    ### 1.1 Propósito
    O presente documento descreve a arquitetura, design de sistema e especificações técnicas do **PriceWatcher**, uma aplicação web para monitoramento inteligente de preços de produtos em e-commerces.

    ### 1.2 Escopo
    - Aplicação web responsiva (Desktop, Tablet, Mobile)
    - Sistema de cadastro e autenticação de usuários
    - Monitoramento contínuo de preços de produtos
    - Dashboard com análise e alertas
    - Relatórios de economia e histórico de preços

    ### 1.3 Público-alvo
    - Consumidores que desejam economizar em compras online
    - Usuários interessados em histórico de preços e tendências

    ---

    ## 2. Visão Arquitetural

    ### 2.1 Arquitetura Geral

    ```
    ┌─────────────────────────────────────────────────────┐
    │              FRONTEND (HTML/CSS/JS)                 │
    │  ├─ Landing Page (index.html)                       │
    │  ├─ Login (login.html)                              │
    │  ├─ Dashboard (dashboard.html)                      │
    │  ├─ Cadastro (cadastrar_produto.html)               │
    │  └─ Assets (css, img, js)                           │
    ├─────────────────────────────────────────────────────┤
    │         MIDDLEWARE/LOCAL STORAGE                    │
    │  ├─ Armazenamento de dados locais                   │
    │  ├─ Sincronização com servidor                      │
    │  └─ Cache de produtos                               │
    ├─────────────────────────────────────────────────────┤
    │         BACKEND (API - Futuro)                      │
    │  ├─ Autenticação & Autorização                      │
    │  ├─ Gerenciamento de Produtos                       │
    │  ├─ Processamento de Preços                         │
    │  ├─ Web Scraping / Integração com APIs               │
    │  └─ Base de Dados                                   │
    └─────────────────────────────────────────────────────┘
    ```

    ### 2.2 Stack Tecnológico

    **Frontend:**
    - HTML5 (estrutura semântica)
    - CSS3 (design responsivo)
    - Bootstrap 5.3.3 (framework CSS)
    - JavaScript Vanilla (interatividade)
    - Material Design Icons (ícones)

    **Fontes:**
    - Inter (tipografia principal - 300, 400, 600, 700, 800)
    - Material Symbols (ícones)
    - Bootstrap Icons (ícones alternativos)

    **Futuro Backend:**
    - Node.js/Express ou Python/Flask
    - PostgreSQL ou MongoDB
    - Redis (cache)
    - Puppeteer/Selenium (web scraping)

    ---

    ## 3. Componentes Principais

    ### 3.1 Páginas da Aplicação

    #### 3.1.1 Landing Page / Index (index.html)
    **Objetivo:** Apresentar a aplicação e converter visitantes em usuários

    **Componentes:**
    - Hero section com call-to-action
    - Seção de features (benefícios do app)
    - Pricing (se aplicável)
    - Testimonials
    - Footer com links e contato

    **Fluxo:**
    ```
    Visitante → Lê sobre PriceWatcher → Clica "Começar" → Login/SignUp
    ```

    ---

    #### 3.1.2 Login (login.html)
    **Objetivo:** Autenticar usuários existentes

    **Componentes:**
    - Form com email e senha
    - Checkbox "Lembrar-me"
    - Link "Esqueceu a senha?"
    - Link para criar conta
    - Face ID / Autenticação Biométrica (futuro)

    **Validações:**
    - Email válido
    - Senha mínimo 8 caracteres
    - Feedback visual de erros

    **Fluxo:**
    ```
    Email/Senha válidos → Dashboard
    Email/Senha inválidos → Mensagem de erro
    ```

    ---

    #### 3.1.3 Dashboard (dashboard.html)
    **Objetivo:** Visão central dos produtos monitorados e alertas

    **Componentes Principais:**

    **3.1.3.1 Navbar**
    - Logo PriceWatcher
    - Links: Meus Produtos, Alertas, Relatório
    - Perfil do usuário
    - Logout

    **3.1.3.2 Widget de Estatísticas (Hero Stats)**
    ```
    ┌─────────────────────────┐
    │ Total Economizado: R$X  │
    │ Produtos: N             │
    │ Alertas: M              │
    │ Preço Mais Baixo: R$Y   │
    └─────────────────────────┘
    ```

    **3.1.3.3 Seção de Produtos (Product Grid)**
    ```
    ┌────────────────────────────────────────┐
    │  [Produto Card]  [Produto Card]        │
    │  ├─ Imagem do produto                  │
    │  ├─ Nome                               │
    │  ├─ Preço Atual | Preço Original       │
    │  ├─ % Desconto / Economia              │
    │  ├─ Histórico de Preço (mini chart)    │
    │  ├─ Data da Última Alteração           │
    │  └─ Botões: Remover, Ver Detalhes      │
    └────────────────────────────────────────┘
    ```

    **3.1.3.4 FAB (Floating Action Button)**
    - Botão fixo no canto inferior direito
    - Ícone: + ou adicionar
    - Ação: Dirigir para cadastro de novo produto

    **3.1.3.5 Filtros e Busca**
    - Barra de busca por nome de produto
    - Filtro por categoria
    - Ordenar por: Preço, Economia, Data
    - Ordenar: Crescente/Decrescente

    ---

    #### 3.1.4 Cadastro de Produto (cadastrar_produto.html)
    **Objetivo:** Adicionar novo produto ao monitoramento

    **Componentes:**
    ```
    ┌─────────────────────────────────┐
    │ Formulário de Cadastro          │
    ├─────────────────────────────────┤
    │ Nome do Produto *                │
    │ URL do Produto *                 │
    │ Preço Alvo (meta) *              │
    │ Categoria [Dropdown]             │
    │ Lojista [Dropdown]               │
    │ Notificações [Radio/Checkbox]    │
    │   ☐ Email                        │
    │   ☐ SMS                          │
    │   ☐ Push Notification            │
    │ Upload de Imagem                 │
    │                                  │
    │ [Cancelar] [Cadastrar Produto]   │
    └─────────────────────────────────┘
    ```

    **Validações:**
    - URL válida
    - Preço alvo > 0
    - Nome preenchido
    - Pelo menos uma notificação selecionada

    **Fluxo:**
    ```
    Preenchimento → Validação → Salvar LocalStorage → Dashboard
    ```

    ---

    ### 3.2 Sistema de Dados

    #### 3.2.1 Estrutura de Produto
    ```json
    {
    "id": "uuid-v4",
    "nome": "iPhone 15 Pro",
    "url": "https://www.site.com/produto/123",
    "loja": "Amazon",
    "categoria": "Eletrônicos",
    "precoAtual": 6499.90,
    "precoOriginal": 7999.00,
    "precoAlvo": 5999.00,
    "imagem": "base64-ou-url",
    "dataCadastro": "2026-04-13T10:30:00Z",
    "dataUltimaAtualizacao": "2026-04-13T15:45:00Z",
    "historicoPrecos": [
        {
        "preco": 7999.00,
        "data": "2026-04-01T00:00:00Z"
        },
        {
        "preco": 7500.00,
        "data": "2026-04-05T00:00:00Z"
        },
        {
        "preco": 6499.90,
        "data": "2026-04-13T10:30:00Z"
        }
    ],
    "notificacoes": {
        "email": true,
        "sms": false,
        "push": true
    },
    "economiaTotal": 1500.10,
    "precoAlcancanado": false,
    "ativo": true
    }
    ```

    #### 3.2.2 Estrutura de Usuário
    ```json
    {
    "id": "uuid-v4",
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "hashed-password",
    "dataCadastro": "2026-04-10T08:00:00Z",
    "ultimoAcesso": "2026-04-13T15:45:00Z",
    "preferencias": {
        "moeda": "BRL",
        "idioma": "pt-BR",
        "notificacoesAtivas": true,
        "tema": "light"
    },
    "produtos": ["uuid-1", "uuid-2", "uuid-3"],
    "economiaTotal": 5420.50
    }
    ```

    ---

    ## 4. Design Visual

    ### 4.1 Paleta de Cores

    | Elemento | Cor | Código | Uso |
    |----------|-----|--------|-----|
    | Primária | Azul | #004ac6 | Botões, links, CTA |
    | Primária Light | Azul Claro | #2563eb | Gradientes, hover |
    | Verde Success | Verde | #006242 | Preço atingido, sucesso |
    | Verde Light | Verde Claro | #bdffdb | Background badges |
    | Surface | Branco | #ffffff | Backgrounds de cards |
    | Surface Alt | Cinza Claro | #f7f9fb | Background geral |
    | Texto Primário | Cinza Escuro | #191c1e | Textos principais |
    | Texto Secundário | Cinza | #434655 | Textos secundários |
    | Desabilitado | Cinza Médio | #737686 | Elementos desabilitados |

    ### 4.2 Tipografia

    | Elemento | Font | Peso | Tamanho |
    |----------|------|------|---------|
    | Body | Inter | 400 | 1rem |
    | Buttons | Inter | 600 | 1rem |
    | Headings H1 | Inter | 800 | 2.5-4.5rem |
    | Headings H2-H6 | Inter | 700/600 | 1.5-2rem |
    | Labels | Inter | 700 | 0.75rem |
    | Small Text | Inter | 400 | 0.875rem |

    ### 4.3 Componentes de UI

    #### Buttons
    - **Primary Button**: Azul com sombra, hover translateY(-1px)
    - **Secondary Button**: Cinza, border nenhuma
    - **Ghost Button**: Apenas texto, sem background

    #### Cards
    - Border-radius: 0.75rem - 1.5rem
    - Sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.05)
    - Padding: 1.25rem - 2rem
    - Background: Branco ou cinza claro

    #### Input Fields
    - Border-radius: 0.5rem
    - Padding: 0.8rem
    - Border: 1px solid #e0e0e0
    - Focus: Border azul primária

    #### Icons
    - Material Symbols (24px padrão)
    - Bootstrap Icons (como alternativa)
    - Variação FILL: 0, wght: 400

    ---

    ## 5. Fluxos de Interação

    ### 5.1 Fluxo de Cadastro
    ```
    Landing Page
        ↓
    Clicar "Começar"
        ↓
    Página de Login
        ↓
    [Novo Usuário?]
        ↓
    Formulário de Cadastro
        ├─ Nome completo
        ├─ Email
        ├─ Senha (min 8 caracteres)
        ├─ Confirmar senha
        └─ Aceitar termos
        ↓
    Validação Backend
        ├─ Email único?
        ├─ Senha forte?
        └─ Termos aceitos?
        ↓
    Criar conta + Login automático
        ↓
    Dashboard (vazio/onboarding)
    ```

    ### 5.2 Fluxo de Monitoramento
    ```
    Dashboard
        ↓
    Clique FAB "+"
        ↓
    Formulário Cadastro Produto
        ├─ Nome
        ├─ URL
        ├─ Preço Alvo
        ├─ Categoria
        ├─ Notificações
        └─ Validações
        ↓
    Salvar LocalStorage (temporário)
        ↓
    API Backend (futuro)
        ├─ Valida URL
        ├─ Extrai preço atual (web scraping)
        ├─ Armazena produto
        └─ Inicia monitoramento
        ↓
    Dashboard atualizado com novo produto
        ↓
    Produto aparece no grid
    ```

    ### 5.3 Fluxo de Alerta
    ```
    Backend (Daemon/Cron Job)
        ↓
    Verifica preços a cada 6-12 horas
        ↓
    Para cada produto:
        ├─ Acessa URL
        ├─ Extrai preço atual
        ├─ Compara com preço anterior
        └─ Avalia se atingiu meta
        ↓
    Se preço caiu OR meta atingida:
        ├─ Atualiza histórico de preços
        ├─ Calcula economia
        ├─ Envia notificação (Email/SMS/Push)
        ├─ Atualiza dashboard em tempo real (WebSocket)
        └─ Card do produto marca como "Alerta Ativo"
        ↓
    Usuário recebe notificação
        ↓
    Clica em "Ver" → Dashboard destaca produto
    ```

    ---

    ## 6. Requisitos Funcionais (MVP)

    | ID | Requisito | Prioridade | Status |
    |----|-----------|-----------|--------|
    | RF-001 | Usuário pode criar conta com email/senha | Alta | ✓ |
    | RF-002 | Usuário pode fazer login | Alta | ✓ |
    | RF-003 | Usuário pode adicionar produto com URL | Alta | ⏳ |
    | RF-004 | Sistema extrai preço atual do produto | Alta | ⏳ |
    | RF-005 | Sistema monitora preço continuamente | Alta | ⏳ |
    | RF-006 | Alerta quando preço atinge meta | Alta | ⏳ |
    | RF-007 | Dashboard mostra economia total | Média | ⏳ |
    | RF-008 | Histórico de preços em gráfico | Média | ⏳ |
    | RF-009 | Remover produto do monitoramento | Média | ⏳ |
    | RF-010 | Filtrar/buscar produtos | Média | ⏳ |
    | RF-011 | Notificações por email/SMS/Push | Média | ⏳ |
    | RF-012 | Relatório de economia | Baixa | ⏳ |

    ---

    ## 7. Requisitos Não-Funcionais

    | Requisito | Especificação |
    |-----------|--------------|
    | **Performance** | Carregamento < 2s, API Response < 500ms |
    | **Responsividade** | Mobile First, tablets, desktop (320px+) |
    | **Segurança** | HTTPS, senha hasheada (bcrypt), JWT tokens |
    | **Disponibilidade** | 99.5% uptime (SLA) |
    | **Escalabilidade** | Suporte a 10k+ usuários simultâneos |
    | **Compatibilidade** | Chrome, Firefox, Safari, Edge (últimas 2 versões) |
    | **Acessibilidade** | WCAG 2.1 AA (contraste, keyboard navigation) |
    | **Manutenibilidade** | Código bem documentado, padrões consistentes |

    ---

    ## 8. Segurança

    ### 8.1 Autenticação
    - Senha mínimo 8 caracteres, complexidade recomendada
    - Hash com bcrypt (10+ rounds)
    - JWT tokens com expiração 24h
    - Refresh tokens armazenados em httpOnly cookies

    ### 8.2 Autorização
    - Token JWT valida propriedade de recursos
    - Usuário só pode acessar seus próprios produtos
    - Admin pode acessar log de erros

    ### 8.3 Proteção de Dados
    - HTTPS em produção (TLS 1.2+)
    - Dados sensíveis (senhas) nunca em logs
    - Rate limiting em endpoints (100 req/min por IP)
    - CORS configurado para domínios específicos

    ### 8.4 Proteção contra Ataques
    - CSRF tokens em forms
    - SQL Injection: Prepared statements / ORMs
    - XSS: Sanitização de inputs, CSP headers
    - DDoS: Rate limiting, WAF (Cloudflare)

    ---

    ## 9. Instalação e Deployment

    ### 9.1 Ambiente de Desenvolvimento

    **Requerimentos:**
    - Node.js 18+ / Python 3.10+
    - npm ou yarn
    - Git
    - Editor: VS Code

    **Setup:**
    ```bash
    git clone https://github.com/seu-usuario/pricewatcher.git
    cd pricewatcher
    npm install
    npm run dev
    ```

    **Acesso:** `http://localhost:3000`

    ### 9.2 Ambiente de Produção

    **Deploy:**
    - Frontend: Vercel, Netlify ou GitHub Pages (estático)
    - Backend: Heroku, AWS EC2, Digital Ocean (Node/Python)
    - Database: PostgreSQL (AWS RDS ou Heroku)
    - Cache: Redis (AWS ElastiCache)

    **CI/CD:**
    ```
    Git Push → GitHub Actions → Tests → Build → Deploy
    ```

    ---

    ## 10. Roadmap de Desenvolvimento

    ### Fase 1 (MVP - Semanas 1-4)
    - ✓ Landing page e estrutura base
    - ⏳ Login/cadastro funcional
    - ⏳ Cadastro manual de produtos
    - ⏳ Dashboard básico
    - ⏳ LocalStorage para persistência

    ### Fase 2 (Semanas 5-8)
    - Backend Node/Express
    - Database PostgreSQL
    - Web scraping integrado
    - Monitoramento automático
    - Email notifications

    ### Fase 3 (Semanas 9-12)
    - Gráficos de histórico (Chart.js)
    - Relatórios de economia
    - SMS notifications (Twilio)
    - Push notifications
    - Admin dashboard

    ### Fase 4 (Semanas 13+)
    - App mobile (React Native)
    - Integração com plataformas (Amazon, Mercado Livre)
    - Machine Learning para previsão de preços
    - Premium features (comparação multi-loja)

    ---

    ## 11. Testes

    ### 11.1 Testes Unitários
    - Jest para JavaScript
    - Cobertura > 80%
    - Testes de validação de inputs

    ### 11.2 Testes de Integração
    - Testes de fluxos completos
    - Integração com API
    - Teste de autenticação

    ### 11.3 Testes E2E
    - Cypress ou Selenium
    - Fluxos críticos: cadastro, login, adicionar produto
    - Cross-browser testing

    ### 11.4 Testes de Performance
    - Lighthouse (PageSpeed)
    - Web Vitals (CLS, LCP, FID)
    - Load testing (k6 ou Apache JMeter)

    ---

    ## 12. Monitoramento e Manutenção

    ### 12.1 Métricas
    - Uptime (99.5%+)
    - Response time médio
    - Taxa de erro (< 1%)
    - Usuários ativos
    - Economia total rastreada

    ### 12.2 Logging
    - Logs estruturados em JSON
    - ELK Stack (Elasticsearch, Logstash, Kibana)
    - Alertas em erros críticos

    ### 12.3 Backup
    - Database: Backup diário + semanal
    - Retenção: 30 dias locais + 1 ano em cold storage
    - RTO: 4 horas
    - RPO: 1 hora

    ---

    ## 13. Anexos

    ### 13.1 Glossário
    - **SDD**: Software Design Document
    - **MVP**: Minimum Viable Product
    - **API**: Application Programming Interface
    - **JWT**: JSON Web Token
    - **CORS**: Cross-Origin Resource Sharing
    - **TLS**: Transport Layer Security
    - **RTO**: Recovery Time Objective
    - **RPO**: Recovery Point Objective

    ### 13.2 Referências
    - [Material Design 3](https://m3.material.io/)
    - [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
    - [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
    - [OWASP Security Checklists](https://owasp.org/)

    ### 13.3 Contatos
    - **Product Owner**: [Email]
    - **Tech Lead**: [Email]
    - **Designer**: [Email]
    - **QA Lead**: [Email]

    ---

    **Versão:** 1.0  
    **Última Atualização:** Abril 2026  
    **Status:** ✅ Aprovado para Desenvolvimento
