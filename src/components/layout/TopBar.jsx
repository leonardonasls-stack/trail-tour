import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, MessageCircle } from 'lucide-react';
import { companyData } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

const PILL_ACTIVE =
  'text-[#FF7900] bg-gradient-to-b from-white to-orange-50 border-[#FF7900]/40 shadow-[0_1px_2px_rgba(255,121,0,0.12),0_4px_10px_-2px_rgba(255,121,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]';
const PILL_INACTIVE =
  'text-slate-700 bg-transparent border-transparent hover:text-[#FF7900] hover:bg-white/60';

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeId, setActiveId] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll-spy: última seção cujo topo já passou da altura do header
      const offset = 140;
      let current = navLinks[0].href.slice(1);
      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1));
        if (el && el.getBoundingClientRect().top <= offset) {
          current = link.href.slice(1);
        }
      }
      // Fim da página: força o último item
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = navLinks[navLinks.length - 1].href.slice(1);
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Roteiros', href: '#roteiros' },
    { label: 'Frota', href: '#frota' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Localização', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-white/60 backdrop-blur-sm border-b border-white/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Marca Oficial */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none py-0.5"
            aria-label="Quadriciclo Milagres Adventure - Início"
          >
            <img
              src="/images/logo_principal_horizontal.png"
              alt="Quadriciclo Milagres Adventure"
              className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-sm"
            />
          </a>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={activeId === link.href.slice(1) ? 'page' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeId === link.href.slice(1) ? PILL_ACTIVE : PILL_INACTIVE
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#FF7900] hover:bg-[#E06800] transition-all shadow-md shadow-[#FF7900]/25 hover:shadow-lg hover:shadow-[#FF7900]/35 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar Vagas</span>
            </a>
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#FF7900] hover:bg-white/50 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Retrátil com Glassmorphism */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav mt-3 border-t border-white/30 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={activeId === link.href.slice(1) ? 'page' : undefined}
                className={`px-4 py-2.5 rounded-full text-base font-semibold border transition-all duration-200 ${
                  activeId === link.href.slice(1) ? PILL_ACTIVE : PILL_INACTIVE
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-white bg-[#FF7900] hover:bg-[#E06800] shadow-md shadow-[#FF7900]/25"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
