interface SectionTitleProps {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({
  tag,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {tag && (
        <span className="mb-3 inline-flex items-center gap-2 border-l-2 border-accent pl-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-ink-muted dark:text-ink-faint">{description}</p>
      )}
    </div>
  );
}
