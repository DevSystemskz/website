"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/components/i18n/I18nProvider";

const ru = {
  back: "← На главную",
  title: "Политика конфиденциальности",
  updated: "Последнее обновление: 12 марта 2025 г.",
  sections: [
    {
      title: "1. Общие положения",
      body: "Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта DevSystems (далее — Сайт). Использование Сайта означает согласие с данной Политикой.",
    },
    {
      title: "2. Какие данные мы собираем",
      body: "Мы можем собирать следующие данные:",
      list: [
        "имя и контактные данные (email, телефон), указанные в формах обратной связи;",
        "технические данные (IP-адрес, тип браузера, данные cookies) при посещении Сайта;",
        "содержание сообщений, отправленных через формы на Сайте.",
      ],
    },
    {
      title: "3. Цели обработки данных",
      body: "Персональные данные используются для связи с вами по запросам и заявкам, улучшения работы Сайта и соблюдения требований законодательства.",
    },
    {
      title: "4. Передача данных третьим лицам",
      body: "Мы не передаем персональные данные третьим лицам, за исключением случаев, предусмотренных законом или необходимых для оказания услуг (например, хостинг, сервисы рассылок).",
    },
    {
      title: "5. Хранение и защита данных",
      body: "Данные хранятся в течение срока, необходимого для целей обработки. Мы применяем организационные и технические меры для защиты персональных данных от неправомерного доступа и утраты.",
    },
    {
      title: "6. Ваши права",
      body: "Вы имеете право запросить доступ к своим данным, их исправление или удаление. Для этого свяжитесь с нами по контактам, указанным на Сайте.",
    },
  ],
  contactsTitle: "7. Контакты",
  contactsLabel:
    "По вопросам, связанным с обработкой персональных данных:",
};

const kk = {
  back: "← Басты бетке",
  title: "Құпиялылық саясаты",
  updated: "Соңғы жаңарту: 2025 ж. 12 наурыз",
  sections: [
    {
      title: "1. Жалпы ережелер",
      body: "Осы Құпиялылық саясаты DevSystems сайты пайдаланушыларының жеке деректерін өңдеу және қорғау тәртібін анықтайды (бұдан әрі — Сайт). Сайтты пайдалану осы Саясатпен келісуді білдіреді.",
    },
    {
      title: "2. Біз қандай деректерді жинаймыз",
      body: "Біз келесі деректерді жинауымыз мүмкін:",
      list: [
        "кері байланыс формаларында көрсетілген аты-жөні және байланыс деректері (email, телефон);",
        "Сайтқа кірген кездегі техникалық деректер (IP-мекенжай, браузер түрі, cookie деректері);",
        "Сайттағы формалар арқылы жіберілген хабарламалар мазмұны.",
      ],
    },
    {
      title: "3. Деректерді өңдеу мақсаттары",
      body: "Жеке деректер сізбен өтініштер мен сұраулар бойынша байланысу, Сайт жұмысын жақсарту және заң талаптарын сақтау үшін қолданылады.",
    },
    {
      title: "4. Үшінші тұлғаларға беру",
      body: "Біз жеке деректерді заңда көзделген немесе қызмет көрсету үшін қажет жағдайларды қоспағанда (мысалы, хостинг, хабарлама сервистері), үшінші тұлғаларға бермейміз.",
    },
    {
      title: "5. Деректерді сақтау және қорғау",
      body: "Деректер өңдеу мақсаттарына қажет мерзімде сақталады. Біз деректерді рұқсатсыз қол жеткізуден және жоғалтудан қорғау үшін ұйымдастырушылық және техникалық шаралар қолданамыз.",
    },
    {
      title: "6. Сіздің құқықтарыңыз",
      body: "Сіз өз деректеріңізге қол жеткізуге, оларды түзетуге немесе жоюға сұрау жасай аласыз. Ол үшін Сайтта көрсетілген байланыс арналары арқылы хабарласыңыз.",
    },
  ],
  contactsTitle: "7. Байланыс",
  contactsLabel: "Жеке деректерді өңдеуге қатысты сұрақтар бойынша:",
};

const en = {
  back: "← Back to homepage",
  title: "Privacy Policy",
  updated: "Last updated: March 12, 2025",
  sections: [
    {
      title: "1. General Provisions",
      body: "This Privacy Policy defines how DevSystems processes and protects personal data of website users (the Site). By using the Site, you agree to this Policy.",
    },
    {
      title: "2. What data we collect",
      body: "We may collect the following data:",
      list: [
        "name and contact details (email, phone) submitted via contact forms;",
        "technical data (IP address, browser type, cookie data) when visiting the Site;",
        "content of messages sent through forms on the Site.",
      ],
    },
    {
      title: "3. Purposes of data processing",
      body: "Personal data is used to contact you regarding requests and inquiries, improve the Site, and comply with legal requirements.",
    },
    {
      title: "4. Data sharing with third parties",
      body: "We do not share personal data with third parties except where required by law or necessary to provide services (for example, hosting or messaging providers).",
    },
    {
      title: "5. Data storage and protection",
      body: "Data is stored for the period required to achieve processing purposes. We apply organizational and technical safeguards to protect personal data from unauthorized access and loss.",
    },
    {
      title: "6. Your rights",
      body: "You may request access to, correction of, or deletion of your personal data. Please contact us using the details provided on the Site.",
    },
  ],
  contactsTitle: "7. Contact",
  contactsLabel: "For privacy-related requests:",
};

export function PrivacyPageClient() {
  const { locale } = useI18n();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

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

