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
import { Github, ExternalLink, Search, FolderOpen } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const query = searchQuery.toLowerCase();
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query)),
    );
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-muted-foreground mt-1">
            Explore my portfolio of web applications and experiments
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A78BFA]" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-[#A78BFA]/30 focus-visible:ring-[#A78BFA]"
          />
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <Card className="py-12 border-[#A78BFA]/20">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <FolderOpen className="h-12 w-12 text-[#A78BFA] mb-4" />
            <CardTitle className="text-xl mb-2">No projects found</CardTitle>
            <CardDescription>
              Try adjusting your search query or browse all projects
            </CardDescription>
            {searchQuery && (
              <Button
                variant="outline"
                className="mt-4 border-[#A78BFA]/50 hover:bg-[#A78BFA]/10"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col border-0 shadow-md"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`}
                />
              </div>
              <CardHeader className="flex-1 relative">
                <div
                  className={`absolute top-0 left-4 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.accentColor} text-white shadow-lg`}
                >
                  {project.tags[0]}
                </div>
                <CardTitle className="line-clamp-1 mt-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.slice(1).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD] border border-[#A78BFA]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardFooter className="gap-2 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-[#A78BFA]/30 hover:bg-[#A78BFA]/10 hover:border-[#A78BFA]/50"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.accentColor} hover:opacity-90 shadow-lg`}
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="text-center text-sm text-muted-foreground">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>
    </div>
  );
}
