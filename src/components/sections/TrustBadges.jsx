import React from 'react';
import { ShieldCheck, Compass, Users, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Segurança Certificada",
      desc: "Capacetes higienizados e seguro incluso",
      color: "text-[#65A51C]",
      bg: "bg-[#65A51C]/15",
    },
    {
      icon: Compass,
      title: "Guias Nativos Credenciados",
      desc: "Conhecem as melhores trilhas e marés",
      color: "text-[#FF7900]",
      bg: "bg-[#FF7900]/15",
    },
    {
      icon: Users,
      title: "Treinamento para Iniciantes",
      desc: "Test-drive antes de sair na trilha",
      color: "text-[#8B4A25]",
      bg: "bg-[#8B4A25]/15",
    },
    {
      icon: Sparkles,
      title: "Fotos & Vídeos Inclusos",
      desc: "Nossos guias registram seus melhores momentos",
      color: "text-[#FF7900]",
      bg: "bg-[#FF7900]/15",
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="glass-card bg-white/90 p-5 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 border border-white/60 shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900 leading-snug">{item.title}</p>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
