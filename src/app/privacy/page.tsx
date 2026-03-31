import type { Metadata } from "next";
import { PrivacyPageClient } from "@/components/legal/PrivacyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy / Политика конфиденциальности — DevSystems",
  description:
    "Privacy Policy and personal data processing rules of DevSystems.",
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
