// Single source of truth for the 5 case studies — the Selected Work cards
// and each case-study detail page both read from here. Facts are drawn
// verbatim from project/uploads/PORTFOLIO-DATA.md and the chat transcript;
// nothing here is invented. See project/docs/06_DECISIONS.md for why the
// order/theme/accent choices below are deliberate, not inconsistencies.
//
// Text fields use a light "*word*" markup for a single italic emphasis
// span, rendered by <Rich>. "\n\n" inside `idea` paragraphs is an
// intentional in-paragraph line break (mirrors the original's <br><br>).
//
// `stats` are the real campaign metrics supplied by the user (2026-07,
// cases.js attachment — mirrored into PORTFOLIO-DATA.md); values are kept
// in the supplied {value, prefix, suffix, decimals, label} shape and
// formatted/counted-up by <StatBand>. `evolution` holds the supplied
// execution/rollout content for "The Evolution" row, verbatim.

export const caseStudies = [
  {
    id: 'cs-cryoglow-detail',
    order: 1,
    theme: 'light', // the newest/featured study — an exception, see 06_DECISIONS.md #2
    accent: '#8e7cf0',
    workCard: {
      variant: 'featured-a', // image left, text right
      index: '01',
      tag: 'BEAUTY · 2026',
      dots: [
        { hex: '#f3d9d4', bordered: true },
        { hex: '#efe7de', bordered: true },
        { hex: '#8e7cf0', bordered: false },
      ],
      badge: '✳ Latest',
      title: 'SharkBeauty *CryoGlow*',
      description:
        'Launching an at-home cryo-LED glow device — cold-tech skincare wrapped in soft neutrals, blush, and a blue-violet glow that reads as clinical *and* covetable.',
      tags: ['Launch strategy', 'Creator seeding', 'Content system'],
      imageLabel: 'SharkBeauty CryoGlow — hero campaign shot',
      imageSrc: './assets/cryoglow/cryoglow-01-social-grid-tiktok-instagram.webp',
    },
    detail: {
      dots: [
        { hex: '#f3d9d4', bordered: true },
        { hex: '#fffdf9', bordered: true },
        { hex: '#8e7cf0', bordered: false },
      ],
      eyebrow: '✳ Most recent · Feb–Jul 2026',
      title: 'CryoGlow, *cold* to the touch.',
      meta: [
        ['Client', 'SharkBeauty'],
        ['Year', '2026'],
        ['Industry', 'Beauty / Skincare'],
        ['Role', 'Launch strategy'],
      ],
      heroLabel: 'CryoGlow device — soft neutrals, blush, blue-violet LED glow',
      heroSrc: './assets/cryoglow/cryoglow-01-social-grid-tiktok-instagram.webp',
      insight:
        "Cold-tech skincare feels clinical. But consumers want the results *and* the ritual — proof it works, wrapped in something she'd leave out on the shelf.",
      stats: [
        { value: 12.5, suffix: 'M', decimals: 1, label: 'Total reach AU + NZ' },
        { value: 18.8, suffix: '×', decimals: 1, label: 'Creative ROI' },
        { value: 850, label: 'Week-one units — target was 300' },
        { value: 100, suffix: '+', label: 'Pieces of social content' },
      ],
      idea: [
        "Position CryoGlow as the calm meeting point of clinic and vanity, launching in Australia by partnering with underpriced beauty creator Chloe Morello - a trusted voice with strong credibility among our core audience.",
        'A creator-first launch let real routines carry the proof, with a repeatable content system so every post looked unmistakably CryoGlow.',
      ],
      evolution: [
        'Creator partnership with Chloe Morello anchors the launch in trust',
        "Bespoke content series — 'Light Therapy' — turns clinical claims into watchable ritual",
        '100+ pieces of always-on social keep the algorithm fed for weeks',
        'Micro-influencer and event program drives trial across AU + NZ',
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
    accent: '#9b6ff0',
    workCard: {
      variant: 'featured-b', // text left, image right
      index: '02',
      tag: 'FASHION · 2026',
      dots: [
        { hex: '#6a3fa0', bordered: false },
        { hex: '#17141a', bordered: false },
      ],
      title: 'Australian *Fashion Week*',
      description:
        'A front-row presence built in polished purple and runway black — turning five days of shows into a shareable, always-on content moment.',
      tags: ['Event strategy', 'Live content', 'Talent & PR'],
      imageLabel: 'Australian Fashion Week — hero campaign shot',
      imageSrc: './assets/afw/afw-01-pavilion-exterior-street-view.jpg',
    },
    detail: {
      dots: [
        { hex: '#9b6ff0', bordered: false },
        { hex: '#f3efe6', bordered: false },
      ],
      title: 'Front *row*, always on.',
      meta: [
        ['Event', 'Australian Fashion Week'],
        ['Year', '2026'],
        ['Industry', 'Fashion'],
        ['Role', 'Event & content strategy'],
      ],
      heroLabel: 'AFW — polished purple, runway black, front-row moment',
      heroSrc: './assets/afw/afw-01-pavilion-exterior-street-view.jpg',
      insight:
        "Fashion week is five days of noise. Presence isn't a seat in the room — it's *owning the feed* the room is looking at.",
      stats: [
        { value: 3, suffix: 'M', label: 'Total views' },
        { value: 270, label: 'Posts & stories' },
        { value: 4.34, prefix: '+', suffix: '%', decimals: 2, label: 'Engagement rate' },
      ],
      idea: [
        'Make Shark Beauty a cultural centerpiece at Australia Fashion Week .',
        'A live content team turned each runway into same-day social, with talent and PR briefed to a shared narrative.\n\nInfluencers, behind-the-scenes moments, on-the-ground vox pops, and giveaways all worked together to capture the energy exactly as it happened.',
      ],
      evolution: [
        'Influencer network mobilised across every show',
        'Behind-the-scenes and front-row reactions captured in real time',
        'On-the-ground vox pops bring the audience onto the runway',
        'Integrated giveaways convert spectacle into participation',
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
      description: 'Riding an acid-chartreuse cultural wave in real time.',
      imageLabel: 'Vodka Cruiser × Brat Summer — campaign visual',
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
        ['Role', 'Reactive strategy'],
      ],
      heroLabel: 'Cruiser × Brat — acid-chartreuse hero',
      heroSrc: './assets/cruiser/cruiser-01-hero-billboard-drinkin-that.jpg',
      insight:
        "Brat summer already owned a colour. A brand doesn't join a cultural wave by explaining it — it joins by *moving at its speed*.",
      stats: [
        { value: 757, suffix: 'K', label: 'Users reached' },
        { value: 1, suffix: ' summer', label: 'Owned, start to finish' },
      ],
      idea: [
        'Charlii XCX turned the world lime green and we answered in kind: a Summer Apple release with brat-coded OOH (\'drinkin\' that? ur so...").',
        'Reactive posting kept Cruiser inside the conversation while it was still peaking.',
      ],
      evolution: [
        'Summer Apple flavour drop, brat-coded from pack to platform',
        "Lowercase billboards speak fluent brat — 'dyeing your hair green for a festival?'",
        'Laneway Festival activation puts the bottle in the culture, not just the ad break',
        'Social-first content built for velocity over polish',
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
      description: 'Turning a national vote into snack-aisle theatre.',
      imageLabel: 'Twisties Election — campaign visual',
      imageSrc: './assets/twisties/twisties-01-hero-chicken-vs-cheese-overview.webp',
      // Source art has heavy white body copy (stats + STRATEGY/EXECUTION/RESULTS
      // + carousel) filling the bottom ~55%. object-fit:cover leaves only ~25px
      // of vertical overflow to pan, so panning alone can't hide it — we zoom in
      // (2.2x) anchored to the top so the card shows the banner + stage + cast
      // and crops all the bottom copy. 2.2x clears the text on the narrower
      // tablet card (portrait aspect shows more vertical) too. The image box has
      // overflow:hidden (WorkCard.css) so the scaled art stays clipped to it.
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
      heroLabel: 'Twisties Election — poster-red / canary / green hero',
      heroSrc: './assets/twisties/twisties-01-hero-chicken-vs-cheese-overview.webp',
      insight:
        'Cheese vs Chicken is the only two-party system Australians agree to care about. So we ran it like *a real election*.',
      award: '🏆 TikTok Award — Best Social Media Campaign 2025',
      stats: [
        { value: 702, suffix: 'M', label: 'Earned impressions' },
        { value: 579, label: 'Earned media pieces' },
        { value: 800, prefix: '+', suffix: '%', label: 'YoY social engagement' },
        { value: 14.6, prefix: '+', suffix: '%', decimals: 1, label: 'Unit sales' },
      ],
      idea: [
        "Election-poster art direction turned the snack aisle into a campaign trail, with each flavour running for the nation's vote. We called an election to settle the debate once and for all: Australia's Official Twistie.",
        'Familiar political theatre gave a snack rivalry the stakes of a headline.',
      ],
      evolution: [
        "'Chickeese' leaks on Reddit; Chicken and Cheese fans go into meltdown",
        'A full-page apology cancels Chickeese amid escalating outcry',
        'A snap election is called, with celebrity candidates for both parties',
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
          quote: 'Democracy has never been more ridiculous — or more effective.',
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
      title: "Doritos — Wash Your Mouth Out",
      description: '450M+ earned reach from the most divisive chip in history.',
      imageLabel: "Doritos 'Wash Your Mouth Out' — coriander DNA-to-soap concept diagram",
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
      stats: [
        { value: 450, suffix: 'M+', label: 'Earned reach — target beaten by 441M' },
        { value: 430, label: 'Pieces of earned media' },
        { value: 95.7, suffix: '%', decimals: 1, label: 'Brand mention in headlines' },
        { value: 400, suffix: '×', label: 'Final-pack auction bid vs pack price' },
      ],
      insight:
        '1 in 5 Australians carry olfactory genes that make coriander taste like *soap*. Instead of hiding from the hate, we leaned all the way in.',
      idea: [
        'An ultra-limited run of 500 coriander-flavoured packs, launched with out-of-home placed right next to soap retailers — Aesop, Lush — styling the chips as an aromatic, indulgent soap.',
        'It made the divisive flavour the whole point, turning a genetic quirk into a collectible cultural object.',
      ],
      evolution: [
        '500 packs drop unannounced; OOH runs beside Aesop & Lush styled as soap product',
        'Seeded mailers to earned influencers, filled with real consumer comments and reactions',
        "Stoked the fire in the 'I Hate Coriander' Facebook page as UGC flooded in",
        'Earned television, print and online coverage drove national saturation',
        'The final pack went to an unplanned eBay auction — and the country kept bidding',
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
