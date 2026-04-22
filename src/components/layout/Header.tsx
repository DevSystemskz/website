"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";
import { useAuth } from "@/components/auth/AuthProvider";

const SECTION_IDS = ["services", "portfolio", "about", "process", "team", "contact"] as const;
const BASE_LINK_CLASS =
  "text-sm font-medium transition";

export function Header() {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const accountRef = useRef<HTMLDivElement | null>(null);
  const { m } = useI18n();
  const { user, logout, isReady } = useAuth();
  const pathname = usePathname();
  const navLinks = useMemo(
    () => [
      { href: "/#services", label: m.nav.services },
      { href: "/blog", label: m.nav.blog },
      { href: "/#portfolio", label: m.nav.portfolio },
      { href: "/#about", label: m.nav.about },
      { href: "/#process", label: m.nav.process },
      { href: "/#team", label: m.nav.team },
      { href: "/#contact", label: m.nav.contact },
    ],
    [m.nav],
  );
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
    setAccountOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const nextIsCompact = window.scrollY > 24;
      setIsCompact((prev) => (prev === nextIsCompact ? prev : nextIsCompact));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.35, 0.5], rootMargin: "-25% 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!accountRef.current) return;
      if (!accountRef.current.contains(event.target as Node)) {
        setAccountOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const activeHref = useMemo(() => {
    if (pathname.startsWith("/blog")) return "/blog";
    return activeSection ? `/#${activeSection}` : "";
  }, [pathname, activeSection]);

  const getLinkClass = useCallback(
    (href: string) => {
      const isActive = href === activeHref;
      return `${BASE_LINK_CLASS} ${
        isActive
          ? "text-indigo-600 dark:text-indigo-300"
          : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
      }`;
    },
    [activeHref],
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-all dark:border-slate-800/50 dark:bg-slate-900/80">
      <Container>
        <nav className={`flex items-center justify-between transition-all ${isCompact ? "h-14" : "h-16 lg:h-20"}`}>
          <Link
            href="/"
            className="text-xl font-bold text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
          >
            DevSystems
          </Link>

          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={getLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageToggle />
            <ThemeToggle />
            <div className="relative" ref={accountRef}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAccountOpen((prev) => !prev)}
              >
                {isReady && user ? user.name : "Аккаунт"}
              </Button>
              {accountOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
                  {isReady && user ? (
                    <div className="p-1">
                      <Link
                        href="/profile"
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={() => setAccountOpen(false)}
                      >
                        Профиль
                      </Link>
                      <button
                        type="button"
                        className="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                        onClick={() => {
                          logout();
                          setAccountOpen(false);
                        }}
                      >
                        Выйти
                      </button>
                    </div>
                  ) : (
                    <div className="p-1">
                      <Link
                        href="/auth/login"
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={() => setAccountOpen(false)}
                      >
                        Войти
                      </Link>
                      <Link
                        href="/auth/register"
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={() => setAccountOpen(false)}
                      >
                        Регистрация
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Button href="/#contact" variant="primary" size="sm">
              {m.nav.discussBtn}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
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
          <div className="border-t border-slate-200 py-4 dark:border-slate-800 lg:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={getLinkClass(link.href)}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="grid grid-cols-2 gap-2 pt-2">
                {isReady && user ? (
                  <>
                    <Button href="/profile" variant="outline" size="sm">
                      Профиль
                    </Button>
                    <Button variant="ghost" size="sm" className="!px-3" onClick={logout}>
                      Выйти
                    </Button>
                  </>
                ) : (
                  <>
                    <Button href="/auth/login" variant="outline" size="sm">
                      Войти
                    </Button>
                    <Button href="/auth/register" variant="ghost" size="sm">
                      Регистрация
                    </Button>
                  </>
                )}
                <Button href="/#contact" variant="primary" size="sm" className="col-span-2">
                  {m.nav.discussBtn}
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}
