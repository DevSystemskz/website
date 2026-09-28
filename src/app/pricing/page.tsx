import type { Metadata } from "next";
import { PricingPageClient } from "@/components/pricing/PricingPageClient";

export const metadata: Metadata = {
  title: "Прайс на сайты и разработку",
  description:
    "Стоимость сайтов, MVP, мобильных приложений, AI-интеграций и поддержки в студии DevSystems. Оценка за 1–2 дня.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Прайс DevSystems",
    description:
      "Стоимость сайтов, MVP, приложений и поддержки. Оценка за 1–2 дня.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
