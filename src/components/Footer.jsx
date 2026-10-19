import React from 'react';
import { personalData } from '../data/personal';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-[var(--border-card)] bg-[var(--bg-app)]/85 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-forest-600 to-sand-400 p-[1px]">
            <div className="w-full h-full bg-[var(--bg-card)] rounded-[7px] flex items-center justify-center font-bold text-sand-400 font-mono text-xs">
              {personalData.initials}
            </div>
          </div>
          <span className="text-sm text-[var(--text-muted)]">
            &copy; 2026 {personalData.name}. All rights reserved.
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-forest-500/40 hover:text-forest-400 transition-colors"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-sand-500/40 hover:text-sand-400 transition-colors"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Send email"
            className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-forest-500/40 hover:text-forest-400 transition-colors"
          >
            <FiMail className="w-4 h-4" />
          </a>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 ml-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-forest-500/40 text-forest-400 hover:text-sand-400 transition-all group"
          >
            <FiArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
