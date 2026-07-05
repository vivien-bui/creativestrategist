import { useEffect, useRef } from 'react';
import './Nav.css';

export default function Nav({ onNavigate }) {
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('nav--scrolled', window.scrollY > 8);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = (id) => (e) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <nav ref={navRef} className="nav" data-screen-label="Nav">
      <a href="#" className="nav__logo" onClick={link('home')}>
        <span className="nav__logo-name">vivien bui</span>
        <span className="nav__logo-vol">( vol. 01 — sydney )</span>
      </a>
      <div className="nav__links">
        <a href="#work" onClick={link('work')} className="nav__link">work</a>
        <a href="#about" onClick={link('about')} className="nav__link">about</a>
        <a href="#skills" onClick={link('skills')} className="nav__link">skills</a>
        <a href="#contact" onClick={link('contact')} className="nav__contact" data-cursor-note="let's talk">
          contact
        </a>
      </div>
    </nav>
  );
}
