import { useEffect, useRef } from 'react';
import FloatingPill from '../components/FloatingPill';
import MatchaIllustration from './MatchaIllustration';
import ArtDecoCorner from '../components/ArtDecoCorner';
import ArtDecoBorder from '../components/ArtDecoBorder';
import useReducedMotion from '../hooks/useReducedMotion';
import './SkillsSection.css';

const RECEIPT_LINES = [
  ['Venti brand strategy', '10/10'],
  ['Double shot of cultural insight', '10/10'],
  ['Earned media & PR froth', '10/10'],
  ['Social & influencer syrup', '9/10'],
  ['Copywriting, whole-milk smooth', '9/10'],
  ['Figma · Canva · Adobe blend', '9/10'],
  ['Topped with collaborative foam', '10/10'],
];

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
        <h2 className="skills__heading">The usual order</h2>
        <span className="skills__eyebrow">( MY SKILLSET, AS A MATCHA ORDER )</span>
      </div>

      <div className="skills__layout" data-r="split-skills">
        <div className="skills__art-wrap" data-r="latte-pill-wrap" data-reveal>
          <div ref={artRef} className="skills__art-parallax">
            <MatchaIllustration />
          </div>
          <FloatingPill pos={{ top: '8%', left: '-32px' }} duration="5.5s">
            extra shot of ambition
          </FloatingPill>
          <FloatingPill pos={{ bottom: '12%', right: '-28px' }} duration="6.5s">
            collaborative cold foam
          </FloatingPill>
        </div>

        <div className="receipt">
          <ArtDecoCorner className="receipt__corner--tl" />
          <ArtDecoCorner className="receipt__corner--tr" />
          <ArtDecoCorner className="receipt__corner--br" />
          <ArtDecoCorner className="receipt__corner--bl" />

          <div className="receipt__head" data-reveal>
            <div className="receipt__title">The Strategist's Order</div>
            <div className="receipt__subtitle">Est. brewing since day one</div>
          </div>

          <ArtDecoBorder />

          {/* Each line carries its own data-reveal so the shared scroll
              stagger makes the receipt "print" item by item. */}
          <div className="receipt__lines" data-r="receipt-lines">
            {RECEIPT_LINES.map(([label, rating]) => (
              <div className="receipt__line" key={label} data-reveal>
                <span>{label}</span>
                <span className="receipt__dots" />
                <span className="receipt__rating">{rating}</span>
              </div>
            ))}
          </div>

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
          <div className="receipt__thanks" data-reveal>THANK YOU · COME AGAIN</div>
        </div>
      </div>
    </section>
  );
}
