import React from 'react';
import { Clock, Mountain, MapPin, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function RouteCard({ route }) {
  return (
    <GlassCard
      className="flex flex-col h-full group bg-white/85 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Imagem do Roteiro com Overlay e Badges */}
      <div className="relative h-60 sm:h-64 overflow-hidden">
        <img
          src={route.image}
          alt={route.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        
        {/* Badge de Destaque Flutuante */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md border border-white/20 shadow-md">
            {route.highlight}
          </span>
        </div>

        {/* Badges de Dificuldade e Duração na base da foto */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <Badge variant={route.difficultyLevel} size="sm">
            {route.difficulty}
          </Badge>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/70 text-slate-200 backdrop-blur-md border border-white/10">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{route.duration}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        
        <div className="space-y-4">
          {/* Terreno */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8B4A25] bg-[#8B4A25]/10 px-3 py-1.5 rounded-lg border border-[#8B4A25]/20">
            <Mountain className="w-4 h-4 text-[#8B4A25] shrink-0" />
            <span>Terreno: {route.terrain}</span>
          </div>

          {/* Título e Descrição */}
          <div>
            <h3 className="text-xl font-black text-slate-900 leading-snug group-hover:text-[#FF7900] transition-colors">
              {route.title}
            </h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              {route.description}
            </p>
          </div>

          {/* Paradas & Itinerário */}
          <div className="pt-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
              Principais Paradas:
            </span>
            <ul className="space-y-1.5">
              {route.stops.map((stop, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-[#FF7900] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{stop.name}:</strong>{' '}
                    <span className="text-slate-600">{stop.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* O que está incluso */}
          <div className="pt-2 border-t border-slate-200">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
              Incluso no passeio:
            </span>
            <div className="flex flex-wrap gap-2">
              {route.includes.map((inc, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md"
                >
                  <CheckCircle className="w-3 h-3 text-[#65A51C] shrink-0" />
                  {inc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Inteligente de Conversão sem preço */}
        <div className="pt-4 border-t border-slate-200">
          <Button
            href={getWhatsAppUrl(route.title)}
            target="_blank"
            variant="primary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full text-center"
          >
            Consultar Vagas no WhatsApp
          </Button>
          <span className="block text-center text-[11px] text-slate-600 mt-2 font-semibold">
            Tarifas e disponibilidade confirmadas na hora
          </span>
        </div>

      </div>
    </GlassCard>
  );
}
