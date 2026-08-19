import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ isCollapsed = false }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      type="button"
      aria-label="Switch Language"
      title={lang === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
      className={`relative flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 group
        bg-slate-100 text-slate-700 hover:bg-white hover:text-blue-600 hover:shadow-md border border-slate-200
        dark:bg-slate-800/80 dark:text-brand-cyan dark:hover:bg-slate-700 dark:hover:shadow-glow-sm dark:border-cyan-500/20
        ${isCollapsed ? 'w-10 h-10' : 'w-full gap-3'}`}
    >
      {/* Language Label */}
      {!isCollapsed && (
        <span className="text-xs font-semibold tracking-wide">
          {lang === 'en' ? 'العربية' : 'English'}
        </span>
      )}

      {/* Language Indicator Pill */}
      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded
        bg-cyan-500/10 text-brand-cyan border border-cyan-500/20
        dark:bg-cyan-500/10 dark:text-brand-cyan dark:border-cyan-500/20">
        {lang.toUpperCase()}
      </span>
    </button>
  );
}
