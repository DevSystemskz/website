export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  ru: {
    nav: {
      services: "Услуги",
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
    },
  },
  en: {
    nav: {
      services: "Services",
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
    },
  },
} as const;

