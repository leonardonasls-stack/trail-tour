import React from 'react';
import { Camera, Instagram, ExternalLink } from 'lucide-react';
import { galleryData } from '../../data/galleryData';
import { companyData } from '../../data/company';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

export default function GallerySection() {
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Galeria Real"
          badgeVariant="emerald"
          title="Cenários Reais de"
          titleHighlight="São Miguel dos Milagres"
          description="Confira alguns dos momentos vividos por nossos turistas ao longo das praias, trilhas ecológicas e mirantes da Costa dos Corais."
        />

        {/* Mosaico Responsivo de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryData.map((item, index) => {
            // Destaque visual expandido para fotos ímpares estratégicas
            const isWide = index === 0 || index === 7;
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl overflow-hidden group aspect-square ${
                  isWide ? 'col-span-2 aspect-[16/9]' : ''
                } shadow-md border border-white/50 bg-slate-200`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay com informações ao passar o cursor / foco */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link para o Instagram */}
        <div className="mt-12 text-center">
          <Button
            href={companyData.instagramUrl}
            target="_blank"
            variant="outline"
            size="md"
            icon={Instagram}
            iconPosition="left"
          >
            Ver mais fotos no nosso Instagram {companyData.instagramHandle}
          </Button>
        </div>

      </div>
    </section>
  );
}
