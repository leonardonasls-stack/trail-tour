# 🌴 Trail Tour Milagres (Quadriciclo Milagres Adventure) — Website Oficial

> Single Page Application (SPA) moderna, imersiva e de alta conversão para promoção e reserva de passeios guiados de quadriciclo (ATV) em **São Miguel dos Milagres / Rota Ecológica dos Corais (AL)**.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WCAG AA](https://img.shields.io/badge/WCAG-2.1_AA_Compliant-success?logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![LGPD](https://img.shields.io/badge/LGPD-Lei_13.709%2F2018-00A859)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)

---

## 📸 Visão Geral da Solução

O **Trail Tour Milagres (Quadriciclo Milagres Adventure)** substitui o antigo site institucional por uma experiência visual de alto impacto focada em **Mobile-First**, **Glassmorphism**, velocidade instantânea, conformidade com a **LGPD** e acessibilidade total:

- **Estratégia Comercial Sem Exibição de Preços**: As tarifas flutuam por temporada/lotação, direcionando os visitantes diretamente para conversão personalizada no WhatsApp oficial.
- **TopBar Fixa e Adaptativa em Tempo Real**: Integrada sem linhas divisórias no topo do Hero e com transição automática entre tema escuro (`#161616/85`) e tema claro (`bg-white/85`) de acordo com a cor da seção sob o cabeçalho durante a rolagem, além de atalho direto para o Instagram oficial.
- **Ritmo Visual Alternado**: Seções alternadas estritamente entre **Tom de Branco (`bg-white`)** e **Carvão Escuro (`bg-[#161616]` + brilho quente `#FF7900/10`)**.
- **CTAs Inteligentes & WhatsApp Flutuante**: Mensagens dinâmicas geradas no WhatsApp trazendo contexto do roteiro escolhido, frota selecionada ou dúvidas sobre horários, acompanhadas do botão flutuante *"Fale conosco"*.
- **Conformidade LGPD (Lei nº 13.709/2018)**: Banner de consentimento de cookies *opt-in* granular (sem pré-marcação de categorias opcionais), ledger local versionado (`localStorage`), modal interativo de Política de Privacidade e Cookies (Art. 9º e Art. 18) e documentação de auditoria em `.lgpd/`.
- **Acessibilidade WCAG 2.1 AA**: Paleta de alto contraste cromático (testada e auditada via `@axe-core/cli`).
- **Pronto para Hospedagem na Hostinger**: Configuração completa de servidor Apache/LiteSpeed (`.htaccess` com HTTPS forçado, fallback de rotas SPA, compressão GZIP/Deflate, cache de longa duração e headers de segurança), `robots.txt`, `sitemap.xml` e code-splitting otimizado no Vite.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Estrutura declarativa de componentes e reatividade |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | HMR ultra-rápido, code-splitting (`vendor` / `icons`) e build otimizado |
| **Estilização** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Design System utilitário, tokens semânticos e glassmorphism |
| **Ícones** | [Lucide React](https://lucide.dev/) + SVGs Oficiais | Ícones leves, consistentes e logotipos oficiais (WhatsApp e Instagram) |
| **Auditoria & A11y** | [Playwright](https://playwright.dev/) + [axe-core](https://github.com/dequelabs/axe-core) | Testes automatizados de acessibilidade e contraste cromático |
| **Privacidade & Governança** | [LGPD Skills](https://github.com/goul4rt/lgpd-skills) | Mapeamento de dados, bases legais, gap analysis e consentimento granular |

---

## 🧭 Arquitetura de Seções (SPA)

A aplicação é dividida em seções modulares em `src/components/sections/` com alternância cromática entre fundos claros e escuros:

```text
[ TopBar Adaptativa (Transição automática Claro/Escuro por seção + Instagram + CTA) ]
  ├── 1. HeroSection (Escuro/Marrom — Impacto visual, chamada direta e micro-badges)
  ├── 2. TrustBadges (Cards flutuantes: Segurança, guias nativos, test-drive e suporte)
  ├── 3. RoutesSection & RouteCard (Branco — Circuitos guiados sem preços)
  ├── 4. FleetSection (Carvão Escuro — Goes Terrox 400L & Can-Am Outlander 500)
  ├── 5. SafetyFeatures (Branco — 3 pilares de proteção e revisão diária)
  ├── 6. FamilySection (Carvão Escuro — Seção dedicada ao passeio para toda a família)
  ├── 7. HowItWorks (Branco — Passo a passo intuitivo em 3 etapas para agendar)
  ├── 8. GallerySection (Carvão Escuro — Carrossel contínuo com fotos reais e lightbox com zoom)
  ├── 9. Testimonials (Branco — Prova social estilo Google Reviews com modal de leitura)
  ├── 10. FaqSection (Carvão Escuro — Layout editorial em 2 colunas + barra horizontal de CTA)
  ├── 11. LocationSection (Branco — Ponto de encontro na base, Google Maps e horários)
[ Footer Institucional (Carvão Escuro + Atalhos LGPD + Assinatura de Desenvolvimento) ]
[ CookieConsent (Banner Opt-in Granular + Modal de Política de Privacidade e Cookies) ]
[ FloatingWhatsApp (Botão Flutuante "Fale conosco" com ícone oficial do WhatsApp) ]
```

---

## 📁 Estrutura de Diretórios

```text
trail-tour/
├── .lgpd/                 # Artefatos vivos de conformidade LGPD (Lei nº 13.709/2018)
│   ├── policies/          # Política de Privacidade e Cookies versionada (Art. 9º)
│   ├── STATUS.md          # Estado atual do pipeline de auditoria LGPD
│   ├── data-map.md        # Inventário das atividades de tratamento (A001–A006)
│   ├── discovery.md       # Varredura técnica do código-fonte e operadores
│   ├── gaps.md            # Gap Analysis e matriz de remediação
│   └── legal-basis.md     # Fundamentação de bases legais (Art. 7º e Art. 14)
├── public/                # Assets estáticos copiados diretamente para a raiz de dist/
│   ├── images/            # Fotografias reais otimizadas e logotipos (SVG/JPG/PNG)
│   ├── .htaccess          # Regras Apache/LiteSpeed (Hostinger): HTTPS, SPA, Cache e Segurança
│   ├── robots.txt         # Diretivas de indexação para buscadores
│   └── sitemap.xml        # Mapa de URLs para Google Search Console
├── src/
│   ├── components/
│   │   ├── common/        # Componentes base (Badge, Button, GlassCard, SectionHeader)
│   │   ├── layout/        # TopBar, Footer, FloatingWhatsApp e CookieConsent (LGPD)
│   │   └── sections/      # 11 seções modulares da página
│   ├── data/              # Base de dados estática (rotas, frota, FAQs, galeria, depoimentos)
│   ├── styles/            # Classes utilitárias CSS, variáveis da marca e animações
│   ├── utils/             # Utilitários de link do WhatsApp e formatações
│   ├── App.jsx            # Composição mestre da Single Page Application
│   └── main.jsx           # Ponto de entrada React com montagem no DOM
├── docs/                  # Documentação de arquitetura, estilo e histórico legado
├── CHANGELOG.md           # Histórico detalhado de versões e commits
├── PRD.md                 # Product Requirement Document e regras de negócio
├── tailwind.config.js     # Tokens de design, sombras e cores oficiais da marca
└── vite.config.js         # Configuração de build do Vite otimizada para produção
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** (v18.0.0 ou superior recomendado)
- Gerenciador de pacotes **npm** ou **yarn**

### Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/leonardonasls-stack/trail-tour.git
   cd trail-tour
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a URL exibida no terminal (normalmente `http://localhost:5173` ou `http://localhost:3000`).

4. **Gerar build de produção otimizado:**
   ```bash
   npm run build
   ```
   Os arquivos compilados e minificados serão gerados no diretório `dist/` (já incluindo `.htaccess`, `robots.txt` e `sitemap.xml`).

5. **Visualizar a build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deploy em Produção (Hostinger)

O projeto já está preparado para hospedagem na **Hostinger** (servidores LiteSpeed / Apache ou Web Apps Node.js):

### Opção A — Upload Manual via Gerenciador de Arquivos (`public_html`)
1. Gere o pacote de produção na sua máquina:
   ```bash
   npm run build
   ```
2. Acesse o **hPanel da Hostinger** → **Arquivos** → **Gerenciador de Arquivos**.
3. Abra a pasta `public_html` do seu domínio e remova o arquivo `default.php` padrão (se existir).
4. Envie **todo o conteúdo de dentro da pasta `dist/`** (incluindo `index.html`, a pasta `assets/`, `images/`, `.htaccess`, `robots.txt` e `sitemap.xml`) diretamente para dentro de `public_html/`.

### Opção B — Deploy Automático via GitHub na Hostinger
1. No **hPanel da Hostinger**, acesse **Sites** → **Adicionar Site** → **Aplicação Web Node.js** → **Importar Repositório Git** (ou em **Avançado → Git**).
2. Conecte sua conta do GitHub e selecione o repositório `leonardonasls-stack/trail-tour` (branch `main`).
3. O painel detectará automaticamente o preset **Vite**:
   - **Comando de instalação:** `npm install`
   - **Comando de build:** `npm run build`
   - **Diretório de saída (Output Directory):** `dist`
4. Clique em **Implementar (Deploy)**. A cada novo `git push origin main`, o site será atualizado automaticamente.

---

## ♿ Acessibilidade, SEO & Privacidade (LGPD)

- **Conformidade WCAG 2.1 AA**: Relação de contraste mínima de 4.5:1 para texto normal e 3.0:1 para textos grandes e componentes de UI garantida em todas as seções claras e escuras (auditada via `@axe-core/cli`).
- **Conformidade LGPD & ANPD**: Banner de consentimento granular sem checkboxes pré-marcados (Art. 8º, § 4º), revogação facilitada a qualquer momento pelo rodapé (Art. 8º, § 5º) e Política de Privacidade e Cookies estruturada conforme o Art. 9º e Art. 18 da Lei nº 13.709/2018.
- **SEO Local & Schema.org**: Metatags Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml` e marcação JSON-LD dos tipos `LocalBusiness` e `TouristAttraction` integrados ao `index.html`.
- **Target Touch Friendly**: Áreas mínimas de toque >= 48px em botões e gatilhos para máxima ergonomia em smartphones.

---

## 📍 Informações de Contato e Localização

- **Base de Operações:** Rua Prefeito Augusto de Barros Falcão, São Miguel dos Milagres - AL
- **Atendimento Oficial:** Segunda a Domingo, das 8h às 18h
- **WhatsApp:** `+55 (82) 98236-0604`
- **Instagram:** [@quadrimilagresadventure](https://www.instagram.com/quadrimilagresadventure/)

---

## 👨‍💻 Desenvolvimento

Desenvolvido por **[Leo Nascimento — Desenvolvimento de Sistemas](https://leonascimentodev-sooty.vercel.app/)**.
