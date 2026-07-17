// Single source of truth for the 5 case studies: the Selected Work cards
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
        'Cold, clinical beauty-tech had a desire problem. We bet the whole launch on one trusted creator and made device efficacy feel like a ritual worth wanting.',
      tags: ['21.5M reach', '18.8× creative ROI', '283% of launch target'],
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
        "SharkBeauty was entering a sceptical market. At-home beauty-tech devices promise clinical results, but the category aesthetic (blue LEDs, sterile packaging, lab-coat language) felt cold and uninviting. To break in, the device had to feel warm enough to *want*, desirable enough to move 300 units in week one across AU and NZ.",
      insight:
        "The barrier wasn't scepticism about the science, it was *desire*. Women expect the CryoGlow Mask to prove efficacy, but without sacrificing covetability. Our cold-tech mask needed to feel warm enough to be *wanted*.",
      stats: [
        { value: 21.5, suffix: 'M', decimals: 1, label: 'Total reach AU + NZ' },
        { value: 18.8, suffix: '×', decimals: 1, label: 'Creative ROI' },
        { value: 850, label: 'Week-one units, target was 300' },
        { value: 300, suffix: '+', label: 'Pieces of social content' },
      ],
      idea: [
        "Position CryoGlow at the intersection of clinic and vanity: not a medical device, not another beauty gadget, but a skincare *ritual* she'd leave out on the shelf. One high-trust creator partnership and broad seeding, because in beauty-tech, credibility compounds faster than reach.",
        "Chloe Morello's real routine carried the proof. A bespoke content series, 'Light Therapy', made every post unmistakably CryoGlow, feeding the algorithm for weeks without losing brand signature.",
      ],
      approach: [
        "Anchored the launch on one high-trust creator, Chloe Morello, to compound credibility in a low-trust category",
        "'Light Therapy' series reframed clinical device demos as aspirational, shareable ritual content",
        "300+ always-on assets kept CryoGlow in her feed: the more she saw it, the more she wanted it",
        "Micro-influencer and event seeding converted awareness into trial across AU + NZ",
      ],
      images: [
        { id: 'cryoglow-2', label: 'creator routine / device in-use shot', src: './assets/cryoglow/cryoglow-02-light-therapy-campaign-grid.webp' },
        { id: 'cryoglow-3', label: 'CryoGlow OOH, night bus-shelter placement', src: './assets/cryoglow/cryoglow-04-ooh-night-bus-shelter.webp' },
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
        "Presenting rights put SharkBeauty's name on Fashion Week. But names don't trend, what shows on the feed does. So we turned the sponsorship into an always-on editorial newsroom and made SharkBeauty the story.",
      tags: ['3M views', '270 posts in 5 days', '+4.34% engagement'],
      imageLabel: 'Australian Fashion Week, runway finale in white tailoring',
      imageSrc: './assets/afw/afw-08-runway-full-collection-whites.jpg',
      imageStyle: { objectPosition: 'center 48%' },
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
      heroLabel: 'AFW runway finale, white tailoring leading a procession of ivory looks',
      heroSrc: './assets/afw/afw-08-runway-full-collection-whites.jpg',
      heroStyle: { objectPosition: 'center 34%' },
      brief:
        "As presenting partner of Australian Fashion Week, SharkBeauty had its name on the biggest platform in Australian fashion: national press, front-row talent, and five days where the whole industry watches the same feed. The opportunity was bigger than visibility: turn presenting rights into real brand awareness and household penetration, not just a logo on the step-and-repeat.",
      insight:
        "Presenting rights get your name on everything, but names don't trend, feeds do. Every brand at Fashion Week buys a seat; almost none own the conversation. Presence isn't a logo on the wall, it's *owning the feed*  the room is looking at.",
      stats: [
        { value: 3, suffix: 'M', label: 'Total views' },
        { value: 270, label: 'Posts & stories' },
        { value: 4.34, prefix: '+', suffix: '%', decimals: 2, label: 'Engagement rate' },
      ],
      idea: [
        'Turn SharkBeauty from a beauty sponsor into a real-time content engine: a live editorial team treating every runway, backstage moment, and front-row reaction as same-day social that travels further than any activation.',
        'Talent and PR were briefed to one shared narrative, so influencers, behind-the-scenes moments, vox pops, and giveaways all told a single story, not five days of scattered content, but an always-on cultural presence.',
      ],
      approach: [
        "Deployed a live content team to one editorial narrative, publishing runway and front-row moments same-day",
        "Mobilised the influencer network per-show, each briefed to a single visual and tonal system",
        "On-the-ground vox pops turned passive spectacle into participatory, audience-facing content",
        "Integrated giveaways converted viewership into active engagement and data capture",
      ],
      images: [
        { id: 'afw-2', label: 'runway, night group walk in monochrome looks', src: './assets/afw/afw-12-runway-group-pink-black-sequin.jpg', imageStyle: { objectPosition: 'center 45%' } },
        { id: 'afw-3', label: 'backstage portrait, couture knitwear detail', src: './assets/afw/afw-02-model-portrait-knit-detail.jpg', imageStyle: { objectPosition: 'center 54%' } },
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
      description: "Brat gave Gen Z permission to be messy, loud and unfiltered. Australia's version hit in real summer, with Charli XCX live at Laneway, and we made Vodka Cruiser the drink of it.",
      tags: ['757K reached', 'Event Activation', 'brat summer, owned'],
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
        "Brat had already turned the world lime green, but it broke in the northern summer, six months before Australia's. By the time it was actually summer here, Charli XCX was landing for Laneway and Gen Z was hungry for the messy, unfiltered energy brat gave them. Vodka Cruiser had a Summer Apple flavour ready to drop. The window was narrow: land Summer Apple in the middle of the moment while it was peaking here, and make Cruiser the drink Gen Z reached for.",
      insight:
        "Gen Z didn't want polished, they wanted messy, loud and unfiltered, and brat handed them the permission slip. With Charli XCX in the country for Laneway, that energy was everywhere at once. The only way in was to *speak fluent brat*, not just borrow the colour.",
      stats: [
        { value: 757, suffix: 'K', label: 'Users reached' },
        { value: 1, suffix: ' summer', label: 'Owned, start to finish' },
      ],
      idea: [
        'Summer Apple, brat-coded from pack to platform. Lowercase billboards placed near festival sites spoke the language natively (\'drinkin that? ur so...\'), while reactive posting kept Cruiser inside the conversation at platform speed.',
        "This wasn't trend-jacking, it was real-time brand choreography: matching a product launch to a cultural window that wouldn't stay open.",
      ],
      approach: [
        "Colour-matched the Summer Apple drop to a live cultural moment, brat-coded from pack to platform",
        "Lowercase OOH built to be screenshotted, not just seen from a car: 'dyeing your hair green for a festival?'",
        "Laneway Festival activation embedded the bottle in the culture, not adjacent to it",
        "Reactive social matched the meme cycle: velocity over polish",
      ],
      images: [
        { id: 'cruiser-2', label: 'Summer Apple four-pack, social-native product shot', src: './assets/cruiser/cruiser-02-four-pack-product-shot.jpg' },
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
      flipMobile: true,
      index: '04',
      tag: 'FOOD / POLITICS',
      dots: [
        { hex: '#c62828', bordered: false },
        { hex: '#ffd23f', bordered: false },
        { hex: '#2e8b3a', bordered: false },
      ],
      title: 'Twisties Election',
      description: "Cheese vs Chicken is the only two-party system Australia agrees to care about. We ran it like a real election, until the country couldn't look away.",
      tags: ['702M impressions', '+800% engagement YoY', 'TikTok Award winner'],
      imageLabel: 'Twisties Election, Chicken vs Cheese stage with headline stats',
      // Pre-cropped to the banner/stage/stats band only (social strip + white
      // body copy cut out) so the small grid-card thumbnail reads as a zoomed-in
      // shot instead of a thin sliver of the full spread.
      imageSrc: './assets/twisties/twisties-07-hero-banner-stats.webp',
      imageStyle: { objectPosition: 'center top' },
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
      heroLabel: 'Twisties Election, Chicken vs Cheese stage with the campaign social strip',
      // Spliced from the full spread: stage photo direct to the social-strip
      // timeline, with the headline/stats/strategy-copy band cut out (those
      // numbers are already shown lower on the page via StatBand).
      heroSrc: './assets/twisties/twisties-06-hero-stage-social-strip.webp',
      heroStyle: { objectPosition: 'center top' },
      brief:
        "Twisties needed to reignite a decades-old snack brand and drive unit sales. The Cheese vs Chicken debate had lived in Australian culture for years, but the brand had never properly capitalised on the rivalry. The opportunity was to turn a passive cultural truth into an *active* national conversation — one loud enough to move product.",
      insight:
        "Cheese vs Chicken is the only two-party system Australians actually agree to care about. The tension didn't need inventing, it needed *escalating*  into something the country couldn't ignore.",
      award: 'TikTok Award, Best Social Media Campaign 2025',
      stats: [
        { value: 702, suffix: 'M', label: 'Earned impressions' },
        { value: 579, label: 'Earned media pieces' },
        { value: 800, prefix: '+', suffix: '%', label: 'YoY social engagement' },
        { value: 14.6, prefix: '+', suffix: '%', decimals: 1, label: 'Unit sales' },
      ],
      idea: [
        "Run it like a real election. Election-poster art direction, celebrity candidates, vandalised billboards, a leaked third-party flavour, public outrage, a snap vote, and a winner. Every beat borrowed from political theatre to give a snack rivalry the stakes of a national headline.",
        'The strategy was escalation by design: each phase was engineered to provoke a public reaction that fuelled the next, building from a Reddit leak to earned national news coverage.',
      ],
      approach: [
        "Manufactured escalation: a 'leaked' Chickeese flavour sparked genuine outrage before the campaign even launched",
        "Ran it like a real election, borrowing political mechanics: attack ads, vandalised OOH, celebrity candidates",
        "A full-page apology and snap vote turned a snack rivalry into national theatre",
        "Every execution built for earned media first: designed to be reported on, not just seen",
        "Each phase engineered to provoke the public reaction that fuelled the next news cycle",
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
      description: '1 in 5 Australians think coriander tastes like soap. So we leaned all the way in: 500 packs styled like luxury soap, engineered to divide the nation and make headlines do the selling.',
      tags: ['450M+ earned reach', '441M over target', '95.7% headline mentions'],
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
        "Doritos wanted headline-grabbing earned media from a limited product drop of just 500 coriander-flavoured packs. With almost no paid media and a production run that small, the constraint *was* the strategy: scarcity had to do the heavy lifting.",
      stats: [
        { value: 450, suffix: 'M+', label: 'Earned reach, target beaten by 441M' },
        { value: 430, label: 'Pieces of earned media' },
        { value: 95.7, suffix: '%', decimals: 1, label: 'Brand mention in headlines' },
        { value: 400, suffix: '×', label: 'Final-pack auction bid vs pack price' },
      ],
      insight:
        "1 in 5 Australians carry the gene that makes coriander taste like *soap*. That's not a product barrier, it's a cultural fault line. The most divisive flavour in the country was also the most talkable.",
      idea: [
        'Lean all the way into the hate. 500 coriander-flavoured packs launched with OOH placed directly beside Aesop and Lush, styling the chip as an aromatic, indulgently soapy luxury product.',
        "Scarcity plus controversy plus a visual joke that wrote itself: the divisive flavour wasn't the obstacle, it was the entire strategy. A genetic quirk became a collectible cultural object.",
      ],
      approach: [
        "Weaponised the genetic divide: turned a product flaw into the campaign's entire proposition",
        "OOH styled beside Aesop & Lush made the 'tastes like soap' joke physical, shareable and newsworthy",
        "Seeded influencer mailers packed with real consumer hate-comments to manufacture debate at scale",
        "500-unit scarcity turned a chip into a collectible: resale value and a 400× auction headline",
      ],
      lines: [
        '"A soap tasting chip? Not a fable."',
        '"Boldly fragrant & indulgently soapy chips? Delush."',
        '"Deliciously fragrant… and indulgently soapy."',
      ],
      images: [
        { id: 'cs-detail-2', label: 'OOH placement next to soap retailer', src: './assets/doritos/doritos-08-ooh-soap-tasting-chip.webp', imageStyle: { objectPosition: 'left center' } },
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
