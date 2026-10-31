# CHANGELOG — Trail Tour Milagres

Todas as alterações notáveis, adições de código, melhorias visuais e atualizações de arquitetura deste projeto estão documentadas neste arquivo com seus respectivos hashes de commit do Git.

O formato segue as convenções baseadas em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [1.7.0] - 2026-10-30
### 🎨 Redesign do FAQ, Alternância de Temas, TopBar Adaptativa, Acessibilidade WCAG AA & Conformidade LGPD

#### Adicionado
- **Auditoria Completa de LGPD (`.lgpd/`) & Política de Privacidade e Cookies (`src/components/layout/CookieConsent.jsx`)**:
  - Estruturação dos artefatos vivos de governança em `.lgpd/` (`STATUS.md`, `discovery.md`, `gaps.md`, `data-map.md`, `legal-basis.md` e `policies/privacy-policy-v1.0-draft.md`) fundamentados na Lei nº 13.709/2018 (LGPD) e Resoluções da ANPD (nº 2/2022, nº 15/2024, nº 18/2024 e nº 19/2024).
  - **Banner de Consentimento Granular (*Opt-in* real — Art. 8º LGPD)**: Sem caixas pré-marcadas para cookies analíticos/marketing, botões de igual destaque visual (*Aceitar todos*, *Rejeitar não essenciais* e *Personalizar*) e ledger versionado *append-only* persistido em `localStorage` (`trail_tour_lgpd_consent_v1`).
  - **Modal Interativo de Política de Privacidade e Cookies (Art. 9º e Art. 18 LGPD)**: Resumo rápido (*TL;DR*), tabela de bases legais e cookies, regras para menores acompanhados (Art. 14, § 1º) e atalhos permanentes no `Footer.jsx` para consulta e revogação a 1 clique (Art. 8º, § 5º).
- **Nova Seção Dedicada para Famílias (`src/components/sections/FamilySection.jsx`)**:
  - Desmembrado o antigo card interno de segurança em uma seção completa e independente da página (*"Passeio Apto Para Toda Família — Pilote com tranquilidade: você no comando, nós no apoio"*), com pílulas de credenciais, CTA próprio e fotografia em destaque.
- **Atalho Oficial do Instagram na `TopBar.jsx`**:
  - Adicionado botão com o ícone oficial em gradiente do Instagram na barra superior (desktop e mobile) direcionando para `@quadrimilagresadventure`.
- **Assinatura de Desenvolvimento no Rodapé (`src/components/layout/Footer.jsx` & `public/images/logo_leo_nascimento.svg`)**:
  - Adicionado crédito *"Desenvolvido por"* acompanhado do logotipo vetorial `[Leo nascimento] desenvolvimento de sistemas` com link direto para o portfólio oficial (`https://leonascimentodev-sooty.vercel.app/`).
- **Configuração para Deploy em Produção na Hostinger (`public/.htaccess`, `public/robots.txt`, `public/sitemap.xml` & `vite.config.js`)**:
  - Criado `.htaccess` otimizado para servidores Apache/LiteSpeed da Hostinger com redirecionamento HTTPS, fallback de rotas SPA, compressão GZIP/Deflate, cache de longa duração para assets estáticos e cabeçalhos de segurança (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).
  - Adicionados `robots.txt` e `sitemap.xml` para indexação no Google Search Console e configurado code-splitting (`vendor` e `icons`) no `vite.config.js`.

#### Modificado
- **Novo Layout Editorial em 2 Colunas no FAQ (`src/components/sections/FaqSection.jsx`)**:
  - Coluna esquerda com chamada empilhada (*"Antes de ir, tire suas dúvidas."*) nas cores da marca, subtítulo e fotografia panorâmica do pôr do sol; coluna direita com acordeão minimalista e barra inferior horizontal de conversão (*"Seu próximo passeio começa aqui."* + botão *"Conversar com a equipe ↗"*).
- **Ritmo Visual Alternado entre Todas as Seções (Branco vs. Carvão Escuro `#161616` + Brilho `#FF7900/10`)**:
  - Padronizada a alternância estrita entre seções claras (`bg-white`) e escuras (`bg-[#161616]` com brilho radial difuso `bg-[#FF7900]/10`) do Hero até o Rodapé (`RoutesSection`, `FleetSection`, `SafetyFeatures`, `FamilySection`, `HowItWorks`, `GallerySection`, `Testimonials`, `FaqSection`, `LocationSection` e `Footer`).
- **TopBar Fixa e Adaptativa por Seção (`src/components/layout/TopBar.jsx`)**:
  - Integrada sem borda divisória no topo do Hero (`bg-transparent`) e com detecção dinâmica em tempo real da seção sob o cabeçalho durante a rolagem, alternando automaticamente entre tema escuro (`bg-[#161616]/85`) e tema claro (`bg-white/85`).
- **Botão Flutuante Oficial do WhatsApp (`src/components/layout/FloatingWhatsApp.jsx`)**:
  - Atualizado com o SVG oficial do WhatsApp e rótulo **"Fale conosco"** visível em todas as telas.
