"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/components/i18n/I18nProvider";

const social = [
  { href: "#", label: "Telegram" },
  { href: "#", label: "LinkedIn" },
];

export function Footer() {
  const { m } = useI18n();
  const year = new Date().getFullYear();
  const footerLinks = {
    company: [
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
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
            >
              DevSystems
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-600 dark:text-slate-400">
              {m.footer.description}
            </p>
            <div className="mt-4 flex gap-4">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              {m.footer.company}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              {m.footer.services}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              {m.footer.legal}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800">
          © {year} DevSystems. {m.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
