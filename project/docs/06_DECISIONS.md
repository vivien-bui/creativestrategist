# 06_DECISIONS.md — Decision Log

## 1. Warm Gallery aesthetic over the original design-prompt's Fraunces/gradient direction
- **Decided:** Cream `#f7efe4` + warm ink `#2b2430`, Instrument Serif italic + Plus Jakarta Sans, hairline borders, grain overlay.
- **Why:** Matches Vivien's actual Instagram warmth/editorial tone better than the more maximalist gradient system floated in `PORTFOLIO-DATA.md`'s "Current Design System (Reference)" section (Fraunces + apricot/honey/lilac gradients + heavy glassmorphism).
- **Alternatives avoided:** The gradient-heavy glassmorphism system from the reference doc — judged too close to generic "AI portfolio" tropes.
- **Preserve:** Keep the cream/ink/italic-serif system as the base; the gradient palette should not be reintroduced wholesale.
- **Amended (2026-07):** The "digital zine" refresh (#10) took over the *type hierarchy* — headlines are now heavy lowercase Plus Jakarta Sans, with Instrument Serif italic demoted to the emphasis-accent voice. The palette, grain, hairline borders and overall warmth above are unchanged and still authoritative.

## 2. Dark detail pages vs light homepage
- **Decided:** All 5 case-study detail pages use dark `#17141a` background, EXCEPT CryoGlow which uses a lighter `#efe7de`.
- **Why:** Dark pages read like a lightbox/gallery-vault moment, separating "proof of work" from the warmer, more personal homepage. CryoGlow was made light because it's the newest/hero-featured study, treated as a continuation of the homepage rather than an archive entry.
- **Trade-off:** Slight inconsistency across detail pages; intentional, not a bug.
- **Preserve:** Do not flatten all 5 to the same treatment without asking.

## 3. Recency-based Work ordering (not chronological-ascending)
- **Decided (m0009):** CryoGlow (Feb–Jul 2026, newest) → AFW (2026) → Cruiser → Twisties → Doritos (2024, oldest) last.
- **Why:** User explicitly requested leading with most recent work; Doritos, despite being the most quantifiably impressive (450M+ reach), is the oldest and thus placed last.
- **Preserve:** Do not resort by "biggest numbers first" — recency is the deliberate ordering principle here.

## 4. Only Doritos has a stats band
- **Decided:** Real count-up stat metrics exist only on the Doritos detail page.
- **Why:** `PORTFOLIO-DATA.md` only contains quantified stats for Doritos; the other four studies have no numbers provided. Per project content rules, stats must never be fabricated.
- **Alternatives avoided:** Making up plausible-sounding stats for the other 4 studies to "balance" the page.
- **Preserve:** Do not add stat bands to CryoGlow/AFW/Cruiser/Twisties unless the user supplies real numbers (open item, see `07_TODO.md`).
- **Amended (2026-07):** User requested contextual stats on all detail pages, still with a hard no-fabrication rule. Interim resolution used verbatim non-metric facts for the studies without numbers.
- **Superseded (2026-07, later):** The user supplied real campaign metrics for all five studies (`cases.js` attachment, mirrored into `PORTFOLIO-DATA.md`). Every detail page now carries a stats band placed before The Insight, matching the original Doritos layout. The no-invented-metrics rule still stands — only render values present in the supplied data.

## 5. No WebGL / heavy motion libraries in the "overdrive" pass
- **Decided (m0018–m0021):** All motion (View Transitions, IntersectionObserver reveals, hero parallax, count-up, floating pills) implemented in vanilla CSS/WAAPI/JS only.
- **Why:** User explicitly prioritized "loads fast, works everywhere" over maximum visual ambition when asked directly.
- **Alternatives avoided:** WebGL particle/shader hero treatment, GSAP-driven cinematic sequences.
- **Preserve:** Any future animation additions should stay within this no-heavy-dependency constraint unless the user asks to revisit it.
- **Revisited (2026-07):** User explicitly asked to bring WebGL in. Implemented as dependency-free raw WebGL1 (no three.js/GSAP — ~3 KB gzipped added to the bundle) so the "loads fast, works everywhere" priority still holds: two ambient shader backdrops (hero warm wash, contact footer aurora) in `src/webgl/` + `src/components/AmbientBackdrop.jsx`. Guards: no-WebGL browsers keep the exact pre-WebGL look (canvas never fades in over the CSS background), `prefers-reduced-motion` gets a single static frame, rendering pauses offscreen/hidden-tab, resolution is capped (DPR ≤ 1.5 × renderScale ≤ 0.7), 30 fps throttle, low-power context, context-loss recovery. The no-heavy-dependency constraint itself still stands — future WebGL work should extend `useShaderCanvas`, not add a 3D library.
- **Expanded (2026-07, later):** All 5 case-study detail pages now carry the same ambient backdrop, parameterised per study — `AmbientBackdrop variant="detail"` takes the study's `theme` (light/dark, see #2) and `accent` hex and bakes both into one shared shader (`DETAIL_FRAG`) via static uniforms, so no new shader code is needed per study. Same constraints as above still apply.
- **Tried and reverted (2026-07):** A global cursor "lens" (`ImageLensOverlay`, one shared WebGL canvas) paired with a CSS tilt/shine on `ImagePlaceholder`, meant as the hover-displacement roadmap item. Removed at the user's request shortly after landing — see git history (`ImageLensOverlay.jsx`/`.css`, the `LENS_FRAG` shader, and `useShaderCanvas`'s per-frame `dynamicUniforms` support, which existed solely to feed it) if revisiting. `useShaderCanvas`'s static `uniforms`/`uniformsKey` stayed — the detail backdrops above still use them.

