import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { 
  SiCplusplus, 
  SiPython, 
  SiNumpy, 
  SiPandas, 
  SiGit, 
  SiGithub, 
  SiJupyter, 
  SiScikitlearn, 
  SiReact, 
  SiTailwindcss,
  SiJavascript
} from 'react-icons/si';
import { 
  FaProjectDiagram, 
  FaCubes, 
  FaDatabase, 
  FaLightbulb, 
  FaSquareRootAlt, 
  FaChartLine,
  FaJava,
  FaWaveSquare,
  FaBrain
} from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { FiBarChart2, FiCheckCircle } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';

const iconMap = {
  SiCplusplus: <SiCplusplus className="w-6 h-6 text-forest-400" />,
  SiPython: <SiPython className="w-6 h-6 text-forest-400" />,
  FaJava: <FaJava className="w-6 h-6 text-forest-400" />,
  SiJavascript: <SiJavascript className="w-6 h-6 text-forest-400" />,
  SiNumpy: <SiNumpy className="w-6 h-6 text-forest-400" />,
  SiPandas: <SiPandas className="w-6 h-6 text-forest-400" />,
  SiPlotly: <FiBarChart2 className="w-6 h-6 text-forest-400" />,
  SiScikitlearn: <SiScikitlearn className="w-6 h-6 text-forest-400" />,
  FaProjectDiagram: <FaProjectDiagram className="w-6 h-6 text-forest-400" />,
  FaCubes: <FaCubes className="w-6 h-6 text-forest-400" />,
  FaDatabase: <FaDatabase className="w-6 h-6 text-forest-400" />,
  FaLightbulb: <FaLightbulb className="w-6 h-6 text-forest-400" />,
  FaSquareRootAlt: <FaSquareRootAlt className="w-6 h-6 text-forest-400" />,
  FaWaveSquare: <FaWaveSquare className="w-6 h-6 text-forest-400" />,
  FaChartLine: <FaChartLine className="w-6 h-6 text-forest-400" />,
  SiGit: <SiGit className="w-6 h-6 text-forest-400" />,
  SiGithub: <SiGithub className="w-6 h-6 text-forest-400" />,
  VscCode: <VscCode className="w-6 h-6 text-forest-400" />,
  SiJupyter: <SiJupyter className="w-6 h-6 text-forest-400" />,
  FaBrain: <FaBrain className="w-6 h-6 text-forest-400" />,
  SiReact: <SiReact className="w-6 h-6 text-forest-400" />,
  SiTailwindcss: <SiTailwindcss className="w-6 h-6 text-forest-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label inline-flex items-center gap-2 mb-3"
          >
            <span className="num">02 /</span><span>Skills</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
          >
            Skills &amp; Technology Stack
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 heading-gradient-line mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
            Proficient in systems programming (Java, C++), Python data manipulation, machine learning foundations, and modern web architectures.
          </p>
        </div>

        {/* Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, groupIdx) => {
            const isLearningGroup = group.isLearningGroup;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
                className={`rounded-2xl p-6 border backdrop-blur-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isLearningGroup
                    ? 'bg-[var(--bg-card)] border-sand-500/40 shadow-lg shadow-sand-950/20 hover:border-sand-400 hover:-translate-y-1'
                    : 'bg-[var(--bg-card)] border-[var(--border-card)] hover:border-forest-500/40 shadow-md hover:shadow-forest-950/30 hover:-translate-y-1'
                }`}
              >
                {/* Header of card */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                      {group.title}
                    </h3>
                    {isLearningGroup && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sand-500/10 text-sand-400 border border-sand-500/30">
                        <HiSparkles className="w-3 h-3 text-sand-400" />
                        Learning
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills pill list */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item flex items-center justify-between p-2.5 rounded-xl bg-[var(--bg-app)]/50 hover:bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-forest-500/30 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[var(--bg-card)] flex items-center justify-center p-1.5 border border-[var(--border-card)] shadow-inner group-hover/item:scale-105 transition-transform">
                            {iconMap[skill.icon] || <FiCheckCircle className="w-5 h-5 text-forest-400" />}
                          </div>
                          <span className="text-sm font-medium text-[var(--text-primary)] transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        {skill.isLearning ? (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sand-500/10 text-sand-400 border border-sand-500/30">
                            Learning
                          </span>
                        ) : (
                          <span className="text-xs text-[var(--text-muted)] font-mono">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer hint */}
                <div className="mt-5 pt-3 border-t border-[var(--border-card)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span>{group.skills.length} competencies</span>
                  <span className="text-forest-400/90 font-mono">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
