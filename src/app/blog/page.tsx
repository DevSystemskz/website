import type { Metadata } from "next";
import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Блог / Blog — DevSystems",
  description:
    "Статьи DevSystems о разработке ПО: архитектура, AI, блокчейн и запуск цифровых продуктов.",
};

const POSTS_PER_PAGE = 4;

type BlogPageProps = {
  searchParams?: Promise<{ page?: string; topic?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {};
  const rawPage = Number.parseInt(params.page ?? "1", 10);
  const currentPage = Number.isNaN(rawPage) ? 1 : Math.max(1, rawPage);
  const selectedTopic = params.topic?.trim() ?? "";

  const allPosts = getAllPostsMeta();
  const filteredPosts = selectedTopic
    ? allPosts.filter((post) => post.tag.toLowerCase() === selectedTopic.toLowerCase())
    : allPosts;
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const pagePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <BlogPageClient
      posts={pagePosts}
      allPosts={allPosts}
      selectedTopic={selectedTopic}
      currentPage={safePage}
      totalPages={totalPages}
    />
  );
}

