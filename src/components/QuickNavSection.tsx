import React from 'react';
import { OFFICIAL_LINKS } from '../types.ts';
import {
  Instagram3DIcon,
  WhatsApp3DIcon,
  GoogleMaps3DIcon,
  Google3DReviewIcon,
  BarberPole3DIcon,
} from './Brand3DIcons.tsx';
import { ChevronRight } from 'lucide-react';

interface QuickNavSectionProps {
  onOpenPricing: () => void;
}

export const QuickNavSection: React.FC<QuickNavSectionProps> = ({ onOpenPricing }) => {
  const navItems = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Oficial',
      subtitle: 'Tire dúvidas e converse conosco',
      link: OFFICIAL_LINKS.whatsapp,
      isExternal: true,
      icon: <WhatsApp3DIcon size={44} />,
      badge: 'Online',
      badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60',
      actionText: 'Conversar',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: OFFICIAL_LINKS.instagramHandle,
      link: OFFICIAL_LINKS.instagram,
      isExternal: true,
      icon: <Instagram3DIcon size={44} />,
      badge: 'Fotos & Cortes',
      badgeColor: 'text-pink-300 bg-pink-950/50 border-pink-800/60',
      actionText: 'Acessar',
    },
    {
      id: 'precos',
      title: 'Tabela de Preços',
      subtitle: 'Valores atualizados de cortes e barba',
      link: '#tabela-precos',
      isExternal: false,
      onClick: onOpenPricing,
      icon: <BarberPole3DIcon size={44} />,
      badge: 'Consultar',
      badgeColor: 'text-zinc-300 bg-zinc-800/70 border-zinc-700/60',
      actionText: 'Ver Tabela',
    },
    {
      id: 'localizacao',
      title: 'Localização',
      subtitle: 'Como chegar via Google Maps',
      link: OFFICIAL_LINKS.location,
      isExternal: true,
      icon: <GoogleMaps3DIcon size={44} />,
      badge: 'Google Maps',
      badgeColor: 'text-sky-300 bg-sky-950/60 border-sky-800/60',
      actionText: 'Traçar Rota',
    },
    {
      id: 'avaliacao',
      title: 'Avaliar no Google',
      subtitle: 'Deixe sua opinião e 5 estrelas',
      link: OFFICIAL_LINKS.review,
      isExternal: true,
      icon: <Google3DReviewIcon size={44} />,
      badge: '5.0 ⭐⭐⭐⭐⭐',
      badgeColor: 'text-amber-300 bg-amber-950/60 border-amber-800/60',
      actionText: 'Avaliar',
    },
  ];

  return (
    <section id="navegacao-rapida" className="py-8 px-4 max-w-lg mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-400 uppercase mb-1">
          Acesso Rápido
        </span>
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider metallic-silver-text uppercase">
          Nossos Principais Links
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mt-2" />
      </div>

      {/* Nav Cards List */}
      <div className="flex flex-col gap-3.5">
        {navItems.map((item) => {
          const Content = (
            <div className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800/90 hover:border-zinc-700 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.7)] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.85),0_0_15px_rgba(255,255,255,0.03)] active:scale-[0.985] transition-all duration-200 cursor-pointer overflow-hidden min-h-[72px]">
              {/* Subtle top edge metallic highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              {/* Left Zone: 3D High-Relief Brand Icon + Titles */}
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                {item.icon}
                <div className="flex flex-col min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-semibold text-slate-100 text-sm sm:text-base tracking-wide group-hover:text-white transition-colors truncate">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${item.badgeColor} shrink-0 hidden sm:inline-block`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-400 font-light truncate mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Right Zone: Action button / chevron */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors hidden xs:inline-block">
                  {item.actionText}
                </span>
                <div className="w-8 h-8 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-700/80 transition-all">
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          );

          if (item.onClick) {
            return (
              <button
                key={item.id}
                onClick={item.onClick}
                className="w-full text-left"
                type="button"
              >
                {Content}
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.link}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="block w-full"
            >
              {Content}
            </a>
          );
        })}
      </div>
    </section>
  );
};
