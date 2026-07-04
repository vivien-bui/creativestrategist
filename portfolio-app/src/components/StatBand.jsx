import { useEffect, useRef } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import './StatBand.css';

// Quantified proof points — only ever used where real numbers exist
// (currently Doritos only, see 06_DECISIONS.md #4). Counts up once, the
// first time it scrolls into view.
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
          band.querySelectorAll(':scope > div > div:first-child').forEach((el) => {
            const original = el.textContent;
            const m = original.match(/^([\d.]+)(.*)$/);
            if (!m) return;
            const target = parseFloat(m[1]);
            const decimals = (m[1].split('.')[1] || '').length;
            const suffix = m[2] || '';
            const t0 = performance.now();
            const dur = 1400;
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = (target * eased).toFixed(decimals) + suffix;
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
    <div ref={ref} className="stat-band" data-r="stat-4" data-reveal>
      {stats.map((s) => (
        <div key={s.label}>
          <div className="stat-band__value">{s.value}</div>
          <div className="stat-band__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
