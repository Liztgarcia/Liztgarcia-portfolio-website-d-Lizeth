import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CTAFooter from "@/components/CTAFooter";

/**
 * Home Page - Lizeth García Portfolio
 * Tech Noir + Vibrant Accents Design
 *
 * Sections:
 * 1. Hero - Introduction with CTA
 * 2. Experience - Professional background
 * 3. Projects - Creative coding, hardware, AI/data
 * 4. Skills - Technical skills and certifications
 * 5. CTA + Footer - Contact and social links
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <CTAFooter />
    </div>
  );
}

