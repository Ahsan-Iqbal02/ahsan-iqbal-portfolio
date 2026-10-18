import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalData } from '../data/personal';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-app)]/90 backdrop-blur-md shadow-lg shadow-violet-950/10 border-b border-[var(--border-card)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ahsan Iqbal Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-violet-500 to-cyan-400 p-[2px] shadow-sm shadow-violet-500/30 group-hover:shadow-violet-400/50 transition-all">
              <div className="w-full h-full bg-[var(--bg-card)] rounded-[10px] flex items-center justify-center font-bold text-cyan-400 font-mono tracking-tighter text-base group-hover:text-white transition-colors">
                {personalData.initials}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[var(--text-primary)] tracking-tight text-lg group-hover:text-violet-400 transition-colors">
                {personalData.name}
              </span>
              <span className="text-[11px] text-cyan-400 font-medium tracking-wide -mt-1 hidden sm:block">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-cyan-400 bg-violet-950/40 shadow-inner border border-violet-500/30'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-[2px] heading-gradient-line rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & Social Icons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[var(--text-secondary)] hover:text-violet-400 hover:bg-slate-800/40 rounded-lg transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-[var(--text-secondary)] hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 ml-1 text-[var(--text-secondary)] hover:text-violet-400 hover:bg-slate-800/40 rounded-lg transition-colors border border-[var(--border-card)] bg-[var(--bg-card)]"
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5 text-amber-300" />
              ) : (
                <FiMoon className="w-5 h-5 text-violet-500" />
              )}
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-[var(--text-secondary)] hover:text-violet-400 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)]"
            >
              {theme === 'dark' ? (
                <FiSun className="w-4 h-4 text-amber-300" />
              ) : (
                <FiMoon className="w-4 h-4 text-violet-500" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open navigation menu"
              className="p-2 text-[var(--text-primary)] hover:text-cyan-400 focus:outline-none rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)]"
            >
              {isOpen ? <FiX className="w-6 h-6 text-cyan-400" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--bg-app)]/98 backdrop-blur-xl border-b border-[var(--border-card)] px-4 pt-3 pb-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-cyan-400 bg-violet-950/50 border border-violet-500/30'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-800/30'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full heading-gradient-line"></span>}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center justify-around pt-4 mt-4 border-t border-[var(--border-card)]">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-violet-400"
            >
              <FiGithub className="w-4 h-4" /> GitHub
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-cyan-400"
            >
              <FiLinkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-violet-400"
            >
              <FiMail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
