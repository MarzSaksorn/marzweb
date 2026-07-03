import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "next-themes"
import { Home, Folder, Mail, Sun, Moon, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/projects", label: "Projects", icon: Folder },
  { path: "/contacts", label: "Contacts", icon: Mail },
]

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop: floating nav pill */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-1 p-2 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.path
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200",
                active
                  ? "bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD] font-medium"
                  : "text-muted-foreground hover:bg-[#A78BFA]/5 hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </button>
          )
        })}
        <div className="border-t border-border/50 my-1" />
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 text-muted-foreground hover:bg-[#A78BFA]/5 hover:text-foreground"
        >
          {mounted && theme === "dark" ? (
            <Moon className="h-4 w-4 shrink-0" />
          ) : (
            <Sun className="h-4 w-4 shrink-0" />
          )}
          <span>{mounted && theme === "dark" ? "Dark" : "Light"}</span>
        </button>
      </nav>

      {/* Mobile: bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.path
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex-1 flex flex-col items-center gap-0.5 py-2.5 text-[10px] transition-colors duration-200",
                active
                  ? "text-[#A78BFA] dark:text-[#C4B5FD]"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          )
        })}
        <button
          onClick={toggleTheme}
          className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-[10px] text-muted-foreground"
        >
          {mounted && theme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
          <span>{mounted && theme === "dark" ? "Dark" : "Light"}</span>
        </button>
      </nav>

      {/* Main — full width, no sidebar offset */}
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="p-6">{children}</div>
      </main>

      {/* Old design link — bottom-left corner */}
      <a
        href="/old_marzweb_archive/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 hidden md:flex items-center gap-1 text-[11px] text-muted-foreground hover:text-[#A78BFA] transition-colors z-50"
      >
        Old design <ArrowUpRight className="h-3 w-3" />
      </a>
    </div>
  )
}
