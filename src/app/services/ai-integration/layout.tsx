import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-интеграции и LLM/RAG — DevSystems",
  description:
    "Внедрение AI в продукт: RAG, чат-боты, агенты. PoC → production за 6–10 недель.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
