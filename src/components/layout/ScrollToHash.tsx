"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash() {
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  if (!hash) return;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const schedule = () => {
      requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
    };

    schedule();
    window.addEventListener("hashchange", schedule);
    return () => window.removeEventListener("hashchange", schedule);
  }, [pathname]);

  return null;
}
