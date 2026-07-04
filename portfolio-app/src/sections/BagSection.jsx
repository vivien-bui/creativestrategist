import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import './BagSection.css';

// "What's in my bag" — an editorial flat-lay scene, not a tool grid.
// A tote spills open and the daily-carry objects settle into a composed
// still life; software lives *inside* the scene as UI overlays on the
// laptop/phone screens, notebook to-dos, a lid sticker and a sticky note.
// Motion follows the site's rules: IntersectionObserver choreography,
// CSS-var parallax, no libraries, everything skipped under reduced motion.

const LAPTOP_APPS = [
  { name: 'Slack', tip: 'Team comms — where ideas ping first' },
  { name: 'Notion', tip: 'Strategy docs & campaign wikis' },
  { name: 'Google Workspace', tip: 'Live docs, decks & shared drives' },
  { name: 'Microsoft Office', tip: 'Client-side decks & docs' },
];

const PHONE_APPS = [
  { initials: 'MB', name: 'Meta Business Suite', tip: 'Publishing & paid across Meta' },
  { initials: 'Ho', name: 'Hootsuite', tip: "Scheduling the week's social" },
  { initials: 'DS', name: 'DASH Social', tip: 'Content & UGC performance' },
  { initials: 'Sp', name: 'Sprinklr', tip: 'Enterprise social listening' },
];

const NOTEBOOK_TODOS = [
  { pre: 'pull ', tool: 'GWI', post: ' audience data', tip: 'Audience & consumer insights' },
  { pre: 'update the ', tool: 'Airtable', post: ' calendar', tip: 'Content calendars & trackers' },
  { pre: 'clear ', tool: 'ClickUp', post: ' notifications', tip: 'Campaign tasks & timelines' },
  { pre: 'tidy the ', tool: 'Asana', post: ' board', tip: 'Cross-team project tracking' },
];

function ToteBagArt() {
  return (
    <svg viewBox="0 0 320 300" className="bag-tote__art" role="img" aria-label="Open tote bag illustration">
      <ellipse cx="160" cy="286" rx="122" ry="11" fill="rgba(43,36,48,0.08)" />
      {/* handles */}
      <path d="M100 96 C 100 34, 152 34, 152 80" fill="none" stroke="#8b9486" strokeWidth="10" strokeLinecap="round" />
      <path d="M168 80 C 168 34, 220 34, 220 96" fill="none" stroke="#8b9486" strokeWidth="10" strokeLinecap="round" />
      {/* things peeking out of the open mouth */}
      <rect x="196" y="46" width="9" height="58" rx="4.5" transform="rotate(14 200 75)" fill="#b48a92" />
      <rect x="112" y="42" width="26" height="64" rx="6" transform="rotate(-10 125 74)" fill="#f4ecdc" />
      <rect x="112" y="42" width="26" height="10" rx="5" transform="rotate(-10 125 74)" fill="#a9c184" />
      {/* open mouth */}
      <ellipse cx="160" cy="94" rx="104" ry="17" fill="#463d4e" />
      {/* body */}
      <path
        d="M56 94 C 118 114, 202 114, 264 94 L 242 270 Q 240 288 220 288 L 100 288 Q 80 288 78 270 Z"
        fill="#f1e7d6"
      />
      {/* sage band */}
      <path d="M67 182 L 253 182 L 249 216 L 71 216 Z" fill="#8b9486" opacity="0.55" />
      {/* inner lip highlight */}
      <path d="M56 94 C 118 114, 202 114, 264 94 C 202 122, 118 122, 56 94 Z" fill="#ffffff" opacity="0.45" />
      {/* hanging tag */}
      <line x1="222" y1="100" x2="238" y2="132" stroke="rgba(43,36,48,0.4)" strokeWidth="1.5" />
      <rect x="228" y="130" width="26" height="18" rx="3" transform="rotate(8 241 139)" fill="#fffdf9" stroke="rgba(43,36,48,0.25)" />
      <text x="235" y="144" transform="rotate(8 241 139)" fontSize="10" fontStyle="italic" fill="#2b2430" fontFamily="Instrument Serif, serif">
        vb
      </text>
    </svg>
  );
}

function HeadphonesArt() {
  return (
    <svg viewBox="0 0 220 200" className="bag-headphones__art" role="img" aria-label="Headphones illustration">
      <ellipse cx="110" cy="188" rx="80" ry="8" fill="rgba(43,36,48,0.06)" />
      <path d="M42 132 C 42 52, 178 52, 178 132" stroke="#2b2430" strokeWidth="11" fill="none" strokeLinecap="round" />
      <rect x="24" y="118" width="40" height="60" rx="15" fill="#2b2430" />
      <rect x="156" y="118" width="40" height="60" rx="15" fill="#2b2430" />
      <rect x="32" y="127" width="24" height="42" rx="10" fill="#8b9486" opacity="0.85" />
      <rect x="164" y="127" width="24" height="42" rx="10" fill="#8b9486" opacity="0.85" />
    </svg>
  );
}

