import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';
import { companyData } from '../../data/company';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function LocationSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("trail tour milagres " + companyData.address)}`;

  return (
    <section id="contato" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Onde Estamos"
          badgeVariant="orange"
          title="Nossa Base & Ponto de"
          titleHighlight="Partida"
          description="Localização de fácil acesso no coração de São Miguel dos Milagres, com ponto de apoio completo e estacionamento."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Card com Detalhes da Base */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="bg-slate-50/70 p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF7900]/15 text-[#FF7900] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Endereço da Base</h3>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {companyData.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF7900]/15 text-[#FF7900] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Horário de Operação</h3>
                  <p className="text-sm text-slate-700 mt-1">
                    {companyData.hours}
                  </p>
                  <span className="text-xs text-[#65A51C] font-bold block mt-0.5">
                    Saídas com agendamento prévio
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">WhatsApp Oficial</h3>
                  <p className="text-sm text-slate-700 mt-1">
                    {companyData.phone}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-col gap-3">
                <Button
                  href={googleMapsUrl}
                  target="_blank"
                  variant="outline"
                  size="md"
                  icon={Navigation}
                  iconPosition="left"
                  className="w-full text-center"
                >
                  Abrir no Google Maps
                </Button>
                <Button
                  href={getWhatsAppUrl("Olá! Gostaria de saber como chegar na base da Trail Tour.")}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  icon={MessageCircle}
                  iconPosition="left"
                  className="w-full text-center"
                >
                  Falar no WhatsApp
                </Button>
              </div>

            </GlassCard>
          </div>

          {/* Mapa Visual / Ponto Turístico com Imagem da Base */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 relative group">
              <div className="relative h-80 sm:h-96 w-full">
                <img
                  src="/images/ponto_turistico_07.jpeg"
                  alt="Ponto turístico e ponto de encontro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-[#FF7900] text-white inline-block mb-2 shadow-md">
                    Ponto Estratégico
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black">
                    Ponto de Partida com Estrutura Completa
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-200 mt-1 max-w-lg">
                    Área para instruções práticas, estacionamento e suporte para que você inicie sua trilha com total conforto.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
