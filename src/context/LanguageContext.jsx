import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioContent } from '../data/portfolioData';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'en' || saved === 'ar') {
        return saved;
      }
    }
    return 'en';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const isRTL = lang === 'ar';
  const t = portfolioContent[lang] || portfolioContent.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
