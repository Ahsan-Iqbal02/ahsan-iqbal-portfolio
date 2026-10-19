import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { FiGithub, FiExternalLink, FiFolder, FiLock, FiUsers } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full-Stack Web', 'Java Software', 'C++ Software', 'Machine Learning'];
  const countFor = (cat) => (cat === 'All' ? projectsData.length : projectsData.filter((p) => p.category === cat).length);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label inline-flex items-center gap-2 mb-3"
          >
            <span className="num">03 /</span><span>Projects</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 heading-gradient-line mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
            From full-stack web applications to Java arcade games and C++ console systems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'btn-gradient font-semibold shadow-md'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-card)]'
                }`}
              >
                {cat}
                <span className="ml-1.5 font-mono text-[11px] opacity-80">{countFor(cat)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isComingSoon = project.isComingSoon;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 border backdrop-blur-md relative overflow-hidden ${
                    isComingSoon
                      ? 'bg-[var(--bg-card)]/70 border-dashed border-forest-500/40 hover:border-forest-400'
                      : 'bg-[var(--bg-card)] border-[var(--border-card)] hover:border-forest-500/40 glow-hover shadow-lg'
                  }`}
                >
                  {/* Subtle corner glow */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-forest-500/5 group-hover:bg-forest-500/10 rounded-bl-full transition-colors pointer-events-none" />

                  <div>
                    {/* Top row: Category tag & Coming soon / Featured badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[var(--bg-app)]/80 dark:bg-ink-900 flex items-center justify-center text-forest-400 border border-[var(--border-card)]">
                          {isComingSoon ? <HiSparkles className="w-4 h-4 text-sand-400" /> : <FiFolder className="w-4 h-4" />}
                        </div>
                        <span className="text-xs font-mono font-medium text-[var(--text-muted)]">
                          {project.category}
                        </span>
                      </div>

                      {isComingSoon ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold badge-learning">
                          <span className="w-1.5 h-1.5 rounded-full bg-sand-400 animate-ping" />
                          Coming Soon
                        </span>
                      ) : project.featured ? (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-forest-950/60 text-forest-300 border border-forest-500/30">
                          Featured
                        </span>
                      ) : null}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-sand-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-sand-500 mb-3">
                      {project.subtitle}
                    </div>

                    {project.team && (
                      <div className="inline-flex items-center gap-1.5 mb-4 px-2.5 py-1 rounded-md text-xs font-medium bg-sand-500/10 text-sand-400 border border-sand-500/30">
                        <FiUsers className="w-3 h-3" />
                        <span>Team project with {project.team}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-app)]/70 dark:bg-ink-900/80 text-[var(--text-secondary)] border border-[var(--border-card)] group-hover:border-forest-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border-card)]">
                      {isComingSoon ? (
                        <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
                          <FiLock className="w-3.5 h-3.5 text-sand-400" />
                          <span>Under active research &amp; development</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-app)]/80 dark:bg-ink-900 hover:bg-ink-800 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-card)] hover:border-forest-500/40 transition-all shadow-sm"
                            >
                              <FiGithub className="w-3.5 h-3.5 text-forest-400" />
                              <span>GitHub Code</span>
                            </a>
                          )}

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest-500/10 hover:bg-forest-500/20 text-sand-400 hover:text-sand-300 text-xs font-semibold border border-sand-500/30 hover:border-sand-400 transition-all"
                            >
                              <FiExternalLink className="w-3.5 h-3.5" />
                              <span>Live Preview</span>
                            </a>
                          )}
                        </div>
                      )}

                      {!isComingSoon && (
                        <span className="text-xs text-[var(--text-muted)] font-mono hidden sm:inline-block">
                          {project.year || 'Active'}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
