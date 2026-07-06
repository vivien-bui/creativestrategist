import ImagePlaceholder from './ImagePlaceholder';
import Rich from './Rich';
import { SparkleDoodle } from './Doodles';
import './WorkCard.css';

function navHandler(onNavigate, id) {
  return (e) => {
    e.preventDefault();
    onNavigate(id);
  };
}

export function FeaturedWorkCard({ study, onNavigate }) {
  const { workCard } = study;
  const imageFirst = workCard.variant === 'featured-a';

  const image = (
    <div className="work-featured__img" data-r="feature-img">
      <ImagePlaceholder label={workCard.imageLabel} src={workCard.imageSrc} imageStyle={workCard.imageStyle} />
    </div>
  );

  return (
    <a
      href={`#${study.id}`}
      className={`work-featured work-featured--${imageFirst ? 'a' : 'b'}`}
      data-r={imageFirst ? 'split-a' : 'split-b'}
      data-cursor-note="read the case study"
      onClick={navHandler(onNavigate, study.id)}
    >
      {imageFirst && image}
      <div className="work-featured__text">
        <div>
          <div className="work-featured__top">
            <span className="work-featured__index">{workCard.index} · {workCard.tag}</span>
          </div>
          {workCard.badge && (
            <span className="work-featured__badge">
              <SparkleDoodle size={12} /> {workCard.badge}
            </span>
          )}
          <h3 className="work-featured__title">
            <Rich text={workCard.title} />
          </h3>
          <p className="work-featured__desc">
            <Rich text={workCard.description} />
          </p>
        </div>
        <div className="work-featured__tags">
          {workCard.tags.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
      </div>
      {!imageFirst && image}
    </a>
  );
}

export function GridWorkCard({ study, onNavigate }) {
  const { workCard } = study;
  return (
    <a
      href={`#${study.id}`}
      className="work-grid-card"
      data-cursor-note="read the case study"
      onClick={navHandler(onNavigate, study.id)}
    >
      <div className="work-grid-card__img" data-r="thumb-img">
        <ImagePlaceholder label={workCard.imageLabel} src={workCard.imageSrc} imageStyle={workCard.imageStyle} />
      </div>
      <div className="work-grid-card__body">
        <div className="work-grid-card__top">
          <span className="work-grid-card__index">{workCard.index} · {workCard.tag}</span>
        </div>
        <h3 className="work-grid-card__title">
          <Rich text={workCard.title} />
        </h3>
        <p className="work-grid-card__desc">{workCard.description}</p>
      </div>
    </a>
  );
}
