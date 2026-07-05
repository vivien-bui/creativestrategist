import { useEffect, useRef } from 'react';
import useShaderCanvas from '../webgl/useShaderCanvas';
import { LENS_FRAG } from '../webgl/shaders';
import useReducedMotion from '../hooks/useReducedMotion';
import './ImageLensOverlay.css';

// A single viewport-spanning WebGL canvas that renders a soft glass glint
// tracking the cursor, gated on/off by whether the pointer is over any
// .img-placeholder. One shared context (vs. one per photo slot) keeps this
// cheap and avoids bumping into the browser's ~16 concurrent WebGL context
// ceiling once real photography fills all 16 image slots (see 04_IMAGES.md).
export default function ImageLensOverlay() {
  const strengthRef = useRef({ u_strength: [0] });
  const reduced = useReducedMotion();
  const { canvasRef, ready } = useShaderCanvas(LENS_FRAG, {
    interactive: true,
    alpha: true,
    renderScale: 0.6,
    dprCap: 1.5,
    fps: 24,
    dynamicUniforms: strengthRef,
  });

  useEffect(() => {
    if (reduced) return undefined;
    let target = 0;
    let current = 0;
    let raf = requestAnimationFrame(tick);

    function tick() {
      current += (target - current) * 0.12;
      strengthRef.current.u_strength[0] = current;
      raf = requestAnimationFrame(tick);
    }

    // elementFromPoint (rather than the enter/leave events) sidesteps the
    // asymmetry of "am I leaving toward a child or a sibling" — it just asks
    // what's under the cursor right now.
    const onPointerMove = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      target = el?.closest('.img-placeholder') ? 1 : 0;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`image-lens${ready ? ' image-lens--ready' : ''}`}
      aria-hidden="true"
    />
  );
}
