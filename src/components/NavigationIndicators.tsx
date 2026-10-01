import React from 'react';

interface NavigationIndicatorsProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const NavigationIndicators: React.FC<NavigationIndicatorsProps> = ({
  activeSection,
  onNavigate,
}) => {
  const sections = [
    { id: 'apresentacao', label: 'Início' },
    { id: 'navegacao-rapida', label: 'Links' },
    { id: 'tabela-precos', label: 'Preços' },
    { id: 'horarios', label: 'Horários' },
    { id: 'localizacao', label: 'Local' },
    { id: 'instagram-secao', label: 'Instagram' },
    { id: 'avaliar', label: 'Avaliar' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <aside
      aria-label="Indicador de seções"
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5 p-2 rounded-full bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md shadow-2xl"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            title={section.label}
            className="group relative flex items-center justify-center p-1 cursor-pointer"
            aria-label={`Navegar para ${section.label}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute right-7 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[11px] font-medium text-white tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              {section.label}
            </span>
            
            {/* Dot */}
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                  : 'bg-zinc-600 hover:bg-zinc-400'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
};
