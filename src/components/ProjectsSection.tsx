import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cyberpunk Dashboard",
      description: "A futuristic data visualization dashboard with real-time analytics and neon-themed UI components.",
      tags: ["React", "TypeScript", "D3.js", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Jungle Chat App",
      description: "Real-time messaging application with end-to-end encryption and nature-inspired design.",
      tags: ["Node.js", "Socket.io", "MongoDB", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Neon Marketplace",
      description: "E-commerce platform with modern UI/UX and secure payment integration.",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Bio-Tracker API",
      description: "RESTful API for tracking environmental data with GraphQL integration.",
      tags: ["Express.js", "GraphQL", "Docker", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive visualization tool for understanding machine learning algorithms.",
      tags: ["Python", "TensorFlow", "React", "WebGL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Green Code Editor",
      description: "VS Code extension with nature themes and productivity features for developers.",
      tags: ["TypeScript", "VS Code API", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-neon">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exploring the digital wilderness through innovative applications and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`jungle-card group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Code2 className="h-6 w-6 text-neon group-hover:text-neon-secondary transition-colors" />
                    {project.featured && (
                      <span className="text-xs px-2 py-1 bg-neon/20 text-neon rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-neon transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        variant="neon" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;