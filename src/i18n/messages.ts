export const locales = ["ru", "kk", "en"] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  ru: {
    nav: {
      services: "Услуги",
      blog: "Блог",
      portfolio: "Кейсы",
      about: "О нас",
      process: "Процесс",
      team: "Команда",
      contact: "Контакты",
      contactBtn: "Связаться",
      discussBtn: "Получить оценку",
    },
    hero: {
      badge: "AI · B2B SaaS · FinTech · Mobile",
      titleA: "Запускаем AI-фичи и B2B-платформы",
      titleB: "в production за 8–14 недель",
      description:
        "Product engineering для стартапов и product-команд: LLM/RAG, веб, mobile. Discovery → архитектура → релиз с прозрачными спринтами.",
      discussBtn: "Получить оценку за 48ч",
      casesBtn: "Смотреть кейсы",
      calendlyBtn: "15-min созвон",
      telegramBtn: "Telegram",
      stats: [
        { n: "50+", t: "релизов в production" },
        { n: "8+", t: "лет в продуктовой разработке" },
        { n: "48ч", t: "оценка и план работ" },
      ],
      trustLine: "NDA с первого созвона · Демо каждые 2 недели · Senior-only команда",
    },
    trust: {
      tag: "Нам доверяют",
      title: "Работаем с product-командами в FinTech, SaaS и логистике",
      industries: ["FinTech", "B2B SaaS", "Logistics", "E-commerce", "HealthTech"],
    },
    engineering: {
      tag: "Engineering",
      title: "Как мы строим продукты",
      desc: "Не «просто код» — архитектура, качество и предсказуемая поставка.",
      items: [
        {
          title: "Архитектура и ADR",
          desc: "Фиксируем решения до разработки: масштаб, безопасность, интеграции.",
        },
        {
          title: "CI/CD и тесты",
          desc: "Автотесты, code review, staging перед каждым релизом.",
        },
        {
          title: "AI delivery",
          desc: "RAG, eval-метрики, guardrails — не демо в чате, а production-фича.",
        },
        {
          title: "Security-by-design",
          desc: "OWASP, secrets management, RBAC, аудит доступа.",
        },
      ],
    },
    footer: {
      company: "Компания",
      services: "Услуги",
      legal: "Правовая информация",
      about: "О компании",
      blog: "Блог",
      portfolio: "Кейсы",
      team: "Команда",
      contact: "Контакты",
      web: "Веб-разработка",
      mobile: "Мобильные приложения",
      ai: "AI-интеграции",
      mvp: "MVP за 10 недель",
      integrations: "Интеграции",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      description:
        "Product & AI engineering: B2B-платформы, LLM/RAG, веб и mobile для стартапов и scale-up команд.",
      rights: "Все права защищены.",
    },
    sections: {
      servicesTag: "Услуги",
      servicesTitle: "Фокус на продуктах, которые приносят результат",
      servicesDesc:
        "Не распыляемся: AI-интеграции, B2B-платформы, MVP и mobile — с измеримыми сроками и scope.",
      portfolioTag: "Кейсы",
      portfolioTitle: "Избранные проекты с результатами",
      portfolioDesc:
        "Реальные задачи с метриками: сроки, бизнес-эффект и стек. Подробности — на странице кейса.",
      viewCase: "Подробнее о кейсе",
      processTag: "Процесс",
      processTitle: "Как мы работаем",
      processDesc:
        "Прозрачные этапы: вы видите backlog, демо и риски на каждом спринте.",
      teamTag: "Команда",
      teamTitle: "Senior-команда под ваш продукт",
      teamDesc:
        "Выделенные инженеры, PM и дизайн. Без ротации «кого дадут» посреди проекта.",
      testimonialsTag: "Отзывы",
      testimonialsTitle: "Что говорят клиенты",
      testimonialsDesc: "Конкретика по срокам, качеству и коммуникации — не общие слова.",
      technologiesTag: "Технологии",
      technologiesTitle: "Production-ready стек",
      technologiesDesc:
        "Инструменты под задачу: от быстрого MVP до high-load и AI pipelines.",
      aboutTag: "О нас",
      aboutTitle: "Product engineering partner, не «студия на всё»",
      aboutDesc:
        "Помогаем вывести AI-фичи и B2B-продукты в production: с архитектурой, тестами и передачей вашей команде.",
      contactTag: "Контакты",
      contactTitle: "Получите оценку за 48 часов",
      contactDesc:
        "Опишите задачу — вернёмся с вариантами scope, сроков и команды. Или забронируйте короткий созвон.",
      ctaTitle: "Готовы обсудить ваш проект?",
      ctaDesc:
        "Оценка и план работ за 1–2 рабочих дня. NDA по запросу с первого контакта.",
      leaveRequest: "Оставить заявку",
      bookCall: "Забронировать созвон",
      sent: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      send: "Отправить заявку",
      sending: "Отправка...",
      name: "Имя / Компания",
      email: "Email",
      message: "Сообщение",
      projectType: "Тип проекта",
      budget: "Бюджет",
      timeline: "Сроки",
      namePh: "Как к вам обращаться?",
      messagePh: "Кратко: продукт, цели, дедлайны, текущий стек...",
      tellProject: "Получить оценку",
      submitError: "Не удалось отправить заявку. Попробуйте ещё раз.",
      blogTitle: "Блог DevSystems",
      blogDesc:
        "Практика разработки: архитектура, AI, MVP и управление продуктом.",
      readMore: "Читать",
      projectTypes: {
        ai: "AI / LLM / RAG",
        mvp: "MVP / новый продукт",
        web: "Веб / B2B-платформа",
        mobile: "Mobile",
        support: "Поддержка / доработка",
        other: "Другое",
      },
      budgets: {
        under10: "до $10k",
        mid: "$10k – $30k",
        high: "$30k – $80k",
        enterprise: "$80k+",
        unknown: "Пока не определён",
      },
      timelines: {
        asap: "ASAP",
        oneThree: "1–3 месяца",
        threePlus: "3+ месяца",
        flexible: "Гибко",
      },
      nda: "Нужен NDA перед детальным обсуждением",
    },
    casePage: {
      challenge: "Задача",
      solution: "Решение",
      results: "Результаты",
      duration: "Срок",
      team: "Команда",
      stack: "Стек",
      discuss: "Обсудить похожий проект",
      back: "Все кейсы",
    },
    sticky: {
      telegram: "Telegram",
      estimate: "Оценка",
    },
  },
  kk: {
    nav: {
      services: "Қызметтер",
      blog: "Блог",
      portfolio: "Кейстер",
      about: "Біз туралы",
      process: "Процесс",
      team: "Команда",
      contact: "Байланыс",
      contactBtn: "Байланысу",
      discussBtn: "Бағалау алу",
    },
    hero: {
      badge: "AI · B2B SaaS · FinTech · Mobile",
      titleA: "AI-фичалар мен B2B-платформаларды",
      titleB: "8–14 аптада production-ға шығарамыз",
      description:
        "Стартаптар мен product-командаларға: LLM/RAG, веб, mobile. Discovery → архитектура → релиз.",
      discussBtn: "48 сағатта бағалау",
      casesBtn: "Кейстерді көру",
      calendlyBtn: "15 мин қоңырау",
      telegramBtn: "Telegram",
      stats: [
        { n: "50+", t: "production релиз" },
        { n: "8+", t: "жыл тәжірибе" },
        { n: "48 сағ", t: "баға және жоспар" },
      ],
      trustLine: "NDA · 2 аптада демо · Senior команда",
    },
    trust: {
      tag: "Сенім",
      title: "FinTech, SaaS және логистика product-командаларымен жұмыс",
      industries: ["FinTech", "B2B SaaS", "Logistics", "E-commerce", "HealthTech"],
    },
    engineering: {
      tag: "Engineering",
      title: "Өнімді қалай құрамыз",
      desc: "Тек код емес — архитектура, сапа және болжамды жеткізу.",
      items: [
        {
          title: "Архитектура және ADR",
          desc: "Шешімдерді әзірлеу алдында бекітеміз.",
        },
        {
          title: "CI/CD және тесттер",
          desc: "Автотест, code review, staging.",
        },
        {
          title: "AI delivery",
          desc: "RAG, eval, guardrails — production-фича.",
        },
        {
          title: "Security-by-design",
          desc: "OWASP, secrets, RBAC.",
        },
      ],
    },
    footer: {
      company: "Компания",
      services: "Қызметтер",
      legal: "Құқықтық ақпарат",
      about: "Компания туралы",
      blog: "Блог",
      portfolio: "Кейстер",
      team: "Команда",
      contact: "Байланыс",
      web: "Веб-әзірлеу",
      mobile: "Мобильді қосымшалар",
      ai: "AI интеграция",
      mvp: "MVP 10 аптада",
      integrations: "Интеграциялар",
      privacy: "Құпиялылық саясаты",
      terms: "Пайдалану шарттары",
      description:
        "Product & AI engineering: B2B, LLM/RAG, веб және mobile.",
      rights: "Барлық құқықтар қорғалған.",
    },
    sections: {
      servicesTag: "Қызметтер",
      servicesTitle: "Нәтиже беретін өнімдерге фокус",
      servicesDesc:
        "AI, B2B-платформалар, MVP және mobile — нақты мерзіммен.",
      portfolioTag: "Кейстер",
      portfolioTitle: "Нәтижемен таңдамалы жобалар",
      portfolioDesc:
        "Мерзім, бизнес-эффект және стек. Толығырақ — кейс бетінде.",
      viewCase: "Кейс туралы",
      processTag: "Процесс",
      processTitle: "Біз қалай жұмыс істейміз",
      processDesc: "Ашық backlog, демо және тәуекелдер әр спринтте.",
      teamTag: "Команда",
      teamTitle: "Senior команда",
      teamDesc: "Арнайы инженерлер, PM және дизайн.",
      testimonialsTag: "Пікірлер",
      testimonialsTitle: "Клиенттер не дейді",
      testimonialsDesc: "Мерзім, сапа және коммуникация.",
      technologiesTag: "Технологиялар",
      technologiesTitle: "Production-ready стек",
      technologiesDesc: "MVP-ден high-load және AI-ға дейін.",
      aboutTag: "Біз туралы",
      aboutTitle: "Product engineering серіктесі",
      aboutDesc:
        "AI және B2B-өнімдерді production-ға шығаруға көмектесеміз.",
      contactTag: "Байланыс",
      contactTitle: "48 сағатта бағалау",
      contactDesc:
        "Міндетті сипаттаңыз — scope, мерзім және команда ұсынамыз.",
      ctaTitle: "Жобаңызды талқылауға дайынсыз ба?",
      ctaDesc: "1–2 жұмыс күні ішінде баға және жоспар.",
      leaveRequest: "Өтінім қалдыру",
      bookCall: "Қоңырау жазу",
      sent: "Өтінім жіберілді. Жақын арада хабарласамыз.",
      send: "Өтінімді жіберу",
      sending: "Жіберілуде...",
      name: "Аты / Компания",
      email: "Эл. пошта",
      message: "Хабарлама",
      projectType: "Жоба түрі",
      budget: "Бюджет",
      timeline: "Мерзім",
      namePh: "Сізге қалай хабарласайық?",
      messagePh: "Өнім, мақсат, дедлайн, стек...",
      tellProject: "Бағалау алу",
      submitError: "Өтінімді жіберу мүмкін болмады.",
      blogTitle: "DevSystems блогы",
      blogDesc: "Архитектура, AI, MVP тәжірибесі.",
      readMore: "Оқу",
      projectTypes: {
        ai: "AI / LLM / RAG",
        mvp: "MVP / жаңа өнім",
        web: "Веб / B2B",
        mobile: "Mobile",
        support: "Қолдау / доработка",
        other: "Басқа",
      },
      budgets: {
        under10: "$10k дейін",
        mid: "$10k – $30k",
        high: "$30k – $80k",
        enterprise: "$80k+",
        unknown: "Анық емес",
      },
      timelines: {
        asap: "ASAP",
        oneThree: "1–3 ай",
        threePlus: "3+ ай",
        flexible: "Икемді",
      },
      nda: "NDA қажет",
    },
    casePage: {
      challenge: "Міндет",
      solution: "Шешім",
      results: "Нәтижелер",
      duration: "Мерзім",
      team: "Команда",
      stack: "Стек",
      discuss: "Ұқсас жобаны талқылау",
      back: "Барлық кейстер",
    },
    sticky: {
      telegram: "Telegram",
      estimate: "Бағалау",
    },
  },
  en: {
    nav: {
      services: "Services",
      blog: "Blog",
      portfolio: "Cases",
      about: "About",
      process: "Process",
      team: "Team",
      contact: "Contact",
      contactBtn: "Contact",
      discussBtn: "Get estimate",
    },
    hero: {
      badge: "AI · B2B SaaS · FinTech · Mobile",
      titleA: "We ship AI features and B2B platforms",
      titleB: "to production in 8–14 weeks",
      description:
        "Product engineering for startups and product teams: LLM/RAG, web, mobile. Discovery → architecture → release with transparent sprints.",
      discussBtn: "Get estimate in 48h",
      casesBtn: "View case studies",
      calendlyBtn: "Book 15-min call",
      telegramBtn: "Telegram",
      stats: [
        { n: "50+", t: "production releases" },
        { n: "8+", t: "years in product dev" },
        { n: "48h", t: "estimate & roadmap" },
      ],
      trustLine: "NDA on request · Demo every 2 weeks · Senior-only team",
    },
    trust: {
      tag: "Trusted by",
      title: "Product teams in FinTech, SaaS, and logistics",
      industries: ["FinTech", "B2B SaaS", "Logistics", "E-commerce", "HealthTech"],
    },
    engineering: {
      tag: "Engineering",
      title: "How we build products",
      desc: "Not just code — architecture, quality, and predictable delivery.",
      items: [
        {
          title: "Architecture & ADRs",
          desc: "Decisions documented before build: scale, security, integrations.",
        },
        {
          title: "CI/CD & testing",
          desc: "Automated tests, code review, staging before every release.",
        },
        {
          title: "AI delivery",
          desc: "RAG, eval metrics, guardrails — production features, not chat demos.",
        },
        {
          title: "Security-by-design",
          desc: "OWASP, secrets management, RBAC, access audits.",
        },
      ],
    },
    footer: {
      company: "Company",
      services: "Services",
      legal: "Legal",
      about: "About",
      blog: "Blog",
      portfolio: "Cases",
      team: "Team",
      contact: "Contact",
      web: "Web development",
      mobile: "Mobile apps",
      ai: "AI integration",
      mvp: "MVP in 10 weeks",
      integrations: "Integrations",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      description:
        "Product & AI engineering: B2B platforms, LLM/RAG, web and mobile for startups and scale-ups.",
      rights: "All rights reserved.",
    },
    sections: {
      servicesTag: "Services",
      servicesTitle: "Focused on products that deliver outcomes",
      servicesDesc:
        "AI integrations, B2B platforms, MVP, and mobile — with clear timelines and scope.",
      portfolioTag: "Cases",
      portfolioTitle: "Selected work with measurable results",
      portfolioDesc:
        "Timeline, business impact, and stack. Full details on each case page.",
      viewCase: "View case study",
      processTag: "Process",
      processTitle: "How we work",
      processDesc:
        "Transparent backlog, demos, and risk visibility every sprint.",
      teamTag: "Team",
      teamTitle: "Senior team dedicated to your product",
      teamDesc:
        "Dedicated engineers, PM, and design — no mid-project bait-and-switch.",
      testimonialsTag: "Testimonials",
      testimonialsTitle: "What clients say",
      testimonialsDesc: "Specific feedback on timelines, quality, and communication.",
      technologiesTag: "Technologies",
      technologiesTitle: "Production-ready stack",
      technologiesDesc:
        "Tools matched to your goals — from fast MVP to high-load and AI pipelines.",
      aboutTag: "About",
      aboutTitle: "Product engineering partner — not a generic agency",
      aboutDesc:
        "We help ship AI features and B2B products to production with architecture, tests, and handover to your team.",
      contactTag: "Contact",
      contactTitle: "Get an estimate within 48 hours",
      contactDesc:
        "Describe your project — we'll reply with scope, timeline, and team options. Or book a short intro call.",
      ctaTitle: "Ready to discuss your project?",
      ctaDesc:
        "Estimate and delivery plan within 1–2 business days. NDA available from first contact.",
      leaveRequest: "Submit request",
      bookCall: "Book intro call",
      sent: "Request sent. We will contact you shortly.",
      send: "Send request",
      sending: "Sending...",
      name: "Name / Company",
      email: "Email",
      message: "Message",
      projectType: "Project type",
      budget: "Budget",
      timeline: "Timeline",
      namePh: "How should we address you?",
      messagePh: "Product, goals, deadlines, current stack...",
      tellProject: "Get estimate",
      submitError: "Failed to send request. Please try again.",
      blogTitle: "DevSystems Blog",
      blogDesc:
        "Software engineering practice: architecture, AI, MVP, and product delivery.",
      readMore: "Read",
      projectTypes: {
        ai: "AI / LLM / RAG",
        mvp: "MVP / new product",
        web: "Web / B2B platform",
        mobile: "Mobile",
        support: "Support / enhancements",
        other: "Other",
      },
      budgets: {
        under10: "under $10k",
        mid: "$10k – $30k",
        high: "$30k – $80k",
        enterprise: "$80k+",
        unknown: "Not sure yet",
      },
      timelines: {
        asap: "ASAP",
        oneThree: "1–3 months",
        threePlus: "3+ months",
        flexible: "Flexible",
      },
      nda: "NDA required before detailed discussion",
    },
    casePage: {
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      duration: "Duration",
      team: "Team",
      stack: "Stack",
      discuss: "Discuss a similar project",
      back: "All cases",
    },
    sticky: {
      telegram: "Telegram",
      estimate: "Estimate",
    },
  },
} as const;

