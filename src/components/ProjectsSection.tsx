import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";
import { ExternalLink, Github, Code2, Eye, Server, Brain, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProjectsSection = () => {
  const navigate = useNavigate();

  // Pagination state for each tab
  const [currentPages, setCurrentPages] = useState({
    frontend: 1,
    api: 1,
    ai: 1,
    vibe: 1
  });

  const projectsPerPage = 6; // 2 projects per page for better demonstration

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

  // Pagination helpers
  const getPaginatedProjects = (category: keyof typeof projects) => {
    const categoryProjects = projects[category];
    const currentPage = currentPages[category];
    const totalPages = Math.ceil(categoryProjects.length / projectsPerPage);

    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const paginatedProjects = categoryProjects.slice(startIndex, endIndex);

    return {
      projects: paginatedProjects,
      totalPages,
      currentPage,
      totalProjects: categoryProjects.length,
      startIndex: startIndex + 1,
      endIndex: Math.min(endIndex, categoryProjects.length)
    };
  };

  const goToPage = (category: keyof typeof projects, page: number) => {
    setCurrentPages(prev => ({
      ...prev,
      [category]: page
    }));

    // Smooth scroll to projects section
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const goToPrevious = (category: keyof typeof projects) => {
    const currentPage = currentPages[category];
    if (currentPage > 1) {
      goToPage(category, currentPage - 1);
    }
  };

  const goToNext = (category: keyof typeof projects) => {
    const currentPage = currentPages[category];
    const totalPages = Math.ceil(projects[category].length / projectsPerPage);
    if (currentPage < totalPages) {
      goToPage(category, currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = (category: keyof typeof projects) => {
    const totalPages = Math.ceil(projects[category].length / projectsPerPage);
    const currentPage = currentPages[category];
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
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

  // New function to render tab content with pagination
  const renderTabContent = (category: keyof typeof projects) => {
    const paginationData = getPaginatedProjects(category);

    return (
      <TabsContent value={category} className="space-y-6">
        {/* Projects count info */}
        <div className="text-center text-sm text-muted-foreground mb-4">
          Showing {paginationData.startIndex}-{paginationData.endIndex} of {paginationData.totalProjects} projects
        </div>

        {/* Projects grid with consistent height */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {paginationData.projects.map(renderProjectCard)}
        </div>

        {/* Pagination controls */}
        {paginationData.totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => goToPrevious(category)}
                    className={paginationData.currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
                  />
                </PaginationItem>

                {getPageNumbers(category).map((page, index) => (
                  <PaginationItem key={index}>
                    {page === '...' ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        onClick={() => goToPage(category, page as number)}
                        isActive={paginationData.currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => goToNext(category)}
                    className={paginationData.currentPage === paginationData.totalPages ? 'opacity-50 cursor-not-allowed' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </TabsContent>
    );
  };

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

            {renderTabContent('frontend')}
            {renderTabContent('api')}
            {renderTabContent('ai')}
            {renderTabContent('vibe')}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;