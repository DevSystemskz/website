import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Engineering } from "@/components/sections/Engineering";
import { Technologies } from "@/components/sections/Technologies";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { CTABanner } from "@/components/sections/CTABanner";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Portfolio />
        <Services />
        <Process />
        <Testimonials />
        <Engineering />
        <Technologies />
        <About />
        <Team />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
