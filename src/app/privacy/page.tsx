import type { Metadata } from "next";
import { PrivacyPageClient } from "@/components/legal/PrivacyPageClient";

export const metadata: Metadata = {
  title: { absolute: "Политика конфиденциальности — DevSystems" },
  description: "Как DevSystems обрабатывает персональные данные с сайта и заявок.",
  alternates: {
    canonical: "/privacy",
  },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
