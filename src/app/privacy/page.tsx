import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — DevSystems",
  description: "Политика конфиденциальности и обработки персональных данных DevSystems",
};

export default function PrivacyPage() {
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
            Политика конфиденциальности
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Последнее обновление: 12 марта 2025 г.
          </p>

          <div className="mt-10 max-w-3xl space-y-1">
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                1. Общие положения
              </h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта DevSystems (далее — Сайт). Использование Сайта означает согласие с данной Политикой.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                2. Какие данные мы собираем
              </h2>
              <p>Мы можем собирать следующие данные:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>имя и контактные данные (email, телефон), указанные в формах обратной связи;</li>
                <li>технические данные (IP-адрес, тип браузера, данные cookies) при посещении Сайта;</li>
                <li>содержание сообщений, отправленных через формы на Сайте.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                3. Цели обработки данных
              </h2>
              <p>
                Персональные данные используются для связи с вами по запросам и заявкам, улучшения работы Сайта и соблюдения требований законодательства.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                4. Передача данных третьим лицам
              </h2>
              <p>
                Мы не передаём персональные данные третьим лицам, за исключением случаев, предусмотренных законом или необходимых для оказания услуг (например, хостинг, сервисы рассылок).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                5. Хранение и защита данных
              </h2>
              <p>
                Данные хранятся в течение срока, необходимого для целей обработки. Мы применяем организационные и технические меры для защиты персональных данных от неправомерного доступа и утраты.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                6. Ваши права
              </h2>
              <p>
                Вы имеете право запросить доступ к своим данным, их исправление или удаление. Для этого свяжитесь с нами по контактам, указанным на Сайте.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                7. Контакты
              </h2>
              <p>
                По вопросам, связанным с обработкой персональных данных:{" "}
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
