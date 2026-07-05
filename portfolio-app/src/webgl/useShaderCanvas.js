import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

// Minimal dependency-free WebGL plumbing for ambient shader backdrops.
// Revisits decision log #5 (project/docs/06_DECISIONS.md) at the user's
// request — the "loads fast, works everywhere" constraint still applies,
// hence raw WebGL1 (no three.js), and the guards below:
//   - no WebGL → hook stays inert, the CSS background underneath remains
//   - prefers-reduced-motion → a single static frame, no animation loop
//   - offscreen (IntersectionObserver) or hidden tab → loop pauses
//   - devicePixelRatio capped + renderScale < 1 (soft gradients don't
//     need native resolution), low-power context, throttled frame rate
//   - context loss/restore handled; GPU resources released on unmount

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS) && !gl.isContextLost()) {
    // eslint-disable-next-line no-console
    console.warn('Shader compile failed:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

// Dispatches to the right gl.uniformNf(v) call based on how many floats
// a named uniform carries — lets callers pass plain [r,g,b]-style arrays
// without knowing GL's API shape.
function setUniform(gl, loc, values) {
  if (!loc) return;
  switch (values.length) {
    case 1:
      gl.uniform1f(loc, values[0]);
      break;
    case 2:
      gl.uniform2f(loc, values[0], values[1]);
      break;
    case 3:
      gl.uniform3f(loc, values[0], values[1], values[2]);
      break;
    case 4:
      gl.uniform4f(loc, values[0], values[1], values[2], values[3]);
      break;
    default:
      break;
  }
}

export default function useShaderCanvas(
  fragSource,
  {
    renderScale = 0.7,
    dprCap = 1.5,
    fps = 30,
    interactive = false,
    staticTime = 12,
    alpha = false,
    // Set once at init — for values that only change when the shader itself
    // is swapped (e.g. a case study's accent color). Pair with uniformsKey
    // so the effect re-inits when the values actually change.
    uniforms = null,
    uniformsKey = '',
  } = {}
) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const gl = canvas.getContext('webgl', {
      alpha,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    });
    if (!gl) return undefined; // no WebGL: the plain CSS background stays

    let program = null;
    let timeLoc = null;
    let resLoc = null;
    let pointerLoc = null;
    let raf = 0;
    let running = false;
    let onScreen = true;
    let pageVisible = !document.hidden;
    let lost = false;
    let announcedReady = false;
    const start = performance.now();
    let lastFrame = 0;
    const frameInterval = 1000 / fps;
    // Pointer eased toward its target in the loop so the warp trails softly.
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    function init() {
      const vs = compileShader(gl, gl.VERTEX_SHADER, VERT);
      const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragSource);
      if (!vs || !fs) return false;
      program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS) && !gl.isContextLost()) {
        // eslint-disable-next-line no-console
        console.warn('Shader link failed:', gl.getProgramInfoLog(program));
        return false;
      }
      gl.useProgram(program);
      // One oversized triangle covers the viewport with no seams.
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const posLoc = gl.getAttribLocation(program, 'a_pos');
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
      timeLoc = gl.getUniformLocation(program, 'u_time');
      resLoc = gl.getUniformLocation(program, 'u_res');
      pointerLoc = gl.getUniformLocation(program, 'u_pointer');

      if (uniforms) {
        for (const [name, values] of Object.entries(uniforms)) {
          setUniform(gl, gl.getUniformLocation(program, name), values);
        }
      }
      return true;
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap) * renderScale;
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    function draw(timeSec) {
      resize();
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      gl.uniform1f(timeLoc, timeSec);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      if (pointerLoc) gl.uniform2f(pointerLoc, pointer.x, pointer.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!announcedReady) {
        announcedReady = true;
        setReady(true);
      }
    }

    function frame(now) {
      raf = 0;
      if (!running) return;
      if (now - lastFrame >= frameInterval) {
        lastFrame = now;
        draw((now - start) / 1000);
      }
      raf = requestAnimationFrame(frame);
    }

    function updateRunning() {
      const shouldRun = onScreen && pageVisible && !lost && !reduced;
      if (shouldRun && !running) {
        running = true;
        raf = requestAnimationFrame(frame);
      } else if (!shouldRun && running) {
        running = false;
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }
    }

    if (!init()) return undefined;
    if (reduced) {
      // Static wash at a fixed time offset — texture without motion.
      draw(staticTime);
    }

    const io = new IntersectionObserver((entries) => {
      onScreen = entries[0]?.isIntersecting ?? true;
      updateRunning();
    });
    io.observe(canvas);

    const onVisibility = () => {
      pageVisible = !document.hidden;
      updateRunning();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onPointerMove = (e) => {
      const r = canvas.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      pointer.tx = (e.clientX - r.left) / r.width;
      pointer.ty = 1 - (e.clientY - r.top) / r.height; // flip to GL space
    };
    if (interactive) window.addEventListener('pointermove', onPointerMove, { passive: true });

    const onContextLost = (e) => {
      e.preventDefault();
      lost = true;
      updateRunning();
    };
    const onContextRestored = () => {
      lost = false;
      if (init()) {
        if (reduced) draw(staticTime);
        updateRunning();
      }
    };
    canvas.addEventListener('webglcontextlost', onContextLost);
    canvas.addEventListener('webglcontextrestored', onContextRestored);

    updateRunning();

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      if (interactive) window.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
    // `uniforms` is intentionally excluded: it's only read at init, and
    // uniformsKey signals when to actually re-init with new values.
  }, [fragSource, renderScale, dprCap, fps, interactive, staticTime, reduced, alpha, uniformsKey]);

  return { canvasRef, ready };
}
