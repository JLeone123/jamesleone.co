"use client";
import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { motion } from "motion/react";

export const Header = () => {
  return (
    <header className="z-100 relative flex justify-center">
      <motion.div
        className="fixed w-full flex flex-row justify-center mt-3 backdrop-blur-[0.5rem]"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.75,
        }}
      >
        <nav
          className="rounded-full bg-transparent border border-slate-300/20 text-slate-300/80 z-100
        hover:scale-[1.05] focus:scale-[1.05] hover:outline-0 transition"
        >
          <ul className="flex justify-center gap-x-20 px-10 py-4 cursor-pointer">
            {links.map((link) => {
              return (
                <li key={link.hash} className="hover:text-slate-200 transition">
                  <Link href={link.hash} className="">
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};
