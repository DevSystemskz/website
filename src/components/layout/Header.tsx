"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О нас" },
  { href: "#process", label: "Процесс" },
  { href: "#team", label: "Команда" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-900/80">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="text-xl font-bold text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
          >
            DevSystems
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button href="#contact" variant="outline" size="sm">
              Связаться
            </Button>
            <Button href="#contact" variant="primary" size="sm">
              Обсудить проект
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(!open)}
              aria-label="Меню"
            >
              <span
                className={`block h-0.5 w-6 bg-slate-700 transition dark:bg-white ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-slate-700 transition dark:bg-white ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-slate-700 transition dark:bg-white ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-slate-200 py-4 dark:border-slate-800 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <Button href="#contact" variant="outline" size="sm">
                  Связаться
                </Button>
                <Button href="#contact" variant="primary" size="sm">
                  Обсудить проект
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
