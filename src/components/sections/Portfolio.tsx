"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PortfolioCard } from "./PortfolioCard";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";

const projects = [
  {
    title: "FinTech-портал",
    description:
      "Личный кабинет и админка для финансового сервиса: платежи, отчёты, роли пользователей.",
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
      "Каталог, корзина, интеграция с ERP и платёжными провайдерами для оптовых закупок.",
    tags: ["Vue", "Microservices"],
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Онлайн-покупки и электронная коммерция",
  },
  {
    title: "Аналитическая панель",
    description:
      "Дашборды и отчёты в реальном времени для руководства: визуализация KPI и экспорт данных.",
    tags: ["Next.js", "D3.js", "ClickHouse"],
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Дашборд с графиками и метриками",
  },
];

export function Portfolio() {
  const { section, item, grid } = useStaggerVariants();

  return (
    <motion.section
      id="portfolio"
      className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900/50"
      variants={section}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag="Портфолио"
            title="Избранные проекты"
            description="Реальные задачи: от MVP до масштабируемых продуктов. Названия и детали могут быть изменены под ваш кейс."
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
