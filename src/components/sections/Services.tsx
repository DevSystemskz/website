import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "./ServiceCard";

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

const services = [
  {
    icon: <CodeIcon />,
    title: "Веб-разработка",
    description: "Сайты, порталы, SPA и серверные приложения на современных стеках.",
    features: ["React, Next.js, Vue", "Node.js, Python", "API и интеграции"],
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
    description: "Смарт-контракты, DApp, токенизация и интеграция с крипто-инфраструктурой.",
    features: ["Smart contracts", "Web3, DeFi", "Аудит и консалтинг"],
  },
  {
    icon: <SparklesIcon />,
    title: "Интеграция с AI",
    description: "Внедрение ИИ в продукты: чат-боты, автоматизация, анализ данных и генеративный контент.",
    features: ["LLM, RAG, агенты", "Обработка данных", "Кастомные модели"],
  },
  {
    icon: <PuzzleIcon />,
    title: "Интеграции и поддержка",
    description: "Связка систем, доработки и долгосрочная техническая поддержка.",
    features: ["API и микросервисы", "Поддержка 24/7", "Аудит и оптимизация"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 dark:bg-slate-900">
      <Container>
        <SectionTitle
          tag="Услуги"
          title="Что мы делаем"
          description="Полный цикл разработки: от аналитики и дизайна до запуска и поддержки."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
