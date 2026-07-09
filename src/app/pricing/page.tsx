import type { Metadata } from "next";
import { PricingPageClient } from "@/components/pricing/PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing / Прайс — DevSystems",
  description:
    "Service pricing for DevSystems: websites, MVPs, mobile apps, AI integrations, DevOps, and support.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
