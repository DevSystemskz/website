import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  company: [
    { href: "#about", label: "О компании" },
    { href: "#team", label: "Команда" },
    { href: "#contact", label: "Контакты" },
  ],
  services: [
    { href: "#services", label: "Веб-разработка" },
    { href: "#services", label: "Мобильные приложения" },
    { href: "#services", label: "Интеграции" },
  ],
  legal: [
    { href: "/privacy", label: "Политика конфиденциальности" },
    { href: "/terms", label: "Условия использования" },
  ],
};

const social = [
  { href: "#", label: "Telegram" },
  { href: "#", label: "LinkedIn" },
];

export function Footer() {
  const year = new Date().getFullYear();

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
              Разработка программного обеспечения под ключ. Веб, мобильные приложения, облачные решения и поддержка.
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
              Компания
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
              Услуги
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
              Правовая информация
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
          © {year} DevSystems. Все права защищены.
        </div>
      </Container>
    </footer>
  );
}
