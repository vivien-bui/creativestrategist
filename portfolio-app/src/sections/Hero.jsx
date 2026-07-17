import { useEffect, useRef } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import FloatingPill from '../components/FloatingPill';
import AmbientBackdrop from '../components/AmbientBackdrop';
import ZineLetters from '../components/ZineLetters';
import { SparkleDoodle, TapeDoodle } from '../components/Doodles';
import { INTRO_ACTIVE_ON_LOAD } from '../components/introState';
import useReducedMotion from '../hooks/useReducedMotion';
import './Hero.css';

// Start the paste-up assembly as the ZineIntro cover begins lifting (its
// fade runs ~2.1s–2.75s), so the headline visibly assembles into the reveal
// and settles just after the cover clears — not a full second behind it.
// The hero words arm on mount (immediate), so this delay is measured from a
// stable point and the assembly no longer drifts late.
const HERO_LETTER_DELAY = INTRO_ACTIVE_ON_LOAD ? 2000 : 150;

export default function Hero({ onNavigate }) {
  const creativeRef = useRef(null);
  const strategistRef = useRef(null);
  const photoRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    // Below 768px the words already sit close to the viewport edge (right-
    // aligned "Strategist" especially), and the page clips overflow-x, so
    // the sideways drift used on desktop pushes letters off-screen instead
    // of just drifting past the photo. Skip the horizontal word-parallax on
    // mobile; the photo scale is still safe since it never leaves its box.
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const y = window.scrollY;
        const p = Math.min(y, 900);
        if (!mobileQuery.matches) {
          if (creativeRef.current) creativeRef.current.style.transform = `translateX(${-p * 0.12}px)`;
          if (strategistRef.current) strategistRef.current.style.transform = `translateX(${p * 0.12}px)`;
        }
        if (photoRef.current) photoRef.current.style.transform = `scale(${1 + (Math.min(y, 600) / 600) * 0.045})`;
      });
    };
    const onModeChange = () => {
      if (mobileQuery.matches) {
        if (creativeRef.current) creativeRef.current.style.transform = '';
        if (strategistRef.current) strategistRef.current.style.transform = '';
      }
    };
    mobileQuery.addEventListener('change', onModeChange);
    onModeChange();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      mobileQuery.removeEventListener('change', onModeChange);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <header id="hero" data-screen-label="Hero" className="hero">
      <AmbientBackdrop variant="hero" />
      <div className="hero__eyebrow">
        <SparkleDoodle className="hero__mark" size={24} />
        <p>Creative strategist · Sydney · Available for agency contracts</p>
      </div>


      <div className="hero__headline">
        <h1 ref={creativeRef} id="hero-word-creative" className="hero__word hero__word--creative">
          <ZineLetters text="creative" salt={2} magnet immediate baseDelay={HERO_LETTER_DELAY} />
        </h1>

        <div className="hero__photo-row">
          <div className="hero__photo-wrap" data-r="hero-pill-wrap">
            <TapeDoodle className="hero__tape hero__tape--top" size={80} />
            <div ref={photoRef} id="hero-photo" className="hero__photo" data-cursor-note="hi, that's me">
              <ImagePlaceholder
                label="a photo with your energy: travel, golden hour, candid"
                radius={4}
                src="./assets/personal/personal-04-studio-bw-portrait.jpg"
                imageStyle={{ objectPosition: '50% 0%', transform: 'scale(1.12)' }}
              />
            </div>
            <TapeDoodle className="hero__tape hero__tape--bottom" size={70} />

            <FloatingPill
              pos={{ top: '12%', left: '-140px' }}
              mobilePos={{ top: '2%', left: '2%' }}
              duration="5s"
              note="positioning for FMCG, beauty & challenger brands"
            >
              brand strategy
            </FloatingPill>
            <FloatingPill
              pos={{ top: '-8%', right: '-110px' }}
              mobilePos={{ top: '16%', right: '2%' }}
              duration="6s"
              note="702M impressions & a TikTok Award, built to be reported on"
            >
              earned media
            </FloatingPill>
            <FloatingPill
              pos={{ bottom: '30%', right: '-150px' }}
              mobilePos={{ bottom: '24%', right: '-2%' }}
              duration="5.5s"
              note="creator seeding, live event coverage, always-on social"
            >
              social &amp; influencer
            </FloatingPill>
            <FloatingPill
              pos={{ bottom: '-6%', left: '-100px' }}
              mobilePos={{ bottom: '2%', left: '-2%' }}
              duration="6.5s"
              note="brat summer, Fashion Week & a mock national election"
            >
              cultural moments
            </FloatingPill>
          </div>
        </div>

        <h1 ref={strategistRef} id="hero-word-strategist" className="hero__word hero__word--strategist">
          <ZineLetters text="strategist" salt={4} magnet immediate baseDelay={HERO_LETTER_DELAY + 240} />
        </h1>
      </div>

      <div className="hero__foot">
        <p className="hero__tagline">
          I make brands <em>worth talking about</em>, campaigns built on cultural insight, engineered to <em>earn their reach</em>.
        </p>
        <a
          href="#work"
          className="hero__cta"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('work');
          }}
        >
          Selected work ↓
        </a>
      </div>
    </header>
  );
}
