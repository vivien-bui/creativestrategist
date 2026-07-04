import './AwardCallout.css';

// Editorial achievement ribbon for a case-study detail page (currently
// Twisties' TikTok Award). Text renders verbatim from the data source.
export default function AwardCallout({ text }) {
  return (
    <div className="award-callout" data-r="award-callout">
      <span className="award-callout__rule" aria-hidden="true" />
      <span className="award-callout__text">{text}</span>
      <span className="award-callout__rule" aria-hidden="true" />
    </div>
  );
}
