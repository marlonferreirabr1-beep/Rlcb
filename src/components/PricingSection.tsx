import React from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import { Maximize2, Sparkles, ExternalLink } from 'lucide-react';
import { BarberPole3DIcon } from './Brand3DIcons.tsx';

interface PricingSectionProps {
  onOpenLightbox: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="tabela-precos" className="py-8 px-4 max-w-lg mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="flex items-center gap-2 mb-1">
          <BarberPole3DIcon size={28} />
          <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
            Serviços & Investimento
          </span>
        </div>
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider metallic-silver-text uppercase">
          TABELA DE PREÇOS
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mt-2" />
        <p className="text-xs text-zinc-400 mt-2 max-w-xs">
          Consulte nossa tabela oficial de serviços e procedimentos.
        </p>
      </div>

      {/* Main Pricing Image Card */}
      <div className="relative group rounded-3xl bg-zinc-950/80 border border-zinc-800 p-2.5 sm:p-3 shadow-[0_16px_40px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Top Metallic hairline */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Clickable Image Container with Zoom Affordance */}
        <div
          onClick={onOpenLightbox}
          className="relative w-full overflow-hidden rounded-2xl cursor-pointer bg-zinc-900 flex items-center justify-center min-h-[300px]"
        >
          {/* Official Pricing Table Image - Preserved proportions without distortion */}
          <img
            src={OFFICIAL_LINKS.pricingImage}
            alt="Tabela de Preços Oficial RLCB Barbearia"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[500px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Hover / Tap overlay cue */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-4">
            <div className="w-12 h-12 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center shadow-lg backdrop-blur-sm">
              <Maximize2 size={22} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-black/70 px-3 py-1 rounded-full border border-white/10">
              Toque para ampliar
            </span>
          </div>

          {/* Floating Expand Corner Badge */}
          <div className="absolute top-3 right-3 p-2 rounded-xl bg-zinc-950/80 border border-zinc-700/80 text-zinc-300 backdrop-blur-md">
            <Maximize2 size={16} />
          </div>
        </div>

        {/* Action Button: VER TABELA COMPLETA */}
        <div className="mt-3.5">
          <button
            onClick={onOpenLightbox}
            className="w-full py-4 px-5 rounded-xl bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:bg-white active:scale-[0.98] transition-all cursor-pointer min-h-[50px]"
          >
            <Sparkles size={18} className="text-zinc-900" />
            <span>VER TABELA COMPLETA</span>
          </button>
        </div>
      </div>
    </section>
  );
};
