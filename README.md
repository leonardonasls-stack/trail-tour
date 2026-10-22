# 🌴 Trail Tour Milagres — Website Oficial

> Single Page Application (SPA) moderna, imersiva e de alta conversão para promoção e reserva de passeios guiados de quadriciclo (ATV) em **São Miguel dos Milagres / Rota Ecológica dos Corais (AL)**.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WCAG AA](https://img.shields.io/badge/WCAG-2.1_AA_Compliant-success?logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## 📸 Visão Geral da Solução

O **Trail Tour Milagres** substitui o antigo site institucional por uma experiência visual de alto impacto focada em **Mobile-First**, **Glassmorphism**, velocidade instantânea e acessibilidade total:

- **Estratégia Comercial Sem Exibição de Preços**: As tarifas flutuam por temporada/lotação, direcionando os visitantes diretamente para conversão personalizada no WhatsApp oficial.
- **CTAs Inteligentes**: Mensagens dinâmicas geradas no WhatsApp trazendo contexto do roteiro escolhido, frota selecionada ou dúvidas sobre horários.
- **Assets Reais Integrados**: 14 fotografias reais em alta definição tiradas nas trilhas, coqueirais e mirantes da Costa dos Corais.
- **Acessibilidade WCAG 2.1 AA**: Paleta de alto contraste cromático (testada e auditada via `axe-core`, 0 violações).

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Estrutura declarativa de componentes e reatividade |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | HMR ultra-rápido e empacotamento otimizado de produção |
| **Estilização** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Design System utilitário, tokens semânticos e glassmorphism |
| **Ícones** | [Lucide React](https://lucide.dev/) | Ícones leves, consistentes e modernos |
| **Auditoria & A11y** | [Playwright](https://playwright.dev/) + [axe-core](https://github.com/dequelabs/axe-core) | Testes automatizados de acessibilidade e renderização |

---

## 🧭 Arquitetura de Seções (SPA)

A aplicação é dividida em seções modulares em `src/components/sections/`:

```text
[ TopBar Glassmorphism (Navegação Fixa com Menu Mobile) ]
  ├── 1. HeroSection (Impacto visual, chamada direta e badges de operação)
  ├── 2. TrustBadges (Credenciais: Guia nativo, test-drive, equipamentos inclusos)
  ├── 3. RoutesSection & RouteCard (Circuitos: Rota dos Coqueirais, Mirante & Praias)
  ├── 4. FleetSection (Apresentação técnica: Honda FourTrax 420cc & CFMoto 520cc)
  ├── 5. SafetyFeatures (Pilares de segurança: capacetes, mecânica diária e ritmo seguro)
  ├── 6. HowItWorks (Passo a passo intuitivo em 3 etapas para agendar)
  ├── 7. GallerySection (Mosaico dinâmico com fotos reais e modal de zoom)
  ├── 8. Testimonials (Prova social com avaliações 5 estrelas de turistas reais)
  ├── 9. FaqSection (Acordeão de objeções: CNH, crianças, chuva/lama e vestuário)
  ├── 10. LocationSection (Ponto de encontro na base, mapa e horários de saída)
[ Footer Institucional ] + [ FloatingWhatsApp (Botão Flutuante Persistente) ]
```

---

## 📁 Estrutura de Diretórios

```
trail-tour/
├── public/                # Favicon, imagens e assets públicos estáticos
│   └── images/            # Fotografias em alta resolução otimizadas
├── src/
│   ├── components/
│   │   ├── common/        # Componentes base (Badge, Button, GlassCard, SectionHeader)
│   │   ├── layout/        # TopBar, Footer e FloatingWhatsApp
│   │   └── sections/      # 11 seções ricas da página
│   ├── data/              # Base de dados estática (rotas, frota, FAQs, depoimentos)
│   ├── styles/            # Classes utilitárias CSS e configurações globais
│   ├── utils/             # Utilitários de link do WhatsApp e formatações
│   ├── App.jsx            # Composição mestre da Single Page Application
│   └── main.jsx           # Ponto de entrada React com montagem no DOM
├── docs/                  # Documentação de arquitetura, estilo e histórico legado
├── CHANGELOG.md           # Histórico detalhado de versões e commits
├── PRD.md                 # Product Requirement Document e regras de negócio
├── tailwind.config.js     # Tokens de design, sombras e gradientes personalizados
└── vite.config.js         # Configuração de build do Vite
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
   Acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

4. **Gerar build de produção otimizado:**
   ```bash
   npm run build
   ```
   Os arquivos compilados e minificados serão gerados no diretório `dist/`.

5. **Visualizar a build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## ♿ Acessibilidade e SEO

- **Conformidade WCAG 2.1 AA**: Relação de contraste mínima de 4.5:1 para texto normal e 3.0:1 para componentes de UI garantida em toda a interface.
- **SEO Local & Schema.org**: Metatags Open Graph, Twitter Cards e marcação JSON-LD dos tipos `LocalBusiness` e `TouristAttraction` integrados ao `index.html`.
- **Target Touch Friendly**: Áreas mínimas de toque >= 48px em botões e gatilhos para máxima ergonomia em smartphones.

---

## 📍 Informações de Contato e Localização

- **Base de Operações:** Rua Prefeito Augusto de Barros Falcão, São Miguel dos Milagres - AL
- **Atendimento Oficial:** Segunda a Domingo, das 8h às 18h
- **WhatsApp:** `+55 (82) 98236-0604`
- **Instagram:** [@trailtourquadriciclos](https://instagram.com/trailtourquadriciclos) / [@quadrimilagresadventure](https://instagram.com/quadrimilagresadventure)
