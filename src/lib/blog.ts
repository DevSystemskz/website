import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function listMarkdownFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((name) => name.endsWith(".md"));
}

function toMeta(slug: string, data: Record<string, unknown>): BlogPostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    tag: String(data.tag ?? "General"),
    imageSrc: String(data.imageSrc ?? ""),
    imageAlt: String(data.imageAlt ?? ""),
  };
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const files = listMarkdownFiles();

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(BLOG_DIR, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(source);
      return toMeta(slug, data);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);
  return { ...toMeta(slug, data), content };
}

