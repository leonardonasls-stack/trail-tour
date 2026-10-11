# 📑 Documento de Requisitos de Produto (PRD)
## Trail Tour Milagres — Website SPA de Passeios de Quadriciclo em São Miguel dos Milagres/AL

---

### 1. Visão Geral do Produto
O **Trail Tour Milagres** é uma Single Page Application (SPA) moderna, rápida e de alta conversão, desenvolvida para promover e agendar passeios guiados de quadriciclo (ATV) em São Miguel dos Milagres e ao longo da paradisíaca Rota Ecológica dos Corais em Alagoas.

Substituindo o antigo site de template genérico (`trailtourmilagres.com.br`), o novo projeto adota uma estética premium com **efeito Glassmorphism**, foco em **Mobile-First** e valorização dos cenários reais da região (fotos reais da frota e dos clientes já integradas localmente).

---

### 2. Diretrizes Comerciais e Posicionamento de Marca

- **Nome Oficial da Marca:** **Trail Tour Milagres**
- **Políticas de Preços:** **Nenhum preço será exibido no site**.
  - *Motivação:* Permitir flexibilidade de tarifas de acordo com alta/baixa temporada, feriados, passeios privativos ou combos em grupo, além de incentivar o contato direto no WhatsApp para negociação e atendimento humanizado.
- **Canal Central de Conversão:** WhatsApp oficial `+55 (82) 98236-0604` com mensagens pré-formatadas inteligentes baseadas no roteiro e data que o visitante selecionar.
- **Redes e Localização:**
  - Instagram: `@trailtourquadriciclos` / `@quadrimilagresadventure`
  - Base física: *Rua Prefeito Augusto de Barros Falcão, São Miguel dos Milagres - AL*
  - Horário: *Segunda a Domingo, das 8h às 18h*

---

### 3. Stack Tecnológica & Arquitetura de Software

