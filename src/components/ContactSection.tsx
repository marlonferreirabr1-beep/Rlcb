import React from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import { MapPin, Instagram, Star } from 'lucide-react';
import { WhatsAppOfficialIcon } from './Brand3DIcons.tsx';

export const ContactSection: React.FC = () => {
  return (
    <footer id="contato" className="py-10 px-4 max-w-lg mx-auto w-full text-center">
      {/* Divider */}
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mb-8" />

      {/* Official Logo Displayed Again */}
      <div className="relative inline-block mb-4">
        {/* Subtle white halo */}
        <div className="absolute -inset-2 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <img
          src={OFFICIAL_LINKS.logo}
          alt="RLCB Barbearia"
          referrerPolicy="no-referrer"
          className="relative w-28 h-28 sm:w-32 sm:h-32 object-contain mx-auto filter drop-shadow-[0_8px_20px_rgba(255,255,255,0.1)]"
        />
      </div>

      {/* Title: FALE COM A RLCB BARBEARIA */}
      <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider metallic-silver-text uppercase mb-2">
        FALE COM A RLCB BARBEARIA
      </h2>
      <p className="text-xs text-zinc-400 mb-6 max-w-xs mx-auto">
        Estamos prontos para atender você com o mais alto padrão de excelência.
      </p>

      {/* Big WhatsApp CTA Button: CHAMAR NO WHATSAPP */}
      <a
        href={OFFICIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 text-white font-bold text-base tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_10px_28px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_36px_rgba(16,185,129,0.55)] active:scale-[0.98] transition-all min-h-[54px] mb-6 overflow-hidden"
      >
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <WhatsAppOfficialIcon size={24} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
        <span>CHAMAR NO WHATSAPP</span>
      </a>

      {/* Quick Access Channels: Instagram, Localização, Avaliação no Google */}
      <div className="grid grid-cols-3 gap-2.5 mb-8">
        <a
          href={OFFICIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-pink-800/60 hover:bg-zinc-800/80 transition-all text-zinc-300 hover:text-pink-300 min-h-[58px]"
        >
          <Instagram size={20} className="mb-1 text-pink-400" />
          <span className="text-[11px] font-medium tracking-wide">Instagram</span>
        </a>

        <a
          href={OFFICIAL_LINKS.location}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-sky-800/60 hover:bg-zinc-800/80 transition-all text-zinc-300 hover:text-sky-300 min-h-[58px]"
        >
          <MapPin size={20} className="mb-1 text-sky-400" />
          <span className="text-[11px] font-medium tracking-wide">Localização</span>
        </a>

        <a
          href={OFFICIAL_LINKS.review}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-800/60 hover:bg-zinc-800/80 transition-all text-zinc-300 hover:text-amber-300 min-h-[58px]"
        >
          <Star size={20} className="mb-1 text-amber-400 fill-amber-400/60" />
          <span className="text-[11px] font-medium tracking-wide">Avaliação</span>
        </a>
      </div>

      {/* Required Footer Copyright */}
      <div className="pt-6 border-t border-zinc-900 text-center">
        <p className="text-xs text-zinc-400 font-light tracking-wide">
          © RLCB Barbearia — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
