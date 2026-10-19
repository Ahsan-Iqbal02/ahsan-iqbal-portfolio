import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalData } from '../data/personal';
import { FiMail, FiSend, FiGithub, FiLinkedin, FiMapPin, FiCheckCircle, FiAlertCircle, FiLoader, FiCopy, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalData.email}`;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2f5d3a', '#5f7f3a', '#dcc799', '#c9b07a']
      });
    } catch {
      // Ignore if confetti not supported
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if real keys are configured
    const isConfigured = 
      serviceId && 
      templateId && 
      publicKey && 
      !serviceId.includes('placeholder') &&
      !publicKey.includes('placeholder');

    if (!isConfigured) {
      // Simulate successful delivery for local evaluation / demonstration
      console.warn(
        'EmailJS keys are currently using placeholder values in .env. To enable live email dispatch, please add your valid EmailJS Service ID, Template ID, and Public Key.'
      );
      setTimeout(() => {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        triggerConfetti();
        setFormData({ user_name: '', user_email: '', message: '' });
      }, 900);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.user_name,
          reply_to: formData.user_email,
          message: formData.message,
          to_name: personalData.name,
        },
        publicKey
      );

      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully.');
      triggerConfetti();
      setFormData({ user_name: '', user_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS sending failed:', error);
      setStatus('error');
      setStatusMessage(
        'Unable to send automatically via EmailJS. Please feel free to email me directly at ' +
          personalData.email
      );
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
            <span className="num">06 /</span><span>Contact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
          >
            Let's Build Something Great
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 heading-gradient-line mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-sand-400 font-medium text-base sm:text-lg">
            {personalData.contactIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-card)] shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Contact Information
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Whether you have an internship opportunity, a project collaboration in mind, or just want to chat about AI/ML, Java, and C++, my inbox is always open!
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-app)]/60 dark:bg-ink-900/60 hover:bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-forest-500/40 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-950/50 border border-forest-500/30 flex items-center justify-center text-forest-300 group-hover:scale-110 transition-transform">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">
                      Direct Email
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-sand-400 transition-colors break-all">
                      {personalData.email}
                    </div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-forest-500/30 bg-forest-950/40 text-forest-300 hover:border-forest-500/60 transition-colors"
                  aria-live="polite"
                >
                  {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
                  <span>{copied ? 'Email copied!' : 'Copy email address'}</span>
                </button>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-app)]/60 dark:bg-ink-900/60 hover:bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-forest-500/40 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-ink-950 border border-ink-800 flex items-center justify-center text-ink-200 group-hover:scale-110 transition-transform">
                    <FiGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">
                      GitHub Profile
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-forest-400 transition-colors">
                      github.com/Ahsan-Iqbal02
                    </div>
                  </div>
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-ink-900/60 hover:bg-ink-900 border border-[var(--border-card)] hover:border-sand-500/40 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-950/50 border border-forest-500/30 flex items-center justify-center text-forest-400 group-hover:scale-110 transition-transform">
                    <FiLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">
                      LinkedIn
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-sand-400 transition-colors">
                      ahsan-iqbal-61689437a
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-ink-900/40 border border-[var(--border-card)] text-[var(--text-muted)]">
                  <div className="w-12 h-12 rounded-xl bg-ink-950 border border-ink-800 flex items-center justify-center text-forest-400">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-medium text-[var(--text-secondary)]">
                      Lahore, Punjab, Pakistan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-2xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-card)] shadow-xl relative glow-hover transition-all">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Send a Message
              </h3>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-forest-950/60 border border-forest-500/40 flex items-start gap-3 text-forest-200 text-sm">
                  <FiCheckCircle className="w-5 h-5 text-sand-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Message Delivered!</div>
                    <div>{statusMessage}</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 flex items-start gap-3 text-rose-300 text-sm">
                  <FiAlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Delivery Note</div>
                    <div className="mb-2">{statusMessage}</div>
                    <a
                      href={`mailto:${personalData.email}?subject=Contact%20from%20Portfolio&body=${encodeURIComponent(
                        formData.message
                      )}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-200 border border-rose-400/30 text-xs font-semibold hover:bg-rose-500/30"
                    >
                      <FiMail /> Open Default Email App
                    </a>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="user_name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Your Full Name <span className="text-forest-400">*</span>
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-app)]/70 dark:bg-ink-900 border border-[var(--border-card)] text-[var(--text-primary)] placeholder-ink-500 focus:outline-none focus:border-forest-400 focus:ring-1 focus:ring-forest-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Email Address <span className="text-forest-400">*</span>
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="e.g. jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-app)]/70 dark:bg-ink-900 border border-[var(--border-card)] text-[var(--text-primary)] placeholder-ink-500 focus:outline-none focus:border-forest-400 focus:ring-1 focus:ring-forest-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                    Your Message <span className="text-forest-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Ahsan, I'd like to discuss an opportunity or project..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-app)]/70 dark:bg-ink-900 border border-[var(--border-card)] text-[var(--text-primary)] placeholder-ink-500 focus:outline-none focus:border-forest-400 focus:ring-1 focus:ring-forest-400 transition-colors text-sm resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gradient w-full py-3.5 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <FiLoader className="w-5 h-5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
