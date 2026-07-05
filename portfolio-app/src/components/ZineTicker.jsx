import { SparkleDoodle } from './Doodles';
import './ZineTicker.css';

// Running-head marquee strip (06_DECISIONS.md #10) — the zine's masthead
// ticker, looping the site's recurring phrases between hero and work.
// Track is rendered twice and slid -50% for a seamless loop; hover pauses.
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
      {PHRASES.map((p) => (
        <span key={p} className="zine-ticker__item">
          <span className="zine-ticker__phrase">( {p} )</span>
          <SparkleDoodle className="zine-ticker__mark" size={11} />
        </span>
      ))}
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
