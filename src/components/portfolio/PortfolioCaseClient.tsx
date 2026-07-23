"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/components/i18n/I18nProvider";
import {
  getLocalizedProject,
  type PortfolioProject,
} from "@/lib/portfolio";

type Props = {
  project: PortfolioProject;
};

export function PortfolioCaseClient({ project }: Props) {
  const { m, locale } = useI18n();
  const caseData = getLocalizedProject(locale, project);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-canvas pt-24 dark:bg-canvas-dark">
        <Container className="py-12 lg:py-16">
          <Link
            href="/#portfolio"
            className="mb-8 inline-flex font-mono text-sm text-accent transition hover:text-accent-hover"
          >
            {m.sections.portfolioBack}
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <article>
              <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-xs text-ink-faint">
                <span className="border border-line bg-accent-muted px-2.5 py-1 text-accent dark:border-line-dark">
                  {caseData.industry}
                </span>
                <span>{caseData.year}</span>
                <span>·</span>
                <span>
                  {m.sections.portfolioDuration}: {caseData.duration}
                </span>
              </div>

              <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
                {caseData.title}
              </h1>
              <p className="mt-4 text-lg text-ink-muted dark:text-ink-faint">
                {caseData.summary}
              </p>

              <div className="relative mt-8 h-64 w-full overflow-hidden border border-line bg-canvas-muted sm:h-80 dark:border-line-dark dark:bg-canvas-elevated-dark">
                <Image
                  src={caseData.imageSrc}
                  alt={caseData.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                  priority
                />
              </div>

              <section className="mt-10">
                <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
                  {m.sections.portfolioChallenge}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted dark:text-ink-faint">
                  {caseData.challenge}
                </p>
              </section>

              <section className="mt-8">
                <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
                  {m.sections.portfolioSolution}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted dark:text-ink-faint">
                  {caseData.solution}
                </p>
              </section>

              <section className="mt-8">
                <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
                  {m.sections.portfolioResults}
                </h2>
                <ul className="mt-3 space-y-2">
                  {caseData.results.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-ink-muted dark:text-ink-faint"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="border border-line bg-canvas-elevated p-5 dark:border-line-dark dark:bg-canvas-elevated-dark">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                  {m.sections.portfolioStack}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {caseData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line bg-canvas-muted px-2.5 py-0.5 font-mono text-xs text-ink-muted dark:border-line-dark dark:bg-canvas-dark dark:text-ink-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px border border-line bg-line dark:border-line-dark dark:bg-line-dark">
                {caseData.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-canvas-elevated px-4 py-4 dark:bg-canvas-elevated-dark"
                  >
                    <p className="font-display text-2xl font-bold text-ink dark:text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-ink-muted dark:text-ink-faint">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border border-accent/30 bg-accent-muted p-5">
                <h3 className="font-display text-base font-semibold text-ink dark:text-white">
                  {m.sections.portfolioCtaTitle}
                </h3>
                <p className="mt-2 text-sm text-ink-muted dark:text-ink-faint">
                  {m.sections.portfolioCtaDesc}
                </p>
                <div className="mt-4">
                  <Button href="/#contact" variant="primary" size="md">
                    {m.sections.leaveRequest}
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
