"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/I18nProvider";

export function BlogBackLink() {
  const { m } = useI18n();

  return (
    <Link
      href="/blog"
      className="mb-8 inline-flex font-mono text-sm text-accent transition hover:text-accent-hover"
    >
      {m.sections.blogBack}
    </Link>
  );
}
