# Mapa de Dados — Quadriciclo Milagres Adventure (Trail Tour Milagres)

**Versão**: v1.0
**Data**: 2026-10-29
**Owner global**: Canal de Privacidade / Controlador (`Quadriciclo Milagres Adventure`)

## Atividades de Tratamento

### A001 — Atendimento e Agendamento de Passeios via WhatsApp

| Campo | Valor |
|---|---|
| Slug | `a001-agendamento-whatsapp` |
| Finalidade | Responder dúvidas de visitantes, verificar disponibilidade de agenda e formalizar reservas de passeios de quadriciclo (Art. 6º, I LGPD) |
| Base legal | Art. 7º, V da LGPD — Procedimentos preliminares relacionados a contrato e execução de contrato a pedido do titular ([detalhes](./legal-basis.md#a001)) |
| Categorias de titulares | Clientes/turistas adultos (e, indiretamente, dados de menores acompanhados informados pelos pais/responsáveis — **Flag: menores presentes na operação física**) |
| Sensíveis? | Não |
| Dados | Nome, número de telefone (WhatsApp), data desejada, roteiro de interesse e informações de reserva |
| Fonte | Coletado diretamente do titular ao iniciar conversa no WhatsApp |
| Sistemas | Aplicativo WhatsApp Business da operação |
| Operadores | Meta Platforms, Inc. (WhatsApp) |
| Transferência intl. | Sim — infraestrutura global da Meta Platforms (Art. 33 LGPD / Res. CD/ANPD nº 19/2024) |
| Retenção | Durante a prestação do serviço + até 5 anos para cumprimento de obrigações fiscais/legais e prazo prescricional do CDC (Art. 16, I LGPD e Art. 27 do CDC) |
| Segurança | Criptografia ponta a ponta no WhatsApp, controle de acesso aos dispositivos da base |
| Alto risco? | Não (baixo volume, sem decisões automatizadas ou profiling — Art. 4º Res. CD/ANPD nº 2/2022) |
| RIPD | Dispensado / N/A |
| Owner | Administração Quadriciclo Milagres Adventure |

### A002 — Verificação de Habilitação (CNH) e Termo de Segurança Presencial na Base

| Campo | Valor |
|---|---|
| Slug | `a002-checkin-seguranca-base` |
| Finalidade | Verificar aptidão para pilotagem, registrar ciência das normas de segurança da trilha e autorização de responsável legal para menores na garupa |
| Base legal | Art. 7º, V (execução de contrato), Art. 7º, VII (proteção da vida e incolumidade física) e Art. 14, § 1º (consentimento específico do responsável legal para crianças na garupa) ([detalhes](./legal-basis.md#a002)) |
| Categorias de titulares | Turistas condutores, passageiros adultos e crianças/adolescentes acompanhados (**Flag: menores**) |
| Sensíveis? | Não |
| Dados | Nome completo, documento de identificação / CNH, telefone de emergência, assinatura e vínculo parental (quando há menor na garupa) |
| Fonte | Coletado presencialmente do titular/responsável na base em São Miguel dos Milagres - AL |
| Sistemas | Registros operacionais da base física |
| Operadores | Nenhum externo |
| Transferência intl. | Não |
| Retenção | 5 anos após a realização do passeio (exercício regular de direitos — Art. 7º, VI e Art. 16, I LGPD c/c Art. 27 CDC) |
| Segurança | Acesso restrito à equipe autorizada da base |
| Alto risco? | Não |
| RIPD | N/A |
| Owner | Administração Quadriciclo Milagres Adventure |

### A003 — Exibição de Fotografias Reais de Clientes na Galeria do Site

| Campo | Valor |
|---|---|
| Slug | `a003-galeria-fotos-clientes` |
| Finalidade | Divulgação institucional dos cenários e experiências reais dos passeios no site e redes sociais |
| Base legal | Art. 7º, I da LGPD — Consentimento livre, informado e inequívoco do titular (e Art. 14, § 1º quando envolver menores acompanhados) ([detalhes](./legal-basis.md#a003)) |
| Categorias de titulares | Clientes/turistas retratados nos passeios |
| Sensíveis? | Não (imagem em contexto turístico recreativo, sem biometria automatizada) |
| Dados | Imagem fotográfica dos participantes (`public/images/`) |
| Fonte | Fotografias registradas pelos guias durante os passeios com autorização dos clientes |
| Sistemas | Repositório/hospedagem estática do site (`public/images/`) e perfil oficial no Instagram |
| Operadores | Provedor de hospedagem web / CDN e Meta Platforms (Instagram) |
| Transferência intl. | Sim (CDN / Instagram) |
| Retenção | Enquanto vigente o consentimento ou até solicitação de remoção/revogação pelo titular (Art. 8º, § 5º e Art. 18, VI e IX LGPD) |
| Segurança | Remoção imediata mediante solicitação no canal de privacidade |
| Alto risco? | Não |
| RIPD | N/A |
| Owner | Administração Quadriciclo Milagres Adventure |

### A004 — Exibição de Depoimentos Públicos de Clientes (Avaliações Google)

| Campo | Valor |
|---|---|
| Slug | `a004-depoimentos-google` |
| Finalidade | Demonstração de prova social e reputação do serviço aos visitantes do site |
| Base legal | Art. 7º, IX da LGPD — Legítimo interesse do controlador c/c Art. 7º, § 4º (dados manifestamente públicos tornados públicos pelo próprio titular no Google Maps/Meu Negócio) ([detalhes](./legal-basis.md#a004)) |
| Categorias de titulares | Clientes que publicaram avaliações públicas no perfil da empresa no Google |
| Sensíveis? | Não |
| Dados | Nome público do perfil Google, inicial, nota (estrelas) e texto do relato (`src/data/testimonialsData.js`) |
| Fonte | Perfil público da empresa no Google Maps / Google Business Profile |
| Sistemas | Código estático da SPA (`src/data/testimonialsData.js`) |
| Operadores | Provedor de hospedagem web |
| Transferência intl. | Não aplicável diretamente |
| Retenção | Enquanto relevante para exibição institucional ou até oposição/solicitação de exclusão pelo titular (Art. 18, § 2º LGPD) |
| Segurança | Direito de oposição e remoção facilitada via canal de atendimento |
| Alto risco? | Não |
| RIPD | N/A |
| Owner | Administração Quadriciclo Milagres Adventure |

### A005 — Gestão de Consentimento de Cookies e Preferências de Privacidade (`localStorage`)

| Campo | Valor |
|---|---|
| Slug | `a005-gestao-consentimento-cookies` |
| Finalidade | Registrar e respeitar a escolha do visitante sobre cookies estritamente necessários, analíticos e de marketing |
| Base legal | Art. 7º, II (cumprimento de obrigação legal/regulatória de demonstrar o consentimento — Art. 8º, § 2º LGPD) para o registro técnico; Art. 7º, I (consentimento) para categorias opcionais ([detalhes](./legal-basis.md#a005)) |
| Categorias de titulares | Visitantes do website |
| Sensíveis? | Não |
| Dados | Registro local no navegador (`trail_tour_lgpd_consent_v1`): versão da política, status por finalidade (`necessary`, `analytics`, `marketing`), data/hora ISO 8601 e idioma |
| Fonte | Interação direta do titular no Banner/Modal de Privacidade e Cookies |
| Sistemas | `localStorage` do navegador do próprio titular |
| Operadores | Nenhum |
| Transferência intl. | Não |
| Retenção | 12 meses no navegador do usuário ou até limpeza/revogação pelo titular |
| Segurança | Armazenamento estritamente local no dispositivo do usuário, sem rastreamento oculto |
| Alto risco? | Não |
| RIPD | N/A |
| Owner | Administração Quadriciclo Milagres Adventure |

### A006 — Carregamento Técnico da Página e Fontes Web (Google Fonts)

| Campo | Valor |
|---|---|
| Slug | `a006-logs-acesso-fontes-web` |
| Finalidade | Renderização visual segura da página e entrega da tipografia (`Plus Jakarta Sans`) |
| Base legal | Art. 7º, IX da LGPD — Legítimo interesse para operação técnica e segurança da página ([detalhes](./legal-basis.md#a006)) |
| Categorias de titulares | Visitantes do website |
| Sensíveis? | Não |
| Dados | Endereço IP, `User-Agent` e cabeçalhos HTTP padrão de requisição web |
| Fonte | Navegador do visitante ao requisitar a página e folhas de estilo |
| Sistemas | Provedor de hospedagem e CDN da Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`) |
| Operadores | Provedor de hospedagem e Google LLC |
| Transferência intl. | Sim — CDN global |
| Retenção | Logs técnicos transitórios conforme política padrão de segurança do provedor |
| Segurança | Conexão criptografada via HTTPS (TLS 1.3) |
| Alto risco? | Não |
| RIPD | N/A |
| Owner | Administração Quadriciclo Milagres Adventure |

