import Link from "next/link";
import { getLivePortfolioProjects } from "@/lib/portfolio";

const links = [
  { href: "/pricing", label: "Сколько стоит сайт" },
  { href: "/#contact", label: "Получить оценку за 2 дня" },
  { href: "/blog", label: "Все статьи блога" },
];

export function ArticleLinks({ currentSlug }: { currentSlug?: string }) {
  const cases = getLivePortfolioProjects().filter((project) => project.slug !== currentSlug);

  return (
    <nav className="mt-14 border-t border-line pt-8 dark:border-line-dark" aria-label="Ещё на сайте">
      <h2 className="font-display text-xl font-semibold text-ink dark:text-white">Ещё на сайте</h2>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-accent transition hover:text-accent-hover">
              {link.label}
            </Link>
          </li>
        ))}
        {cases.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/portfolio/${project.slug}`}
              className="text-accent transition hover:text-accent-hover"
            >
              Кейс: {project.locales.ru.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
