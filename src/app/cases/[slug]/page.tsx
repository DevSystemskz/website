import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePageClient } from "@/components/cases/CasePageClient";
import { caseSlugs, getCase } from "@/lib/cases";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug, "ru");
  if (!c) return { title: "Case — DevSystems" };
  return {
    title: `${c.title} — DevSystems`,
    description: c.summary,
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  if (!caseSlugs.includes(slug as (typeof caseSlugs)[number])) {
    notFound();
  }
  return <CasePageClient slug={slug} />;
}
