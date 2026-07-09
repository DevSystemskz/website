import { type Locale } from "@/i18n/messages";

export type CaseSlug =
  | "fintech-portal"
  | "ai-support-assistant"
  | "delivery-mobile-app";

export type CaseMetric = { value: string; label: string };

export type CaseStudy = {
  slug: CaseSlug;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: CaseMetric[];
  tags: string[];
  duration: string;
  team: string;
  gradient: string;
};

const casesRu: Record<CaseSlug, CaseStudy> = {
  "fintech-portal": {
    slug: "fintech-portal",
    title: "FinTech-портал",
    client: "FinTech-стартап, EU",
    industry: "FinTech · B2B SaaS",
    summary:
      "Личный кабинет и админка: платежи, отчёты, роли. Запуск за 14 недель с нуля.",
    challenge:
      "Legacy-процессы, релизы раз в 6 недель, нет единой ролевой модели для B2B-клиентов.",
    solution:
      "Next.js + TypeScript, PostgreSQL, RBAC, интеграция платёжного API, CI/CD на AWS.",
    results: [
      { value: "−40%", label: "время релиза" },
      { value: "14 нед", label: "до production" },
      { value: "99.9%", label: "uptime SLA" },
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    duration: "14 недель",
    team: "2 BE, 2 FE, 1 PM",
    gradient: "from-indigo-600 via-violet-600 to-slate-800",
  },
  "ai-support-assistant": {
    slug: "ai-support-assistant",
    title: "AI-ассистент поддержки",
    client: "B2B SaaS, 200+ сотрудников",
    industry: "SaaS · Customer Support",
    summary:
      "LLM + RAG по базе знаний, эскалация к оператору, снижение нагрузки на L1.",
    challenge:
      "80% однотипных тикетов, долгий онбординг операторов, нет единого knowledge base.",
    solution:
      "RAG pipeline, eval-метрики, guardrails, human handoff, админка для контента.",
    results: [
      { value: "−35%", label: "тикеты L1" },
      { value: "<3 сек", label: "первый ответ" },
      { value: "8 нед", label: "PoC → production" },
    ],
    tags: ["LLM", "RAG", "Python", "Next.js"],
    duration: "8 недель",
    team: "1 ML, 2 BE, 1 PM",
    gradient: "from-emerald-600 via-teal-600 to-slate-800",
  },
  "delivery-mobile-app": {
    slug: "delivery-mobile-app",
    title: "Мобильное приложение доставки",
    client: "Логистика, СНГ",
    industry: "Logistics · Mobile",
    summary:
      "Кроссплатформенное приложение для курьеров и клиентов: трекинг, push, офлайн.",
    challenge:
      "Нужен MVP за 10 недель, нестабильный GPS в регионах, офлайн для курьеров.",
    solution:
      "React Native, Node.js API, push, офлайн-очередь заказов, релиз в App Store / Google Play.",
    results: [
      { value: "10 нед", label: "MVP в сторах" },
      { value: "4.7★", label: "рейтинг в сторах" },
      { value: "50k+", label: "активных пользователей" },
    ],
    tags: ["React Native", "Node.js", "PostgreSQL"],
    duration: "10 недель",
    team: "2 mobile, 1 BE, 1 PM",
    gradient: "from-amber-500 via-orange-600 to-slate-800",
  },
};

const casesEn: Record<CaseSlug, CaseStudy> = {
  "fintech-portal": {
    slug: "fintech-portal",
    title: "FinTech Portal",
    client: "FinTech startup, EU",
    industry: "FinTech · B2B SaaS",
    summary:
      "Customer cabinet and admin: payments, reports, roles. Shipped to production in 14 weeks.",
    challenge:
      "Legacy workflows, 6-week release cycles, no unified RBAC for B2B clients.",
    solution:
      "Next.js + TypeScript, PostgreSQL, RBAC, payment API integration, AWS CI/CD.",
    results: [
      { value: "−40%", label: "release cycle time" },
      { value: "14 wks", label: "to production" },
      { value: "99.9%", label: "uptime SLA" },
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    duration: "14 weeks",
    team: "2 BE, 2 FE, 1 PM",
    gradient: "from-indigo-600 via-violet-600 to-slate-800",
  },
  "ai-support-assistant": {
    slug: "ai-support-assistant",
    title: "AI Support Assistant",
    client: "B2B SaaS, 200+ employees",
    industry: "SaaS · Customer Support",
    summary:
      "LLM + RAG over knowledge base, human handoff, reduced L1 load.",
    challenge:
      "80% repetitive tickets, slow operator onboarding, fragmented knowledge.",
    solution:
      "RAG pipeline, eval metrics, guardrails, handoff flow, content admin.",
    results: [
      { value: "−35%", label: "L1 tickets" },
      { value: "<3s", label: "first response" },
      { value: "8 wks", label: "PoC → production" },
    ],
    tags: ["LLM", "RAG", "Python", "Next.js"],
    duration: "8 weeks",
    team: "1 ML, 2 BE, 1 PM",
    gradient: "from-emerald-600 via-teal-600 to-slate-800",
  },
  "delivery-mobile-app": {
    slug: "delivery-mobile-app",
    title: "Delivery Mobile App",
    client: "Logistics, CIS",
    industry: "Logistics · Mobile",
    summary:
      "Cross-platform app for couriers and customers: tracking, push, offline mode.",
    challenge:
      "10-week MVP deadline, unstable GPS in regions, offline for couriers.",
    solution:
      "React Native, Node.js API, push, offline order queue, App Store / Play release.",
    results: [
      { value: "10 wks", label: "MVP in stores" },
      { value: "4.7★", label: "store rating" },
      { value: "50k+", label: "active users" },
    ],
    tags: ["React Native", "Node.js", "PostgreSQL"],
    duration: "10 weeks",
    team: "2 mobile, 1 BE, 1 PM",
    gradient: "from-amber-500 via-orange-600 to-slate-800",
  },
};

const casesKk: Record<CaseSlug, CaseStudy> = {
  "fintech-portal": {
    slug: "fintech-portal",
    title: "FinTech порталы",
    client: "FinTech-стартап, EU",
    industry: "FinTech · B2B SaaS",
    summary:
      "Клиенттік кабинет пен админ: төлемдер, есептер, рөлдер. 14 аптада production.",
    challenge:
      "Legacy процестер, 6 аптада бір релиз, B2B клиенттерге біртұтас RBAC жоқ.",
    solution:
      "Next.js + TypeScript, PostgreSQL, RBAC, төлем API, AWS CI/CD.",
    results: [
      { value: "−40%", label: "релиз уақыты" },
      { value: "14 апта", label: "production-ға" },
      { value: "99.9%", label: "uptime SLA" },
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    duration: "14 апта",
    team: "2 BE, 2 FE, 1 PM",
    gradient: "from-indigo-600 via-violet-600 to-slate-800",
  },
  "ai-support-assistant": {
    slug: "ai-support-assistant",
    title: "Қолдау AI-ассистенті",
    client: "B2B SaaS, 200+ қызметкер",
    industry: "SaaS · Customer Support",
    summary:
      "LLM + RAG, операторға эскалация, L1 жүктемесін азайту.",
    challenge:
      "80% біртекті тикеттер, баяу онбординг, білім базасы шашыраңқы.",
    solution:
      "RAG pipeline, eval, guardrails, handoff, контент админкасы.",
    results: [
      { value: "−35%", label: "L1 тикеттер" },
      { value: "<3 сек", label: "бірінші жауап" },
      { value: "8 апта", label: "PoC → production" },
    ],
    tags: ["LLM", "RAG", "Python", "Next.js"],
    duration: "8 апта",
    team: "1 ML, 2 BE, 1 PM",
    gradient: "from-emerald-600 via-teal-600 to-slate-800",
  },
  "delivery-mobile-app": {
    slug: "delivery-mobile-app",
    title: "Жеткізу мобильді қосымшасы",
    client: "Логистика, ТМД",
    industry: "Logistics · Mobile",
    summary:
      "Курьерлер мен клиенттерге: трекинг, push, офлайн режим.",
    challenge:
      "10 аптада MVP, тұрақсыз GPS, курьерлерге офлайн.",
    solution:
      "React Native, Node.js, push, офлайн кезек, App Store / Play.",
    results: [
      { value: "10 апта", label: "MVP сторларда" },
      { value: "4.7★", label: "рейтинг" },
      { value: "50k+", label: "белсенді пайдаланушы" },
    ],
    tags: ["React Native", "Node.js", "PostgreSQL"],
    duration: "10 апта",
    team: "2 mobile, 1 BE, 1 PM",
    gradient: "from-amber-500 via-orange-600 to-slate-800",
  },
};

const byLocale: Record<Locale, Record<CaseSlug, CaseStudy>> = {
  ru: casesRu,
  en: casesEn,
  kk: casesKk,
};

export const caseSlugs: CaseSlug[] = [
  "fintech-portal",
  "ai-support-assistant",
  "delivery-mobile-app",
];

export function getCases(locale: Locale): CaseStudy[] {
  return caseSlugs.map((slug) => byLocale[locale][slug]);
}

export function getCase(slug: string, locale: Locale): CaseStudy | null {
  if (!caseSlugs.includes(slug as CaseSlug)) return null;
  return byLocale[locale][slug as CaseSlug];
}
