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
// `unfolded` ("How it unfolded") holds each study's execution/outcome
// narrative — text that previously lived as the second `idea` paragraph
// (or, for Doritos, the Evolution row). Moved, never rewritten.
// `insightStats`/`ideaStats`/`unfoldedStats` are contextual stat strips;
// every value is verbatim from PORTFOLIO-DATA.md or this file's existing
// copy — non-numeric values exist because those studies have no real
// metrics on record and none may be invented.

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
      insight:
        "Cold-tech skincare feels clinical. But consumers want the results *and* the ritual — proof it works, wrapped in something she'd leave out on the shelf.",
      idea: [
        "Position CryoGlow as the calm meeting point of clinic and vanity, launching in Australia by partnering with underpriced beauty creator Chloe Morello - a trusted voice with strong credibility among our core audience.",
      ],
      unfolded: [
        'A creator-first launch let real routines carry the proof, with a repeatable content system so every post looked unmistakably CryoGlow.',
      ],
      unfoldedStats: [
        { value: '2026', label: 'Australian launch' },
        { value: 'Feb–Jul', label: 'Launch window' },
        { value: 'Creator-first', label: 'Launch model' },
      ],
      images: [
        { id: 'cryoglow-2', label: 'creator routine / device in-use shot' },
        { id: 'cryoglow-3', label: 'packaging / product detail' },
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
      insight:
        "Fashion week is five days of noise. Presence isn't a seat in the room — it's *owning the feed* the room is looking at.",
      idea: [
        'Make Shark Beauty a cultural centerpiece at Australia Fashion Week .',
      ],
      unfolded: [
        'A live content team turned each runway into same-day social, with talent and PR briefed to a shared narrative.\n\nInfluencers, behind-the-scenes moments, on-the-ground vox pops, and giveaways all worked together to capture the energy exactly as it happened.',
      ],
      unfoldedStats: [
        { value: '5', label: 'Days of shows' },
        { value: 'Same-day', label: 'Runway to social' },
        { value: '2026', label: 'Fashion Week season' },
      ],
      images: [
        { id: 'afw-2', label: 'runway / backstage content' },
        { id: 'afw-3', label: 'talent / front-row social capture' },
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
      insight:
        "Brat summer already owned a colour. A brand doesn't join a cultural wave by explaining it — it joins by *moving at its speed*.",
      idea: [
        'Charlii XCX turned the world lime green and we answered in kind: a Summer Apple release with brat-coded OOH (\'drinkin\' that? ur so...").',
      ],
      unfolded: [
        'Reactive posting kept Cruiser inside the conversation while it was still peaking.',
      ],
      unfoldedStats: [
        { value: 'Summer Apple', label: 'Limited release' },
        { value: 'Real-time', label: 'Reactive posting' },
        { value: 'OOH + social', label: 'Brat-coded channels' },
      ],
      images: [
        { id: 'cruiser-2', label: 'social-native creative' },
        { id: 'cruiser-3', label: 'reactive post / meme moment' },
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
      insight:
        'Cheese vs Chicken is the only two-party system Australians agree to care about. So we ran it like *a real election*.',
      award: '🏆 TikTok Award — Best Social Media Campaign 2025',
      idea: [
        "Election-poster art direction turned the snack aisle into a campaign trail, with each flavour running for the nation's vote. We called an election to settle the debate once and for all: Australia's Official Twistie.",
      ],
      unfolded: [
        'Familiar political theatre gave a snack rivalry the stakes of a headline.',
      ],
      unfoldedStats: [
        { value: '2', label: 'Flavours on the ballot' },
        { value: '1', label: 'National election called' },
        { value: '2025', label: 'TikTok Award win' },
      ],
      images: [
        { id: 'twisties-2', label: 'campaign poster / OOH' },
        { id: 'twisties-3', label: 'in-store / social activation' },
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
      imageLabel: "Doritos 'Wash Your Mouth Out' — campaign visual",
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
      heroLabel: 'Doritos coriander pack styled as soap — the OOH hero',
      stats: [
        { value: '450M+', label: 'Earned reach' },
        { value: '430', label: 'Earned media pieces' },
        { value: '95.7%', label: 'Brand mention in headlines' },
        { value: '400×', label: 'Winning eBay bid vs pack price' },
      ],
      insight:
        '1 in 5 Australians carry olfactory genes that make coriander taste like *soap*. Instead of hiding from the hate, we leaned all the way in.',
      insightStats: [{ value: '1 in 5', label: 'Australians taste soap in coriander' }],
      idea: [
        'An ultra-limited run of 500 coriander-flavoured packs, launched with out-of-home placed right next to soap retailers — Aesop, Lush — styling the chips as an aromatic, indulgent soap.',
        'It made the divisive flavour the whole point, turning a genetic quirk into a collectible cultural object.',
      ],
      ideaStats: [{ value: '500', label: 'Packs in the ultra-limited run' }],
      unfolded: [
        'Seeded mailers stoked the influencer feeds, fed the "I Hate Coriander" Facebook page, and — entirely unplanned — the final pack ended up in an eBay bidding war that closed at 400× its retail price. The internet finished the campaign for us.',
      ],
      unfoldedStats: [{ value: '193k+', label: 'Comments in 3 days' }],
      lines: [
        '"A soap tasting chip? Not a fable."',
        '"Boldly fragrant & indulgently soapy chips? Delush."',
        '"Deliciously fragrant… and indulgently soapy."',
      ],
      images: [
        { id: 'cs-detail-2', label: 'OOH placement next to soap retailer' },
        { id: 'cs-detail-3', label: 'influencer seeding mailer / eBay auction screenshot' },
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
