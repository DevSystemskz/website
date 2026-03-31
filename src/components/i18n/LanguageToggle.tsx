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
    <div className="inline-flex rounded-lg border border-slate-300 bg-white p-1 dark:border-slate-700 dark:bg-slate-800">
      {options.map((opt) => {
        const active = locale === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLocale(opt)}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition ${
              active
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
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

