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

## Scope аудита: что обязательно включить

Перед аудитом зафиксируйте границы:

- какие контракты входят в релиз;
- какие зависимости (libraries, oracles, bridges);
- какие привилегии у ролей admin/owner;
- какой процесс upgrade/pause.

Без чётких границ аудит становится "поверхностным" и не покрывает реальные риски.

## Технические блоки проверки

### 1) Access control

Проверяется, кто может:
- менять критичные параметры,
- минтить/сжигать токены,
- ставить контракт на паузу.

Любой admin-path должен быть задокументирован и защищён (multisig, timelock).

### 2) State machine и инварианты

Важно формально описать, что всегда должно быть верно:

- сумма балансов,
- ограничения на эмиссию,
- невозможность двойного списания.

Тесты должны валидировать эти инварианты на edge-case сценариях.

### 3) Экономические атаки

Даже если код "без багов", экономика может быть уязвима:

- манипуляции oracle,
- sandwich/front-running,
- flash-loan атаки.

Для DeFi это критично, но и в B2B tokenized flows нужно учитывать.

## Инструменты, которые стоит использовать

- Slither (статический анализ),
- Foundry/Hardhat tests,
- Echidna/fuzzing для property-based проверок,
- Mythril/доп. scanners (как дополнительный слой).

Инструмент не заменяет ручной аудит, но повышает покрытие.

## Deployment security checklist

- [ ] Проверены constructor params.
- [ ] Верификация контракта в block explorer.
- [ ] Подписанты multisig подтверждены.
- [ ] Private keys хранятся в HSM/безопасном контуре.
- [ ] Есть emergency pause policy.

## Пост-аудитный процесс

После отчёта важно:

1. Закрыть все критичные и high-risk замечания.
2. Повторно прогнать regression tests.
3. Зафиксировать hash audited commit.
4. Подписать go-live decision.

Если между аудитом и релизом код изменился — нужен re-audit хотя бы изменённых модулей.

## Вывод

Smart contract audit — это не "галочка перед launch", а полноценный риск-процесс. Самая частая причина проблем на mainnet — недооценка операционной части: ключи, роли, upgrade и инцидентный runbook.

Хорошая практика — проводить short security review перед каждым значимым релизом контракта, даже если полный аудит уже был ранее.

