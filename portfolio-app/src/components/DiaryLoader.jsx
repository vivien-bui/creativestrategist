import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import './DiaryLoader.css';

const PHRASES = [
  'dear me, still proud of how this one turned out.',
  'note to self: this is the idea that almost got cut.',
  'note to self: three drafts later, this one finally worked.',
  'okay diary, where were we —',
  'okay diary, time to show them what I\'ve been working on.',
];

const HOLD_MS = 900;

// onComplete: called once, after the phrase has finished typing and held
// on screen — used to auto-dismiss when this runs as a boot splash rather
// than a standalone page.
export default function DiaryLoader({ onComplete, showReplay = true }) {
  const [typed, setTyped] = useState('');
  const [saveTime, setSaveTime] = useState('just now');
  const [phraseIndex, setPhraseIndex] = useState(() => Math.floor(Math.random() * PHRASES.length));
  const timer = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const phrase = PHRASES[phraseIndex % PHRASES.length];

    if (reduced) {
      setTyped(phrase);
      setSaveTime('just now');
      timer.current = setTimeout(() => onComplete?.(), HOLD_MS);
      return () => clearTimeout(timer.current);
    }

    let charIndex = 0;
    const type = () => {
      if (charIndex < phrase.length) {
        setTyped(phrase.slice(0, ++charIndex));
        timer.current = setTimeout(type, 55);
      } else {
        setSaveTime('just now');
        timer.current = setTimeout(() => onComplete?.(), HOLD_MS);
      }
    };
    timer.current = setTimeout(type, 400);

    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phraseIndex, reduced]);

  const handleReplay = () => {
    clearTimeout(timer.current);
    setTyped('');
    setSaveTime('…');
    setPhraseIndex((p) => (p + 1) % PHRASES.length);
  };

  return (
    <div className="diary-loader">
      <div className="diary-loader__center">
        <div className="diary-loader__doc">
          <div className="diary-loader__toolbar">
            <span className="diary-loader__dot"></span> entry.draft — unsaved changes
          </div>
          <div className="diary-loader__line">
            <span className="diary-loader__text">{typed}</span>
            <span className="diary-loader__caret"></span>
          </div>
          <div className="diary-loader__save">
            autosaved <em>{saveTime}</em>
          </div>
        </div>
      </div>
      {showReplay && (
        <button className="diary-loader__replay" onClick={handleReplay} aria-label="Replay animation">
          ↻ Replay
        </button>
      )}
    </div>
  );
}
