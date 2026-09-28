import type { Metadata } from "next";
import { TermsPageClient } from "@/components/legal/TermsPageClient";

export const metadata: Metadata = {
  title: { absolute: "Условия использования — DevSystems" },
  description: "Условия использования сайта и сервисов DevSystems.",
  alternates: {
    canonical: "/terms",
  },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
