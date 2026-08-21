import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  ArrowUpRight,
  ArrowUpLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); // 0 = All

  const filteredProjects = activeCategoryIndex === 0
    ? t.projects
    : t.projects.filter(p => p.category === t.projectCategories[activeCategoryIndex]);

  const ArrowUpCorner = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ 
            type: "spring", 
            stiffness: 110, 
            damping: 14 
          }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-blue dark:text-cyan-300">
            <FolderGit2 className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{t.sections.projectsSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.sections.projectsTitle}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {t.sections.projectsTitleHighlight}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {t.sections.projectsDesc}
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ 
            type: "spring", 
            stiffness: 120, 
            damping: 16,
            delay: 0.1 
          }}
        >
          {t.projectCategories.map((category, idx) => (
            <button
              key={category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300
                ${activeCategoryIndex === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                  : 'glass-pill text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-300 hover:border-cyan-400/40'
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={`${project.id}-${activeCategoryIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: idx * 0.1 
              }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 start-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[11px] font-bold shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute top-3 end-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-slate-700/60 text-[11px] font-medium">
                  {project.category}
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] bg-slate-950/40 transition-all duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 hover:scale-110 shadow-lg transition-all"
                    title="View Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-blue dark:text-cyan-300">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Highlights */}
                {project.highlights && (
                  <div className="space-y-1 pt-1">
                    {project.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[12px] text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/70 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm hover:shadow-cyan-500/25 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{t.cta.code}</span>
                    <ArrowUpCorner className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repos CTA Banner */}
        <motion.div 
          className="glass-card rounded-2xl p-6 sm:p-8 text-center space-y-4 border border-cyan-500/20 shadow-glow-sm"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 14 
          }}
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {t.sections.githubBannerTitle}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            {t.sections.githubBannerDesc}
          </p>
          <a
            href="https://github.com/M7md-atef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/60 shadow-md hover:-translate-y-0.5 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-brand-cyan" />
            <span>{t.cta.visitGithub}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
