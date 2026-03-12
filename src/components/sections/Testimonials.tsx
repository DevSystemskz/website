import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Сроки соблюдены, качество кода на высоте. Рекомендую для сложных веб-проектов.",
    author: "Игорь М.",
    role: "Основатель",
    company: "MarketPlace Pro",
  },
  {
    quote:
      "Понятный процесс, регулярные демо. Мобильное приложение вышло в сторы в срок.",
    author: "Ольга Т.",
    role: "Product Owner",
    company: "HealthApp",
  },
  {
    quote:
      "Помогли перенести инфраструктуру в облако. Всё документировано, передача прошла гладко.",
    author: "Никита В.",
    role: "CTO",
    company: "DataFlow",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50">
      <Container>
        <SectionTitle
          tag="Отзывы"
          title="Что говорят клиенты"
          description="Реальные проекты и долгосрочное сотрудничество."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
