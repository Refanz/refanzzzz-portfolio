import { Card, CardContent } from "@/components/ui/card";
import { Code2, Zap, Globe } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern technologies and best practices."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Creating lightning-fast applications that deliver exceptional user experiences."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Technologies",
      description: "Expertise in React, Node.js, TypeScript, and modern web frameworks."
    }
  ];

  return (
    <section id="about" className="py-20 scroll-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-neon">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exploring the intersection of technology and creativity in the digital realm
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image Placeholder */}
            <div className="order-2 md:order-1">
              <div className="jungle-card rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-neon/20 to-neon-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code2 className="h-16 w-16 text-neon" />
                  </div>
                  <p className="text-muted-foreground">Professional Photo</p>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 md:order-2">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate full-stack developer who thrives in the 
                  <span className="text-neon font-semibold"> digital jungle</span> 
                  of modern web development. With expertise spanning front-end and back-end technologies, 
                  I create immersive digital experiences that push the boundaries of what's possible.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My journey began with a fascination for code and has evolved into a mission to craft 
                  applications that not only function flawlessly but also captivate users with their 
                  <span className="text-neon-secondary font-semibold"> innovative design</span> 
                  and seamless interactions.
                </p>

                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or diving deep into the latest developments in web development 
                  and cybersecurity.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="jungle-card group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-neon group-hover:text-neon-secondary transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold ml-3">{skill.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;