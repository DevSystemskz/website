import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const stacks = [
  { label: "React / Next.js", group: "Frontend" },
  { label: "Vue / Nuxt", group: "Frontend" },
  { label: "TypeScript", group: "Frontend" },
  { label: "Node.js", group: "Backend" },
  { label: "Python", group: "Backend" },
  { label: "Go", group: "Backend" },
  { label: "PostgreSQL", group: "Data" },
  { label: "MongoDB", group: "Data" },
  { label: "Redis", group: "Data" },
  { label: "AWS", group: "Cloud" },
  { label: "Docker / K8s", group: "DevOps" },
  { label: "GraphQL", group: "API" },
];

export function Technologies() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <SectionTitle
          tag="Технологии"
          title="Работаем с проверенным стеком"
          description="Выбираем инструменты под задачу: от быстрого MVP до высоконагруженных систем."
        />
        <div className="mt-12 flex flex-wrap gap-3">
          {stacks.map(({ label }) => (
            <span
              key={label}
              className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:text-white"
            >
              {label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
