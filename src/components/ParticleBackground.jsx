import React, { useEffect, useRef } from 'react';

/*
  Soft floating dots behind the whole page.
  - Colours come from the CSS variables --particle-1 / --particle-2,
    so they follow the light (beige) and dark (green) themes.
  - Pauses automatically when the tab is hidden (requestAnimationFrame).
  - Respects "reduce motion": dots are drawn once and stay still.
*/
export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dots = [];
    let colors = ['rgba(47,93,58,0.35)', 'rgba(138,106,53,0.3)'];
    let frameId;

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const c1 = styles.getPropertyValue('--particle-1').trim();
      const c2 = styles.getPropertyValue('--particle-2').trim();
      if (c1 && c2) colors = [c1, c2];
    };

    const makeDots = () => {
      const count = Math.round(Math.min(70, Math.max(24, (width * height) / 22000)));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 1 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25 - 0.08,
        color: Math.random() < 0.65 ? 0 : 1,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeDots();
    };

    const draw = (t = 0) => {
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        if (!reduceMotion) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < -10) d.x = width + 10;
          if (d.x > width + 10) d.x = -10;
          if (d.y < -10) d.y = height + 10;
          if (d.y > height + 10) d.y = -10;
        }
        // gentle "breathing" in size
        const pulse = reduceMotion ? 1 : 0.85 + 0.15 * Math.sin(t / 1200 + d.phase);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = colors[d.color];
        ctx.fill();
      }
      if (!reduceMotion) frameId = requestAnimationFrame(draw);
    };

    readColors();
    resize();
    draw();

    // Re-read colours when the theme class on <html> changes
    const observer = new MutationObserver(() => {
      readColors();
      if (reduceMotion) draw();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    const onResize = () => {
      resize();
      if (reduceMotion) draw();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />;
}
