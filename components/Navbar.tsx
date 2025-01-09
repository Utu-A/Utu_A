// components/Navbar.tsx
"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconBrandGithub, IconMail } from "@tabler/icons-react";
import { Library, Terminal } from 'lucide-react';
import { RiNotionFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  
  const dockItems = [
    // Group 1: Home and Research
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
      group: 1
    },
    {
      title: "Research",
      icon: <Library className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/research",
      group: 1
    },
    // Group 2: Projects, Notion, and Github
    {
      title: "Projects",
      icon: <Terminal className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/project",
      group: 2
    },
    {
      title: "Notion",
      icon: <RiNotionFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://notion.so/yourusername",
      group: 2
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/yourusername",
      group: 2
    },
    // Group 3: Contact-Me
    {
      title: "Contact-Me",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/auth/contact",
      group: 3
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <FloatingDock
        items={dockItems}
        desktopClassName="top-0"
        mobileClassName="top-0"
      />
    </div>
  );
};

export default Navbar;