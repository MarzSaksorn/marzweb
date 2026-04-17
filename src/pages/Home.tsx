import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const currentProject = {
    title: "PC Wiki by Marzweb (Paused Dev.)",
    description:
        "PC Wiki for everyone on How to use a computer from the begining to being able to troubleshoot stuffs",
    status: "In Development",
    githubUrl: "https://github.com/MarzSaksorn/PC-Wiki",
    liveUrl: "/PC-Wiki/",
};

const currentProjectImage =
    "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/PC-Wiki.png";

export default function Home() {
    return (
        <div className="space-y-8 max-w-4xl">
            <Card className="border-l-4 border-l-pink-400 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 via-rose-400/5 to-fuchsia-400/5" />
                <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 bg-gradient-primary bg-clip-text text-transparent" />
                        <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                            Welcome to Marzweb
                        </span>
                    </CardTitle>
                    <CardDescription className="text-base">
                        A personal showcase of my journey in software
                        development, featuring my latest projects, skills, and
                        ways to connect. Built with performance and
                        accessibility in mind.
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed">
                        This website serves as a central hub for exploring my
                        work, from web applications to creative experiments.
                        Each project reflects my commitment to clean code,
                        intuitive design, and meaningful functionality. Feel
                        free to browse through my projects or reach out to
                        collaborate.
                    </p>
                </CardContent>
            </Card>

            <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-pink-400 to-rose-400"></span>
                    </span>
                    Currently Working On
                </h2>
                <Card className="overflow-hidden group hover:shadow-xl hover:shadow-pink-400/10 transition-all duration-300 border-pink-400/20">
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={currentProjectImage}
                            alt={currentProject.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-pink-900/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg shadow-pink-400/30">
                                <Sparkles className="h-3 w-3 mr-1" />
                                {currentProject.status}
                            </span>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                            {currentProject.title}
                        </CardTitle>
                        <CardDescription>
                            {currentProject.description}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="gap-2">
                        <Button
                            variant="outline"
                            className="border-pink-400/50 hover:bg-pink-400/10"
                            asChild
                        >
                            <a
                                href={currentProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-4 w-4 mr-2" />
                                View Source
                            </a>
                        </Button>
                        <Button
                            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500"
                            asChild
                        >
                            <a href={currentProject.liveUrl}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
