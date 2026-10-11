import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, MessageCircle } from 'lucide-react';
import { companyData } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
          {/* Logo / Marca */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                {companyData.name}
              </span>
              <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-widest">
                São Miguel dos Milagres
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 hover:-translate-y-0.5"
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
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-white/50 focus:outline-none"
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
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
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
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md"
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
