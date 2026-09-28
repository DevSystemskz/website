import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ArticleLinks } from "@/components/seo/ArticleLinks";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
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
  if (!post) return { title: { absolute: "Статья не найдена — DevSystems" } };

  const url = `/blog/${slug}`;
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;

  return {
    title: post.title,
    description,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: post.date,
      modifiedTime: post.date,
      tags: post.keywords,
      images: post.imageSrc ? [{ url: post.imageSrc, alt: post.imageAlt }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const site = "https://devsystems.dev";
  const url = `${site}/blog/${slug}`;
  const others = getAllPostsMeta().filter((item) => item.slug !== slug);
  const related = [
    ...others.filter((item) => item.tag === post.tag),
    ...others.filter((item) => item.tag !== post.tag),
  ].slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ru",
    mainEntityOfPage: url,
    url,
    keywords: post.keywords.join(", "),
    image: post.imageSrc || undefined,
    author: {
      "@type": "Organization",
      name: "DevSystems",
      url: site,
    },
    publisher: {
      "@type": "Organization",
      name: "DevSystems",
      url: site,
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-canvas pt-24 dark:bg-canvas-dark">
        <Container className="py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { href: "/", label: "Главная" },
              { href: "/blog", label: "Блог" },
              { label: post.title },
            ]}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

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

            <ArticleLinks />

            {related.length > 0 && (
              <nav className="mt-14 border-t border-line pt-8 dark:border-line-dark" aria-label="Другие статьи">
                <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
                  Другие статьи
                </h2>
                <ul className="mt-4 space-y-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="text-accent transition hover:text-accent-hover"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
