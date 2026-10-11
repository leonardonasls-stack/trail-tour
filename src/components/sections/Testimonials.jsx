import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Depoimentos Reais"
          badgeVariant="amber"
          title="O que Dizem Quem Já"
          titleHighlight="Acelerou Conosco"
          description="A satisfação e segurança de quem viveu a experiência Trail Tour Milagres em primeira mão."
        />

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <GlassCard
              key={t.id}
              className="bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between"
            >
              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                {/* Comentário */}
                <Quote className="w-8 h-8 text-slate-300 mb-2" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Informações do Turista */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{t.name}</h3>
                  <span className="text-xs text-slate-600">{t.location}</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {t.tour}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
