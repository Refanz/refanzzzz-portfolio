import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, Eye, Server, Brain, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = {
    frontend: [
      {
        id: "cyberpunk-dashboard",
        title: "Cyberpunk Dashboard",
        description: "A futuristic data visualization dashboard with real-time analytics and neon-themed UI components built with React and D3.js.",
        tags: ["React", "TypeScript", "D3.js", "WebSockets"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        image: "/placeholder.svg"
      },
      {
        id: "neon-portfolio",
        title: "Neon Portfolio Template",
        description: "Modern portfolio template with cyberpunk aesthetics and smooth animations.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        image: "/placeholder.svg"
      }
    ],
    api: [
      {
        id: "jungle-api",
        title: "Jungle Chat API",
        description: "RESTful API for real-time messaging with end-to-end encryption and scalable architecture.",
        tags: ["Node.js", "Express", "MongoDB", "Socket.io"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        image: "/placeholder.svg"
      },
      {
        id: "biotracker-api",
        title: "Bio-Tracker GraphQL API",
        description: "GraphQL API for tracking environmental data with real-time subscriptions.",
        tags: ["GraphQL", "Apollo Server", "PostgreSQL", "Docker"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        image: "/placeholder.svg"
      }
    ],
    ai: [
      {
        id: "neural-viz",
        title: "Neural Network Visualizer",
        description: "Interactive tool for visualizing and understanding machine learning algorithms in real-time.",
        tags: ["Python", "TensorFlow", "React", "WebGL"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        image: "/placeholder.svg"
      },
      {
        id: "ai-code-assistant",
        title: "AI Code Assistant",
        description: "VS Code extension that uses AI to help developers write better code with intelligent suggestions.",
        tags: ["TypeScript", "OpenAI API", "VS Code API"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        image: "/placeholder.svg"
      }
    ],
    vibe: [
      {
        id: "particle-playground",
        title: "Particle Playground",
        description: "Interactive particle system with physics simulation and creative visual effects.",
        tags: ["Three.js", "WebGL", "Canvas API", "Physics"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        image: "/placeholder.svg"
      },
      {
        id: "sound-visualizer",
        title: "Audio Visualizer",
        description: "Real-time audio visualization with customizable effects and neon aesthetics.",
        tags: ["Web Audio API", "Canvas", "JavaScript", "CSS3"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        image: "/placeholder.svg"
      }
    ]
  };

  const tabIcons = {
    frontend: <Code2 className="h-4 w-4" />,
    api: <Server className="h-4 w-4" />,
    ai: <Brain className="h-4 w-4" />,
    vibe: <Sparkles className="h-4 w-4" />
  };

  const handleViewDetails = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const renderProjectCard = (project: any) => (
    <Card key={project.id} className="jungle-card group h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          {tabIcons[Object.keys(projects).find(key => 
            projects[key as keyof typeof projects].some((p: any) => p.id === project.id)
          ) as keyof typeof tabIcons]}
          {project.featured && (
            <Badge variant="outline" className="text-neon border-neon text-xs">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="group-hover:text-neon transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, tagIndex: number) => (
              <Badge 
                key={tagIndex}
                variant="secondary" 
                className="text-xs bg-secondary/30 hover:bg-neon/20 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <Button 
            variant="neon" 
            size="sm" 
            className="flex-1"
            onClick={() => handleViewDetails(project.id)}
          >
            <Eye className="mr-2 h-4 w-4" />
            Details
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

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

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-card border border-border">
              <TabsTrigger 
                value="frontend" 
                className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon flex items-center gap-2"
              >
                {tabIcons.frontend}
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger 
                value="api" 
                className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon flex items-center gap-2"
              >
                {tabIcons.api}
                <span className="hidden sm:inline">API</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon flex items-center gap-2"
              >
                {tabIcons.ai}
                <span className="hidden sm:inline">AI</span>
              </TabsTrigger>
              <TabsTrigger 
                value="vibe" 
                className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon flex items-center gap-2"
              >
                {tabIcons.vibe}
                <span className="hidden sm:inline">Vibe</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.frontend.map(renderProjectCard)}
              </div>
            </TabsContent>

            <TabsContent value="api" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.api.map(renderProjectCard)}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.ai.map(renderProjectCard)}
              </div>
            </TabsContent>

            <TabsContent value="vibe" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.vibe.map(renderProjectCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;