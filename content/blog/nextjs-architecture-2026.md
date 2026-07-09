---
title: "Как мы строим масштабируемую архитектуру Next.js в 2026"
excerpt: "Практический подход к структуре приложения, работе с данными и процессам команды при росте продукта."
date: "2026-03-31"
updated: "2026-05-21"
tag: "Архитектура"
relatedService: "mvp-development"
imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop"
imageAlt: "Экран с кодом и архитектурной схемой"
seoTitle: "Архитектура Next.js 2026: масштабируемая структура App Router"
seoDescription: "Гайд по архитектуре Next.js 16: App Router, server components, data layer, кэширование, CI/CD и SEO для растущего B2B-продукта."
keywords: ["next.js архитектура", "app router 2026", "next.js масштабирование", "react server components", "next.js seo"]
faq:
  - q: "Server Components или Client — как решать?"
    a: "По умолчанию Server Component. Client — только интерактив (формы, charts, theme). Меньше JS на клиенте = лучше LCP и SEO."
  - q: "Где держать бизнес-логику в Next.js?"
    a: "В `lib/` и server actions / route handlers, не в компонентах UI. Компоненты — отображение и локальный UI state."
  - q: "Как организовать кэш в App Router?"
    a: "Явно: `fetch` cache, `revalidate`, tags для инвалидации. Документируйте что static, что dynamic — иначе stale data в B2B-кабинете."
  - q: "Monorepo для фронта и API?"
    a: "Имеет смысл при 2+ приложениях и shared types. Для одного продукта — достаточно чётких границ в одном репо."
  - q: "Когда пора выносить BFF из Next?"
    a: "При тяжёлой оркестрации, WebSockets, отдельной mobile-команде — отдельный API. До этого Route Handlers + server actions часто хватает."
---

## Контекст 2026: App Router как default

Next.js 15–16 в greenfield — **App Router**, React Server Components, streaming. Pages Router — только legacy. Архитектура должна отвечать на вопросы CTO: где границы модулей, как тестировать, как не утонуть в `use client`.

Мы так строим [B2B-порталы и SaaS](/services/mvp-development) и [FinTech-кейсы](/cases/fintech-portal).

## Структура репозитория (пример)

```
src/
  app/           # routes, layouts, metadata
  components/
    ui/          # кнопки, инпуты
    sections/    # лендинг-блоки
    features/    # доменные виджеты (billing, auth UI)
  lib/           # db, api clients, validators
  i18n/
```

**Правило:** `features/billing` не импортирует `features/crm` напрямую — только через `lib` или events.

## Server vs Client

| Нужно | Тип |
|-------|-----|
| Чтение БД, SEO текст | Server Component |
| onClick, useState, browser API | Client Component |
| Форма с validation | Client + server action |

Файл с `"use client"` — только если без него нельзя.

## Data layer

- **Server Actions** — мутации с zod-валидацией, revalidate tags.  
- **Route Handlers** — webhooks, OAuth callbacks, mobile API.  
- Не вызывать БД из Client Components.

```typescript
// lib/orders.ts
export async function getOrders(userId: string) {
  return db.order.findMany({ where: { userId }, orderBy: { createdAt: "desc" } });
}
```

## Кэширование и свежесть данных

B2B-кабинет: баланс и статусы — **dynamic**, маркетинг — **static + revalidate**.

- `export const dynamic = 'force-dynamic'` — только где нужно.  
- `revalidateTag('orders')` после мутации.  
- Документ «cache map» в README для команды.

## SEO и performance

- `generateMetadata` на страницах.  
- `metadataBase` в root layout.  
- Images: `next/image`, sizes, priority на LCP.  
- Проверка Core Web Vitals в CI (Lighthouse CI).

## CI/CD для Next

- `next build` на каждый PR.  
- Preview URL на Vercel / self-hosted.  
- Env separation: preview ≠ production secrets.

См. [DevOps-стратегия релизов](/blog/devops-release-strategy).

## Масштабирование команды

- CODEOWNERS по `features/*`.  
- ADR в `/docs/adr` для спорных решений.  
- Bi-weekly arch review 30 min — не big rewrite.

## Признаки техдолга

- Дубли fetch в layout и page.  
- 80% файлов с `"use client"`.  
- Нет типов на границе API.  
- Миграции БД вручную на проде.

## Чеклист перед ростом трафика

- [ ] Cache map задокументирован  
- [ ] Error boundaries + logging  
- [ ] Rate limit на публичных handlers  
- [ ] Load test на critical paths  
- [ ] Rollback образа < 15 min  

Нужен аудит архитектуры Next.js — [заявка](/#contact) · [кейсы](/#portfolio).
