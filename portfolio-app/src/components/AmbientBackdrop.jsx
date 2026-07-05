import useShaderCanvas from '../webgl/useShaderCanvas';
import { HERO_FRAG, CONTACT_FRAG } from '../webgl/shaders';
import './AmbientBackdrop.css';

// The living-gradient layer behind a section. Purely decorative: sits under
// the content, ignores pointer events, and fades in only once the first
// frame has actually rendered — so browsers without WebGL (or with a
// blocked context) keep the exact pre-WebGL look.
const VARIANTS = {
  hero: { frag: HERO_FRAG, interactive: true, renderScale: 0.7 },
  contact: { frag: CONTACT_FRAG, interactive: false, renderScale: 0.55 },
};

export default function AmbientBackdrop({ variant }) {
  const { frag, ...options } = VARIANTS[variant];
  const { canvasRef, ready } = useShaderCanvas(frag, options);

  return (
    <canvas
      ref={canvasRef}
      className={`ambient-backdrop${ready ? ' ambient-backdrop--ready' : ''}`}
      aria-hidden="true"
    />
  );
}
