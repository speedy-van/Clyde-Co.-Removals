import {
  Hero,
  ServicesGrid,
  CoverageSection,
  WhyUs,
  Testimonials,
  ProcessSection,
  CTABand,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <ProcessSection />
      <CoverageSection />
      <Testimonials />
      <CTABand />
    </>
  );
}
