import './FloatingPill.css';

// Small floating skill-tag badges that hover around a hero image / matcha
// art. `pos` places it via inline offsets for desktop's wide canvas;
// `mobilePos` re-anchors it (as a % of the image, so it hugs the corner
// instead of drifting off the narrow viewport) below 768px. Exposed as CSS
// custom properties so a single plain-CSS media query can pick between
// them with no JS/layout thrash.
export default function FloatingPill({ children, pos, mobilePos, duration = '5.5s', note }) {
  const style = { animationDuration: duration };
  for (const [side, value] of Object.entries(pos || {})) {
    style[`--fp-${side}`] = value;
  }
  for (const [side, value] of Object.entries(mobilePos || pos || {})) {
    style[`--fp-${side}-m`] = value;
  }
  return (
    <div className="floating-pill" data-r="float-pill" style={style} data-cursor-note={note || undefined}>
      {children}
    </div>
  );
}
