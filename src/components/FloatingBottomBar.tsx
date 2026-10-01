import React from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import { MessageSquare, MapPin, Tag } from 'lucide-react';

interface FloatingBottomBarProps {
  visible: boolean;
  onOpenPricing: () => void;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({
  visible,
  onOpenPricing,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 px-4 max-w-sm mx-auto animate-in slide-in-from-bottom duration-300 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between p-1.5 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-xl">
        {/* WhatsApp CTA */}
        <a
          href={OFFICIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md active:scale-95 transition-all"
        >
          <MessageSquare size={15} />
          <span>WhatsApp</span>
        </a>

        {/* Quick Pricing */}
        <button
          onClick={onOpenPricing}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-xs font-medium cursor-pointer"
        >
          <Tag size={15} className="text-zinc-400" />
          <span>Preços</span>
        </button>

        {/* Quick Location */}
        <a
          href={OFFICIAL_LINKS.location}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-xs font-medium"
        >
          <MapPin size={15} className="text-sky-400" />
          <span>Como Chegar</span>
        </a>
      </div>
    </div>
  );
};
