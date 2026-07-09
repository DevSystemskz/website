---
title: "React Native release checklist: что проверить перед публикацией"
excerpt: "Чеклист релиза React Native приложения: build, signing, crash reporting, analytics и post-release контроль."
date: "2026-07-09"
tag: "Mobile"
imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop"
imageAlt: "Мобильная разработка и релиз"
seoTitle: "React Native release checklist"
seoDescription: "Практический чеклист перед релизом React Native в App Store и Google Play."
keywords: ["react native", "mobile release", "app store checklist"]
---

## Перед сборкой

- Версия приложения увеличена.
- Changelog подготовлен.
- Feature flags в нужном состоянии.

## Перед публикацией

- Проверить crash-free на QA smoke.
- Проверить deep links.
- Проверить подписку/платежи на sandbox.

## После релиза

Первые 24 часа:
- crash rate
- ANR rate (Android)
- ключевые события аналитики

