import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogFaqItem = { q: string; a: string };

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  faq?: BlogFaqItem[];
  relatedService?: string;
  readingTimeMinutes?: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function listMarkdownFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((name) => name.endsWith(".md"));
}

function parseFaq(data: Record<string, unknown>): BlogFaqItem[] | undefined {
  const raw = data.faq;
  if (!Array.isArray(raw)) return undefined;
  const items = raw
    .map((item) => {
      if (typeof item !== "object" || item === null) return null;
      const row = item as { q?: string; a?: string };
      if (!row.q || !row.a) return null;
      return { q: String(row.q), a: String(row.a) };
    })
    .filter((x): x is BlogFaqItem => x !== null);
  return items.length ? items : undefined;
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(5, Math.ceil(words / 180));
}

function stripLeadingH1(content: string): string {
  return content.replace(/^#\s+[^\n]+\n+/, "").trimStart();
}

function toMeta(slug: string, data: Record<string, unknown>, content: string): BlogPostMeta {
  const body = stripLeadingH1(content);
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    updated: data.updated ? String(data.updated) : undefined,
    tag: String(data.tag ?? "General"),
    imageSrc: String(data.imageSrc ?? ""),
    imageAlt: String(data.imageAlt ?? ""),
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
    keywords: Array.isArray(data.keywords)
      ? data.keywords.map(String)
      : undefined,
    faq: parseFaq(data),
    relatedService: data.relatedService ? String(data.relatedService) : undefined,
    readingTimeMinutes: data.readingTimeMinutes
      ? Number(data.readingTimeMinutes)
      : estimateReadingTime(body),
  };
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const files = listMarkdownFiles();

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(BLOG_DIR, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(source);
      return toMeta(slug, data, content);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);
  return {
    ...toMeta(slug, data, content),
    content: stripLeadingH1(content),
  };
}

export function getRelatedPosts(slug: string, tag: string, limit = 3): BlogPostMeta[] {
  return getAllPostsMeta()
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.tag === tag ? 1 : 0;
      const bMatch = b.tag === tag ? 1 : 0;
      if (bMatch !== aMatch) return bMatch - aMatch;
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);
}
