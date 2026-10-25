import React from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Attire from './components/Attire';

// Each section softly fades and rises into place as you scroll to it
function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] flex flex-col theme-fade selection:bg-forest-500 selection:text-[var(--btn-text)] relative overflow-x-hidden">
          {/* Reading progress bar along the top */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left heading-gradient-line"
            style={{ scaleX: progress }}
          />

          {/* Page background: paper grain, soft glows and floating dots */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 paper-grain opacity-70" />
            <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-forest-500/10 blur-[120px] drift-slow" />
            <div className="absolute top-1/2 -right-40 w-[480px] h-[480px] rounded-full bg-sand-500/10 blur-[130px] drift-slow-reverse" />
            <ParticleBackground />
          </div>

          <Navbar />
          <motion.main
            className="flex-grow relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
            <Reveal><About /></Reveal>
            <Reveal><Skills /></Reveal>
            <Reveal><Projects /></Reveal>
            <Reveal><Education /></Reveal>
            <Reveal><Certifications /></Reveal>
            <Reveal><Attire /></Reveal>
            <Reveal><Contact /></Reveal>
          </motion.main>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
