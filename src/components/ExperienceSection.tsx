import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      achievements: [
        "Led development of microservices architecture serving 100K+ daily users",
        "Reduced application load time by 40% through performance optimization",
        "Mentored 5 junior developers and established coding best practices",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
    },
    {
      company: "Digital Innovations Inc",
      role: "Full-Stack Developer",
      duration: "2020 - 2022",
      location: "New York, NY",
      type: "Full-time",
      achievements: [
        "Developed and maintained 8+ client-facing web applications",
        "Collaborated with UX/UI team to implement responsive designs",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development processes and code reviews"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe", "Jest", "Heroku"]
    },
    {
      company: "StartupLab",
      role: "Frontend Developer",
      duration: "2019 - 2020",
      location: "Austin, TX",
      type: "Full-time",
      achievements: [
        "Built responsive web applications from wireframes to production",
        "Optimized SEO performance increasing organic traffic by 25%",
        "Implemented real-time features using WebSocket technology",
        "Contributed to open-source projects and internal tool development"
      ],
      technologies: ["React", "Redux", "Sass", "Webpack", "Socket.io", "Firebase"]
    },
    {
      company: "FreelanceHub",
      role: "Web Developer",
      duration: "2018 - 2019",
      location: "Remote",
      type: "Freelance",
      achievements: [
        "Delivered 15+ custom websites for small to medium businesses",
        "Managed complete project lifecycle from concept to deployment",
        "Achieved 95% client satisfaction rate with on-time project delivery",
        "Specialized in e-commerce solutions and content management systems"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "jQuery", "Bootstrap", "WooCommerce"]
    }
  ];

  return (
    <section id="experience" className="py-20 scroll-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-neon">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey through the digital landscape, building innovative solutions and growing with technology
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon via-neon-secondary to-neon transform md:-translate-x-1/2 opacity-30"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-neon rounded-full border-4 border-background transform md:-translate-x-1/2 neon-glow z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="jungle-card group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <Building2 className="h-5 w-5 text-neon mr-2" />
                            <CardTitle className="text-lg group-hover:text-neon transition-colors">
                              {exp.company}
                            </CardTitle>
                          </div>
                          <Badge variant="outline" className="text-neon-secondary border-neon-secondary">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-neon-secondary mb-2">
                          {exp.role}
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-4">
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold mb-2 text-neon">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                                  <span className="text-neon mr-2 mt-1">▸</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold mb-2 text-neon-secondary">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <Badge 
                                  key={techIndex} 
                                  variant="secondary" 
                                  className="text-xs bg-secondary/30 hover:bg-neon/20 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;