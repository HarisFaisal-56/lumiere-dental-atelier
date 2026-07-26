import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Atelier } from "@/components/sections/Atelier";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Dental Atelier — Private Cosmetic & Restorative Dentistry" },
      {
        name: "description",
        content:
          "A private dental atelier practising cinematic, considered care. Porcelain veneers, ceramic implants, invisible alignment, and full-mouth renewal — composed like couture.",
      },
      { property: "og:title", content: "Lumière Dental Atelier" },
      {
        property: "og:description",
        content:
          "Cinematic, considered dental care. Veneers, ceramic implants, alignment, and full-mouth renewal — composed like couture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lumière Dental Atelier" },
      {
        name: "twitter:description",
        content: "A private dental atelier practising cinematic, considered care.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Services />
      <Atelier />
      <Philosophy />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  );
}
