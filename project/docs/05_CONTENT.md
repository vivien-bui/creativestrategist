# 05_CONTENT.md

## How Markdown Files Are Used
Two files in `uploads/` are **authoring reference only** — they are not fetched or parsed at runtime by the DC:
- `PORTFOLIO-DATA.md` — the single source of truth for case-study facts (year, industry, dominant colors, key stats) and the original design-system reference (typography/colors from an earlier direction, since evolved — see `06_DECISIONS.md`).
- `CLAUDE-DESIGN-PROMPT.md` — the original creative brief describing the 3-step process (vibe extraction → structural analysis → synthesis) that produced this site. Read this first if you need to understand *why* the site looks the way it does, before touching `PORTFOLIO-DATA.md`.

Any future case study should first get an entry added to `PORTFOLIO-DATA.md`'s table (year/industry/colors/stats) before being authored into the DC — keep facts and presentation decoupled the same way.

## Content Structure Per Case Study
Every detail page follows the same narrative order (see `03_COMPONENTS.md` "Row-label Pattern"):
1. Title + meta facts
2. Hero image (+ award ribbon, Twisties only)
3. The Insight (1-sentence tension/observation, italicized emphasis on the key phrase)
4. The Idea (what was done and why)
5. How it unfolded (execution/outcome narrative — text that previously lived as the second Idea paragraph, or Doritos' old Evolution row; moved, never rewritten)
6. Contextual stat strips nested inside rows where real figures exist (verbatim from `PORTFOLIO-DATA.md`/existing copy only — never fabricated; non-numeric "fact" values are used where a study has no metrics on record). Doritos additionally keeps its 4-up headline stat band, now placed after "How it unfolded" instead of at the top.
7. Two supporting images
8. The Scope (tag pills) — plus Press row for Doritos
9. Next-case-study link

## Section Ordering (Homepage)
Hero → Selected Work → About → The usual order (skills) → What's in my bag → Contact. Reordered per explicit user request (2026-07): work first, then humanize (About), then the two personality sections, closing with the CTA. Do not reorder without user request.

## Naming Conventions
- Section/detail IDs: `hero`, `work`, `skills`, `about`, `contact`; detail pages `cs-<name>-detail` (Doritos is `cs-detail`, a legacy exception — do not rename).
- Image slot IDs: `<study>-hero`, `<study>-2`, `<study>-3` (e.g. `cryoglow-hero`, `cryoglow-2`, `cryoglow-3`).
- `data-r` hook names describe layout role, not content (`split-title`, `row-label`, `duo-img`, `stat-4`) — reuse existing names for new sections with the same shape rather than inventing new ones.

## Writing Style
- Case-study titles: short, italicized wordplay drawn from the campaign's core idea ("Cast your crunch.", "It's a brat summer.", "Wash Your Mouth Out").
- Insight lines: single sentence, conversational-but-sharp, one italicized emphasis phrase.
- Idea paragraphs: max 2, each ~2-3 sentences, active voice, agency-deck tone (not marketing-brochure tone).
- Never pad with generic buzzwords ("synergy," "leverage," "engagement") — every claim should be a specific fact or a specific creative mechanic.

## Adding a Future Case Study
1. Add a row to `PORTFOLIO-DATA.md` with year/industry/colors/stats (only include stats if real numbers exist).
2. Pick a position in the recency-ordered chain; update the two adjacent "Next case study" links (the one before it, and its own link to the one after).
3. Copy the structure of the most recently added detail page (currently CryoGlow) as the template — note whether it should be dark (`#17141a`, standard) or light (`#efe7de`, currently reserved for the newest/featured study only — confirm this pattern with the user before reusing).
4. Add a new Work-section card (featured 2-col style if it's a top-2 recency slot, grid style otherwise).
5. Give it its own accent color, distinct from all other studies' accents and from the global `accent` tweak.
6. Add 3 new `<image-slot>` entries and register them in `04_IMAGES.md`.
