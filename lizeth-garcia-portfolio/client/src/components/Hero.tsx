import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap } from "lucide-react";

/**
 * Hero Section - Tech Noir + Vibrant Accents
 * Design: Deep navy background with neon cyan/magenta accents
 * Layout: Asymmetric with text left, visual elements right
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663453502194/b9kJ7uG5E5JMgAVnKqbvCj/hero-background-j7XU6CBaWH2nMZQkJd73Fx.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-background via-background/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 w-fit">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">QA Engineer & Creative Developer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-foreground leading-tight">
                I build{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  quality into products
                </span>{" "}
                that think
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Test systems that learn. Find edge cases where AI gets creative. Bridging traditional QA excellence
                with next-generation automation and AI validation.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
                Cypress Automation
              </div>
              <div className="px-3 py-1 rounded-md bg-secondary/10 border border-secondary/20 text-sm text-secondary font-medium">
                AI/ML Testing
              </div>
              <div className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
                AWS Infrastructure
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
              >
                View My Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated Circles */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-secondary/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-16 rounded-full border border-primary/20 animate-pulse" style={{ animationDelay: "1s" }} />

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-2xl opacity-50" />
                  <div className="relative bg-card border border-primary/30 rounded-lg p-8 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
