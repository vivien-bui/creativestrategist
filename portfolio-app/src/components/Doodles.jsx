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
