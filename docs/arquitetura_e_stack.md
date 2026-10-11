# 🏗️ Arquitetura Técnica e Especificação da Stack
## Trail Tour Milagres — SPA React + Vite + Tailwind CSS

---

### 1. Visão Geral da Stack Tecnológica

| Camada | Tecnologia / Ferramenta | Versão / Padrão | Justificativa |
|---|---|---|---|
| **Runtime & Node** | Node.js | v24+ / npm v11+ | Ambiente moderno e de alta performance |
| **Framework UI** | React | 18 / 19 | Criação de interface baseada em componentes reativos, SPA limpa e declarativa |
| **Linguagem** | JavaScript (ESM) | ES2023+ | Leveza, produtividade e simplicidade sem sobrecarga de compilação excessiva |
| **Build & Bundler** | Vite | v5+ / v6+ | Build ultrarrápido, Hot Module Replacement (HMR) instantâneo e otimização de bundle |
| **Estilização** | Tailwind CSS | v3.4+ | Utility-first, zero CSS não utilizado no bundle, suporte nativo a `backdrop-blur` para glassmorphism |
| **Processador CSS** | PostCSS + Autoprefixer | Padrão Vite | Compatibilidade total com navegadores modernos (Safari/iOS, Chrome, Edge) |
| **Ícones** | Lucide React | v0.400+ | Pacote completo, personalizável, modular e com árvore sacudida (*tree-shaking*) |
| **Roteamento Interno** | Rolagem Suave SPA | Âncoras nativas + Smooth Scroll | Navegação fluida sem recarregamento de página |
| **Assets & Mídias** | Assets Estáticos Locais | `public/images/` | Carregamento rápido sem dependência de CDNs de terceiros propensas a instabilidade |

---

### 2. Estrutura de Diretórios do Projeto

```
Site Quadricilho Adventure/
├── assets/                          # Imagens brutas originais salvas
│   └── images/
├── docs/                            # Documentação técnica e estratégica
│   ├── informacoes_site_legado.md   # Dados históricos e contatos
│   ├── arquitetura_e_stack.md       # Este documento de arquitetura
│   └── guia_de_estilo_e_design.md   # Tokens de cores, glassmorphism e tipografia
├── public/                          # Arquivos estáticos públicos do Vite
│   ├── favicon.ico
│   └── images/                      # Fotos otimizadas utilizadas na aplicação
├── src/                             # Código-fonte da aplicação
│   ├── assets/                      # SVGs, logotipos e ilustrações
│   ├── components/                  # Componentes React modularizados
│   │   ├── common/                  # Componentes reutilizáveis básicos
│   │   │   ├── Button.jsx           # Botões primários, secundários e WhatsApp
│   │   │   ├── GlassCard.jsx        # Card com efeito glassmorphism
│   │   │   └── SectionHeader.jsx    # Títulos e subtítulos padronizados
│   │   ├── layout/                  # Componentes de casca/layout
│   │   │   ├── TopBar.jsx           # Header fixo com efeito Glassmorphism
│   │   │   ├── Footer.jsx           # Rodapé com dados institucionais
│   │   │   └── FloatingWhatsApp.jsx # Botão flutuante pulsante de WhatsApp
│   │   └── sections/                # Seções da Single Page Application
│   │       ├── HeroSection.jsx      # Seção principal de impacto
│   │       ├── TrustBadges.jsx      # Faixa de diferenciais rápidos
│   │       ├── RoutesSection.jsx    # Vitrine dos Roteiros (sem preços)
│   │       ├── RouteCard.jsx        # Card individual de cada roteiro
│   │       ├── SafetyFeatures.jsx   # Segurança, treinamento e guias
│   │       ├── HowItWorks.jsx       # Passo a passo de agendamento
│   │       ├── GallerySection.jsx   # Mosaico de fotos reais
│   │       ├── Testimonials.jsx     # Depoimentos de clientes
│   │       ├── FaqSection.jsx       # Perguntas frequentes (acordeão)
│   │       └── LocationSection.jsx  # Mapa e informações da base física
│   ├── data/                        # Dados estruturados desacoplados do JSX
│   │   ├── company.js               # Contatos, redes sociais, WhatsApp e endereço
│   │   ├── routesData.js            # Roteiros detalhados, paradas e fotos
│   │   ├── galleryData.js           # Lista das fotos reais com alt e títulos
│   │   └── faqData.js               # Perguntas e respostas do FAQ
│   ├── hooks/                       # Custom React Hooks
│   │   ├── useScrollPosition.js     # Monitoramento de scroll para ativar glassmorphism
│   │   └── useActiveSection.js      # Detecção da seção ativa no menu
│   ├── styles/                      # Estilos globais
│   │   └── index.css                # Diretivas Tailwind e classes utilitárias customizadas
│   ├── utils/                       # Utilitários e helpers
│   │   └── whatsappLink.js          # Gerador de links do WhatsApp com mensagem inteligente
│   ├── App.jsx                      # Componente principal que orquestra a SPA
│   └── main.jsx                     # Ponto de entrada do React
├── index.html                       # HTML principal com metatags SEO e fontes
├── package.json                     # Dependências e scripts do projeto
├── postcss.config.js                # Configuração do PostCSS
├── tailwind.config.js               # Configuração de temas, tokens e glassmorphism
├── vite.config.js                   # Configuração do bundler Vite
└── PRD.md                           # Documento de Requisitos de Produto
```

---

### 3. Padrão de Configuração do Tailwind CSS & Glassmorphism

O Tailwind CSS será configurado com classes utilitárias específicas para o efeito Glassmorphism:

```javascript
// Classes utilitárias padronizadas:
// Top Bar:
backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm
// Card de Vidro:
backdrop-blur-sm bg-white/80 border border-white/40 shadow-lg rounded-2xl
// Efeito Vidro Escuro / Hero:
backdrop-blur-md bg-black/40 border border-white/10 text-white
```

---

### 4. Padrões de Código e Boas Práticas

1. **Separação de Dados e Apresentação:** Todos os textos dos roteiros, perguntas do FAQ e dados de contato residem em arquivos `.js` dentro de `src/data/`, facilitando edições futuras sem mexer na lógica visual.
2. **Componentes Puros e Reutilizáveis:** Cada seção é um componente isolado, garantindo facilidade de teste e manutenção.
3. **Conversão WhatsApp Inteligente:** O helper `whatsappLink.js` gera URLs que já abrem o WhatsApp com a mensagem personalizada contendo o nome exato do roteiro clicado pelo visitante.
