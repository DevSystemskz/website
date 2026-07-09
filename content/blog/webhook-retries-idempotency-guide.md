---
title: "Webhook архитектура: retries, idempotency и защита от дублей"
excerpt: "Как строить надежные webhook-интеграции: повторы, дедупликация, подписи и мониторинг доставки."
date: "2026-07-09"
tag: "Integrations"
imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop"
imageAlt: "Интеграции и webhook события"
seoTitle: "Webhook retries and idempotency guide"
seoDescription: "Практика проектирования webhook-интеграций без дублей и потерь событий."
keywords: ["webhook", "idempotency", "api integrations", "retries"]
---

## Почему webhook ломается

События приходят повторно, в неправильном порядке и иногда с задержкой. Это нормальное поведение сети.

## Что обязательно

- `event_id` в каждом событии
- подпись webhook (HMAC)
- idempotency key в обработчике
- DLQ для неуспешных событий

## Retry стратегия

- exponential backoff
- лимит попыток
- алерт после попадания в DLQ

## Проверка

- Тест повторной доставки одного и того же события
- Тест reorder событий
- Тест истекшей подписи