function MatchaCupArt() {
  return (
    <svg viewBox="0 0 140 196" className="bag-coffee__art" role="img" aria-label="Iced matcha cup illustration">
      <ellipse cx="70" cy="188" rx="42" ry="6" fill="rgba(43,36,48,0.08)" />
      <rect x="62" y="4" width="9" height="50" rx="4.5" transform="rotate(9 66 29)" fill="#b48a92" />
      <path d="M36 46 L 48 176 Q 49 184 58 184 L 82 184 Q 91 184 92 176 L 104 46 Z" fill="#f4ecdc" opacity="0.92" />
      <path d="M42 112 L 48 176 Q 49 184 58 184 L 82 184 Q 91 184 92 176 L 98 112 Z" fill="#a9c184" opacity="0.9" />
      <path d="M44 130 q 6 20 0 34 q -7 -17 0 -34" fill="#7e9c5f" opacity="0.6" />
      <rect x="32" y="38" width="76" height="11" rx="5.5" fill="#ffffff" opacity="0.75" />
    </svg>
  );
}

export default function BagSection() {
  const sceneRef = useRef(null);
  const [inView, setInView] = useState(false);
  const reduced = useReducedMotion();

  // Open the bag once the scene enters the viewport.
  useEffect(() => {
    if (reduced) {
      setInView(true);
      return undefined;
    }
    const scene = sceneRef.current;
    if (!scene) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setInView(true);
          io.disconnect();
        });
      },
      { threshold: 0.18 }
    );
    io.observe(scene);
    return () => io.disconnect();
  }, [reduced]);

  // Subtle scroll drift + cursor-follow parallax between the back (bag,
  // headphones) and front (objects) layers — same rAF pattern as the hero.
  useEffect(() => {
    if (reduced) return undefined;
    const scene = sceneRef.current;
    if (!scene) return undefined;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const r = scene.getBoundingClientRect();
        const mid = r.top + r.height / 2 - window.innerHeight / 2;
        const y = Math.max(-14, Math.min(14, -mid * 0.035));
        scene.style.setProperty('--bag-drift', `${y}px`);
      });
    };
    const onMove = (e) => {
      const r = scene.getBoundingClientRect();
      scene.style.setProperty('--bag-mx', `${((e.clientX - r.left) / r.width - 0.5) * 10}px`);
      scene.style.setProperty('--bag-my', `${((e.clientY - r.top) / r.height - 0.5) * 8}px`);
    };
    const onLeave = () => {
      scene.style.setProperty('--bag-mx', '0px');
      scene.style.setProperty('--bag-my', '0px');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    scene.addEventListener('mousemove', onMove);
    scene.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('scroll', onScroll);
      scene.removeEventListener('mousemove', onMove);
      scene.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section id="bag" data-screen-label="What's In My Bag" className="bag">
      <div className="bag__header">
        <h2 className="bag__heading">What&rsquo;s in my bag</h2>
        <span className="bag__eyebrow">( THE DAILY CARRY, SPILLED OPEN )</span>
      </div>

      <div ref={sceneRef} className={`bag-scene${inView ? ' bag-scene--in' : ''}`} data-r="bag-scene">
        <div className="bag-layer bag-layer--back">
          {/* Tote — centred anchor of the flat lay, everything rings around it */}
          <div className="bag-obj bag-obj--tote" style={{ '--r': '-2deg', '--fx': '0px', '--fy': '34px', '--fr': '-6deg', '--d': '0s' }}>
            <div className="bag-obj__inner">
              <ToteBagArt />
              <span
                className="bag-sticker bag-tool"
                tabIndex={0}
                data-tip="Canva — quick-turn social design"
              >
                Canva
              </span>
            </div>
          </div>
        </div>

        <div className="bag-layer bag-layer--front">
          {/* Laptop — mission control, so it gets the most weight */}
          <div className="bag-obj bag-obj--laptop" style={{ '--r': '-2deg', '--fx': '300px', '--fy': '170px', '--fr': '9deg', '--d': '0.14s' }}>
            <div className="bag-obj__inner">
              <div className="bag-laptop">
                <div className="bag-laptop__screen">
                  <div className="bag-laptop__chrome">
                    <i /><i /><i />
                  </div>
                  {LAPTOP_APPS.map((app, i) => (
                    <span
                      key={app.name}
                      className="bag-laptop__row bag-tool"
                      tabIndex={0}
                      data-tip={app.tip}
                      style={{ '--d': `${0.7 + i * 0.14}s` }}
                    >
                      <i className="bag-laptop__dot" />
                      {app.name}
                    </span>
                  ))}
                </div>
                <div className="bag-laptop__base" />
              </div>
            </div>
          </div>

          {/* Phone — the social stack */}
          <div className="bag-obj bag-obj--phone" style={{ '--r': '5deg', '--fx': '-300px', '--fy': '190px', '--fr': '-20deg', '--d': '0.26s' }}>
            <div className="bag-obj__inner">
              <div className="bag-phone">
                <i className="bag-phone__notch" />
                <div className="bag-phone__grid">
                  {PHONE_APPS.map((app, i) => (
                    <span
                      key={app.name}
                      className="bag-phone__app bag-tool"
                      tabIndex={0}
                      data-tip={`${app.name} — ${app.tip.charAt(0).toLowerCase()}${app.tip.slice(1)}`}
                      style={{ '--fd': `${i * 0.35}s` }}
                    >
                      {app.initials}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Notebook — the analogue layer */}
          <div className="bag-obj bag-obj--notebook" style={{ '--r': '2deg', '--fx': '280px', '--fy': '-160px', '--fr': '-9deg', '--d': '0.2s' }}>
            <div className="bag-obj__inner">
              <div className="bag-notebook">
                <div className="bag-notebook__spiral" />
                <div className="bag-notebook__title">
                  today —
                  <svg viewBox="0 0 70 8" className="bag-notebook__underline" aria-hidden="true">
                    <path className="bag-draw" d="M2 5 C 20 2, 48 8, 68 4" pathLength="100" />
                  </svg>
                </div>
                {NOTEBOOK_TODOS.map((todo, i) => (
                  <div className="bag-notebook__todo" key={todo.tool} style={{ '--d': `${0.85 + i * 0.16}s` }}>
                    <i className="bag-notebook__box" />
                    <span>
                      {todo.pre}
                      <span className="bag-tool" tabIndex={0} data-tip={`${todo.tool} — ${todo.tip.charAt(0).toLowerCase()}${todo.tip.slice(1)}`}>
                        {todo.tool}
                      </span>
                      {todo.post}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Headphones */}
          <div className="bag-obj bag-obj--headphones" style={{ '--r': '9deg', '--fx': '-320px', '--fy': '-40px', '--fr': '18deg', '--d': '0.36s' }}>
            <div className="bag-obj__inner">
              <HeadphonesArt />
            </div>
          </div>

          {/* Matcha cup */}
          <div className="bag-obj bag-obj--coffee" style={{ '--r': '-3deg', '--fx': '-140px', '--fy': '-170px', '--fr': '10deg', '--d': '0.3s' }}>
            <div className="bag-obj__inner">
              <MatchaCupArt />
            </div>
          </div>

          {/* Sticky notes — creative direction as a concept, not software */}
          <div className="bag-obj bag-obj--sticky" style={{ '--r': '-4deg', '--fx': '-30px', '--fy': '190px', '--fr': '10deg', '--d': '0.4s' }}>
            <div className="bag-obj__inner">
              <div className="bag-sticky bag-sticky--back" aria-hidden="true">✳</div>
              <div
                className="bag-sticky bag-tool"
                tabIndex={0}
                data-tip="Not software — the through-line on everything"
              >
                creative
                <br />
                direction
                <span className="bag-sticky__mark">✳</span>
              </div>
            </div>
          </div>

          {/* Handwritten annotations */}
          <div className="bag-annot bag-annot--laptop" aria-hidden="true">
            <svg viewBox="0 0 60 34" className="bag-annot__arrow bag-annot__arrow--up">
              <path className="bag-draw" d="M6 30 C 18 22, 32 14, 48 6 M48 6 l -10 0 M48 6 l -2 9" pathLength="100" />
            </svg>
            <span className="bag-annot__text">mission control</span>
          </div>
          <div className="bag-annot bag-annot--phone" aria-hidden="true">
            <span className="bag-annot__text">the social stack</span>
            <svg viewBox="0 0 60 34" className="bag-annot__arrow">
              <path className="bag-draw" d="M4 4 C 24 8, 40 14, 50 28 M50 28 l 2 -9 M50 28 l -9 -3" pathLength="100" />
            </svg>
          </div>
          <div className="bag-annot bag-annot--coffee" aria-hidden="true">
            <span className="bag-annot__text">matcha, obviously</span>
          </div>
        </div>
      </div>
    </section>
  );
}
