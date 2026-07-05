# 03_COMPONENTS.md — Design System Reference

No child DCs exist; "components" below are repeated inline patterns within `Portfolio Home.dc.html`, identified by their `data-r` hook or role.

## Nav Bar
- **Purpose:** Persistent wayfinding + contact CTA.
- **Layout:** Flex row, space-between; logo left ("Vivien Bui", italic serif), links + Contact pill right.
- **States:** Link opacity 0.75 → 1 on hover. Contact pill: ink bg → accent bg on hover. Nav gains a shadow after 8px scroll (JS-driven, not CSS-only).
- **Responsive:** Wraps at ≤767px, tighter padding, smaller link font.
- **Reuse rule:** This is the only nav; do not duplicate markup for detail pages — it's shared across all views (outside every `<sc-if>`).

## Work Card (Featured variant)
- **Purpose:** Hero-level case-study teaser (used for CryoGlow #1 and AFW #2 only).
- **Variants:** image-left/text-right (`split-a`) and text-left/image-right (`split-b`), alternating.
- **Layout:** 2-col grid, ~1.15fr:1fr, image fills full card height (440px).
- **Hover:** lift + shadow + border→accent.
- **Responsive:** Collapses to 1 column ≤767px.

## Work Card (Grid variant)
- **Purpose:** Compact teaser for the 3 older studies (Cruiser, Twisties, Doritos).
- **Layout:** Vertical card, 240px image top, padded text block below (title, 1-line description, industry tag, color-dot swatch).
- **Composition rule:** Always 3-up (`data-r="grid3"`) — do not mix a featured-style card into this row.

## Color-dot Swatch
- **Purpose:** Shows each case study's dominant palette as small circles.
- **Rule:** Always 2–3 dots max, drawn from that specific study's `PORTFOLIO-DATA.md` colors — never generic/decorative dots.

## Detail Page Meta Table
- **Purpose:** Client/Year/Industry/Role (or Event/Angle variants) quick-facts.
- **Layout:** Row per fact, flex space-between, bottom-border divider except last row.
- **Reuse:** Identical structure across all 5 detail pages; field labels vary slightly (e.g. AFW uses "Event" instead of "Client").

## Row-label Pattern (`data-r="row-label"`)
- **Purpose:** Section labels ("The Insight", "The Idea", "The Scope", etc.) paired with content.
- **Layout:** 200px label col (uppercase, tracked, colored in that study's accent) + flexible content col.
- **Responsive:** Collapses to 1 column ≤767px.

## Stat Band (`data-r="stat-4"`) — Doritos only
- **Purpose:** Quantified proof points.
- **Layout:** 4-col grid, big italic serif number + small uppercase label.
- **Animation:** Count-up on scroll-into-view via `IntersectionObserver` (`_watchStats` in logic), one-time (`band._counted` guard), respects reduced motion.
- **Responsive:** 2-col at ≤767px.
- **Reuse guideline:** Only add this pattern to another case study if real numeric stats exist for it (see 07_TODO — currently only Doritos has them).

## Tag Pills
- **Purpose:** Scope/skill tags.
- **Layout:** Inline-wrap flex, pill border (`999px` radius), 1px border, no fill.
- **States:** Static, no hover — decorative/informational only.

## "Next case study" Link
- **Purpose:** Chains detail pages in the fixed recency order.
- **Layout:** Flex space-between row, small uppercase "Next case study" label left, large italic serif study name + arrow right.
- **Hover:** Text color → accent.
- **Composition rule:** Every detail page must have exactly one, pointing to the next study in the CryoGlow→AFW→Cruiser→Twisties→Doritos→(loop)→CryoGlow order.

## The Usual Order — Matcha Illustration + Receipt
- **Purpose:** Signature personality section; maps skills to a drink order.
- **Layout:** 2-col (`split-skills`): SVG illustration + floating pills left, receipt card right.
- **Receipt card:** Dashed-border sections, skill/rating rows with dotted leaders, "Total" line, circular rotated "Fresh batch" badge, barcode-style bottom stripe.
- **Animation:** Floating pills (`floaty` keyframe, staggered durations), matcha-foam SVG wobble (`<animate>` on foam path, 4.5s loop), receipt-line hover nudge (`translateX(4px)`), Fresh-batch badge floats + scales on hover.
- **Responsive:** Stacks to 1 column, pills go static (no floating transform) ≤767px.
- **Composition rule:** Do not add more than ~8 receipt line-items (keeps it scannable); ratings should stay in the 9–10/10 range (this is a confident-but-not-arrogant flex, not literal self-assessment).

## Contact Form
- **Purpose:** Lead capture without a backend.
- **Layout:** 2-col (`contact-grid`): contact details/links left, form card right.
- **Behavior:** "Send it over" button builds a `mailto:` link from the three fields client-side — there is no server, no validation, no send confirmation.
- **States:** Inputs have a subtle translucent fill, no focus ring styling currently defined beyond browser default.
- **Responsive:** Stacks to 1 column ≤767px.

## Zine Animation Layer (2026-07 refresh — see 06_DECISIONS.md #10)
All vanilla CSS/WAAPI/rAF (no motion libraries, per 06_DECISIONS #5); every piece no-ops under `prefers-reduced-motion`.
- **ZineLetters** (`components/ZineLetters.jsx`): splits heading text into per-letter spans that "paste" down with deterministic jitter when scrolled into view (IO-armed); `magnet` prop adds cursor-repel scatter (hero words only, `pointer: fine` only). Real text lives in an `.sr-only` span; letters are `aria-hidden`. Hero delays assembly until the ZineIntro cover lifts (`introState.js`).
- **ZineTicker** (`components/ZineTicker.jsx`): looping lowercase marquee between hero and work; track rendered twice, slid −50%, pauses on hover. Phrases are brand lines — keep them short and lowercase.
- **CursorNote** (`components/CursorNote.jsx`): parenthetical label trailing the cursor over any `[data-cursor-note]` element; desktop fine-pointers only. Add notes sparingly — one per major interactive surface.
- **SpreadIndicator** (`components/SpreadIndicator.jsx`): fixed bottom-center `( p. 0N — label )` page number over `[data-screen-label][id]` landmarks; `mix-blend-mode: difference` handles light/dark pages; hidden ≤767px. Labels map in `LABELS`; detail pages read as `appendix · <study>`.

## `<image-slot>` (starter component, `image-slot.js`)
- **Purpose:** Every real photo placeholder across the site — hero, about portrait, 5×3 case-study images (hero + duo per study).
- **Composition rule:** Never replace with a static `<img>` unless the user explicitly supplies a final image and asks for it to be locked in (see the one exception already in place — `cryoglow-2` currently contains a placeholder screenshot dropped in directly).
