import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  const [scale, setScale] = useState(1);

  // Reset zoom on open
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const zoomIn = () => setScale((s) => Math.min(s + 0.4, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.4, 0.8));
  const resetZoom = () => setScale(1);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-zinc-950/80 border-b border-zinc-800/80 shrink-0 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <span className="font-cinzel text-sm sm:text-base font-bold tracking-wider text-slate-100 truncate max-w-[240px] sm:max-w-md">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2 text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Fechar visualizador"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="flex-1 overflow-auto p-4 flex items-center justify-center cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="transition-transform duration-150 ease-out select-none max-w-full flex items-center justify-center"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-zinc-800"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Floating Control Bar */}
      <div
        className="shrink-0 p-4 pb-6 flex items-center justify-center gap-3 bg-gradient-to-t from-black via-zinc-950/90 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-1.5 p-1.5 bg-zinc-900/90 border border-zinc-700/60 rounded-xl shadow-lg backdrop-blur-md">
          <button
            onClick={zoomOut}
            className="p-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Reduzir zoom"
          >
            <ZoomOut size={18} />
          </button>
          <span className="text-xs font-mono text-zinc-400 px-2 min-w-[45px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="p-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Aumentar zoom"
          >
            <ZoomIn size={18} />
          </button>
          <button
            onClick={resetZoom}
            className="p-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Ajustar à tela"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
