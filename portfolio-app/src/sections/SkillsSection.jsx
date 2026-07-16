import { useEffect, useRef } from 'react';
import FloatingPill from '../components/FloatingPill';
import MatchaIllustration from './MatchaIllustration';
import ZineLetters from '../components/ZineLetters';
import { HeartDoodle, CoffeeDoodle, LightningDoodle } from '../components/Doodles';
import useReducedMotion from '../hooks/useReducedMotion';
import './SkillsSection.css';

// Coffee-order framing over Vivien's real skillset (insight-led strategy,
// creative concepting, cultural/trend analysis, pitch decks, social-first,
// creator partnerships, earned media). The last three lines are the actual
// toolkit: insight/trend research (GWI, Canvas8, Google Trends), social
// media management (Hootsuite, Sprinklr, Dash Social), and project systems
// (ClickUp, Asana, Slack, Google Workspace, Microsoft 365). Each line carries a `note` shown by CursorNote
// on hover, so the playful order also reads clearly as a skillset.
const RECEIPT_LINES = [
  { label: 'Venti insight-led strategy', note: 'audience & cultural insight into strategy' },
  { label: 'Double shot of cultural tension', note: 'finding the tension a brand can own' },
  { label: 'Creative concepting & briefing', note: 'big ideas and the briefs behind them' },
  { label: 'Earned media & PR, extra froth', note: 'earned media & PR campaigns' },
  { label: 'Creator partnerships, oat-milk smooth', note: 'creator & influencer strategy' },
  { label: 'Pitch decks, brewed to win', note: 'narrative decks that win the room' },
  { label: 'Social-first blend, platform-native', note: 'platform-native social strategy' },
  { label: 'GWI · Canvas8 · Google Trends, ground fresh', note: 'insight & trend research tools' },
  { label: 'Hootsuite · Sprinklr · Dash Social, syrup', note: 'social media management tools' },
  { label: 'ClickUp · Asana · Slack · Google Workspace · Microsoft 365, to go', note: 'project & team collaboration tools' },
];

// Printed on the receipt like a real till timestamp (DD.MM.YY · HH:MM).
const ORDER_DATE = (() => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${String(d.getFullYear()).slice(-2)} · ${p(d.getHours())}:${p(d.getMinutes())}`;
})();

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const artRef = useRef(null);
  const reduced = useReducedMotion();

  // Layered motion: the matcha art drifts against the receipt on scroll,
  // eases toward the cursor, and — the "floaty" part — bobs and gently
  // rocks continuously via two out-of-phase sine waves, like it's actually
  // hovering rather than just tracking scroll/cursor input. Runs as one
  // rAF loop (gated by IntersectionObserver) so all three motions combine
  // into a single coherent transform instead of fighting over the property.
  useEffect(() => {
    if (reduced) return undefined;
    const section = sectionRef.current;
    const art = artRef.current;
    if (!section || !art) return undefined;

    let raf = null;
    let onScreen = false;
    const start = performance.now();
    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };

    const scrollDrift = () => {
      const r = section.getBoundingClientRect();
      const mid = r.top + r.height / 2 - window.innerHeight / 2;
      return Math.max(-16, Math.min(16, -mid * 0.045));
    };

    const tick = (now) => {
      raf = null;
      if (!onScreen) return;
      const t = (now - start) / 1000;
      pointer.x += (pointerTarget.x - pointer.x) * 0.08;
      pointer.y += (pointerTarget.y - pointer.y) * 0.08;
      const floatY = Math.sin(t * 0.9) * 9 + Math.sin(t * 0.37) * 3;
      const floatRot = Math.sin(t * 0.6) * 2.2;
      art.style.setProperty('--skills-mx', `${pointer.x}px`);
      art.style.setProperty('--skills-my', `${pointer.y + floatY}px`);
      art.style.setProperty('--skills-drift', `${scrollDrift()}px`);
      art.style.setProperty('--skills-rot', `${floatRot}deg`);
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(section);

    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      pointerTarget.x = ((e.clientX - r.left) / r.width - 0.5) * 8;
      pointerTarget.y = ((e.clientY - r.top) / r.height - 0.5) * 6;
    };
    const onLeave = () => {
      pointerTarget.x = 0;
      pointerTarget.y = 0;
    };
    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);

    return () => {
      io.disconnect();
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section ref={sectionRef} id="skills" data-screen-label="Skillset" className="skills">
      <div className="skills__header">
        <h2 className="skills__heading">
          <ZineLetters text="the usual order" salt={8} />
        </h2>
        <span className="skills__eyebrow"><CoffeeDoodle size={13} className="skills__eyebrow-doodle" /> ( my skillset, as a matcha order )</span>
      </div>

      <div className="skills__layout" data-r="split-skills">
        <div className="skills__art-wrap" data-r="latte-pill-wrap" data-reveal data-cursor-note="my usual order">
          <div ref={artRef} className="skills__art-parallax">
            <MatchaIllustration />
          </div>
          <FloatingPill
            pos={{ top: '8%', left: '-32px' }}
            mobilePos={{ top: '4%', left: '-4%' }}
            duration="5.5s"
          >
            extra shot of ambition
          </FloatingPill>
          <FloatingPill
            pos={{ bottom: '12%', right: '-28px' }}
            mobilePos={{ bottom: '6%', right: '-4%' }}
            duration="6.5s"
          >
            collaborative cold foam
          </FloatingPill>
        </div>

        <div className="receipt">
          <div className="receipt__head" data-reveal>
            <div className="receipt__title">The Strategist's Order</div>
            <div className="receipt__subtitle">Est. brewing since day one</div>
          </div>

          <div className="receipt__meta" data-reveal>
            <span>ORDER #0705</span>
            <span>{ORDER_DATE}</span>
          </div>

          <div className="receipt__rule" aria-hidden="true" />

          {/* Each line carries its own data-reveal so the shared scroll
              stagger makes the receipt "print" item by item. data-cursor-note
              surfaces the underlying skill on hover, layered on top of the
              existing translateX hover so the "ingredients" read as a
              skillset instead of feeling like a dead click target. */}
          <div className="receipt__lines" data-r="receipt-lines">
            {RECEIPT_LINES.map(({ label, note }) => (
              <div className="receipt__line" key={label} data-reveal data-cursor-note={note}>
                <span>{label}</span>
                <span className="receipt__dots" />
              </div>
            ))}
          </div>

          <div className="receipt__rule" aria-hidden="true" />

          <div className="receipt__total" data-reveal>
            <div>
              <div className="receipt__total-label">Total</div>
              <div className="receipt__total-value">One new hire</div>
            </div>
            <div className="receipt__badge">
              Fresh
              <br />
              batch
            </div>
          </div>

          <div className="receipt__barcode" data-reveal />
          <div className="receipt__thanks" data-reveal>THANK YOU · COME AGAIN <HeartDoodle size={10} className="receipt__thanks-heart" /></div>
          <div className="receipt__diary-scribble" data-reveal aria-hidden="true">
            <LightningDoodle size={12} /> best order yet tbh
          </div>
        </div>
      </div>
    </section>
  );
}
