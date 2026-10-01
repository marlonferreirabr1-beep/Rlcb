import React, { useState } from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import { Share2, Check } from 'lucide-react';

interface TopHeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'RLCB Barbearia - Bio Site Oficial',
          text: 'Confira os links, horários e tabela de preços da RLCB Barbearia!',
          url: url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('apresentacao')}
          className="text-sm sm:text-base font-cinzel font-bold tracking-widest text-slate-100 hover:text-white transition-colors truncate text-left cursor-pointer"
        >
          RLCB BARBEARIA
        </button>

        {/* Zone 2: Clean text navigation links (desktop/tablet) */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-zinc-400">
          <button
            onClick={() => onNavigate('navegacao-rapida')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Links
          </button>
          <button
            onClick={() => onNavigate('tabela-precos')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Preços
          </button>
          <button
            onClick={() => onNavigate('horarios')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Horários
          </button>
          <button
            onClick={() => onNavigate('localizacao')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Localização
          </button>
          <button
            onClick={() => onNavigate('avaliar')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Avaliar
          </button>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-2">
          {/* Share Bio Link */}
          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-700/80 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer"
            title="Compartilhar Bio Site"
            aria-label="Compartilhar Bio Site"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
          </button>

          {/* Direct WhatsApp Call */}
          <a
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap min-h-[38px] flex items-center justify-center shadow-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};
