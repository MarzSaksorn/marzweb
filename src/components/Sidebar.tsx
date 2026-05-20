import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  children: React.ReactNode
}

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "My Projects" },
  { path: "/contacts", label: "My Contacts" },
]

export function Sidebar({ children }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 border-r bg-card transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="p-6 border-b flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
            <h1 className="text-xl font-bold text-foreground">Marzweb</h1>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-pink-400/20 to-rose-400/20 text-pink-600 dark:text-pink-400 font-medium border-l-2 border-pink-400"
                    : "text-muted-foreground hover:bg-gradient-to-r hover:from-pink-400/10 hover:to-rose-400/10"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t space-y-3">
            <a
              href="https://old-design.marzweb.win/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-gradient-to-r from-pink-400/10 to-rose-400/10 hover:from-pink-400/20 hover:to-rose-400/20 border-pink-400/30"
              >
                <ArrowLeft className="h-5 w-5 text-pink-400" />
                <span className="text-foreground">Go to Old design</span>
              </Button>
            </a>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 bg-gradient-to-r from-pink-400/10 to-rose-400/10 hover:from-pink-400/20 hover:to-rose-400/20 border-pink-400/30"
              onClick={toggleTheme}
            >
              {mounted && theme === "dark" ? (
                <>
                  <Moon className="h-5 w-5 text-pink-400" />
                  <span className="text-foreground">Dark Theme</span>
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5 text-amber-500" />
                  <span className="text-foreground">Light Theme</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {!isOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}

      <main className="md:ml-64 min-h-screen">
        <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-end px-6">
            <nav className="flex items-center gap-2">
              {navItems.slice(1).map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? "secondary" : "ghost"}
                  onClick={() => navigate(item.path)}
                  className="hidden md:inline-flex"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
