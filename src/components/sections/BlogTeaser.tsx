import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllPostsMeta } from "@/lib/blog";

export function BlogTeaser() {
  const posts = getAllPostsMeta().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="ds-section bg-white dark:bg-canvas-elevated-dark">
      <Container>
        <p className="inline-flex items-center gap-2 border-l-2 border-accent pl-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Блог
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
          Как делаем сайты
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-muted dark:text-ink-faint">
          Короткие разборы по запуску, структуре и заявкам.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full border border-line bg-canvas-elevated p-5 transition hover:border-accent dark:border-line-dark dark:bg-canvas-dark"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {post.tag}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-ink-muted dark:text-ink-faint">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/blog"
          className="mt-6 inline-flex font-mono text-sm text-accent transition hover:text-accent-hover"
        >
          Все статьи →
        </Link>
      </Container>
    </section>
  );
}
