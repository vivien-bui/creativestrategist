import './FloatingPill.css';

// Small floating skill-tag badges around the hero photo / matcha art.
// `pos` places it via inline offsets (mirrors the original's per-pill corner).
export default function FloatingPill({ children, pos, duration = '5.5s' }) {
  return (
    <div className="floating-pill" data-r="float-pill" style={{ ...pos, animationDuration: duration }}>
      {children}
    </div>
  );
}
