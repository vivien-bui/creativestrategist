import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import './CursorNote.css';

// Cursor annotation (06_DECISIONS.md #10): a small parenthetical label that
// trails the pointer and changes per hover target — anything carrying
// data-cursor-note. Margin-note energy: the zine talking back to the reader.
// Desktop fine-pointers only; skipped entirely under reduced motion.
export default function CursorNote() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const noteRef = useRef(null);

  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!enabled || reduced) return undefined;
    const note = noteRef.current;
    if (!note) return undefined;

    const pos = { x: -100, y: -100 };
    const target = { x: -100, y: -100 };
    let text = '';
    let raf = null;

    const tick = () => {
      raf = null;
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      note.style.transform = `translate(${pos.x + 18}px, ${pos.y + 20}px) rotate(-2deg)`;
      if (Math.abs(target.x - pos.x) > 0.3 || Math.abs(target.y - pos.y) > 0.3) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const host = e.target.closest?.('[data-cursor-note]');
      const next = host ? host.getAttribute('data-cursor-note') : '';
      if (next !== text) {
        text = next;
        if (text) {
          note.textContent = `( ${text} )`;
          // snap close to the cursor on appear so it doesn't fly across
          // the screen from its previous resting spot
          pos.x = target.x - 6;
          pos.y = target.y - 6;
        }
        note.classList.toggle('cursor-note--on', Boolean(text));
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled, reduced]);

  if (!enabled || reduced) return null;
  return <div ref={noteRef} className="cursor-note" aria-hidden="true" />;
}
