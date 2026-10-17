import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqData } from '../../data/faqData';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Tire Suas Dúvidas"
          badgeVariant="orange"
          title="Perguntas Frequentes &"
          titleHighlight="Segurança"
          description="Tudo o que você precisa saber sobre CNH, equipamentos, idade mínima e condições de chuva para fazer o seu passeio com tranquilidade."
        />

        {/* Lista de Acordeão */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <GlassCard
                key={faq.id || index}
                hoverEffect={false}
                className="bg-white border border-slate-200/80 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#FF7900] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

        {/* Bloco de Ajuda Rápida no WhatsApp */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <HelpCircle className="w-10 h-10 text-[#FF7900] mx-auto mb-3" />
          <h3 className="text-xl font-black text-slate-900">Ainda tem alguma dúvida específica?</h3>
          <p className="text-sm text-slate-700 mt-1 max-w-md mx-auto">
            Nossa equipe de guias e atendimento está disponível para esclarecer qualquer detalhe pelo WhatsApp.
          </p>
          <div className="mt-5">
            <Button
              href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre o passeio de quadriciclo.")}
              target="_blank"
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              iconPosition="left"
            >
              Conversar com Nossos Guias
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
