import { useRef } from 'react';
import { TrophyDoodle } from './Doodles';
import useReducedMotion from '../hooks/useReducedMotion';
import './AwardCallout.css';

// Confetti palette borrows the Twisties election colours (red / canary / green)
// plus a soft cream and party-pink for a little extra sparkle.
const CONFETTI_COLORS = ['#c62828', '#ffd23f', '#2e8b3a', '#f3efe6', '#ff8fab'];
const CONFETTI_PIECES = 18;

// Editorial achievement ribbon for a case-study detail page (currently
// Twisties' TikTok Award). Text renders verbatim from the data source.
// The pill throws a small one-time confetti burst the first time it's hovered.
export default function AwardCallout({ text }) {
  const layerRef = useRef(null);
  const firedRef = useRef(false);
  const reduced = useReducedMotion();

  const celebrate = () => {
    if (firedRef.current || reduced) return;
    const layer = layerRef.current;
    if (!layer) return;
    firedRef.current = true;

    for (let i = 0; i < CONFETTI_PIECES; i += 1) {
      const piece = document.createElement('span');
      piece.className = 'award-confetti__piece';
      const dx = (Math.random() * 2 - 1) * (36 + Math.random() * 52);
      const peak = -(28 + Math.random() * 46);
      const fall = 46 + Math.random() * 60;
      const rot = (Math.random() * 2 - 1) * 320;
      const size = 5 + Math.random() * 5;
      const flat = Math.random() < 0.5;
      piece.style.setProperty('--dx', `${dx.toFixed(1)}px`);
      piece.style.setProperty('--peak', `${peak.toFixed(1)}px`);
      piece.style.setProperty('--fall', `${fall.toFixed(1)}px`);
      piece.style.setProperty('--rot', `${rot.toFixed(0)}deg`);
      piece.style.width = `${size.toFixed(1)}px`;
      piece.style.height = `${(flat ? size * 0.5 : size).toFixed(1)}px`;
      piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
      piece.style.borderRadius = Math.random() < 0.4 ? '50%' : '1px';
      piece.style.animationDelay = `${(Math.random() * 90).toFixed(0)}ms`;
      piece.addEventListener('animationend', () => piece.remove());
      layer.appendChild(piece);
    }
  };

  return (
    <div className="award-callout" data-r="award-callout">
      <span className="award-callout__rule" aria-hidden="true" />
      <span className="award-callout__text" onMouseEnter={celebrate}>
        <TrophyDoodle size={14} /> {text}
        <span ref={layerRef} className="award-confetti" aria-hidden="true" />
      </span>
      <span className="award-callout__rule" aria-hidden="true" />
    </div>
  );
}
