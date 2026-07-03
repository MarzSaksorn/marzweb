import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowUpRight, Globe, Server, Palette, ArrowRight } from "lucide-react";

const featured = projects.filter(p => p.featured).slice(0, 2);

const capabilities = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack apps built with React, TypeScript, and Node.js. From dashboards to interactive tools — production-ready, responsive, and performant.",
    color: "#A78BFA",
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    description: "Infrastructure design, CI/CD pipelines, containerization with Docker, and deployment automation on cloud platforms.",
    color: "#2DD4BF",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Clean, accessible interfaces with a focus on typography, spacing, and visual hierarchy. Tailwind CSS, custom design systems, and dark mode.",
    color: "#F472B6",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[8px] border border-[#A78BFA]/20 bg-card animate-up">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#A78BFA]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#2DD4BF]/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-[#F472B6]/15 blur-3xl" />
        <div className="absolute -bottom-16 right-1/4 w-48 h-48 rounded-full bg-[#818CF8]/10 blur-3xl" />
        <div className="relative px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              Ship web experiences that{" "}
              <span className="text-[#A78BFA] dark:text-[#C4B5FD]">actually work</span>
            </h1>
            <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
              Full-stack development, cloud infrastructure, and product design —
              from concept to deployment. I build the tools that power your workflow.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button className="bg-[#A78BFA] hover:bg-[#8B6FE8] text-white press group" asChild>
                <a href="/projects" className="flex items-center gap-2">
                  <span>Explore Projects</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Button>
              <Button variant="outline" className="border-[#A78BFA]/30 hover:bg-[#A78BFA]/10 press" asChild>
                <a href="/contacts">Get in Touch →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="animate-up">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            What I do
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            End-to-end delivery from design to deployment
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card key={cap.title} className="border-border hover:-translate-y-[2px] transition-all duration-200" style={{ backgroundColor: cap.color + '0d' }}>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-1" style={{ backgroundColor: cap.color + '20' }}>
                    <Icon className="h-5 w-5" style={{ color: cap.color }} />
                  </div>
                  <CardTitle className="text-base mt-2">{cap.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {cap.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Work */}
      <section className="animate-up">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Featured work
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Projects that showcase what I build
            </p>
          </div>
          <Button variant="outline" size="sm" className="border-[#A78BFA]/30 hover:bg-[#A78BFA]/10 press gap-1.5" asChild>
            <a href="/projects">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-border hover:-translate-y-[1px] transition-all duration-200" style={{ backgroundColor: project.color + '0d' }}>
              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`} />
              </div>
              <CardHeader>
                <CardTitle className="text-base">{project.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
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
      </section>

      {/* CTA */}
      <section className="animate-up">
        <Card className="border-[#A78BFA]/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/8 via-[#F472B6]/5 to-[#2DD4BF]/5" />
          <CardContent className="relative p-8 md:p-12 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Ready to build something?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Whether it&apos;s a new project, a collaboration, or just a conversation —
              I&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button className="bg-[#A78BFA] hover:bg-[#8B6FE8] text-white press group" asChild>
                <a href="/contacts" className="flex items-center gap-2">
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" className="border-[#A78BFA]/30 hover:bg-[#A78BFA]/10 press" asChild>
                <a href="https://github.com/MarzSaksorn" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1.5" /> View GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
