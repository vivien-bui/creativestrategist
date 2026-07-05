# Vivien Bui — Portfolio

React + Vite implementation of the "Warm Gallery" portfolio design exported
from Claude Design. See `../project/docs/` for the full design system
reference (colors, typography, component rules, decision log).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Structure

- `src/data/caseStudies.js` — single source of truth for the 5 case
  studies (facts, copy, accent colors); both the Work section cards and
  the case-study detail pages read from here.
- `src/sections/` — the six page sections (Hero, Work, Skills, About,
  Contact, and the generic case-study detail template).
- `src/components/` — shared pieces (Nav, image placeholders, color
  dots, floating pills, rich-text emphasis, stat band, Art Deco corner
  ornament, ambient WebGL backdrops, the global image-hover lens).
- `src/webgl/` — dependency-free WebGL layer: `useShaderCanvas` (context
  setup, resize/DPR capping, offscreen + hidden-tab pausing, reduced-motion
  static frame, context-loss recovery, static + per-frame uniforms) and
  the fragment shaders (`hero` warm wash, `contact` aurora, `detail` — one
  shader parameterised per case study's theme/accent, `lens` — the global
  cursor glint). Degrades silently: without WebGL canvases never fade in
  and the plain CSS/DOM look shows.
  - `AmbientBackdrop` renders the hero/contact/detail backdrops.
  - `ImageLensOverlay` is a single global canvas (not one per photo) that
    lights up only while hovering an `.img-placeholder`, paired with a
    plain-CSS tilt + shine on `ImagePlaceholder` itself for the tactile
    "displacement" half (real pixel warping needs real photos — see the
    follow-up below).
- `src/App.jsx` — client-side view routing between the homepage and the
  5 detail pages (View Transitions where supported, scroll position is
  preserved when returning to Selected Work).

## Known follow-ups

- All 16 photo slots are styled placeholders — drop in real photography/
  a headshot by swapping `<ImagePlaceholder>` for an `<img>` in the
  relevant section or in `caseStudies.js`.
- Social links (Instagram/LinkedIn) in the footer are `href="#"` — add
  real URLs when available.
