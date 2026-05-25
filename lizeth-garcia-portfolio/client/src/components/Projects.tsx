import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, Lightbulb, Brain } from "lucide-react";

/**
 * Projects Section - Tech Noir + Vibrant Accents
 * Design: Showcases creative coding, hardware, and AI/data projects
 * Layout: Grid of project cards with category badges
 */

const projects = [
  {
    category: "Creative Coding",
    icon: Code2,
    color: "from-primary to-secondary",
    projects: [
      {
        title: "Advanced Test Framework",
        description: "Custom Cypress framework with AI-powered test generation and anomaly detection for complex user flows.",
        tags: ["Cypress", "JavaScript", "AI Integration"],
      },
      {
        title: "Test Automation Dashboard",
        description: "Real-time monitoring dashboard for test execution, failure analysis, and trend reporting.",
        tags: ["React", "TypeScript", "WebSocket"],
      },
      {
        title: "API Testing Suite",
        description: "Comprehensive API testing framework with contract testing and performance validation.",
        tags: ["Postman", "Newman", "CI/CD"],
      },
    ],
  },
  {
    category: "Hardware & IoT",
    icon: Lightbulb,
    color: "from-secondary to-primary",
    projects: [
      {
        title: "Smart Lighting System",
        description: "IoT-enabled smart lamp with automation capabilities, controlled via custom mobile app and web interface.",
        tags: ["Arduino", "IoT", "Mobile App"],
      },
      {
        title: "Automated Testing Gadget",
        description: "Hardware device for automated UI testing on physical devices, reducing manual testing time by 60%.",
        tags: ["Raspberry Pi", "Python", "Automation"],
      },
      {
        title: "Custom QA Toolkit",
        description: "Modular hardware toolkit for performance testing and network simulation in QA environments.",
        tags: ["Electronics", "Embedded Systems", "Testing"],
      },
    ],
  },
  {
    category: "Data & AI",
    icon: Brain,
    color: "from-primary via-secondary to-primary",
    projects: [
      {
        title: "AI Test Case Generator",
        description: "Machine learning model that generates test cases from requirements using NLP and pattern recognition.",
        tags: ["Python", "ML", "NLP", "TensorFlow"],
      },
      {
        title: "Predictive Bug Analysis",
        description: "Data analytics pipeline that predicts high-risk areas in code using historical bug data and metrics.",
        tags: ["Python", "Pandas", "Scikit-learn", "Analytics"],
      },
      {
        title: "LLM Testing Framework",
        description: "Specialized framework for validating LLM behavior, prompt engineering, and AI system reliability.",
        tags: ["Python", "LLM APIs", "Prompt Engineering", "Validation"],
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663453502194/b9kJ7uG5E5JMgAVnKqbvCj/projects-section-BMb3q8CNmWAafg54h9qQLP.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Exploring the intersection of quality assurance, creative development, hardware innovation, and AI/data science.
          </p>
        </div>

        {/* Project Categories */}
        <div className="space-y-16">
          {projects.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <div key={catIdx}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project, projIdx) => (
                    <Card
                      key={projIdx}
                      className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                    >
                      {/* Gradient Top Border */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />

                      <div className="p-6 flex flex-col flex-grow">
                        {/* Title */}
                        <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>

                        {/* Description */}
                        <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIdx) => (
                            <Badge
                              key={tagIdx}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* View Button */}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:bg-primary/10 w-full justify-between group/btn"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

