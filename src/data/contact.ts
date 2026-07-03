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
    gradient: "from-[#2DD4BF] to-[#5EEAD4]",
    description: "Click to send an email",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@marzsaksorn",
    href: "https://instagram.com/marzsaksorn",
    gradient: "from-[#F472B6] to-[#F9A8D4]",
    description: "Click to view Instagram profile",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Saksorn Ngandee",
    href: "https://facebook.com/MarzSaksorn",
    gradient: "from-[#818CF8] to-[#A5B4FC]",
    description: "Click to view Facebook profile",
  },
];