- **Correção das 38 Ocorrências de Contraste no `@axe-core/cli` (WCAG 2.1 AA)**:
  - Ajustados os contrastes em `Button.jsx`, `SectionHeader.jsx`, `TopBar.jsx`, `SafetyFeatures.jsx`, `FamilySection.jsx`, `HowItWorks.jsx`, `Testimonials.jsx`, `FaqSection.jsx`, `LocationSection.jsx` e `FloatingWhatsApp.jsx` (texto `text-slate-950` sobre `#FF7900` com razão **6.88:1**, destaques `#C24E00` sobre branco com **4.56:1**, e verde `#15803D` com **5.02:1**).

---

## [1.6.0] - 2026-10-21
### Commit: `c6c3192` — *Remoção de pasta dispensável e correção de visual e layout*

#### Removido
- **Pasta Legada de Identidade Visual (`Quadriciclo_Milagres_Adventure/`)**:
  - Removidos 58 arquivos redundantes/pesados que não eram mais referenciados pelo app (logos, manuais, bordados, mockups e assets gráficos pesados), mantendo o repositório leve e otimizado.

#### Modificado
- **Refinamento Visual, Contraste & Consistência de Escala de Cores (`zinc`)**:
  - **`HeroSection.jsx`**: Substituído `text-slate-300` por `text-zinc-200`/`text-zinc-300` para melhor legibilidade no subtítulo e legenda sobre o background escuro.
  - **`FleetSection.jsx`**: Unificada a paleta técnica para `text-zinc-300`, `text-zinc-200` e `text-zinc-100` nos cards de especificações e features dos veículos.
  - **`RouteCard.jsx`**: Elevado o contraste do badge de duração com `text-zinc-100`.
  - **`HowItWorks.jsx`**: Melhorada a leitura das etapas com `text-zinc-100`.
  - **`GallerySection.jsx` & `LocationSection.jsx`**: Ajustadas legendas e descrições para `text-zinc-200`.
  - **`Footer.jsx`**: Alinhadas as classes de texto de rodapé para `text-zinc-400`.

---

## [1.5.0] - 2026-10-11
### ♿ Acessibilidade WCAG 2 AA & Correções Heurísticas Concluídas (0 Violações no axe-core)

#### Modificado
- **Conformidade de Contraste Cromático (WCAG AA - ratio >= 4.5:1)**:
  - **`RouteCard.jsx`**: Elevado o contraste dos textos de paradas, itens inclusos e notas de disponibilidade para `text-slate-800` e `text-slate-600`.
  - **`Button.jsx`**: Ajustado o fundo das variantes primárias e WhatsApp para esmeralda escuro (`bg-emerald-700` e `bg-emerald-800`) garantindo legibilidade nítida do texto branco.
  - **`SectionHeader.jsx`**: Aumentado o contraste das pílulas de destaque em cada cabeçalho de seção (`bg-emerald-800` com texto branco e `bg-amber-500` com texto escuro).
  - **`SafetyFeatures.jsx`**: Aplicado fundo `bg-slate-950` e texto `text-zinc-100` no banner de grupo familiar, eliminando transparências que geravam contraste insuficiente.
  - **`FloatingWhatsApp.jsx`**: Substituído o fundo para `#075E54` (verde escuro oficial com contraste superior a 5.0:1 com texto branco).
  - **`Footer.jsx`**: Elevado o contraste de endereços e direitos autorais para `text-slate-300`.
- **Árvore Semântica de Cabeçalhos (`heading-order`)**:
  - Eliminados pulos de nível (`H1` -> `H2` -> `H3` consistentes). Subtítulos auxiliares em `TrustBadges` e legendas fotográficas foram convertidos para elementos semânticos de parágrafo estilizados com tipografia robusta, sem violar a árvore de acessibilidade.
- **Auditoria Automatizada via `axe-core 4.13.0`**:
  - Teste executado em `http://localhost:5180/`: **0 violations found!** (33 problemas iniciais reduzidos a zero).

---

## [1.4.0] - 2026-10-11
### Commit: `c2c1ca3` — *Auditoria Visual Heurística & Otimização Completa de SEO Local*
#### Fases 5 e 6 Concluídas

#### Adicionado
- **SEO & Metadados Avançados em `index.html`**:
  - Tags Open Graph completas (`og:title`, `og:description`, `og:image`, `og:locale`, `og:site_name`) garantindo preview rico e atrativo em compartilhamentos de links no WhatsApp, Facebook e Instagram.
  - Cartões do Twitter (`twitter:card`, `twitter:image`).
  - Metatags de indexação geográfica, robôs e palavras-chave locais de São Miguel dos Milagres / Rota Ecológica dos Corais.
  - Dados estruturados Schema.org em formato JSON-LD com os tipos `LocalBusiness` e `TouristAttraction`, incluindo geolocalização exata, telefone formatado em E.164, horários e endereço da base física.

