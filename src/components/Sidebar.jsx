import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  User, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Send, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  Mail,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { socialLinks } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const iconMap = {
  Home,
  User,
  Code2,
  FolderGit2,
  GraduationCap,
  Send,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail
};

export default function Sidebar({ isDark, toggleTheme, isCollapsed, setIsCollapsed }) {
  const { t, isRTL } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSectionRef = useRef('home');

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && activeSectionRef.current !== id) {
            activeSectionRef.current = id;
            setActiveSection(id);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    t.nav.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [t.nav]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    activeSectionRef.current = id;
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Top Header Bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 h-16 bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-darkBlue p-0.5 shadow-sm">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-brand-cyan font-bold text-base">
              {t.personalInfo.firstName[0]}
            </div>
          </div>
          <span className="font-bold text-base bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            {t.personalInfo.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle isCollapsed={true} />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} isCollapsed={true} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-cyan-400 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Sidebar Container (uses CSS start-0 / border-e for RTL & LTR mirror) */}
      <aside
        className={`fixed top-0 bottom-0 start-0 z-50 flex flex-col justify-between
          bg-white/95 dark:bg-[#0c1220]/95 backdrop-blur-md border-e border-slate-200/90 dark:border-slate-800/90
          transition-all duration-300 ease-in-out shadow-xl lg:shadow-none
          ${mobileOpen ? 'translate-x-0 w-72' : isRTL ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}
        `}
      >
        {/* Top Header & Collapse Trigger */}
        <div className="p-4 border-b border-slate-200/70 dark:border-slate-800/70">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <div 
              onClick={() => scrollToSection('home')} 
              className={`flex items-center gap-3 cursor-pointer group ${isCollapsed ? 'justify-center w-full' : ''}`}
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-cyan via-brand-sky to-brand-darkBlue p-[2px] shadow-sm group-hover:shadow-glow-sm transition-all duration-300">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-brand-cyan font-extrabold text-lg">
                    {t.personalInfo.firstName[0]}
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -end-0.5 w-3 h-3 bg-emerald-400 border-2 border-white dark:border-slate-900 rounded-full" />
              </div>

              {!isCollapsed && (
                <div className="flex flex-col overflow-hidden transition-opacity duration-200">
                  <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white truncate">
                    {t.personalInfo.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-cyan-400/90 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-cyan inline flex-shrink-0" />
                    <span className="truncate">{t.personalInfo.title.split(' ').slice(0, 2).join(' ')}</span> 
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Collapse Toggle Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-brand-cyan hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isCollapsed ? (
                isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
              ) : (
                isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-4 px-3 space-y-1.5 overflow-y-auto overflow-x-hidden">
          {t.nav.map((item) => {
            const IconComponent = iconMap[item.icon] || Home;
            const isActive = activeSection === item.id;

            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3.5 px-3 py-3 rounded-xl font-medium text-sm transition-colors duration-200 text-start
                    ${isActive 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-cyan-500 dark:hover:text-cyan-300'
                    }
                    ${isCollapsed ? 'justify-center px-0' : ''}
                  `}
                >
                  <IconComponent className={`w-5 h-5 flex-shrink-0 ${isActive ? 'scale-105' : ''}`} />

                  {!isCollapsed && (
                    <span className="truncate tracking-wide font-medium">{item.label}</span>
                  )}

                  {/* Active indicator */}
                  {isActive && !isCollapsed && (
                    <span className="ms-auto w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </button>

                {/* Tooltip in Collapsed Mode */}
                {isCollapsed && (
                  <div className={`hidden lg:block absolute ${isRTL ? 'right-full me-3' : 'left-full ms-3'} top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-700 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50`}>
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Controls: Language Toggle + Theme Toggle + Socials */}
        <div className="p-3 border-t border-slate-200/70 dark:border-slate-800/70 space-y-2.5">
          {/* Language Switcher */}
          <LanguageToggle isCollapsed={isCollapsed} />

          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} isCollapsed={isCollapsed} />

          {/* Social Links */}
          <div className={`flex items-center ${isCollapsed ? 'flex-col gap-2' : 'justify-around gap-1'} pt-1`}>
            {socialLinks.map((social) => {
              const SocialIcon = iconMap[social.icon] || Mail;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-brand-cyan hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                  title={social.name}
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
