import { useCallback, useRef, useState } from 'react';
import Nav from './components/Nav';
import GrainOverlay from './components/GrainOverlay';
import Hero from './sections/Hero';
import WorkSection from './sections/WorkSection';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
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

  const goToDetail = useCallback(
    (id) => {
      if (view === 'home') savedScroll.current = window.scrollY;
      history.replaceState(null, '', '#' + id);
      const apply = () =>
        new Promise((resolve) => {
          setView(id);
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              window.scrollTo(0, 0);
              resolve();
            })
          );
        });
      if (canUseViewTransition()) document.startViewTransition(apply);
      else apply();
    },
    [view, canUseViewTransition]
  );

  const goHome = useCallback(
    (targetId, restoreY) => {
      const apply = () =>
        new Promise((resolve) => {
          setView('home');
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              let y = restoreY;
              if (y == null) {
                const t = document.getElementById(targetId);
                y = t ? window.scrollY + t.getBoundingClientRect().top : 0;
              }
              window.scrollTo(0, y);
              history.replaceState(null, '', '#' + targetId);
              resolve();
            })
          );
        });
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
        window.scrollTo(0, window.scrollY + target.getBoundingClientRect().top);
        history.replaceState(null, '', '#' + targetId);
        return;
      }
      document.startViewTransition(() => {
        const rect = target.getBoundingClientRect();
        window.scrollTo(0, window.scrollY + rect.top);
        history.replaceState(null, '', '#' + targetId);
      });
    },
    [canUseViewTransition]
  );

  const handleNavigate = useCallback(
    (id) => {
      if (detailViewIds.includes(id)) {
        goToDetail(id);
        return;
      }
      if (view !== 'home') {
        goHome(id, id === 'work' ? savedScroll.current : null);
        return;
      }
      jumpOnHome(id);
    },
    [view, goToDetail, goHome, jumpOnHome]
  );

  const activeStudy = view !== 'home' ? getCaseStudy(view) : null;

  return (
    <div className="app-shell">
      <GrainOverlay />
      <Nav onNavigate={handleNavigate} />

      {view === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <WorkSection onNavigate={handleNavigate} />
          <SkillsSection />
          <AboutSection />
        </>
      )}

      {activeStudy && <CaseStudyDetail study={activeStudy} onNavigate={handleNavigate} />}

      {view === 'home' && <ContactSection onNavigate={handleNavigate} />}
    </div>
  );
}
