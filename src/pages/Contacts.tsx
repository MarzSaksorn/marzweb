import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react"

interface ContactItem {
  icon: React.ElementType
  label: string
  value: string
  href: string
  gradient: string
}

const contacts: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "mark94849@proton.me",
    href: "mailto:mark94849@proton.me",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@marzsaksorn",
    href: "https://instagram.com/marzsaksorn",
    gradient: "from-fuchsia-400 via-pink-400 to-rose-400",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Saksorn Ngandee",
    href: "https://facebook.com/MarzSaksorn",
    gradient: "from-rose-400 to-fuchsia-400",
  },
]

export default function Contacts() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-muted-foreground mt-2">
          Feel free to reach out through any of these platforms. I would love to hear from you!
        </p>
      </div>

      <div className="grid gap-4">
        {contacts.map((contact) => {
          const Icon = contact.icon
          return (
            <Card
              key={contact.label}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden relative"
              onClick={() => window.open(contact.href, "_blank")}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${contact.gradient}`} />
              <CardHeader className="flex flex-row items-center gap-4 pb-2 relative">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${contact.gradient} shadow-lg group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{contact.label}</CardTitle>
                  <CardDescription>{contact.value}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Click to {contact.label === "Email" ? "send an email" : "visit on social media"}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-gradient-to-br from-pink-400/10 via-rose-400/10 to-fuchsia-400/10 border-pink-400/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-fuchsia-400/5" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent" />
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Open for Collaboration
            </span>
          </CardTitle>
          <CardDescription>
            I am always open to new opportunities, collaborations, and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <p className="text-sm text-muted-foreground">
            Response time: Usually within 24-48 hours
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
