"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { type Locale, locales, messages } from "@/i18n/messages";

const KEY = "devsystems-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (value: Locale) => void;
  m: (typeof messages)[Locale];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function detectLocale(): Locale {
  if (typeof window === "undefined") return "ru";
  const stored = localStorage.getItem(KEY) as Locale | null;
  if (stored && locales.includes(stored)) return stored;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("kk")) return "kk";
  return lang.startsWith("ru") ? "ru" : "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  const setLocale = (value: Locale) => {
    setLocaleState(value);
    localStorage.setItem(KEY, value);
    document.documentElement.lang = value;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, m: messages[locale] }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

