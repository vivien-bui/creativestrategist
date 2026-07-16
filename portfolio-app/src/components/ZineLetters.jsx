import { Fragment, useEffect, useMemo, useRef } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import './ZineLetters.css';

// Big zine type, letter by letter (06_DECISIONS.md #10): each glyph "pastes"
// itself down with a slightly wrong angle that settles, and — with `magnet` —
// letters slide away from the cursor like paste-up type being nudged.
//
// Deterministic -1..1 jitter so every letter keeps the same pose across
// re-renders instead of re-rolling Math.random.
const jitter = (i, salt) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
};

const MAGNET_RADIUS = 130;
const MAGNET_PUSH = 30;

export default function ZineLetters({ text, salt = 1, magnet = false, baseDelay = 0, immediate = false, className = '' }) {
  const wrapRef = useRef(null);
  const reduced = useReducedMotion();

  // Words as letter arrays; words wrap as units (letters use nbsp-like
  // inline-blocks, so wrapping mid-word would otherwise be invisible).
  const words = useMemo(() => text.split(' ').map((w) => [...w]), [text]);

  // Paste-in reveal: IO adds the class that arms the CSS animation, so
  // headings further down the page assemble when scrolled into view.
  // `immediate` arms on mount instead — the hero headline is always above
  // the fold, and routing it through IO means its animation-delay is timed
  // from whenever the IO callback happens to fire. During the intro cover
  // that callback can be delayed by main-thread work, landing the headline
  // visibly late. Arming on mount keeps the timing deterministic.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;
    if (reduced || immediate) {
      wrap.classList.add('zine-letters--in');
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrap.classList.add('zine-letters--in');
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, [reduced, immediate]);

  // Cursor magnet (desktop pointers only). One rAF loop that eases each
  // letter toward its push target and back to rest; it self-stops once
  // everything has settled so idle cost is zero.
  useEffect(() => {
    if (!magnet || reduced) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    const wrap = wrapRef.current;
    if (!wrap) return undefined;
    const spans = [...wrap.querySelectorAll('.zine-letters__l')];
    const cur = spans.map(() => ({ x: 0, y: 0, r: 0 }));
    let pointer = null;
    let raf = null;

    const tick = () => {
      raf = null;
      let alive = Boolean(pointer);
      spans.forEach((s, i) => {
        let tx = 0;
        let ty = 0;
        let tr = 0;
        if (pointer) {
          const rect = s.getBoundingClientRect();
          // rect includes the current offset; subtract it to get the
          // resting center, otherwise pushed letters keep fleeing.
          const cx = rect.left + rect.width / 2 - cur[i].x;
          const cy = rect.top + rect.height / 2 - cur[i].y;
          const dx = cx - pointer.x;
          const dy = cy - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < MAGNET_RADIUS) {
            const f = 1 - d / MAGNET_RADIUS;
            const push = f * f * MAGNET_PUSH;
            tx = (dx / (d || 1)) * push;
            ty = (dy / (d || 1)) * push;
            tr = jitter(i, 7) * 10 * f;
          }
        }
        cur[i].x += (tx - cur[i].x) * 0.16;
        cur[i].y += (ty - cur[i].y) * 0.16;
        cur[i].r += (tr - cur[i].r) * 0.16;
        if (Math.abs(cur[i].x) > 0.05 || Math.abs(cur[i].y) > 0.05 || Math.abs(cur[i].r) > 0.05) alive = true;
        s.style.transform = `translate(${cur[i].x}px, ${cur[i].y}px) rotate(${cur[i].r}deg)`;
      });
      if (alive) raf = requestAnimationFrame(tick);
      else spans.forEach((s) => (s.style.transform = ''));
    };

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const near =
        e.clientX > rect.left - MAGNET_RADIUS &&
        e.clientX < rect.right + MAGNET_RADIUS &&
        e.clientY > rect.top - MAGNET_RADIUS &&
        e.clientY < rect.bottom + MAGNET_RADIUS;
      pointer = near ? { x: e.clientX, y: e.clientY } : null;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [magnet, reduced, text]);

  let letterIndex = 0;
  return (
    <span ref={wrapRef} className={`zine-letters ${className}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          {/* the space must sit BETWEEN the inline-block word spans —
              leading whitespace inside them gets trimmed away */}
          {wi > 0 && ' '}
          <span aria-hidden="true" className="zine-letters__w">
            {word.map((ch, ci) => {
              const i = letterIndex++;
              return (
                <span
                  key={ci}
                  className="zine-letters__l"
                  style={{
                    '--zl-delay': `${baseDelay + i * 42}ms`,
                    '--zl-rot': `${jitter(i, salt) * 9}deg`,
                    '--zl-y': `${0.35 + Math.abs(jitter(i, salt + 3)) * 0.4}em`,
                  }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
