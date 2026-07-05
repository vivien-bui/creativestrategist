import { SparkleDoodle, HeartDoodle, StarDoodle, LightningDoodle, CoffeeDoodle, PinDoodle } from './Doodles';
import './ZineTicker.css';

const DOODLES = [SparkleDoodle, HeartDoodle, StarDoodle, LightningDoodle, CoffeeDoodle, PinDoodle];

const PHRASES = [
  'strategy first, always',
  'cultural tension, found',
  'moments people share',
  'earned, not bought',
  'brands meet culture',
  'sydney → everywhere',
];

export default function ZineTicker() {
  const run = (ariaHidden) => (
    <span className="zine-ticker__run" aria-hidden={ariaHidden || undefined}>
      {PHRASES.map((p, i) => {
        const Doodle = DOODLES[i % DOODLES.length];
        return (
          <span key={p} className="zine-ticker__item">
            <span className="zine-ticker__phrase">( {p} )</span>
            <Doodle className="zine-ticker__mark" size={11} />
          </span>
        );
      })}
    </span>
  );

  return (
    <div className="zine-ticker">
      <div className="zine-ticker__track">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
