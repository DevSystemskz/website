import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-indigo-300 bg-gradient-to-br from-indigo-50 to-slate-100 p-8 dark:border-indigo-500/30 dark:from-indigo-500/10 dark:to-slate-800/80 lg:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/20" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Готовы обсудить ваш проект?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Опишите задачу — мы подготовим оценку и план работ в течение 1–2 дней.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary" size="lg">
                Оставить заявку
              </Button>
              <Button href="mailto:hello@devsystems.ru" variant="outline" size="lg">
                hello@devsystems.ru
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
