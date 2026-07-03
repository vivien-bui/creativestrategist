# 02_ARCHITECTURE.md

## Site Map
```
Portfolio Home.dc.html
├─ Nav (persistent, sticky)
├─ [view: home]
│  ├─ #hero
│  ├─ #work            (Selected Work — gallery of 5 case-study cards)
│  ├─ #skills          (The usual order — latte/matcha metaphor)
│  ├─ #about
│  └─ #contact (footer)
├─ [view: cs-cryoglow-detail]   ← linked from Work card 01 and Doritos's "next"
├─ [view: cs-afw-detail]        ← linked from Work card 02 and CryoGlow's "next"
├─ [view: cs-cruiser-detail]    ← linked from Work card 03 and AFW's "next"
├─ [view: cs-twisties-detail]   ← linked from Work card 04 and Cruiser's "next"
└─ [view: cs-detail] (Doritos)  ← linked from Work card 05 and Twisties's "next"
```
There is no real multi-page routing — `state.view` in the logic class toggles which `<sc-if>` block renders. The URL hash is kept in sync (`history.replaceState`) so links/back-forward and deep-linking work, but this is NOT a router library — it's a single string of state.

## Page-by-Page

### Home (`state.view === "home"`)
- **Purpose:** Single-scroll landing page; entry point and only place `Nav` links (Work/Skills/About/Contact) resolve to in-page anchors.
- **Sections:** Hero, Selected Work, The usual order, About, Contact/footer.
- **Navigation:** Sticky nav bar with anchor links; on-home clicks use View Transitions to cinematically scroll (`_onClick` handler, same-page branch).
- **Components:** `<image-slot>` (hero photo, about portrait, 5 case-study card thumbnails), inline SVG matcha illustration, contact form (plain inputs, no backend — `mailto:` submit).
- **Content source:** Copy is hardcoded in the template; case-study summaries pull facts from `uploads/PORTFOLIO-DATA.md` (year/industry/colors/short description) but are written directly into the JSX-like template, not fetched at runtime.

### Case-study detail pages (5 total)
Each is a `<section id="cs-*-detail">` gated by its own `<sc-if>`, structurally identical:
1. `← All work` breadcrumb
2. Title block (`data-r="split-title"`): color dots, meta table (Client/Year/Industry/Role), italic display title
3. Hero `<image-slot>` (`data-r="detail-hero-img"`)
4. (Doritos only) **Stat band** (`data-r="stat-4"`) — 4 count-up metrics
5. "The Insight" pull-quote row (`data-r="row-label"`)
6. "The Idea" narrative row
7. Two-image duo (`data-r="split-images"`)
8. "The Scope" tag pills row (or "The Evolution"/"The Press" for Doritos, which has extra rows)
9. "Next case study" link → chains to the next detail page

**Data source:** `uploads/PORTFOLIO-DATA.md` is the only case study with quantified stats (Doritos). The other four studies' narrative content was authored directly (no separate stats available) — see `07_TODO.md` for the open question this creates.

**Relationships:** Order fixed by recency per user instruction (m0009): CryoGlow (newest) → AFW → Cruiser → Twisties → Doritos (oldest) → loops back to CryoGlow.

## Data Flow
No external data fetching. All content is static markup in `Portfolio Home.dc.html`. The two markdown files in `uploads/` (`PORTFOLIO-DATA.md`, `CLAUDE-DESIGN-PROMPT.md`) are reference material consulted during authoring, not loaded at runtime by the page.

## Markdown Dependencies
- `uploads/PORTFOLIO-DATA.md` — source of truth for case-study facts/stats/colors.
- `uploads/CLAUDE-DESIGN-PROMPT.md` — original brief describing the intended process (vibe extraction → structural analysis → synthesis). Historical/context only; already executed.

## Reusable Patterns
- `data-r="row-label"` — 200px label column + content column, used throughout every detail page.
- `data-r="split-images"` — 2-up image row, used in every detail page's mid-section.
- `data-r="grid3"` — 3-up card row (homepage Work section, older studies).
- Card hover: `translateY(-4px)` + shadow + border color → accent, applied to all Work cards.
