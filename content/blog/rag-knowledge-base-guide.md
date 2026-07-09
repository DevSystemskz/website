---
title: "RAG для базы знаний: как повысить точность ответов AI"
excerpt: "Пошаговый гайд по построению RAG-системы: подготовка данных, retrieval-стратегия, оценка качества и снижение галлюцинаций."
date: "2026-03-16"
updated: "2026-05-21"
tag: "AI"
relatedService: "ai-integration"
imageSrc: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&q=80&auto=format&fit=crop"
imageAlt: "Поиск по базе знаний и AI-модель"
seoTitle: "RAG архитектура для базы знаний: практический гайд"
seoDescription: "Как построить RAG-систему для корпоративной базы знаний: chunking, embedding, hybrid retrieval, quality metrics и контроль галлюцинаций."
keywords: ["rag база знаний", "retrieval augmented generation", "качество rag", "галлюцинации llm", "corporate knowledge base ai"]
faq:
  - q: "Какой размер чанка оптимален для корпоративных документов?"
    a: "Чаще 400–800 токенов с overlap 10–15%. Для FAQ-карточек — один Q&A = один чанк. Для длинных регламентов — разбивка по заголовкам, не фиксированным символам."
  - q: "Почему RAG отвечает неверно при «правильных» документах?"
    a: "Причины: устаревший индекс, плохой chunking (обрыв контекста), только vector search без keyword, низкий порог similarity, отсутствие rerank. Диагностика — смотреть retrieved chunks в логах."
  - q: "Нужен ли reranker в production?"
    a: "Да, если >500 документов или смешанные форматы. Cross-encoder rerank top-20 → top-5 заметно повышает precision без роста галлюцинаций."
  - q: "Как часто переиндексировать базу?"
    a: "Инкрементально при изменении документа (webhook из CMS/Confluence). Полный reindex — раз в квартал или при смене embedding-модели."
  - q: "Что показывать пользователю кроме ответа?"
    a: "Ссылки на источники (заголовок + фрагмент), дату обновления документа, кнопку «ответ неточный». Это повышает доверие и даёт сигналы для улучшения KB."
---

## Зачем RAG, если есть ChatGPT

Публичные модели не знают ваших регламентов, тарифов и внутренних API. **RAG (Retrieval-Augmented Generation)** подмешивает в промпт релевантные фрагменты из вашей базы перед генерацией ответа.

Связанные материалы: [паттерны AI в продукте](/blog/ai-integrations-product), [автоматизация поддержки](/blog/ai-support-automation-playbook).

## Pipeline подготовки данных

| Этап | Задача | Типичная ошибка |
|------|--------|-----------------|
| Ingest | PDF, HTML, Notion, Zendesk → единый формат | Потеря таблиц при парсинге PDF |
| Clean | Дедуп, удаление draft, единый язык | Два противоречащих регламента |
| Chunk | Логические блоки + metadata | Слишком мелкие чанки без смысла |
| Embed | Векторизация + хранение | Смена модели без reindex |
| Index | Vector DB + опционально BM25 | Нет фильтра по продукту/роли |

**Metadata на чанк:** `product`, `locale`, `doc_version`, `access_role` — чтобы retrieval не отдавал HR-инструкции клиенту B2B.

## Hybrid retrieval: vector + keyword

Только embeddings плохо ловят артикулы, SKU, юридические номера. Практика:

1. Vector top-20 по cosine similarity.  
2. BM25 top-20 по ключевым словам запроса.  
3. Reciprocal Rank Fusion → union.  
4. Cross-encoder rerank → top-5 в LLM.

Порог `minScore`: если ни один чанк не проходит — **не генерировать** ответ, а предложить оператора или уточняющий вопрос.

## Оценка качества RAG

**Offline:** golden set 100–300 пар (вопрос → ожидаемый doc/фрагмент).

Метрики:

- **Recall@5** — нашли ли правильный документ в top-5  
- **Faithfulness** — ответ основан на чанках (LLM-as-judge или правила)  
- **Citation accuracy** — ссылки совпадают с использованным текстом  

**Online:** thumbs down, «источник не помог», время до решения тикета.

## Антипаттерны

- Индексировать «всё подряд» включая черновики Slack.  
- Один глобальный промпт для клиентов и сотрудников.  
- Не логировать retrieved chunks (невозможно чинить).  
- Отвечать при пустом retrieval «на всякий случай».

## Пример структуры ответа API

```json
{
  "answer": "Для возврата средств нужно...",
  "confidence": "high",
  "sources": [
    { "docId": "refund-policy-v3", "title": "Возвраты B2B", "snippet": "..." }
  ],
  "escalate": false
}
```

## Стоимость и производительность

- Embedding batch при ночном ingest дешевле real-time.  
- Кэш на нормализованный query hash для FAQ.  
- p95 latency: retrieval < 300 ms, LLM < 2 s — иначе чат «тормозит».

В [кейсе AI Support Assistant](/cases/ai-support-assistant) — production RAG с эскалацией и метриками L1.

## Еженедельный ритуал качества

- 30 спорных диалогов с разбором chunks;  
- обновление 5–10 документов в KB;  
- дополнение golden set новыми edge cases;  
- отчёт: recall, faithfulness, cost per answer.

## Чеклист запуска

- [ ] Owner базы знаний назначен  
- [ ] Chunking проверен на 20 «сложных» документах  
- [ ] Hybrid retrieval + rerank  
- [ ] Fallback без галлюцинации  
- [ ] Источники видны пользователю  
- [ ] Golden set ≥ 50 вопросов  

Заказать проектирование RAG — [услуга AI-интеграции](/services/ai-integration).
