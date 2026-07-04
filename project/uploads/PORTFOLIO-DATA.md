# Portfolio Reference Data

## Case Studies

| Case Study | Year | Industry | Dominant Colors | Key Stats |
|---|---|---|---|---|
| Twisties Election | - | Food/Politics | Election-poster red, canary yellow, kelly green | 702M earned impressions; 579 earned media pieces; +800% YoY social engagement; +14.6% unit sales; TikTok Award — Best Social Media Campaign 2025 |
| Vodka Cruiser × Brat Summer | - | Beverage | Acid chartreuse / lime | 757K users reached |
| SharkBeauty CryoGlow | - | Beauty | Soft neutrals, blush pink, LED blue-violet glow | 12.5M total reach AU+NZ; 18.8× creative ROI; 850 week-one units (target 300); 100+ pieces of social content |
| Australian Fashion Week | - | Fashion | Polished purple / runway black | 3M total views; 270 posts & stories; +4.34% engagement rate |
| Doritos Coriander "Wash Your Mouth Out" | 2024 | Food/Advertising | Jungle green, black, red-orange | 430 pieces of earned media; 450M+ earned reach; 95.7% brand mention in headlines; 193k+ comments in 3 days; winning auction bid 400× pack price |

Stats for Twisties/Cruiser/CryoGlow/AFW were supplied by the user in July 2026 (cases.js attachment), alongside per-campaign execution/rollout content now used for each detail page's "The Evolution" section.

## Doritos Coriander Campaign Details

**Insight:** 1 in 5 Australians carry olfactory genes that make coriander taste like soap.

**Idea:** "Wash Your Mouth Out" — an ultra-limited run of 500 coriander-flavoured packs, launched with OOH placed next to soap retailers (Aesop, Lush), styling the chips as aromatic soap.

**Evolution:** Seeded mailers to influencers, stoking the "I Hate Coriander" Facebook page, and an unplanned eBay auction of the final pack.

**OOH Headlines (verbatim):**
- "A soap tasting chip? Not a fable."
- "Boldly fragrant & indulgently soapy chips? Delush."
- "Deliciously fragrant… and indulgently soapy."

**Press Coverage:**
- "Doritos has launched the most controversial chip in history…" (taste.com.au)
- "Doritos New Flavour That'll Divide The Nation" (KIIS 1065)

---

## Current Design System (Reference)

**Typography:**
- Display: Fraunces (serif, optical sizing, swashy italics)
- Body/UI: Plus Jakarta Sans

**Color Base:**
- Background: Warm cream `#f7efe4`
- Ink: Warm near-black `#2b2430`
- Gradient colors: Apricot `#ff9e6a`, Honey `#ffd489`, Peach `#ffb37c`, Lilac `#b79ae8`, Deep violet `#7d5fc4`

**UI:**
- Glassmorphism (backdrop-filter: blur + saturate)
- Radii: 24–28px
- Hairline white borders (1px)
- Grain overlay: SVG turbulence ~6% opacity

---

## Technical Stack

- Framework: React 18.2 + Vite
- Components: Hero, Nav, Work, About, Contact, Footer, CaseStudy, Navigation, CursorLens, DreamField, FrostGlass, Marquee
- Styling: CSS with custom properties and animations
