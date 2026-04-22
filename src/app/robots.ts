import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://devsystems.dev";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/privacy", "/terms"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

