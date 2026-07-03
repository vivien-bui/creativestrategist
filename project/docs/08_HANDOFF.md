# 08_HANDOFF.md

## Current Status
The portfolio is feature-complete for a first version: hero, 5-study Selected Work gallery (with individual detail pages), skills-as-café-order section, About, and Contact are all built, responsive, and motion-enhanced. It is in a demo-ready but not launch-ready state — see `07_TODO.md` High Priority items (real photography, real email/social links, contact form backend decision).

## What's Finished
- Full single-file DC: `Portfolio Home.dc.html` (~875 lines).
- 5 case-study detail pages with consistent narrative structure, chained via "Next case study" links in recency order (CryoGlow → AFW → Cruiser → Twisties → Doritos → loop).
- Client-side view routing (`state.view`) with scroll-position preservation on exit back to Selected Work.
- Mobile responsive breakpoint (`≤767px`) covering every section.
- Motion layer: View Transitions on nav/page-swap, scroll-reveal stagger, hero parallax, Doritos stat count-up, floating pills, receipt hover nudges, animated matcha-foam SVG — all gated by `prefers-reduced-motion` and exposed as three boolean Tweaks (`cinematicNav`, `scrollReveals`, `heroParallax`) plus two color Tweaks (hero word colors) and a global `accent` Tweak.
- Nav name corrected to "Vivien Bui".

## What's Still In Progress / Open
- Real photography for all 16 image slots (currently placeholders; one has an incidental dev screenshot in `cryoglow-2` — should be replaced, not assumed final).
- Stats for the 4 non-Doritos case studies are intentionally absent (no real numbers supplied yet — do not invent).
- Contact email mismatch between visible text and `mailto:` action (see `07_TODO.md` #2 Medium Priority) — needs a decision, not a design change.
- Social footer links are placeholders (`href="#"`).

## Known Constraints
- Single-DC architecture — do not split into multiple files/components without a real reuse/prop need (see `01_CLAUDE.md` Component Philosophy).
- `support.js` in this project is a deliberately-kept older runtime version; don't "upgrade" it without a concrete reason (see `07_TODO.md` Technical Debt).
- All styling is inline per DC system rules — there is no external stylesheet to edit; the only `<style>` block is for `@keyframes`/`@media`/font imports.

## Important Files
- `Portfolio Home.dc.html` — the entire site.
- `image-slot.js` — starter component powering every photo placeholder; do not modify unless the drag-and-drop behavior itself needs to change.
- `support.js` — DC runtime, intentionally left at an older version (see above).
- `uploads/PORTFOLIO-DATA.md` — case-study facts/stats source of truth.
- `uploads/CLAUDE-DESIGN-PROMPT.md` — original creative brief/process document.
- `docs/*.md` (this folder) — the documentation set you are reading now; keep it updated as the single source of truth going forward.

## Things to Inspect Before Making Edits
1. Read `01_CLAUDE.md` in full first — it encodes constraints (color-bleed rules, never-change list, typography rules) that aren't obvious from the code alone.
2. Before editing any repeated inline-style pattern, `grep` for its `data-r` hook to see how many places share it — use `dc_html_str_replace` with `b_multi: true` for shared patterns rather than editing one instance at a time.
3. Before touching the logic class (routing, motion, reveals), re-read the whole `class Component` block — the `_go`/`_goHome`/`_onClick` methods are interdependent (view transitions wrap scroll restoration in a specific way); a partial edit can silently break "next case study" navigation or scroll-restore-on-exit.
4. Check `06_DECISIONS.md` before "fixing" an apparent inconsistency (e.g. CryoGlow's light background, Doritos's `cs-detail` id, stat band only on one page) — several are deliberate, not bugs.

## Common Mistakes to Avoid
- Don't invent stats/numbers for case studies lacking real data.
- Don't let a case study's individual accent color leak into the global theme or another study's page.
- Don't rewrite the whole DC file for a small change — use `dc_html_str_replace`/`dc_js_str_replace`.
- Don't skip the responsive media-query block when adding a new grid/section — every existing section has a mobile override there.
- Don't remove the `prefers-reduced-motion` guard when adding new motion.

## Recommended Workflow for Continuing Development
1. Read `01_CLAUDE.md` → `02_ARCHITECTURE.md` → `06_DECISIONS.md` before starting any nontrivial change.
2. For content-only changes (copy, stats, links), check `05_CONTENT.md` for style/format conventions first.
3. For anything touching motion or routing, re-read the full logic class before editing.
4. After any edit, call `ready_for_verification` — routing and reduced-motion behavior are easy to break silently and won't always throw console errors.
5. Update `07_TODO.md` and `06_DECISIONS.md` as you resolve open items or make new deliberate calls, so this documentation set stays a reliable source of truth for the next session.
