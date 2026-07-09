import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";
import { caseSlugs } from "@/lib/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://devsystems.dev";
  const now = new Date();
  const posts = getAllPostsMeta();

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => {
    const parsedDate = new Date(post.date);
    const lastModified = Number.isNaN(parsedDate.getTime()) ? now : parsedDate;
    return {
      url: `${base}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const casePages: MetadataRoute.Sitemap = caseSlugs.map((slug) => ({
    url: `${base}/cases/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/services/ai-integration`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/services/mvp-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...casePages,
    ...blogPages,
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
