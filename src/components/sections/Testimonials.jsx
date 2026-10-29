import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, X } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import SectionHeader from '../common/SectionHeader';

export default function Testimonials() {
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Bloqueia scroll de fundo e permite fechar com tecla ESC
  useEffect(() => {
    if (!activeModalItem) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') setActiveModalItem(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeModalItem]);

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Depoimentos Reais"
          badgeVariant="orange"
          title="O que Dizem Quem Já"
          titleHighlight="Acelerou Conosco"
          description="Avaliações reais deixadas diretamente no Google por quem viveu a experiência Quadriciclo Milagres Adventure."
        />

        {/* Grid de Depoimentos estilo Google Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {testimonialsData.map((t) => {
            const isLong = t.comment.length > 170;

            return (
              <div
                key={t.id}
                className="bg-slate-50/70 rounded-[26px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1)]"
              >
                <div>
                  {/* Cabeçalho do Card: Avatar circular, Nome, Meta e Tempo */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-bold text-base flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        {t.initial}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-slate-900 text-sm truncate leading-tight">
                          {t.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {t.meta}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-600 shrink-0 whitespace-nowrap pt-0.5">
                      {t.timeAgo}
                    </span>
                  </div>

                  {/* 5 Estrelas Douradas no padrão Google */}
                  <div className="flex items-center gap-1 text-[#FABB05] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FABB05]" />
                    ))}
                  </div>

                  {/* Texto do comentário com aspas resumido */}
                  <p className="text-slate-700 text-[13px] sm:text-sm leading-relaxed">
                    "{isLong ? `${t.comment.slice(0, 155)}...` : t.comment}"
                  </p>
                </div>

                {/* Rodapé: Selo Google + Botão Continuar lendo */}
                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="9 11 12 14 22 4" />
                    </svg>
                    <span>Google</span>
                  </div>

                  {isLong ? (
                    <button
                      type="button"
                      onClick={() => setActiveModalItem(t)}
                      className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#FF7900] transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>Continuar lendo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveModalItem(t)}
                      className="inline-flex items-center gap-1 font-medium text-slate-500 hover:text-slate-700 transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>Ver relato</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal translúcido com animação de zoom */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-author"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl border border-white/60 rounded-[32px] p-6 sm:p-9 shadow-2xl transition-all transform scale-100 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              aria-label="Fechar depoimento"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Avaliador com Zoom no Avatar */}
            <div className="flex items-center gap-4 mb-5 pr-10">
              <div
                className={`w-14 h-14 rounded-full ${activeModalItem.avatarBg} text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-md ring-4 ring-white`}
              >
                {activeModalItem.initial}
              </div>
              <div>
                <h3 id="modal-author" className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug">
                  {activeModalItem.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <span>{activeModalItem.meta}</span>
                  <span>•</span>
                  <span>{activeModalItem.timeAgo}</span>
                </div>
              </div>
            </div>

            {/* Estrelas + Selo Google */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-[#FABB05]">
                {[...Array(activeModalItem.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FABB05]" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1">5.0 / 5.0</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 11 12 14 22 4" />
                </svg>
                <span>Avaliação verificada no Google</span>
              </div>
            </div>

            {/* Texto Completo da Avaliação */}
            <div className="text-slate-800 text-base sm:text-lg leading-relaxed space-y-4">
              <p className="italic">
                "{activeModalItem.comment}"
              </p>
            </div>

            {/* Rodapé do Modal */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#FF7900] hover:bg-[#E06800] transition-colors shadow-md shadow-[#FF7900]/25"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
