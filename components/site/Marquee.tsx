export default function Marquee({ items }: { items: string[] }) {
  const renderSet = (prefix: string) =>
    items.map((t, i) => (
      <span key={`${prefix}-${i}`}>
        {t} <em>•</em>
      </span>
    ));

  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {renderSet("a")}
        {renderSet("b")}
      </div>
    </div>
  );
}
