/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { QuickNavSection } from './components/QuickNavSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { HoursSection } from './components/HoursSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { InstagramSection } from './components/InstagramSection.tsx';
import { ReviewSection } from './components/ReviewSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { TopHeader } from './components/TopHeader.tsx';
import { FloatingBottomBar } from './components/FloatingBottomBar.tsx';
import { NavigationIndicators } from './components/NavigationIndicators.tsx';
import { ImageLightbox } from './components/ImageLightbox.tsx';
import { OFFICIAL_LINKS } from './types.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState('apresentacao');
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [isPricingLightboxOpen, setIsPricingLightboxOpen] = useState(false);

  // Monitor scroll position to update active section & toggle floating bottom bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroThreshold = 350;
      setShowFloatingBar(scrollY > heroThreshold);

      const sectionElements = [
        'apresentacao',
        'navegacao-rapida',
        'tabela-precos',
        'horarios',
        'localizacao',
        'instagram-secao',
        'avaliar',
        'contato',
      ];

      for (const sectionId of sectionElements) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenPricingModal = () => {
    setIsPricingLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Background Subtle Radial Glow & Luxury Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top center spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/[0.04] via-zinc-800/[0.02] to-transparent rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Top Header */}
      <TopHeader onNavigate={scrollToSection} />

      {/* Main Container - Mobile Centered Frame with Luxury Padding */}
      <main className="relative z-10 flex-1 w-full max-w-lg mx-auto flex flex-col pb-20 sm:pb-24">
        {/* SEÇÃO 1: APRESENTAÇÃO */}
        <HeroSection onScrollToNext={() => scrollToSection('navegacao-rapida')} />

        {/* Vertical divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto my-4" />

        {/* SEÇÃO 2: NAVEGAÇÃO RÁPIDA */}
        <QuickNavSection onOpenPricing={() => scrollToSection('tabela-precos')} />

        {/* Vertical divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto my-4" />

        {/* SEÇÃO 3: TABELA DE PREÇOS */}
        <PricingSection onOpenLightbox={handleOpenPricingModal} />

        {/* Vertical divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto my-4" />

        {/* SEÇÃO 4: HORÁRIOS E FUNCIONAMENTO */}
        <HoursSection />

        {/* Vertical divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto my-4" />

        {/* SEÇÃO 5: LOCALIZAÇÃO */}
        <LocationSection />

        {/* Vertical divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto my-4" />

        {/* SEÇÃO 6: INSTAGRAM */}
        <InstagramSection />

        {/* Vertical divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto my-4" />

        {/* SEÇÃO 7: AVALIE A BARBEARIA */}
        <ReviewSection />

        {/* Vertical divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto my-4" />

        {/* SEÇÃO 8: CONTATO & FOOTER */}
        <ContactSection />
      </main>

      {/* Floating Section Indicators for Desktop */}
      <NavigationIndicators
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Compact Floating Bottom Action Bar on Scroll (Mobile friendly) */}
      <FloatingBottomBar
        visible={showFloatingBar}
        onOpenPricing={() => scrollToSection('tabela-precos')}
      />

      {/* Fullscreen Interactive Lightbox for Price Table */}
      <ImageLightbox
        isOpen={isPricingLightboxOpen}
        onClose={() => setIsPricingLightboxOpen(false)}
        imageUrl={OFFICIAL_LINKS.pricingImage}
        title="Tabela de Preços Oficial"
      />
    </div>
  );
}
