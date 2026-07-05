// Hand-drawn-style doodle icons, standing in for emoji glyphs so the mark
// renders identically everywhere instead of depending on the OS emoji font.
// Single currentColor stroke, slightly imperfect paths for a sketched feel.

export function SparkleDoodle({ className, size = 18 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5c.6 3.6 1.4 6 2.9 7.6 1.5 1.5 3.9 2.3 7.1 2.9-3.2.6-5.6 1.4-7.1 2.9-1.5 1.6-2.3 4-2.9 7.6-.6-3.6-1.4-6-2.9-7.6-1.5-1.5-3.9-2.3-7.1-2.9 3.2-.6 5.6-1.4 7.1-2.9 1.5-1.6 2.3-4 2.9-7.6Z" />
    </svg>
  );
}

export function StampDoodle({ className, size = 26 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.6 14 8l5.4.4-4.2 3.6 1.4 5.3L12 14.4l-4.6 2.9 1.4-5.3-4.2-3.6L10 8Z" />
      <circle cx="12" cy="11" r="9.6" strokeDasharray="2.2 3" />
    </svg>
  );
}

export function SwipeDoodle({ className, size = 16 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 12c3-2.4 6-2.4 9 0s6 2.4 9 0" />
      <path d="M16.5 8.2 20.5 12l-4 3.8" />
    </svg>
  );
}

export function CompassDoodle({ className, size = 48 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.4" />
      <path d="M14.8 7.4 12.6 12.9 7.3 15l2.2-5.5Z" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TrophyDoodle({ className, size = 18 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 3.5h10v5.2c0 3.1-2.1 5.6-5 6.1-2.9-.5-5-3-5-6.1Z" />
      <path d="M7 4.6H4.2c-.2 2.6.9 4.6 3.1 5.3" />
      <path d="M17 4.6h2.8c.2 2.6-.9 4.6-3.1 5.3" />
      <path d="M12 14.8v3" />
      <path d="M8.6 21.2c.7-1.8 2-2.6 3.4-2.6s2.7.8 3.4 2.6" />
    </svg>
  );
}

export function HeartDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21.2C8.4 18.2 3 13.8 3 8.8c0-2.8 2.2-5.3 5-5.3 1.8 0 3.2 1 4 2.3.8-1.3 2.2-2.3 4-2.3 2.8 0 5 2.5 5 5.3 0 5-5.4 9.4-9 12.4Z" />
    </svg>
  );
}

export function PencilDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 20.6 8 19l12.2-12.2c.6-.6.6-1.6 0-2.2l-.8-.8c-.6-.6-1.6-.6-2.2 0L5 16l-1.5 4.6Z" />
      <path d="M14.8 5.4l3.8 3.8" />
    </svg>
  );
}

export function BookmarkDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.5 3.5h13v18l-6.5-4.2-6.5 4.2Z" />
    </svg>
  );
}

export function CoffeeDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 9h14v8c0 2.2-1.8 4-4 4h-6c-2.2 0-4-1.8-4-4V9Z" />
      <path d="M17.5 11h1.2c1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.7-2.8 2.7H17.5" />
      <path d="M7.5 3.5v3" />
      <path d="M10.5 2.5v4" />
      <path d="M13.5 3.5v3" />
    </svg>
  );
}

export function PinDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5c-3.3 0-6 2.6-6 5.8C6 13 12 21.5 12 21.5s6-8.5 6-13.2c0-3.2-2.7-5.8-6-5.8Z" />
      <circle cx="12" cy="8.5" r="2.2" />
    </svg>
  );
}

export function TapeDoodle({ className, size = 60 }) {
  return (
    <svg className={className} width={size} height={Math.round(size * 0.35)} viewBox="0 0 80 28" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="76" height="22" rx="1" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" />
      <line x1="6" y1="14" x2="74" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

export function PaperclipDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18.5 8.2v8.3c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5V6.8c0-2.4 2-4.3 4.3-4.3s4.3 2 4.3 4.3v9.5c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V8.2" />
    </svg>
  );
}

export function EyeDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function LightningDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.5 2.5 5.5 14h6l-1.5 8 8-11.5h-6Z" />
    </svg>
  );
}

export function MusicNoteDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.5" cy="18" r="3" />
      <path d="M10.5 18V4.5l9-2.5v14" />
      <circle cx="16.5" cy="16" r="3" />
    </svg>
  );
}

export function ArrowDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12c4-6 8-6 16-1" />
      <path d="M16 6.5 20 11l-5.5 2" />
    </svg>
  );
}

export function StarDoodle({ className, size = 18 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.4 6.8H21l-5.3 4 2 6.7L12 15.8l-5.7 3.7 2-6.7-5.3-4h6.6Z" />
    </svg>
  );
}

export function ScribbleUnderline({ className, width = 120 }) {
  return (
    <svg className={className} width={width} height="8" viewBox="0 0 120 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M2 5.5c20-4 40-4 58-1s38 2 58-1" />
    </svg>
  );
}

export function DiaryStickerDoodle({ className, size = 48, label = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2.5" opacity="0.6" />
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      {label && <text x="24" y="26" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="'Mynerve', cursive" opacity="0.7">{label}</text>}
    </svg>
  );
}
