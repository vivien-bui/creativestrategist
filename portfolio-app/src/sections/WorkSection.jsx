import { caseStudies } from '../data/caseStudies';
import { FeaturedWorkCard, GridWorkCard } from '../components/WorkCard';
import './WorkSection.css';

export default function WorkSection({ onNavigate }) {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);
  const featured = sorted.slice(0, 2);
  const rest = sorted.slice(2);

  return (
    <section id="work" data-screen-label="Selected Work" className="work">
      <div className="work__header">
        <h2 className="work__heading">Selected Work</h2>
        <span className="work__count">( 05 CASE STUDIES )</span>
      </div>

      {featured.map((study) => (
        <FeaturedWorkCard key={study.id} study={study} onNavigate={onNavigate} />
      ))}

      <div className="work__grid3" data-r="grid3">
        {rest.map((study) => (
          <GridWorkCard key={study.id} study={study} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  );
}
