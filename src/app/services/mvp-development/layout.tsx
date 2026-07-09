import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP за 10–14 недель — DevSystems",
  description:
    "B2B SaaS, mobile и marketplaces: discovery, спринты, production-ready стек.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
