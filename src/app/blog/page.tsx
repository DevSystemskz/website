import type { Metadata } from "next";
import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { getAllPostsMeta } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const POSTS_PER_PAGE = 50;

type BlogPageProps = {
  searchParams?: Promise<{ page?: string; topic?: string }>;
};

export async function generateMetadata({
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const params = (await searchParams) ?? {};
  const page = Number.parseInt(params.page ?? "1", 10);
  const topic = params.topic?.trim();
  const isIndexable = !topic && (Number.isNaN(page) || page <= 1);

  return {
    title: "Блог о разработке",
    description:
      "Статьи DevSystems о разработке сайтов, архитектуре, AI и запуске цифровых продуктов.",
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      title: "Блог DevSystems",
      description:
        "Статьи о разработке сайтов, архитектуре, AI и запуске продуктов.",
      url: "/blog",
    },
    robots: isIndexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

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
  const showIndex = !selectedTopic && safePage === 1;
  const itemList = showIndex
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Блог DevSystems",
        itemListElement: allPosts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/blog/${post.slug}`,
          name: post.title,
        })),
      }
    : null;

  return (
    <>
      {itemList && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      )}
      <BlogPageClient
        posts={pagePosts}
        allPosts={allPosts}
        selectedTopic={selectedTopic}
        currentPage={safePage}
        totalPages={totalPages}
      />
    </>
  );
}
