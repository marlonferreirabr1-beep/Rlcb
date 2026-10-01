import React, { useState, useEffect } from 'react';
import { Clock, ShieldAlert, Sparkles } from 'lucide-react';

export const HoursSection: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if current time in Brazil (Maceió / Brasília UTC-3) is between 08:00 and 20:00
  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('pt-BR', {
          timeZone: 'America/Maceio',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        });
        const parts = formatter.formatToParts(now);
        const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '12', 10);
        const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
        const currentMinutes = hour * 60 + minute;
        const openMinutes = 8 * 60; // 08:00
        const closeMinutes = 20 * 60; // 20:00

        // Open every day from 08:00h to 20:00h
        setIsOpenNow(currentMinutes >= openMinutes && currentMinutes < closeMinutes);
      } catch {
        const localHour = new Date().getHours();
        setIsOpenNow(localHour >= 8 && localHour < 20);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="horarios" className="py-8 px-4 max-w-lg mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="flex items-center gap-1.5 mb-1 text-zinc-400">
          <Clock size={16} />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase">
            Funcionamento
          </span>
        </div>
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider metallic-silver-text uppercase">
          HORÁRIOS DE ATENDIMENTO
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mt-2" />
      </div>

      {/* Balãozinho que avisa tipo "Aberto Agora" */}
      <div className="flex flex-col items-center justify-center mb-5 animate-in fade-in duration-300">
        <div
          className={`relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 ${
            isOpenNow
              ? 'bg-emerald-950/80 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] text-emerald-300'
              : 'bg-rose-950/80 border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.3)] text-rose-300'
          }`}
        >
          {/* Pulsing beacon light indicator */}
          <span className="relative flex h-3 w-3 shrink-0">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isOpenNow ? 'bg-emerald-400' : 'bg-rose-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${
                isOpenNow ? 'bg-emerald-500 shadow-[0_0_8px_#10B981]' : 'bg-rose-500'
              }`}
            />
          </span>

          {/* Balloon text */}
          <div className="flex items-center gap-1.5 font-sans">
            <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              {isOpenNow ? 'ABERTO AGORA' : 'FECHADO NO MOMENTO'}
            </span>
            <span className="text-[11px] opacity-80 font-medium">
              {isOpenNow ? '• Fecha às 20:00h' : '• Abre às 08:00h'}
            </span>
          </div>
        </div>

        {/* Tail / arrow pointer for speech balloon effect */}
        <div
          className={`w-2.5 h-2.5 rotate-45 -mt-1.5 border-r border-b ${
            isOpenNow
              ? 'bg-emerald-950/80 border-emerald-500/50'
              : 'bg-rose-950/80 border-rose-500/50'
          }`}
        />
      </div>

      {/* Premium Highlight Notice: NÃO TRABALHAMOS COM AGENDAMENTO */}
      <div className="relative mb-5 p-4 rounded-2xl bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 shadow-[0_4px_20px_rgba(245,158,11,0.1)] text-center overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center justify-center gap-2 mb-1.5 text-amber-400 font-bold text-xs uppercase tracking-widest">
          <ShieldAlert size={16} />
          <span>AVISO IMPORTANTE</span>
        </div>

        <p className="font-bold text-sm sm:text-base text-amber-200 tracking-wide uppercase">
          NÃO TRABALHAMOS COM AGENDAMENTO.
        </p>

        {/* Highlight badge: ATENDIMENTO POR ORDEM DE CHEGADA */}
        <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 font-extrabold text-xs sm:text-sm tracking-widest uppercase shadow-sm">
          <Sparkles size={14} className="text-amber-400" />
          <span>ATENDIMENTO POR ORDEM DE CHEGADA</span>
        </div>
      </div>

      {/* Structured Schedule Card */}
      <div className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
        {/* Days & Hours */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between py-2 border-b border-zinc-800/80">
            <span className="text-sm font-medium text-zinc-300">Dias de Atendimento</span>
            <span className="text-sm font-semibold text-white tracking-wide">
              Segunda-feira a Domingo
            </span>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-zinc-800/80">
            <span className="text-sm font-medium text-zinc-300">Horário Contínuo</span>
            <span className="text-sm font-mono font-bold text-white tracking-wider bg-zinc-800/80 px-3 py-1 rounded-lg border border-zinc-700/60">
              08:00h às 20:00h
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-xs text-zinc-400">Modalidade</span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wide">
              Ordem de Chegada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
