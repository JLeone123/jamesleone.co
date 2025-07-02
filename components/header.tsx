// "use client";
import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";
// import { motion } from "motion/react";

export const Header = () => {
  return (
    <header className="z-100 relative">
      <div
        className="header fixed -translate-x-1/2 left-1/2 top-5 rounded-full shadow-lg backdrop-blur-[10px] h-[3.5em] border-[1.5px] border-zinc-50/70 hover:scale-[1.05] active:scale-[1.05] focus:scale-[1.05] transition"
        // initial={{ opacity: 0, y: -100 }}
        // animate={{ opacity: 1, y: 0 }}
      >
        <nav className="flex fixed top-[0.9em] left-1/2 -translate-x-1/2 cursor-pointer">
          <ul className="w-full flex gap-20">
            {links.map((link) => {
              return (
                <li
                  key={link.hash}
                  className="text-zinc-400 hover:text-zinc-100 transition"
                  // initial={{ opacity: 0, y: -100 }}
                  // animate={{ opacity: 1, y: 0 }}
                >
                  <Link href={link.hash} className="nav__item">
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
