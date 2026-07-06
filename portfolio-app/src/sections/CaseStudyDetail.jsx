import { useEffect, useRef } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ColorDots from '../components/ColorDots';
import Rich from '../components/Rich';
import StatBand from '../components/StatBand';
import AwardCallout from '../components/AwardCallout';
import AmbientBackdrop from '../components/AmbientBackdrop';
import { SparkleDoodle, BookmarkDoodle, PinDoodle } from '../components/Doodles';
import useReducedMotion from '../hooks/useReducedMotion';
import './CaseStudyDetail.css';

function Row({ label, accent, first, children }) {
  return (
    <div className={`detail-row${first ? ' detail-row--first' : ''}`} data-r="row-label" data-reveal>
      <div className="detail-row__label" style={{ color: accent }}>
        {label}
      </div>
      <div className="detail-row__content">{children}</div>
    </div>
  );
}

export default function CaseStudyDetail({ study, onNavigate }) {
  const { detail, accent, theme } = study;
  const heroRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        if (heroRef.current) {
          heroRef.current.style.transform = `translateY(${Math.min(window.scrollY * 0.06, 44)}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section
      id={study.id}
      data-screen-label={`${study.id} Detail`}
      className={`detail ${theme === 'light' ? 'detail--light' : 'detail--dark'}`}
      style={{ '--study-accent': accent }}
    >
      <AmbientBackdrop variant="detail" theme={theme} accent={accent} />
      <div className="detail__inner">
        <a
          href="#work"
          className="detail__back"
          data-reveal
          onClick={(e) => {
            e.preventDefault();
            onNavigate('work');
          }}
        >
          <BookmarkDoodle size={13} /> ← All work
        </a>

        <div className="detail__title-block" data-r="split-title" data-reveal>
          <div>
            <ColorDots colors={detail.dots} size={12} gap={8} />
            {detail.eyebrow && (
              <span className="detail__eyebrow" style={{ color: accent }}>
                <SparkleDoodle size={13} /> {detail.eyebrow}
              </span>
            )}
            <Rich as="h2" className="detail__title" text={detail.title} emColor={accent} />
          </div>
          <div className="detail__meta">
            {detail.meta.map(([label, value], i) => (
              <div
                key={label}
                className={`detail__meta-row ${i === detail.meta.length - 1 ? 'detail__meta-row--last' : ''}`}
              >
                <span className="detail__meta-label">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={heroRef} className="detail__hero-img" data-r="detail-hero-img" data-reveal>
          <ImagePlaceholder label={detail.heroLabel} radius={16} dark={theme !== 'light'} src={detail.heroSrc} />
        </div>

        {detail.award && <AwardCallout text={detail.award} />}

        {detail.stats && <StatBand stats={detail.stats} />}

        <Row label="The Insight" accent={accent} first>
          <Rich as="p" className="detail__insight" text={detail.insight} />
        </Row>

        <Row label="The Idea" accent={accent}>
          {detail.idea.map((p, i) => (
            <Rich as="p" key={i} className="detail__idea-p" text={p} />
          ))}
        </Row>

        {detail.lines && (
          <Row label="The Lines" accent={accent}>
            <div className="detail__lines">
              {detail.lines.map((line) => (
                <div key={line} className="detail__line" style={{ borderLeftColor: accent }}>
                  {line}
                </div>
              ))}
            </div>
          </Row>
        )}

        <div className="detail__images" data-r="split-images" data-reveal>
          {detail.images.map((img) => (
            <div key={img.id} className="detail__duo-img" data-r="duo-img">
              <ImagePlaceholder label={img.label} radius={12} dark={theme !== 'light'} src={img.src} />
            </div>
          ))}
        </div>

        {detail.scope && (
          <Row label="The Scope" accent={accent}>
            <div className="detail__tags">
              {detail.scope.map((t) => (
                <span key={t} className="detail__tag">
                  {t}
                </span>
              ))}
            </div>
          </Row>
        )}

        {detail.evolution && (
          <Row label="The Evolution" accent={accent}>
            <ul className="detail__evo-list">
              {detail.evolution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Row>
        )}

        {detail.press && (
          <Row label="The Press" accent={accent}>
            <div className="detail__press">
              {detail.press.map((p) => (
                <div key={p.source} className="detail__press-card">
                  <p>&ldquo;{p.quote}&rdquo;</p>
                  <div className="detail__press-source">{p.source}</div>
                </div>
              ))}
            </div>
          </Row>
        )}

        <a
          href={`#${detail.nextId}`}
          className="detail__next"
          data-r="next-cta"
          data-reveal
          onClick={(e) => {
            e.preventDefault();
            onNavigate(detail.nextId);
          }}
        >
          <span className="detail__next-label"><PinDoodle size={12} /> Next case study</span>
          <span className="detail__next-title">{detail.nextLabel}</span>
        </a>
      </div>
    </section>
  );
}
