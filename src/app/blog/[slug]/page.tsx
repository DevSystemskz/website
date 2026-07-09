import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BlogArticleFooter } from "@/components/blog/BlogArticleFooter";
import { getAllPostsMeta, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

const siteUrl = siteConfig.url;

export async function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Статья не найдена — DevSystems" };

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;

  return {
    title: `${title} — DevSystems`,
    description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      siteName: "DevSystems",
      locale: "ru_RU",
      ...(post.imageSrc ? { images: [{ url: post.imageSrc, alt: post.imageAlt }] } : {}),
    },
  };
}

function buildArticleJsonLd(post: NonNullable<ReturnType<typeof getPostBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Organization",
      name: "DevSystems",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "DevSystems",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    keywords: post.keywords?.join(", "),
    ...(post.imageSrc ? { image: post.imageSrc } : {}),
  };
}

function buildFaqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, post.tag, 3);
  const articleLd = buildArticleJsonLd(post);
  const faqLd = post.faq?.length ? buildFaqJsonLd(post.faq) : null;

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {faqLd && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <Header />
      <main className="min-h-screen bg-white pt-24 dark:bg-slate-900">
        <Container className="py-12 lg:py-16">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            ← Назад в блог
          </Link>

          <article className="w-full max-w-3xl" itemScope itemType="https://schema.org/Article">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                {post.tag}
              </span>
              <time dateTime={post.date} itemProp="datePublished">
                {post.date}
              </time>
              {post.updated && post.updated !== post.date && (
                <span>
                  обновлено{" "}
                  <time dateTime={post.updated} itemProp="dateModified">
                    {post.updated}
                  </time>
                </span>
              )}
              <span>{post.readingTimeMinutes} мин чтения</span>
            </div>

            <h1
              className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400" itemProp="description">
              {post.excerpt}
            </p>

            {post.imageSrc && (
              <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl bg-slate-200 sm:h-80 dark:bg-slate-800">
                <Image
                  src={post.imageSrc}
                  alt={post.imageAlt || post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="article-content mt-10 max-w-none" itemProp="articleBody">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: () => null,
                  h2: ({ ...props }) => (
                    <h2
                      className="mb-3 mt-10 scroll-mt-28 text-2xl font-bold text-slate-900 dark:text-white"
                      {...props}
                    />
                  ),
                  h3: ({ ...props }) => (
                    <h3
                      className="mb-2 mt-8 text-xl font-semibold text-slate-900 dark:text-white"
                      {...props}
                    />
                  ),
                  p: ({ ...props }) => (
                    <p
                      className="my-4 text-[17px] leading-8 text-slate-700 dark:text-slate-300"
                      {...props}
                    />
                  ),
                  ul: ({ ...props }) => (
                    <ul
                      className="my-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300"
                      {...props}
                    />
                  ),
                  ol: ({ ...props }) => (
                    <ol
                      className="my-4 list-decimal space-y-2 pl-6 text-slate-700 dark:text-slate-300"
                      {...props}
                    />
                  ),
                  li: ({ ...props }) => <li className="leading-7" {...props} />,
                  blockquote: ({ ...props }) => (
                    <blockquote
                      className="my-6 rounded-r-xl border-l-4 border-indigo-500 bg-indigo-50 px-4 py-3 text-slate-700 dark:border-indigo-400 dark:bg-indigo-500/15 dark:text-slate-200"
                      {...props}
                    />
                  ),
                  a: ({ href, ...props }) => (
                    <a
                      href={href}
                      className="font-medium text-indigo-600 underline decoration-2 underline-offset-2 hover:text-indigo-500 dark:text-indigo-300"
                      {...(href?.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      {...props}
                    />
                  ),
                  code: ({ className, children, ...props }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                      return (
                        <code
                          className="block overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-100"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code
                        className="rounded-md bg-slate-200 px-1.5 py-0.5 text-[0.9em] text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  table: ({ ...props }) => (
                    <div className="my-6 overflow-x-auto">
                      <table
                        className="w-full min-w-[560px] border-collapse rounded-xl border border-slate-300 text-left text-sm dark:border-slate-700"
                        {...props}
                      />
                    </div>
                  ),
                  thead: ({ ...props }) => (
                    <thead
                      className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                      {...props}
                    />
                  ),
                  th: ({ ...props }) => (
                    <th
                      className="border border-slate-300 px-3 py-2 font-semibold dark:border-slate-700"
                      {...props}
                    />
                  ),
                  td: ({ ...props }) => (
                    <td
                      className="border border-slate-300 px-3 py-2 text-slate-700 dark:border-slate-700 dark:text-slate-300"
                      {...props}
                    />
                  ),
                  hr: ({ ...props }) => (
                    <hr className="my-8 border-slate-300 dark:border-slate-700" {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <BlogArticleFooter post={post} related={related} faq={post.faq} />
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