- **Linguagem & Framework:** **React** com **JavaScript (ES Modules)**.
- **Ferramenta de Build:** **Vite** (bundling ultra-rápido, suporte a assets nativos e HMR instantâneo).
- **Estilização:** **Tailwind CSS** (design responsivo, classes utilitárias e suporte ao efeito `backdrop-blur` de glassmorphism).
- **Ícones:** **Lucide React** (ícones consistentes, leves e modernos para bússola, escudo/segurança, câmera, WhatsApp, etc.).
- **Gerenciamento de Mídias:** Fotos reais otimizadas organizadas localmente em [`assets/images/`](file:///c:/Users/Leo-dev/Documents/Projetos/Site%20Quadricilho%20Adventure/assets/images).
- **Variáveis de Design:** Cores estruturadas via tokens Tailwind / CSS variables para fácil definição da paleta definitiva.

---

### 4. Design System & Efeito Glassmorphism

#### 4.1. Top Bar com Efeito Glassmorphism
- **Comportamento:** Fixa no topo (sticky/floating), com transição suave ao rolar a página.
- **Estilo Visual:** Fundo translúcido com desfoque de fundo (`backdrop-blur-md`), borda sutil semitransparente, sombra leve que confere profundidade sem poluição visual.
- **Conteúdo Desktop:** Logotipo "Trail Tour Milagres", links âncora (*Início*, *Roteiros*, *Diferenciais*, *Galeria*, *Dúvidas*, *Localização*) e botão de CTA destacado (*"Consultar Vagas"*).
- **Conteúdo Mobile:** Logo compacto, botão hambúrguer com animação suave e gaveta lateral/overlay com menu translúcido.

#### 4.2. Padrão de Cores (Tokens Flexíveis)
- As cores serão organizadas com nomes semânticos (ex: `primary`, `primary-hover`, `accent`, `sand`, `palm-green`, `sea-blue`, `glass-bg`, `glass-border`).
- A paleta definitiva será configurada centralizadamente no `tailwind.config.js` sem necessidade de alterar os componentes.

---

### 5. Arquitetura da SPA (Blueprint das Seções)

```
[ Top Bar Glassmorphism (Fixa) ]
  ├── 1. Hero Section (Aventura em São Miguel dos Milagres + CTAs)
  ├── 2. Banner de Destaque / Faixa de Credibilidade (Diferenciais rápidos)
  ├── 3. Roteiros de Aventura (Cards detalhados sem preços)
  ├── 4. Por Que a Trail Tour? (Segurança, Guia Local, Treinamento Inicial)
  ├── 5. Como Funciona o Agendamento (Passo a passo simplificado)
  ├── 6. Galeria de Fotos Reais (Mosaico interativo com as 14 fotos)
  ├── 7. Depoimentos de Turistas (Avaliações 5 estrelas)
  ├── 8. Perguntas Frequentes (FAQ Acordeão com busca de dúvidas)
  ├── 9. Localização & Ponto de Saída (Mapa e horários)
  └── [ Rodapé & Botão Flutuante de WhatsApp ]
```

#### 5.1. Hero Section
- **Visual:** Foto/vídeo marcante da praia com coqueirais e quadriciclos.
- **Headline:** *"Sinta a liberdade de explorar São Miguel dos Milagres em 4 rodas."*
- **Sub-headline:** *"Passeios guiados por praias desertas, túneis de coqueirais e mirantes com vista panorâmica do mar. Viva uma experiência inesquecível com segurança total."*
- **Ações:** Botão primário *"Ver Roteiros"* (scroll suave) e Botão secundário *"Falar no WhatsApp"*.

#### 5.2. Roteiros de Aventura (Sem Exibição de Preços)
1. **Roteiro 1 — Circuito Praias & Piscinas Naturais:**
   - *Foto:* `trilha_praia_01.jpeg`
   - *Duração:* ~2h
   - *Destaques:* Praia do Toque, Praia de Lages, paradas para fotos e banho de mar.
   - *Inclusos:* Capacete higienizado, instrução prévia, guia nativo, paradas fotográficas.
   - *CTA:* *"Consultar Vagas no WhatsApp"* (já envia com o nome deste roteiro).
2. **Roteiro 2 — Trilha dos Coqueirais & Mirante do Cruzeiro:**
   - *Foto:* `mirante_vista_04.jpeg`
   - *Duração:* ~2h30
   - *Destaques:* Túneis de coqueiros centenários, trilha ecológica, subida ao mirante com visão 360° da barreira de corais.
   - *Inclusos:* Capacete, guia acompanhante, tempo livre para fotos panorâmicas.
   - *CTA:* *"Consultar Vagas no WhatsApp"*.
3. **Roteiro 3 — Sunset VIP (Passeio do Pôr do Sol):**
   - *Foto:* `sunset_por_do_sol_09.jpeg`
   - *Duração:* ~2h (saída vespertina)
   - *Destaques:* Aventura com clima ameno, iluminação dourada e parada em mirante estratégico para assistir ao pôr do sol alagoano.
   - *CTA:* *"Consultar Vagas no WhatsApp"*.

#### 5.3. Seção de Segurança & Diferenciais
- **Frota Nova e Revisada:** Quadriciclos automáticos, potentes e fáceis de pilotar.
- **Guias Nascidos na Região:** Conhecem a história, marés e os melhores ângulos para fotos de recordação.
- **Treinamento para Iniciantes:** Test-drive antes de sair na trilha. Qualquer pessoa habilitada ou iniciante consegue pilotar tranquilamente.
- **Equipamentos de Proteção:** Capacetes limpos e revisados para piloto e garupa.

#### 5.4. Galeria de Fotos Reais
- Grid responsivo utilizando as fotos salvas localmente em [`assets/images/`](file:///c:/Users/Leo-dev/Documents/Projetos/Site%20Quadricilho%20Adventure/assets/images).
- Efeito lightbox ou expansão ao toque em dispositivos móveis.

#### 5.5. FAQ — Perguntas Frequentes
- **Precisa de carteira de motorista (CNH)?**
  - Para pilotar o quadriciclo, é recomendada habilitação categoria B e ser maior de 18 anos. Para a garupa, não é exigida CNH.
- **Crianças podem participar?**
  - Sim, na garupa com os responsáveis e utilizando capacete adequado (geralmente a partir de 7 anos).
- **O que devo vestir no passeio?**
  - Roupas leves, calçado fechado (ou tênis), óculos de sol, protetor solar e roupa de banho por baixo para as paradas.
- **E se chover no dia?**
  - O passeio na chuva é super divertido e procurado (com trilhas de lama e adrenalina). Caso as condições climáticas estejam extremas e inseguras, o passeio é reagendado sem custo.
- **Como faço para reservar?**
  - Basta clicar no botão de WhatsApp, informar a data desejada e a quantidade de pessoas para checarmos a disponibilidade na hora.

#### 5.6. Rodapé, Localização & Floating WhatsApp
- Informações completas: Rua Prefeito Augusto de Barros Falcão, São Miguel dos Milagres - AL.
- Botão flutuante fixo no canto inferior direito com pulso suave e ícone oficial do WhatsApp.

---

### 6. Requisitos Não Funcionais (Qualidade & SEO)

- **Performance Mobile-First:** Peso total da página reduzido, imagens em formatos modernos com lazy loading, tempo de carregamento < 1.5s.
- **SEO Local:** Metatags completas (OpenGraph, Twitter Cards, dados estruturados JSON-LD `LocalBusiness` e `TouristAttraction`).
- **Acessibilidade:** Botões táteis com área mínima de toque de 48px, contraste adequado de texto sobre fundos claros ou escuros.

---

### 7. Organização dos Arquivos do Projeto

```
Site Quadricilho Adventure/
├── assets/
│   └── images/                # 14 fotos reais baixadas do site legado
├── docs/
│   └── informacoes_site_legado.md # Dados históricos, links e telefones extraídos
├── PRD.md                     # Este documento de especificação do produto
```
