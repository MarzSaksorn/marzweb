import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import { contactItems } from "@/data/contact"

export default function Contacts() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div className="animate-up">
        <h1 className="text-3xl font-bold tracking-tight text-[#A78BFA] dark:text-[#C4B5FD]">
          Get in Touch
        </h1>
        <p className="text-muted-foreground mt-2">
          Feel free to reach out through any of these platforms. I would love to hear from you!
        </p>
      </div>

      <div className="grid gap-4">
        {contactItems.map((contact) => {
          const Icon = contact.icon
          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden relative press" style={{ backgroundColor: (contact.gradient.includes('2DD4BF') ? '#2DD4BF0d' : contact.gradient.includes('F472B6') ? '#F472B60d' : '#818CF80d') }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className={`absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b ${contact.gradient}`} />
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
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          )
        })}
      </div>

      <Card className="border-[#A78BFA]/20 overflow-hidden relative animate-up" style={{ backgroundColor: '#818CF80d' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/5 to-[#C4B5FD]/5" />
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-[#A78BFA]" />
            <span className="text-foreground font-semibold">
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