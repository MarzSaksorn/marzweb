import { Mail, Instagram, Facebook } from "lucide-react";

export interface ContactItem {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  gradient: string;
  description: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "mark94849@proton.me",
    href: "mailto:mark94849@proton.me",
    gradient: "from-[#A78BFA] to-[#C4B5FD]",
    description: "Click to send an email",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@marzsaksorn",
    href: "https://instagram.com/marzsaksorn",
    gradient: "from-[#C4B5FD] to-[#A78BFA]",
    description: "Click to view Instagram profile",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Saksorn Ngandee",
    href: "https://facebook.com/MarzSaksorn",
    gradient: "from-[#A78BFA] to-[#8B6FE8]",
    description: "Click to view Facebook profile",
  },
];
