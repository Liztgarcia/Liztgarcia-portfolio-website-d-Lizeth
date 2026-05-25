import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Hero Section - Minimalista & Personal
 * Design: Clean, direct, inviting collaboration
 * Inspiration: Creative coding portfolios
 */

export default function HeroNew() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Subtle background element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">Hi, I'm Lizeth</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              I build{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">quality</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-10 rounded" />
              </span>
              {" "}into products that think
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              Test systems that learn. Find the edge cases where AI gets creative. I turn complex technical requirements into bulletproof test strategies and catch bugs that shouldn't exist yet.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-foreground/10 text-foreground hover:border-accent hover:text-accent transition-all duration-300 hover:bg-accent/5"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-foreground/10 text-foreground hover:border-accent hover:text-accent transition-all duration-300 hover:bg-accent/5"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:liztilla.dev@gmail.com"
              className="p-3 rounded-lg border border-foreground/10 text-foreground hover:border-accent hover:text-accent transition-all duration-300 hover:bg-accent/5"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`flex items-center justify-center gap-2 transition-all duration-500 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border border-foreground/20 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-foreground/40 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
