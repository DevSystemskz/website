"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { type ServicePageKey, servicePages } from "@/i18n/messages";
import { useI18n } from "@/components/i18n/I18nProvider";
import { siteConfig } from "@/lib/site";

export function ServiceLanding({ pageKey }: { pageKey: ServicePageKey }) {
  const { locale, m } = useI18n();
  const page = servicePages[locale][pageKey];

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <Container>
          <Link
            href="/#services"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            ← {m.nav.services}
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {page.subtitle}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {page.description}
          </p>
          <ul className="mt-10 max-w-xl space-y-4">
            {page.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/#contact" variant="primary" size="lg">
              {page.cta}
            </Button>
            <Button
              href={siteConfig.calendlyUrl}
              variant="outline"
              size="lg"
              external
            >
              {m.hero.calendlyBtn}
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
