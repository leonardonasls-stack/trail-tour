import React from 'react';
import { ShieldCheck, HardHat, Compass, Sparkles, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';

export default function SafetyFeatures() {
  const safetyPoints = [
    {
      icon: HardHat,
      title: "Equipamentos de Proteção Certificados",
      description: "Capacetes higienizados e inspecionados individualmente antes de cada passeio, disponíveis para condutores e acompanhantes.",
      color: "emerald"
    },
    {
      icon: Compass,
      title: "Guias Nativos & Especializados",
      description: "Profissionais nascidos na região que conhecem cada centímetro da rota, tábua das marés e pontos seguros de parada.",
      color: "amber"
    },
    {
      icon: ShieldCheck,
      title: "Test-Drive & Treinamento Inicial",
      description: "Instrução técnica e prática em pista de teste na base para que até quem nunca pilotou se sinta no controle total.",
      color: "blue"
    },
    {
      icon: Sparkles,
      title: "Revisão Mecânica Preventiva Diária",
      description: "Calibragem, sistema de freios, tração e fluídos verificados minuciosamente antes de cada grupo entrar na trilha.",
      color: "orange"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Segurança em 1º Lugar"
          badgeVariant="emerald"
          title="Aventura com Máxima"
          titleHighlight="Proteção & Cuidado"
          description="Aqui na Trail Tour Milagres, a emoção da trilha vem acompanhada de protocolos rígidos para que você e sua família aproveitem cada segundo sem preocupações."
        />

        {/* Grid de Diferenciais de Segurança */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={index}
                className="p-6 bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                    item.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-600' :
                    item.color === 'amber' ? 'bg-amber-500/10 text-amber-600' :
                    item.color === 'blue' ? 'bg-blue-500/10 text-blue-600' :
                    'bg-orange-500/10 text-orange-600'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Protocolo Padrão Trail Tour</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Faixa em Destaque com Imagem Real de Turistas com Capacete */}
        <div className="mt-16 rounded-3xl overflow-hidden glass-card bg-slate-900 text-white p-8 sm:p-12 relative border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Passeio Apto Para Toda Família
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                Pilote com tranquilidade: você no comando, nós no apoio
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nossos guias acompanham o grupo durante todo o trajeto em velocidade controlada, prestando assistência imediata, tirando fotos profissionais e garantindo que ninguém fique para trás.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>100% dos guias capacitados</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span>Atendimento humanizado</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/15 aspect-[4/3] shadow-lg">
                <img
                  src="/images/turistas_grupo_10.jpeg"
                  alt="Turistas com capacetes equipados para trilha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
