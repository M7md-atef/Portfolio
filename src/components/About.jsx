import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Zap, 
  BookOpen, 
  Cpu, 
  Users, 
  Clock, 
  Sparkles,
  MapPin,
  Mail,
  Languages,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const statIconMap = {
  GraduationCap,
  Award,
  Zap,
  BookOpen
};

const softIconMap = {
  Zap,
  Cpu,
  Users,
  Clock
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-blue dark:text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{t.sections.aboutSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.sections.aboutTitle}{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.sections.aboutTitleHighlight}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {t.sections.aboutDesc}
          </p>
        </div>

        {/* Top Split: Bio & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Narrative */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <span>{t.personalInfo.title}</span>
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.personalInfo.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick metadata badges */}
            <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/70 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span>{t.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Mail className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <span>{t.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <GraduationCap className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>{t.education.degree}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{t.education.grade}</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {t.stats.map((stat) => {
              const IconComp = statIconMap[stat.icon] || GraduationCap;
              return (
                <div
                  key={stat.id}
                  className="group relative glass-card rounded-2xl p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-400/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-brand-cyan flex items-center justify-center mb-3 group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-cyan-200 bg-clip-text text-transparent group-hover:text-gradient-cyan">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {stat.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-cyan" />
              <span>{t.sections.softSkillsTitle}</span>
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">{t.sections.softSkillsSubtitle}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.softSkills.map((skill, idx) => {
              const SkillIcon = softIconMap[skill.icon] || Zap;
              return (
                <div
                  key={idx}
                  className="group glass-card rounded-2xl p-5 space-y-3 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-cyan-950/40 border border-cyan-500/20 text-brand-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <SkillIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {skill.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages Box */}
        <div className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center sm:text-start">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-sm flex-shrink-0">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">{t.sections.languagesTitle}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.sections.languagesSubtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {t.languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                <div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">{lang.name}: </span>
                  <span className="text-xs text-slate-500 dark:text-cyan-300">{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
