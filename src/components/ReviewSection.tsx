import React from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import { Google3DReviewIcon } from './Brand3DIcons.tsx';
import { Star } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  return (
    <section id="avaliar" className="py-8 px-4 max-w-lg mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-1">
          Feedback
        </span>
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider metallic-silver-text uppercase">
          CURTIU O ATENDIMENTO?
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mt-2" />
      </div>

      {/* Review Card */}
      <div className="relative group rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 shadow-[0_16px_36px_rgba(0,0,0,0.7)] text-center overflow-hidden">
        {/* Top metallic sheen */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        
        {/* Ambient Gold Halo */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* 3D Google Review Centerpiece */}
        <div className="relative inline-block mb-3 filter drop-shadow-[0_10px_20px_rgba(251,188,4,0.25)]">
          <Google3DReviewIcon size={64} />
        </div>

        {/* 5 Shiny Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-[0_2px_8px_rgba(251,188,4,0.6)]"
            />
          ))}
        </div>

        {/* Required text: Sua avaliação ajuda a nossa barbearia a crescer. */}
        <p className="text-sm sm:text-base text-zinc-200 font-medium mb-1">
          Sua avaliação ajuda a nossa barbearia a crescer.
        </p>
        <p className="text-xs text-zinc-400 max-w-xs mx-auto mb-6 leading-relaxed">
          Leva menos de 1 minuto! Conte como foi sua experiência com nosso atendimento e corte.
        </p>

        {/* Big Button: AVALIAR NO GOOGLE ⭐ */}
        <a
          href={OFFICIAL_LINKS.review}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-zinc-950 font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.55)] active:scale-[0.98] transition-all min-h-[52px]"
        >
          <span>AVALIAR NO GOOGLE ⭐</span>
        </a>
      </div>
    </section>
  );
};
