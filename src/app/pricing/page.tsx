import type { Metadata } from "next";
import { PricingPageClient } from "@/components/pricing/PricingPageClient";

export const metadata: Metadata = {
  title: "Сколько стоит сайт",
  description:
    "Вилки цен на лендинг, корпоративный сайт, MVP и поддержку. Точная смета после брифа — за 1–2 дня.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Сколько стоит сайт — DevSystems",
    description:
      "Ориентиры по бюджету: лендинг от 200k, корпоративный сайт, MVP. Смета за 1–2 дня.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
