"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "./ServiceCard";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";

const CodeIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
  </svg>
);

const DeviceIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const LayersIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const SearchIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PuzzleIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

function getServices(locale: Locale) {
  if (locale === "en") {
    return [
      {
        icon: <CodeIcon />,
        title: "Landing pages",
        description:
          "One clear offer, messenger CTA, and a structure that converts visits into leads.",
        features: ["Offer on first screen", "WhatsApp / Telegram forms", "1–2 week launch"],
      },
      {
        icon: <LayersIcon />,
        title: "Corporate sites",
        description:
          "Multi-page sites with services, cases, and SEO-ready structure for local search.",
        features: ["5–15 pages", "CMS basics", "Local SEO markup"],
      },
      {
        icon: <DeviceIcon />,
        title: "Web MVP",
        description:
          "A narrow product slice: auth, admin, and core flows — without bloated scope.",
        features: ["Next.js + API", "Fixed stages", "Demo each sprint"],
      },
      {
        icon: <SearchIcon />,
        title: "SEO foundation",
        description:
          "Titles, schema, sitemap, and page speed so the site can rank after launch.",
        features: ["Meta + Open Graph", "JSON-LD", "Core Web Vitals"],
      },
      {
        icon: <PuzzleIcon />,
        title: "Integrations & support",
        description:
          "CRM, analytics, messengers, and ongoing updates after release.",
        features: ["CRM & analytics", "Messenger bots", "Monthly support"],
      },
    ];
  }
  if (locale === "kk") {
    return [
      {
        icon: <CodeIcon />,
        title: "Лендингтер",
        description:
          "Анық оффер, мессенджер CTA және кіруді өтінімге айналдыратын құрылым.",
        features: ["Бірінші экранда оффер", "WhatsApp / Telegram формалар", "1–2 аптада іске қосу"],
      },
      {
        icon: <LayersIcon />,
        title: "Корпоративтік сайттар",
        description:
          "Қызметтер, кейстер және жергілікті іздеуге арналған SEO-құрылымы бар көпбеттік сайттар.",
        features: ["5–15 бет", "CMS базасы", "Жергілікті SEO-белгілеу"],
      },
      {
        icon: <DeviceIcon />,
        title: "Web MVP",
        description:
          "Тар өнім кесіндісі: auth, админка және негізгі сценарийлер — артық scope жоқ.",
        features: ["Next.js + API", "Бекітілген кезеңдер", "Әр спринтте демо"],
      },
      {
        icon: <SearchIcon />,
        title: "SEO-база",
        description:
          "Title, schema, sitemap және жылдамдық — іске қосудан кейін сайт іздеуде жұмыс істей алады.",
        features: ["Meta + Open Graph", "JSON-LD", "Core Web Vitals"],
      },
      {
        icon: <PuzzleIcon />,
        title: "Интеграциялар және қолдау",
        description:
          "CRM, аналитика, мессенджерлер және релизден кейінгі жаңартулар.",
        features: ["CRM және аналитика", "Мессенджер боттар", "Айлық қолдау"],
      },
    ];
  }

  return [
    {
      icon: <CodeIcon />,
      title: "Лендинги",
      description:
        "Один оффер, CTA в мессенджер и структура, которая ведёт к заявке.",
      features: ["Оффер на первом экране", "Формы WhatsApp / Telegram", "Запуск за 1–2 недели"],
    },
    {
      icon: <LayersIcon />,
      title: "Корпоративные сайты",
      description:
        "Многостраничные сайты с услугами, кейсами и структурой под локальный поиск.",
      features: ["5–15 страниц", "Базовый CMS", "Локальная SEO-разметка"],
    },
    {
      icon: <DeviceIcon />,
      title: "Web MVP",
      description:
        "Узкий срез продукта: auth, админка и ключевые сценарии — без раздутого scope.",
      features: ["Next.js + API", "Фиксированные этапы", "Демо каждый спринт"],
    },
    {
      icon: <SearchIcon />,
      title: "SEO-база",
      description:
        "Title, schema, sitemap и скорость — чтобы сайт мог ранжироваться после запуска.",
      features: ["Meta + Open Graph", "JSON-LD", "Core Web Vitals"],
    },
    {
      icon: <PuzzleIcon />,
      title: "Интеграции и поддержка",
      description:
        "CRM, аналитика, мессенджеры и правки после релиза.",
      features: ["CRM и аналитика", "Боты в мессенджерах", "Поддержка по месяцам"],
    },
  ];
}

export function Services() {
  const { section, item, grid, card } = useStaggerVariants();
  const { m, locale } = useI18n();
  const services = getServices(locale);

  return (
    <motion.section
      id="services"
      className="ds-section bg-canvas-elevated dark:bg-canvas-dark"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag={m.sections.servicesTag}
            title={m.sections.servicesTitle}
            description={m.sections.servicesDesc}
          />
        </motion.div>
        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6"
          variants={grid}
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={card}>
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
