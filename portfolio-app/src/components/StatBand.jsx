import { useEffect, useRef } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import './StatBand.css';

// Quantified proof points, rendered from the supplied metrics data
// ({value, prefix?, suffix?, decimals?, label} — see caseStudies.js).
// Sits directly under the detail hero, before The Insight, matching the
// original Doritos page. Numeric values count up once the first time
// they scroll into view; each stat carries its own data-reveal so the
// shared scroll-reveal batching staggers them.
function formatStat({ value, prefix = '', suffix = '', decimals = 0 }) {
  const num = typeof value === 'number' ? value.toFixed(decimals) : value;
  return `${prefix}${num}${suffix}`;
}

export default function StatBand({ stats }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const band = ref.current;
    if (!band || reduced) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          band.querySelectorAll('.stat-band__value').forEach((el) => {
            const original = el.textContent;
            const m = original.match(/^([^\d]*)([\d.]+)(.*)$/);
            if (!m) return;
            const prefix = m[1];
            const target = parseFloat(m[2]);
            const decimals = (m[2].split('.')[1] || '').length;
            const suffix = m[3] || '';
            const t0 = performance.now();
            const dur = 1400;
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
              if (p < 1) requestAnimationFrame(tick);
              else el.textContent = original;
            };
            requestAnimationFrame(tick);
          });
        });
      },
      { threshold: 0.4 }
    );
    io.observe(band);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div ref={ref} className="stat-band" data-r="stat-4">
      {stats.map((s) => (
        <div key={s.label} className="stat-band__item" data-reveal>
          <div className="stat-band__value">{formatStat(s)}</div>
          <div className="stat-band__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
