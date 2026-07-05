import { useEffect, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import './ZineIntro.css';

// Digital-zine loading page (06_DECISIONS.md #10): a cream cover spread
// with staggered lowercase grotesque type and small parenthetical
// annotations, shown once per session on first load, then it fades and
// the site is already rendered underneath. Reduced motion skips it.
const SEEN_KEY = 'vb-zine-intro-seen';

export default function ZineIntro() {
  const reduced = useReducedMotion();
  const [skip] = useState(() => {
    try {
      return Boolean(sessionStorage.getItem(SEEN_KEY));
    } catch {
      return false;
    }
  });
  const [phase, setPhase] = useState('in');

  useEffect(() => {
    if (skip) return undefined;
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* private mode — show it anyway */
    }
    if (reduced) {
      setPhase('done');
      return undefined;
    }
    const out = setTimeout(() => setPhase('out'), 2100);
    const done = setTimeout(() => setPhase('done'), 2750);
    return () => {
      clearTimeout(out);
      clearTimeout(done);
    };
  }, [skip, reduced]);

  if (skip || phase === 'done') return null;

  return (
    <div className={`zine-intro${phase === 'out' ? ' zine-intro--out' : ''}`} aria-hidden="true">
      <span className="zine-intro__paren zine-intro__paren--top">( the portfolio of )</span>
      <span className="zine-intro__word zine-intro__word--1">vivien</span>
      <span className="zine-intro__word zine-intro__word--2">bui</span>
      <span className="zine-intro__paren zine-intro__paren--mid">( creative strategist )</span>
      <div className="zine-intro__foot">
        <span className="zine-intro__paren">( loading — fig. 00 )</span>
        <span className="zine-intro__paren">( sydney )</span>
      </div>
    </div>
  );
}
