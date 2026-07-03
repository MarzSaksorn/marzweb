export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  accentColor: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Gamehub",
    description: "A hub that gathers games from around Github and unites them all",
    featured: true,
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Gamehub.jpg",
    githubUrl: "https://github.com/MarzSaksorn/Gamehub",
    liveUrl: "/Gamehub/",
    tags: ["Pure HTML, CSS", "Node.js"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 2,
    title: "Marzweb - Vite Revamped",
    description: "The homepage that archive all My Projects of My Cloud / DevOps Engineer Path from Ground Zero",
    featured: true,
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Marzweb.png",
    githubUrl: "https://github.com/MarzSaksorn/marzweb",
    liveUrl: "/",
    tags: ["React", "Vite", "Tailwind", "TypeScript", "BigPickle AI Opencode"],
    accentColor: "from-[#C4B5FD] to-[#A78BFA]",
  },
  {
    id: 3,
    title: "Online game dns blocklist",
    description: "Windows hosts file that contains bunch of online game domains",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Game-Blocklist.png",
    githubUrl: "https://github.com/MarzSaksorn/Online-game-dns-blocklist",
    tags: ["Windows Hosts file"],
    accentColor: "from-[#A78BFA] to-[#8B6FE8]",
  },
  {
    id: 4,
    title: "Checkers Multiplayer",
    description: "Checkers Multiplayer with lobby system built entirely by Canva AI",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/checkers.png",
    githubUrl: "https://github.com/MarzSaksorn/checkers_multiplayer",
    liveUrl: "/checkers_multiplayer/",
    tags: ["Node.js", "HTML", "Tailwind", "JavaScript", "Canva AI"],
    accentColor: "from-[#C4B5FD] to-[#A78BFA]",
  },
  {
    id: 5,
    title: "PC Wiki by Marzweb (Paused Dev.)",
    description: "PC Wiki for everyone on How to use a computer from the begining to being able to troubleshoot stuffs",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/PC-Wiki.png",
    githubUrl: "https://github.com/MarzSaksorn/PC-Wiki",
    liveUrl: "/PC-Wiki/",
    tags: ["React", "Vite", "Tailwind", "BigPickle AI Opencode"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 6,
    title: "Valentine",
    description: "Credit to @code_wars_official on Instagram — Valentine web ideas collection",
    image: "https://raw.githubusercontent.com/MarzSaksorn/Valentine/refs/heads/main/be-my-Valentine/img1.gif",
    githubUrl: "https://github.com/MarzSaksorn/Valentine",
    liveUrl: "/Valentine/",
    tags: ["Valentine", "Pure HTML, CSS", "Instagram", "@code_wars_official"],
    accentColor: "from-[#C4B5FD] to-[#A78BFA]",
  },
  {
    id: 7,
    title: "borntoDev-Project",
    description: "Lite-Fundamental-Web-Dev-With-HTML5-CSS3",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Lite-Fundamental-Web-Dev-With-HTML5-CSS3.png",
    githubUrl: "https://github.com/MarzSaksorn/borntoDev-Project_Lite-Fundamental-Web-Dev-With-HTML5-CSS3",
    tags: ["borntoDev", "Pure HTML, CSS"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 8,
    title: "borntoDev-Project",
    description: "Introduction-to-JavaScript",
    image: "https://raw.githubusercontent.com/MarzSaksorn/marzweb/refs/heads/main/src/img/Thailand_tax_cal.png",
    githubUrl: "https://github.com/MarzSaksorn/borntoDev-Project_Introduction-to-JavaScript",
    tags: ["borntoDev", "Tailwind", "JavaScript"],
    accentColor: "from-[#C4B5FD] to-[#A78BFA]",
  },
  {
    id: 9,
    title: "Be My Valentine",
    description: "Credit to @code_wars_official on Instagram — a cute Valentine proposal page",
    image: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
    liveUrl: "/Valentine/be-my-Valentine/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 10,
    title: "Love Me Valentine",
    description: "Credit to @code_wars_official on Instagram — an interactive Valentine experience",
    image: "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif",
    liveUrl: "/Valentine/Love-Me-Valentine/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 11,
    title: "Valentine Card",
    description: "Credit to @code_wars_official on Instagram — a digital Valentine card",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmhrbmtqb3V2YmZ2aWJ5eWJqbm5oZnN5Y3h4aG5rOGZ6aHhua3VwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KztT2c4u8mYYUiMKdJ/giphy.gif",
    liveUrl: "/Valentine/Valentine-Card/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 12,
    title: "Valentine Letter",
    description: "Credit to @code_wars_official on Instagram — an animated envelope Valentine letter",
    image: "https://raw.githubusercontent.com/MarzSaksorn/Valentine/refs/heads/main/Valentine-Letter/envelope.png",
    liveUrl: "/Valentine/Valentine-Letter/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
  {
    id: 13,
    title: "Love Me Valentine",
    description: "Credit to @code_wars_official on Instagram — another Valentine interactive page",
    image: "https://raw.githubusercontent.com/MarzSaksorn/Valentine/refs/heads/main/Love-Me-Valentine-1/preview.png",
    liveUrl: "/Valentine/Love-Me-Valentine-1/",
    tags: ["Valentine", "Pure HTML, CSS", "JavaScript"],
    accentColor: "from-[#A78BFA] to-[#C4B5FD]",
  },
];
