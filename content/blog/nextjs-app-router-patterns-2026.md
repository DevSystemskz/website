---
title: "Next.js App Router patterns в 2026: структура без хаоса"
excerpt: "Практичные паттерны App Router для командной разработки: границы модулей, data fetching, кэширование и deployment."
date: "2026-07-09"
tag: "Архитектура"
imageSrc: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200&q=80&auto=format&fit=crop"
imageAlt: "Архитектура Next.js приложения"
seoTitle: "Next.js App Router patterns 2026"
seoDescription: "Паттерны для масштабируемой архитектуры Next.js App Router: структура, cache, server/client boundaries."
keywords: ["nextjs app router", "frontend architecture", "nextjs patterns"]
---

## Когда App Router начинает тормозить команду

Проблема обычно не в Next.js, а в неявных правилах: где server logic, где client UI, где держать fetch и как инвалидировать кэш.

## Базовые паттерны

- Server Components по умолчанию.
- Client только для интерактива.
- Data layer в `lib/`, не в `components`.
- `revalidateTag()` после мутаций, а не full refresh.

## Рекомендуемая структура

```txt
app/
  (marketing)/
  (product)/
components/
  ui/
  features/
lib/
  api/
  domain/
```

## Частые ошибки

1. Слишком много `use client` в верхних layout.
2. Один глобальный store для всего.
3. Fetch в 3 местах на одну сущность.

## Чеклист перед релизом

- [ ] Есть границы server/client
- [ ] Есть cache strategy на критичные страницы
- [ ] Build и typecheck в CI
- [ ] Error boundaries на ключевых роутингах

## Data fetching patterns: что выбрать

В App Router важно явно определить стратегию:

- **Static + revalidate** для маркетинговых страниц и статей.
- **Dynamic** для личных кабинетов и real-time статусов.
- **Streaming** для сложных страниц с несколькими блоками данных.

Если этого не сделать заранее, в проекте быстро появляется смесь случайных решений, и отладка становится дорогой.

## Cache strategy на практике

Простой подход, который хорошо работает в B2B:

1. Вести карту кэша в документации (`/docs/cache-map.md`).
2. Каждую fetch-функцию помечать режимом.
3. После мутаций использовать tag-based revalidation.

Пример:

```ts
await fetch(url, { next: { tags: ["orders"], revalidate: 300 } });
```

После обновления заказа:

```ts
revalidateTag("orders");
```

## Границы модулей

Когда проект растёт, важно не позволять "feature A" тянуть половину "feature B".  
Полезное правило: общий код только через `lib` и `ui`, бизнес-логика между фичами напрямую не импортируется.

## Ошибки, которые часто встречаются

- Оборачивать весь layout в client component ради одной кнопки.
- Хранить auth/session состояние в нескольких местах.
- Смешивать API-доступ и UI в одном компоненте.
- Использовать один общий loading state на всю страницу.

## Миграция с legacy pages router

Если у вас старый проект, миграцию лучше делать по вертикалям:

1. Перенести маркетинговые страницы.
2. Перенести blog/docs.
3. Затем кабинет и динамические разделы.

Большой "big bang migration" почти всегда срывает сроки.

## Deployment и качество

Минимум для production:

- typecheck + build на каждый PR;
- preview environments;
- smoke-тест критичного user flow после deploy;
- базовая observability (errors + latency + conversion).

## Итого

App Router даёт сильные преимущества по производительности и SEO, но только если в проекте есть системные правила: структура, cache policy и границы между server/client. Без этого скорость команды падает после первых 2-3 месяцев роста.

