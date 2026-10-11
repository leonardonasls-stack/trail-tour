# CHANGELOG — Trail Tour Milagres

Todas as alterações notáveis, adições de código, melhorias visuais e atualizações de arquitetura deste projeto serão documentadas neste arquivo.

O formato segue as convenções baseadas em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [1.1.0] - 2026-10-11
### 🚀 Fase 1: Fundação & Design System Concluída

#### Adicionado
- **`src/data/fleetData.js`**:
  - Catálogo de veículos estruturado de acordo com a skill `atv-fleet-display`.
  - Dados de modelos (ex: *Honda FourTrax 420cc 4x4* e *CFMoto CForce 520L Touring*), capacidade de passageiros (*Piloto + Garupa*), transmissão automática/semiautomática, tração e atributos de segurança.
- **`src/data/testimonialsData.js`**:
  - Dados estruturados de depoimentos de clientes com avaliações 5 estrelas e locais de origem.
- **`src/components/common/Button.jsx`**:
  - Componente de botão modular com variantes (`primary`, `secondary`, `outline`, `whatsapp`, `dark`) e tamanhos (`sm`, `md`, `lg`), com target de toque otimizado para mobile (>= 48px).
- **`src/components/common/GlassCard.jsx`**:
  - Container modular com efeito Glassmorphism suave (`light`, `dark` e `border`), padding configurável e suporte a hover 3D / elevação.
- **`src/components/common/Badge.jsx`**:
  - Pílulas semânticas com suporte a níveis de dificuldade da trilha (`facil`, `moderado`, `dificil`) e tipos de terreno, conforme especificado na skill `atv-route-visualizer`.
- **`src/components/common/SectionHeader.jsx`**:
  - Cabeçalho padronizado de seção com tag superior, título H2 em escala tipográfica e descrição responsiva.

#### Modificado
- **`package.json`**:
  - Correção do comando de build de `"vite"` para `"vite build"`, evitando que o processo ficasse em modo servidor dev interativo.
- **`tailwind.config.js`**:
  - Inclusão dos tokens semânticos de cores e backgrounds (`brand-emerald`, `brand-amber`, `surface-glass`, `surface-glass-dark`), sombras difusas e classes para usabilidade ao sol.
- **`src/styles/index.css`**:
  - Aprimoramento das classes utilitárias de glassmorphism (`glass-card`, `glass-card-dark`, `glass-nav`) e micro-interações.
- **`src/data/routesData.js`**:
  - Enriquecido com especificações detalhadas exigidas pela skill `atv-route-visualizer`: atributos de terreno (`Areia / Beira-mar`, `Coqueirais / Barro`, `Trilha / Mirante`), nível de dificuldade (`Fácil`, `Moderado`), paradas estratégicas e lista completa de equipamentos inclusos.
- **`src/data/faqData.js`**:
  - Expandido de acordo com a skill `atv-safety-faq` cobrindo regras legais de CNH, equipamentos obrigatórios, política de clima e chuva (lama garantida), e regras de carona para crianças.

---

## [1.0.0] - 2026-10-11
### 📦 Criação e Inicialização do Projeto

#### Adicionado
- Estrutura inicial do projeto com Vite, React 18 e Tailwind CSS.
- Especificações técnicas e diretrizes:
  - `PRD.md`: Requisitos de produto, persona, metas de conversão e regras de negócio.
  - `docs/arquitetura_e_stack.md`: Estrutura de pastas, stack e boas práticas.
  - `docs/guia_de_estilo_e_design.md`: Princípios visuais, tokens semânticos e glassmorphism.
  - `docs/informacoes_site_legado.md`: Histórico, contatos oficiais e inventário das 14 fotos reais.
- Módulos e skills de suporte em `.agent/skills/`:
  - `atv-hero-designer`: Diretrizes de Hero com estética de aventura.
  - `atv-route-visualizer`: Visualizador de rotas com badges de terreno e dificuldade.
  - `atv-fleet-display`: Grid da frota destacando capacidade e mecânica.
  - `atv-safety-faq`: Acordeão de segurança e quebra de objeções.
  - `atv-visual-auditor`: Inspeção heurística de contraste e UX.
  - `fastapi-booking-mock`: Especificação backend tipada com FastAPI e Pydantic v2.
- Assets locais otimizados em `public/images/`.
- Componentes iniciais de layout: `TopBar.jsx` e `FloatingWhatsApp.jsx`.
- Conexão e sincronização com o repositório remoto GitHub (`leonardonasls-stack/trail-tour`).
