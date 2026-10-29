import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, SlidersHorizontal, X, Check, ExternalLink } from 'lucide-react';
import { companyData } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

const STORAGE_KEY = 'trail_tour_lgpd_consent_v1';
const POLICY_VERSION = 'v1.0';

export default function CookieConsent({
  policyModalOpen,
  setPolicyModalOpen,
  preferencesOpenRequest,
  setPreferencesOpenRequest,
}) {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  // Princípio lgpd-consent-schema (Art. 8º, § 4º): NUNCA pré-marcar caixas não essenciais
  const [purposes, setPurposes] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setBannerVisible(true);
        return;
      }
      const parsed = JSON.parse(raw);
      if (parsed?.policyVersionId !== POLICY_VERSION) {
        setBannerVisible(true);
        return;
      }
      if (parsed?.purposes) {
        setPurposes({
          necessary: true,
          analytics: Boolean(parsed.purposes.analytics),
          marketing: Boolean(parsed.purposes.marketing),
        });
      }
    } catch {
      setBannerVisible(true);
    }
  }, []);

  // Permite reabrir o painel de preferências a qualquer momento pelo rodapé (Art. 8º, § 5º LGPD)
  useEffect(() => {
    if (preferencesOpenRequest) {
      setBannerVisible(true);
      setShowCustomize(true);
      setPreferencesOpenRequest(false);
    }
  }, [preferencesOpenRequest, setPreferencesOpenRequest]);

  // Bloqueia scroll e fecha modal de política no ESC
  useEffect(() => {
    if (!policyModalOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setPolicyModalOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [policyModalOpen, setPolicyModalOpen]);

  const saveConsentLedger = (nextPurposes, actionType) => {
    const now = new Date().toISOString();
    let history = [];
    try {
      const existing = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
      if (Array.isArray(existing.history)) {
        history = existing.history.slice(-9);
      }
    } catch {
      history = [];
    }

    const entry = {
      action: actionType, // GRANTED_ALL | REJECTED_OPTIONAL | CUSTOM_PREFERENCES
      policyVersionId: POLICY_VERSION,
      purposes: nextPurposes,
      timestamp: now,
      locale: navigator.language || 'pt-BR',
    };

    const ledgerPayload = {
      policyVersionId: POLICY_VERSION,
      updatedAt: now,
      status: actionType,
      purposes: nextPurposes,
      history: [...history, entry],
    };

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ledgerPayload));
    } catch {
      // Fallback silencioso caso storage esteja bloqueado
    }

    setPurposes(nextPurposes);
    setBannerVisible(false);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    saveConsentLedger(
      { necessary: true, analytics: true, marketing: true },
      'GRANTED_ALL'
    );
  };

  const handleRejectOptional = () => {
    saveConsentLedger(
      { necessary: true, analytics: false, marketing: false },
      'REJECTED_OPTIONAL'
    );
  };

  const handleSaveCustom = () => {
    saveConsentLedger(
      {
        necessary: true,
        analytics: Boolean(purposes.analytics),
        marketing: Boolean(purposes.marketing),
      },
      'CUSTOM_PREFERENCES'
    );
  };

  return (
    <>
      {/* Banner de Consentimento de Cookies (LGPD Art. 7º, I e Art. 8º) */}
      {bannerVisible && (
        <aside
          aria-label="Aviso de Privacidade e Cookies (LGPD)"
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-lg z-[60] bg-[#161616] text-white border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FF7900]/20 text-[#FF7900] flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  Sua Privacidade & Cookies (LGPD)
                </h2>
                <span className="text-[11px] text-zinc-300 block">
                  Lei nº 13.709/2018 · Transparência e Controle
                </span>
              </div>
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-zinc-200 leading-relaxed">
            Utilizamos armazenamento técnico essencial para o funcionamento da página e para lembrar sua escolha de privacidade. Cookies analíticos e de marketing permanecem <strong>desativados por padrão</strong> e só são ativados se você concordar.{' '}
            <button
              type="button"
              onClick={() => setPolicyModalOpen(true)}
              className="underline font-bold text-[#FF7900] hover:text-amber-300 focus:outline-none cursor-pointer"
            >
              Ler Política de Privacidade e Cookies
            </button>
            .
          </p>

          {/* Painel Granular por Finalidade (Sem pré-marcação de opcionais — Art. 8º, § 4º LGPD) */}
          {showCustomize && (
            <div className="mt-4 pt-3 border-t border-white/10 space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="font-bold text-white block">1. Estritamente Necessários</span>
                  <span className="text-[11px] text-zinc-300">
                    Essenciais para segurança e para salvar sua escolha de privacidade (Art. 7º, II LGPD).
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-[#65A51C]/25 text-emerald-300 border border-[#65A51C]/40 shrink-0 ml-2">
                  Sempre Ativo
                </span>
              </div>

              <label
                htmlFor="cookie-analytics"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="pr-3">
                  <span className="font-bold text-white block">2. Analíticos e Desempenho</span>
                  <span className="text-[11px] text-zinc-300">
                    Métricas agregadas de visitas para melhorar os roteiros e a navegação (Art. 7º, I LGPD).
                  </span>
                </div>
                <input
                  id="cookie-analytics"
                  type="checkbox"
                  checked={purposes.analytics}
                  onChange={(e) => setPurposes((p) => ({ ...p, analytics: e.target.checked }))}
                  className="w-4 h-4 accent-[#FF7900] rounded cursor-pointer shrink-0"
                />
              </label>

              <label
                htmlFor="cookie-marketing"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="pr-3">
                  <span className="font-bold text-white block">3. Marketing e Mídia Externa</span>
                  <span className="text-[11px] text-zinc-300">
                    Mensuração de campanhas de divulgação no Instagram e WhatsApp (Art. 7º, I LGPD).
                  </span>
                </div>
                <input
                  id="cookie-marketing"
                  type="checkbox"
                  checked={purposes.marketing}
                  onChange={(e) => setPurposes((p) => ({ ...p, marketing: e.target.checked }))}
                  className="w-4 h-4 accent-[#FF7900] rounded cursor-pointer shrink-0"
                />
              </label>
            </div>
          )}

          {/* Botões com Igualdade de Destaque Visual (Padrão ANPD / LGPD) */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 min-w-[130px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-[#FF7900] hover:bg-[#E06800] transition-colors cursor-pointer"
            >
              Aceitar todos
            </button>

            <button
              type="button"
              onClick={handleRejectOptional}
              className="flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
            >
              Rejeitar não essenciais
            </button>

            {showCustomize ? (
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Salvar escolha</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Personalizar</span>
              </button>
            )}
          </div>
        </aside>
      )}

      {/* Modal Completo da Política de Privacidade e Cookies (Art. 9º e Art. 18 LGPD) */}
      {policyModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lgpd-policy-title"
          onClick={() => setPolicyModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fechar */}
            <button
              type="button"
              onClick={() => setPolicyModalOpen(false)}
              aria-label="Fechar Política de Privacidade"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho */}
            <div className="flex items-center gap-3 pr-10 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FF7900]/15 text-[#B44600] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#B44600] block">
                  Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
                </span>
                <h2 id="lgpd-policy-title" className="text-xl sm:text-2xl font-black text-slate-900">
                  Política de Privacidade e Cookies
                </h2>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-5 pb-4 border-b border-slate-200">
              <strong>Versão:</strong> {POLICY_VERSION} · <strong>Vigência:</strong> 29/10/2026 · <strong>Controlador:</strong> {companyData.name} ({companyData.address})
            </p>

            {/* TL;DR Resumo em Camadas */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-2">
              <h3 className="text-sm font-extrabold text-slate-900">
                Resumo Rápido (Transparência — Art. 6º, VI e Art. 9º da LGPD)
              </h3>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
                <li><strong>Sem cadastros ocultos:</strong> Este site não exige login nem coleta formulários invasivos. Você só inicia conversa no WhatsApp quando clica nos botões de atendimento.</li>
                <li><strong>Cookies sob seu controle:</strong> Cookies analíticos e de marketing ficam <strong>desativados por padrão</strong> e só são ligados mediante seu consentimento livre (Art. 8º LGPD).</li>
                <li><strong>Não vendemos seus dados:</strong> Seus dados são usados estritamente para agendar e conduzir seu passeio de quadriciclo com segurança.</li>
                <li><strong>Direito de remoção imediata:</strong> Caso deseje remover alguma foto da galeria ou avaliação publicada, atendemos imediatamente pelo nosso Canal de Privacidade.</li>
              </ul>
            </div>

            {/* Seções Obrigatórias Art. 9º LGPD */}
            <div className="space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <section>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                  1. Identificação do Controlador e Canal de Privacidade (Art. 9º, III e IV)
                </h3>
                <p>
                  A <strong>{companyData.name}</strong> (Trail Tour Milagres), com base operacional na {companyData.address}, atua como Controladora dos dados pessoais. Em conformidade com a Resolução CD/ANPD nº 2/2022 (Art. 11) e Resolução CD/ANPD nº 18/2024, o canal oficial para exercício de direitos de privacidade (DSAR) é o nosso WhatsApp Oficial <strong>{companyData.phone}</strong> (basta informar o assunto <em>&quot;Privacidade / LGPD&quot;</em>).
                </p>
              </section>

              <section>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                  2. Finalidades, Bases Legais e Duração do Tratamento (Art. 7º, Art. 9º, I e II e Art. 14)
                </h3>
                <ul className="space-y-2 list-disc pl-4">
                  <li>
                    <strong>Agendamento via WhatsApp (Art. 7º, V — Execução de Contrato / Procedimentos Preliminares):</strong> Quando você clica para falar com a equipe, tratamos seu nome, telefone e preferências de roteiro/data para cotar e reservar o passeio. Retenção: durante o atendimento e até 5 anos após o serviço para obrigações legais e garantia de direitos (Art. 16, I LGPD c/c Art. 27 CDC).
                  </li>
                  <li>
                    <strong>Check-in Presencial, CNH e Segurança na Base (Art. 7º, V e VII):</strong> Na base física, verificamos a habilitação do condutor e orientações de segurança para proteção da vida e incolumidade física dos participantes.
                  </li>
                  <li>
                    <strong>Crianças e Adolescentes na Garupa (Art. 14, § 1º LGPD):</strong> A participação de crianças na garupa ocorre exclusivamente mediante acompanhamento e consentimento específico presencial do pai, mãe ou responsável legal.
                  </li>
                  <li>
                    <strong>Fotografias e Avaliações (Art. 7º, I e IX):</strong> As fotos na galeria são divulgadas mediante consentimento dos clientes retratados, e os depoimentos refletem avaliações públicas deixadas no Google (Art. 7º, § 4º), podendo o titular solicitar a exclusão a qualquer momento.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                  3. Categorias de Cookies e Armazenamento Local
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 mt-2">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                        <th className="p-2.5">Categoria</th>
                        <th className="p-2.5">Finalidade</th>
                        <th className="p-2.5">Base Legal</th>
                        <th className="p-2.5">Padrão</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900">Estritamente Necessários</td>
                        <td className="p-2.5">Registra sua decisão no banner de privacidade (<code>{STORAGE_KEY}</code>) para não perguntar novamente a cada clique.</td>
                        <td className="p-2.5">Obrigação legal (Art. 7º, II e Art. 8º, § 2º)</td>
                        <td className="p-2.5 text-[#3B630E] font-bold">Sempre ativo</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900">Analíticos</td>
                        <td className="p-2.5">Compreender de forma agregada quais roteiros e seções despertam maior interesse.</td>
                        <td className="p-2.5">Consentimento (Art. 7º, I)</td>
                        <td className="p-2.5 text-slate-600">Desativado (Opt-in)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-slate-900">Marketing</td>
                        <td className="p-2.5">Mensuração de campanhas de divulgação em redes sociais.</td>
                        <td className="p-2.5">Consentimento (Art. 7º, I)</td>
                        <td className="p-2.5 text-slate-600">Desativado (Opt-in)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                  4. Compartilhamento e Transferência Internacional (Art. 9º, V e Arts. 33–36)
                </h3>
                <p>
                  Ao clicar voluntariamente nos links externos de agendamento ou redes sociais, você é direcionado para plataformas operadas por terceiros (<strong>WhatsApp / Instagram — Meta Platforms, Inc.</strong> e <strong>Google Maps / Google Fonts — Google LLC</strong>), que podem processar dados técnicos em infraestrutura global sob as salvaguardas da LGPD e da Resolução CD/ANPD nº 19/2024.
                </p>
              </section>

              <section>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                  5. Direitos do Titular (Art. 18 da LGPD) e Revogação Facilitada (Art. 8º, § 5º)
                </h3>
                <p>
                  Você tem direito a solicitar gratuitamente: confirmação da existência de tratamento, acesso aos dados, correção, anonimização, bloqueio ou eliminação de dados desnecessários, eliminação de dados tratados com consentimento, informação sobre compartilhamento e revogação do consentimento a qualquer momento.
                </p>
              </section>
            </div>

            {/* Rodapé do Modal: Ações de Direitos do Titular e Reconfiguração de Cookies */}
            <div className="mt-7 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setPolicyModalOpen(false);
                    setBannerVisible(true);
                    setShowCustomize(true);
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Alterar / Revogar Cookies</span>
                </button>

                <a
                  href={getWhatsAppUrl("Solicitação LGPD / Direitos do Titular (Art. 18)")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#3B630E] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Exercer Direitos no Canal LGPD</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setPolicyModalOpen(false)}
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-[#FF7900] hover:bg-[#E06800] transition-colors cursor-pointer"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

