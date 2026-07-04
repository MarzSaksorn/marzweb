import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Instagram, Facebook, ArrowUpRight, Clock, Zap } from "lucide-react"
import { contactItems } from "@/data/contact"

const colorMap: Record<string, string> = {
  Email: "#2DD4BF",
  Instagram: "#F472B6",
  Facebook: "#818CF8",
};

const channelIcons: Record<string, typeof Mail> = {
  Email: Mail,
  Instagram: Instagram,
  Facebook: Facebook,
};

export default function Contacts() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <div className="max-w-2xl animate-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#A78BFA]/10 text-[#A78BFA] dark:text-[#C4B5FD] border border-[#A78BFA]/20 mb-4">
          <Zap className="h-3.5 w-3.5" />
          Available for collaborations
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Let&apos;s work together
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
          Have a project, idea, or just want to connect? I&apos;m always open to
          conversations — pick the channel that works best for you.
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {contactItems.map((contact, i) => {
          const Icon = channelIcons[contact.label]
          const accent = colorMap[contact.label] || "#A78BFA"
          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block group animate-up ${i === 1 ? "animate-up-d1" : i === 2 ? "animate-up-d2" : ""}`}
            >
              <Card className="relative h-full border-border hover:-translate-y-[2px] transition-all duration-200 overflow-hidden press"
                style={{ backgroundColor: accent + '0d' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${accent}08, ${accent}15)` }}
                />
                <CardHeader className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: accent + '20' }}
                  >
                    <Icon className="h-6 w-6" style={{ color: accent }} />
                  </div>
                  <CardTitle className="text-base mt-2">{contact.label}</CardTitle>
                  <CardDescription className="text-sm font-medium text-foreground/80">
                    {contact.value}
                  </CardDescription>
                  <CardDescription className="text-xs mt-1">
                    {contact.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="relative pt-0">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-200 group-hover:gap-1.5"
                    style={{ color: accent }}
                  >
                    {contact.label === "Email" ? "Send a message" : "Visit profile"}
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </CardFooter>
              </Card>
            </a>
          )
        })}
      </div>

      {/* Bottom CTA — direct email + availability */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-up">
        <Card className="border-[#A78BFA]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/8 via-[#A78BFA]/5 to-transparent" />
          <CardHeader className="relative">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#A78BFA]" />
              Quick email
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              Prefer writing directly? Send me an email and I&apos;ll get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <Button className="bg-[#A78BFA] hover:bg-[#8B6FE8] text-white press text-xs w-full sm:w-auto" asChild>
              <a href="mailto:mark94849@proton.me">
                mark94849@proton.me <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-[#A78BFA]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/8 via-[#2DD4BF]/5 to-transparent" />
          <CardHeader className="relative">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#2DD4BF]" />
              Availability
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              I typically respond within 24–48 hours. For urgent matters, email is the fastest channel.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
              <span className="text-muted-foreground">Currently open to new projects</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
