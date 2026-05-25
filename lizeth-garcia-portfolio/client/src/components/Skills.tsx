import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Award } from "lucide-react";

/**
 * Skills & Certifications Section - Tech Noir + Vibrant Accents
 * Design: Organized skill categories with certification badges
 */

const skillCategories = [
  {
    title: "Test Automation & Frameworks",
    skills: ["Cypress (Advanced)", "API Testing (Postman)", "TestRail", "Jira", "CI/CD Integration", "Python Scripting"],
    accentColor: "from-primary to-secondary",
  },
  {
    title: "AI/ML Testing & Emerging Tech",
    skills: [
      "Prompt Engineering",
      "LLM Behavior Validation",
      "AI System Testing",
      "Exploratory Testing",
      "Non-Deterministic Systems",
    ],
    accentColor: "from-secondary to-primary",
  },
  {
    title: "Testing Methodologies",
    skills: [
      "Functional Testing",
      "Regression Testing",
      "Integration Testing",
      "UAT",
      "Exploratory Testing",
      "Risk-Based Testing",
    ],
    accentColor: "from-primary via-secondary to-primary",
  },
  {
    title: "Infrastructure & Tools",
    skills: ["AWS Infrastructure", "Power BI", "Data Analytics", "Agile/Scrum", "SQL", "Team Leadership"],
    accentColor: "from-secondary via-primary to-secondary",
  },
];

const certifications = [
  {
    title: "IT Software Quality Assurance Diploma",
    issuer: "New Brunswick Community College",
    date: "2024-2026",
    status: "In Progress",
  },
  {
    title: "Amazon Cloud Practitioner Certification",
    issuer: "AWS",
    date: "Oct 2022 - Oct 2027",
    status: "Active",
  },
  {
    title: "Azure AZ-900 Certification",
    issuer: "Microsoft",
    date: "Sep 2022 - Sep 2027",
    status: "Active",
  },
  {
    title: "Data Analytics + AI Course",
    issuer: "Skills For Hire Atlantic",
    date: "2023",
    status: "Completed",
  },
];

export default function Skills() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div>
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-primary" />
              <h2 className="text-foreground">Technical Skills</h2>
            </div>

            {/* Skill Categories */}
            <div className="space-y-6">
              {skillCategories.map((category, idx) => (
                <Card
                  key={idx}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 p-6"
                >
                  {/* Category Title with Gradient */}
                  <div className={`inline-block mb-4 px-3 py-1 rounded-full bg-gradient-to-r ${category.accentColor} bg-clip-text`}>
                    <h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={skillIdx}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-secondary" />
              <h2 className="text-foreground">Certifications & Education</h2>
            </div>

            {/* Certifications List */}
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <Card
                  key={idx}
                  className="border-secondary/20 bg-card/50 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 p-6 group relative"
                >
                  {/* Left Border */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-secondary to-primary rounded-l-lg" />

                  <div className="pl-2">
                    {/* Title */}
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          cert.status === "Active"
                            ? "border-primary/50 text-primary bg-primary/10"
                            : cert.status === "In Progress"
                              ? "border-secondary/50 text-secondary bg-secondary/10"
                              : "border-muted-foreground/50 text-muted-foreground"
                        }`}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

