// Fragment shaders for the ambient backdrops. Colors are the Warm Gallery
// tokens from index.css converted to linear-ish 0–1 RGB:
//   cream #f7efe4, paper #fffdf9, sage #8b9486, ink #2b2430, dark #17141a.
// Both shaders paint their section's base color at the edges so the canvas
// blends seamlessly into the surrounding CSS background (and the page looks
// identical if WebGL is unavailable and the canvas never fades in).

// #rrggbb -> [r, g, b] in 0–1, for feeding hex tokens into shader uniforms.
export function hexToVec3(hex) {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

const NOISE_LIB = `
precision highp float;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_pointer;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(17.0, 9.2);
    a *= 0.5;
  }
  return v;
}
`;

// Hero: slow warm wash — cream base with drifting sage and clay pools and
// paper highlights, gently warped toward the pointer like light on paper.
export const HERO_FRAG = `${NOISE_LIB}
void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = u_time * 0.045;

  vec2 m = vec2(u_pointer.x * aspect, u_pointer.y);
  float md = exp(-distance(p, m) * 2.4);

  vec2 warp = vec2(fbm(p * 1.3 + t), fbm(p * 1.3 - t + vec2(5.2, 1.3)));
  vec2 q = p + (warp - 0.5) * 0.85 + (m - p) * md * 0.1;

  float n1 = fbm(q * 1.5 + t * 0.7);
  float n2 = fbm(q * 2.1 - t * 0.5 + vec2(9.7, 3.1));
  float n3 = fbm(q * 3.2 + vec2(t * 0.9, -t * 0.4));

  vec3 cream = vec3(0.969, 0.937, 0.894);
  vec3 paper = vec3(1.0, 0.992, 0.976);
  vec3 sage = vec3(0.545, 0.58, 0.525);
  vec3 clay = vec3(0.878, 0.76, 0.674);

  vec3 col = cream;
  col = mix(col, sage, smoothstep(0.42, 0.78, n1) * 0.3);
  col = mix(col, clay, smoothstep(0.48, 0.82, n2) * 0.24);
  col = mix(col, paper, smoothstep(0.55, 0.9, n3) * 0.5);
  col = mix(col, sage, md * 0.07);

  float edge = smoothstep(0.0, 0.16, uv.x) * smoothstep(0.0, 0.16, 1.0 - uv.x)
             * smoothstep(0.0, 0.2, uv.y) * smoothstep(0.0, 0.2, 1.0 - uv.y);
  col = mix(cream, col, edge);

  gl_FragColor = vec4(col, 1.0);
}
`;

// Contact footer: ink base sinking to near-black at the bottom, with faint
// sage aurora bands and the rare warm shimmer. Kept very low intensity so
// the cream text keeps its contrast.
export const CONTACT_FRAG = `${NOISE_LIB}
void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = u_time * 0.03;

  vec3 ink = vec3(0.169, 0.141, 0.188);
  vec3 deep = vec3(0.09, 0.078, 0.102);
  vec3 sage = vec3(0.545, 0.58, 0.525);
  vec3 glow = vec3(0.953, 0.937, 0.902);

  float bands = fbm(vec2(p.x * 1.1 + t * 0.8, p.y * 2.4 - t * 0.5));
  float wash = fbm(p * 1.8 - t + vec2(4.0, 7.0));

  vec3 col = mix(ink, deep, smoothstep(0.0, 1.0, 1.0 - uv.y) * 0.5);
  col = mix(col, sage, smoothstep(0.5, 0.85, bands) * 0.12);
  col = mix(col, glow, smoothstep(0.62, 0.95, wash) * 0.05);

  gl_FragColor = vec4(col, 1.0);
}
`;

// Case-study detail pages: same slow-drift bands/wash as the contact footer,
// but parameterised so one shader covers all 5 studies (dark theme) plus the
// one light-themed study (CryoGlow, see decision log #2). u_base/u_alt set
// the page's own background pair; u_accent is that study's accent color,
// woven in at low intensity so each detail page still reads distinctly.
export const DETAIL_FRAG = `${NOISE_LIB}
uniform vec3 u_base;
uniform vec3 u_alt;
uniform vec3 u_accent;
void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = u_time * 0.025;

  float bands = fbm(vec2(p.x * 1.1 + t * 0.8, p.y * 2.2 - t * 0.5));
  float wash = fbm(p * 1.7 - t + vec2(3.0, 6.0));

  vec3 col = mix(u_base, u_alt, smoothstep(0.0, 1.0, 1.0 - uv.y) * 0.4);
  col = mix(col, u_accent, smoothstep(0.55, 0.9, bands) * 0.12);
  col = mix(col, u_accent, smoothstep(0.68, 0.96, wash) * 0.05);

  gl_FragColor = vec4(col, 1.0);
}
`;

// Global cursor lens: a soft glass glint that tracks the pointer, gated by
// u_strength (eased 0→1 in JS while hovering an .img-placeholder, 0
// otherwise). Fully transparent everywhere it isn't needed — this is the
// one shader that relies on the canvas's alpha channel compositing over the
// real DOM content underneath, so its RGB is premultiplied by alpha.
export const LENS_FRAG = `
precision highp float;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_pointer;
uniform float u_strength;

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 m = vec2(u_pointer.x * aspect, u_pointer.y);
  float d = distance(p, m);

  float core = smoothstep(0.16, 0.0, d) * 0.5;
  float ring = smoothstep(0.024, 0.0, abs(d - 0.1)) * 0.6;
  float glow = smoothstep(0.26, 0.0, d) * 0.3;

  vec3 paper = vec3(1.0, 0.992, 0.976);
  vec3 sage = vec3(0.545, 0.58, 0.525);
  vec3 tint = mix(paper, sage, 0.35 + 0.25 * sin(u_time * 1.2));

  float alpha = clamp((core + ring + glow) * u_strength, 0.0, 0.85);
  gl_FragColor = vec4(tint * alpha, alpha);
}
`;
