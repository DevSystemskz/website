import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
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
      <main className="min-h-screen bg-white pt-24 dark:bg-slate-900">
        <Container className="py-12 lg:py-16">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            ← Назад в блог
          </Link>

          <article className="w-full">
            <div className="mb-5 flex items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                {post.tag}
              </span>
              <span>{post.date}</span>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              {post.title}
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{post.excerpt}</p>

            {post.imageSrc && (
              <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl bg-slate-200 sm:h-80 dark:bg-slate-800">
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
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ ...props }) => (
                    <h1 className="mb-4 mt-10 text-3xl font-bold leading-tight text-slate-900 dark:text-white" {...props} />
                  ),
                  h2: ({ ...props }) => (
                    <h2 className="mb-3 mt-8 text-2xl font-bold leading-tight text-slate-900 dark:text-white" {...props} />
                  ),
                  h3: ({ ...props }) => (
                    <h3 className="mb-2 mt-6 text-xl font-semibold leading-snug text-slate-900 dark:text-white" {...props} />
                  ),
                  p: ({ ...props }) => (
                    <p className="my-4 text-[17px] leading-8 text-slate-700 dark:text-slate-300" {...props} />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="my-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300" {...props} />
                  ),
                  ol: ({ ...props }) => (
                    <ol className="my-4 list-decimal space-y-2 pl-6 text-slate-700 dark:text-slate-300" {...props} />
                  ),
                  li: ({ ...props }) => <li className="leading-7" {...props} />,
                  blockquote: ({ ...props }) => (
                    <blockquote
                      className="my-6 rounded-r-xl border-l-4 border-indigo-500 bg-indigo-50 px-4 py-3 italic text-slate-700 dark:border-indigo-400 dark:bg-indigo-500/15 dark:text-slate-200"
                      {...props}
                    />
                  ),
                  a: ({ ...props }) => (
                    <a
                      className="font-medium text-indigo-600 underline decoration-2 underline-offset-2 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
                      {...props}
                    />
                  ),
                  code: ({ className, ...props }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                      return (
                        <code
                          className="block overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-100"
                          {...props}
                        />
                      );
                    }

                    return (
                      <code
                        className="rounded-md bg-slate-200 px-1.5 py-0.5 text-[0.9em] text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                        {...props}
                      />
                    );
                  },
                  table: ({ ...props }) => (
                    <div className="my-6 overflow-x-auto">
                      <table
                        className="w-full min-w-[560px] border-collapse overflow-hidden rounded-xl border border-slate-300 text-left text-sm dark:border-slate-700"
                        {...props}
                      />
                    </div>
                  ),
                  thead: ({ ...props }) => (
                    <thead className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200" {...props} />
                  ),
                  th: ({ ...props }) => (
                    <th className="border border-slate-300 px-3 py-2 font-semibold dark:border-slate-700" {...props} />
                  ),
                  td: ({ ...props }) => (
                    <td className="border border-slate-300 px-3 py-2 text-slate-700 dark:border-slate-700 dark:text-slate-300" {...props} />
                  ),
                  hr: ({ ...props }) => <hr className="my-8 border-slate-300 dark:border-slate-700" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

