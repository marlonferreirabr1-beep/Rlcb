import React from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import { Instagram3DIcon } from './Brand3DIcons.tsx';
import { ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram-secao" className="py-8 px-4 max-w-lg mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-1">
          Galeria & Cortes
        </span>
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider metallic-silver-text uppercase">
          ACOMPANHE NOSSO TRABALHO
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mt-2" />
      </div>

      {/* Instagram Card */}
      <div className="relative group rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-6 shadow-[0_16px_36px_rgba(0,0,0,0.7)] text-center overflow-hidden">
        {/* Top metallic sheen */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Ambient Instagram Magenta Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* 3D High-Relief Instagram Icon in prominent display */}
        <div className="relative inline-block mb-4 filter drop-shadow-[0_12px_24px_rgba(225,48,108,0.3)]">
          <Instagram3DIcon size={68} />
        </div>

        {/* Profile Details */}
        <h3 className="text-lg font-bold text-white tracking-wide mb-1">
          RLCB Barbearia
        </h3>
        <p className="text-sm font-mono font-medium text-pink-400 mb-3">
          {OFFICIAL_LINKS.instagramHandle}
        </p>

        <p className="text-xs text-zinc-400 max-w-xs mx-auto mb-6 leading-relaxed">
          Veja nossos cortes mais recentes, transformações, novidades e o dia a dia da barbearia em primeira mão nos stories e reels.
        </p>

        {/* Action Button: SEGUIR NO INSTAGRAM */}
        <a
          href={OFFICIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(225,48,108,0.35)] hover:shadow-[0_10px_28px_rgba(225,48,108,0.5)] active:scale-[0.98] transition-all min-h-[48px]"
        >
          <span>SEGUIR NO INSTAGRAM</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
};
