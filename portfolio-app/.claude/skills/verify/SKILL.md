---
name: verify
description: Build, serve, and drive the portfolio app in headless Chromium to verify changes at the rendered surface.
---

# Verifying portfolio-app changes

## Build + serve

```bash
cd portfolio-app
npm install --no-audit --no-fund
npm run lint && npm run build
npm run preview -- --port 4173 --strictPort &   # serves dist/
```

The app is served under the repo base path: **http://localhost:4173/creativestrategist/**
(`/` responds 302 to it — follow it, don't treat as failure).

## Drive it

Playwright 1.56.1 is installed globally; Chromium is pre-fetched
(`PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`). In an `.mjs` script import it
by absolute path (NODE_PATH doesn't apply to ESM):

```js
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
```

Flows worth driving:
- Homepage sections: `#hero`, `#work`, `#about`, `#skills`, `#contact`.
- Detail-page routing: click a work card → hash becomes `#cs-*-detail`;
  hero unmounts. "Back to top" / nav returns home with scroll restored.
- WebGL backdrops (`canvas.ambient-backdrop` in `#hero` and `#contact`):
  the `ambient-backdrop--ready` class + `opacity: 1` mean the shader drew
  its first frame. Probe the three modes:
  1. normal — two element screenshots ~1s apart must differ (it animates);
  2. `newContext({ reducedMotion: 'reduce' })` — ready class set, but
     screenshots identical (single static frame);
  3. `chromium.launch({ args: ['--disable-webgl', '--disable-webgl2'] })` —
     ready stays false, canvas opacity stays 0, page looks pre-WebGL.
- Overlay safety: `.hero__cta` click must set `location.hash` to `#work`;
  `.contact__input` must accept typed text (canvases are pointer-events:none).
- Detail-page backdrops (`canvas.ambient-backdrop` inside `#cs-*-detail`):
  the app only reads `location.hash` on load, so `page.goto`/`page.evaluate`
  setting `location.hash` needs a `page.reload()` after to land on that
  view. Check both a light-theme study (`cs-cryoglow-detail`) and a
  dark-theme one (e.g. `cs-doritos-detail`); clicking `.detail__next`
  should swap the accent without the canvas ever losing `--ready`.
- Matcha "floaty" motion (`#skills .skills__art-parallax`): it now animates
  continuously (not just on scroll/hover), so
  `elementHandle.screenshot()`'s "wait for stable bounding box" check will
  timeout — use `page.screenshot({ clip })` with a manually-computed
  bounding box instead. Two clips ~900ms apart differing (with the mouse
  never moved) is the actual proof of the idle bob/rock.
- Art Deco receipt frame: `document.querySelectorAll('.receipt__corner')`
  should be 4.

## Gotchas

- Headless WebGL logs SwiftShader deprecation warnings and "GPU stall due
  to ReadPixels" (from screenshots) to the console — environment noise, not
  app errors. Watch `pageerror` instead.
- One `ERR_CONNECTION_RESET` console error may appear for the Google Fonts
  stylesheet (proxy) — unrelated to app code.
