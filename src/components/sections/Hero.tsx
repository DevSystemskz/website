import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[65vh] overflow-hidden bg-slate-50 pt-20 lg:pt-20 dark:bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/10" />

      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="min-w-0 flex-1 max-w-3xl">
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

          <div className="relative mt-10 hidden flex-shrink-0 md:mt-0 md:block md:w-[360px]">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xl shadow-indigo-500/10 backdrop-blur dark:border-slate-700 dark:bg-slate-800/80 dark:shadow-indigo-500/5">
              <div className="mb-3 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <pre className="overflow-x-auto text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <code>
                  <span className="text-indigo-600 dark:text-indigo-400">const</span>{" "}
                  <span className="text-slate-800 dark:text-slate-100">project</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-amber-600 dark:text-amber-400">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-slate-500">name:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">{"\""}your-idea{"\""}</span>
                  {","}
                  {"\n"}
                  {"  "}
                  <span className="text-slate-500">stack:</span>{" "}
                  <span className="text-amber-600 dark:text-amber-400">[</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{"\""}React{"\""}</span>
                  {", "}
                  <span className="text-emerald-600 dark:text-emerald-400">{"\""}Node{"\""}</span>
                  <span className="text-amber-600 dark:text-amber-400">]</span>
                  {","}
                  {"\n"}
                  {"  "}
                  <span className="text-slate-500">ship:</span>{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">true</span>
                  {"\n"}
                  <span className="text-amber-600 dark:text-amber-400">{"}"}</span>
                  {";"}
                  {"\n\n"}
                  <span className="text-slate-500">// мы доведём до релиза</span>
                </code>
              </pre>
            </div>
            <div className="absolute -right-4 -top-4 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
              {"<DevSystems />"}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
