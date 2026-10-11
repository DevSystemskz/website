import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  description:
    "Веб-студия в Астане: лендинги и MVP под заявки из поиска и WhatsApp. Оценка за 1–2 дня, живые кейсы в продакшене.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevSystems — веб-студия в Астане",
    description:
      "Сайты под заявки: оффер, мессенджеры, SEO-база и запуск. Оценка за 1–2 дня.",
    url: "/",
  },
};

const Portfolio = dynamic(() =>
  import("@/components/sections/Portfolio").then((m) => m.Portfolio),
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => m.Services),
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.Process),
);
const About = dynamic(() =>
  import("@/components/sections/About").then((m) => m.About),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => m.Contact),
);
const Footer = dynamic(() =>
  import("@/components/layout/Footer").then((m) => m.Footer),
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Portfolio />
        <Services />
        <Process />
        <About />
        <BlogTeaser />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
