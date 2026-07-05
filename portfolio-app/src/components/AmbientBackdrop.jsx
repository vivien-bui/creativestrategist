import useShaderCanvas from '../webgl/useShaderCanvas';
import { HERO_FRAG, CONTACT_FRAG, DETAIL_FRAG, hexToVec3 } from '../webgl/shaders';
import './AmbientBackdrop.css';

const DARK_BASE = hexToVec3('#17141a');
const DARK_ALT = hexToVec3('#0b090d');
const LIGHT_BASE = hexToVec3('#efe7de'); // --cryoglow-bg
const LIGHT_ALT = hexToVec3('#fffdf9'); // --paper

// The living-gradient layer behind a section. Purely decorative: sits under
// the content, ignores pointer events, and fades in only once the first
// frame has actually rendered — so browsers without WebGL (or with a
// blocked context) keep the exact pre-WebGL look.
export default function AmbientBackdrop({ variant, theme, accent }) {
  let frag = HERO_FRAG;
  let options = { interactive: true, renderScale: 0.7 };

  if (variant === 'contact') {
    frag = CONTACT_FRAG;
    options = { interactive: false, renderScale: 0.55 };
  } else if (variant === 'detail') {
    frag = DETAIL_FRAG;
    const isLight = theme === 'light';
    options = {
      interactive: false,
      renderScale: 0.5,
      uniforms: {
        u_base: isLight ? LIGHT_BASE : DARK_BASE,
        u_alt: isLight ? LIGHT_ALT : DARK_ALT,
        u_accent: hexToVec3(accent || '#8b9486'),
      },
      // Forces a re-init (new accent/theme baked into the GL program) when
      // the user navigates between case studies without unmounting.
      uniformsKey: `${theme}-${accent}`,
    };
  }

  const { canvasRef, ready } = useShaderCanvas(frag, options);

  return (
    <canvas
      ref={canvasRef}
      className={`ambient-backdrop${ready ? ' ambient-backdrop--ready' : ''}`}
      aria-hidden="true"
    />
  );
}
