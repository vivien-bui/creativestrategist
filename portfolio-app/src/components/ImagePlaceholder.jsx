import { useCallback, useRef } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import './ImagePlaceholder.css';

// Stands in for every real photo slot until Vivien drops in campaign
// photography / a headshot. Never a stock or generated image — see
// project/docs/04_IMAGES.md and 01_CLAUDE.md "Image Philosophy".
//
// The hover tilt + shine here is the "displacement" half of the image-lens
// pairing (see ImageLensOverlay for the WebGL half): a light 3D tilt toward
// the cursor plus a moving highlight, done in plain CSS since there's no
// pixel data yet to warp. Swapping a slot for a real <img> later inherits
// this for free — nothing here depends on the placeholder markup itself.
export default function ImagePlaceholder({ label, radius = 0, className = '', style, dark = false }) {
  const elRef = useRef(null);
  const reduced = useReducedMotion();

  const onPointerMove = useCallback(
    (e) => {
      if (reduced || e.pointerType === 'touch') return;
      const el = elRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--tilt-x', `${(px - 0.5) * 10}deg`);
      el.style.setProperty('--tilt-y', `${(0.5 - py) * 8}deg`);
      el.style.setProperty('--shine-x', `${px * 100}%`);
      el.style.setProperty('--shine-y', `${py * 100}%`);
      el.style.setProperty('--shine-o', '1');
    },
    [reduced]
  );

  const onPointerLeave = useCallback(() => {
    const el = elRef.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
    el.style.setProperty('--shine-o', '0');
  }, []);

  return (
    <div
      ref={elRef}
      className={`img-placeholder ${dark ? 'img-placeholder--dark' : ''} ${className}`}
      style={{ borderRadius: radius, ...style }}
      role="img"
      aria-label={label}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <svg className="img-placeholder__icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.4" />
        <path d="M21 15.5l-4.5-4.5-4 4-3-3-6.5 6.5" />
      </svg>
      <span className="img-placeholder__label">{label}</span>
    </div>
  );
}
