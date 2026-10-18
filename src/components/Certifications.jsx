import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/certifications';
import { FiHeart, FiCheckCircle } from 'react-icons/fi';
import { SiCisco } from 'react-icons/si';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span>Credentials &amp; Impact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
          >
            Certifications &amp; Volunteering
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 heading-gradient-line mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
            Demonstrating industry-standard foundations and commitment to social responsibility and leadership.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((item, idx) => {
            const isVolunteer = item.category === 'Volunteering';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group rounded-2xl p-7 bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-card)] hover:border-violet-500/40 glow-violet-hover transition-all flex flex-col justify-between shadow-lg relative overflow-hidden"
              >
                {/* Decorative background glow */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none transition-opacity ${
                    isVolunteer ? 'bg-rose-500/5 group-hover:bg-rose-500/10' : 'bg-violet-500/5 group-hover:bg-violet-500/10'
                  }`}
                />

                <div>
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner ${
                          isVolunteer
                            ? 'bg-rose-950/30 border-rose-500/30 text-rose-400'
                            : 'bg-violet-950/30 border-violet-500/30 text-violet-300'
                        }`}
                      >
                        {isVolunteer ? (
                          <FiHeart className="w-6 h-6" />
                        ) : (
                          <SiCisco className="w-7 h-7" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                          {item.badgeType}
                        </span>
                        <div className="text-sm font-semibold text-[var(--text-primary)]">
                          {item.issuer}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border ${
                        isVolunteer
                          ? 'bg-rose-950/40 text-rose-300 border-rose-500/30'
                          : 'bg-violet-950/40 text-violet-300 border-violet-500/30'
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Skills gained pills */}
                <div>
                  <div className="text-xs font-medium text-[var(--text-muted)] mb-2">
                    Key Competencies:
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1 border-t border-[var(--border-card)]">
                    {item.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-[var(--text-secondary)] border border-[var(--border-card)]"
                      >
                        <FiCheckCircle
                          className={`w-3.5 h-3.5 ${
                            isVolunteer ? 'text-rose-400' : 'text-cyan-400'
                          }`}
                        />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
