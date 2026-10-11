import React from 'react';
import TopBar from './components/layout/TopBar';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import { routesData } from './data/routesData';
import { companyData } from './data/company';
import { getWhatsAppUrl } from './utils/whatsappLink';
import { ShieldCheck, MapPin, Award, Clock, Users, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Bar Glassmorphism */}
      <TopBar />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section id="inicio" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              A melhor experiência em São Miguel dos Milagres
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Viva a verdadeira aventura sobre <span className="text-emerald-600">4 rodas</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Trilhas exclusivas entre coqueirais, praias paradisíacas e mirantes de tirar o fôlego. Condução fácil, guias nativos e segurança total para sua família.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#roteiros"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/30 text-center"
              >
                Conhecer os Roteiros
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition text-center"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </section>

        {/* Preview Roteiros */}
        <section id="roteiros" className="py-16 bg-slate-100/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900">Nossos Roteiros Exclusivos</h2>
              <p className="text-slate-600 mt-2">Escolha o seu destino e consulte a disponibilidade para o seu dia</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {routesData.map((route) => (
                <div key={route.id} className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                      {route.highlight}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>{route.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{route.title}</h3>
                      <p className="text-slate-600 text-sm mt-2 leading-relaxed">{route.description}</p>
                    </div>
                    <a
                      href={getWhatsAppUrl(route.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl font-bold text-sm text-center text-white bg-slate-900 hover:bg-emerald-600 transition flex items-center justify-center gap-2"
                    >
                      <span>Consultar Disponibilidade</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
