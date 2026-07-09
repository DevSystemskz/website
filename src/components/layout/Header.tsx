"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";
import { smoothEase } from "@/lib/motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { m } = useI18n();
  const navLinks = [
    { href: "/#services", label: m.nav.services },
    { href: "/pricing", label: m.nav.pricing },
    { href: "/#portfolio", label: m.nav.portfolio },
    { href: "/blog", label: m.nav.blog },
    { href: "/#contact", label: m.nav.contact },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-xl dark:border-line-dark dark:bg-canvas-dark/85"
      initial={reduce ? false : { y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: smoothEase }}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link
            href="/"
            className="group flex items-baseline gap-1 font-display text-xl font-bold text-ink transition hover:text-accent dark:text-white dark:hover:text-accent"
          >
            DevSystems
            <span className="font-mono text-[10px] font-normal text-accent opacity-0 transition group-hover:opacity-100">
              .dev
            </span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-ink-muted transition hover:text-ink dark:text-ink-faint dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <ThemeToggle />
            <Button href="/#contact" variant="outline" size="sm">
              {m.nav.contactBtn}
            </Button>
            <Button href="/#contact" variant="primary" size="sm">
              {m.nav.discussBtn}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(!open)}
              aria-label="Меню"
            >
              <span
                className={`block h-0.5 w-6 bg-ink transition dark:bg-white ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-ink transition dark:bg-white ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-ink transition dark:bg-white ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-line py-4 dark:border-line-dark md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-ink-muted hover:text-ink dark:text-ink-faint dark:hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <Button href="/#contact" variant="outline" size="sm">
                  {m.nav.contactBtn}
                </Button>
                <Button href="/#contact" variant="primary" size="sm">
                  {m.nav.discussBtn}
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </motion.header>
  );
}
