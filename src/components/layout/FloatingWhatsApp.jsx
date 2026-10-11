import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3.5 rounded-full shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 transition-all hover:scale-105"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-sm font-bold pr-1 hidden sm:inline-block">
          Agendar Passeio
        </span>
      </a>
    </aside>
  );
}
