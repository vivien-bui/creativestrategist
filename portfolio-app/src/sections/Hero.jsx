import { useEffect, useRef } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import FloatingPill from '../components/FloatingPill';
import AmbientBackdrop from '../components/AmbientBackdrop';
import useReducedMotion from '../hooks/useReducedMotion';
import './Hero.css';

export default function Hero({ onNavigate }) {
  const creativeRef = useRef(null);
  const strategistRef = useRef(null);
  const photoRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const y = window.scrollY;
        const p = Math.min(y, 900);
        if (creativeRef.current) creativeRef.current.style.transform = `translateX(${-p * 0.12}px)`;
        if (strategistRef.current) strategistRef.current.style.transform = `translateX(${p * 0.12}px)`;
        if (photoRef.current) photoRef.current.style.transform = `scale(${1 + (Math.min(y, 600) / 600) * 0.045})`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <header id="hero" data-screen-label="Hero" className="hero">
      <AmbientBackdrop variant="hero" />
      <div className="hero__eyebrow">
        <span className="hero__mark">✳</span>
        <p>Creative strategist · Sydney · Available for agency contracts</p>
      </div>

      <div className="hero__headline">
        <h1 ref={creativeRef} id="hero-word-creative" className="hero__word hero__word--creative">
          Creative
        </h1>

        <div className="hero__photo-row">
          <div className="hero__photo-wrap" data-r="hero-pill-wrap">
            <div ref={photoRef} id="hero-photo" className="hero__photo">
              <ImagePlaceholder
                label="a photo with your energy — travel, golden hour, candid"
                radius={4}
                src="./assets/personal/personal-02-mountain-lookout-portrait.jpg"
              />
            </div>

            <FloatingPill pos={{ top: '12%', left: '-140px' }} duration="5s">brand strategy</FloatingPill>
            <FloatingPill pos={{ top: '-8%', right: '-110px' }} duration="6s">earned media</FloatingPill>
            <FloatingPill pos={{ bottom: '30%', right: '-150px' }} duration="5.5s">social &amp; influencer</FloatingPill>
            <FloatingPill pos={{ bottom: '-6%', left: '-100px' }} duration="6.5s">cultural moments</FloatingPill>
          </div>
        </div>

        <h1 ref={strategistRef} id="hero-word-strategist" className="hero__word hero__word--strategist">
          Strategist
        </h1>
      </div>

      <div className="hero__foot">
        <p className="hero__tagline">
          I make brands worth talking about — campaigns built on cultural insight, engineered to earn their reach.
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
