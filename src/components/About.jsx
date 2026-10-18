import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personal';
import { FiCode, FiBookOpen, FiAward, FiCheckCircle, FiMapPin, FiMail } from 'react-icons/fi';
import { HiSparkles, HiAcademicCap } from 'react-icons/hi2';

export default function About() {
  const statIcons = {
    code: <FiCode className="w-6 h-6 text-violet-400" />,
    academic: <HiAcademicCap className="w-6 h-6 text-cyan-400" />,
    sparkles: <HiSparkles className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <span>About Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
          >
            Engineering With Purpose &amp; Curiosity
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 heading-gradient-line mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Bio text block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-bl-full pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <span>Aspiring Software &amp; AI/ML Engineer</span>
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg mb-4">
                {personalData.aboutBio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--border-card)] text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2.5">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4 shrink-0" />
                  <span>Strong OOP &amp; Algorithmic Principles</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4 shrink-0" />
                  <span>Data Cleaning &amp; Visual Analytics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4 shrink-0" />
                  <span>Linear Algebra, Calculus &amp; ML Foundations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4 shrink-0" />
                  <span>Passionate Team Collaborator</span>
                </div>
              </div>

              {/* Quick details chips */}
              <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-[var(--border-card)]">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--bg-app)]/60 dark:bg-slate-900/60 border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
                  <FiMapPin className="text-violet-400" />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--bg-app)]/60 dark:bg-slate-900/60 border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
                  <HiAcademicCap className="text-cyan-400" />
                  <span>Superior University Lahore</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--bg-app)]/60 dark:bg-slate-900/60 border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
                  <FiMail className="text-violet-400" />
                  <span>{personalData.email}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {personalData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-card)] hover:border-violet-500/40 shadow-lg glow-violet-hover transition-all flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--bg-app)]/80 dark:bg-slate-900/80 border border-[var(--border-card)] flex items-center justify-center shrink-0 group-hover:bg-violet-950/60 group-hover:border-violet-500/50 transition-colors">
                  {statIcons[stat.icon]}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-[var(--text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Seeking Internship Highlights banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 via-[var(--bg-card)] to-cyan-950/40 border border-violet-500/30 text-center">
              <span className="text-xs uppercase tracking-wider font-semibold text-violet-400 block mb-1">
                Availability
              </span>
              <p className="text-sm font-medium text-[var(--text-primary)]">
                Seeking a Software Engineering or Data Internship to solve impactful problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
