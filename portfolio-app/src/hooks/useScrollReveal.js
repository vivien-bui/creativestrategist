import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion';

// Staggered fade/rise reveal for any element carrying data-reveal, re-run
// whenever `deps` changes (i.e. on every view swap). Mirrors the original
// DC's IntersectionObserver + WAAPI batching so cards/rows animate in with
// a 90ms stagger the first time they scroll into view.
export default function useScrollReveal(deps) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;

    const targets = document.querySelectorAll('[data-reveal]');
    let batch = [];
    let batchTimer = null;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          batch.push(entry.target);
        }
        if (batch.length && !batchTimer) {
          batchTimer = setTimeout(() => {
            batch.forEach((el, i) => {
              el.animate(
                [
                  { opacity: 0, transform: 'translateY(22px)' },
                  { opacity: 1, transform: 'translateY(0)' },
                ],
                { duration: 640, delay: i * 90, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' }
              );
              el.style.opacity = '';
              el.style.transform = '';
            });
            batch = [];
            batchTimer = null;
          }, 40);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    const vh = window.innerHeight;
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > vh) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(22px)';
        io.observe(el);
      }
    });

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
