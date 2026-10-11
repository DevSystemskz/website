import { contactLinks } from "@/lib/contact";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://devsystems.dev"
).replace(/\/$/, "");

export const SITE_NAME = "DevSystems";

export const SITE_DESCRIPTION =
  "Веб-студия в Астане: лендинги под заявки и MVP для стартапов. Дизайн, разработка, запуск. Оценка за 1–2 дня.";

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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги DevSystems",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Лендинг под заявки",
              description:
                "Оффер, вёрстка под телефон, формы WhatsApp/Telegram, SEO-база и запуск. Оценка за 1–2 дня.",
              priceCurrency: "KZT",
              price: "200000",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "KZT",
                minPrice: 200000,
                maxPrice: 500000,
              },
              url: `${SITE_URL}/pricing`,
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              name: "Web MVP для стартапов",
              description:
                "Узкий срез продукта: auth, админка, ключевые сценарии, API. Фиксированные этапы и демо.",
              priceCurrency: "KZT",
              price: "1500000",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "KZT",
                minPrice: 1500000,
              },
              url: `${SITE_URL}/pricing`,
            },
            {
              "@type": "Offer",
              name: "Корпоративный сайт",
              description:
                "Многостраничный сайт с услугами, кейсами и локальной SEO-структурой.",
              priceCurrency: "KZT",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "KZT",
                minPrice: 500000,
                maxPrice: 1500000,
              },
              url: `${SITE_URL}/pricing`,
            },
          ],
        },
      },
    ],
  };
}
