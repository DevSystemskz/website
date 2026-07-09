import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BlogBackLink } from "@/components/blog/BlogBackLink";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Статья не найдена — DevSystems" };

  return {
    title: `${post.title} — DevSystems`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-canvas pt-24 dark:bg-canvas-dark">
        <Container className="py-12 lg:py-16">
          <BlogBackLink />

          <article className="w-full max-w-3xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-sm text-ink-faint">
              <span className="border border-line bg-accent-muted px-2.5 py-1 text-xs text-accent dark:border-line-dark">
                {post.tag}
              </span>
              <span>{post.date}</span>
            </div>

            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
              {post.title}
            </h1>
            <p className="mt-3 text-lg text-ink-muted dark:text-ink-faint">{post.excerpt}</p>

            {post.imageSrc && (
              <div className="relative mt-8 h-64 w-full overflow-hidden border border-line bg-canvas-muted sm:h-80 dark:border-line-dark dark:bg-canvas-elevated-dark">
                <Image
                  src={post.imageSrc}
                  alt={post.imageAlt || post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="article-content mt-10 max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
