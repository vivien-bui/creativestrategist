import './ColorDots.css';

// Each case study's real palette, shown as small circles — never generic
// decoration. See 03_COMPONENTS.md "Color-dot Swatch".
export default function ColorDots({ colors, size = 10, gap = 6 }) {
  return (
    <span className="color-dots" style={{ gap }}>
      {colors.map((c, i) => (
        <i
          key={i}
          className="color-dots__dot"
          style={{
            width: size,
            height: size,
            background: c.hex,
            border: c.bordered ? '1px solid rgba(43,36,48,0.15)' : 'none',
          }}
        />
      ))}
    </span>
  );
}
