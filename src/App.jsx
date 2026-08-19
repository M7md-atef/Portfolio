import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function PortfolioApp() {
  const { isRTL } = useLanguage();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved !== null) {
        return saved === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-200 relative overflow-x-hidden">
      
      {/* Background gradients */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-40 dark:opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 10%, rgba(0, 242, 254, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 85% 90%, rgba(14, 165, 233, 0.08) 0%, transparent 45%)
          `
        }}
      />
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-40 dark:opacity-60" />

      {/* Animated Collapsible Sidebar Navigation */}
      <Sidebar
        isDark={isDark}
        toggleTheme={toggleTheme}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Main Content Area (uses ms-20 / ms-64 for dynamic RTL/LTR support) */}
      <main
        className={`transition-all duration-300 ease-in-out pt-16 lg:pt-0 ${
          isCollapsed ? 'lg:ms-20' : 'lg:ms-64'
        }`}
      >
        <div className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>

      {/* Floating Scroll to Top Button */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
