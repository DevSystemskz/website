const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "GraphQL",
  "React Native",
  "AI / RAG",
  "Solidity",
  "Redis",
];

export function TechMarquee() {
  const track = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-line bg-canvas-muted py-3 dark:border-line-dark dark:bg-canvas-elevated-dark"
      aria-hidden
    >
      <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas-muted to-transparent dark:from-canvas-elevated-dark" />
      <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas-muted to-transparent dark:from-canvas-elevated-dark" />
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-faint"
          >
            <span className="text-accent">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
