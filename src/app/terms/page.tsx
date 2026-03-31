import type { Metadata } from "next";
import { TermsPageClient } from "@/components/legal/TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Use / Условия использования — DevSystems",
  description: "Terms of Use for DevSystems website and services.",
};

export default function TermsPage() {
  return <TermsPageClient />;
}
