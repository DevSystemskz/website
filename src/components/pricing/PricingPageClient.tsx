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

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <section className="border border-accent/35 bg-gradient-to-br from-accent-muted via-canvas-elevated to-canvas-elevated p-6 dark:from-accent/15 dark:via-canvas-elevated-dark dark:to-canvas-elevated-dark sm:p-8">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {p.offerBadge}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                {p.offerTitle}
              </h2>
              <p className="mt-2 font-display text-2xl font-bold text-accent">{p.offerPrice}</p>
              <p className="mt-2 text-sm text-ink-muted dark:text-ink-faint">{p.offerTime}</p>
              <ul className="mt-5 space-y-2">
                {p.offerIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-muted dark:text-ink-faint"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-medium text-ink dark:text-white">
                {p.offerGuarantee}
              </p>
              <div className="mt-6">
                <Button href="/#contact" variant="primary" size="md">
                  {p.cta}
                </Button>
              </div>
            </section>

            <section className="border border-line bg-canvas-elevated p-6 dark:border-line-dark dark:bg-canvas-elevated-dark sm:p-8">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {p.mvpBadge}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                {p.mvpTitle}
              </h2>
              <p className="mt-2 font-display text-2xl font-bold text-accent">{p.mvpPrice}</p>
              <p className="mt-2 text-sm text-ink-muted dark:text-ink-faint">{p.mvpTime}</p>
              <ul className="mt-5 space-y-2">
                {p.mvpIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-muted dark:text-ink-faint"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-medium text-ink dark:text-white">
                {p.mvpGuarantee}
              </p>
              <div className="mt-6">
                <Button href="/#contact" variant="outline" size="md">
                  {p.cta}
                </Button>
              </div>
            </section>
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
