import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { faqData } from '../../data/faqData';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Principal: Coluna Esquerda (Título + Imagem) e Coluna Direita (Acordeão) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Coluna Esquerda */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.12] text-slate-900">
              Antes de ir,
              <span className="block text-[#FF7900]">
                tire suas
              </span>
              <span className="block text-[#FF7900]">
                dúvidas.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-sm">
              As informações essenciais para planejar sua experiência com tranquilidade.
            </p>

            <div className="mt-8 sm:mt-10 w-full max-w-md rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-[16/10]">
              <img
                src="/images/sunset_por_do_sol_09.jpeg"
                alt="Passeio de quadriciclo ao pôr do sol em São Miguel dos Milagres"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Coluna Direita: Lista de Perguntas (Acordeão Clean) */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id || index} className="py-5 sm:py-6 first:pt-2 last:pb-2">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left flex items-center justify-between gap-6 focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#FF7900]' : 'text-slate-900 group-hover:text-[#FF7900]'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#FF7900]' : 'text-slate-700 group-hover:text-[#FF7900]'
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pr-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Barra Inferior de Conversão (CTA Horizontal) */}
        <div className="mt-14 sm:mt-20 rounded-2xl sm:rounded-[22px] bg-white border border-slate-200/90 px-6 sm:px-10 py-6 sm:py-7 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              Seu próximo passeio começa aqui.
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Conte para a equipe como você imagina sua aventura.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida e planejar meu passeio de quadriciclo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF7900] hover:bg-[#E06800] text-white font-bold text-sm shadow-md shadow-[#FF7900]/20 transition-all duration-300 hover:-translate-y-0.5 shrink-0"
          >
            <span>Conversar com a equipe</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
