# Discovery Técnico LGPD — Trail Tour Milagres (Quadriciclo Milagres Adventure)

**Data da varredura**: 2026-10-29
**Escopo**: Repositório SPA (`React 18` + `Vite 6` + `Tailwind CSS`)

## 1. Arquitetura e Banco de Dados
- **Tipo de aplicação**: Single Page Application (SPA) estática no frontend (`src/`).
- **Banco de dados próprio no repositório**: Nenhum (`package.json` não possui Prisma, SQL ou SDK de banco; reservas ocorrem via redirecionamento para o WhatsApp oficial).
- **Enquadramento regulatório provável**: Agente de Tratamento de Pequeno Porte (**ATPP** — Resolução CD/ANPD nº 2/2022), sujeito às dispensas e prazos diferenciados (Art. 11 e Art. 14 da Res. 2/2022), mantendo obrigação de canal de atendimento ao titular e transparência (Art. 9º LGPD).

## 2. Coleta e Fluxo de Dados Pessoais Identificados no Código
1. **Redirecionamento para Agendamento via WhatsApp (`src/utils/whatsappLink.js`)**:
   - Quando o usuário clica nos CTAs, é redirecionado para `https://wa.me/5582982360604` com mensagem pré-preenchida.
   - No WhatsApp (operado pela Meta Platforms), são tratados: nome, telefone, foto de perfil e dados informados na conversa para reserva do passeio (data, roteiro, quantidade de pessoas, eventual presença de crianças na garupa).
2. **Requisições Automáticas a Terceiros no Carregamento (`index.html`)**:
   - **Google Fonts** (`https://fonts.googleapis.com` e `https://fonts.gstatic.com`, linhas 32–37 de `index.html`): compartilha automaticamente endereço IP e `User-Agent` do visitante com servidores da Google LLC (EUA) no carregamento da página.
3. **Links Externos para Operadores Terceiros**:
   - **Google Maps** (`LocationSection.jsx`): redirecionamento para `google.com/maps`.
   - **Instagram / Meta** (`TopBar.jsx`, `GallerySection.jsx`, `Footer.jsx`): redirecionamento para `instagram.com/quadrimilagresadventure/`.
4. **Exibição de Dados Pessoais de Clientes no Site (Prova Social e Fotos)**:
   - **Fotografias de clientes em passeios (`public/images/`, `GallerySection.jsx`, `FamilySection.jsx`)**: imagens de turistas identificáveis (dado pessoal de imagem — Art. 5º, I LGPD).
   - **Depoimentos nominais (`src/data/testimonialsData.js`, `Testimonials.jsx`)**: exibe nomes completos (`Carolinda Vieira`, `Tiago Gomes (Ti)`, `Kauan Alvess`, `Anny Cavalcanti`) e textos de avaliações públicas do Google Meu Negócio.
5. **Participação de Crianças e Adolescentes (`src/data/faqData.js`)**:
   - O FAQ informa que crianças podem participar na garupa acompanhadas pelos pais ou responsável legal. Embora o site não colete dados diretamente de menores online, o atendimento via WhatsApp e o termo presencial na base envolvem dados de menores acompanhados (Art. 14, § 1º LGPD).
6. **Cookies e Armazenamento Local (`localStorage`)**:
   - Antes desta auditoria, o site não possuía banner de consentimento nem aviso de cookies/privacidade publicado.

