# 04_IMAGES.md

All photographic content is via `<image-slot>` (drag-and-drop, persists to disk). None are currently filled with final photography except one incidental drop (see below). Below, "purpose" describes what SHOULD go there per its `placeholder` text — do not invent stock imagery for these; wait for the user.

## Homepage

| Slot id | Location | Placeholder copy | Aspect | Decorative/Meaningful | Never change |
|---|---|---|---|---|---|
| `hero-photo` | Hero, between "Creative"/"Strategist" | "a photo with your energy — travel, golden hour, candid" | ~620×400 (fixed height 400px, fluid width) | Meaningful — sets personal tone immediately | Position (centered, overlapping both headline words), rounded 4px corners, drop shadow |
| `about-portrait` | About section, left column | "a portrait with warm light" | 360×440 fixed | Meaningful — humanizes the About copy | Fixed 360px column width on desktop; do not let it flex |

## Case-study images (5 studies × 3 slots each = 15 total)

| Study | Hero slot id | Duo slot 1 | Duo slot 2 |
|---|---|---|---|
| CryoGlow | `cryoglow-hero` | `cryoglow-2` (**currently holds a placeholder screenshot dropped in during dev — replace with real creator/device photography**) | `cryoglow-3` |
| AFW | `afw-hero` | `afw-2` | `afw-3` |
| Cruiser | `cruiser-hero` | `cruiser-2` | `cruiser-3` |
| Twisties | `twisties-hero` | `twisties-2` | `twisties-3` |
| Doritos | `cs-detail-hero` | `cs-detail-2` | `cs-detail-3` |

- **Hero slots:** 480px fixed height, full-width, 16px radius, drift-on-scroll animation (`translateY` up to 44px based on scroll position).
- **Duo slots:** 340px fixed height each, 2-up grid, 12px radius.
- **Sizing/cropping:** All slots use `shape="rect"` or `shape="rounded"` with `object-fit`-style cropping handled by `<image-slot>` internals — images should be shot/cropped roughly to the slot's aspect ratio (hero ≈ 2.4:1, duo ≈ 1.7:1) for best framing.
- **Responsive behaviour:** All detail-page images shrink height at ≤767px (hero → 260px, duo → 200px) via the shared media query; width always stays 100% of its column.
- **Whether decorative or meaningful:** All 15 are meaningful (real campaign proof), not decorative filler — this is why they must eventually be replaced with actual campaign photography, not stock.

## Decorative / Non-photographic Visual Assets

| Asset | Location | Type | Notes |
|---|---|---|---|
| Iced matcha illustration | `#skills` section | Inline SVG (hand-drawn cup, marbled matcha/milk layers, ice, straw) | Replaces an earlier "hero pour" concept per user request (m0037). Purely decorative/metaphorical — never needs a real photo. Has a subtle looping `<animate>` on the foam-swirl path. |
| Grain overlay | Fixed full-viewport layer | Inline SVG turbulence filter, ~5% opacity | Global texture, toggleable via `showGrain` tweak. Do not remove without asking — it's part of the "warm gallery" print-like feel. |
| Color-dot swatches | Every work card + detail title block | Small `<i>` circles | Meaningful, not decorative — represents each study's real palette from `PORTFOLIO-DATA.md`. |

## Cross-file assets found in project root (not yet wired in)
- `42ab4d44-b999-48af-848a-95cae2b29abc-mr5511ro.jpg` and `screenshot-2026-07-04-at-2-12-19-am-mr54t6mt.png` — user-dropped files sitting in project root; the PNG is already referenced inside `cryoglow-2`'s slot as a placeholder image. The JPG is unused — confirm with the user whether it belongs in a specific slot before assigning it anywhere.
