"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";
import { type BlogPostMeta } from "@/lib/blog";

type SidebarData = {
  topicsTitle: string;
  topics: string[];
  latestTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

function getSidebarData(locale: Locale): SidebarData {
  if (locale === "en") {
    return {
      topicsTitle: "Topics",
      topics: [
        "Software Architecture",
        "AI in Products",
        "Blockchain",
        "Team Processes",
        "Performance",
      ],
      latestTitle: "Latest Posts",
      ctaTitle: "Need a technical partner?",
      ctaText: "We can help you design, build, and launch your product.",
      ctaButton: "Discuss project",
    };
  }

  if (locale === "kk") {
    return {
      topicsTitle: "Тақырыптар",
      topics: [
        "Бағдарламалық архитектура",
        "Өнімдегі AI",
        "Блокчейн",
        "Команда процестері",
        "Өнімділік",
      ],
      latestTitle: "Соңғы жазбалар",
      ctaTitle: "Техникалық серіктес керек пе?",
      ctaText: "Өнімді жобалау, әзірлеу және іске қосуда көмектесеміз.",
      ctaButton: "Жобаны талқылау",
    };
  }

  return {
    topicsTitle: "Темы",
    topics: [
      "Архитектура ПО",
      "AI в продуктах",
      "Блокчейн",
      "Процессы команды",
      "Производительность",
    ],
    latestTitle: "Последние записи",
    ctaTitle: "Нужен технический партнёр?",
    ctaText: "Поможем спроектировать, разработать и запустить ваш продукт.",
    ctaButton: "Обсудить проект",
  };
}

type BlogPageClientProps = {
  posts: BlogPostMeta[];
  allPosts: BlogPostMeta[];
  selectedTopic: string;
  currentPage: number;
  totalPages: number;
};

export function BlogPageClient({
  posts,
  allPosts,
  selectedTopic,
  currentPage,
  totalPages,
}: BlogPageClientProps) {
  const { m, locale } = useI18n();
  const sidebar = getSidebarData(locale);
  const prevLabel = locale === "en" ? "Previous" : locale === "kk" ? "Алдыңғы" : "Назад";
  const nextLabel = locale === "en" ? "Next" : locale === "kk" ? "Келесі" : "Вперёд";
  const allTopicsLabel = locale === "en" ? "All topics" : locale === "kk" ? "Барлық тақырыптар" : "Все темы";
  const noPostsLabel =
    locale === "en"
      ? "No posts found for this topic."
      : locale === "kk"
        ? "Бұл тақырып бойынша жазбалар табылмады."
        : "По этой теме записи не найдены.";
  const topics = Array.from(new Set(allPosts.map((post) => post.tag))).sort((a, b) => a.localeCompare(b));

  const createBlogHref = (page: number, topic?: string) => {
    const query = new URLSearchParams();
    if (topic) query.set("topic", topic);
    if (page > 1) query.set("page", String(page));
    const queryString = query.toString();
    return queryString ? `/blog?${queryString}` : "/blog";
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 dark:bg-slate-900">
        <Container className="py-12 lg:py-16">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            {m.sections.blogTitle}
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
            {m.sections.blogDesc}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="grid gap-6 grid-cols-1">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-800/30"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <Image
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 960px"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                        {post.tag}
                      </span>
                      <span className="text-xs text-slate-500">{post.date}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      {m.sections.readMore} →
                    </Link>
                  </div>
                </article>
              ))}
              {posts.length === 0 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-800/30 dark:text-slate-300">
                  {noPostsLabel}
                </div>
              )}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/30">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {sidebar.topicsTitle}
                </h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className={`text-sm transition ${
                        !selectedTopic
                          ? "font-semibold text-indigo-600 dark:text-indigo-300"
                          : "text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
                      }`}
                    >
                      {allTopicsLabel}
                    </Link>
                  </li>
                  {topics.map((topic) => {
                    const isActive = selectedTopic.toLowerCase() === topic.toLowerCase();
                    return (
                      <li key={topic}>
                        <Link
                          href={createBlogHref(1, topic)}
                          className={`text-sm transition ${
                            isActive
                              ? "font-semibold text-indigo-600 dark:text-indigo-300"
                              : "text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
                          }`}
                        >
                          {topic}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/30">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {sidebar.latestTitle}
                </h3>
                <ul className="mt-3 space-y-3">
                  {allPosts.slice(0, 3).map((post) => (
                    <li key={`latest-${post.slug}`}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-indigo-300 bg-indigo-50 p-5 dark:border-indigo-500/30 dark:bg-indigo-500/10">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {sidebar.ctaTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {sidebar.ctaText}
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex text-sm font-medium text-indigo-700 hover:text-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-200"
                >
                  {sidebar.ctaButton} →
                </Link>
              </section>
            </aside>
          </div>

          {totalPages > 1 && (
            <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Blog pagination">
              <Link
                href={createBlogHref(Math.max(1, currentPage - 1), selectedTopic || undefined)}
                aria-disabled={currentPage === 1 ? "true" : undefined}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  currentPage === 1
                    ? "pointer-events-none border-slate-200 text-slate-400 dark:border-slate-700 dark:text-slate-500"
                    : "border-slate-300 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                }`}
              >
                {prevLabel}
              </Link>

              {Array.from({ length: totalPages }, (_, idx) => {
                const page = idx + 1;
                const isActive = page === currentPage;

                return (
                  <Link
                    key={`page-${page}`}
                    href={createBlogHref(page, selectedTopic || undefined)}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-indigo-500 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-500"
                        : "border-slate-300 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                    }`}
                  >
                    {page}
                  </Link>
                );
              })}

              <Link
                href={createBlogHref(Math.min(totalPages, currentPage + 1), selectedTopic || undefined)}
                aria-disabled={currentPage === totalPages ? "true" : undefined}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  currentPage === totalPages
                    ? "pointer-events-none border-slate-200 text-slate-400 dark:border-slate-700 dark:text-slate-500"
                    : "border-slate-300 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                }`}
              >
                {nextLabel}
              </Link>
            </nav>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}

