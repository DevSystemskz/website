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
      contactBtn: "Написать",
      discussBtn: "Получить оценку",
    },
    hero: {
      eyebrow: "Стартапы и бизнес · Астана",
      titleA: "Лендинги и MVP",
      titleB: "для запуска продукта",
      description:
        "Делаем сайты под заявки и узкие MVP для стартапов: оффер, продукт, мессенджеры, SEO-база. Оценка за 1–2 дня.",
      discussBtn: "Получить оценку за 2 дня",
      portfolioBtn: "Смотреть живые сайты",
      servicesBtn: "Услуги",
      stats: [
        { n: "3", t: "живых кейса в продакшене" },
        { n: "2", t: "дня на оценку" },
        { n: "MVP", t: "для стартапов под ключ" },
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
      web: "Лендинги",
      mobile: "MVP для стартапов",
      integrations: "Корпоративные сайты",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      description:
        "Веб-студия в Астане: лендинги, MVP для стартапов и сайты, которые собирают заявки.",
      rights: "Все права защищены.",
    },
    sections: {
      servicesTag: "Услуги",
      servicesTitle: "Что заказываете",
      servicesDesc:
        "Лендинги под заявки, MVP для стартапов и корпоративные сайты. Один подрядчик от брифа до запуска.",
      portfolioTag: "Портфолио",
      portfolioTitle: "Живые сайты в продакшене",
      portfolioDesc:
        "Три запуска в Астане. Откройте кейс: задача, решение и результат.",
      processTag: "Процесс",
      processTitle: "От брифа до запуска",
      processDesc:
        "Четыре шага без сюрпризов: сначала смета и сроки, потом продукт.",
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
      aboutTitle: "Студия для стартапов и бизнеса",
      aboutDesc:
        "Запускаем лендинги и MVP. Сроки в плане работ. Связь в Telegram. Демо каждого этапа до следующей оплаты.",
      contactTag: "Контакты",
      contactTitle: "Опишите задачу",
      contactDesc:
        "Напишите в форму, Telegram или WhatsApp. Ответим и пришлём вилку бюджета.",
      faqTag: "Вопросы",
      faqTitle: "Перед заявкой",
      faqDesc: "Сроки, состав работ и как считаем бюджет.",
      faqItems: [
        {
          question: "Делаете ли вы MVP для стартапов?",
          answer:
            "Да. Узкий срез продукта: auth, админка и ключевые сценарии — без раздутого scope. Этапы и демо фиксируем в смете.",
        },
        {
          question: "Сколько занимает лендинг?",
          answer:
            "Обычно 1–2 недели после брифа и согласования структуры страницы.",
        },
        {
          question: "Что входит в сайт или MVP?",
          answer:
            "Дизайн, вёрстка или продукт под телефон, формы/интеграции, базовая SEO-разметка и запуск.",
        },
        {
          question: "Когда будет оценка?",
          answer:
            "Вилку бюджета и план работ присылаем за 1–2 дня после описания задачи.",
        },
        {
          question: "Где вы работаете?",
          answer:
            "В Астане и удалённо по Казахстану. Связь в Telegram и WhatsApp.",
        },
      ],
      ctaTitle: "Нужна оценка?",
      ctaDesc:
        "Кратко опишите задачу — смета и план работ за 1–2 дня.",
      leaveRequest: "Оставить заявку",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      sent: "Заявка отправлена. Ответим и пришлём вилку бюджета за 1–2 дня.",
      send: "Отправить заявку",
      sending: "Отправка...",
      name: "Имя / Компания",
      email: "Email",
      message: "Сообщение",
      namePh: "Как к вам обращаться?",
      messagePh: "Какой сайт нужен, срок, бюджет если есть...",
      formTrust:
        "Ответим в Telegram, WhatsApp или на почту. Вилка бюджета — за 1–2 дня. Оценка бесплатная.",
      tellProject: "Написать о задаче",
      submitError: "Не удалось отправить заявку. Попробуйте ещё раз.",
      blogTitle: "Блог DevSystems",
      blogDesc:
        "Практика по сайтам, архитектуре и запуску продуктов для бизнеса в Казахстане.",
      readMore: "Читать",
      blogBack: "← Назад в блог",
      portfolioView: "смотреть кейс",
      portfolioBack: "← Назад к портфолио",
      portfolioChallenge: "Задача",
      portfolioSolution: "Решение",
      portfolioResults: "Результаты",
      portfolioStack: "Стек",
      portfolioDuration: "Срок",
      portfolioCtaTitle: "Нужен похожий сайт?",
      portfolioCtaDesc: "Опишите задачу — пришлём оценку и план за 1–2 дня.",
      portfolioLiveSite: "Открыть сайт",
    },
    pricing: {
      tag: "Прайс",
      title: "Сколько стоят сайт и MVP",
      intro:
        "Ориентиры для лендинга, MVP стартапа, корпоративного сайта и поддержки. Точная смета после брифа — за 1–2 дня.",
      offerBadge: "Для бизнеса",
      offerTitle: "Лендинг под заявки",
      offerPrice: "от 200 000 ₸",
      offerTime: "1–2 недели после согласования структуры",
      offerIncludes: [
        "Оффер и структура первого экрана",
        "Вёрстка под телефон",
        "Кнопка и форма в WhatsApp / Telegram",
        "Базовая SEO-разметка и запуск",
      ],
      offerGuarantee:
        "Оценка бесплатная. Если задача не наша — скажем на брифе, без счёта.",
      mvpBadge: "Для стартапов",
      mvpTitle: "Web MVP",
      mvpPrice: "от 1.5 млн ₸",
      mvpTime: "Узкий продукт за фиксированные этапы",
      mvpIncludes: [
        "Auth, админка и ключевые сценарии",
        "API и база данных",
        "Демо каждый спринт",
        "Запуск и план следующих фич",
      ],
      mvpGuarantee:
        "Сначала смета и scope. Не раздуваем бэклог — только то, что нужно для первого запуска.",
      colService: "Услуга",
      colScope: "Что входит",
      colPrice: "Стоимость",
      colFormat: "Формат",
      websitesTitle: "1) Сайты и веб-проекты",
      productTitle: "2) Продуктовая разработка и интеграции",
      supportTitle: "3) Поддержка и командные форматы",
      noteTitle: "Как считаем бюджет",
      noteBody:
        "Цифры ниже — вилка. Финальная сумма зависит от числа страниц, интеграций, дедлайна и объёма дизайна.",
      noteBullets: [
        "Предварительная вилка — в течение 24 часов после брифа",
        "Детальная смета и этапы — за 1–2 рабочих дня",
      ],
      cta: "Получить смету за 2 дня",
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
      contactBtn: "Жазу",
      discussBtn: "Баға алу",
    },
    hero: {
      eyebrow: "Стартап пен бизнес · Астана",
      titleA: "Лендинг және MVP",
      titleB: "өнімді іске қосу үшін",
      description:
        "Өтінімге арналған сайттар мен стартапқа арналған тар MVP: оффер, өнім, мессенджер, SEO-база. Бағалау — 1–2 күн.",
      discussBtn: "2 күнде баға алу",
      portfolioBtn: "Тірі сайттарды көру",
      servicesBtn: "Қызметтер",
      stats: [
        { n: "3", t: "продакшендегі кейс" },
        { n: "2", t: "күнде бағалау" },
        { n: "MVP", t: "стартапқа кілтпен" },
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
      web: "Лендингтер",
      mobile: "Стартапқа MVP",
      integrations: "Корпоративтік сайттар",
      privacy: "Құпиялылық саясаты",
      terms: "Пайдалану шарттары",
      description:
        "Астанадағы веб-студия: лендинг, стартапқа MVP және өтінім жинайтын сайттар.",
      rights: "Барлық құқықтар қорғалған.",
    },
    sections: {
      servicesTag: "Қызметтер",
      servicesTitle: "Не тапсырыс бересіз",
      servicesDesc:
        "Өтінім лендингі, стартапқа MVP және корпоративтік сайттар. Брифтен іске қосуға дейін бір подрядчик.",
      portfolioTag: "Портфолио",
      portfolioTitle: "Продакшендегі тірі сайттар",
      portfolioDesc:
        "Астанадағы үш іске қосу. Кейсті ашыңыз: міндет, шешім, нәтиже.",
      processTag: "Процесс",
      processTitle: "Брифтен іске қосуға дейін",
      processDesc:
        "Төрт қадам, сюрпризсіз: алдымен смета мен мерзім, содан кейін өнім.",
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
      aboutTitle: "Стартап пен бизнеске арналған студия",
      aboutDesc:
        "Лендинг пен MVP іске қосамыз. Мерзім жоспарда. Байланыс Telegram-да. Әр кезеңде демо — келесі төлемге дейін.",
      contactTag: "Байланыс",
      contactTitle: "Міндетті сипаттаңыз",
      contactDesc:
        "Форма, Telegram немесе WhatsApp арқылы жазыңыз. Жауап беріп, бюджет вилкасын жібереміз.",
      faqTag: "Сұрақтар",
      faqTitle: "Өтінімге дейін",
      faqDesc: "Мерзім, жұмыс құрамы және бюджетті қалай есептейміз.",
      faqItems: [
        {
          question: "Стартапқа MVP жасайсыз ба?",
          answer:
            "Иә. Тар өнім кесіндісі: auth, админка және негізгі сценарийлер — артық scope жоқ. Кезең мен демо сметада бекітіледі.",
        },
        {
          question: "Лендинг қанша уақыт алады?",
          answer:
            "Әдетте бриф пен бет құрылымын келіскеннен кейін 1–2 апта.",
        },
        {
          question: "Сайт немесе MVP-ге не кіреді?",
          answer:
            "Дизайн, телефонға бейімделген верстка немесе өнім, формалар/интеграциялар, негізгі SEO және іске қосу.",
        },
        {
          question: "Бағалау қашан болады?",
          answer:
            "Бюджет вилкасы мен жұмыс жоспарын міндетті сипаттағаннан кейін 1–2 күнде жібереміз.",
        },
        {
          question: "Қайда жұмыс істейсіз?",
          answer:
            "Астанада және Қазақстан бойынша қашықтан. Байланыс Telegram мен WhatsApp арқылы.",
        },
      ],
      ctaTitle: "Бағалау керек пе?",
      ctaDesc:
        "Міндетті қысқаша жазыңыз — смета мен жоспар 1–2 күнде.",
      leaveRequest: "Өтінім қалдыру",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      sent: "Өтінім жіберілді. Жауап беріп, бюджет вилкасын 1–2 күнде жібереміз.",
      send: "Өтінімді жіберу",
      sending: "Жіберілуде...",
      name: "Аты / Компания",
      email: "Эл. пошта",
      message: "Хабарлама",
      namePh: "Сізге қалай хабарласайық?",
      messagePh: "Қандай сайт керек, мерзім, бюджет болса...",
      formTrust:
        "Telegram, WhatsApp немесе пошта арқылы жауап береміз. Бюджет вилкасы — 1–2 күнде. Бағалау тегін.",
      tellProject: "Міндет туралы жазу",
      submitError: "Өтінімді жіберу мүмкін болмады. Қайта көріңіз.",
      blogTitle: "DevSystems блогы",
      blogDesc:
        "Қазақстан бизнесіне сайт, архитектура және іске қосу тәжірибесі.",
      readMore: "Оқу",
      blogBack: "← Блогқа оралу",
      portfolioView: "кейсті қарау",
      portfolioBack: "← Портфолиоға оралу",
      portfolioChallenge: "Міндет",
      portfolioSolution: "Шешім",
      portfolioResults: "Нәтижелер",
      portfolioStack: "Стек",
      portfolioDuration: "Мерзім",
      portfolioCtaTitle: "Ұқсас сайт керек пе?",
      portfolioCtaDesc: "Міндетті жазыңыз — 1–2 күнде бағалау мен жоспар жібереміз.",
      portfolioLiveSite: "Сайтты ашу",
    },
    pricing: {
      tag: "Баға",
      title: "Сайт пен MVP қанша тұрады",
      intro:
        "Лендинг, стартап MVP, корпоративтік сайт және қолдау үшін бағдар. Нақты смета брифтен кейін — 1–2 күнде.",
      offerBadge: "Бизнес үшін",
      offerTitle: "Өтінімге арналған лендинг",
      offerPrice: "200 000 ₸-дан",
      offerTime: "Құрылымды келіскеннен кейін 1–2 апта",
      offerIncludes: [
        "Бірінші экран оффері мен құрылымы",
        "Телефонға бейімделген верстка",
        "WhatsApp / Telegram батырмасы мен формасы",
        "Негізгі SEO-белгілеу және іске қосу",
      ],
      offerGuarantee:
        "Бағалау тегін. Міндет бізге сәйкес келмесе — брифте айтамыз, шотсыз.",
      mvpBadge: "Стартап үшін",
      mvpTitle: "Web MVP",
      mvpPrice: "1.5 млн ₸-дан",
      mvpTime: "Бекітілген кезеңдермен тар өнім",
      mvpIncludes: [
        "Auth, админка және негізгі сценарийлер",
        "API және дерекқор",
        "Әр спринтте демо",
        "Іске қосу және келесі фич жоспары",
      ],
      mvpGuarantee:
        "Алдымен смета мен scope. Бэклогты үлкейтпейміз — тек бірінші іске қосуға қажеті.",
      colService: "Қызмет",
      colScope: "Не кіреді",
      colPrice: "Құны",
      colFormat: "Формат",
      websitesTitle: "1) Сайттар және веб-жобалар",
      productTitle: "2) Өнімдік әзірлеу және интеграциялар",
      supportTitle: "3) Қолдау және командалық форматтар",
      noteTitle: "Бюджетті қалай есептейміз",
      noteBody:
        "Төмендегі сандар — вилка. Соңғы сома бет санына, интеграцияларға, дедлайнға және дизайн көлеміне байланысты.",
      noteBullets: [
        "Алдын ала вилка — брифтен кейін 24 сағат ішінде",
        "Толық смета және кезеңдер — 1–2 жұмыс күні",
      ],
      cta: "2 күнде смета алу",
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
      contactBtn: "Message us",
      discussBtn: "Get a quote",
    },
    hero: {
      eyebrow: "Startups & business · Astana",
      titleA: "Landings and MVPs",
      titleB: "to launch your product",
      description:
        "Lead-focused sites and narrow MVPs for startups: offer, product, messengers, SEO basics. Quote in 1–2 days.",
      discussBtn: "Get a quote in 2 days",
      portfolioBtn: "See live sites",
      servicesBtn: "Services",
      stats: [
        { n: "3", t: "live cases in production" },
        { n: "2", t: "days to estimate" },
        { n: "MVP", t: "for startups end to end" },
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
      web: "Landing pages",
      mobile: "Startup MVPs",
      integrations: "Corporate sites",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      description:
        "Web studio in Astana: landings, startup MVPs, and sites that collect leads.",
      rights: "All rights reserved.",
    },
    sections: {
      servicesTag: "Services",
      servicesTitle: "What you can order",
      servicesDesc:
        "Lead landings, startup MVPs, and corporate sites. One team from brief to launch.",
      portfolioTag: "Portfolio",
      portfolioTitle: "Live sites in production",
      portfolioDesc:
        "Three launches in Astana. Open a case for the challenge, solution, and results.",
      processTag: "Process",
      processTitle: "From brief to launch",
      processDesc:
        "Four clear steps: estimate and timeline first, then the product.",
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
      aboutTitle: "A studio for startups and business",
      aboutDesc:
        "We ship landings and MVPs. Timelines in the plan. Chat in Telegram. Demo each stage before the next payment.",
      contactTag: "Contact",
      contactTitle: "Describe the task",
      contactDesc:
        "Use the form, Telegram, or WhatsApp. We’ll reply with a budget range.",
      faqTag: "FAQ",
      faqTitle: "Before you apply",
      faqDesc: "Timelines, scope of work, and how we price.",
      faqItems: [
        {
          question: "Do you build MVPs for startups?",
          answer:
            "Yes. A narrow product slice: auth, admin, and core flows — without bloated scope. Stages and demos are fixed in the estimate.",
        },
        {
          question: "How long does a landing take?",
          answer:
            "Usually 1–2 weeks after the brief and page structure are approved.",
        },
        {
          question: "What’s included in a site or MVP?",
          answer:
            "Design, mobile layout or product, forms/integrations, basic SEO markup, and launch.",
        },
        {
          question: "When will I get an estimate?",
          answer:
            "We send a budget range and work plan within 1–2 days after you describe the task.",
        },
        {
          question: "Where do you work?",
          answer:
            "In Astana and remotely across Kazakhstan. We chat on Telegram and WhatsApp.",
        },
      ],
      ctaTitle: "Need a quote?",
      ctaDesc:
        "Short brief — estimate and plan in 1–2 days.",
      leaveRequest: "Submit request",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      sent: "Request sent. We’ll reply with a budget range in 1–2 days.",
      send: "Send request",
      sending: "Sending...",
      name: "Name / Company",
      email: "Email",
      message: "Message",
      namePh: "How should we address you?",
      messagePh: "What site you need, deadline, budget if any...",
      formTrust:
        "We’ll reply on Telegram, WhatsApp, or email. Budget range in 1–2 days. The estimate is free.",
      tellProject: "Write about the task",
      submitError: "Failed to send request. Please try again.",
      blogTitle: "DevSystems Blog",
      blogDesc:
        "Practical notes on sites, architecture, and shipping products for businesses in Kazakhstan.",
      readMore: "Read",
      blogBack: "← Back to blog",
      portfolioView: "view case",
      portfolioBack: "← Back to portfolio",
      portfolioChallenge: "Challenge",
      portfolioSolution: "Solution",
      portfolioResults: "Results",
      portfolioStack: "Stack",
      portfolioDuration: "Timeline",
      portfolioCtaTitle: "Need a similar site?",
      portfolioCtaDesc: "Send the brief — we’ll reply with an estimate in 1–2 days.",
      portfolioLiveSite: "Open website",
    },
    pricing: {
      tag: "Pricing",
      title: "What a site or MVP costs",
      intro:
        "Ranges for landings, startup MVPs, corporate sites, and support. Exact quote after a brief — in 1–2 days.",
      offerBadge: "For business",
      offerTitle: "Landing built for leads",
      offerPrice: "from 200,000 ₸",
      offerTime: "1–2 weeks after structure approval",
      offerIncludes: [
        "Offer and first-screen structure",
        "Mobile-ready layout",
        "WhatsApp / Telegram button and form",
        "Basic SEO markup and launch",
      ],
      offerGuarantee:
        "The estimate is free. If we’re not the right fit, we’ll say so on the brief — no invoice.",
      mvpBadge: "For startups",
      mvpTitle: "Web MVP",
      mvpPrice: "from 1.5M ₸",
      mvpTime: "A narrow product with fixed stages",
      mvpIncludes: [
        "Auth, admin, and core flows",
        "API and database",
        "Demo every sprint",
        "Launch plus a plan for next features",
      ],
      mvpGuarantee:
        "Estimate and scope first. We don’t inflate the backlog — only what you need for the first launch.",
      colService: "Service",
      colScope: "What's included",
      colPrice: "Price",
      colFormat: "Format",
      websitesTitle: "1) Websites & web projects",
      productTitle: "2) Product development & integrations",
      supportTitle: "3) Support & team formats",
      noteTitle: "How we price",
      noteBody:
        "Numbers below are ranges. Final cost depends on page count, integrations, deadline, and design scope.",
      noteBullets: [
        "Preliminary range — within 24 hours after the brief",
        "Detailed estimate and stages — in 1–2 business days",
      ],
      cta: "Get a quote in 2 days",
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

