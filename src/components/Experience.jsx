import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-blue dark:text-cyan-300">
            <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Track record of shipping impactful digital products and collaborating across high-velocity teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 dark:border-cyan-500/20 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Glowing Node Dot on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-glow-sm" />
                <div className="absolute w-8 h-8 rounded-full bg-cyan-400/20 animate-ping opacity-75" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-4 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                
                {/* Header: Role, Company, Period & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60 dark:border-slate-800/60">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-brand-blue dark:text-cyan-300 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {exp.summary}
                </p>

                {/* Key Achievements Bullets */}
                <div className="space-y-2 pt-1">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-cyan-500/5 dark:bg-cyan-950/40 text-brand-blue dark:text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
