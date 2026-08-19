import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#070b13]/80 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Split */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3 text-center md:text-start">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-cyan to-brand-darkBlue p-0.5 shadow-sm">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-brand-cyan font-bold text-base">
                {t.personalInfo.firstName[0]}
              </div>
            </div>
            <div>
              <div className="font-extrabold text-base text-slate-900 dark:text-white">
                {t.personalInfo.name}
              </div>
              <div className="text-xs text-slate-500 dark:text-cyan-300/80">
                {t.personalInfo.title}
              </div>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
            {t.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Back to top anchor */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 shadow-sm"
          >
            <span>{t.cta.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-start">
          <p>
            © {new Date().getFullYear()} {t.personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5">
            <span>{t.sections.footerCredits}</span>
            <Heart className="w-3.5 h-3.5 text-cyan-400 fill-current inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
