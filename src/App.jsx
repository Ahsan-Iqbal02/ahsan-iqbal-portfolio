import React from 'react';
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

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] flex flex-col transition-colors duration-300 selection:bg-violet-500 selection:text-white relative overflow-x-hidden">
        {/* Global Fixed Realistic Background following all pages */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/workspace-bg.jpg"
            alt="Photorealistic Software Engineer & AI Workspace"
            className="w-full h-full object-cover object-center transition-all duration-700"
          />
          {/* Dynamic dark/light mode overlay for optimal realism and text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-overlay)] via-[var(--bg-overlay-mid)] to-[var(--bg-overlay)] transition-colors duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--bg-radial)_85%)] transition-colors duration-500" />
        </div>

        {/* Global Ambient Glow Highlights */}
        <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed top-2/3 right-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none z-0" />

        <Navbar />
        <main className="flex-grow relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
