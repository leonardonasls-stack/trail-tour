import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Instagram, ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryData } from '../../data/galleryData';
import { companyData } from '../../data/company';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('50% 50%');

  const total = galleryData.length;
  const isOpen = activeIndex !== null;
  const activeItem = isOpen ? galleryData[activeIndex] : null;

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    setZoomed(false);
  }, []);

  const goTo = useCallback(
    (delta) => {
      setZoomed(false);
      setActiveIndex((prev) => (prev === null ? prev : (prev + delta + total) % total));
    },
    [total]
  );

  // Teclado (Esc, setas) e bloqueio de rolagem enquanto o lightbox está aberto
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goTo(1);
      if (e.key === 'ArrowLeft') goTo(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeLightbox, goTo]);

  // Clique na foto ampliada alterna o zoom a partir do ponto clicado
  const handleZoomClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
    setZoomed((z) => !z);
  };

  // Lista duplicada para o loop infinito (a animação desloca -50%)
  const loopItems = [...galleryData, ...galleryData];

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <SectionHeader
          badge="Galeria Real"
          badgeVariant="orange"
          title="Cenários Reais de"
          titleHighlight="São Miguel dos Milagres"
          description="Confira alguns dos momentos vividos por nossos turistas ao longo das praias, trilhas ecológicas e mirantes da Costa dos Corais."
        />
      </div>

      {/* Carrossel horizontal: contido no container max-w-7xl e com cards em proporção ajustada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gallery-marquee mt-4 rounded-3xl" role="region" aria-label="Galeria de fotos">
          <div className="gallery-track">
            {loopItems.map((item, i) => {
              const realIndex = i % total;
              const isClone = i >= total;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(realIndex)}
                  aria-hidden={isClone ? 'true' : undefined}
                  tabIndex={isClone ? -1 : 0}
                  aria-label={`Ampliar foto: ${item.title}`}
                  className="relative shrink-0 mr-4 w-60 sm:w-72 h-44 sm:h-52 rounded-2xl overflow-hidden group shadow-md border border-white/50 bg-slate-200 cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF7900]/60"
                >
                  <img
                    src={item.src}
                    alt={isClone ? '' : item.alt || item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    draggable={false}
                  />

                  {/* Overlay com informações ao passar o cursor / foco */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
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

      {/* Lightbox com zoom */}
      {isOpen && activeItem && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo(-1); }}
            aria-label="Foto anterior"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo(1); }}
            aria-label="Próxima foto"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <figure className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div
              className={`overflow-hidden rounded-xl shadow-2xl ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={handleZoomClick}
            >
              <img
                src={activeItem.src}
                alt={activeItem.alt || activeItem.title}
                draggable={false}
                style={{ transformOrigin: zoomOrigin }}
                className={`block max-h-[75vh] w-auto max-w-full object-contain transition-transform duration-300 ease-out ${
                  zoomed ? 'scale-[2]' : 'scale-100'
                }`}
              />
            </div>
            <figcaption className="mt-4 text-center text-white">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                {activeItem.category}
              </span>
              <span className="text-base font-semibold">{activeItem.title}</span>
              <span className="block text-xs text-zinc-200 mt-1">
                Clique na foto para {zoomed ? 'reduzir' : 'ampliar'} · {activeIndex + 1} / {total}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
