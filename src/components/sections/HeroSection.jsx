import React from 'react';
import { ArrowRight, Compass, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import Button from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-slate-950 text-white overflow-hidden pt-28 pb-16 lg:py-24">
      {/* Imagem de Fundo Real da Trilha com Overlay Dark Glass */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/trilha_praia_01.jpeg"
          alt="Quadriciclo Milagres Adventure em São Miguel dos Milagres"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/90 to-[#161616]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF7900]/20 via-transparent to-[#161616]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto e Conversão */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tag Badge de Destaque com Cor Oficial Laranja */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF7900]/20 text-[#FF7900] border border-[#FF7900]/30 backdrop-blur-md shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[#FF7900]" />
              <span>Experiência Nº 1 em São Miguel dos Milagres</span>
            </div>

            {/* Headline com Tipografia Agressiva & Destaque Laranja/Dourado */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] text-white">
              Acelere na Trilha,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7900] via-amber-400 to-[#65A51C]">
                Sinta a Liberdade
              </span>
            </h1>

            {/* Subtítulo Claro e Evocativo */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Explore túneis de coqueirais, praias paradisíacas e mirantes de tirar o fôlego a bordo de quadriciclos potentes e automáticos. Guias nativos, instrução prática e segurança total.
            </p>

            {/* Botões de Ação Duplos (Mobile First >= 48px) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href={getWhatsAppUrl()}
                target="_blank"
                variant="accent"
                size="lg"
                icon={MessageCircle}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Garantir Vaga no WhatsApp
              </Button>
              <Button
                href="#roteiros"
                variant="outlineDark"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Conhecer Roteiros
              </Button>
            </div>

            {/* Mini Micro-Badges de Confiança */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-[#65A51C] shrink-0" />
                <span className="text-xs text-zinc-100 font-semibold leading-tight">100% Guiado & Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-left bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <Compass className="w-5 h-5 text-[#FF7900] shrink-0" />
                <span className="text-xs text-zinc-100 font-semibold leading-tight">Quadris Automáticos</span>
              </div>
              <div className="flex items-center gap-2 text-left bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                <Star className="w-5 h-5 text-[#FF7900] shrink-0 fill-[#FF7900]" />
                <span className="text-xs text-zinc-100 font-semibold leading-tight">Nota Máxima 5 Estrelas</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual - Card Flutuante de Ação */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card-dark p-2 border border-white/15 shadow-2xl group">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                <img
                  src="/images/trilha_acao_03.jpeg"
                  alt="Aventura de quadriciclo em trilha"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Floating pill de status */}
                <div className="absolute top-4 left-4 bg-[#161616]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FF7900]/30 text-xs font-bold text-[#FF7900] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#65A51C] animate-ping" />
                  <span>Vagas abertas para esta semana</span>
                </div>

                {/* Legenda na imagem */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold block">Costa dos Corais / AL</span>
                  <p className="text-lg font-bold text-white leading-tight">Passeios diários das 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
