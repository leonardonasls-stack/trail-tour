import React from 'react';
import { routesData } from '../../data/routesData';
import SectionHeader from '../common/SectionHeader';
import RouteCard from './RouteCard';
import { Compass } from 'lucide-react';

export default function RoutesSection() {
  return (
    <section id="roteiros" className="py-20 sm:py-28 bg-slate-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <SectionHeader
          badge="Roteiros Guiados"
          badgeVariant="emerald"
          title="Escolha Sua Próxima"
          titleHighlight="Aventura em Milagres"
          description="Circuitos pensados para proporcionar emoção, cenários inesquecíveis e momentos de pura contemplação. Todos os passeios contam com guia nativo e quadriciclos revisados."
        />

        {/* Grid de Roteiros Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routesData.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>

        {/* Rodapé da Seção com Aviso Amigável */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-sm">
          <p className="text-xs sm:text-sm text-slate-600">
            💡 <strong>Passeios privativos ou grupos maiores?</strong> Fale conosco no WhatsApp para personalizarmos seu combo com saídas exclusivas.
          </p>
        </div>

      </div>
    </section>
  );
}
