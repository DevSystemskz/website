"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/components/i18n/I18nProvider";

const social = [
  { href: "https://t.me/almatdev", label: "Telegram" },
];

export function Footer() {
  const { m } = useI18n();
  const year = new Date().getFullYear();
  const footerLinks = {
    company: [
      { href: "/pricing", label: m.footer.pricing },
      { href: "/blog", label: m.footer.blog },
      { href: "/#portfolio", label: m.footer.portfolio },
      { href: "/#about", label: m.footer.about },
      { href: "/#team", label: m.footer.team },
      { href: "/#contact", label: m.footer.contact },
    ],
    services: [
      { href: "/#services", label: m.footer.web },
      { href: "/#services", label: m.footer.mobile },
      { href: "/#services", label: m.footer.integrations },
    ],
    legal: [
      { href: "/privacy", label: m.footer.privacy },
      { href: "/terms", label: m.footer.terms },
    ],
  };

  return (
    <footer className="border-t border-line bg-canvas-muted dark:border-line-dark dark:bg-canvas-dark">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-xl font-bold text-ink transition hover:text-accent dark:text-white dark:hover:text-accent"
            >
              DevSystems
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted dark:text-ink-faint">
              {m.footer.description}
            </p>
            <div className="mt-4 flex gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-mono text-sm text-ink-muted transition hover:text-accent dark:text-ink-faint dark:hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink-muted dark:text-ink-faint">
              {m.footer.company}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition hover:text-ink dark:text-ink-faint dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink-muted dark:text-ink-faint">
              {m.footer.services}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition hover:text-ink dark:text-ink-faint dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-ink-muted dark:text-ink-faint">
              {m.footer.legal}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition hover:text-ink dark:text-ink-faint dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8 text-center font-mono text-xs text-ink-faint dark:border-line-dark">
          © {year} DevSystems. {m.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
