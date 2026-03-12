import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Условия использования — DevSystems",
  description: "Условия использования сайта и услуг DevSystems",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 dark:bg-slate-900">
        <Container className="py-12 lg:py-16">
          <Link
            href="/"
            className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            ← На главную
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Условия использования
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Последнее обновление: 12 марта 2025 г.
          </p>

          <div className="mt-10 max-w-3xl space-y-1">
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                1. Принятие условий
              </h2>
              <p>
                Использование сайта DevSystems (далее — Сайт) означает принятие настоящих Условий. Если вы не согласны с ними, пожалуйста, не используйте Сайт и наши сервисы.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                2. Использование сайта
              </h2>
              <p>При использовании Сайта вы обязуетесь:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>не нарушать законодательство и права третьих лиц;</li>
                <li>не размещать недостоверную или противоправную информацию в формах обратной связи;</li>
                <li>не пытаться получить несанкционированный доступ к системам и данным.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                3. Услуги и заявки
              </h2>
              <p>
                Отправка заявки через формы на Сайте не создаёт обязательств по заключению договора. Мы свяжемся с вами для уточнения запроса и обсуждения условий сотрудничества. Окончательные условия определяются отдельным соглашением или договором.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                4. Интеллектуальная собственность
              </h2>
              <p>
                Все материалы Сайта (тексты, дизайн, логотипы, код) являются объектами интеллектуальной собственности DevSystems или правообладателей. Копирование и использование без письменного разрешения запрещено.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                5. Ограничение ответственности
              </h2>
              <p>
                Сайт предоставляется «как есть». Мы не несём ответственности за косвенные убытки, упущенную выгоду или сбои в работе Сайта, за исключением случаев, прямо предусмотренных законодательством.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                6. Изменения условий
              </h2>
              <p>
                Мы вправе изменять настоящие Условия. Актуальная версия всегда доступна на этой странице. Продолжение использования Сайта после публикации изменений означает согласие с новой редакцией.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                7. Контакты
              </h2>
              <p>
                Вопросы по Условиям использования:{" "}
                <a href="mailto:devsystemg@gmail.com" className="text-indigo-600 hover:underline dark:text-indigo-400">
                  devsystemg@gmail.com
                </a>
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
