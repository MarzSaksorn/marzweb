import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "next-themes"
import { Home, Folder, Mail, Sun, Moon, PanelLeftClose, PanelLeft, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/projects", label: "Projects", icon: Folder },
  { path: "/contacts", label: "Contacts", icon: Mail },
]

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop: full-height collapsible sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen hidden md:flex flex-col border-r border-border/50 bg-background/80 backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          collapsed ? "w-16" : "w-56"
        )}
      >
        {/* Header */}
        <div className={cn(
          "flex items-center border-b border-border/50 h-14 shrink-0",
          collapsed ? "justify-center px-0" : "justify-between px-4"
        )}>
          {!collapsed && (
            <h1 className="text-base font-bold text-foreground tracking-tight">Marzweb</h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg text-muted-foreground hover:bg-[#A78BFA]/10 hover:text-[#A78BFA] transition-colors"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <PanelLeft className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = location.pathname === item.path
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  "flex items-center gap-3 rounded-xl transition-all duration-200 w-full",
                  collapsed ? "justify-center h-11 w-11 mx-auto" : "px-3 py-2.5",
                  active
                    ? "bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD] font-medium"
                    : "text-muted-foreground hover:bg-[#A78BFA]/5 hover:text-foreground"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className={cn(
                  "text-sm whitespace-nowrap overflow-hidden transition-all duration-300",
                  collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                )}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border/50 p-2 space-y-1">
          <button
            onClick={toggleTheme}
            className={cn(
              "flex items-center gap-3 rounded-xl transition-all duration-200 w-full",
              collapsed ? "justify-center h-11 w-11 mx-auto" : "px-3 py-2.5",
              "text-muted-foreground hover:bg-[#A78BFA]/5 hover:text-foreground"
            )}
            title={collapsed ? (mounted && theme === "dark" ? "Dark" : "Light") : undefined}
          >
            {mounted && theme === "dark" ? (
              <Moon className="h-4 w-4 shrink-0" />
            ) : (
              <Sun className="h-4 w-4 shrink-0" />
            )}
            <span className={cn(
              "text-sm whitespace-nowrap overflow-hidden transition-all duration-300",
              collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
            )}>
              {mounted && theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>
          <a
            href="/old_marzweb_archive/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-3 rounded-xl transition-all duration-200 w-full",
              collapsed ? "justify-center h-11 w-11 mx-auto" : "px-3 py-2.5",
              "text-muted-foreground hover:bg-[#A78BFA]/5 hover:text-[#A78BFA]"
            )}
            title={collapsed ? "Old design" : undefined}
          >
            <ArrowUpRight className="h-4 w-4 shrink-0" />
            <span className={cn(
              "text-sm whitespace-nowrap overflow-hidden transition-all duration-300",
              collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
            )}>
              Old design
            </span>
          </a>
        </div>
      </aside>

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

      {/* Main content */}
      <main className={cn(
        "flex-1 min-h-screen pb-20 md:pb-0 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
        collapsed ? "md:ml-16" : "md:ml-56"
      )}>
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
