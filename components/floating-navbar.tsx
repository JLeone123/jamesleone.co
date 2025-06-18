"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconUser,
  IconTerminal2,
} from "@tabler/icons-react";

import { motion } from "motion/react";

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
        <IconBrandGithub className="h-full w-full text-green-400 dark:text-green-400" />
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
    <motion.header
      className="mt-[7vh] flex fixed left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </motion.header>
  );
}
