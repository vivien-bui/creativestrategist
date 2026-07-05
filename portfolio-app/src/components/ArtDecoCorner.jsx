export default function ArtDecoCorner({ className = '' }) {
  return (
    <svg
      viewBox="0 0 72 72"
      className={`receipt__corner ${className}`}
      aria-hidden="true"
    >
      {/* Outer stepped bracket */}
      <path
        d="M2 42 V2 H42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Inner stepped bracket creating the Art Deco "step" motif */}
      <path
        d="M6 32 V6 H32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />

      {/* Sunburst fan rays — the signature Art Deco element */}
      <line x1="2" y1="2" x2="20" y2="60" stroke="currentColor" strokeWidth="0.7" opacity="0.2" />
      <line x1="2" y1="2" x2="32" y2="56" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
      <line x1="2" y1="2" x2="44" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="2" y1="2" x2="52" y2="42" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <line x1="2" y1="2" x2="58" y2="32" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="2" y1="2" x2="60" y2="20" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />

      {/* Concentric quarter-circle arcs — radiating outward */}
      <path d="M2 2 A12 12 0 0 1 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
      <path d="M2 2 A22 22 0 0 1 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path d="M2 2 A34 34 0 0 1 36 36" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path d="M2 2 A48 48 0 0 1 50 50" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.2" />
      <path d="M2 2 A62 62 0 0 1 64 64" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />

      {/* Chevron/zigzag stepped pyramid along the bracket edges */}
      <path
        d="M10 2 L10 6 L14 6 L14 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path
        d="M20 2 L20 5 L23 5 L23 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <path
        d="M30 2 L30 4 L32 4 L32 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <path
        d="M2 10 L6 10 L6 14 L2 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path
        d="M2 20 L5 20 L5 23 L2 23"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <path
        d="M2 30 L4 30 L4 32 L2 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />

      {/* Central diamond jewel at the corner vertex */}
      <path
        d="M2 2 L6 6 L2 10 L-2 6 Z"
        fill="currentColor"
        opacity="0.6"
        transform="translate(2, -2)"
      />

      {/* Tiny dot accents along the arcs */}
      <circle cx="10" cy="8" r="1" fill="currentColor" opacity="0.45" />
      <circle cx="8" cy="10" r="1" fill="currentColor" opacity="0.45" />
      <circle cx="18" cy="14" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="14" cy="18" r="0.8" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
