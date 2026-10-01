import React from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import { GoogleMaps3DIcon } from './Brand3DIcons.tsx';
import { Navigation, MapPin } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-8 px-4 max-w-lg mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="flex items-center gap-1.5 mb-1 text-zinc-400">
          <MapPin size={16} />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase">
            Endereço & Rota
          </span>
        </div>
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider metallic-silver-text uppercase">
          ONDE ESTAMOS
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mt-2" />
      </div>

      {/* Location Card */}
      <div className="relative group rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.7)] text-center overflow-hidden">
        {/* Top metallic sheen */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Ambient Map Grid Graphic Background */}
        <div className="relative w-full h-36 rounded-2xl bg-zinc-900 border border-zinc-800/80 mb-5 overflow-hidden flex items-center justify-center">
          {/* Subtle stylized dark street grid */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '16px 16px, 32px 32px, 32px 32px',
            }}
          />
          
          {/* Radar ripple rings */}
          <div className="absolute w-24 h-24 rounded-full border border-sky-500/20 animate-ping opacity-75" />
          <div className="absolute w-32 h-32 rounded-full border border-sky-500/10" />

          {/* 3D Google Maps Pin in Center */}
          <div className="relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            <GoogleMaps3DIcon size={64} />
          </div>
        </div>

        {/* Text Details */}
        <h3 className="text-base font-bold text-white tracking-wide mb-1">
          RLCB Barbearia
        </h3>
        <p className="text-xs text-zinc-400 max-w-xs mx-auto mb-5 leading-relaxed">
          Abra o Google Maps para visualizar a rota exata, tempo estimado e direções de navegação em tempo real até nossa barbearia.
        </p>

        {/* Main Button: VER LOCALIZAÇÃO */}
        <a
          href={OFFICIAL_LINKS.location}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.5)] active:scale-[0.98] transition-all min-h-[48px]"
        >
          <Navigation size={18} />
          <span>VER LOCALIZAÇÃO</span>
        </a>
      </div>
    </section>
  );
};
