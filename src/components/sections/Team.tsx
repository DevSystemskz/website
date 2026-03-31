"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TeamCard } from "./TeamCard";
import { useStaggerVariants, viewportOnce } from "@/components/motion/useStaggerVariants";
import { useI18n } from "@/components/i18n/I18nProvider";
import { type Locale } from "@/i18n/messages";

function getTeam(locale: Locale) {
  if (locale === "en") {
    return [
      {
        name: "Dmitry Volkov",
        role: "Tech Lead",
        bio: "Architecture and key technical decisions. 10+ years in web and cloud.",
        initials: "DV",
      },
      {
        name: "Maria Sokolova",
        role: "Project Manager",
        bio: "Team coordination and client communication. Agile and Scrum.",
        initials: "MS",
      },
      {
        name: "Andrey Petrov",
        role: "Senior Developer",
        bio: "Fullstack and mobile development with strong quality focus.",
        initials: "AP",
      },
      {
        name: "Elena Kozlova",
        role: "UX/UI Designer",
        bio: "Product UX from prototypes to scalable design systems.",
        initials: "EK",
      },
    ];
  }

  return [
    {
      name: "Дмитрий Волков",
      role: "Tech Lead",
      bio: "Архитектура и ключевые технические решения. 10+ лет в веб и облаках.",
      initials: "ДВ",
    },
    {
      name: "Мария Соколова",
      role: "Project Manager",
      bio: "Координация команд и коммуникация с заказчиками. Agile, Scrum.",
      initials: "МС",
    },
    {
      name: "Андрей Петров",
      role: "Senior Developer",
      bio: "Fullstack, мобильная разработка. Фокус на качестве кода.",
      initials: "АП",
    },
    {
      name: "Елена Козлова",
      role: "UX/UI Designer",
      bio: "Интерфейсы и пользовательский опыт. От прототипов до дизайн-систем.",
      initials: "ЕК",
    },
  ];
}

export function Team() {
  const { section, item, grid } = useStaggerVariants();
  const { m, locale } = useI18n();
  const team = getTeam(locale);

  return (
    <motion.section
      id="team"
      className="border-t border-slate-200 bg-white py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-900"
      variants={section}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Container>
        <motion.div variants={item}>
          <SectionTitle
            tag={m.sections.teamTag}
            title={m.sections.teamTitle}
            description={m.sections.teamDesc}
          />
        </motion.div>
        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={grid}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={item}>
              <TeamCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
