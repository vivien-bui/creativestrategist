# 01_CLAUDE.md — Primary Instruction File

## Project Overview
A personal portfolio site for **Vivien Bui**, a creative strategist in Sydney (FMCG/beauty/fashion campaigns), for agency-contract work. Single Design Component: `Portfolio Home.dc.html`. Built by synthesizing Vivien's Instagram aesthetic (warm, editorial, café-culture, travel) with reference-site UX patterns (gallery grids, editorial case-study pages, stat bands).

## Design Philosophy
"Gallery, not portfolio-template." Treat each case study as a framed print in a warm-toned gallery wall — cream walls, hairline borders, italic serif titling — rather than a SaaS-style card grid. Strategic thinking is foregrounded through copy (insight → idea → evolution narrative arcs), not just visuals.

## Brand Personality
Warm, confident, a little playful, editorial-minimalist. Not corporate, not chaotic. Signature device: **the café/matcha metaphor** — skills framed as a drink order, receipt-styled, because it's authentic to Vivien's actual habits (coffee/tea culture) and adds personality without breaking the premium tone.

## Creative Direction
- "Warm Gallery" aesthetic: cream backgrounds, warm near-black ink, one shifting accent color (tweakable), italic serif display type over clean grotesque body type.
- Case-study detail pages go **dark** (`#17141a`) to feel like a lightbox/gallery spotlight moment, distinct from the light homepage — except CryoGlow's detail, which stays on the light `#efe7de` tone (the newest/featured study, treated as an extension of the homepage rather than the gallery vault).

## Tone of Voice
Confident, campaign-trade-press style copy. Case studies narrate like agency case-study decks: **The Insight → The Idea → The Evolution/Scope/Press**. Headlines lean witty/italicized ("Cast your crunch.", "It's a brat summer."). Never generic marketing filler.

## UX Principles
- Homepage is a single continuous scroll: Hero → Selected Work → The Usual Order (skills) → About → Contact.
- Clicking a case-study card swaps to a full "page" (client-side view state, not real navigation) with its own scroll position; "← All work" and "Next case study" links chain between details and return to the exact scroll position left on the homepage.
- Deep-linkable via `#cs-<name>-detail` hashes.

## Visual Hierarchy
1. Hero headline (Creative / Strategist, split by a photo) is the largest text on the site.
2. Section headers (`Selected Work`, `The usual order`, `About`) are the next visual anchor, italic serif, paired with a small uppercase eyebrow label on the right.
3. Case-study titles inside detail pages are similarly large but italic-accented in that study's brand color.

## Typography System
- **Display:** Instrument Serif, italic, weight 400 — used for ALL headings, big pull-quotes ("The Insight" lines), and the receipt heading. Never used at small sizes for body copy.
- **Body/UI:** Plus Jakarta Sans, weights 400/500/600 — nav, paragraph copy, tags/pills, stat labels.
- **Decorative (secondary):** Mynerve (`--font-decorative`), used sparingly as a handwritten personal touch — currently the hero tagline and the footer "Made with warm light" line only. Not for headings, nav, or long body copy.
- Do not use Instrument Serif non-italic (the italic IS the brand voice).

## Colour System
- Base cream: `#f7efe4` (home background)
- Ink: `#2b2430` (primary text, footer background)
- Detail-page dark: `#17141a` with text `#f3efe6`
- CryoGlow-detail light variant: `#efe7de`
- Accent (tweakable via Tweaks panel): default `#8b9486` sage, options include `#c98a4b` warm amber, `#b48a92` dusty rose
- Each case study additionally carries its OWN accent used only within its own detail page (never bleeds into global theme): CryoGlow `#8e7cf0` violet, AFW `#9b6ff0` purple, Cruiser `#c6f437` chartreuse, Twisties `#ffd23f` yellow, Doritos `#ff5a2a` orange.
- **Rule:** never let a case study's individual color leak onto the homepage or another case study's page.

