import React from 'react';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#15803D] hover:bg-[#166534] text-white pl-3.5 pr-5 py-3 rounded-full shadow-lg shadow-black/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        {/* Ícone Oficial do WhatsApp */}
        <svg
          className="w-7 h-7 fill-white shrink-0"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M16.004 3.2c-7.072 0-12.8 5.728-12.8 12.8 0 2.256.592 4.464 1.712 6.416L3.2 28.8l6.56-1.712a12.74 12.74 0 0 0 6.244 1.632h.005c7.067 0 12.795-5.728 12.795-12.8 0-3.42-1.333-6.635-3.749-9.051A12.712 12.712 0 0 0 16.004 3.2Zm0 23.36h-.004a10.6 10.6 0 0 1-5.403-1.477l-.388-.23-3.893 1.019 1.04-3.797-.252-.401a10.573 10.573 0 0 1-1.624-5.674c0-5.867 4.773-10.64 10.644-10.64 2.843 0 5.515 1.109 7.525 3.12a10.573 10.573 0 0 1 3.115 7.525c0 5.872-4.773 10.645-10.64 10.645Zm5.84-7.968c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.351-.498-2.573-1.588-.951-.848-1.593-1.896-1.78-2.216-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.624-.524-.539-.72-.549l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.257 3.445 5.467 4.832.764.33 1.36.527 1.825.675.767.244 1.465.209 2.016.127.615-.092 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
        </svg>

        <span className="text-sm sm:text-base font-extrabold tracking-wide">
          Fale conosco
        </span>
      </a>
    </aside>
  );
}
