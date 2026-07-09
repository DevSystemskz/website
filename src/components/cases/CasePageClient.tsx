"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/components/i18n/I18nProvider";
import { getCase } from "@/lib/cases";

export function CasePageClient({ slug }: { slug: string }) {
  const { locale, m } = useI18n();
  const c = getCase(slug, locale);

  if (!c) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <Link
            href="/#portfolio"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            ← {m.casePage.back}
          </Link>

          <div
            className={`mt-8 h-48 rounded-2xl bg-gradient-to-br ${c.gradient} sm:h-64`}
          />

          <p className="mt-8 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {c.industry}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-2 text-slate-500">{c.client}</p>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {c.summary}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {c.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/30"
              >
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {r.value}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {r.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {m.casePage.challenge}
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{c.challenge}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {m.casePage.solution}
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{c.solution}</p>
            </div>
          </div>

          <dl className="mt-10 flex flex-wrap gap-8 text-sm">
            <div>
              <dt className="font-medium text-slate-500">{m.casePage.duration}</dt>
              <dd className="mt-1 text-slate-900 dark:text-white">{c.duration}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">{m.casePage.team}</dt>
              <dd className="mt-1 text-slate-900 dark:text-white">{c.team}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">{m.casePage.stack}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-14">
            <Button href="/#contact" variant="primary" size="lg">
              {m.casePage.discuss}
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
