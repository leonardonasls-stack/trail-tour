import React from 'react';
import { Compass, Instagram, Phone, MapPin, Heart, Shield } from 'lucide-react';
import { companyData } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#161616] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1 - Identidade com Logo Oficial */}
          <div className="space-y-4">
            <a href="#inicio" className="block focus:outline-none">
              <img
                src="/images/logo_principal_horizontal.png"
                alt="Quadriciclo Milagres Adventure"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
              Passeios guiados de quadriciclo pelas praias, túneis de coqueirais e mirantes paradisíacos na Costa dos Corais, Alagoas.
            </p>
          </div>

          {/* Coluna 2 - Roteiros Rápidos */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Roteiros</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#roteiros" className="hover:text-[#FF7900] transition-colors">
                  Circuito Praias & Piscinas
                </a>
              </li>
              <li>
                <a href="#roteiros" className="hover:text-[#FF7900] transition-colors">
                  Trilha dos Coqueirais & Mirante
                </a>
              </li>
              <li>
                <a href="#roteiros" className="hover:text-[#FF7900] transition-colors">
                  Sunset VIP (Pôr do Sol)
                </a>
              </li>
              <li>
                <a href="#frota" className="hover:text-[#FF7900] transition-colors">
                  Nossos Quadriciclos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Informações Úteis */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Informações</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#duvidas" className="hover:text-[#FF7900] transition-colors">
                  Dúvidas sobre CNH & Regras
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-[#FF7900] transition-colors">
                  Equipamentos Inclusos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#FF7900] transition-colors">
                  Galeria de Fotos Reais
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#FF7900] transition-colors">
                  Localização da Base
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato Direto */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Atendimento</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF7900] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {companyData.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#FF7900] shrink-0" />
                <a
                  href={companyData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {companyData.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-slate-300">
                <MapPin className="w-4 h-4 text-[#65A51C] shrink-0 mt-0.5" />
                <span>{companyData.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior de Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} {companyData.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Segurança em 1º Lugar <Shield className="w-3.5 h-3.5 text-[#65A51C]" /> São Miguel dos Milagres - AL
          </p>
        </div>

      </div>
    </footer>
  );
}
