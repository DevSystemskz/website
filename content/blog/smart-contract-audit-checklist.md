---
title: "Smart contract audit checklist: что проверить до mainnet"
excerpt: "Чеклист аудита смарт-контрактов: access control, reentrancy, math, tests и deployment-процедуры."
date: "2026-07-09"
tag: "Blockchain"
imageSrc: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80&auto=format&fit=crop"
imageAlt: "Аудит smart contract"
seoTitle: "Smart contract audit checklist"
seoDescription: "Практический чеклист безопасности перед релизом smart contract в mainnet."
keywords: ["smart contract audit", "solidity security", "blockchain checklist"]
---

## До аудита

- Определить threat model.
- Зафиксировать инварианты контракта.
- Подготовить набор edge-case тестов.

## Ключевые проверки

- Access control
- Reentrancy
- Integer overflow/underflow
- Pause/upgrade механизмы
- Oracle манипуляции

## Перед mainnet

- независимый security review
- bug bounty (минимальный)
- runbook на инцидент

