import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";
import { Award, Calendar, ExternalLink, Verified } from "lucide-react";
import { useState } from "react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      status: "Active",
      description: "Demonstrates expertise in designing distributed systems on AWS platform",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      verificationUrl: "#",
      featured: true
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-DEV-2023-002",
      status: "Active",
      description: "Validates skills in developing applications using Google Cloud technologies",
      skills: ["GCP", "Kubernetes", "Cloud Functions", "BigQuery"],
      verificationUrl: "#",
      featured: true
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-REACT-2022-003",
      status: "Active",
      description: "Advanced React development including hooks, context, and performance optimization",
      skills: ["React", "Redux", "Testing", "Performance"],
      verificationUrl: "#",
      featured: false
    },
    {
      title: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      date: "2022",
      credentialId: "NODEJS-DEV-2022-004",
      status: "Active",
      description: "Expertise in building scalable server-side applications with Node.js",
      skills: ["Node.js", "Express", "MongoDB", "API Design"],
      verificationUrl: "#",
      featured: false
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credentialId: "CKA-2021-005",
      status: "Active",
      description: "Demonstrates skills in Kubernetes cluster administration and troubleshooting",
      skills: ["Kubernetes", "Docker", "DevOps", "Container Orchestration"],
      verificationUrl: "#",
      featured: false
    },
    {
      title: "MongoDB Developer Associate",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MDB-DEV-2021-006",
      status: "Active",
      description: "Proficiency in MongoDB database design, queries, and application development",
      skills: ["MongoDB", "Database Design", "Aggregation", "Indexing"],
      verificationUrl: "#",
      featured: false
    }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 3;
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);

  // Calculate certificates for current page
  const startIndex = (currentPage - 1) * certificatesPerPage;
  const endIndex = startIndex + certificatesPerPage;
  const currentCertificates = certificates.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of certificates section
    document.getElementById('certificates')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
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

  return (
    <section id="certificates" className="py-20 scroll-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-neon">Certifications</span> & Credentials
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Validated expertise and continuous learning in cutting-edge technologies
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, certificates.length)} of {certificates.length} certificates
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px]">
            {currentCertificates.map((cert, index) => (
              <Card
                key={index} 
                className={`jungle-card group h-full ${cert.featured ? 'ring-2 ring-neon/30' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Award className="h-6 w-6 text-neon group-hover:text-neon-secondary transition-colors flex-shrink-0" />
                    {cert.featured && (
                      <Badge variant="outline" className="text-neon border-neon text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-neon transition-colors line-clamp-2">
                    {cert.title}
                  </CardTitle>
                  
                  <div className="space-y-1">
                    <p className="text-neon-secondary font-medium">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                      <Verified className="h-3 w-3 text-neon ml-auto" />
                      <span className="text-neon text-xs">{cert.status}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div>
                      <h4 className="text-xs font-semibold text-neon mb-2">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary" 
                            className="text-xs bg-secondary/30 hover:bg-neon/20 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">ID:</span> {cert.credentialId}
                    </div>
                  </div>

                  {/* Verification Button */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button 
                      variant="neon" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(cert.verificationUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Verify Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={goToPrevious}
                      className={currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
                    />
                  </PaginationItem>

                  {getPageNumbers().map((page, index) => (
                    <PaginationItem key={index}>
                      {page === '...' ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          onClick={() => goToPage(page as number)}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={goToNext}
                      className={currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;