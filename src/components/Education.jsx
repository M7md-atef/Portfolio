import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  Code2, 
  Database, 
  ShieldAlert, 
  FileSpreadsheet, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const courseIconMap = {
  Code2,
  Database,
  ShieldAlert,
  FileSpreadsheet
};

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-blue dark:text-cyan-300">
            <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{t.sections.eduSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.sections.eduTitle}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {t.sections.eduTitleHighlight}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {t.sections.eduDesc}
          </p>
        </div>

        {/* Major Degree Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border-2 border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/5 transition-all duration-300 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/70 dark:border-slate-800/70">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-500 dark:text-cyan-300 text-xs font-bold mb-1">
                  University Degree
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {t.education.degree}
                </h3>
                <p className="text-sm font-semibold text-brand-blue dark:text-cyan-300">
                  {t.education.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                {t.education.period}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm">
                <Award className="w-3.5 h-3.5" />
                {t.education.grade}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {t.education.location}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.sections.courseworkHeading}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {t.education.keyTopics.map((topic, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
                  <CheckCircle className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialized Courses Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-cyan" />
              <span>{t.sections.specializedHeading}</span>
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">{t.sections.specializedSub}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.courses.map((course) => {
              const CourseIcon = courseIconMap[course.icon] || Code2;
              return (
                <div
                  key={course.id}
                  className="group glass-card rounded-2xl p-6 space-y-4 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/40 text-brand-cyan flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform flex-shrink-0">
                        <CourseIcon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-brand-blue dark:text-cyan-300 border border-slate-200 dark:border-slate-700/60">
                        {course.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {course.institution}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-1.5 text-xs font-semibold text-brand-blue dark:text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.sections.completedBadge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
