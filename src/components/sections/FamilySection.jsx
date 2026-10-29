import React from 'react';
import { Award, HeartHandshake, MessageCircle } from 'lucide-react';
import Button from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function FamilySection() {
  return (
    <section className="py-20 sm:py-28 bg-[#161616] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Coluna de Texto */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-[#FF7900] text-white shadow-sm">
                Passeio Apto Para Toda Família
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Pilote com tranquilidade:{' '}
              <span className="text-[#FF7900]">
                você no comando, nós no apoio
              </span>
            </h2>

            <p className="text-zinc-100 text-base sm:text-lg leading-relaxed max-w-2xl">
              Nossos guias acompanham o grupo durante todo o trajeto em velocidade controlada, prestando assistência imediata, tirando fotos profissionais e garantindo que ninguém fique para trás.
            </p>

            {/* Destaques em Pílulas */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-white">
                <Award className="w-5 h-5 text-[#FF7900] shrink-0" />
                <span>100% dos guias capacitados</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-white">
                <HeartHandshake className="w-5 h-5 text-[#65A51C] shrink-0" />
                <span>Atendimento humanizado</span>
              </div>
            </div>

            {/* CTA Opcional de Apoio */}
            <div className="pt-3">
              <Button
                href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre o passeio de quadriciclo para família.")}
                target="_blank"
                variant="primary"
                size="md"
                icon={MessageCircle}
                iconPosition="left"
              >
                Falar com a Equipe no WhatsApp
              </Button>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/15 aspect-[4/3] shadow-2xl group bg-slate-900">
              <img
                src="/images/turistas_grupo_10.jpeg"
                alt="Turistas e famílias aproveitando o passeio guiado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}