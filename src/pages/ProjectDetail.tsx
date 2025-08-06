import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in real app this would come from API/database
  const projectData: { [key: string]: any } = {
    "cyberpunk-dashboard": {
      title: "Cyberpunk Dashboard",
      description: "A futuristic data visualization dashboard featuring real-time analytics, interactive charts, and a cyberpunk-themed interface. Built with modern web technologies to deliver smooth performance and stunning visual effects.",
      longDescription: "This project represents the fusion of data science and futuristic design. The dashboard provides real-time monitoring capabilities for complex data streams, featuring interactive visualizations that respond to user input with smooth animations and neon-themed aesthetics. The application is built with scalability in mind, supporting thousands of concurrent users while maintaining 60fps performance.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "D3.js", "WebSockets", "Node.js", "Redis"],
      features: [
        "Real-time data streaming with WebSockets",
        "Interactive 3D charts and visualizations",
        "Responsive design with cyberpunk aesthetics",
        "Performance optimized for 60fps animations",
        "Dark mode with neon color scheme",
        "Customizable dashboard widgets"
      ],
      challenges: [
        "Implementing smooth real-time updates without performance degradation",
        "Creating complex D3.js visualizations with React integration",
        "Optimizing WebSocket connections for large datasets",
        "Designing an intuitive UX for complex data visualization"
      ],
      liveUrl: "https://cyberpunk-dashboard.demo.com",
      githubUrl: "https://github.com/username/cyberpunk-dashboard",
      status: "Completed",
      timeline: "3 months",
      teamSize: "1 developer",
      category: "Frontend"
    },
    "jungle-api": {
      title: "Jungle Chat API",
      description: "A robust RESTful API powering a real-time messaging platform with end-to-end encryption, scalable architecture, and comprehensive security features.",
      longDescription: "The Jungle Chat API is designed to handle high-volume messaging with enterprise-level security. It features end-to-end encryption, real-time message delivery, file sharing capabilities, and comprehensive user management. The API is built with microservices architecture to ensure scalability and maintainability.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "bcrypt"],
      features: [
        "End-to-end message encryption",
        "Real-time messaging with Socket.io",
        "RESTful API with comprehensive documentation",
        "JWT-based authentication system",
        "File upload and sharing capabilities",
        "Rate limiting and security middleware"
      ],
      challenges: [
        "Implementing secure end-to-end encryption",
        "Optimizing database queries for message history",
        "Handling concurrent WebSocket connections",
        "Designing scalable microservices architecture"
      ],
      liveUrl: "https://api.jungle-chat.com",
      githubUrl: "https://github.com/username/jungle-chat-api",
      status: "In Production",
      timeline: "4 months",
      teamSize: "2 developers",
      category: "API"
    }
  };

  const project = projectData[id || ""] || projectData["cyberpunk-dashboard"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
            <span className="font-display text-xl font-bold text-neon">
              {project.title}
            </span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {project.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Live Demo
              </Button>
              <Button 
                variant="neon" 
                size="lg"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View Source Code
              </Button>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <Card className="jungle-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-neon/20 to-neon-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-neon/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-12 w-12 text-neon" />
                  </div>
                  <p className="text-muted-foreground">Project Screenshot</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Project Info */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="jungle-card">
                <CardHeader>
                  <CardTitle className="text-neon">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="jungle-card">
                <CardHeader>
                  <CardTitle className="text-neon">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-neon mr-3 mt-1">▸</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card className="jungle-card">
                <CardHeader>
                  <CardTitle className="text-neon-secondary">Technical Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-neon-secondary mr-3 mt-1">◆</span>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Meta */}
              <Card className="jungle-card">
                <CardHeader>
                  <CardTitle className="text-neon">Project Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-neon mr-2" />
                    <span className="text-sm text-muted-foreground">{project.timeline}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-neon mr-2" />
                    <span className="text-sm text-muted-foreground">{project.teamSize}</span>
                  </div>
                  <div>
                    <Badge variant="outline" className="text-neon border-neon">
                      {project.status}
                    </Badge>
                  </div>
                  <div>
                    <Badge variant="secondary" className="bg-secondary/30">
                      {project.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card className="jungle-card">
                <CardHeader>
                  <CardTitle className="text-neon-secondary">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="bg-secondary/30 hover:bg-neon/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/")}
              className="group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;