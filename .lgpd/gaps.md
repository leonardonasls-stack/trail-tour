# Gap Analysis e Plano de Remediação LGPD — 2026-10-29

## Resumo Executivo
- **0 gaps críticos pendentes no frontend** após a implementação do Banner de Consentimento Granular + Política de Privacidade e Cookies (Art. 8º e Art. 9º LGPD).
- **2 gaps operacionais (offline/administrativos)** recomendados para formalização interna da empresa (termo presencial de imagem/menores e hospedagem local de fontes caso deseje eliminar requisições à Google Fonts).

## Matriz de Conformidade (Antes vs. Depois da Atualização)

| Item Auditado | Status Anterior | Status Atual | Evidência / Base Normativa | Severidade |
|---|---|---|---|---|
| **Base legal documentada por atividade** | RED | **GREEN** | Documentado em `.lgpd/legal-basis.md` (Art. 7º, I, II, V, VII, IX e Art. 14, § 1º LGPD) | Crítica |
| **Mapa de Dados / Inventário (Art. 37)** | RED | **GREEN** | Documentado em `.lgpd/data-map.md` cobrindo as 6 atividades (A001–A006) | Crítica |
| **Política de Privacidade e Cookies (Art. 9º)** | RED | **GREEN** | Implementada em `.lgpd/policies/privacy-policy-v1.0-draft.md` e publicada em modal acessível no rodapé e banner (`CookieConsent.jsx`) | Alta |
| **Banner de Cookies Opt-in Granular (Art. 8º)** | RED | **GREEN** | Implementado em `src/components/layout/CookieConsent.jsx` sem checkboxes pré-marcados, com botões de igual destaque (*Aceitar todos*, *Rejeitar não essenciais*, *Personalizar*) e revogação a 1 clique no rodapé (Art. 8º, §§ 4º e 5º) | Alta |
| **Canal de Direitos do Titular / DSAR (Art. 18)** | RED | **GREEN** | Canal explícito na Política de Privacidade e no rodapé para solicitações do Art. 18 (acesso, correção, exclusão de fotos/depoimentos, revogação) | Alta |
| **Divulgação do Canal de Privacidade / ATPP** | RED | **GREEN** | Divulgado na Política de Privacidade conforme Resolução CD/ANPD nº 2/2022 (Art. 11) e Resolução CD/ANPD nº 18/2024 | Alta |
| **Coleta excessiva no site** | GREEN | **GREEN** | O site não exige cadastro, CPF ou formulários invasivos (Princípio da Necessidade — Art. 6º, III LGPD) | Baixa |
| **Termo presencial para menores na garupa e uso de imagem** | YELLOW | **YELLOW** | No check-in físico na base, garantir assinatura do responsável legal para crianças na garupa (Art. 14, § 1º LGPD) e cláusula destacada de autorização de imagem (Art. 8º, § 1º LGPD) | Média |
| **Carregamento externo Google Fonts (`index.html`)** | YELLOW | **GREEN (Documentado)** | Informado de forma transparente na Política de Privacidade e Cookies; opcionalmente pode-se auto-hospedar a fonte em `/public/fonts` no futuro | Baixa |

## Plano de Ação Recomendado (Operação Física)
1. **Revisão Jurídica da Política v1.0** — Revisar os dados societários (CNPJ e e-mail oficial de privacidade) no texto da política antes de promovê-la de `draft` para definitiva.
2. **Termo Físico na Base (São Miguel dos Milagres - AL)** — Garantir que a ficha de embarque física contenha:
   - Campo específico para autorização de pai/mãe/responsável legal quando houver criança ou adolescente na garupa (Art. 14, § 1º LGPD);
   - Checkbox opcional (não pré-marcado) para autorização gratuita de uso de imagem nas redes sociais e galeria do site (Art. 7º, I e Art. 8º, § 1º LGPD).

