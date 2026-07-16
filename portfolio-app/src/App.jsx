import { useCallback, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Nav from './components/Nav';
import GrainOverlay from './components/GrainOverlay';
import ZineIntro from './components/ZineIntro';
import CursorNote from './components/CursorNote';
import SpreadIndicator from './components/SpreadIndicator';
import Hero from './sections/Hero';
import WorkSection from './sections/WorkSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import CaseStudyDetail from './sections/CaseStudyDetail';
import { detailViewIds, getCaseStudy } from './data/caseStudies';
import useReducedMotion from './hooks/useReducedMotion';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function initialView() {
  const hash = window.location.hash.slice(1);
  return detailViewIds.includes(hash) ? hash : 'home';
}

// The nav is position: sticky, so scrolling a section's top edge flush with
// the viewport top hides its first ~nav-height of content (eyebrow + opening
// lines) behind the bar. Offset every id-targeted jump by the nav's measured
// height plus a small breathing gap so the section starts cleanly below it.
function navOffset() {
  const nav = document.querySelector('.nav');
  return nav ? nav.getBoundingClientRect().height + 24 : 0;
}

// Client-side view routing: home vs one of the 5 case-study detail pages.
// Not a router library — a single piece of state, wrapped in the View
// Transitions API when available, mirroring the original DC's _go/_goHome.
// See project/docs/06_DECISIONS.md #6.
export default function App() {
  const [view, setView] = useState(initialView);
  const savedScroll = useRef(0);
  const reduced = useReducedMotion();

  useScrollReveal([view]);

  const canUseViewTransition = useCallback(
    () => typeof document.startViewTransition === 'function' && !reduced,
    [reduced]
  );

  // Note: view-transition update callbacks must finish synchronously —
  // rendering (and rAF) is paused until their promise settles, so waiting
  // on rAF inside one deadlocks until the browser's bail-out timeout.
  // flushSync commits the new view so the scroll target exists immediately.
  const goToDetail = useCallback(
    (id) => {
      if (view === 'home') savedScroll.current = window.scrollY;
      history.replaceState(null, '', '#' + id);
      const apply = () => {
        flushSync(() => setView(id));
        window.scrollTo(0, 0);
      };
      if (canUseViewTransition()) document.startViewTransition(apply);
      else apply();
    },
    [view, canUseViewTransition]
  );

  const goHome = useCallback(
    (targetId, restoreY) => {
      const apply = () => {
        flushSync(() => setView('home'));
        let y = restoreY;
        if (y == null) {
          const t = document.getElementById(targetId);
          y = t ? window.scrollY + t.getBoundingClientRect().top - navOffset() : 0;
        }
        window.scrollTo(0, y);
        history.replaceState(null, '', '#' + targetId);
      };
      if (canUseViewTransition()) document.startViewTransition(apply);
      else apply();
    },
    [canUseViewTransition]
  );

  const jumpOnHome = useCallback(
    (targetId) => {
      const target = document.getElementById(targetId);
      if (!target) return;
      if (!canUseViewTransition()) {
        window.scrollTo(0, window.scrollY + target.getBoundingClientRect().top - navOffset());
        history.replaceState(null, '', '#' + targetId);
        return;
      }
      document.startViewTransition(() => {
        const rect = target.getBoundingClientRect();
        window.scrollTo(0, window.scrollY + rect.top - navOffset());
        history.replaceState(null, '', '#' + targetId);
      });
    },
    [canUseViewTransition]
  );

  // Logo click: scroll to the top of the current page when already on the
  // home page, so it doesn't silently do nothing (there's no #home section).
  const scrollHomeToTop = useCallback(() => {
    const apply = () => window.scrollTo(0, 0);
    if (canUseViewTransition()) document.startViewTransition(apply);
    else apply();
  }, [canUseViewTransition]);

  const handleNavigate = useCallback(
    (id) => {
      if (detailViewIds.includes(id)) {
        goToDetail(id);
        return;
      }
      if (view !== 'home') {
        // Logo click from a case study restores wherever the reader left
        // off on the home page, same as returning via the 'work' link.
        goHome(id, id === 'work' || id === 'home' ? savedScroll.current : null);
        return;
      }
      if (id === 'home') {
        scrollHomeToTop();
        return;
      }
      jumpOnHome(id);
    },
    [view, goToDetail, goHome, jumpOnHome, scrollHomeToTop]
  );

  const activeStudy = view !== 'home' ? getCaseStudy(view) : null;

  return (
    <div className="app-shell">
      <ZineIntro />
      <GrainOverlay />
      <CursorNote />
      <SpreadIndicator view={view} />
      <Nav onNavigate={handleNavigate} />

      {/* Homepage order (user-specified): Hero → Featured Work → About →
          The Usual Order → Contact */}
      {view === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <WorkSection onNavigate={handleNavigate} />
          <AboutSection />
          <SkillsSection />
        </>
      )}

      {activeStudy && <CaseStudyDetail key={activeStudy.id} study={activeStudy} onNavigate={handleNavigate} />}

      {view === 'home' && <ContactSection onNavigate={handleNavigate} />}
    </div>
  );
}
