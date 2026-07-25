import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { SignatureTreatments } from "@/components/sections/SignatureTreatments";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Atelier } from "@/components/sections/Atelier";
import { Gallery } from "@/components/sections/Gallery";
import { VideoSection } from "@/components/sections/VideoSection";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonials } from "@/components/sections/Testimonials";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Awards } from "@/components/sections/Awards";
import { Financing } from "@/components/sections/Financing";
import { Insurance } from "@/components/sections/Insurance";
import { FAQ } from "@/components/sections/FAQ";
import { SmileAssessment } from "@/components/sections/SmileAssessment";
import { MapLocation } from "@/components/sections/MapLocation";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingActions } from "@/components/FloatingActions";
import { useReveal } from "@/hooks/use-reveal";

const dentalSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Lumière Dental Atelier",
  description:
    "Private cosmetic dental atelier — porcelain veneers, ceramic implants, Invisalign, whitening, and full-mouth rehabilitation.",
  image: "https://pinnacle-web-creators.lovable.app/og-image.jpg",
  telephone: "+1-555-010-0",
  email: "hello@lumiereatelier.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Rue de la Lumière, Suite 3F",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1240" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long do porcelain veneers last?", acceptedAnswer: { "@type": "Answer", text: "Properly maintained veneers typically last 15–20 years." } },
    { "@type": "Question", name: "Is Invisalign painful?", acceptedAnswer: { "@type": "Answer", text: "Most patients report mild pressure for 24–48 hours after switching aligners." } },
    { "@type": "Question", name: "Are payment plans available?", acceptedAnswer: { "@type": "Answer", text: "Yes — 0% financing on treatments over £3,000 and bespoke instalment plans." } },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Dental Atelier — Private Cosmetic & Restorative Dentistry" },
      {
        name: "description",
        content:
          "Premium cosmetic dentistry, porcelain veneers, smile makeovers, ceramic implants, and Invisalign — composed like couture at Lumière Dental Atelier.",
      },
      { property: "og:title", content: "Lumière Dental Atelier — Private Cosmetic Dentistry" },
      {
        property: "og:description",
        content:
          "Cinematic, considered dental care. Veneers, ceramic implants, Invisalign, and full-mouth renewal — composed like couture.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pinnacle-web-creators.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lumière Dental Atelier" },
      {
        name: "twitter:description",
        content: "A private dental atelier practising cinematic, considered care.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pinnacle-web-creators.lovable.app/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(dentalSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <main className="relative">
      <AnnouncementBar />
      <SiteHeader />
      <Hero />
      <Marquee />
      <Services />
      <SignatureTreatments />
      <BeforeAfter />
      <Atelier />
      <Gallery />
      <VideoSection />
      <Philosophy />
      <Testimonials />
      <GoogleReviews />
      <Awards />
      <Financing />
      <Insurance />
      <FAQ />
      <SmileAssessment />
      <MapLocation />
      <Contact />
      <SiteFooter />
      <FloatingActions />
    </main>
  );
}