## 6. Client-side "pages" via state, not real multi-page routing
- **Decided:** Case-study detail pages are `<sc-if>`-gated sections toggled by `state.view`, not separate HTML files/DCs.
- **Why:** DC system constraint (single entrypoint file) plus the requirement to preserve exact scroll position when returning from a detail page — easiest to do within one component's state.
- **Trade-off:** The file is large (875 lines); acceptable per DC philosophy (a single large `<x-dc>` body is normal, componentizing prematurely is discouraged).
- **Preserve:** Do not split into multiple `.dc.html` files unless the user asks for reusable components — a single-file portfolio is intentional.

## 7. Iced matcha replaces the earlier "hero pour" illustration
- **Decided (m0037):** SVG illustration in the skills section reimagined as an iced matcha latte (cup, marbled matcha/milk, ice, straw) rather than a generic coffee pour.
- **Why:** Direct user request, more specific/personal than a generic pour graphic.
- **Preserve:** Keep this specific drink; don't revert to a generic coffee illustration.

## 8. "The usual order" is a receipt, not a resume list
- **Decided (m0003):** Skills section framed as a café order receipt (dashed borders, dotted leaders, ratings out of 10, barcode strip) rather than a standard skills list or progress bars.
- **Why:** Reinforces the personal café-culture metaphor consistently rather than mixing metaphor with generic UI (progress bars would break the bit).
- **Preserve:** Keep the receipt device; if expanding, add more line items in the same dotted-leader format, don't introduce a different skill-display pattern in this section.
- **Amended (2026-07):** Added an Art Deco corner frame (`ArtDecoCorner.jsx` — an L-bracket plus three nested corner arcs, rotated into all 4 corners; plus a fine inset ruled line) around the receipt card. Purely a framing device, doesn't touch the café-order content/metaphor above.

## 9. Matcha illustration motion made continuously "floaty"
- **Decided (2026-07):** The matcha art's scroll-drift + cursor-parallax (previously two separate handlers) were merged into one rAF loop that also adds a continuous idle bob (two out-of-phase sine waves on translateY) and a gentle rock (sine-wave rotate), gated by IntersectionObserver so it only runs while the section is on screen.
- **Why:** Direct user request — the illustration should read as genuinely hovering, not just reacting to scroll/cursor input.
- **Trade-off:** The CSS transition on `.skills__art-parallax` was removed (it fought the now-continuous per-frame updates, adding lag); smoothing instead comes from the pointer-easing math in the loop itself.
- **Preserve:** Keep the single-rAF-loop structure if adding more motion terms here — don't reintroduce a second competing handler/animation on the same transform property.

## 10. "Digital zine" aesthetic layer
- **Decided (2026-07):** Decorative accents follow a "digital zine" vocabulary, taken from reference layouts the user supplied (their own Instagram zine spreads — big-type tote/coffee/desk-clutter pages). Ingredients:
  - **Big lowercase grotesque type** — bold sans (use `--font-body` Plus Jakarta Sans, weight 700, tracking ≈ −0.03 to −0.045em, all lowercase), words *staggered/scattered* across the layout rather than set as a block; they may overlap or sit on photos (white over dark imagery, ink over cream).
  - **Parenthetical annotations** — small lowercase labels in the form `( left photo )`, `( a )`, `( fig. 01 )`, `( loading )`, ~12–13px, ~0.5 opacity, used as captions/wayfinding.
  - **Caption lists** — short lowercase credit/note lines in plain small sans (no bullets), like a zine's photo-credit block.
  - **Generous negative space + asymmetric offsets** — elements placed off-grid, not centered; photos can butt against big type.
- **Why:** Earlier decorative experiments (compass doodle, paper-note/sticker/terminal cards) read as "boring"/off-tone to the user; the zine references are their actual visual voice.
- **Where used:** About-section annotation block + staggered type over the portrait (`AboutSection`), and the once-per-session intro cover (`ZineIntro`).
- **Preserve:** When adding decorative/personality elements anywhere in the site, reach for this zine vocabulary first (staggered lowercase type + parenthetical annotations), not skeuomorphic cards (stickers, tape, receipts outside the existing skills-receipt device, fake app windows). It layers on top of the Warm Gallery system (#1) — cream/ink palette and the italic-serif display voice stay; the zine type uses the body sans, not a new font.
- **Expanded (2026-07, "Direction 1" full refresh):** The zine vocabulary is now the site-wide structural voice, not just an accent layer. Headings/titles across Hero, Work, About, Skills, Contact and the case-study detail pages are heavy lowercase Plus Jakarta Sans (700/800 weights added to the Google Fonts load); eyebrows/labels/CTAs are lowercase parentheticals; the nav is a masthead (`vivien bui` / `( vol. 01 — sydney )`, underline contact link instead of the pill). Instrument Serif italic is demoted from headline font to the *emphasis* accent inside statements/titles (`em` spans, e.g. "cryoglow", "talk about."), amending #1's font hierarchy without dropping the font. **Deliberately kept per user:** all doodles (sparkle/stamp/swipe + favicon), Mynerve accents (hero tagline, contact note), the skills receipt device, and the ZineIntro boot cover. Animation layer added in the same pass (all vanilla CSS/WAAPI/rAF per #5): `ZineLetters` (paste-up per-letter assembly on scroll-reveal + cursor-magnet scatter on the hero words, desktop only), `ZineTicker` (looping masthead marquee between hero and work), `CursorNote` (parenthetical label trailing the cursor over `data-cursor-note` targets, fine pointers only), `SpreadIndicator` (fixed bottom-center `( p. 0N — section )` page number, blend-mode difference for light/dark pages, hidden on mobile). Everything no-ops under `prefers-reduced-motion`.
