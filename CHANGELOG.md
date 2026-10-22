# CHANGELOG — Trail Tour Milagres

Todas as alterações notáveis, adições de código, melhorias visuais e atualizações de arquitetura deste projeto estão documentadas neste arquivo com seus respectivos hashes de commit do Git.

O formato segue as convenções baseadas em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

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
