"use client";

import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const options: Locale[] = ["ru", "kk", "en"];
  const labels: Record<Locale, string> = {
    ru: "RU",
    kk: "KZ",
    en: "EN",
  };

  return (
    <div className="inline-flex border border-line bg-canvas-elevated p-0.5 dark:border-line-dark dark:bg-canvas-elevated-dark">
      {options.map((opt) => {
        const active = locale === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLocale(opt)}
            className={`px-2.5 py-1 font-mono text-xs font-semibold uppercase transition ${
              active
                ? "bg-accent text-white"
                : "text-ink-muted hover:text-ink dark:text-ink-faint dark:hover:text-white"
            }`}
            aria-pressed={active}
          >
            {labels[opt]}
          </button>
        );
      })}
    </div>
  );
}
