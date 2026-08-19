import React from 'react';
import { ArrowRight, ArrowLeft, FileText, Send, Code2, Layers, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Lightweight radial glow backdrop */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none -z-10 opacity-70 dark:opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, rgba(14, 165, 233, 0.04) 50%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-slate-700 dark:text-cyan-300 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span>{t.personalInfo.availability}</span>
          </div>

          {/* Main Headline with unbreakable name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.25]">
            {isRTL ? (
              <>
                <span>أهلاً بك، أنا </span>
                <span className="inline-block whitespace-nowrap bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  {t.personalInfo.name}
                </span>
                <br className="hidden sm:inline" />
                <span className="block mt-2 text-slate-800 dark:text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold">
                  أقوم بتطوير واجهات وتطبيقات ويب عصرية.
                </span>
              </>
            ) : (
              <>
                <span>Hi, I'm </span>
                <span className="inline-block whitespace-nowrap bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  {t.personalInfo.name}
                </span>
                <br className="hidden sm:inline" />
                <span className="block mt-2 text-slate-800 dark:text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Engineering Clean Web Experiences.
                </span>
              </>
            )}
          </h1>

          {/* Subtitle / Badges */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {t.heroBadges.map((badge, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-400/50 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Summary */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            {t.personalInfo.shortBio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            {/* View Work */}
            <button
              onClick={() => scrollTo('projects')}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>{t.cta.viewProjects}</span>
              <ArrowIcon className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </button>

            {/* Contact Me */}
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-cyan-400/60 hover:text-cyan-500 dark:hover:text-cyan-300 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span>{t.cta.contactMe}</span>
            </button>

            {/* View CV */}
            <a
              href={t.personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-300 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-400/50 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-brand-cyan" />
              <span>{t.cta.viewCv}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Avatar with Glowing Ring and Floating Elements */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-72 sm:w-80 lg:w-92 aspect-square flex items-center justify-center">
            
            {/* Rotating Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 p-[3px] shadow-glow-md">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900" />
            </div>

            {/* Avatar Image Container */}
            <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl z-10 group">
              <img
                src={t.personalInfo.avatarUrl}
                alt={t.personalInfo.name}
                className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-2 -start-2 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl glass-card text-xs font-semibold text-slate-800 dark:text-cyan-300 shadow-md border border-cyan-400/30 animate-float">
              <Code2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span>{t.floatingBadges.b1}</span>
            </div>

            <div className="absolute -bottom-2 -end-2 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-card text-xs font-semibold text-slate-800 dark:text-sky-300 shadow-md border border-sky-400/30 animate-float [animation-delay:1.5s]">
              <Layers className="w-4 h-4 text-brand-sky flex-shrink-0" />
              <span>{t.floatingBadges.b2}</span>
            </div>

            <div className="absolute top-1/2 -end-4 -translate-y-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl glass-card text-xs font-semibold text-slate-800 dark:text-blue-300 shadow-md border border-blue-400/30 animate-float [animation-delay:2.5s]">
              <Cpu className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
              <span>{t.floatingBadges.b3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
