import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { BlogTeaser } from "@/components/sections/BlogTeaser";

export const metadata: Metadata = {
  description:
    "Студия DevSystems в Астане делает сайты, лендинги и MVP, которые приводят заявки: дизайн, разработка, SEO и запуск.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevSystems — веб-студия в Астане",
    description:
      "Сайты, лендинги и MVP под ключ. Дизайн, разработка, SEO и запуск.",
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
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => m.Testimonials),
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
        <Testimonials />
        <BlogTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