#### Modificado
- **Auditoria Visual & Acessibilidade** (via `atv-visual-auditor`):
  - Refinamento de contraste nas tags do Hero para garantir legibilidade superior sob iluminação solar intensa (`text-zinc-100`).
  - Otimização do fluxo responsivo dos micro-badges em telas menores (`grid-cols-1 sm:grid-cols-3` com encapsulamento de fundo translúcido no mobile).
  - Verificação de ausência de poluição visual ao redor dos botões de Call-to-Action com áreas mínimas de toque >= 48px.
- **Validação de Build**:
  - Compilação do bundle final de produção gerada com sucesso via Vite em 5.57s.

---

## [1.3.0] - 2026-10-11
### Commit: `469d574` — *Segurança Aprofundada & Fluxo de Agendamento Passo a Passo*
#### Fase 4 Concluída

#### Adicionado
- **`src/components/sections/SafetyFeatures.jsx`**:
  - Bloco visual focado na mitigação de risco e valorização da segurança do turista.
  - 4 pilares: Equipamentos certificados (capacetes higienizados), guias nativos credenciados, treinamento com test-drive inicial na pista da base e manutenção mecânica preventiva diária.
  - Banner em destaque com imagem real de turistas equipados com capacete e chamada para passeio familiar com velocidade assistida e segura.
- **`src/components/sections/HowItWorks.jsx`**:
  - Seção passo a passo com design escuro de alto contraste (`slate-900` e acentos em esmeralda/dourado) detalhando as 3 etapas de conversão sem burocracia:
    1. Escolha do Roteiro;
    2. Consulta de Vagas no WhatsApp;
    3. Chegada na Base com Test-Drive & Saída na Trilha.
  - Botão de ação direta para iniciar o agendamento no WhatsApp.

#### Modificado
- **`src/App.jsx`**:
  - Incorporação sequencial de `SafetyFeatures` e `HowItWorks` entre a apresentação da frota e a galeria de fotos, completando 100% da arquitetura prevista no PRD.
- **Validação de Build**:
  - Compilação realizada com sucesso via `npm run build` em 5.46s sem nenhum erro.

---

## [1.2.0] - 2026-10-11
### Commit: `78a5c11` — *Construção Completa da Interface & Skills Integradas*
#### Fases 2 e 3 Concluídas

#### Adicionado
- **`src/components/sections/HeroSection.jsx`** (via `atv-hero-designer`):
  - Hero com alto contraste (`slate-950`), overlay tático, tipografia imersiva e agressiva em caixa alta, badges de destaque, chamada de ação dupla com área de toque >= 48px e card flutuante em glassmorphism.
- **`src/components/sections/TrustBadges.jsx`**:
  - Grid de 4 cartões de credibilidade em glassmorphism com ícones coloridos para segurança, guias nativos, test-drive e fotos inclusas.
- **`src/components/sections/RoutesSection.jsx` & `RouteCard.jsx`** (via `atv-route-visualizer`):
  - Apresentação completa dos 3 circuitos turísticos sem exibição de preços, contendo badges de tempo, nível de dificuldade semântico (`Fácil`, `Moderado`), terreno da trilha, lista de paradas fotográficas, itens inclusos e CTA personalizado via WhatsApp.
- **`src/components/sections/FleetSection.jsx`** (via `atv-fleet-display`):
  - Vitrine técnica de quadriciclos enfatizando motorização (420cc e 500cc), capacidade piloto/garupa, transmissão automática/semiautomática, tração 4x4 e CTA específico por modelo.
- **`src/components/sections/GallerySection.jsx`**:
  - Mosaico fluido com as 14 fotos reais de alta definição captadas nos passeios em São Miguel dos Milagres, com cards expansivos e chamada para o Instagram oficial.
- **`src/components/sections/Testimonials.jsx`**:
  - Prova social com avaliações 5 estrelas de turistas reais, cidades de origem e roteiros realizados.
- **`src/components/sections/FaqSection.jsx`** (via `atv-safety-faq`):
  - Acordeão interativo mitigando atritos de conversão: regras legais de CNH, participação de crianças na garupa, instrução para iniciantes e política de chuva/lama.
- **`src/components/sections/LocationSection.jsx`**:
  - Detalhamento da base na Rua Prefeito Augusto de Barros Falcão, horários de saída, rota para o Google Maps e ponto de encontro.
- **`src/components/layout/Footer.jsx`**:
  - Rodapé institucional completo com mapa de links, dados de contato e direitos reservados.

#### Modificado
- **`src/App.jsx`**:
  - Orquestração completa de todas as 8 seções da Single Page Application com rolagem suave e navegação contínua.
- **`src/components/layout/TopBar.jsx`**:
  - Atualização dos links de navegação para englobar todas as novas seções (`Início`, `Roteiros`, `Frota`, `Galeria`, `Dúvidas`, `Localização`).
- **Validação de Build**:
  - Compilação do bundle de produção gerada com sucesso via Vite em 7.34s.

---

## [1.1.0] - 2026-10-11
### Commit: `1e5b636` — *Criação de design*
#### Fase 1: Fundação & Design System Concluída

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
### Commit: `87d75ed` — *Criação do site trail Tour Milagres*
#### Inicialização do Projeto

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
