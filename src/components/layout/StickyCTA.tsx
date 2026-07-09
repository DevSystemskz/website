"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/components/i18n/I18nProvider";
import { siteConfig } from "@/lib/site";

export function StickyCTA() {
  const { m } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/95 lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Button
          href={siteConfig.telegramUrl}
          variant="outline"
          size="sm"
          className="flex-1"
          external
        >
          {m.sticky.telegram}
        </Button>
        <Button href="/#contact" variant="primary" size="sm" className="flex-1">
          {m.sticky.estimate}
        </Button>
      </div>
    </div>
  );
}
