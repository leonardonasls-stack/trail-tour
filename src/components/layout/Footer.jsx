import React from 'react';
import { Compass, Instagram, Phone, MapPin, Heart, Shield } from 'lucide-react';
import { companyData } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsappLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Coluna 1 - Identidade */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-lg font-black text-white leading-none">
                  {companyData.name}
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest">
                  São Miguel dos Milagres
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Passeios guiados de quadriciclo pelas praias, túneis de coqueirais e mirantes paradisíacos na Costa dos Corais, Alagoas.
            </p>
          </div>

          {/* Coluna 2 - Roteiros Rápidos */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Roteiros</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#roteiros" className="hover:text-emerald-400 transition-colors">
                  Circuito Praias & Piscinas
                </a>
              </li>
              <li>
                <a href="#roteiros" className="hover:text-emerald-400 transition-colors">
                  Trilha dos Coqueirais & Mirante
                </a>
              </li>
              <li>
                <a href="#roteiros" className="hover:text-emerald-400 transition-colors">
                  Sunset VIP (Pôr do Sol)
                </a>
              </li>
              <li>
                <a href="#frota" className="hover:text-emerald-400 transition-colors">
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
                <a href="#duvidas" className="hover:text-emerald-400 transition-colors">
                  Dúvidas sobre CNH & Regras
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-emerald-400 transition-colors">
                  Equipamentos Inclusos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-emerald-400 transition-colors">
                  Galeria de Fotos Reais
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-emerald-400 transition-colors">
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
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
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
                <Instagram className="w-4 h-4 text-amber-400 shrink-0" />
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
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{companyData.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior de Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© {currentYear} {companyData.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-slate-300">
            Segurança em 1º Lugar <Shield className="w-3.5 h-3.5 text-emerald-400" /> São Miguel dos Milagres - AL
          </p>
        </div>

      </div>
    </footer>
  );
}
