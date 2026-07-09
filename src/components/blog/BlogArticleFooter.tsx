"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { type BlogFaqItem, type BlogPostMeta } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const SERVICE_LINKS: Record<string, { href: string; label: string }> = {
  "ai-integration": {
    href: "/services/ai-integration",
    label: "AI-интеграции и LLM/RAG",
  },
  "mvp-development": {
    href: "/services/mvp-development",
    label: "MVP за 10–14 недель",
  },
};

type Props = {
  post: BlogPostMeta;
  related: BlogPostMeta[];
  faq?: BlogFaqItem[];
};

export function BlogArticleFooter({ post, related, faq }: Props) {
  const service = post.relatedService
    ? SERVICE_LINKS[post.relatedService]
    : post.tag === "AI"
      ? SERVICE_LINKS["ai-integration"]
      : post.tag === "Архитектура" || post.tag === "DevOps"
        ? SERVICE_LINKS["mvp-development"]
        : undefined;

  return (
    <div className="mt-14 space-y-14 border-t border-slate-200 pt-14 dark:border-slate-800">
      {faq && faq.length > 0 && (
        <section id="faq">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Частые вопросы
          </h2>
          <dl className="mt-6 space-y-6">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/40"
              >
                <dt className="font-semibold text-slate-900 dark:text-white">
                  {item.q}
                </dt>
                <dd className="mt-2 text-slate-600 dark:text-slate-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {service && (
        <section className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-500/30 dark:bg-indigo-500/10 lg:p-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Нужна помощь с внедрением?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            DevSystems проектирует и запускает {service.label.toLowerCase()} в production:
            архитектура, разработка, метрики качества. Оценка за 48 часов.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={service.href} variant="outline" size="md">
              {service.label}
            </Button>
            <Button href="/#contact" variant="primary" size="md">
              Получить оценку
            </Button>
            <Button href={siteConfig.calendlyUrl} variant="ghost" size="md" external>
              15-min созвон
            </Button>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Читайте также
          </h2>
          <ul className="mt-6 space-y-4">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group block rounded-xl border border-slate-200 p-4 transition hover:border-indigo-400 dark:border-slate-800 dark:hover:border-indigo-500/50"
                >
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                    {r.tag}
                  </span>
                  <p className="mt-1 font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    {r.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {r.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="flex flex-wrap gap-4 text-sm font-medium">
        <Link href="/blog" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
          ← Все статьи блога
        </Link>
        <Link href="/#portfolio" className="text-slate-600 hover:text-slate-900 dark:text-slate-400">
          Кейсы DevSystems
        </Link>
        <Link href="/cases/ai-support-assistant" className="text-slate-600 hover:text-slate-900 dark:text-slate-400">
          Кейс: AI-ассистент поддержки
        </Link>
      </nav>
    </div>
  );
}
