// components/Navbar.tsx
"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser, IconBriefcase, IconMail } from "@tabler/icons-react";

const Navbar = () => {
  // Navigation items for the floating navbar
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "Projects",
      link: "/project",
      icon: <IconBriefcase className="h-4 w-4" />,
    },
    {
      name: "Research",
      link: "/research",
      icon: <IconBriefcase className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "/auth/contact",
      icon: <IconMail className="h-4 w-4" />,
    },
  ];

  return (
    <FloatingNav 
      navItems={navItems} 
      className="top-4" // Positioning from top
      alwaysVisible={true} // New prop to control visibility
    />
  );
};

export default Navbar;