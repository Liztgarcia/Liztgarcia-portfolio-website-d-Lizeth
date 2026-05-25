import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Briefcase } from "lucide-react";

/**
 * Experience Section - Tech Noir + Vibrant Accents
 * Design: Dark background with neon lime green accents for QA/automation theme
 * Layout: Timeline-style cards with skills badges
 */

const experiences = [
  {
    title: "QA Engineer",
    company: "BMM Testlabs",
    period: "April 2024 - January 2026",
    location: "Dieppe, Canada (Remote)",
    description:
      "Designed and executed Cypress-based test automation frameworks for casino gaming systems, achieving 85% automated test coverage across critical user flows.",
    highlights: [
      "Cypress-based test automation (85% coverage)",
      "AWS infrastructure validation",
      "TestRail & Jira test management",
      "Exploratory testing for complex gaming scenarios",
      "Zero critical post-deployment defects",
    ],
    skills: ["Cypress", "AWS", "TestRail", "Jira", "API Testing", "Python"],
    accentColor: "from-primary to-secondary",
  },
  {
    title: "QA Tester & Scrum Master",
    company: "Grupo Rotoplas",
    period: "September 2021 - September 2023",
    location: "E-commerce Build Team",
    description:
      "Created end-to-end test flows using Cypress for Salesforce e-commerce scenarios and developed SLA/KPI monitoring tools in Power BI.",
    highlights: [
      "End-to-end Cypress automation for e-commerce",
      "Salesforce & SAP integration testing",
      "Power BI dashboard development",
      "Scrum Master for 2 development teams",
      "Data-driven quality improvements",
    ],
    skills: ["Cypress", "Postman", "Salesforce", "Power BI", "SQL", "Agile"],
    accentColor: "from-secondary to-primary",
  },
];

export default function Experience() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663453502194/b9kJ7uG5E5JMgAVnKqbvCj/experience-section-U2pBQxNHYWJhhW3tn4W4vu.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-foreground">Professional Experience</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            4+ years of specialized QA engineering, from casino gaming systems to enterprise e-commerce platforms.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group">
              <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Gradient Border Effect */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.accentColor}`} />

                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <p className="text-primary font-semibold text-lg">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mt-1">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/90 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Years of Experience", value: "4+", icon: "📊" },
            { label: "Test Coverage Achieved", value: "85%", icon: "✅" },
            { label: "Teams Led", value: "2", icon: "👥" },
          ].map((stat, idx) => (
            <Card
              key={idx}
              className="border-primary/20 bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/50 transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

