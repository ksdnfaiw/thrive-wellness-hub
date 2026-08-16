export function Marquee({
  items,
  slow = false,
  className = "",
}: {
  items: string[];
  slow?: boolean;
  className?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div className={`marquee overflow-hidden ${className}`} aria-hidden="true">
      <div className={`marquee-track ${slow ? "marquee-slow" : ""}`}>
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-6 pr-6">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          </span>
        ))}
      </div>
    </div>
  );
}
