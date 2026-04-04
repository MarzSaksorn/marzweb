import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, ExternalLink, Search, FolderOpen } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl?: string
  tags: string[]
  accentColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics and inventory tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    tags: ["React", "Node.js", "PostgreSQL"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with drag-and-drop boards, team assignments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
    githubUrl: "https://github.com",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    accentColor: "from-fuchsia-400 to-pink-400",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecasts, location-based data, and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    tags: ["React", "API", "Charts"],
    accentColor: "from-rose-400 to-fuchsia-400",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Track and analyze social media engagement with detailed reports and scheduling capabilities.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=300&fit=crop",
    githubUrl: "https://github.com",
    tags: ["Next.js", "MongoDB", "D3.js"],
    accentColor: "from-pink-300 to-rose-300",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Personal fitness companion with workout logging, goal setting, and progress visualization.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    tags: ["React Native", "Redux", "Health API"],
    accentColor: "from-rose-300 to-pink-300",
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "Community-driven recipe sharing with ratings, comments, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=300&fit=crop",
    githubUrl: "https://github.com",
    tags: ["Angular", "Node.js", "Elasticsearch"],
    accentColor: "from-fuchsia-300 to-rose-300",
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
            My Projects
          </h1>
          <p className="text-muted-foreground mt-1">
            Explore my portfolio of web applications and experiments
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
                <Button variant="outline" size="sm" className="flex-1 border-pink-400/30 hover:bg-pink-400/10 hover:border-pink-400/50" asChild>
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
