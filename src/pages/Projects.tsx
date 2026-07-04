import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, ExternalLink, Search, FolderOpen, X, ArrowUpRight, Layers } from "lucide-react";
import { projects } from "@/data/projects";

const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }
      if (activeTag && !project.tags.includes(activeTag)) return false;
      return true;
    });
  }, [searchQuery, activeTag]);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end justify-between animate-up">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD] border border-[#A78BFA]/20 mb-4">
            <Layers className="h-3.5 w-3.5" />
            {projects.length} projects
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Projects
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed max-w-xl">
            A collection of web applications, tools, experiments, and creative
            projects I&apos;ve built along the way.
          </p>
        </div>
        <div className="relative w-full sm:w-56 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A78BFA]" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-[#A78BFA]/30 focus-visible:ring-[#A78BFA] h-10 text-sm"
          />
        </div>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap items-center gap-2 animate-up">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 press ${
            !activeTag
              ? "bg-[#A78BFA] text-white border-[#A78BFA] shadow-sm"
              : "bg-transparent text-muted-foreground border-border hover:border-[#A78BFA]/40 hover:text-foreground"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 press ${
              activeTag === tag
                ? "bg-[#A78BFA] text-white border-[#A78BFA] shadow-sm"
                : "bg-transparent text-muted-foreground border-border hover:border-[#A78BFA]/40 hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
        {(activeTag || searchQuery) && (
          <button
            onClick={() => { setActiveTag(null); setSearchQuery(""); }}
            className="px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground border border-border hover:text-[#A78BFA] hover:border-[#A78BFA]/40 transition-all duration-200 press"
          >
            <X className="h-3 w-3 inline mr-1" />
            Clear
          </button>
        )}
      </div>

      {/* Grid or empty state */}
      {filteredProjects.length === 0 ? (
        <Card className="py-16 border-[#A78BFA]/20 animate-up">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center mb-5">
              <FolderOpen className="h-7 w-7 text-[#A78BFA]" />
            </div>
            <CardTitle className="text-lg mb-2">No projects found</CardTitle>
            <CardDescription className="max-w-xs">
              No projects match your current search or filters. Try different keywords or clear filters.
            </CardDescription>
            {(searchQuery || activeTag) && (
              <Button
                variant="outline"
                className="mt-5 border-[#A78BFA]/50 hover:bg-[#A78BFA]/10 press"
                onClick={() => { setActiveTag(null); setSearchQuery(""); }}
              >
                Clear All Filters
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, i) => (
            <Card
              key={project.id}
              className={`overflow-hidden group hover:-translate-y-[2px] transition-all duration-200 flex flex-col border-border animate-up ${
                i === 0 ? "" : i === 1 ? "animate-up-d1" : i === 2 ? "animate-up-d2" : "animate-up-d3"
              }`}
              style={{ backgroundColor: project.color + '0d' }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.accentColor}`} />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium text-white shadow-sm"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.tags[0]}
                  </span>
                </div>
              </div>
              <CardHeader className="flex-1 pb-2 px-4 pt-3.5">
                <CardTitle className="text-sm leading-snug line-clamp-1">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed line-clamp-2 mt-1.5">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-2 px-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-[3px] rounded-full text-[10px] border font-medium"
                      style={{ backgroundColor: project.color + '1a', color: project.color, borderColor: project.color + '33' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2 pt-2 px-4 pb-3.5">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border press text-xs h-8"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3.5 w-3.5 mr-1.5" />
                    Code
                  </a>
                </Button>
                {project.liveUrl ? (
                  <Button
                    size="sm"
                    className="flex-1 text-white press hover:brightness-90 text-xs h-8"
                    style={{ backgroundColor: project.color }}
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      Demo
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-border text-muted-foreground text-xs h-8"
                    disabled
                  >
                    Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="text-center animate-up">
        <Card className="border-[#A78BFA]/20 inline-block">
          <CardContent className="px-6 py-4 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {filteredProjects.length} of {projects.length} projects
              {(searchQuery || activeTag) && " filtered"}
            </span>
            <span className="text-muted-foreground/30">·</span>
            <Button variant="ghost" size="sm" className="text-[#A78BFA] hover:text-[#8B6FE8] hover:bg-[#A78BFA]/10 press gap-1 text-xs h-8 px-2" asChild>
              <a href="/contacts">
                Have a project? <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
