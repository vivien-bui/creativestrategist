import FloatingPill from '../components/FloatingPill';
import MatchaIllustration from './MatchaIllustration';
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
  return (
    <section id="skills" data-screen-label="Skillset" className="skills">
      <div className="skills__header">
        <h2 className="skills__heading">The usual order</h2>
        <span className="skills__eyebrow">( MY SKILLSET, AS A MATCHA ORDER )</span>
      </div>

      <div className="skills__layout" data-r="split-skills">
        <div className="skills__art-wrap" data-r="latte-pill-wrap">
          <MatchaIllustration />
          <FloatingPill pos={{ top: '8%', left: '-32px' }} duration="5.5s">
            extra shot of ambition
          </FloatingPill>
          <FloatingPill pos={{ bottom: '12%', right: '-28px' }} duration="6.5s">
            collaborative cold foam
          </FloatingPill>
        </div>

        <div className="receipt">
          <div className="receipt__head">
            <div className="receipt__title">The Strategist's Order</div>
            <div className="receipt__subtitle">Est. brewing since day one</div>
          </div>

          <div className="receipt__lines" data-r="receipt-lines">
            {RECEIPT_LINES.map(([label, rating]) => (
              <div className="receipt__line" key={label}>
                <span>{label}</span>
                <span className="receipt__dots" />
                <span className="receipt__rating">{rating}</span>
              </div>
            ))}
          </div>

          <div className="receipt__total">
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

          <div className="receipt__barcode" />
          <div className="receipt__thanks">THANK YOU · COME AGAIN</div>
        </div>
      </div>
    </section>
  );
}
