// Global print-like texture layer. Baked on (showGrain tweak defaulted to
// true) — see 04_IMAGES.md "Decorative / Non-photographic Visual Assets".
const GRAIN_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
  "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter>" +
  "<rect width='160' height='160' filter='url(%23n)' opacity='0.6'/></svg>";

export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        pointerEvents: 'none',
        opacity: 0.05,
        backgroundImage: `url("${GRAIN_SVG}")`,
      }}
    />
  );
}
