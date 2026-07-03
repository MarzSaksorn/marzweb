import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles, Code2, User } from "lucide-react";

const featured = projects.filter(p => p.featured).slice(0, 3);
const currentProject = projects.find(p => p.title.includes("PC Wiki"));

const techStack = ["React", "Vite", "TypeScript", "Tailwind", "Node.js", "Python", "HTML/CSS", "Git", "Docker", "Supabase"];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card className="border-[#A78BFA]/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/5 via-[#C4B5FD]/5 to-transparent" />
        <CardHeader className="relative">
          <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-gradient">Marzweb</span>
          </CardTitle>
          <CardDescription className="text-base max-w-2xl">
            A personal showcase of my journey in software development —
            from web apps to games and creative experiments.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <Button className="bg-[#A78BFA] hover:bg-[#8B6FE8] text-white" asChild>
            <a href="/projects">
              <Code2 className="h-4 w-4 mr-2" />
              View My Projects
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Bento grid — 2-col layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured projects — spans 2 cols */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#A78BFA]" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((project) => (
              <Card key={project.id} className="group hover:-translate-y-[1px] transition-all duration-200 border-border">
                <div className="relative h-32 overflow-hidden rounded-t-[8px]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD]" />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="text-xs border-border" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" className="text-xs bg-[#A78BFA] hover:bg-[#8B6FE8] text-white" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Right column: stacked cards */}
        <div className="space-y-4">
          {/* Currently Working On */}
          {currentProject && (
            <Card className="border-[#A78BFA]/20">
              <div className="relative h-28 overflow-hidden rounded-t-[8px]">
                <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#A78BFA] text-white">
                    <Sparkles className="h-2.5 w-2.5 mr-1" /> In Development
                  </span>
                </div>
              </div>
              <CardHeader className="p-3">
                <CardTitle className="text-xs font-semibold line-clamp-1">{currentProject.title}</CardTitle>
                <CardDescription className="text-[10px] line-clamp-2">{currentProject.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-3 pt-0">
                <Button size="sm" className="text-[10px] bg-[#A78BFA] hover:bg-[#8B6FE8] text-white w-full" asChild>
                  <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3 w-3 mr-1" /> View Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* About Me */}
          <Card>
            <CardHeader className="p-3">
              <CardTitle className="text-xs font-semibold flex items-center gap-1.5">
                <User className="h-3 w-3 text-[#A78BFA]" /> About
              </CardTitle>
              <CardDescription className="text-[11px] leading-relaxed">
                I build things for the web. Projects span games, developer tools, experiments, and utilities.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Tech Stack */}
          <Card>
            <CardHeader className="p-3">
              <CardTitle className="text-xs font-semibold flex items-center gap-1.5">
                <Code2 className="h-3 w-3 text-[#A78BFA]" /> Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-full text-[10px] bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD]">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
