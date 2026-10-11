# 🎨 Guia de Estilo e Design System
## Trail Tour Milagres — Sistema Visual SPA

---

### 1. Princípios do Design
1. **Aventura Elegante:** Transmitir a adrenalina do passeio de quadriciclo combinada com a beleza paradisíaca e o acolhimento de São Miguel dos Milagres.
2. **Glassmorphism Sofisticado:** Uso consciente de elementos translúcidos, desfoque de fundo (`backdrop-filter: blur()`), bordas finas com brilho suave e sombras difusas para sensação de profundidade e modernidade.
3. **Mobile-First & Usabilidade ao Sol:** Mais de 85% dos usuários acessarão na praia ou pousada através do celular. Botões grandes (mínimo 48px de área de toque) e contraste nítido mesmo sob alta luminosidade externa.
4. **Sem Preços / Foco no Encantamento:** Cada card de roteiro foca na experiência, nos cenários das fotos reais e na facilidade de chamar no WhatsApp para garantir a vaga.

---

### 2. Tokens Semânticos de Cores (Paleta Desacoplada)

A paleta está configurada com nomes semânticos, permitindo que a definição de cores posterior seja feita apenas alterando as variáveis no `tailwind.config.js`:

| Token | Propósito | Valor Inicial Sugerido |
|---|---|---|
| `brand-primary` | Cor de destaque primária / Botões de conversão | `#059669` (Esmeralda tropical) ou `#D97706` (Âmbar pôr do sol) |
| `brand-secondary` | Apoio, contrastes secundários | `#0F172A` (Azul escuro profundo / ardósia) |
| `brand-accent` | Acentos visuais, badges e destaques | `#F59E0B` (Dourado areia/sol) |
| `glass-surface` | Fundo translúcido para cards e menus | `rgba(255, 255, 255, 0.75)` |
| `glass-border` | Borda refinada com efeito de vidro | `rgba(255, 255, 255, 0.35)` |
| `glass-dark-surface` | Fundo translúcido para modo escuro/hero | `rgba(15, 23, 42, 0.70)` |
| `glass-dark-border` | Borda translúcida escura | `rgba(255, 255, 255, 0.12)` |
| `whatsapp-green` | Cor oficial de ação do WhatsApp | `#25D366` |

---

### 3. Especificação do Efeito Glassmorphism na Top Bar

A barra de navegação superior terá duas aparências controladas via scroll:
- **No topo absoluto (Hero):** Transparência fluida com texto de alto contraste e logotipo em evidência.
- **Ao rolar a página (> 50px de scroll):** Ativação total do **Glassmorphism**:
  - `backdrop-blur-md` (desfoque de ~12px do fundo da página).
  - Fundo translúcido suave (`bg-white/80` ou `bg-slate-900/80`).
  - Borda inferior sutil (`border-b border-white/20`).
  - Sombra sutil de elevação (`shadow-sm` a `shadow-md`).
  - Transição suave de transição de estado (`transition-all duration-300`).

---

### 4. Tipografia & Hierarquia

- **Fonte Principal (Sans-serif moderna):** `Inter`, `Plus Jakarta Sans` ou `Montserrat` — Altamente legível em telas pequenas.
- **Hierarquia:**
  - **H1 (Hero):** 36px a 48px em Mobile / 56px a 64px em Desktop (Bold/Extrabold).
  - **H2 (Títulos de Seção):** 28px a 36px (Bold).
  - **H3 (Títulos de Roteiros/Cards):** 20px a 24px (Semibold).
  - **Parágrafos (Body):** 16px a 18px (Regular/Medium).
  - **Badges / Tags:** 12px a 14px (Semibold, Uppercase).

---

### 5. Breakpoints Responsivos

- **Mobile:** `< 640px` (Layout vertical, menu hambúrguer, cards em coluna única, botões full-width).
- **Tablet:** `640px a 1024px` (Grid de 2 colunas para roteiros e galeria).
- **Desktop:** `> 1024px` (Menu horizontal completo, grid de 3 colunas para roteiros, mosaico expandido).
