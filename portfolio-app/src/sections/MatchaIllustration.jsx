// Hand-drawn iced matcha latte illustration — replaces an earlier generic
// "hero pour" concept per user request. Purely decorative/metaphorical,
// so (unlike photographic slots) it's fine as a crafted SVG asset.
// See project/docs/06_DECISIONS.md #7 and 04_IMAGES.md.
export default function MatchaIllustration() {
  return (
    <svg id="matcha-art" viewBox="0 0 360 460" className="matcha-art" role="img" aria-label="Iced matcha latte illustration">
      <defs>
        <linearGradient id="matchaTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9db97c" />
          <stop offset="1" stopColor="#7e9c5f" />
        </linearGradient>
        <linearGradient id="milkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4ecdc" />
          <stop offset="1" stopColor="#eee1c8" />
        </linearGradient>
        <clipPath id="cupClip">
          <rect x="112" y="86" width="136" height="330" rx="22" />
        </clipPath>
      </defs>
      <ellipse cx="180" cy="436" rx="96" ry="13" fill="rgba(43,36,48,0.10)" />
      <rect x="196" y="14" width="18" height="120" rx="9" transform="rotate(8 205 74)" fill="#b48a92" />
      <rect x="106" y="80" width="148" height="342" rx="26" fill="#ffffff" opacity="0.4" />
      <g clipPath="url(#cupClip)">
        <rect x="112" y="86" width="136" height="330" fill="url(#milkGrad)" />
        <path
          d="M112 252 C 140 230, 166 276, 192 252 C 216 230, 236 268, 248 250 L 248 188 L 112 188 Z"
          fill="#a9c184"
          opacity="0.85"
        />
        <path
          d="M112 214 C 142 196, 170 238, 200 214 C 224 197, 240 226, 248 212 L 248 148 L 112 148 Z"
          fill="url(#matchaTop)"
        >
          <animate
            attributeName="d"
            dur="4.5s"
            repeatCount="indefinite"
            values="M112 214 C 142 196, 170 238, 200 214 C 224 197, 240 226, 248 212 L 248 148 L 112 148 Z; M112 210 C 146 226, 168 198, 200 220 C 222 234, 240 202, 248 216 L 248 148 L 112 148 Z; M112 214 C 142 196, 170 238, 200 214 C 224 197, 240 226, 248 212 L 248 148 L 112 148 Z"
          />
        </path>
        <rect x="112" y="86" width="136" height="76" fill="url(#matchaTop)" />
        <path d="M130 162 q 7 28 0 48 q -9 -24 0 -48" fill="#7e9c5f" opacity="0.75" />
        <path d="M224 174 q 8 32 1 54 q -10 -27 -1 -54" fill="#8fae6f" opacity="0.75" />
        <rect x="124" y="100" width="52" height="52" rx="12" transform="rotate(-12 150 126)" fill="#ffffff" opacity="0.4" />
        <rect x="186" y="94" width="56" height="56" rx="12" transform="rotate(10 214 122)" fill="#ffffff" opacity="0.34" />
        <rect x="154" y="140" width="48" height="48" rx="12" transform="rotate(22 178 164)" fill="#ffffff" opacity="0.3" />
        <rect x="186" y="76" width="18" height="270" rx="9" transform="rotate(8 195 210)" fill="#b48a92" opacity="0.9" />
        <rect x="122" y="96" width="10" height="304" rx="5" fill="#ffffff" opacity="0.4" />
      </g>
      <rect x="106" y="80" width="148" height="14" rx="7" fill="#ffffff" opacity="0.65" />
      <circle cx="132" cy="302" r="4" fill="#ffffff" opacity="0.55" />
      <circle cx="142" cy="338" r="3" fill="#ffffff" opacity="0.5" />
      <circle cx="230" cy="320" r="4" fill="#ffffff" opacity="0.55" />
    </svg>
  );
}
