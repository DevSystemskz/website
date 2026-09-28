import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioCaseClient } from "@/components/portfolio/PortfolioCaseClient";
import {
  getAllPortfolioProjects,
  getPortfolioProject,
} from "@/lib/portfolio";
import { SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPortfolioProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return { title: { absolute: "Кейс не найден — DevSystems" } };

  const ru = project.locales.ru;
  const url = `/portfolio/${slug}`;
  return {
    title: ru.title,
    description: ru.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ru.title,
      description: ru.summary,
      url,
      images: project.imageSrc ? [{ url: project.imageSrc, alt: ru.imageAlt }] : undefined,
    },
  };
}

export default async function PortfolioCasePage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) notFound();

  const ru = project.locales.ru;
  const url = `${SITE_URL}/portfolio/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: ru.title,
    description: ru.summary,
    url,
    image: project.imageSrc || undefined,
    dateCreated: project.year,
    creator: {
      "@type": "Organization",
      name: "DevSystems",
      url: SITE_URL,
    },
    about: ru.industry,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioCaseClient project={project} />
    </>
  );
}
