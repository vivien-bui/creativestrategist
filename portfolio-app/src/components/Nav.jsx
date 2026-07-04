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
      <div className="nav__logo">Vivien Bui</div>
      <div className="nav__links">
        <a href="#work" onClick={link('work')} className="nav__link">Work</a>
        <a href="#about" onClick={link('about')} className="nav__link">About</a>
        <a href="#skills" onClick={link('skills')} className="nav__link">Skills</a>
        <a href="#bag" onClick={link('bag')} className="nav__link">Bag</a>
        <a href="#contact" onClick={link('contact')} className="nav__contact">Contact</a>
      </div>
    </nav>
  );
}
