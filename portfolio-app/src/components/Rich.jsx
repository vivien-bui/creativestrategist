// Renders text with *word* segments as italic <em> (optionally colored) and
// "\n\n" as a paragraph-internal line break. Used for case-study titles,
// insight lines, idea copy and the about-section pull quote.
function renderLine(line, emColor) {
  const parts = line.split(/\*(.+?)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} style={emColor ? { color: emColor } : undefined}>
        {part}
      </em>
    ) : (
      part
    )
  );
}

export default function Rich({ text, emColor, as: Tag = 'span', className, style }) {
  const lines = text.split('\n');
  return (
    <Tag className={className} style={style}>
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && (
            <>
              <br />
              <br />
            </>
          )}
          {renderLine(line, emColor)}
        </span>
      ))}
    </Tag>
  );
}
