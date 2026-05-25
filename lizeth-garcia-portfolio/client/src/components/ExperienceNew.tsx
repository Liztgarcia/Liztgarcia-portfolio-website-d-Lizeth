import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

/**
 * Experience Section - Minimalista
 * Design: Clean timeline, focus on impact
 */

const experiences = [
  {
    role: "QA Engineer",
    company: "BMM Testlabs",
    period: "Apr 2024 - Jan 2026",
    location: "Dieppe, Canada (Remote)",
    description:
      "Hands-on manual testing of casino machines with direct hardware interaction. Automated testing using Cypress, managed test cases in TestRail/Jira, and validated AWS cloud backend services.",
    highlights: [
      "Manual hardware testing & validation",
      "Cypress automation (85% coverage)",
      "AWS backend testing",
      "Agile collaboration & risk-based prioritization",
    ],
    skills: ["Cypress", "TestRail", "Jira", "AWS", "Python"],
  },
  {
    role: "QA Tester & Scrum Master",
    company: "Grupo Rotoplas",
    period: "Sep 2021 - Sep 2023",
    location: "E-commerce Build Team",
    description:
      "End-to-end Cypress automation for Salesforce e-commerce flows. Developed Power BI dashboards for SLA/KPI monitoring and led two development teams as Scrum Master.",
    highlights: [
      "E-commerce test automation",
      "Salesforce & SAP integration testing",
      "Power BI dashboard development",
      "Team leadership & process optimization",
    ],
    skills: ["Cypress", "Postman", "Salesforce", "Power BI", "SQL", "Agile"],
  },
];

export default function ExperienceNew() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience</h2>
          <p className="text-lg text-muted-foreground">
            5+ years specializing in manual exploratory testing, IoT hardware integration, and e-commerce platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent md:transform md:-translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative ${idx % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-accent border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 ${idx % 2 === 0 ? "md:mr-1/2 md:pr-12" : "md:ml-1/2 md:pl-12"}`}>
                <Card className="border-foreground/10 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <div className="mb-4 space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
