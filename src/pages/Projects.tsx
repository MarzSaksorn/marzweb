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
  githubUrl?: string
  liveUrl?: string
  tags: string[]
  accentColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gamehub",
    description: "A hub that gathers games from around Github and unites them all",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Gamehub.jpg",
    githubUrl: "https://github.com/MarzSaksorn/Gamehub",
    liveUrl: "/Gamehub/",
    tags: ["Pure HTML, CSS", "Node.js"],
    accentColor: "from-pink-400 to-rose-400",
  },
  {
    id: 2,
    title: "Marzweb - Vite Revamped",
    description: "The homepage that archive all My Projects of My Cloud / DevOps Engineer Path from Ground Zero",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Marzweb.png",
    githubUrl: "https://github.com/MarzSaksorn/marzweb",
    tags: ["React", "Vite", "Tailwind", "TypeScript", "BigPickle AI Opencode"],
    accentColor: "from-fuchsia-400 to-pink-400",
  },
  {
    id: 3,
    title: "Online game dns blocklist",
    description: "Windows hosts file that contains bunch of online game domains",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Game-Blocklist.png",
    githubUrl: "https://github.com/MarzSaksorn/Online-game-dns-blocklist",
    
    tags: ["Windows Hosts file"],
    accentColor: "from-rose-400 to-fuchsia-400",
  },
  {
    id: 4,
    title: "Checkers Multiplayer",
    description: "Checkers Multiplayer with lobby system built entirely by Canva AI",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/checkers.png",
    githubUrl: "https://github.com/MarzSaksorn/checkers_multiplayer",
    liveUrl: "/checkers_multiplayer/",
    tags: ["Node.js", "HTML", "Tailwind", "JavaScript", "Canva AI"],
    accentColor: "from-pink-300 to-rose-300",
  },
  {
    id: 5,
    title: "PC Wiki by Marzweb (Paused Dev.)",
    description: "PC Wiki for everyone on How to use a computer from the begining to being able to troubleshoot stuffs",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/PC-Wiki.png",
    githubUrl: "https://github.com/MarzSaksorn/PC-Wiki",
    liveUrl: "/PC-Wiki/",
    tags: ["React", "Vite", "Tailwind", "BigPickle AI Opencode"],
    accentColor: "from-rose-300 to-pink-300",
  },
  {
    id: 6,
    title: "Valentine",
    description: "Credit to @code_wars_official on Instagram I got Friendzoned by my crush but i started this so i gotta finish it",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/Valentine/img1.gif",
    githubUrl: "https://github.com/MarzSaksorn/Valentine",
    liveUrl: "/Valentine/",
    tags: ["Tailwind", "Instagram", "@code_wars_official"],
    accentColor: "from-fuchsia-300 to-rose-300",
  },
  {
    id: 7,
    title: "borntoDev-Project",
    description: "Lite-Fundamental-Web-Dev-With-HTML5-CSS3",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Lite-Fundamental-Web-Dev-With-HTML5-CSS3.png",
    githubUrl: "https://github.com/MarzSaksorn/borntoDev-Project_Lite-Fundamental-Web-Dev-With-HTML5-CSS3",
    
    tags: ["borntoDev", "Pure HTML, CSS"],
    accentColor: "from-fuchsia-300 to-rose-300",
  },
  {
    id: 8,
    title: "borntoDev-Project",
    description: "Introduction-to-JavaScript",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Thailand_tax_cal.png",
    githubUrl: "https://github.com/MarzSaksorn/borntoDev-Project_Introduction-to-JavaScript",
    
    tags: ["borntoDev", "Tailwind", "JavaScript"],
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
