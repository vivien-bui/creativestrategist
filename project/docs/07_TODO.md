# 07_TODO.md — Backlog

## High Priority
- **Replace all 16 placeholder `<image-slot>` entries with real photography** (hero, about portrait, 5×3 case-study images) — see `04_IMAGES.md` for the full list and what each should show.
- **Resolve the unused root-level file** `42ab4d44-b999-48af-848a-95cae2b29abc-mr5511ro.jpg` — confirm with the user which slot (if any) it belongs in.
- **Contact form has no real send mechanism** — currently builds a `mailto:` link only. Confirm whether that's acceptable long-term or whether a real form backend/service is wanted.

## Medium Priority
- **Social links in the footer** (`Instagram`, `LinkedIn`) currently point to `href="#"` placeholders — need real URLs.
- **Email address consistency check:** footer contact line shows `phuongvivien@gmail.com` visibly, but the `mailto:` action in the logic class (`sendMessage`) is still hardcoded to `hello@yourname.com`. These should match — confirm the real email and fix the logic class.
- **CryoGlow-detail's light-background exception** is currently a one-off design choice (see `06_DECISIONS.md` #2) — confirm with the user whether this should stay a permanent "featured/newest gets light treatment" rule (which would need to migrate forward as new case studies are added) or was meant only for this one case study.

## Low Priority
- Consider adding subtle hover motion to the "The Scope" tag pills (currently fully static) if more "fun" motion is wanted elsewhere beyond the skills section.
- Consider a lightweight page-loading skeleton/shimmer for `<image-slot>` placeholders so empty slots don't look broken to first-time visitors before the owner fills them in.

## Future Ideas
- If more case studies are added, decide whether the recency-based Work ordering should auto-reflow or stay manually curated (currently manual, per `06_DECISIONS.md` #3).
- Consider a filter/tag view in Selected Work (e.g. by industry) if the case-study count grows beyond ~7-8 and browsing becomes unwieldy — not needed at 5 studies.

## Nice-to-Haves
- A speaker-notes-style "case study index" page/section could help recruiters/clients scan all 5 titles at once before committing to a deep-dive.
- Subtle sound-off micro-interaction on the receipt's barcode stripe (explicitly opt-in only, per animation rules) — not requested, purely speculative.

## Technical Debt
- `support.js` in this project is an older runtime version than the current DC spec (noted by the tooling itself during the last two edits). It was intentionally left in place because the components were authored against it — do not upgrade it reflexively; only do so with a specific reason, and expect to re-verify all motion/routing behavior afterward.
- The Doritos detail section still uses the legacy id `cs-detail` instead of `cs-doritos-detail` (inconsistent with the other 4). Renaming requires updating 3 "next case study" links pointing to it — low-risk but has never been done since it works correctly as-is.

## Questions Still Unresolved
1. Should the other four case studies (CryoGlow, AFW, Cruiser, Twisties) eventually get real stat bands, or are they intentionally narrative-only? (Blocked on the user supplying real numbers — do not fabricate.)
2. Is CryoGlow's light-background detail page a permanent "featured study" rule, or a one-time exception?
3. What is the correct contact email — `phuongvivien@gmail.com` (shown) or `hello@yourname.com` (used in the mailto action)?
4. Are the Instagram/LinkedIn footer links meant to go live before launch, or is a "coming soon" state acceptable?
