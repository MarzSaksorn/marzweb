import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles, Code2, User, ArrowUpRight, Terminal } from "lucide-react";

const featured = projects.filter(p => p.featured).slice(0, 2);
const currentProject = projects.find(p => p.title.includes("PC Wiki"));

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero — colorful spotlight gradient */}
      <section className="relative overflow-hidden rounded-[8px] border border-[#A78BFA]/20 bg-card animate-up">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#A78BFA]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#2DD4BF]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-[#F472B6]/8 blur-3xl" />
        <div className="relative px-8 py-12 md:px-12 md:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Marzweb
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            A personal showcase of my journey in software development —
            from web apps to games and creative experiments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-[#A78BFA] hover:bg-[#8B6FE8] text-white press group" asChild>
              <a href="/projects" className="flex items-center gap-2">
                <span>View My Projects</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </Button>
            <Button variant="outline" className="border-[#A78BFA]/30 hover:bg-[#A78BFA]/10 press" asChild>
              <a href="/contacts">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Bento — 4-col grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Featured — spans 2 */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#A78BFA]" />
            Featured Projects
          </h2>
          {featured.map(project => (
            <Card key={project.id} className="group overflow-hidden border-border hover:-translate-y-[1px] transition-all duration-200 animate-up">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`} />
              </div>
              <CardHeader>
                <CardTitle className="text-base">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="gap-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" className="border-border press" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1.5" /> Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" className="text-white press hover:brightness-90" style={{ backgroundColor: project.color }} asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1.5" /> Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Right column — spans 2 */}
        <div className="md:col-span-2 space-y-6">
          {/* Currently Working */}
          {currentProject && (
            <Card className="border-[#A78BFA]/20 overflow-hidden animate-up">
              <div className="relative h-36 overflow-hidden">
                <img src={currentProject.image} alt={currentProject.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-white shadow-lg" style={{ backgroundColor: currentProject.color }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    In Development
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-sm font-semibold">{currentProject.title}</CardTitle>
                <CardDescription className="text-xs">{currentProject.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm" className="text-white w-full press hover:brightness-90" style={{ backgroundColor: currentProject.color }} asChild>
                  <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1.5" /> View Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Bottom row — 2-col sub-grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* About */}
            <Card className="animate-up">
              <CardHeader className="p-4">
                <CardTitle className="text-xs font-semibold flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-[#A78BFA]" /> About
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed mt-2">
                  I build things for the web — games, tools, experiments, and utilities.
                  Cloud / DevOps engineer path from ground zero.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Tech */}
            <Card className="animate-up">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xs font-semibold flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-[#A78BFA]" /> Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Tailwind", "Node.js", "Python", "Git", "Docker", "Supabase"].map(tech => (
                    <span key={tech} className="px-2 py-0.5 rounded-full text-[11px] bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD] border border-[#A78BFA]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Connect strip */}
      <Card className="border-[#A78BFA]/20 bg-gradient-to-br from-[#A78BFA]/5 via-[#F472B6]/5 to-[#2DD4BF]/5 overflow-hidden animate-up">
        <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-foreground">Let&apos;s connect</p>
            <p className="text-xs text-muted-foreground mt-0.5">GitHub · Email · Social</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="border-[#A78BFA]/30 hover:bg-[#A78BFA]/10 press" asChild>
              <a href="https://github.com/MarzSaksorn" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1.5" /> GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" className="border-[#A78BFA]/30 hover:bg-[#A78BFA]/10 press" asChild>
              <a href="mailto:mark94849@proton.me">
                <Terminal className="h-4 w-4 mr-1.5" /> Email
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
