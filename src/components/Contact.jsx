import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle, 
  Sparkles, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { socialLinks } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail
};

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ loading: false, submitted: false, error: "Please fill in all required fields." });
      return;
    }

    setStatus({ loading: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({
        loading: false,
        submitted: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-brand-blue dark:text-cyan-300">
            <Send className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{t.sections.contactSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.sections.contactTitle}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {t.sections.contactTitleHighlight}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {t.sections.contactDesc}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-6 flex flex-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-6 border border-slate-200/80 dark:border-slate-800/80 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>{t.sections.contactDetails}</span>
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <motion.a
                  href={`mailto:${t.personalInfo.email}`}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-cyan-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:border-cyan-400/50 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.sections.directEmail}</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-400 transition-colors truncate">
                      {t.personalInfo.email}
                    </div>
                  </div>
                </motion.a>

                {/* Phone / WhatsApp Item */}
                <motion.a
                  href={`tel:${t.personalInfo.phone}`}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-cyan-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:border-cyan-400/50 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.sections.phoneWhatsapp}</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {t.personalInfo.phone}
                    </div>
                  </div>
                </motion.a>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.sections.location}</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {t.personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.sections.employmentStatus}</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {t.sections.readyToStart}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t.sections.socialProfiles}
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {socialLinks.map((s, idx) => {
                    const SIcon = iconMap[s.icon] || Mail;
                    return (
                      <motion.a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <SIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-xs font-medium truncate">{s.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 flex-1 flex flex-col">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t.sections.sendMessageTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                {t.sections.sendMessageDesc}
              </p>

              {/* Status Alert Messages with AnimatePresence */}
              <AnimatePresence mode="wait">
                {status.submitted && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3 overflow-hidden"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm space-y-1">
                      <p className="font-semibold">{t.sections.successTitle}</p>
                      <p className="opacity-90">{t.sections.successDesc}</p>
                    </div>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div 
                    key="error"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 flex items-center gap-3 overflow-hidden"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{status.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.sections.nameLabel} <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.sections.nameLabel}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.sections.emailLabel} <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. hr@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {t.sections.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Junior Frontend Engineer Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5 flex flex-col flex-1">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {t.sections.messageLabel} <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="..."
                    required
                    className="w-full flex-1 min-h-[100px] px-4 py-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {status.loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t.cta.sending}</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.cta.sendMessage}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
