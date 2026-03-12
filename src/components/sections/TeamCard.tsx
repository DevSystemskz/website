interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export function TeamCard({ name, role, bio, initials }: TeamCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-800/30 dark:hover:border-indigo-500/30">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-lg font-semibold text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
        {initials}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{name}</h3>
      <p className="text-sm text-indigo-600 dark:text-indigo-400">{role}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{bio}</p>
    </article>
  );
}
