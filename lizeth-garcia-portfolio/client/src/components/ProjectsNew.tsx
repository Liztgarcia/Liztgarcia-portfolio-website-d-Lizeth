import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

/**
 * Projects Section - Minimalista
 * Design: Showcase creative work, hardware, and AI projects
 */

const projects = [
  {
    title: "Advanced Test Automation Framework",
    category: "Creative Coding",
    description:
      "Custom Cypress framework with AI-powered test generation and anomaly detection for complex user flows.",
    tags: ["Cypress", "JavaScript", "AI Integration", "Test Automation"],
    link: "#",
  },
  {
    title: "Smart Lighting System",
    category: "Hardware & IoT",
    description:
      "IoT-enabled smart lamp with automation capabilities, controlled via custom mobile app and web interface.",
    tags: ["Arduino", "IoT", "Mobile App", "Hardware"],
    link: "#",
  },
  {
    title: "AI Test Case Generator",
    category: "Data & AI",
    description:
      "Machine learning model that generates test cases from requirements using NLP and pattern recognition.",
    tags: ["Python", "ML", "NLP", "TensorFlow"],
    link: "#",
  },
  {
    title: "Test Automation Dashboard",
    category: "Creative Coding",
    description: "Real-time monitoring dashboard for test execution, failure analysis, and trend reporting.",
    tags: ["React", "TypeScript", "WebSocket", "Analytics"],
    link: "#",
  },
  {
    title: "Predictive Bug Analysis",
    category: "Data & AI",
    description:
      "Data analytics pipeline that predicts high-risk areas in code using historical bug data and metrics.",
    tags: ["Python", "Pandas", "Scikit-learn", "Analytics"],
    link: "#",
  },
  {
    title: "Automated Testing Gadget",
    category: "Hardware & IoT",
    description:
      "Hardware device for automated UI testing on physical devices, reducing manual testing time by 60%.",
    tags: ["Raspberry Pi", "Python", "Automation", "Hardware"],
    link: "#",
  },
];

const categoryColors: Record<string, string> = {
  "Creative Coding": "bg-accent/10 text-accent border-accent/20",
  "Hardware & IoT": "bg-primary/10 text-primary border-primary/20",
  "Data & AI": "bg-muted/10 text-muted-foreground border-muted/20",
};

export default function ProjectsNew() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Exploring the intersection of QA, creative development, hardware innovation, and AI/data science.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group border-foreground/10 bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 p-6 flex flex-col"
            >
              {/* Category Badge */}
              <Badge
                variant="outline"
                className={`w-fit mb-4 ${categoryColors[project.category] || categoryColors["Creative Coding"]}`}
              >
                {project.category}
              </Badge>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-foreground/5 text-foreground/70 border-foreground/10">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 font-medium text-sm"
              >
                Explore
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
