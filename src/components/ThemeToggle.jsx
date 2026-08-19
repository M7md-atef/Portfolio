import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme, isCollapsed = false }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 group
        ${isDark 
          ? 'bg-slate-800/80 text-brand-cyan hover:bg-slate-700 hover:shadow-glow-sm border border-cyan-500/20' 
          : 'bg-slate-100 text-slate-700 hover:bg-white hover:text-blue-600 hover:shadow-md border border-slate-200'
        } ${isCollapsed ? 'w-10 h-10' : 'w-full gap-3'}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 group-hover:rotate-90 text-brand-cyan" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-500 -rotate-12 group-hover:rotate-0 text-blue-600" />
        )}
      </div>

      {!isCollapsed && (
        <span className="text-sm font-medium tracking-wide">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
      
    </button>
  );
}
