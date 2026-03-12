import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 pt-24 lg:pt-32 dark:bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/10" />

      <Container className="relative">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-indigo-400/40 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
            Разработка ПО под ключ
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Создаём цифровые продукты, которые{" "}
            <span className="text-indigo-600 dark:text-indigo-400">работают на бизнес</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl dark:text-slate-400">
            Веб-приложения, мобильные приложения, облачные решения и техническая поддержка. От идеи до запуска и масштабирования.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Обсудить проект
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Наши услуги
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 text-sm text-slate-600 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">50+</span>
              <span>реализованных проектов</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">8+</span>
              <span>лет на рынке</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">100%</span>
              <span>фокус на качестве</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
