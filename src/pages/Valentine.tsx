import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search, FolderOpen } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  liveUrl?: string
  tags: string[]
  accentColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Be My Valentine",
    description: "",
    image: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
    liveUrl: "/Valentine/be-my-Valentine/",
    tags: ["Pure HTML, CSS", "JavaScript", "Valentine"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 2,
    title: "Love Me Valentine",
    description: "",
    image: "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif",
    liveUrl: "/Valentine/Love-Me-Valentine/",
    tags: ["Pure HTML, CSS", "JavaScript", "Valentine"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 3,
    title: "Valentine Card",
    description: "",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmhrbmtqb3V2YmZ2aWJ5eWJqbm5oZnN5Y3h4aG5rOGZ6aHhua3VwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KztT2c4u8mYYUiMKdJ/giphy.gif",
    liveUrl: "/Valentine/Valentine-Card/",
    tags: ["Pure HTML, CSS", "JavaScript", "Valentine"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 4,
    title: "Valentine Letter",
    description: "",
    image: "https://raw.githubusercontent.com/MarzSaksorn/Valentine/refs/heads/main/Valentine-Letter/envelope.png",
    liveUrl: "/Valentine/Valentine-Letter/",
    tags: ["Pure HTML, CSS", "JavaScript", "Valentine"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 5,
    title: "Love Me Valentine",
    description: "",
    image: "https://raw.githubusercontent.com/MarzSaksorn/Valentine/refs/heads/main/Love-Me-Valentine-1/preview.png",
    liveUrl: "/Valentine/Love-Me-Valentine-1/",
    tags: ["Pure HTML, CSS", "JavaScript", "Valentine"],
    accentColor: "from-pink-400 to-rose-400",
  },
]

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects
    const query = searchQuery.toLowerCase()
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query))
    )
  }, [searchQuery])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Valentine Web Ideas 
          </h1>
          <p className="text-muted-foreground mt-1">
            Credit to <span className="font-bold tracking-tight bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text text-transparent  underline"><a href="http://instagram.com/code_wars_official">@code_wars_official</a></span> on Instagram 
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-400" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-pink-400/30 focus-visible:ring-pink-400"
          />
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <Card className="py-12 border-pink-400/20">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <FolderOpen className="h-12 w-12 text-pink-400 mb-4" />
            <CardTitle className="text-xl mb-2">No projects found</CardTitle>
            <CardDescription>
              Try adjusting your search query or browse all projects
            </CardDescription>
            {searchQuery && (
              <Button
                variant="outline"
                className="mt-4 border-pink-400/50 hover:bg-pink-400/10"
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
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor}`} />
              </div>
              <CardHeader className="flex-1 relative">
                <div className={`absolute top-0 left-4 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.accentColor} text-white shadow-lg`}>
                  {project.tags[0]}
                </div>
                <CardTitle className="line-clamp-1 mt-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.slice(1).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-400/10 text-pink-600 dark:text-pink-400 border border-pink-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardFooter className="gap-2 pt-0">
                
                {project.liveUrl && (
                  <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.accentColor} hover:opacity-90 shadow-lg`} asChild>
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
  )
}
