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
        <span className="inline-block text-sm font-medium uppercase tracking-wider text-indigo-600 mb-2 dark:text-indigo-400">
          {tag}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}
