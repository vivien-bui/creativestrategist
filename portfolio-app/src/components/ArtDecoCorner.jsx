// A small Deco-style corner fan: an L bracket plus three nested quarter-arcs
// radiating from the corner. Always drawn oriented to the top-left; callers
// place it at the other three corners by rotating the whole SVG 90°/180°/
// 270° (see .receipt__corner--* in SkillsSection.css), which cycles which
// physical corner the motif points into.
export default function ArtDecoCorner({ className = '' }) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={`receipt__corner ${className}`}
      aria-hidden="true"
    >
      <path d="M2 18 V2 H18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 2 A18 18 0 0 1 20 20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M2 2 A27 27 0 0 1 29 29" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.38" />
      <path d="M2 2 A36 36 0 0 1 38 38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}
