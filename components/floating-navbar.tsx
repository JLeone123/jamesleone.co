"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconUser,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingNavbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-blue-400 dark:text-blue-400" />
      ),
      href: "#home",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-pink-400 dark:text-pink-400" />
      ),
      href: "#projects",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub
          className="h-full w-full text-green-400 dark:text-green-400"
          target="_blank"
        />
      ),
      href: "https://www.github.com/JLeone123",
    },
    {
      title: "Contact",
      icon: (
        <IconUser className="h-full w-full text-green-400 dark:text-cyan-400" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="flex mt-15 justify-center w-full">
      <FloatingDock mobileClassName="" items={links} />
    </div>
  );
}
