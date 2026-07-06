import ImagePlaceholder from '../components/ImagePlaceholder';
import Rich from '../components/Rich';
import { HeartDoodle, CoffeeDoodle, MusicNoteDoodle, PinDoodle, TapeDoodle } from '../components/Doodles';
import './AboutSection.css';

const STEPS = [
  { num: '01 Find', copy: 'the cultural tension a brand can credibly own.' },
  { num: '02 Build', copy: 'the moment - product, stunt or story - that dramatises it.' },
  { num: '03 Earn', copy: 'the reach, engineer it to be shared  and talked about.' },
];

export default function AboutSection() {
  return (
    <section id="about" data-screen-label="About" className="about">
      <div className="about__intro" data-r="split-about">
        <div className="about__intro-left">
          <span className="about__eyebrow">About</span>
          <div className="about__zine-note" aria-hidden="true">
            <span className="about__zine-paren"><PinDoodle size={11} /> ( photo, below )</span>
            <p className="about__zine-caption">
              warm light, one candle,
              <br />
              a wish being made —
              <br />
              somewhere in sydney
            </p>
            <span className="about__zine-paren">( fig. 01 — off the clock ) <HeartDoodle size={11} /></span>
          </div>
        </div>
        <Rich
          as="p"
          className="about__statement"
          emColor="var(--accent)"
          text="Strategy first, always: I find the cultural tension a brand can own, then build the *moment people can't help but share*."
        />
      </div>

      <div className="about__body" data-r="split-about2">
        <div className="about__portrait" id="about-portrait" data-cursor-note="off the clock">
          <TapeDoodle className="about__tape about__tape--tl" size={65} />
          <ImagePlaceholder
            label="a portrait with warm light"
            radius={8}
            src="./assets/personal/personal-01-dinner-candle-portrait.jpg"
          />
          <span className="about__zine-word about__zine-word--1" aria-hidden="true">
            off
          </span>
          <span className="about__zine-word about__zine-word--2" aria-hidden="true">
            the clock
          </span>
          <TapeDoodle className="about__tape about__tape--br" size={55} />
        </div>
        <div>
          <p className="about__bio">
            I'm Vivien - a creative strategist in Sydney working where brands meet culture. My background spans
            FMCG, beauty and fashion, always with the same brief I give myself: find the tension people already
            feel, and hand them a moment worth passing on.
          </p>
          <p className="about__bio about__bio--last">
            Off the clock, you'll either find me at a wine bar, rotating between three different TV shows and a
            book all at once, or taking way too many photos of a building that's caught my eye.&nbsp;
          </p>
          <div className="about__diary-aside" aria-hidden="true">
            <CoffeeDoodle size={14} /> <span>currently on my second soy cappuccino</span>
            <MusicNoteDoodle size={14} /> <span>& listening to frank ocean on repeat</span>
          </div>
          <div className="about__steps" data-r="about-steps">
            {STEPS.map((s) => (
              <div key={s.num}>
                <div className="about__step-num">{s.num}</div>
                <p className="about__step-copy">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
