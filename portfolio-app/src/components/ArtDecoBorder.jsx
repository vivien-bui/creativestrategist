export default function ArtDecoBorder() {
  return (
    <svg
      viewBox="0 0 320 32"
      className="receipt__deco-border"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Central sunburst medallion */}
      <circle cx="160" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="160" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <circle cx="160" cy="16" r="2" fill="currentColor" opacity="0.5" />

      {/* Sunburst rays from center */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const x1 = 160 + Math.cos(angle) * 9;
        const y1 = 16 + Math.sin(angle) * 9;
        const x2 = 160 + Math.cos(angle) * 14;
        const y2 = 16 + Math.sin(angle) * 14;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="currentColor"
            strokeWidth={i % 3 === 0 ? '1' : '0.6'}
            opacity={i % 3 === 0 ? 0.7 : 0.35}
          />
        );
      })}

      {/* Horizontal ruled lines extending from medallion */}
      <line x1="18" y1="16" x2="144" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="18" y1="13" x2="130" y2="13" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
      <line x1="18" y1="19" x2="130" y2="19" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />

      <line x1="176" y1="16" x2="302" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="190" y1="13" x2="302" y2="13" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
      <line x1="190" y1="19" x2="302" y2="19" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />

      {/* Left chevron cluster */}
      <path d="M42 10 L48 16 L42 22" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path d="M50 11 L55 16 L50 21" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
      <path d="M56 12 L60 16 L56 20" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />

      {/* Right chevron cluster (mirrored) */}
      <path d="M278 10 L272 16 L278 22" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path d="M270 11 L265 16 L270 21" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
      <path d="M264 12 L260 16 L264 20" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />

      {/* Left-side stepped/ziggurat pyramids */}
      <rect x="72" y="13" width="3" height="6" fill="currentColor" opacity="0.2" />
      <rect x="77" y="11" width="3" height="10" fill="currentColor" opacity="0.15" />
      <rect x="82" y="13" width="3" height="6" fill="currentColor" opacity="0.2" />

      {/* Right-side stepped/ziggurat pyramids */}
      <rect x="235" y="13" width="3" height="6" fill="currentColor" opacity="0.2" />
      <rect x="240" y="11" width="3" height="10" fill="currentColor" opacity="0.15" />
      <rect x="245" y="13" width="3" height="6" fill="currentColor" opacity="0.2" />

      {/* Diamond accents along the border */}
      <path d="M100 16 L103 13 L106 16 L103 19 Z" fill="currentColor" opacity="0.3" />
      <path d="M118 16 L120 14 L122 16 L120 18 Z" fill="currentColor" opacity="0.2" />
      <path d="M198 16 L200 14 L202 16 L200 18 Z" fill="currentColor" opacity="0.2" />
      <path d="M214 16 L217 13 L220 16 L217 19 Z" fill="currentColor" opacity="0.3" />

      {/* Tiny terminal dots at the ends */}
      <circle cx="18" cy="16" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="302" cy="16" r="1.5" fill="currentColor" opacity="0.4" />

      {/* Outer frame tick marks */}
      <line x1="30" y1="8" x2="30" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="30" y1="22" x2="30" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="290" y1="8" x2="290" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="290" y1="22" x2="290" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
