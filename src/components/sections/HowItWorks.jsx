import React from 'react';
import { MessageSquare, CalendarCheck, Compass, Check, ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Escolha Seu Roteiro",
      description: "Navegue pelos nossos circuitos (Praias, Coqueirais ou Pôr do Sol) e veja qual combina mais com o seu perfil de aventura.",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Consulte Vagas no WhatsApp",
      description: "Fale diretamente com nossa equipe. Informamos os horários disponíveis, valores da temporada e reservamos o seu dia.",
    },
    {
      number: "03",
      icon: Compass,
      title: "Chegue na Base & Acelere!",
      description: "Receba as instruções de segurança, faça o test-drive inicial na pista de treino e parta para a melhor trilha da sua vida.",
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#161616] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Passo a Passo Simples"
          badgeVariant="orange"
          title="Como Funciona o Seu"
          titleHighlight="Agendamento"
          description="Sem formulários complicados ou taxas ocultas. Processo 100% humanizado e rápido pelo WhatsApp oficial."
          light={true}
        />

        {/* Grid dos 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FF7900]/20 text-[#FF7900] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-100 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Atendimento rápido e descomplicado</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Central de Agendamento */}
        <div className="mt-14 text-center">
          <Button
            href={getWhatsAppUrl("Olá! Gostaria de agendar meu passeio de quadriciclo.")}
            target="_blank"
            variant="accent"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Iniciar Agendamento no WhatsApp
          </Button>
        </div>

      </div>
    </section>
  );
}
