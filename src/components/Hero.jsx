import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personal';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail, FiTerminal, FiMapPin } from 'react-icons/fi';

// Position of an element on the page, ignoring scroll animations (transforms)
const getPageTop = (el) => {
  let y = 0;
  let node = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent;
  }
  return y;
};

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalData.heroRoles;

  // Typing animation effect
  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && displayText === currentFullText) {
      // Pause before starting to delete
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const scrollToProjects = (e) => scrollToSection(e, 'projects');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const offsetPosition = getPageTop(el) - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--bg-card)]/90 border border-forest-500/30 text-forest-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-forest-950/30 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sand-400"></span>
          </span>
          <span>Open to Software Engineering Internships</span>
        </motion.div>

        {/* Heading with Violet-to-Cyan Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4 leading-tight"
        >
          Hi, I'm <span className="gradient-accent-text">{personalData.name}</span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 sm:h-12 flex items-center justify-center gap-2 text-base sm:text-2xl md:text-3xl font-mono font-medium text-[var(--text-primary)] mb-6 whitespace-nowrap"
        >
          <FiTerminal className="text-forest-400 w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline">I am a </span>
          <span className="text-sand-400 font-semibold">
            {displayText}
            <span className="typing-caret" aria-hidden="true" />
          </span>
        </motion.div>

        {/* Tagline & Student Info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-3 font-normal leading-relaxed"
        >
          "{personalData.tagline}"
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto mb-8"
        >
          <span>{personalData.degree}</span>
          <span className="text-[var(--text-muted)]">&middot;</span>
          <span>{personalData.university}</span>
          <span className="text-[var(--text-muted)]">&middot;</span>
          <span className="inline-flex items-center gap-1"><FiMapPin className="w-3.5 h-3.5 text-forest-400" />{personalData.location}</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="btn-gradient group px-7 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 cursor-pointer"
          >
            <span>View Projects</span>
            <FiArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-7 py-3.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold text-base border border-[var(--border-card)] hover:border-forest-500/50 hover:text-forest-400 shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            <FiMail className="w-4 h-4 text-forest-400" />
            <span>Get in Touch</span>
          </a>

          <a
            href={personalData.cvPath}
            download="Ahsan_Iqbal_CV.pdf"
            className="px-7 py-3.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold text-base border border-[var(--border-card)] hover:border-forest-500/50 hover:text-forest-400 shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            <FiDownload className="w-4 h-4 text-forest-400" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-5 text-[var(--text-secondary)]"
        >
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ahsan Iqbal GitHub"
            className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-forest-500/40 hover:text-forest-400 transition-all hover:scale-110 shadow-sm"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ahsan Iqbal LinkedIn"
            className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-sand-500/40 hover:text-sand-400 transition-all hover:scale-110 shadow-sm"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Email Ahsan Iqbal"
            className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-forest-500/40 hover:text-forest-400 transition-all hover:scale-110 shadow-sm"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
