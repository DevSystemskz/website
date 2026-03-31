"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/components/i18n/I18nProvider";

const ru = {
  back: "← На главную",
  title: "Условия использования",
  updated: "Последнее обновление: 12 марта 2025 г.",
  sections: [
    {
      title: "1. Принятие условий",
      body: "Использование сайта DevSystems (далее — Сайт) означает принятие настоящих Условий. Если вы не согласны с ними, пожалуйста, не используйте Сайт и наши сервисы.",
    },
    {
      title: "2. Использование сайта",
      body: "При использовании Сайта вы обязуетесь:",
      list: [
        "не нарушать законодательство и права третьих лиц;",
        "не размещать недостоверную или противоправную информацию в формах обратной связи;",
        "не пытаться получить несанкционированный доступ к системам и данным.",
      ],
    },
    {
      title: "3. Услуги и заявки",
      body: "Отправка заявки через формы на Сайте не создает обязательств по заключению договора. Мы свяжемся с вами для уточнения запроса и обсуждения условий сотрудничества. Окончательные условия определяются отдельным соглашением или договором.",
    },
    {
      title: "4. Интеллектуальная собственность",
      body: "Все материалы Сайта (тексты, дизайн, логотипы, код) являются объектами интеллектуальной собственности DevSystems или правообладателей. Копирование и использование без письменного разрешения запрещено.",
    },
    {
      title: "5. Ограничение ответственности",
      body: "Сайт предоставляется «как есть». Мы не несем ответственности за косвенные убытки, упущенную выгоду или сбои в работе Сайта, за исключением случаев, прямо предусмотренных законодательством.",
    },
    {
      title: "6. Изменения условий",
      body: "Мы вправе изменять настоящие Условия. Актуальная версия всегда доступна на этой странице. Продолжение использования Сайта после публикации изменений означает согласие с новой редакцией.",
    },
  ],
  contactsTitle: "7. Контакты",
  contactsLabel: "Вопросы по Условиям использования:",
};

const en = {
  back: "← Back to homepage",
  title: "Terms of Use",
  updated: "Last updated: March 12, 2025",
  sections: [
    {
      title: "1. Acceptance of Terms",
      body: "By using the DevSystems website (the Site), you accept these Terms. If you do not agree, please do not use the Site or related services.",
    },
    {
      title: "2. Use of the Site",
      body: "When using the Site, you agree to:",
      list: [
        "comply with laws and third-party rights;",
        "avoid posting false or unlawful information in contact forms;",
        "not attempt unauthorized access to systems or data.",
      ],
    },
    {
      title: "3. Services and Requests",
      body: "Submitting a request through the Site does not create a contractual obligation. We will contact you to clarify your request and discuss cooperation terms. Final terms are defined in a separate agreement or contract.",
    },
    {
      title: "4. Intellectual Property",
      body: "All Site materials (texts, design, logos, code) are intellectual property of DevSystems or their respective owners. Copying or reuse without written permission is prohibited.",
    },
    {
      title: "5. Limitation of Liability",
      body: "The Site is provided \"as is\". We are not liable for indirect damages, lost profits, or service interruptions except where required by applicable law.",
    },
    {
      title: "6. Changes to Terms",
      body: "We may update these Terms. The current version is always available on this page. Continued use of the Site after updates means acceptance of the revised Terms.",
    },
  ],
  contactsTitle: "7. Contact",
  contactsLabel: "Questions about these Terms:",
};

export function TermsPageClient() {
  const { locale } = useI18n();
  const t = locale === "ru" ? ru : en;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 dark:bg-slate-900">
        <Container className="py-12 lg:py-16">
          <Link
            href="/"
            className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {t.back}
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">{t.updated}</p>

          <div className="mt-10 max-w-3xl space-y-1">
            {t.sections.map((section) => (
              <section key={section.title} className="mb-10">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <p>{section.body}</p>
                {section.list && (
                  <ul className="list-disc pl-6 space-y-1">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {t.contactsTitle}
              </h2>
              <p>
                {t.contactsLabel}{" "}
                <a
                  href="mailto:devsystemg@gmail.com"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
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

