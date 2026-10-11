import { contactLinks } from "@/lib/contact";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://devsystems.dev"
).replace(/\/$/, "");

export const SITE_NAME = "DevSystems";

export const SITE_DESCRIPTION =
  "Веб-студия в Астане: лендинги и MVP под заявки. Дизайн, разработка, SEO-база и запуск. Оценка за 1–2 дня.";

export function siteJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        url: SITE_URL,
        email: contactLinks.email,
        telephone: "+77761244111",
        sameAs: [contactLinks.telegram, contactLinks.whatsapp],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Астана",
          addressCountry: "KZ",
        },
        areaServed: ["KZ", "Астана"],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "ru",
        publisher: { "@id": orgId },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        provider: { "@id": orgId },
        areaServed: {
          "@type": "City",
          name: "Астана",
        },
        email: contactLinks.email,
        telephone: "+77761244111",
      },
    ],
  };
}
