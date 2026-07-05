import './ImagePlaceholder.css';

// Stands in for every real photo slot until Vivien drops in campaign
// photography / a headshot. Never a stock or generated image — see
// project/docs/04_IMAGES.md and 01_CLAUDE.md "Image Philosophy".
export default function ImagePlaceholder({ label, radius = 0, className = '', style, dark = false }) {
  return (
    <div
      className={`img-placeholder ${dark ? 'img-placeholder--dark' : ''} ${className}`}
      style={{ borderRadius: radius, ...style }}
      role="img"
      aria-label={label}
    >
      <svg className="img-placeholder__icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.4" />
        <path d="M21 15.5l-4.5-4.5-4 4-3-3-6.5 6.5" />
      </svg>
      <span className="img-placeholder__label">{label}</span>
    </div>
  );
}
