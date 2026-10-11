import type { Metadata } from "next";
import { PricingPageClient } from "@/components/pricing/PricingPageClient";

export const metadata: Metadata = {
  title: "Сколько стоят сайт и MVP",
  description:
    "Вилки цен на лендинг, MVP для стартапа, корпоративный сайт и поддержку. Смета за 1–2 дня.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Сколько стоят сайт и MVP — DevSystems",
    description:
      "Лендинг от 200k, Web MVP от 1.5 млн. Оценка и этапы за 1–2 дня.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
