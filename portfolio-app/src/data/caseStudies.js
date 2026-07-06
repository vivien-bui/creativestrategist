// Single source of truth for the 5 case studies — the Selected Work cards
// and each case-study detail page both read from here.

export const caseStudies = [
  {
    id: 'cs-cryoglow-detail',
    order: 1,
    theme: 'light',
    accent: '#8e7cf0',
    workCard: {
      variant: 'featured-a',
      index: '01',
      tag: 'BEAUTY · 2026',
      dots: [
        { hex: '#f3d9d4', bordered: true },
        { hex: '#efe7de', bordered: true },
        { hex: '#8e7cf0', bordered: false },
      ],
      badge: 'Latest',
      title: 'SharkBeauty *CryoGlow*',
      description:
        'Repositioning cold-tech skincare from clinical to covetable — a creator-first launch strategy that tripled the week-one sales target in AU + NZ.',
      tags: ['Launch strategy', 'Creator seeding', 'Content system'],
      imageLabel: 'SharkBeauty CryoGlow, hero campaign shot',
      imageSrc: './assets/cryoglow/cryoglow-01-social-grid-tiktok-instagram.webp',
    },
    detail: {
      dots: [
        { hex: '#f3d9d4', bordered: true },
        { hex: '#fffdf9', bordered: true },
        { hex: '#8e7cf0', bordered: false },
      ],
      eyebrow: 'Most recent · Feb–Jul 2026',
      title: 'CryoGlow, *cold* to the touch.',
      meta: [
        ['Client', 'SharkBeauty'],
        ['Year', '2026'],
        ['Industry', 'Beauty / Skincare'],
        ['Role', 'Launch strategy & positioning'],
      ],
      heroLabel: 'CryoGlow device, soft neutrals, blush, blue-violet LED glow',
      heroSrc: './assets/cryoglow/cryoglow-01-social-grid-tiktok-instagram.webp',
      brief:
        "SharkBeauty was entering a sceptical market. At-home beauty-tech devices promise clinical results, but the category aesthetic — blue LEDs, sterile packaging, lab-coat language — felt cold and uninviting. The brief: launch CryoGlow in AU + NZ with a target of 300 week-one units, and make a cold-tech device feel warm enough to *want*.",
      insight:
        "The barrier wasn't scepticism about the science — it was *desire*. Women believed the tech could work, but cold-tech aesthetics felt more lab coat than vanity. CryoGlow needed to prove efficacy without sacrificing covetability.",
      stats: [
        { value: 12.5, suffix: 'M', decimals: 1, label: 'Total reach AU + NZ' },
        { value: 18.8, suffix: '×', decimals: 1, label: 'Creative ROI' },
        { value: 850, label: 'Week-one units, target was 300' },
        { value: 100, suffix: '+', label: 'Pieces of social content' },
      ],
      idea: [
        "Position CryoGlow at the intersection of clinic and vanity — not a medical device, not another beauty gadget, but a skincare *ritual* she'd leave out on the shelf. One high-trust creator partnership over broad seeding, because in beauty-tech, credibility compounds faster than reach.",
        "Chloe Morello's real routine carried the proof. A bespoke content series — 'Light Therapy' — made every post unmistakably CryoGlow, feeding the algorithm for weeks without losing brand signature.",
      ],
      approach: [
        "Single anchor creator over scatter-gun seeding — compounding trust in a low-trust category",
        "Bespoke 'Light Therapy' series reframed clinical device demos as watchable, aspirational ritual content",
        "Modular content system: 100+ assets from one visual framework, each owning the feed without a logo lockup",
        "Layered micro-influencer and event seeding for trial conversion once awareness landed",
      ],
      evolution: [
        'Creator partnership with Chloe Morello anchors the launch in trust and credibility',
        "'Light Therapy' content series turns clinical device demos into shareable beauty ritual",
        '100+ pieces of always-on social feed the algorithm, each unmistakably on-brand',
        'Micro-influencer and event seeding converts awareness into trial across AU + NZ',
      ],
      images: [
        { id: 'cryoglow-2', label: 'creator routine / device in-use shot', src: './assets/cryoglow/cryoglow-02-light-therapy-campaign-grid.webp' },
        { id: 'cryoglow-3', label: 'packaging / product detail', src: './assets/cryoglow/cryoglow-03-light-therapy-detail-duo.webp' },
      ],
      scope: ['Positioning & messaging', 'Creator seeding', 'Content system', 'Launch calendar'],
      nextLabel: 'Australian Fashion Week →',
      nextId: 'cs-afw-detail',
    },
  },
  {
    id: 'cs-afw-detail',
    order: 2,
    theme: 'dark',
    accent: '#c41e3a',
    workCard: {
      variant: 'featured-b',
      index: '02',
      tag: 'FASHION · 2026',
      dots: [
        { hex: '#c41e3a', bordered: false },
        { hex: '#17141a', bordered: false },
      ],
      title: 'Australian *Fashion Week*',
      description:
        'Turning a beauty brand into a fashion week content engine — five days of real-time editorial that owned the feed, not just the front row.',
      tags: ['Event strategy', 'Live content', 'Talent & PR'],
      imageLabel: 'Australian Fashion Week, hero campaign shot',
      imageSrc: './assets/afw/afw-01-pavilion-exterior-street-view.jpg',
    },
    detail: {
      dots: [
        { hex: '#c41e3a', bordered: false },
        { hex: '#f3efe6', bordered: false },
      ],
      title: 'Front *row*, always on.',
      meta: [
        ['Event', 'Australian Fashion Week'],
        ['Year', '2026'],
        ['Industry', 'Fashion'],
        ['Role', 'Event & content strategy'],
      ],
      heroLabel: 'AFW, real-time coverage, runway black, front-row moment',
      heroSrc: './assets/afw/afw-01-pavilion-exterior-street-view.jpg',
      brief:
        "SharkBeauty needed to show up at Australian Fashion Week — not as a beauty brand buying a sponsorship, but as a cultural presence that *belonged* in the conversation. The brief: make a skincare brand relevant in a fashion context where every sponsor is fighting for attention.",
      insight:
        "Fashion week is five days of noise. Every brand buys a seat; almost none own the conversation. Presence isn't physical — it's *owning the feed* the room is looking at.",
      stats: [
        { value: 3, suffix: 'M', label: 'Total views' },
        { value: 270, label: 'Posts & stories' },
        { value: 4.34, prefix: '+', suffix: '%', decimals: 2, label: 'Engagement rate' },
      ],
      idea: [
        'Turn SharkBeauty from a beauty sponsor into a real-time content engine — a live editorial team treating every runway, backstage moment, and front-row reaction as same-day social that travels further than any activation.',
        'Talent and PR were briefed to one shared narrative, so influencers, behind-the-scenes moments, vox pops, and giveaways all told a single story — not five days of scattered content, but an always-on cultural presence.',
      ],
      approach: [
        "Deployed a live content team briefed to one editorial narrative across all five days",
        "Influencer network mobilised per-show, each briefed to the same visual and tonal system",
        "On-the-ground vox pops turned passive spectacle into participatory, audience-facing content",
        "Integrated giveaways converted viewership into active engagement and data capture",
      ],
      evolution: [
        'Influencer network activated across every show with a unified brief',
        'Behind-the-scenes and front-row reactions captured and published same-day',
        'On-the-ground vox pops bring the audience onto the runway in real time',
        'Integrated giveaways convert spectacle into participation and follower growth',
      ],
      images: [
        { id: 'afw-2', label: 'runway / backstage content', src: './assets/afw/afw-03-runway-multi-model-yellow-black.jpg' },
        { id: 'afw-3', label: 'talent / front-row social capture', src: './assets/afw/afw-08-runway-full-collection-whites.jpg' },
      ],
      scope: ['Event strategy', 'Live content ops', 'Talent & PR', 'Art direction'],
      nextLabel: 'Vodka Cruiser →',
      nextId: 'cs-cruiser-detail',
    },
  },
  {
    id: 'cs-cruiser-detail',
    order: 3,
    theme: 'dark',
    accent: '#c6f437',
    workCard: {
      variant: 'grid',
      index: '03',
      tag: 'BEVERAGE',
      dots: [
        { hex: '#c6f437', bordered: false },
        { hex: '#17141a', bordered: false },
      ],
      title: 'Vodka Cruiser × Brat Summer',
      description: 'A product drop colour-matched to a cultural moment — launched brat-coded from pack to platform before the window closed.',
      imageLabel: 'Vodka Cruiser × Brat Summer, campaign visual',
      imageSrc: './assets/cruiser/cruiser-01-hero-billboard-drinkin-that.jpg',
    },
    detail: {
      dots: [
        { hex: '#c6f437', bordered: false },
        { hex: '#f3efe6', bordered: false },
      ],
      title: "It's a *brat* summer.",
      meta: [
        ['Client', 'Vodka Cruiser'],
        ['Industry', 'Beverage / RTD'],
        ['Angle', 'Cultural moment'],
        ['Role', 'Cultural & reactive strategy'],
      ],
      heroLabel: 'Cruiser × Brat, brat-summer hero',
      heroSrc: './assets/cruiser/cruiser-01-hero-billboard-drinkin-that.jpg',
      brief:
        "Brat summer was peaking. Charli XCX had turned the world lime green — and Vodka Cruiser had a Summer Apple flavour ready to drop. The window to ride the wave was days, not weeks. The brief: move at *culture speed* and make Cruiser part of the moment, not a bystander commenting on it.",
      insight:
        "A brand doesn't join a cultural moment by explaining it — it joins by *moving at its speed*. Brat summer already owned a colour, a tone, and a typography. The only way in was to speak fluent brat before the moment passed.",
      stats: [
        { value: 757, suffix: 'K', label: 'Users reached' },
        { value: 1, suffix: ' summer', label: 'Owned, start to finish' },
      ],
      idea: [
        'Summer Apple, brat-coded from pack to platform. Lowercase billboards placed near festival sites spoke the language natively — \'drinkin that? ur so...\' — while reactive posting kept Cruiser inside the conversation at platform speed.',
        "This wasn't trend-jacking — it was real-time brand choreography: matching a product launch to a cultural window that wouldn't stay open.",
      ],
      approach: [
        "Colour-matched a product launch to a live cultural moment — Summer Apple's lime green was strategic, not coincidental",
        "OOH designed to be screenshotted and shared ('dyeing your hair green for a festival?'), not just seen from a car",
        "Laneway Festival activation embedded the product in culture, not adjacent to it",
        "Social content cadence matched the meme cycle — velocity over polish",
      ],
      evolution: [
        'Summer Apple flavour drop, brat-coded from pack design to platform presence',
        "Lowercase OOH speaks fluent brat: 'dyeing your hair green for a festival?'",
        'Laneway Festival activation puts the bottle in the culture, not the ad break',
        'Social-first reactive content matches the speed of the conversation',
      ],
      images: [
        { id: 'cruiser-2', label: 'social-native creative', src: './assets/cruiser/cruiser-02-four-pack-product-shot.jpg' },
        { id: 'cruiser-3', label: 'reactive post / meme moment', src: './assets/cruiser/cruiser-02-four-pack-product-shot.jpg' },
      ],
      scope: ['Trend strategy', 'Social creative', 'Reactive posting'],
      nextLabel: 'Twisties Election →',
      nextId: 'cs-twisties-detail',
    },
  },
  {
    id: 'cs-twisties-detail',
    order: 4,
    theme: 'dark',
    accent: '#ffd23f',
    workCard: {
      variant: 'grid',
      index: '04',
      tag: 'FOOD / POLITICS',
      dots: [
        { hex: '#c62828', bordered: false },
        { hex: '#ffd23f', bordered: false },
        { hex: '#2e8b3a', bordered: false },
      ],
      title: 'Twisties Election',
      description: "An escalation campaign that turned Australia's oldest snack rivalry into a national election — 702M earned impressions.",
      imageLabel: 'Twisties Election, campaign visual',
      imageSrc: './assets/twisties/twisties-01-hero-chicken-vs-cheese-overview.webp',
      imageStyle: { transform: 'scale(2.2)', transformOrigin: 'center top', objectPosition: 'center top' },
    },
    detail: {
      dots: [
        { hex: '#c62828', bordered: false },
        { hex: '#ffd23f', bordered: false },
        { hex: '#2e8b3a', bordered: false },
      ],
      title: 'Cast your *crunch*.',
      meta: [
        ['Client', 'Twisties'],
        ['Industry', 'Food / Politics'],
        ['Angle', 'Cultural hijack'],
        ['Role', 'Campaign strategy'],
      ],
      heroLabel: 'Twisties Election, poster-red / canary / green hero',
      heroSrc: './assets/twisties/twisties-01-hero-chicken-vs-cheese-overview.webp',
      brief:
        "Twisties needed to reignite a decades-old snack brand and drive unit sales. The Cheese vs Chicken debate had lived in Australian culture for years, but the brand had never properly capitalised on the rivalry. The brief: turn a passive cultural truth into an *active* national conversation that moves product.",
      insight:
        "Cheese vs Chicken is the only two-party system Australians actually agree to care about. The tension didn't need inventing — it needed *escalating* into something the country couldn't ignore.",
      award: 'TikTok Award, Best Social Media Campaign 2025',
      stats: [
        { value: 702, suffix: 'M', label: 'Earned impressions' },
        { value: 579, label: 'Earned media pieces' },
        { value: 800, prefix: '+', suffix: '%', label: 'YoY social engagement' },
        { value: 14.6, prefix: '+', suffix: '%', decimals: 1, label: 'Unit sales' },
      ],
      idea: [
        "Run it like a real election. Election-poster art direction, celebrity candidates, vandalised billboards, a leaked third-party flavour, public outrage, a snap vote, and a winner. Every beat borrowed from political theatre to give a snack rivalry the stakes of a national headline.",
        'The strategy was escalation by design — each phase was engineered to provoke a public reaction that fuelled the next, building from a Reddit leak to earned national news coverage.',
      ],
      approach: [
        "Manufactured escalation: a 'leaked' Chickeese flavour sparked genuine online outrage before the campaign even launched",
        "Borrowed mechanics from political campaigns — attack ads, vandalised OOH, celebrity endorsements — to make the rivalry feel high-stakes",
        "Every execution designed for earned media first: built to be reported on, not just seen",
        "Each phase engineered to provoke a public reaction that fuelled the next news cycle",
      ],
      evolution: [
        "'Chickeese' leaks on Reddit; Chicken and Cheese fans go into meltdown",
        'A full-page apology cancels Chickeese amid escalating public outcry',
        'A snap election is called with celebrity candidates representing each party',
        "Vandalised OOH and transit become lightning rods — 'CHICKEN RULES' sprayed over VOTE CHEESE",
        'Viral influencer dance remix headlines the campaign spot as voting explodes',
        'Chicken is crowned; Cheese fans demand a recount',
      ],
      press: [
        {
          quote: 'More than just a snack attack: Sydney light rail and trams vandalized.',
          source: 'Breaking news coverage',
        },
        {
          quote: 'Democracy has never been more ridiculous, or more effective.',
          source: 'Campaign results film',
        },
      ],
      images: [
        { id: 'twisties-2', label: 'campaign poster / OOH', src: './assets/twisties/twisties-02-bus-shelter-vote-cheese-chicken.webp' },
        { id: 'twisties-3', label: 'in-store / social activation', src: './assets/twisties/twisties-04-video-number-one-twistie-decided.webp' },
      ],
      scope: ['Campaign platform', 'Art direction', 'OOH & social'],
      nextLabel: 'Doritos Coriander →',
      nextId: 'cs-doritos-detail',
    },
  },
  {
    id: 'cs-doritos-detail',
    order: 5,
    theme: 'dark',
    accent: '#ff5a2a',
    workCard: {
      variant: 'grid',
      index: '05',
      tag: 'FOOD / ADVERTISING',
      dots: [
        { hex: '#1c5e3c', bordered: false },
        { hex: '#17141a', bordered: false },
        { hex: '#ff5a2a', bordered: false },
      ],
      title: "Doritos: Wash Your Mouth Out",
      description: 'Turning a genetic flaw into a cultural phenomenon — 450M+ earned reach from 500 packs against a 9M target.',
      imageLabel: "Doritos 'Wash Your Mouth Out', coriander DNA-to-soap concept diagram",
      imageSrc: './assets/doritos/doritos-12-dna-soap-comparison-diagram.webp',
    },
    detail: {
      dots: [
        { hex: '#1c5e3c', bordered: false },
        { hex: '#f3efe6', bordered: false },
        { hex: '#ff5a2a', bordered: false },
      ],
      title: 'Wash Your *Mouth* Out',
      meta: [
        ['Client', 'Doritos'],
        ['Year', '2024'],
        ['Industry', 'Food / Advertising'],
        ['Role', 'Creative strategy'],
      ],
      heroLabel: 'Coriander DNA-strand diagram linking leaves to bars of soap',
      heroSrc: './assets/doritos/doritos-12-dna-soap-comparison-diagram.webp',
      brief:
        "Doritos wanted headline-grabbing earned media from a limited product drop. Total production run: 500 packs. Earned reach target: 9M. The constraint *was* the strategy — scarcity had to do the heavy lifting.",
      stats: [
        { value: 450, suffix: 'M+', label: 'Earned reach, target beaten by 441M' },
        { value: 430, label: 'Pieces of earned media' },
        { value: 95.7, suffix: '%', decimals: 1, label: 'Brand mention in headlines' },
        { value: 400, suffix: '×', label: 'Final-pack auction bid vs pack price' },
      ],
      insight:
        "1 in 5 Australians carry the gene that makes coriander taste like *soap*. That's not a product barrier — it's a cultural fault line. The most divisive flavour in the country was also the most talkable.",
      idea: [
        'Lean all the way into the hate. 500 coriander-flavoured packs launched with OOH placed directly beside Aesop and Lush, styling the chip as an aromatic, indulgently soapy luxury product.',
        "Scarcity plus controversy plus a visual joke that wrote itself — the divisive flavour wasn't the obstacle, it was the entire strategy. A genetic quirk became a collectible cultural object.",
      ],
      approach: [
        "Weaponised the genetic divide: turned a product flaw into the campaign's entire proposition",
        "OOH placed beside premium soap retailers made the 'tastes like soap' joke physical, shareable, and newsworthy",
        "Seeded influencer mailers packed with real consumer hate-comments to manufacture debate at scale",
        "500-unit scarcity turned a chip into a collectible — built for resale value and auction headlines",
      ],
      evolution: [
        '500 packs drop unannounced; OOH runs beside Aesop & Lush styled as a premium soap product',
        'Seeded mailers to influencers filled with real consumer hate-comments and reactions',
        "Stoked debate in the 300K-member 'I Hate Coriander' Facebook group as UGC flooded in",
        'Earned television, print, and online coverage drove national saturation — 430 media pieces',
        'The final pack went to an unplanned eBay auction at 400× retail price',
      ],
      lines: [
        '"A soap tasting chip? Not a fable."',
        '"Boldly fragrant & indulgently soapy chips? Delush."',
        '"Deliciously fragrant… and indulgently soapy."',
      ],
      images: [
        { id: 'cs-detail-2', label: 'OOH placement next to soap retailer', src: './assets/doritos/doritos-04-media-collage-430-pieces.webp' },
        { id: 'cs-detail-3', label: 'influencer seeding mailer / eBay auction screenshot', src: './assets/doritos/doritos-06-ugc-social-phones-reviews.webp' },
      ],
      press: [
        { quote: 'Doritos has launched the most controversial chip in history…', source: 'taste.com.au' },
        { quote: "Doritos' New Flavour That'll Divide The Nation", source: 'KIIS 1065' },
      ],
      nextLabel: 'SharkBeauty CryoGlow →',
      nextId: 'cs-cryoglow-detail',
    },
  },
];

export const detailViewIds = caseStudies.map((c) => c.id);

export function getCaseStudy(id) {
  return caseStudies.find((c) => c.id === id);
}
