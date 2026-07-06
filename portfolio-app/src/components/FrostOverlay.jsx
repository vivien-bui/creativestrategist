import useReducedMotion from '../hooks/useReducedMotion';
import './FrostOverlay.css';

// CryoGlow-only frost layer (see caseStudies #cs-cryoglow-detail). Purely
// decorative and pointer-transparent: ice creeps in from the page edges like
// frost forming on cold glass, a frosted-glass turbulence texture shimmers at
// the margins, a slow band of cold light sweeps across, and ice crystals
// drift down over the content. Everything is CSS transform/opacity so it stays
// cheap; the whole thing collapses to a single static frosted edge under
// prefers-reduced-motion.

// A single six-point ice crystal, drawn once and reused with per-instance
// size / position / timing set via CSS custom properties.
function Crystal({ style }) {
  return (
    <svg className="frost__crystal" style={style} viewBox="0 0 100 100" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      >
        <line x1="50" y1="6" x2="50" y2="94" />
        <line x1="12" y1="28" x2="88" y2="72" />
        <line x1="88" y1="28" x2="12" y2="72" />
        {/* branch tips — the detail that reads as "snowflake", not "asterisk" */}
        <path d="M50 22 l-9 9 M50 22 l9 9 M50 78 l-9 -9 M50 78 l9 -9" />
        <path d="M22 34 l1 12 M22 34 l12 -1 M78 66 l-1 -12 M78 66 l-12 1" />
        <path d="M78 34 l-1 12 M78 34 l-12 -1 M22 66 l1 -12 M22 66 l12 1" />
      </g>
    </svg>
  );
}

// Deterministic layout so the frost looks composed, not random-on-every-render.
const CRYSTALS = [
  { left: '6%', size: 34, delay: 0, dur: 15, drift: -26, sway: 18 },
  { left: '18%', size: 20, delay: 5.5, dur: 19, drift: 20, sway: -14 },
  { left: '30%', size: 46, delay: 2.2, dur: 13, drift: 30, sway: 22 },
  { left: '43%', size: 16, delay: 8, dur: 22, drift: -18, sway: -20 },
  { left: '57%', size: 28, delay: 1, dur: 17, drift: 24, sway: 16 },
  { left: '69%', size: 38, delay: 6.5, dur: 14, drift: -30, sway: -18 },
  { left: '81%', size: 22, delay: 3.5, dur: 20, drift: 18, sway: 20 },
  { left: '92%', size: 30, delay: 9.5, dur: 16, drift: -22, sway: -16 },
];

export default function FrostOverlay() {
  const reduced = useReducedMotion();

  return (
    <div className={`frost${reduced ? ' frost--static' : ''}`} aria-hidden="true">
      <div className="frost__edge" />
      <div className="frost__glass" />
      {!reduced && (
        <>
          <div className="frost__shimmer" />
          <div className="frost__crystals">
            {CRYSTALS.map((c, i) => (
              <Crystal
                key={i}
                style={{
                  '--fx-left': c.left,
                  '--fx-size': `${c.size}px`,
                  '--fx-delay': `${c.delay}s`,
                  '--fx-dur': `${c.dur}s`,
                  '--fx-drift': `${c.drift}px`,
                  '--fx-sway': `${c.sway}px`,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
