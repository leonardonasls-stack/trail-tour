import React from 'react';
import TopBar from './components/layout/TopBar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import HeroSection from './components/sections/HeroSection';
import TrustBadges from './components/sections/TrustBadges';
import RoutesSection from './components/sections/RoutesSection';
import FleetSection from './components/sections/FleetSection';
import GallerySection from './components/sections/GallerySection';
import Testimonials from './components/sections/Testimonials';
import FaqSection from './components/sections/FaqSection';
import LocationSection from './components/sections/LocationSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Barra de Navegação com Glassmorphism */}
      <TopBar />

      {/* Conteúdo Principal da SPA */}
      <main className="flex-1">
        {/* 1. Hero Section (Aventura pura + CTAs) */}
        <HeroSection />

        {/* 2. Faixa de Credibilidade / Diferenciais Rápidos */}
        <TrustBadges />

        {/* 3. Vitrine dos Roteiros de Aventura (Sem Preços) */}
        <RoutesSection />

        {/* 4. Apresentação da Frota Robusta */}
        <FleetSection />

        {/* 5. Galeria com Fotos Reais dos Passeios */}
        <GallerySection />

        {/* 6. Depoimentos e Avaliações de Turistas */}
        <Testimonials />

        {/* 7. Perguntas Frequentes & Diretrizes de Segurança */}
        <FaqSection />

        {/* 8. Localização da Base & Ponto de Saída */}
        <LocationSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante de Conversão Contínua no WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
