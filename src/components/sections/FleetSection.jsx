import React from 'react';
import { Shield, Wrench, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { fleetData } from '../../data/fleetData';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function FleetSection() {
  return (
    <section id="frota" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Nossos Veículos"
          badgeVariant="amber"
          title="Frota Robusta &"
          titleHighlight="100% Revisada"
          description="Máquinas modernas e fáceis de pilotar, projetadas para conforto tanto do condutor quanto do carona em qualquer tipo de trilha ou areia."
          light={true}
        />

        {/* Grid de Veículos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {fleetData.map((vehicle) => (
            <GlassCard
              key={vehicle.id}
              variant="dark"
              className="border border-white/15 bg-slate-950/60 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Imagem do Veículo com Zoom Suave */}
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-amber-500 text-slate-950 shadow-md">
                    {vehicle.tag}
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
                    {vehicle.category}
                  </div>
                </div>

                {/* Título e Categoria */}
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {vehicle.name}
                </h3>

                {/* Especificações Técnicas em Grid */}
                <div className="grid grid-cols-2 gap-3 my-6 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[11px] text-slate-400 uppercase font-bold block">Motorização</span>
                    <strong className="text-sm text-amber-400 font-bold">{vehicle.engine}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[11px] text-slate-400 uppercase font-bold block">Capacidade</span>
                    <strong className="text-sm text-emerald-400 font-bold">{vehicle.capacity}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[11px] text-slate-400 uppercase font-bold block">Câmbio</span>
                    <strong className="text-sm text-slate-200 font-semibold">{vehicle.transmission}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[11px] text-slate-400 uppercase font-bold block">Tração</span>
                    <strong className="text-sm text-slate-200 font-semibold">{vehicle.traction}</strong>
                  </div>
                </div>

                {/* Lista de Atributos */}
                <ul className="space-y-2 mb-6">
                  {vehicle.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de Reserva Específico */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  href={getWhatsAppUrl(`Quadriciclo ${vehicle.bookingParam}`)}
                  target="_blank"
                  variant="accent"
                  size="md"
                  icon={MessageCircle}
                  iconPosition="left"
                  className="w-full text-center"
                >
                  Consultar Disponibilidade do {vehicle.name.split(' ')[0]}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Faixa Inferior de Garantia Mecânica */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Check-up Preventivo Rigoroso</h4>
              <p className="text-xs text-slate-400">Pneus calibrados, freios e níveis inspecionados antes de cada saída.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Equipamentos Higienizados</h4>
              <p className="text-xs text-slate-400">Capacetes limpos com produtos certificados para cada novo cliente.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
