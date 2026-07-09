import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Прайс-лист разработки — DevSystems",
  description:
    "Прайс-лист студии разработки DevSystems по услугам: лендинг, корпоративный сайт, интернет-магазин, MVP, мобильная разработка, интеграции и поддержка.",
  alternates: {
    canonical: "/pricing",
  },
};

const websiteServices = [
  {
    service: "Лендинг (1-3 блока, форма заявок)",
    scope: "Дизайн + верстка + базовая аналитика",
    price: "200k - 500k тг",
  },
  {
    service: "Корпоративный сайт (5-15 страниц)",
    scope: "Структура, UI, CMS, SEO-база",
    price: "500k - 1.5 млн тг",
  },
  {
    service: "Интернет-магазин",
    scope: "Каталог, корзина, оплата, админка",
    price: "1.2 - 3.3 млн тг",
  },
  {
    service: "Промо-сайт / спецпроект",
    scope: "Анимации, интерактив, кастомный UI",
    price: "700k - 2 млн тг",
  },
];

const productServices = [
  {
    service: "Web MVP",
    scope: "Auth, роли, core-функции, админка",
    price: "2 - 6 млн тг",
  },
  {
    service: "Mobile MVP (iOS/Android)",
    scope: "React Native/Flutter + API",
    price: "3.3 - 8.3 млн тг",
  },
  {
    service: "AI-функции / RAG",
    scope: "LLM-интеграция, база знаний, метрики",
    price: "1.3 - 4.7 млн тг",
  },
  {
    service: "CRM/ERP/API интеграции",
    scope: "Двусторонняя синхронизация, webhook, логирование",
    price: "500k - 2.7 млн тг",
  },
  {
    service: "DevOps setup / CI-CD / инфраструктура",
    scope: "Docker, CI/CD, staging/prod, мониторинг, backup, rollback",
    price: "700k - 3 млн тг",
  },
];

const supportServices = [
  {
    service: "Техподдержка сайта",
    scope: "Обновления, мелкие задачи, мониторинг",
    price: "100k - 300k тг/мес",
  },
  {
    service: "Поддержка продукта",
    scope: "Фичи, багфиксы, DevOps, QA",
    price: "300k - 1.2 млн тг/мес",
  },
  {
    service: "Выделенная команда",
    scope: "PM + Dev + QA (+дизайн по запросу)",
    price: "1.5 - 4.7 млн тг/мес",
  },
  {
    service: "DevOps сопровождение",
    scope: "Мониторинг, релизы, алерты, инциденты, оптимизация cloud-cost",
    price: "350k - 1.5 млн тг/мес",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-canvas pt-24 dark:bg-canvas-dark">
        <Container className="py-12 lg:py-16">
          <div className="max-w-4xl">
            <p className="inline-flex border-l-2 border-accent pl-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Pricing
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
              Прайс-лист по услугам
            </h1>
            <p className="mt-4 text-lg text-ink-muted dark:text-ink-faint">
              Ниже ориентиры по основным услугам: лендинги, корпоративные сайты,
              MVP, мобильная разработка, AI-интеграции и поддержка. Финальная
              стоимость зависит от объема, сроков, интеграций и требований к UX.
            </p>
          </div>

          <section className="mt-10 border border-line p-6 dark:border-line-dark">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
              1) Сайты и веб-проекты
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line dark:border-line-dark">
                    <th className="py-3 pr-4 font-semibold text-ink-muted dark:text-ink-faint">Услуга</th>
                    <th className="py-3 pr-4 font-semibold text-ink-muted dark:text-ink-faint">Что входит</th>
                    <th className="py-3 font-semibold text-ink-muted dark:text-ink-faint">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {websiteServices.map((item) => (
                    <tr key={item.service} className="border-b border-line/60 dark:border-line-dark/60">
                      <td className="py-3 pr-4 text-ink-muted dark:text-ink-faint">{item.service}</td>
                      <td className="py-3 pr-4 text-ink-muted dark:text-ink-faint">{item.scope}</td>
                      <td className="py-3 text-ink dark:text-white">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8 border border-line p-6 dark:border-line-dark">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
              2) Продуктовая разработка и интеграции
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line dark:border-line-dark">
                    <th className="py-3 pr-4 font-semibold text-ink-muted dark:text-ink-faint">Услуга</th>
                    <th className="py-3 pr-4 font-semibold text-ink-muted dark:text-ink-faint">Что входит</th>
                    <th className="py-3 font-semibold text-ink-muted dark:text-ink-faint">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {productServices.map((item) => (
                    <tr key={item.service} className="border-b border-line/60 dark:border-line-dark/60">
                      <td className="py-3 pr-4 text-ink-muted dark:text-ink-faint">{item.service}</td>
                      <td className="py-3 pr-4 text-ink-muted dark:text-ink-faint">{item.scope}</td>
                      <td className="py-3 text-ink dark:text-white">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8 border border-line p-6 dark:border-line-dark">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
              3) Поддержка и командные форматы
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line dark:border-line-dark">
                    <th className="py-3 pr-4 font-semibold text-ink-muted dark:text-ink-faint">Формат</th>
                    <th className="py-3 pr-4 font-semibold text-ink-muted dark:text-ink-faint">Что входит</th>
                    <th className="py-3 font-semibold text-ink-muted dark:text-ink-faint">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {supportServices.map((item) => (
                    <tr key={item.service} className="border-b border-line/60 dark:border-line-dark/60">
                      <td className="py-3 pr-4 text-ink-muted dark:text-ink-faint">{item.service}</td>
                      <td className="py-3 pr-4 text-ink-muted dark:text-ink-faint">{item.scope}</td>
                      <td className="py-3 text-ink dark:text-white">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8 border border-accent/30 bg-accent-muted p-6">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-white">
              4) Важно по оценке
            </h2>
            <p className="mt-3 text-ink-muted dark:text-ink-faint">
              Цены на странице — ориентиры. Точный бюджет формируется после брифа:
              цели, функционал, интеграции, дедлайн, требования к дизайну и SEO.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-muted dark:text-ink-faint">
              <li>Бриф и предварительная вилка — в течение 24 часов</li>
              <li>Детальная смета и этапы — 1-2 рабочих дня</li>
            </ul>
            <div className="mt-6">
              <Button href="/#contact" variant="primary" size="md">
                Получить расчет под ваш проект
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
