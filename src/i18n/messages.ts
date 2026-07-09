export const locales = ["ru", "kk", "en"] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  ru: {
    nav: {
      services: "Услуги",
      pricing: "Прайс",
      blog: "Блог",
      portfolio: "Портфолио",
      about: "О нас",
      process: "Процесс",
      team: "Команда",
      contact: "Контакты",
      contactBtn: "Связаться",
      discussBtn: "Обсудить проект",
    },
    hero: {
      titleA: "Создаём цифровые продукты, которые",
      titleB: "работают на бизнес",
      description:
        "Веб-приложения, мобильные приложения, блокчейн, AI и техническая поддержка. От идеи до запуска и масштабирования.",
      discussBtn: "Обсудить проект",
      servicesBtn: "Наши услуги",
      stats: [
        { n: "50+", t: "реализованных проектов" },
        { n: "8+", t: "лет на рынке" },
        { n: "100%", t: "фокус на качестве" },
      ],
    },
    footer: {
      company: "Компания",
      services: "Услуги",
      legal: "Правовая информация",
      about: "О компании",
      blog: "Блог",
      pricing: "Прайс",
      portfolio: "Портфолио",
      team: "Команда",
      contact: "Контакты",
      web: "Веб-разработка",
      mobile: "Мобильные приложения",
      integrations: "Интеграции",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      description:
        "Разработка программного обеспечения под ключ. Веб, мобильные приложения, блокчейн, AI и поддержка.",
      rights: "Все права защищены.",
    },
    sections: {
      servicesTag: "Услуги",
      servicesTitle: "Что мы делаем",
      servicesDesc:
        "Полный цикл разработки: от аналитики и дизайна до запуска и поддержки.",
      portfolioTag: "Портфолио",
      portfolioTitle: "Избранные проекты",
      portfolioDesc:
        "Реальные задачи: от MVP до масштабируемых продуктов. Названия и детали могут быть изменены под ваш кейс.",
      processTag: "Процесс",
      processTitle: "Как мы работаем",
      processDesc:
        "Прозрачные этапы от первого звонка до запуска и дальнейшей поддержки.",
      teamTag: "Команда",
      teamTitle: "Люди, которые делают проекты",
      teamDesc:
        "Опытные разработчики, менеджеры и дизайнеры. Выделенная команда под ваш проект.",
      testimonialsTag: "Отзывы",
      testimonialsTitle: "Что говорят клиенты",
      testimonialsDesc: "Реальные проекты и долгосрочное сотрудничество.",
      technologiesTag: "Технологии",
      technologiesTitle: "Работаем с проверенным стеком",
      technologiesDesc:
        "Выбираем инструменты под задачу: от быстрого MVP до высоконагруженных систем.",
      aboutTag: "О нас",
      aboutTitle: "Команда, которая превращает идеи в работающий код",
      aboutDesc:
        "Мы фокусируемся на качестве, сроках и прозрачной коммуникации. Каждый проект ведет выделенная команда с опытом в вашей области.",
      contactTag: "Контакты",
      contactTitle: "Напишите нам",
      contactDesc:
        "Расскажите о проекте — мы свяжемся с вами и предложим варианты сотрудничества.",
      ctaTitle: "Готовы обсудить ваш проект?",
      ctaDesc:
        "Опишите задачу — мы подготовим оценку и план работ в течение 1-2 дней.",
      leaveRequest: "Оставить заявку",
      sent: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      send: "Отправить заявку",
      sending: "Отправка...",
      name: "Имя / Компания",
      email: "Email",
      message: "Сообщение",
      namePh: "Как к вам обращаться?",
      messagePh: "Опишите проект или задачу...",
      tellProject: "Рассказать о проекте",
      submitError: "Не удалось отправить заявку. Попробуйте ещё раз.",
      blogTitle: "Блог DevSystems",
      blogDesc:
        "Делимся практикой разработки: архитектура, AI, блокчейн и управление продуктом.",
      readMore: "Читать",
      blogBack: "← Назад в блог",
    },
    pricing: {
      tag: "Pricing",
      title: "Прайс-лист по услугам",
      intro:
        "Ниже ориентиры по основным услугам: лендинги, корпоративные сайты, MVP, мобильная разработка, AI-интеграции и поддержка. Финальная стоимость зависит от объёма, сроков, интеграций и требований к UX.",
      colService: "Услуга",
      colScope: "Что входит",
      colPrice: "Стоимость",
      colFormat: "Формат",
      websitesTitle: "1) Сайты и веб-проекты",
      productTitle: "2) Продуктовая разработка и интеграции",
      supportTitle: "3) Поддержка и командные форматы",
      noteTitle: "4) Важно по оценке",
      noteBody:
        "Цены на странице — ориентиры. Точный бюджет формируется после брифа: цели, функционал, интеграции, дедлайн, требования к дизайну и SEO.",
      noteBullets: [
        "Бриф и предварительная вилка — в течение 24 часов",
        "Детальная смета и этапы — 1–2 рабочих дня",
      ],
      cta: "Получить расчёт под ваш проект",
      websiteServices: [
        {
          service: "Лендинг (1–3 блока, форма заявок)",
          scope: "Дизайн + вёрстка + базовая аналитика",
          price: "200k – 500k тг",
        },
        {
          service: "Корпоративный сайт (5–15 страниц)",
          scope: "Структура, UI, CMS, SEO-база",
          price: "500k – 1.5 млн тг",
        },
        {
          service: "Интернет-магазин",
          scope: "Каталог, корзина, оплата, админка",
          price: "1.2 – 3.3 млн тг",
        },
        {
          service: "Промо-сайт / спецпроект",
          scope: "Анимации, интерактив, кастомный UI",
          price: "700k – 2 млн тг",
        },
      ],
      productServices: [
        {
          service: "Web MVP",
          scope: "Auth, роли, core-функции, админка",
          price: "2 – 6 млн тг",
        },
        {
          service: "Mobile MVP (iOS/Android)",
          scope: "React Native/Flutter + API",
          price: "3.3 – 8.3 млн тг",
        },
        {
          service: "AI-функции / RAG",
          scope: "LLM-интеграция, база знаний, метрики",
          price: "1.3 – 4.7 млн тг",
        },
        {
          service: "CRM/ERP/API интеграции",
          scope: "Двусторонняя синхронизация, webhook, логирование",
          price: "500k – 2.7 млн тг",
        },
        {
          service: "DevOps setup / CI-CD / инфраструктура",
          scope: "Docker, CI/CD, staging/prod, мониторинг, backup, rollback",
          price: "700k – 3 млн тг",
        },
      ],
      supportServices: [
        {
          service: "Техподдержка сайта",
          scope: "Обновления, мелкие задачи, мониторинг",
          price: "100k – 300k тг/мес",
        },
        {
          service: "Поддержка продукта",
          scope: "Фичи, багфиксы, DevOps, QA",
          price: "300k – 1.2 млн тг/мес",
        },
        {
          service: "Выделенная команда",
          scope: "PM + Dev + QA (+дизайн по запросу)",
          price: "1.5 – 4.7 млн тг/мес",
        },
        {
          service: "DevOps сопровождение",
          scope: "Мониторинг, релизы, алерты, инциденты, оптимизация cloud-cost",
          price: "350k – 1.5 млн тг/мес",
        },
      ],
    },
  },
  kk: {
    nav: {
      services: "Қызметтер",
      pricing: "Баға",
      blog: "Блог",
      portfolio: "Портфолио",
      about: "Біз туралы",
      process: "Процесс",
      team: "Команда",
      contact: "Байланыс",
      contactBtn: "Байланысу",
      discussBtn: "Жобаны талқылау",
    },
    hero: {
      titleA: "Біз бизнеске",
      titleB: "нәтиже беретін цифрлық өнімдер жасаймыз",
      description:
        "Веб-қосымшалар, мобильді қосымшалар, блокчейн, AI және техникалық қолдау. Идеядан бастап іске қосу мен масштабтауға дейін.",
      discussBtn: "Жобаны талқылау",
      servicesBtn: "Қызметтеріміз",
      stats: [
        { n: "50+", t: "аяқталған жоба" },
        { n: "8+", t: "нарықтағы жыл" },
        { n: "100%", t: "сапаға фокус" },
      ],
    },
    footer: {
      company: "Компания",
      services: "Қызметтер",
      legal: "Құқықтық ақпарат",
      about: "Компания туралы",
      blog: "Блог",
      pricing: "Баға",
      portfolio: "Портфолио",
      team: "Команда",
      contact: "Байланыс",
      web: "Веб-әзірлеу",
      mobile: "Мобильді қосымшалар",
      integrations: "Интеграциялар",
      privacy: "Құпиялылық саясаты",
      terms: "Пайдалану шарттары",
      description:
        "Кілтпен бағдарламалық әзірлеу: веб, мобильді қосымшалар, блокчейн, AI және қолдау.",
      rights: "Барлық құқықтар қорғалған.",
    },
    sections: {
      servicesTag: "Қызметтер",
      servicesTitle: "Біз не істейміз",
      servicesDesc:
        "Әзірлеудің толық циклі: аналитика мен дизайннан бастап, іске қосу және қолдауға дейін.",
      portfolioTag: "Портфолио",
      portfolioTitle: "Таңдамалы жобалар",
      portfolioDesc:
        "Нақты міндеттер: MVP-ден масштабталатын өнімдерге дейін. Атаулар мен детальдар кейсіңізге қарай өзгертілуі мүмкін.",
      processTag: "Процесс",
      processTitle: "Біз қалай жұмыс істейміз",
      processDesc:
        "Бірінші қоңыраудан бастап іске қосу және кейінгі қолдауға дейінгі ашық кезеңдер.",
      teamTag: "Команда",
      teamTitle: "Жобаны жасайтын адамдар",
      teamDesc:
        "Тәжірибелі әзірлеушілер, менеджерлер және дизайнерлер. Жобаңызға арнайы команда бөлінеді.",
      testimonialsTag: "Пікірлер",
      testimonialsTitle: "Клиенттер не дейді",
      testimonialsDesc: "Нақты жобалар және ұзақ мерзімді серіктестік.",
      technologiesTag: "Технологиялар",
      technologiesTitle: "Сенімді стекпен жұмыс істейміз",
      technologiesDesc:
        "Құралдарды міндетке сай таңдаймыз: жылдам MVP-ден жоғары жүктемелі жүйелерге дейін.",
      aboutTag: "Біз туралы",
      aboutTitle: "Идеяны жұмыс істейтін кодқа айналдыратын команда",
      aboutDesc:
        "Біз сапаға, мерзімге және ашық коммуникацияға назар аударамыз. Әр жобаны сіздің салада тәжірибесі бар арнайы команда жүргізеді.",
      contactTag: "Байланыс",
      contactTitle: "Бізге жазыңыз",
      contactDesc:
        "Жобаңыз туралы айтыңыз — біз сізбен байланысып, ынтымақтастық нұсқаларын ұсынамыз.",
      ctaTitle: "Жобаңызды талқылауға дайынсыз ба?",
      ctaDesc:
        "Міндетті сипаттаңыз — 1-2 күн ішінде бағалау мен жұмыс жоспарын дайындаймыз.",
      leaveRequest: "Өтінім қалдыру",
      sent: "Өтінім жіберілді. Жақын арада сізбен хабарласамыз.",
      send: "Өтінімді жіберу",
      sending: "Жіберілуде...",
      name: "Аты / Компания",
      email: "Эл. пошта",
      message: "Хабарлама",
      namePh: "Сізге қалай хабарласайық?",
      messagePh: "Жобаңызды немесе міндетті сипаттаңыз...",
      tellProject: "Жоба туралы айту",
      submitError: "Өтінімді жіберу мүмкін болмады. Қайта көріңіз.",
      blogTitle: "DevSystems блогы",
      blogDesc:
        "Әзірлеу тәжірибесімен бөлісеміз: архитектура, AI, блокчейн және өнімді басқару.",
      readMore: "Оқу",
      blogBack: "← Блогқа оралу",
    },
    pricing: {
      tag: "Pricing",
      title: "Қызметтер бойынша баға тізімі",
      intro:
        "Негізгі қызметтер бойынша бағдарламалар: лендинг, корпоративтік сайт, MVP, мобильді әзірлеу, AI-интеграциялар және қолдау. Нақты құны көлемге, мерзімге, интеграцияларға және UX талаптарына байланысты.",
      colService: "Қызмет",
      colScope: "Не кіреді",
      colPrice: "Құны",
      colFormat: "Формат",
      websitesTitle: "1) Сайттар және веб-жобалар",
      productTitle: "2) Өнімдік әзірлеу және интеграциялар",
      supportTitle: "3) Қолдау және командалық форматтар",
      noteTitle: "4) Баға туралы маңызды",
      noteBody:
        "Беттегі бағалар — бағдар. Нақты бюджет брифтен кейін қалыптасады: мақсаттар, функционал, интеграциялар, дедлайн, дизайн және SEO талаптары.",
      noteBullets: [
        "Бриф және алдын ала баға ауқымы — 24 сағат ішінде",
        "Толық смета және кезеңдер — 1–2 жұмыс күні",
      ],
      cta: "Жобаңызға есеп алу",
      websiteServices: [
        {
          service: "Лендинг (1–3 блок, өтінім формасы)",
          scope: "Дизайн + верстка + базалық аналитика",
          price: "200k – 500k тг",
        },
        {
          service: "Корпоративтік сайт (5–15 бет)",
          scope: "Құрылым, UI, CMS, SEO-негіз",
          price: "500k – 1.5 млн тг",
        },
        {
          service: "Интернет-дүкен",
          scope: "Каталог, себет, төлем, админка",
          price: "1.2 – 3.3 млн тг",
        },
        {
          service: "Промо-сайт / арнайы жоба",
          scope: "Анимация, интерактив, кастомды UI",
          price: "700k – 2 млн тг",
        },
      ],
      productServices: [
        {
          service: "Web MVP",
          scope: "Auth, рөлдер, негізгі функциялар, админка",
          price: "2 – 6 млн тг",
        },
        {
          service: "Mobile MVP (iOS/Android)",
          scope: "React Native/Flutter + API",
          price: "3.3 – 8.3 млн тг",
        },
        {
          service: "AI-функциялар / RAG",
          scope: "LLM-интеграция, білім базасы, метрикалар",
          price: "1.3 – 4.7 млн тг",
        },
        {
          service: "CRM/ERP/API интеграциялар",
          scope: "Екі жақты синхрон, webhook, логирование",
          price: "500k – 2.7 млн тг",
        },
        {
          service: "DevOps setup / CI-CD / инфрақұрылым",
          scope: "Docker, CI/CD, staging/prod, мониторинг, backup, rollback",
          price: "700k – 3 млн тг",
        },
      ],
      supportServices: [
        {
          service: "Сайт техқолдауы",
          scope: "Жаңартулар, шағын тапсырмалар, мониторинг",
          price: "100k – 300k тг/ай",
        },
        {
          service: "Өнім қолдауы",
          scope: "Фичалар, багфикстер, DevOps, QA",
          price: "300k – 1.2 млн тг/ай",
        },
        {
          service: "Бөлінген команда",
          scope: "PM + Dev + QA (+дизайн сұрау бойынша)",
          price: "1.5 – 4.7 млн тг/ай",
        },
        {
          service: "DevOps сүйемелдеу",
          scope: "Мониторинг, релиздер, алерттер, инциденттер, cloud-cost оптимизация",
          price: "350k – 1.5 млн тг/ай",
        },
      ],
    },
  },
  en: {
    nav: {
      services: "Services",
      pricing: "Pricing",
      blog: "Blog",
      portfolio: "Portfolio",
      about: "About",
      process: "Process",
      team: "Team",
      contact: "Contact",
      contactBtn: "Contact us",
      discussBtn: "Discuss project",
    },
    hero: {
      titleA: "We build digital products that",
      titleB: "drive business growth",
      description:
        "Web apps, mobile apps, blockchain, AI integrations, and long-term support. From idea to launch and scaling.",
      discussBtn: "Discuss project",
      servicesBtn: "Our services",
      stats: [
        { n: "50+", t: "projects delivered" },
        { n: "8+", t: "years on market" },
        { n: "100%", t: "quality focus" },
      ],
    },
    footer: {
      company: "Company",
      services: "Services",
      legal: "Legal",
      about: "About company",
      blog: "Blog",
      pricing: "Pricing",
      portfolio: "Portfolio",
      team: "Team",
      contact: "Contact",
      web: "Web development",
      mobile: "Mobile apps",
      integrations: "Integrations",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      description:
        "Turnkey software development: web, mobile, blockchain, AI integrations, and support.",
      rights: "All rights reserved.",
    },
    sections: {
      servicesTag: "Services",
      servicesTitle: "What we do",
      servicesDesc:
        "Full-cycle software development: from discovery and design to launch and support.",
      portfolioTag: "Portfolio",
      portfolioTitle: "Selected projects",
      portfolioDesc:
        "Real-world product cases from MVPs to scalable systems. Names and details can be adapted to your context.",
      processTag: "Process",
      processTitle: "How we work",
      processDesc:
        "Transparent stages from kickoff to release and continuous product support.",
      teamTag: "Team",
      teamTitle: "People behind the delivery",
      teamDesc:
        "Senior engineers, managers, and designers. A dedicated team for your product.",
      testimonialsTag: "Testimonials",
      testimonialsTitle: "What clients say",
      testimonialsDesc: "Real projects and long-term partnerships.",
      technologiesTag: "Technologies",
      technologiesTitle: "Production-ready tech stack",
      technologiesDesc:
        "We select tools based on your goals — from fast MVPs to high-load systems.",
      aboutTag: "About",
      aboutTitle: "A team that turns ideas into running products",
      aboutDesc:
        "We focus on quality, timelines, and transparent communication. Each project has a dedicated team with domain expertise.",
      contactTag: "Contact",
      contactTitle: "Get in touch",
      contactDesc:
        "Tell us about your project, and we will get back with collaboration options.",
      ctaTitle: "Ready to discuss your project?",
      ctaDesc:
        "Share your idea — we will provide an estimate and delivery plan within 1-2 days.",
      leaveRequest: "Submit request",
      sent: "Request sent. We will contact you shortly.",
      send: "Send request",
      sending: "Sending...",
      name: "Name / Company",
      email: "Email",
      message: "Message",
      namePh: "How should we address you?",
      messagePh: "Describe your project or task...",
      tellProject: "Tell us about project",
      submitError: "Failed to send request. Please try again.",
      blogTitle: "DevSystems Blog",
      blogDesc:
        "Practical notes on software engineering: architecture, AI, blockchain, and product delivery.",
      readMore: "Read",
      blogBack: "← Back to blog",
    },
    pricing: {
      tag: "Pricing",
      title: "Service pricing",
      intro:
        "Ballpark ranges for our core services: landing pages, corporate websites, MVPs, mobile apps, AI integrations, and ongoing support. Final cost depends on scope, timeline, integrations, and UX requirements.",
      colService: "Service",
      colScope: "What's included",
      colPrice: "Price",
      colFormat: "Format",
      websitesTitle: "1) Websites & web projects",
      productTitle: "2) Product development & integrations",
      supportTitle: "3) Support & team formats",
      noteTitle: "4) About estimates",
      noteBody:
        "Prices on this page are guidelines. A precise budget is prepared after a brief: goals, features, integrations, deadline, design and SEO requirements.",
      noteBullets: [
        "Brief and preliminary range — within 24 hours",
        "Detailed estimate and milestones — 1–2 business days",
      ],
      cta: "Get a quote for your project",
      websiteServices: [
        {
          service: "Landing page (1–3 sections, lead form)",
          scope: "Design + frontend + basic analytics",
          price: "200k – 500k KZT",
        },
        {
          service: "Corporate website (5–15 pages)",
          scope: "Structure, UI, CMS, SEO basics",
          price: "500k – 1.5M KZT",
        },
        {
          service: "E-commerce store",
          scope: "Catalog, cart, payments, admin panel",
          price: "1.2 – 3.3M KZT",
        },
        {
          service: "Promo site / special project",
          scope: "Animations, interactivity, custom UI",
          price: "700k – 2M KZT",
        },
      ],
      productServices: [
        {
          service: "Web MVP",
          scope: "Auth, roles, core features, admin",
          price: "2 – 6M KZT",
        },
        {
          service: "Mobile MVP (iOS/Android)",
          scope: "React Native/Flutter + API",
          price: "3.3 – 8.3M KZT",
        },
        {
          service: "AI features / RAG",
          scope: "LLM integration, knowledge base, metrics",
          price: "1.3 – 4.7M KZT",
        },
        {
          service: "CRM/ERP/API integrations",
          scope: "Two-way sync, webhooks, logging",
          price: "500k – 2.7M KZT",
        },
        {
          service: "DevOps setup / CI-CD / infrastructure",
          scope: "Docker, CI/CD, staging/prod, monitoring, backup, rollback",
          price: "700k – 3M KZT",
        },
      ],
      supportServices: [
        {
          service: "Website support",
          scope: "Updates, small tasks, monitoring",
          price: "100k – 300k KZT/mo",
        },
        {
          service: "Product support",
          scope: "Features, bugfixes, DevOps, QA",
          price: "300k – 1.2M KZT/mo",
        },
        {
          service: "Dedicated team",
          scope: "PM + Dev + QA (+design on request)",
          price: "1.5 – 4.7M KZT/mo",
        },
        {
          service: "DevOps retainer",
          scope: "Monitoring, releases, alerts, incidents, cloud-cost optimization",
          price: "350k – 1.5M KZT/mo",
        },
      ],
    },
  },
} as const;

