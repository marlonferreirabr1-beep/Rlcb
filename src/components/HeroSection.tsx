import React from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import { ChevronDown } from 'lucide-react';
import { WhatsAppOfficialIcon } from './Brand3DIcons.tsx';

interface HeroSectionProps {
  onScrollToNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToNext }) => {
  return (
    <section
      id="apresentacao"
      className="relative min-h-[92vh] flex flex-col items-center justify-between px-5 pt-8 pb-10 text-center select-none"
    >
      {/* Subtle ambient lighting / spotlight behind the logo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-white/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Top micro badge */}
      <div className="pt-2 z-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 bg-zinc-900/80 border border-zinc-800 rounded-full shadow-inner backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Barbearia Premium
        </span>
      </div>

      {/* Central Hero Block: Official Big Logo, Brand Name & Tagline */}
      <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md mx-auto my-auto py-4">
        {/* Official Vintage Barber Logo Container */}
        <div className="relative group mb-6">
          {/* Subtle Ice White Glow Aura around Logo */}
          <div className="absolute -inset-4 bg-gradient-to-b from-white/15 via-white/5 to-transparent rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Genuine transparent PNG logo without white background or distortion */}
          <img
            src={OFFICIAL_LINKS.logo}
            alt="RLCB Barbearia Logo Oficial"
            referrerPolicy="no-referrer"
            className="relative w-56 h-56 sm:w-64 sm:h-64 object-contain filter drop-shadow-[0_15px_30px_rgba(255,255,255,0.12)] transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Brand Typography */}
        <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-[0.18em] metallic-silver-text uppercase mt-1 mb-2">
          RLCB BARBEARIA
        </h1>

        {/* Tagline */}
        <p className="text-zinc-300 text-base sm:text-lg font-light tracking-wide italic mb-7">
          “Seu estilo começa aqui.”
        </p>

        {/* Main CTA Button: FALAR COM A BARBEARIA */}
        <a
          href={OFFICIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full sm:w-80 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 text-white font-semibold text-base tracking-wide flex items-center justify-center gap-3 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.55)] active:scale-[0.98] transition-all duration-200 border border-emerald-400/30 overflow-hidden min-h-[52px]"
        >
          {/* Specular sheen reflection */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          
          <WhatsAppOfficialIcon size={24} className="text-white shrink-0 group-hover:rotate-6 transition-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          <span className="whitespace-nowrap font-medium">FALAR COM A BARBEARIA</span>
        </a>

        {/* Subtle note about arrival order */}
        <span className="text-xs text-zinc-500 tracking-wider uppercase mt-3">
          Atendimento por ordem de chegada
        </span>
      </div>

      {/* Vertical Scroll Indicator Cue */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 pb-2 cursor-pointer" onClick={onScrollToNext}>
        <span className="text-[11px] font-medium tracking-[0.18em] text-zinc-400 uppercase">
          Deslize para ver mais
        </span>
        <div className="p-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-400 animate-bounce">
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
};
