import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

/**
 * CTA & Footer Section - Tech Noir + Vibrant Accents
 * Design: Call-to-action with contact options and footer
 */

export default function CTAFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663453502194/b9kJ7uG5E5JMgAVnKqbvCj/cta-background-j78JpFCFgmbVRGYwTdJPbc.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-background via-background/90 to-background" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-foreground">Ready to Collaborate?</h2>
              <p className="text-lg text-muted-foreground">
                Whether you need QA expertise, creative development, or AI testing solutions, let's connect and explore how
                we can work together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
              >
                Send me an Email
                <Mail className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10"
              >
                Schedule a Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-primary/20">
              <p className="text-muted-foreground mb-4">Or reach out directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:liztilla.dev@gmail.com"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Mail className="w-5 h-5" />
                  liztilla.dev@gmail.com
                </a>
                <span className="text-muted-foreground hidden sm:block">•</span>
                <a
                  href="tel:+525611767687"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  📱 +52 56 11 76 76 87
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-card/50 border-t border-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Lizeth García</h3>
              <p className="text-muted-foreground text-sm">
                QA Engineer & Creative Developer
                <br />
                Building quality into products that think
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:liztilla.dev@gmail.com"
                  className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 Lizeth García. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

