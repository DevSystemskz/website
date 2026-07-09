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

const BlockchainIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
        icon: <SparklesIcon />,
        title: "AI Integration",
        description:
          "AI in products: chatbots, automation, analytics, and generative content.",
        features: ["LLM, RAG, agents", "Data processing", "Custom models"],
        href: "/services/ai-integration",
      },
      {
        icon: <CodeIcon />,
        title: "Web & B2B Platforms",
        description:
          "Portals, SPAs, and server-side applications — from MVP to scale.",
        features: ["React, Next.js, Vue", "Node.js, Python", "APIs and integrations"],
        href: "/services/mvp-development",
      },
      {
        icon: <PuzzleIcon />,
        title: "Integrations & Support",
        description:
          "System integrations, product improvements, and long-term technical support.",
        features: ["APIs and microservices", "SLA support", "Audit and optimization"],
      },
      {
        icon: <DeviceIcon />,
        title: "Mobile Apps",
        description:
          "Native and cross-platform applications for iOS and Android.",
        features: ["React Native, Flutter", "Native iOS/Android", "MVP to full product"],
      },
      {
        icon: <BlockchainIcon />,
        title: "Blockchain",
        description:
          "Smart contracts, dApps, and Web3 integrations for selected products.",
        features: ["Smart contracts", "Web3, DeFi", "Audit and consulting"],
      },
    ];
  }
  if (locale === "kk") {
    return [
      {
        icon: <SparklesIcon />,
        title: "AI интеграциясы",
        description: "Өнімдерге ИИ: чат-бот, RAG, агенттер, қолдау автоматтандыру.",
        features: ["LLM, RAG, агенттер", "Деректерді өңдеу", "Кастом модельдер"],
        href: "/services/ai-integration",
      },
      {
        icon: <CodeIcon />,
        title: "Веб және B2B-платформалар",
        description: "Порталдар, SPA, backend — MVP-ден масштабтауға дейін.",
        features: ["React, Next.js, Vue", "Node.js, Python", "API және интеграциялар"],
        href: "/services/mvp-development",
      },
      {
        icon: <PuzzleIcon />,
        title: "Интеграциялар және қолдау",
        description: "Жүйелерді біріктіру және ұзақ мерзімді техникалық қолдау.",
        features: ["API және микросервистер", "SLA қолдау", "Аудит және оңтайландыру"],
      },
      {
        icon: <DeviceIcon />,
        title: "Мобильді қосымшалар",
        description: "iOS және Android үшін нативті және кросс-платформалы қосымшалар.",
        features: ["React Native, Flutter", "Нативті iOS/Android", "MVP-ден толық өнімге дейін"],
      },
      {
        icon: <BlockchainIcon />,
        title: "Блокчейн",
        description: "Смарт-келісімшарттар, dApp және Web3 интеграциялары.",
        features: ["Smart contracts", "Web3, DeFi", "Аудит және консалтинг"],
      },
    ];
  }

  return [
    {
      icon: <SparklesIcon />,
      title: "Интеграция с AI",
      description:
        "Внедрение ИИ в продукты: чат-боты, RAG, агенты, автоматизация поддержки.",
      features: ["LLM, RAG, агенты", "Обработка данных", "Кастомные модели"],
      href: "/services/ai-integration",
    },
    {
      icon: <CodeIcon />,
      title: "Веб и B2B-платформы",
      description: "Порталы, SPA и backend — от MVP до масштабирования.",
      features: ["React, Next.js, Vue", "Node.js, Python", "API и интеграции"],
      href: "/services/mvp-development",
    },
    {
      icon: <PuzzleIcon />,
      title: "Интеграции и поддержка",
      description: "Связка систем, доработки и долгосрочная техническая поддержка.",
      features: ["API и микросервисы", "SLA-поддержка", "Аудит и оптимизация"],
    },
    {
      icon: <DeviceIcon />,
      title: "Мобильные приложения",
      description: "Нативные и кроссплатформенные приложения для iOS и Android.",
      features: ["React Native, Flutter", "Нативный iOS/Android", "MVP и полный цикл"],
    },
    {
      icon: <BlockchainIcon />,
      title: "Блокчейн",
      description: "Смарт-контракты, DApp и Web3 для отдельных продуктовых задач.",
      features: ["Smart contracts", "Web3, DeFi", "Аудит и консалтинг"],
    },
  ];
}

export function Services() {
  const { section, item, grid } = useStaggerVariants();
  const { m, locale } = useI18n();
  const services = getServices(locale);

  return (
    <motion.section
      id="services"
      className="bg-white py-20 lg:py-28 dark:bg-slate-900"
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
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          variants={grid}
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={item}>
              <ServiceCard
                icon={s.icon}
                title={s.title}
                description={s.description}
                features={s.features}
                href={"href" in s ? s.href : undefined}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
