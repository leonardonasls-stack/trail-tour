import React from 'react';
import { ShieldCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';

export default function SafetyFeatures() {
  const safetyPoints = [
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
          badgeVariant="orange"
          title="Aventura com Máxima"
          titleHighlight="Proteção & Cuidado"
          description="Aqui na Quadriciclo Milagres Adventure, a emoção da trilha vem acompanhada de protocolos rígidos para que você e sua família aproveitem cada segundo sem preocupações."
        />

        {/* Grid de Diferenciais de Segurança */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={index}
                className="p-6 bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                    item.color === 'emerald' ? 'bg-[#65A51C]/15 text-[#4D8014]' :
                    item.color === 'amber' ? 'bg-[#FF7900]/15 text-[#E06800]' :
                    item.color === 'blue' ? 'bg-[#8B4A25]/15 text-[#8B4A25]' :
                    'bg-[#FF7900]/15 text-[#E06800]'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#3B630E]">
                  <CheckCircle2 className="w-4 h-4 text-[#3B630E]" />
                  <span>Padrão Milagres Adventure</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
