import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/education';
import { FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi2';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <span>Academic Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
          >
            Education Timeline
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 heading-gradient-line mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
            Formal education fostering rigorous engineering methodology, algorithmic problem solving, and analytical depth.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[var(--border-card)] space-y-12 ml-2 sm:ml-6">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-violet-500 flex items-center justify-center shadow-md shadow-violet-500/30 group-hover:scale-125 group-hover:bg-violet-500 transition-all">
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-slate-950"></span>
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-card)] hover:border-violet-500/40 glow-violet-hover transition-all">
                {/* Top metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-violet-950/60 text-violet-300 border border-violet-500/30">
                    <FiCalendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-900 text-[var(--text-secondary)] border border-slate-800">
                    {item.status}
                  </span>
                </div>

                {/* Degree title & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors mb-1">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium mb-4">
                  <HiAcademicCap className="w-4 h-4" />
                  <span>{item.institution}</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-[var(--text-muted)] text-xs flex items-center gap-1">
                    <FiMapPin className="w-3 h-3" /> {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-[var(--border-card)]">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <FiCheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
