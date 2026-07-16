import { caseStudies } from '../data/caseStudies';
import { FeaturedWorkCard, GridWorkCard } from '../components/WorkCard';
import { SwipeDoodle, PaperclipDoodle } from '../components/Doodles';
import ZineLetters from '../components/ZineLetters';
import './WorkSection.css';

export default function WorkSection({ onNavigate }) {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);
  const featured = sorted.slice(0, 2);
  const rest = sorted.slice(2);

  return (
    <section id="work" data-screen-label="Selected Work" className="work">
      <div className="work__header">
        <h2 className="work__heading">
          <ZineLetters text="selected work" salt={6} />
        </h2>
        <span className="work__count"><strong><PaperclipDoodle size={13} className="work__count-doodle" /></strong> ( case studies )</span>
      </div>
      <p className="work__mobile-hint" aria-hidden="true">
        Swipe to explore all five <SwipeDoodle />
      </p>

      {/* display:contents by default (desktop): purely a grouping node, no
          layout of its own, so featured/grid cards render exactly as before.
          On mobile it becomes the horizontal snap-scroll track so all 5
          studies sit in one swipeable row instead of a long vertical stack. */}
      <div className="work__scroller" data-r="work-scroller">
        {featured.map((study) => (
          <FeaturedWorkCard key={study.id} study={study} onNavigate={onNavigate} />
        ))}

        <div className="work__grid3" data-r="grid3">
          {rest.map((study) => (
            <GridWorkCard key={study.id} study={study} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
