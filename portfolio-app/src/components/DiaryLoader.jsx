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

export default function DiaryLoader() {
  const [typed, setTyped] = useState('');
  const [saveTime, setSaveTime] = useState('just now');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const typeTimer = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const phrase = PHRASES[phraseIndex % PHRASES.length];
    let charIndex = 0;

    const type = () => {
      if (charIndex < phrase.length) {
        setTyped(phrase.slice(0, ++charIndex));
        typeTimer.current = setTimeout(type, 55);
      } else {
        setSaveTime('just now');
      }
    };

    typeTimer.current = setTimeout(type, reduced ? 0 : 400);

    return () => {
      if (typeTimer.current) clearTimeout(typeTimer.current);
    };
  }, [phraseIndex, reduced]);

  const handleReplay = () => {
    setTyped('');
    setSaveTime('…');
    setPhraseIndex((p) => p + 1);
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
      <button className="diary-loader__replay" onClick={handleReplay} aria-label="Replay animation">
        ↻ Replay
      </button>
    </div>
  );
}
