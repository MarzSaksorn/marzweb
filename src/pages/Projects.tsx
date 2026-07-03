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
import { Github, ExternalLink, Search, FolderOpen, X } from "lucide-react";
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between animate-up">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#A78BFA] dark:text-[#C4B5FD]">
            Projects
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Explore my portfolio of web applications and experiments
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A78BFA]" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-[#A78BFA]/30 focus-visible:ring-[#A78BFA]"
          />
        </div>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 animate-up">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 press ${
            !activeTag
              ? "bg-[#A78BFA] text-white border-[#A78BFA]"
              : "bg-transparent text-muted-foreground border-border hover:border-[#A78BFA]/30 hover:text-foreground"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 press ${
              activeTag === tag
                ? "bg-[#A78BFA] text-white border-[#A78BFA]"
                : "bg-transparent text-muted-foreground border-border hover:border-[#A78BFA]/30 hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
        {(activeTag || searchQuery) && (
          <button
            onClick={() => { setActiveTag(null); setSearchQuery(""); }}
            className="px-3 py-1 rounded-full text-xs font-medium text-muted-foreground border border-border hover:text-[#A78BFA] hover:border-[#A78BFA]/30 transition-colors duration-200 press"
          >
            <X className="h-3 w-3 inline mr-1" />
            Clear
          </button>
        )}
      </div>

      {/* Grid or empty state */}
      {filteredProjects.length === 0 ? (
        <Card className="py-12 border-[#A78BFA]/20 animate-up">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <FolderOpen className="h-12 w-12 text-[#A78BFA] mb-4" />
            <CardTitle className="text-xl mb-2">No projects found</CardTitle>
            <CardDescription>
              Try adjusting your search or filters
            </CardDescription>
            {(searchQuery || activeTag) && (
              <Button
                variant="outline"
                className="mt-4 border-[#A78BFA]/50 hover:bg-[#A78BFA]/10 press"
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
              className={`overflow-hidden group hover:-translate-y-[1px] transition-all duration-200 flex flex-col border-border animate-up ${
                i === 0 ? "" : i === 1 ? "animate-up-d1" : i === 2 ? "animate-up-d2" : "animate-up-d3"
              }`}
              style={{ backgroundColor: project.color + '0d' }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`} />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium text-white shadow-lg"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.tags[0]}
                  </span>
                </div>
              </div>
              <CardHeader className="flex-1 pb-2">
                <CardTitle className="text-sm line-clamp-1 mt-1">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[11px] border"
                      style={{ backgroundColor: project.color + '1a', color: project.color, borderColor: project.color + '33' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-border press"
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
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="flex-1 text-white press hover:brightness-90"
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
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="text-center text-xs text-muted-foreground">
        {filteredProjects.length} of {projects.length} projects
        {(searchQuery || activeTag) && " filtered"}
      </div>
    </div>
  );
}
