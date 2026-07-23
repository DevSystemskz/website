import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioCaseClient } from "@/components/portfolio/PortfolioCaseClient";
import {
  getAllPortfolioProjects,
  getPortfolioProject,
} from "@/lib/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPortfolioProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return { title: "Кейс не найден — DevSystems" };

  const ru = project.locales.ru;
  return {
    title: `${ru.title} — DevSystems`,
    description: ru.summary,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
  };
}

export default async function PortfolioCasePage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) notFound();

  return <PortfolioCaseClient project={project} />;
}