## Spacing System
- Section vertical rhythm: ~120px between major homepage sections, 40–64px within a section.
- Container max-widths: 1280px (homepage sections), 1160px (detail pages).
- Card radius: 24px (work cards), 12–16px (images), 999px (pills/buttons).

## Layout Rules
- Homepage grids collapse to `1fr` at ≤767px (see the single responsive media query block in `<helmet><style>`).
- All spacing uses flex/grid `gap`, not margin-chains.
- `data-r="..."` attributes are the CSS hooks used ONLY for responsive overrides — do not repurpose them for styling logic.

## Component Philosophy
Single-file DC, no child components split out (nothing repeats ≥4× with real state — case-study cards differ too much in content to templatize). `<image-slot>` used for every real photo placeholder; never replace with a generated/stock image without asking the user first.

## Animation Philosophy
Lightweight, CSS/WAAPI only — no WebGL, per explicit user preference for fast/universal loading. Layers currently in place:
- View Transitions API for section jumps and page-swaps (`cinematicNav` tweak)
- IntersectionObserver-staggered fade/rise reveals (`scrollReveals` tweak)
- Hero parallax + photo scale on scroll (`heroParallax` tweak)
- Count-up stat animation (Doritos stat band only — see 07_TODO)
- Floating pill badges (`floaty` keyframe), receipt-line hover nudge, animated SVG matcha-foam wobble
All motion must respect `prefers-reduced-motion` (`this._reduced` check in logic class) — never add motion that bypasses this check.

## Accessibility Rules
- Respect `prefers-reduced-motion: reduce` for ALL animation (already wired via `this._reduced`).
- Maintain color contrast: ink-on-cream and cream-on-ink pairs are both ~13:1; case-study accent colors are used for large italic text or icons only, never body copy at small size.
- Hit targets (contact form, nav, pills) already meet 44px+ where interactive.

## Responsive Behaviour
- Breakpoint: single `@media (max-width: 767px)` block in `<helmet><style>`. ALL mobile overrides live there — do not scatter inline mobile styles elsewhere.
- Adding a new grid/section: give it a `data-r="name"` hook and add the mobile override to that same media query block, following existing naming (`split-*`, `grid3`, `*-img`, `row-label`).

## Image Philosophy
Every image is a real, user-filled `<image-slot>` — never a placeholder graphic, stock photo, or AI-generated image standing in as "real" content. Exception: SVG illustrations that are explicitly decorative/metaphorical (the iced matcha art) — these are fine because they're not pretending to be photography.

## Coding Conventions
- Single DC file, inline styles only (per DC system rules).
- `data-r` = responsive hook attribute (see above).
- Section IDs: `hero`, `work`, `skills`, `about`, `contact`, and `cs-<name>-detail` for each case study (Doritos is the legacy exception: `cs-detail`, not `cs-doritos-detail` — do not rename, it's linked from multiple places already).
- View routing lives entirely in the logic class `state.view` — home vs one of 5 detail IDs. `sc-if` blocks gate each section's visibility.

## Things Claude Should Never Change Unless Explicitly Instructed
- The 5 case studies' individual accent colors and dark/light treatment split.
- The café/matcha metaphor concept in the skills section.
- The `cs-detail` id for Doritos (breaking this breaks 3 "next" links).
- Global accent/hero colors (these are user Tweaks — respect current values unless asked).
- Real uploaded photos placed into `<image-slot>` — never overwrite a filled slot.

## Preferred Workflow for Future Requests
1. Read the full DC file (or at least the relevant section) before editing — many edits touch repeated patterns (`b_multi`) or shared `data-r` hooks.
2. Prefer `dc_html_str_replace` / `dc_js_str_replace` over full rewrites.
3. When editing a repeated inline style, batch with `b_multi: true` rather than 5 separate calls.
4. Always re-run the responsive check (search `data-r=` new hooks need mobile overrides added).
5. Verify with `ready_for_verification` after every logic-class touch (routing is easy to break silently).
