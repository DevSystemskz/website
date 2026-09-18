import { type Locale } from "@/i18n/messages";

export type PortfolioMetric = {
  value: string;
  label: string;
};

export type PortfolioLocaleContent = {
  title: string;
  summary: string;
  imageAlt: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: PortfolioMetric[];
};

export type PortfolioProject = {
  slug: string;
  tags: string[];
  imageSrc: string;
  year: string;
  liveUrl?: string;
  locales: Record<Locale, PortfolioLocaleContent>;
};

const projects: PortfolioProject[] = [
  {
    slug: "auarai",
    tags: ["Next.js", "Tailwind", "SEO", "CRO"],
    imageSrc: "/portfolio/auarai.jpg",
    year: "2026",
    liveUrl: "https://auarai.net",
    locales: {
      ru: {
        title: "AuaRai Control",
        summary:
          "Лендинг сервиса ремонта и установки кондиционеров в Астане: заявки в день обращения, WhatsApp и прозрачный прайс.",
        imageAlt: "Сервис кондиционеров AuaRai Control",
        industry: "Local services / HVAC",
        duration: "2 нед",
        challenge:
          "Сервису AuaRai Control нужен был сайт, который приводит заявки из поиска и WhatsApp: понятные услуги, фиксированные цены «от», доверие к мастерам и быстрый путь «позвонить / написать». Старый формат не закрывал SEO по Астане и не объяснял оффер за первые секунды.",
        solution:
          "Собрали конверсионный лендинг на Next.js: hero с оффером «выезд в день обращения», блоки услуг (ремонт, монтаж, чистка, заправка, перенос блока), прайс, процесс из 5 шагов, отзыциал и FAQ. Добавили кликабельные телефоны/WhatsApp, локальное SEO (районы Астаны), мобильную адаптацию и акценты под срочный вызов мастера 24/7.",
        results: [
          "Чёткий оффер и CTA на первом экране — звонок и WhatsApp",
          "Структура услуг и прайса снижает вопросы «сколько стоит» до звонка",
          "Локальное SEO и FAQ под запросы по Астане и типам работ",
        ],
        metrics: [
          { value: "24/7", label: "приём заявок" },
          { value: "2 года", label: "акцент на гарантии" },
          { value: "auarai.net", label: "в продакшене" },
        ],
      },
      kk: {
        title: "AuaRai Control",
        summary:
          "Астанадағы кондиционер жөндеу және орнату сервисінің лендингі: сол күні өтінім, WhatsApp және ашық баға.",
        imageAlt: "AuaRai Control кондиционер сервисі",
        industry: "Local services / HVAC",
        duration: "2 апта",
        challenge:
          "AuaRai Control-ға іздеу мен WhatsApp арқылы өтінім әкелетін сайт керек болды: түсінікті қызметтер, «бастап» баға, шеберлерге сенім және жылдам «қоңырау / жазу» жолы.",
        solution:
          "Next.js негізінде конверсиялық лендинг жасадық: «сол күні шығу» офферы, қызметтер, прайс, 5 қадамды процесс, пікірлер мен FAQ. Телефон/WhatsApp батырмалары, Астана бойынша жергілікті SEO және мобильді бейімдеу қосылды.",
        results: [
          "Бірінші экранда анық оффер және CTA",
          "Қызметтер мен прайс құрылымы қоңырауға дейін сұрақтарды азайтады",
          "Астана мен жұмыс түрлері бойынша жергілікті SEO",
        ],
        metrics: [
          { value: "24/7", label: "өтінім қабылдау" },
          { value: "2 жыл", label: "кепілдік акценті" },
          { value: "auarai.net", label: "продакшенде" },
        ],
      },
      en: {
        title: "AuaRai Control",
        summary:
          "Landing page for an Astana AC repair & install service: same-day calls, WhatsApp, and transparent pricing.",
        imageAlt: "AuaRai Control air conditioning service",
        industry: "Local services / HVAC",
        duration: "2 wk",
        challenge:
          "AuaRai Control needed a site that drives search and WhatsApp leads: clear services, from-pricing, trust in technicians, and a fast call/message path. The previous format didn’t cover Astana SEO or explain the offer in the first seconds.",
        solution:
          "We built a conversion-focused Next.js landing: same-day dispatch hero, service blocks (repair, install, cleaning, refill, outdoor unit move), pricing, a 5-step process, testimonials, and FAQ. Clickable phone/WhatsApp, local SEO for Astana districts, mobile-first layout, and 24/7 urgent-call cues.",
        results: [
          "Clear first-screen offer with call and WhatsApp CTAs",
          "Services + pricing structure reduce “how much?” questions before contact",
          "Local SEO and FAQ for Astana and work-type queries",
        ],
        metrics: [
          { value: "24/7", label: "lead intake" },
          { value: "2 yr", label: "warranty focus" },
          { value: "auarai.net", label: "live" },
        ],
      },
    },
  },
  {
    slug: "abdrahmanov",
    tags: ["Next.js", "Tailwind", "SEO", "CRO"],
    imageSrc: "/portfolio/abdrahmanov.jpg",
    year: "2026",
    liveUrl: "https://abdrahmanov.vercel.app",
    locales: {
      ru: {
        title: "ИП Абдрахманов",
        summary:
          "Лендинг аренды экскаватора Hyundai 140 в Астане: ставки, услуги, WhatsApp и выезд 24/7 по Казахстану.",
        imageAlt: "Сайт аренды экскаватора ИП Абдрахманов",
        industry: "Local services / Construction",
        duration: "2 нед",
        challenge:
          "ИП Абдрахманов нужен был сайт под прямые заявки на аренду техники: понятный оффер «своя техника без посредников», прозрачные ставки (час / смена / фикс), доверие к опыту и быстрый контакт через WhatsApp, звонок и Telegram. Важно было закрыть локальный поиск по Астане и показать спектр работ — от котлованов до гидромолота.",
        solution:
          "Собрали конверсионный лендинг: hero с оффером 24/7, блок услуг (котлованы, траншеи, планировка, вывоз, демонтаж), парк Hyundai 140, прайс, преимущества, процесс из 4 шагов, география, отзывы и FAQ. Добавили кликабельные CTA, акцент на безнал/документы для юрлиц и мобильную адаптацию.",
        results: [
          "Оффер и цены видны на первом экране — меньше «сколько стоит?» до звонка",
          "Структура услуг закрывает типовые запросы по земляным работам",
          "Прямые каналы связи: WhatsApp, звонок, Telegram",
        ],
        metrics: [
          { value: "22 000 ₸", label: "ставка в оффере" },
          { value: "24/7", label: "выезд" },
          { value: "live", label: "на Vercel" },
        ],
      },
      kk: {
        title: "ИП Абдрахманов",
        summary:
          "Астанадағы Hyundai 140 экскаватор жалдау лендингі: тарифтер, қызметтер, WhatsApp және 24/7 шығу.",
        imageAlt: "ИП Абдрахманов экскаватор жалдау сайты",
        industry: "Local services / Construction",
        duration: "2 апта",
        challenge:
          "ИП Абдрахманов-қа техника жалдауға тікелей өтінім әкелетін сайт керек болды: «өз техникасы, делдалсыз» офферы, ашық тарифтер, тәжірибеге сенім және WhatsApp / қоңырау / Telegram арқылы жылдам байланыс.",
        solution:
          "Конверсиялық лендинг жасадық: 24/7 оффер, қызметтер, Hyundai 140 паркі, прайс, артықшылықтар, 4 қадамды процесс, география, пікірлер мен FAQ. Юрлицаға арналған құжат/безнал акценті және мобильді бейімдеу қосылды.",
        results: [
          "Бірінші экранда оффер мен бағалар — қоңырауға дейін сұрақ азаяды",
          "Қызметтер құрылымы жер жұмыстары бойынша типтік сұрауларды жабады",
          "Тікелей байланыс: WhatsApp, қоңырау, Telegram",
        ],
        metrics: [
          { value: "22 000 ₸", label: "оффердегі тариф" },
          { value: "24/7", label: "шығу" },
          { value: "live", label: "Vercel-де" },
        ],
      },
      en: {
        title: "Abdrakhmanov Excavator",
        summary:
          "Landing page for Hyundai 140 excavator rental in Astana: rates, services, WhatsApp, and 24/7 dispatch across Kazakhstan.",
        imageAlt: "Abdrakhmanov excavator rental website",
        industry: "Local services / Construction",
        duration: "2 wk",
        challenge:
          "IP Abdrakhmanov needed a site for direct equipment-rental leads: a clear “own fleet, no middlemen” offer, transparent hour/shift/fixed rates, trust in experience, and fast WhatsApp / call / Telegram contact — plus Astana local search coverage.",
        solution:
          "We built a conversion landing: 24/7 hero, service blocks (pits, trenches, grading, haul-off, demolition), Hyundai 140 fleet, pricing, benefits, 4-step process, geography, testimonials, and FAQ. Clickable CTAs, B2B docs/bank-transfer cues, and mobile-first layout.",
        results: [
          "Offer and rates visible above the fold — fewer price questions before contact",
          "Service structure covers typical earthwork search intents",
          "Direct channels: WhatsApp, call, Telegram",
        ],
        metrics: [
          { value: "22,000 ₸", label: "rate in offer" },
          { value: "24/7", label: "dispatch" },
          { value: "live", label: "on Vercel" },
        ],
      },
    },
  },
  {
    slug: "shanyrak",
    tags: ["Next.js", "Tailwind", "SEO", "CRO"],
    imageSrc: "/portfolio/shanyrak.jpg",
    year: "2026",
    liveUrl: "https://shanyrak-omega.vercel.app",
    locales: {
      ru: {
        title: "Shanyrak",
        summary:
          "Лендинг ремонта квартир под ключ в Астане: пакеты от 85 000 ₸/м², фиксированная смета и заявка в WhatsApp.",
        imageAlt: "Сайт ремонта под ключ Shanyrak",
        industry: "Local services / Renovation",
        duration: "2 нед",
        challenge:
          "Shanyrak нужен был сайт, который снимает страх «смета раздуется»: понятные пакеты Стандарт/Комфорт, фиксированная цена в договоре, доверие к процессу и быстрый путь к бесплатной смете через WhatsApp. Важно закрыть локальный поиск по ремонту в Астане и показать реальные объекты.",
        solution:
          "Собрали конверсионный лендинг: hero с оффером без сюрпризов в смете, пакеты с составом материалов, процесс из 4 шагов, портфолио объектов, отзывы, FAQ и формы заявки в WhatsApp. Добавили кликабельные телефоны, акцент на поэтапную оплату и гарантию 2 года, мобильную адаптацию.",
        results: [
          "Пакеты и цена за м² видны сразу — меньше вопросов до звонка",
          "Форма ведёт в WhatsApp: короткий путь до заявки",
          "FAQ и процесс закрывают типичные возражения по смете и срокам",
        ],
        metrics: [
          { value: "85k ₸/м²", label: "пакет в оффере" },
          { value: "2 года", label: "гарантия" },
          { value: "live", label: "на Vercel" },
        ],
      },
      kk: {
        title: "Shanyrak",
        summary:
          "Астанадағы пәтерді кілтпен жөндеу лендингі: 85 000 ₸/м²-ден пакеттер, бекітілген смета және WhatsApp өтінімі.",
        imageAlt: "Shanyrak кілтпен жөндеу сайты",
        industry: "Local services / Renovation",
        duration: "2 апта",
        challenge:
          "Shanyrak-қа «смета өсіп кетеді» қорқынышын алатын сайт керек болды: Стандарт/Комфорт пакеттері, шарттағы бекітілген баға, процесске сенім және WhatsApp арқылы тегін сметаға жылдам жол.",
        solution:
          "Конверсиялық лендинг жасадық: сметада тосынсыздығы жоқ оффер, материалдар тізімі бар пакеттер, 4 қадамды процесс, портфолио, пікірлер, FAQ және WhatsApp формалары. Телефондар, кезеңдік төлем және 2 жыл кепілдік акценті қосылды.",
        results: [
          "Пакеттер мен м² бағасы бірден көрінеді",
          "Форма WhatsApp-қа жетелейді — өтінім жолы қысқа",
          "FAQ мен процесс смета/мерзім бойынша қарсылықтарды жабады",
        ],
        metrics: [
          { value: "85k ₸/м²", label: "оффердегі пакет" },
          { value: "2 жыл", label: "кепілдік" },
          { value: "live", label: "Vercel-де" },
        ],
      },
      en: {
        title: "Shanyrak",
        summary:
          "Turnkey apartment renovation landing in Astana: packages from 85,000 ₸/m², fixed estimate, WhatsApp lead form.",
        imageAlt: "Shanyrak turnkey renovation website",
        industry: "Local services / Renovation",
        duration: "2 wk",
        challenge:
          "Shanyrak needed a site that removes the fear of ballooning estimates: clear Standard/Comfort packages, contract-fixed pricing, process trust, and a fast free-quote path via WhatsApp — plus Astana local search coverage and real project photos.",
        solution:
          "We built a conversion landing: no-surprises hero, packages with material lists, 4-step process, portfolio, reviews, FAQ, and WhatsApp forms. Clickable phones, staged payment and 2-year warranty cues, mobile-first layout.",
        results: [
          "Packages and ₸/m² pricing visible above the fold",
          "Form routes to WhatsApp for a short lead path",
          "FAQ and process address estimate and timeline objections",
        ],
        metrics: [
          { value: "85k ₸/m²", label: "package in offer" },
          { value: "2 yr", label: "warranty" },
          { value: "live", label: "on Vercel" },
        ],
      },
    },
  },
  {
    slug: "fintech-portal",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    imageSrc:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format&fit=crop",
    year: "2024",
    locales: {
      ru: {
        title: "FinTech-портал",
        summary:
          "Личный кабинет и админка для финансового сервиса: платежи, отчёты, роли пользователей.",
        imageAlt: "Интерфейс финансовой аналитики и графиков",
        industry: "FinTech",
        duration: "4 мес",
        challenge:
          "Клиенту нужен был безопасный кабинет для клиентов и внутренний админ-панель: платежи, сверки, роли и аудит действий. Старый стек не тянул нагрузку и мешал быстро добавлять продукты.",
        solution:
          "Спроектировали модульную архитектуру на Next.js + PostgreSQL: отдельные зоны для клиента и операторов, RBAC, журнал событий, платёжные вебхуки и дашборды сверки. Добавили CI/CD, staging и мониторинг ошибок.",
        results: [
          "Сократили время выпуска фич с недель до дней",
          "Снизили ручные сверки за счёт автоматических отчётов",
          "Вынесли критичные операции за feature-flags и роли",
        ],
        metrics: [
          { value: "3×", label: "быстрее релизы" },
          { value: "99.9%", label: "uptime" },
          { value: "40%", label: "меньше ручных операций" },
        ],
      },
      kk: {
        title: "FinTech порталы",
        summary:
          "Қаржылық сервиске арналған клиенттік кабинет пен админ-панель: төлемдер, есептер, рөлдер.",
        imageAlt: "Қаржылық аналитика интерфейсі",
        industry: "FinTech",
        duration: "4 ай",
        challenge:
          "Клиентке қауіпсіз кабинет пен ішкі админ-панель керек болды: төлемдер, салыстырулар, рөлдер және әрекеттер аудиті. Ескі стек жүктемені көтере алмады.",
        solution:
          "Next.js + PostgreSQL негізінде модульдік архитектура жасадық: клиент пен оператор аймақтары, RBAC, оқиға журналы, төлем webhook-тары және салыстыру дашбордтары.",
        results: [
          "Фича шығару уақытын аптадан күнге қысқарттық",
          "Автоматты есептер арқылы қолмен салыстыруды азайттық",
          "Критикалық операцияларды рөлдер мен feature-flag арқылы шектедік",
        ],
        metrics: [
          { value: "3×", label: "тезірек релиз" },
          { value: "99.9%", label: "uptime" },
          { value: "40%", label: "аз қолмен операция" },
        ],
      },
      en: {
        title: "FinTech Portal",
        summary:
          "Customer cabinet and admin area for a financial product with payments, reports, and roles.",
        imageAlt: "Financial dashboard interface with charts",
        industry: "FinTech",
        duration: "4 mo",
        challenge:
          "The client needed a secure customer cabinet and internal admin: payments, reconciliations, roles, and audit trails. The legacy stack could not scale or ship new products quickly.",
        solution:
          "We designed a modular Next.js + PostgreSQL architecture with separate client/operator areas, RBAC, event logging, payment webhooks, and reconciliation dashboards — plus CI/CD, staging, and error monitoring.",
        results: [
          "Cut feature release time from weeks to days",
          "Reduced manual reconciliations with automated reports",
          "Gated critical operations behind roles and feature flags",
        ],
        metrics: [
          { value: "3×", label: "faster releases" },
          { value: "99.9%", label: "uptime" },
          { value: "40%", label: "fewer manual ops" },
        ],
      },
    },
  },
  {
    slug: "delivery-app",
    tags: ["React Native", "Node.js"],
    imageSrc:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&q=80&auto=format&fit=crop",
    year: "2024",
    locales: {
      ru: {
        title: "Мобильное приложение доставки",
        summary:
          "Кроссплатформенное приложение для курьеров и клиентов: трекинг, push-уведомления, офлайн-режим.",
        imageAlt: "Курьер с посылкой, доставка",
        industry: "Logistics",
        duration: "5 мес",
        challenge:
          "Сервис доставки терял заказы из-за нестабильной сети у курьеров и разрозненных приложений для клиента и исполнителя. Нужен был единый продукт с живым трекингом и офлайн-устойчивостью.",
        solution:
          "Собрали React Native приложение с двумя ролями, Node.js API, push-уведомлениями, картой и очередью действий в офлайне. Синхронизация после восстановления сети — через идемпотентные команды.",
        results: [
          "Снизили долю «потерянных» статусов заказа",
          "Ускорили назначение курьера на заказ",
          "Подняли NPS за счёт прозрачного трекинга",
        ],
        metrics: [
          { value: "2×", label: "быстрее назначение" },
          { value: "−35%", label: "сбоев статусов" },
          { value: "iOS+Android", label: "одна кодовая база" },
        ],
      },
      kk: {
        title: "Жеткізуге арналған мобильді қосымша",
        summary:
          "Курьерлер мен клиенттерге арналған кросс-платформалы қосымша: трекинг, push-хабарламалар, офлайн режим.",
        imageAlt: "Жеткізу қызметі",
        industry: "Logistics",
        duration: "5 ай",
        challenge:
          "Жеткізу сервисі тұрақсыз желі мен бөлек қосымшалар салдарынан тапсырыстарды жоғалтып жатты. Бірыңғай өнім, тірі трекинг және офлайн тұрақтылық қажет болды.",
        solution:
          "Екі рөлі бар React Native қосымшасы, Node.js API, push, карта және офлайн әрекет кезегі. Желі қалпына келгенде идемпотентті командалармен синхрондау.",
        results: [
          "Жоғалған статус үлесін төмендеттік",
          "Курьерді тағайындауды жылдамдаттық",
          "Ашық трекинг арқылы NPS өсті",
        ],
        metrics: [
          { value: "2×", label: "тезірек тағайындау" },
          { value: "−35%", label: "статус қателері" },
          { value: "iOS+Android", label: "бір код базасы" },
        ],
      },
      en: {
        title: "Delivery Mobile App",
        summary:
          "Cross-platform app for couriers and customers: tracking, push notifications, and offline mode.",
        imageAlt: "Courier with package and delivery workflow",
        industry: "Logistics",
        duration: "5 mo",
        challenge:
          "A delivery service was losing orders due to unstable courier networks and separate apps for customers and drivers. They needed one product with live tracking and offline resilience.",
        solution:
          "We built a React Native app with two roles, a Node.js API, push notifications, maps, and an offline action queue. Sync after reconnect uses idempotent commands.",
        results: [
          "Reduced lost order-status incidents",
          "Sped up courier assignment",
          "Improved NPS with transparent tracking",
        ],
        metrics: [
          { value: "2×", label: "faster assignment" },
          { value: "−35%", label: "status failures" },
          { value: "iOS+Android", label: "one codebase" },
        ],
      },
    },
  },
  {
    slug: "defi-dashboard",
    tags: ["Web3", "React", "Solidity"],
    imageSrc:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1200&q=80&auto=format&fit=crop",
    year: "2023",
    locales: {
      ru: {
        title: "DeFi-дашборд",
        summary:
          "Веб-интерфейс для работы с кошельками и пулами ликвидности, интеграция с блокчейном.",
        imageAlt: "Блокчейн и цифровые активы",
        industry: "Web3",
        duration: "3 мес",
        challenge:
          "Команде нужен был понятный интерфейс над смарт-контрактами: подключение кошелька, позиции в пулах, история транзакций без «сырого» blockchain UX.",
        solution:
          "Сделали React-дашборд с wagmi/ethers, индексацией событий, понятными статусами транзакций и защитой от типичных UX-ошибок (wrong network, pending txs).",
        results: [
          "Снизили долю failed/user-rejected транзакций",
          "Упростили онбординг новых пользователей",
          "Дашборд стал основным инструментом для LP",
        ],
        metrics: [
          { value: "−28%", label: "failed txs" },
          { value: "<2 мин", label: "до первой операции" },
          { value: "EVM", label: "мультисеть" },
        ],
      },
      kk: {
        title: "DeFi дашборды",
        summary:
          "Әмияндар мен ликвидтілік пулдарына арналған веб-интерфейс, блокчейнмен интеграция.",
        imageAlt: "Блокчейн және цифрлық активтер",
        industry: "Web3",
        duration: "3 ай",
        challenge:
          "Командаға смарт-контракттар үстінде түсінікті интерфейс керек болды: әмиян, пул позициялары, транзакция тарихы.",
        solution:
          "wagmi/ethers негізінде React дашборд жасадық: оқиға индексациясы, транзакция статустары және wrong network / pending txs қорғауы.",
        results: [
          "Failed/user-rejected транзакциялар азайды",
          "Жаңа пайдаланушы онбордингі жеңілдеді",
          "Дашборд LP үшін негізгі құрал болды",
        ],
        metrics: [
          { value: "−28%", label: "failed txs" },
          { value: "<2 мин", label: "бірінші операцияға" },
          { value: "EVM", label: "көп желі" },
        ],
      },
      en: {
        title: "DeFi Dashboard",
        summary:
          "Web interface for wallets and liquidity pools with blockchain integrations.",
        imageAlt: "Blockchain and digital assets concept",
        industry: "Web3",
        duration: "3 mo",
        challenge:
          "The team needed a clear UI over smart contracts: wallet connect, pool positions, and transaction history without raw blockchain UX.",
        solution:
          "We built a React dashboard with wagmi/ethers, event indexing, clear tx statuses, and guards for common UX pitfalls (wrong network, pending txs).",
        results: [
          "Reduced failed / user-rejected transactions",
          "Simplified onboarding for new users",
          "Became the primary tool for LPs",
        ],
        metrics: [
          { value: "−28%", label: "failed txs" },
          { value: "<2 min", label: "to first action" },
          { value: "EVM", label: "multi-chain" },
        ],
      },
    },
  },
  {
    slug: "ai-support-assistant",
    tags: ["AI", "RAG", "Python"],
    imageSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
    year: "2025",
    locales: {
      ru: {
        title: "AI-ассистент для поддержки",
        summary:
          "Чат-бот на базе LLM с RAG по базе знаний компании, эскалация к оператору.",
        imageAlt: "Искусственный интеллект и автоматизация",
        industry: "Customer Support",
        duration: "2.5 мес",
        challenge:
          "Поддержка тонула в повторяющихся вопросах. База знаний была в Confluence/Notion, но агенты и клиенты ей почти не пользовались.",
        solution:
          "Построили RAG-пайплайн: индексация документов, чат с цитированием источников, confidence score и handoff оператору с контекстом диалога. Метрики качества — через evaluation set.",
        results: [
          "Автоматизировали большую долю типовых обращений",
          "Сократили среднее время первого ответа",
          "Операторы получают полный контекст при эскалации",
        ],
        metrics: [
          { value: "55%", label: "авто-решений" },
          { value: "−40%", label: "время ответа" },
          { value: "RAG", label: "с источниками" },
        ],
      },
      kk: {
        title: "Қолдауға арналған AI-ассистент",
        summary:
          "Компания білім базасы бойынша RAG бар LLM-чатбот, операторға эскалация.",
        imageAlt: "Жасанды интеллект",
        industry: "Customer Support",
        duration: "2.5 ай",
        challenge:
          "Қолдау қайталанатын сұрақтарға толып кетті. Білім базасы болды, бірақ сирек қолданылды.",
        solution:
          "RAG пайплайнын құрдық: құжат индексациясы, дереккөзбен жауап, confidence score және операторға контекстпен handoff.",
        results: [
          "Типтік өтініштердің үлкен бөлігін автоматтандырдық",
          "Бірінші жауап уақытын қысқарттық",
          "Операторлар эскалацияда толық контекст алады",
        ],
        metrics: [
          { value: "55%", label: "авто-шешім" },
          { value: "−40%", label: "жауап уақыты" },
          { value: "RAG", label: "дереккөзбен" },
        ],
      },
      en: {
        title: "AI Support Assistant",
        summary:
          "LLM chatbot with RAG over company knowledge base and human handoff flow.",
        imageAlt: "Artificial intelligence and automation concept",
        industry: "Customer Support",
        duration: "2.5 mo",
        challenge:
          "Support was drowning in repetitive questions. Knowledge lived in Confluence/Notion but was rarely used by agents or customers.",
        solution:
          "We built a RAG pipeline: document indexing, chat with source citations, confidence scoring, and operator handoff with full conversation context — plus an evaluation set for quality.",
        results: [
          "Automated a large share of common tickets",
          "Cut median first-response time",
          "Operators receive full context on escalation",
        ],
        metrics: [
          { value: "55%", label: "auto-resolved" },
          { value: "−40%", label: "response time" },
          { value: "RAG", label: "with sources" },
        ],
      },
    },
  },
  {
    slug: "b2b-marketplace",
    tags: ["Vue", "Microservices"],
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
    year: "2023",
    locales: {
      ru: {
        title: "B2B-маркетплейс",
        summary:
          "Каталог, корзина, интеграция с ERP и платежными провайдерами для оптовых закупок.",
        imageAlt: "Онлайн-покупки и электронная коммерция",
        industry: "E-commerce / B2B",
        duration: "6 мес",
        challenge:
          "Оптовый продавец хотел уйти от Excel-заявок: каталог с ценами по ролям, корзина, согласование и выгрузка заказов в ERP.",
        solution:
          "Сделали Vue-витрину и набор сервисов: каталог, корзина, прайс-матрицы, платежи и двусторонняя синхронизация с ERP через очереди и идемпотентные webhook'и.",
        results: [
          "Перевели закупки в цифровой self-service",
          "Убрали дубли заказов при сбоях интеграций",
          "Ускорили цикл «корзина → ERP»",
        ],
        metrics: [
          { value: "70%", label: "заказов self-service" },
          { value: "0", label: "дублей после идемпотентности" },
          { value: "ERP", label: "двусторонний sync" },
        ],
      },
      kk: {
        title: "B2B маркетплейс",
        summary:
          "Каталог, себет, ERP интеграциясы және көтерме сауда үшін төлем провайдерлері.",
        imageAlt: "E-commerce",
        industry: "E-commerce / B2B",
        duration: "6 ай",
        challenge:
          "Көтерме сатушы Excel-өтінімнен кеткісі келді: рөлдік баға, себет, келісу және ERP-ге жүктеу.",
        solution:
          "Vue витрина және сервистер: каталог, себет, прайс-матрица, төлемдер, ERP-мен кезек және идемпотентті webhook арқылы синхрон.",
        results: [
          "Сатып алуды цифрлық self-service-ке аудардық",
          "Интеграция сәтсіздігінде тапсырыс дубльдерін жойдық",
          "«Себет → ERP» циклін жылдамдаттық",
        ],
        metrics: [
          { value: "70%", label: "self-service тапсырыс" },
          { value: "0", label: "дубль" },
          { value: "ERP", label: "екі жақты sync" },
        ],
      },
      en: {
        title: "B2B Marketplace",
        summary:
          "Catalog, checkout, ERP integration, and payment workflows for wholesale purchasing.",
        imageAlt: "E-commerce and online shopping",
        industry: "E-commerce / B2B",
        duration: "6 mo",
        challenge:
          "A wholesaler wanted to leave Excel requests behind: role-based pricing, cart, approvals, and order export into ERP.",
        solution:
          "We built a Vue storefront and services for catalog, cart, price matrices, payments, and two-way ERP sync via queues and idempotent webhooks.",
        results: [
          "Moved purchasing to digital self-service",
          "Eliminated duplicate orders on integration retries",
          "Shortened the cart → ERP cycle",
        ],
        metrics: [
          { value: "70%", label: "self-service orders" },
          { value: "0", label: "duplicates after idempotency" },
          { value: "ERP", label: "two-way sync" },
        ],
      },
    },
  },
  {
    slug: "analytics-platform",
    tags: ["Next.js", "D3.js", "ClickHouse"],
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    year: "2024",
    locales: {
      ru: {
        title: "Аналитическая панель",
        summary:
          "Дашборды и отчёты в реальном времени для руководства: визуализация KPI и экспорт данных.",
        imageAlt: "Дашборд с графиками и метриками",
        industry: "Analytics",
        duration: "3.5 мес",
        challenge:
          "Руководство смотрело KPI в разрозненных Excel и BI. Нужны были единые дашборды с низкой задержкой и экспортом для советов директоров.",
        solution:
          "Построили пайплайн событий → ClickHouse и Next.js UI с D3-визуализациями, сохранёнными представлениями и CSV/XLSX экспортом. Кэширование и материализованные представления для тяжёлых отчётов.",
        results: [
          "Собрали единый source of truth по KPI",
          "Сократили подготовку отчёта к совету директоров",
          "Дашборды открываются за секунды, а не минуты",
        ],
        metrics: [
          { value: "<3 с", label: "загрузка дашборда" },
          { value: "−60%", label: "время на отчёт" },
          { value: "realtime", label: "поток событий" },
        ],
      },
      kk: {
        title: "Аналитикалық панель",
        summary:
          "Басшылыққа арналған нақты уақыттағы дашбордтар: KPI визуализациясы және дерек экспорт.",
        imageAlt: "Метрикалар мен графиктер дашборды",
        industry: "Analytics",
        duration: "3.5 ай",
        challenge:
          "Басшылық KPI-ді Excel мен BI-де бөлек көрді. Бірыңғай, жылдам дашбордтар және экспорт керек болды.",
        solution:
          "Оқиғалар → ClickHouse пайплайны және Next.js + D3 UI: сақталған көріністер, CSV/XLSX экспорт, ауыр есептерге арналған кэш.",
        results: [
          "KPI бойынша бірыңғай source of truth",
          "Директорлар кеңесіне есеп дайындау қысқарды",
          "Дашбордтар секундтарда ашылады",
        ],
        metrics: [
          { value: "<3 с", label: "дашборд жүктелуі" },
          { value: "−60%", label: "есеп уақыты" },
          { value: "realtime", label: "оқиға ағыны" },
        ],
      },
      en: {
        title: "Analytics Platform",
        summary:
          "Real-time executive dashboards with KPI visualization and data export.",
        imageAlt: "Analytics dashboard with charts and metrics",
        industry: "Analytics",
        duration: "3.5 mo",
        challenge:
          "Leadership tracked KPIs across scattered Excel and BI tools. They needed unified low-latency dashboards and board-ready exports.",
        solution:
          "We built an events → ClickHouse pipeline and a Next.js UI with D3 visuals, saved views, and CSV/XLSX export — plus caching and materialized views for heavy reports.",
        results: [
          "Created a single source of truth for KPIs",
          "Cut board-report prep time",
          "Dashboards load in seconds, not minutes",
        ],
        metrics: [
          { value: "<3s", label: "dashboard load" },
          { value: "−60%", label: "report prep time" },
          { value: "realtime", label: "event stream" },
        ],
      },
    },
  },
];

export function getAllPortfolioProjects(): PortfolioProject[] {
  return projects;
}

export function getPortfolioProject(slug: string): PortfolioProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPortfolioCard(locale: Locale, project: PortfolioProject) {
  const content = project.locales[locale];
  return {
    slug: project.slug,
    title: content.title,
    description: content.summary,
    tags: project.tags,
    imageSrc: project.imageSrc,
    imageAlt: content.imageAlt,
  };
}

export function getLocalizedProject(locale: Locale, project: PortfolioProject) {
  return {
    ...project,
    ...project.locales[locale],
  };
}
