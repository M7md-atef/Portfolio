import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Wrench, 
  CheckCircle2,
  Code
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const categoryIconMap = {
  Layout,
  Server,
  Wrench
};

export default function Skills() {
  const { t } = useLanguage();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1); // -1 = All

  const displayedCategories = selectedCategoryIndex === -1
    ? t.skills
    : [t.skills[selectedCategoryIndex]];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-blue dark:text-cyan-300">
            <Code className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{t.sections.skillsSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.sections.skillsTitle}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {t.sections.skillsTitleHighlight}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {t.sections.skillsDesc}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedCategoryIndex(-1)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300
              ${selectedCategoryIndex === -1
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                : 'glass-pill text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-300 hover:border-cyan-400/40'
              }
            `}
          >
            {t.projectCategories[0]} {/* "All" or "الكل" */}
          </button>

          {t.skills.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300
                ${selectedCategoryIndex === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'glass-pill text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-300 hover:border-cyan-400/40'
                }
              `}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => {
            const CatIcon = categoryIconMap[group.icon] || Layout;

            return (
              <div
                key={group.category}
                className="glass-card rounded-2xl p-6 space-y-6 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-400/40 transition-all duration-200"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-200/60 dark:border-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {group.skills.length} skills
                    </span>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5 group/skill">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-200 group-hover/skill:text-cyan-400 transition-colors flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                          <span className="truncate">{skill.name}</span>
                        </span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-cyan-300 border border-slate-200 dark:border-slate-700/60">
                            {skill.tag}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-sky to-brand-blue"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Tech Badges */}
        <div className="glass-card rounded-2xl p-6 text-center space-y-4 border border-slate-200/80 dark:border-slate-800/80">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {t.sections.alsoExpWith}
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "React Hooks", "DOM Manipulation", "SQL Queries", "Relational Schema", 
              "Docker Basics", "Linux Bash", "Object-Oriented Programming (OOP)", "Git Branches",
              "REST APIs", "Tailwind CSS", "Vite", "Excel Formulas & Pivots"
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100/90 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-400/60 hover:text-brand-cyan transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
