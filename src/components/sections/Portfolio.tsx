"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortfolioCard } from "./PortfolioCard";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";

function getProjects(locale: Locale) {
  if (locale === "en") {
    return [
      {
        title: "FinTech Portal",
        description:
          "Customer cabinet and admin area for a financial product with payments, reports, and roles.",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        imageSrc:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Financial dashboard interface with charts",
      },
      {
        title: "Delivery Mobile App",
        description:
          "Cross-platform app for couriers and customers: tracking, push notifications, and offline mode.",
        tags: ["React Native", "Node.js"],
        imageSrc:
          "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Courier with package and delivery workflow",
      },
      {
        title: "DeFi Dashboard",
        description:
          "Web interface for wallets and liquidity pools with blockchain integrations.",
        tags: ["Web3", "React", "Solidity"],
        imageSrc:
          "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Blockchain and digital assets concept",
      },
      {
        title: "AI Support Assistant",
        description:
          "LLM chatbot with RAG over company knowledge base and human handoff flow.",
        tags: ["AI", "RAG", "Python"],
        imageSrc:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Artificial intelligence and automation concept",
      },
      {
        title: "B2B Marketplace",
        description:
          "Catalog, checkout, ERP integration, and payment workflows for wholesale purchasing.",
        tags: ["Vue", "Microservices"],
        imageSrc:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
        imageAlt: "E-commerce and online shopping",
      },
      {
        title: "Analytics Platform",
        description:
          "Real-time executive dashboards with KPI visualization and data export.",
        tags: ["Next.js", "D3.js", "ClickHouse"],
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Analytics dashboard with charts and metrics",
      },
    ];
  }
  if (locale === "kk") {
    return [
      {
        title: "FinTech порталы",
        description:
          "Қаржылық сервиске арналған клиенттік кабинет пен админ-панель: төлемдер, есептер, рөлдер.",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
        imageSrc:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Қаржылық аналитика интерфейсі",
      },
      {
        title: "Жеткізуге арналған мобильді қосымша",
        description:
          "Курьерлер мен клиенттерге арналған кросс-платформалы қосымша: трекинг, push-хабарламалар, офлайн режим.",
        tags: ["React Native", "Node.js"],
        imageSrc:
          "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Жеткізу қызметі",
      },
      {
        title: "DeFi дашборды",
        description:
          "Әмияндар мен ликвидтілік пулдарына арналған веб-интерфейс, блокчейнмен интеграция.",
        tags: ["Web3", "React", "Solidity"],
        imageSrc:
          "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Блокчейн және цифрлық активтер",
      },
      {
        title: "Қолдауға арналған AI-ассистент",
        description:
          "Компания білім базасы бойынша RAG бар LLM-чатбот, операторға эскалация.",
        tags: ["AI", "RAG", "Python"],
        imageSrc:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Жасанды интеллект",
      },
      {
        title: "B2B маркетплейс",
        description:
          "Каталог, себет, ERP интеграциясы және көтерме сауда үшін төлем провайдерлері.",
        tags: ["Vue", "Microservices"],
        imageSrc:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
        imageAlt: "E-commerce",
      },
      {
        title: "Аналитикалық панель",
        description:
          "Басшылыққа арналған нақты уақыттағы дашбордтар: KPI визуализациясы және дерек экспорт.",
        tags: ["Next.js", "D3.js", "ClickHouse"],
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
        imageAlt: "Метрикалар мен графиктер дашборды",
      },
    ];
  }

  return [
    {
      title: "FinTech-портал",
      description:
        "Личный кабинет и админка для финансового сервиса: платежи, отчеты, роли пользователей.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      imageSrc:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop",
      imageAlt: "Интерфейс финансовой аналитики и графиков",
    },
    {
      title: "Мобильное приложение доставки",
      description:
        "Кроссплатформенное приложение для курьеров и клиентов: трекинг, push-уведомления, офлайн-режим.",
      tags: ["React Native", "Node.js"],
      imageSrc:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80&auto=format&fit=crop",
      imageAlt: "Курьер с посылкой, доставка",
    },
    {
      title: "DeFi-дашборд",
      description:
        "Веб-интерфейс для работы с кошельками и пулами ликвидности, интеграция с блокчейном.",
      tags: ["Web3", "React", "Solidity"],
      imageSrc:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80&auto=format&fit=crop",
      imageAlt: "Блокчейн и цифровые активы",
    },
    {
      title: "AI-ассистент для поддержки",
      description:
        "Чат-бот на базе LLM с RAG по базе знаний компании, эскалация к оператору.",
      tags: ["AI", "RAG", "Python"],
      imageSrc:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
      imageAlt: "Искусственный интеллект и автоматизация",
    },
    {
      title: "B2B-маркетплейс",
      description:
        "Каталог, корзина, интеграция с ERP и платежными провайдерами для оптовых закупок.",
      tags: ["Vue", "Microservices"],
      imageSrc:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
      imageAlt: "Онлайн-покупки и электронная коммерция",
    },
    {
      title: "Аналитическая панель",
      description:
        "Дашборды и отчеты в реальном времени для руководства: визуализация KPI и экспорт данных.",
      tags: ["Next.js", "D3.js", "ClickHouse"],
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
      imageAlt: "Дашборд с графиками и метриками",
    },
  ];
}

export function Portfolio() {
  const { section, item, grid } = useStaggerVariants();
  const { m, locale } = useI18n();
  const projects = getProjects(locale);

  return (
    <motion.section
      id="portfolio"
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag={m.sections.portfolioTag}
            title={m.sections.portfolioTitle}
            description={m.sections.portfolioDesc}
          />
        </motion.div>
        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={grid}
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={item}>
              <PortfolioCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