export type ServicePageKey = "ai-integration" | "mvp-development";

export const servicePages: Record<
  Locale,
  Record<
    ServicePageKey,
    {
      title: string;
      subtitle: string;
      description: string;
      bullets: string[];
      cta: string;
    }
  >
> = {
  ru: {
    "ai-integration": {
      title: "AI-интеграции и LLM/RAG",
      subtitle: "От PoC до production за 6–10 недель",
      description:
        "Встраиваем AI в ваш продукт: чат-боты, RAG, агенты, автоматизация поддержки и внутренних процессов.",
      bullets: [
        "Аудит данных и use-case за 1 неделю",
        "RAG с eval-метриками и guardrails",
        "Интеграция с CRM, Slack, вашим API",
        "Handoff к оператору и админка контента",
      ],
      cta: "Обсудить AI-проект",
    },
    "mvp-development": {
      title: "MVP за 10–14 недель",
      subtitle: "B2B SaaS, mobile и marketplaces",
      description:
        "Запускаем первую версию с фокусом на core flow: auth, платежи, админка, аналитика.",
      bullets: [
        "Discovery и scope за 1–2 недели",
        "Демо каждые 2 недели",
        "Production-ready стек (Next.js, PostgreSQL)",
        "Передача и документация для вашей команды",
      ],
      cta: "Обсудить MVP",
    },
  },
  kk: {
    "ai-integration": {
      title: "AI интеграция және LLM/RAG",
      subtitle: "PoC-ден production-ға 6–10 апта",
      description:
        "AI-ды өнімге енгіземіз: чат-бот, RAG, агенттер, қолдау автоматтандыру.",
      bullets: [
        "1 аптада аудит",
        "RAG + eval + guardrails",
        "CRM, Slack интеграция",
        "Операторға handoff",
      ],
      cta: "AI жобасын талқылау",
    },
    "mvp-development": {
      title: "MVP 10–14 аптада",
      subtitle: "B2B SaaS, mobile, marketplace",
      description: "Бірінші нұсқаны core flow-мен іске қосамыз.",
      bullets: [
        "Discovery 1–2 апта",
        "2 аптада демо",
        "Next.js, PostgreSQL",
        "Құжаттама және тапсыру",
      ],
      cta: "MVP талқылау",
    },
  },
  en: {
    "ai-integration": {
      title: "AI integration & LLM/RAG",
      subtitle: "From PoC to production in 6–10 weeks",
      description:
        "Embed AI in your product: chatbots, RAG, agents, support and internal workflow automation.",
      bullets: [
        "Data and use-case audit in week 1",
        "RAG with eval metrics and guardrails",
        "CRM, Slack, and API integrations",
        "Human handoff and content admin",
      ],
      cta: "Discuss AI project",
    },
    "mvp-development": {
      title: "MVP in 10–14 weeks",
      subtitle: "B2B SaaS, mobile, and marketplaces",
      description:
        "Ship v1 focused on core flows: auth, payments, admin, analytics.",
      bullets: [
        "Discovery and scope in 1–2 weeks",
        "Demo every 2 weeks",
        "Production-ready stack (Next.js, PostgreSQL)",
        "Handover and docs for your team",
      ],
      cta: "Discuss MVP",
    },
  },
};
