import React, { useState } from 'react';
import TopBar from './components/layout/TopBar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import CookieConsent from './components/layout/CookieConsent';
import HeroSection from './components/sections/HeroSection';
import TrustBadges from './components/sections/TrustBadges';
import RoutesSection from './components/sections/RoutesSection';
import FleetSection from './components/sections/FleetSection';
import SafetyFeatures from './components/sections/SafetyFeatures';
import FamilySection from './components/sections/FamilySection';
import HowItWorks from './components/sections/HowItWorks';
import GallerySection from './components/sections/GallerySection';
import Testimonials from './components/sections/Testimonials';
import FaqSection from './components/sections/FaqSection';
import LocationSection from './components/sections/LocationSection';

export default function App() {
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [preferencesOpenRequest, setPreferencesOpenRequest] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Barra de Navegação Adaptativa com Glassmorphism */}
      <TopBar />

      {/* Conteúdo Principal da SPA */}
      <main className="flex-1">
        {/* 1. Hero Section (Aventura pura + CTAs duplos) */}
        <HeroSection />

        {/* 2. Faixa de Credibilidade / Diferenciais Rápidos */}
        <TrustBadges />

        {/* 3. Vitrine dos Roteiros de Aventura (Sem Preços) */}
        <RoutesSection />

        {/* 4. Apresentação da Frota Robusta & Capacidade */}
        <FleetSection />

        {/* 5. Segurança Avançada, Guias Nativos & Treinamento */}
        <SafetyFeatures />

        {/* 6. Passeio Apto Para Toda Família (Seção Dedicada) */}
        <FamilySection />

        {/* 7. Como Funciona o Agendamento (Passo a passo) */}
        <HowItWorks />

        {/* 8. Galeria com Fotos Reais dos Passeios */}
        <GallerySection />

        {/* 9. Depoimentos e Avaliações de Turistas Reais */}
        <Testimonials />

        {/* 10. Perguntas Frequentes & Mitigação de Dúvidas (Acordeão) */}
        <FaqSection />

        {/* 11. Localização da Base & Ponto de Saída */}
        <LocationSection />
      </main>

      {/* Rodapé Institucional com Atalhos LGPD */}
      <Footer
        onOpenPrivacyPolicy={() => setPolicyModalOpen(true)}
        onOpenCookiePreferences={() => setPreferencesOpenRequest(true)}
      />

      {/* Banner de Consentimento Granular + Modal de Política de Privacidade e Cookies (LGPD) */}
      <CookieConsent
        policyModalOpen={policyModalOpen}
        setPolicyModalOpen={setPolicyModalOpen}
        preferencesOpenRequest={preferencesOpenRequest}
        setPreferencesOpenRequest={setPreferencesOpenRequest}
      />

      {/* Botão Flutuante de Conversão Contínua no WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
