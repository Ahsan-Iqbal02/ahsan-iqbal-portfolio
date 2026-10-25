import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { visibleAttire } from '../data/attire';
import { FiCamera, FiX, FiUser } from 'react-icons/fi';

export default function Attire() {
  const [openItem, setOpenItem] = useState(null);

  // Close the enlarged photo with Escape
  useEffect(() => {
    if (!openItem) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpenItem(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openItem]);

  if (visibleAttire.length === 0) return null;

  return (
    <section id="attire" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label inline-flex items-center gap-2 mb-3"
          >
            <span className="num">06 /</span><span>Professional Image</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight"
          >
            Professional Attire Portfolio
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 heading-gradient-line mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
            How I dress for different professional settings, and the skills and personality traits (OCEAN model) each look communicates.
          </p>
        </div>

        {/* Looks grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {visibleAttire.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-card)] shadow-lg glow-hover flex flex-col"
            >
              {/* Photo */}
              {item.image ? (
                <button
                  type="button"
                  onClick={() => setOpenItem(item)}
                  className="relative block aspect-[4/5] overflow-hidden cursor-zoom-in"
                  aria-label={`Enlarge photo: ${item.category}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 font-mono text-xs px-2 py-1 rounded-md bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {item.aiEdited && (
                    <span className="absolute top-3 right-3 text-[11px] font-medium px-2 py-1 rounded-md bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-card)]">
                      AI-edited
                    </span>
                  )}
                </button>
              ) : (
                <div className="relative aspect-[4/5] m-3 mb-0 rounded-xl border-2 border-dashed border-forest-500/40 bg-forest-950/40 flex flex-col items-center justify-center text-center p-6 gap-3">
                  <FiCamera className="w-8 h-8 text-forest-400" />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">Photo {idx + 1} needed</span>
                  <span className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.outfit}</span>
                  <span className="absolute bottom-2 text-[11px] font-mono text-[var(--text-muted)]">Only visible on localhost</span>
                </div>
              )}

              {/* Text */}
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-forest-400">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] flex-grow">
                  {item.caption}
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--border-card)]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-forest-950/40 text-forest-300 border border-forest-500/30">
                    <FiUser className="w-3 h-3" />
                    OCEAN: {item.trait}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-sand-500/10 text-sand-400 border border-sand-500/30">
                    {item.skill}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Enlarged photo */}
      <AnimatePresence>
        {openItem && (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={openItem.category}
          >
            <motion.figure
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-card)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={openItem.image} alt={openItem.alt} className="w-full max-h-[70vh] object-contain bg-black/20" />
              <figcaption className="p-5">
                <div className="text-xs font-mono uppercase tracking-wider text-forest-400 mb-1">{openItem.category}</div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{openItem.caption}</p>
              </figcaption>
              <button
                type="button"
                onClick={() => setOpenItem(null)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-primary)]"
                aria-label="Close photo"
              >
                <FiX className="w-5 h-5" />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
