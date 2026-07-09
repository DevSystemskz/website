"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/components/i18n/I18nProvider";

type PricingRow = {
  service: string;
  scope: string;
  price: string;
};

function PricingTable({
  title,
  serviceLabel,
  rows,
  formatLabel,
}: {
  title: string;
  serviceLabel: string;
  rows: readonly PricingRow[];
  formatLabel?: string;
}) {
  const { m } = useI18n();

  return (
    <section className="border border-line p-6 dark:border-line-dark">
      <h2 className="font-display text-xl font-semibold text-ink dark:text-white">{title}</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line dark:border-line-dark">
              <th className="py-3 pr-4 font-semibold text-ink-muted dark:text-ink-faint">
                {formatLabel ?? serviceLabel}
              </th>
              <th className="py-3 pr-4 font-semibold text-ink-muted dark:text-ink-faint">
                {m.pricing.colScope}
              </th>
              <th className="py-3 font-semibold text-ink-muted dark:text-ink-faint">
                {m.pricing.colPrice}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr
                key={item.service}
                className="border-b border-line/60 dark:border-line-dark/60"
              >
                <td className="py-3 pr-4 text-ink-muted dark:text-ink-faint">{item.service}</td>
                <td className="py-3 pr-4 text-ink-muted dark:text-ink-faint">{item.scope}</td>
                <td className="py-3 text-ink dark:text-white">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function PricingPageClient() {
  const { m } = useI18n();
  const p = m.pricing;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-canvas pt-24 dark:bg-canvas-dark">
        <Container className="py-12 lg:py-16">
          <div className="max-w-4xl">
            <p className="inline-flex border-l-2 border-accent pl-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {p.tag}
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
              {p.title}
            </h1>
            <p className="mt-4 text-lg text-ink-muted dark:text-ink-faint">{p.intro}</p>
          </div>

          <div className="mt-10 space-y-8">
            <PricingTable
              title={p.websitesTitle}
              serviceLabel={p.colService}
              rows={p.websiteServices}
            />
            <PricingTable
              title={p.productTitle}
              serviceLabel={p.colService}
              rows={p.productServices}
            />
            <PricingTable
              title={p.supportTitle}
              serviceLabel={p.colService}
              formatLabel={p.colFormat}
              rows={p.supportServices}
            />
          </div>

          <section className="mt-8 border border-accent/30 bg-accent-muted p-6">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
              {p.noteTitle}
            </h2>
            <p className="mt-3 text-ink-muted dark:text-ink-faint">{p.noteBody}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-muted dark:text-ink-faint">
              {p.noteBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/#contact" variant="primary" size="md">
                {p.cta}
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
