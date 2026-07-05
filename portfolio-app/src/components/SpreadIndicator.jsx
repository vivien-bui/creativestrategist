import { useEffect, useState } from 'react';
import './SpreadIndicator.css';

// Fixed "you are on spread N" marker (06_DECISIONS.md #10) — treats the
// site as a zine: hero is the cover, contact the back cover, case-study
// detail pages the appendix. Driven by an IO band across the viewport
// middle over the id-carrying [data-screen-label] landmarks; re-scans on
// view swaps (home ↔ detail) via the `view` dep.
const LABELS = {
  hero: 'cover',
  work: 'selected work',
  about: 'about',
  skills: 'the usual order',
  contact: 'back cover',
};

function labelFor(id) {
  if (LABELS[id]) return LABELS[id];
  if (id.startsWith('cs-')) return `appendix · ${id.replace(/^cs-|-detail$/g, '')}`;
  return id;
}

export default function SpreadIndicator({ view }) {
  const [spread, setSpread] = useState(null);

  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-screen-label][id]')];
    if (!sections.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = sections.indexOf(entry.target);
          setSpread({ num: idx + 1, label: labelFor(entry.target.id) });
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [view]);

  if (!spread) return null;
  return (
    <div className="spread-indicator" aria-hidden="true">
      <span key={`${spread.num}-${spread.label}`} className="spread-indicator__text">
        ( p. {String(spread.num).padStart(2, '0')} — {spread.label} )
      </span>
    </div>
  );
}
