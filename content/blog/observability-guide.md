---
title: "Observability: как понять, что происходит в системе"
excerpt: "Полный гид по observability: логи, метрики, трейсы, OpenTelemetry и инструменты мониторинга."
date: "2026-04-21"
tag: "DevOps"
imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop"
imageAlt: "Дашборд мониторинга и логи"
seoTitle: "Observability: логи, метрики и трейсы"
seoDescription: "Как построить observability: логирование, метрики, trace, OpenTelemetry, Grafana, Prometheus и инструменты."
keywords: ["observability", "логирование", "метрики", "tracing", "opentelemetry", "мониторинг"]
---

# Как понять, что происходит в системе

Когда что-то сломалось, хочется быстро понять — где, почему, и как починить. Без observability это гадание на кофейной гуще.

## Три столпа observability

### Логи (Logs)

- Записи о том, что происходило. Время, уровень (info, error), сообщение, контекст.
- Хранить все логи не надо — только нужные. ERROR и WARN по умолчанию, DEBUG по запросу.
- Инструменты: ELK, Loki, CloudWatch.

### Метрики (Metrics)

- Численные показатели: CPU, RAM, request latency, error rate. Что-то, что можно строить в графики.
- Инструменты: Prometheus, InfluxDB, DataDog.

### Трейсы (Traces)

- Путь запроса через систему. От пользователя до базы данных и обратно. Показывает, где именно тормозит.
- OpenTelemetry — стандарт для сбора трейсов. Jaeger, Zipkin — для хранения.

## Как внедрить

1. Начните с логирования — просто пишите логи в файл или stdout.
2. Добавьте агрегацию — собирайте логи в одно место (ELK, Loki).
3. Добавьте метрики — Prometheus exporter для основных сервисов.
4. Подключите трейсы OpenTelemetry для slow-запросов.

## Что мониторить

- Availability — работает или нет.
- Latency — время отклика.
- Errors — количество ошибок.
- Saturation — ресурсы (CPU, RAM, диск).

## Алёртинг

- Не алёртить на каждое отклонение. Настройтеthresholdы.
- Но P1 должен знать о критических проблемах сразу.

Хорошая observability — это не роскошь, это необходимость для production.