"use client";
import React from "react";
// import { links } from "@/lib/data";
// import Link from "next/link";
// import { motion } from "motion/react";

export const Header = () => {
  return (
    <header className="z-100 relative flex justify-center w-full">
      {/* <motion.div
        className="fixed max-md:w-full flex flex-row justify-center mt-3 backdrop-blur-[0.5rem]"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.75,
        }}
      >
        <nav
          className="max-md:flex max-md:max-w-svw max-md:w-full max-md:border-b-[1px] border-slate-300/20 md:rounded-full bg-transparent md:border md:border-slate-300/20 text-slate-300/80 z-100
        hover:scale-[1.05] focus:scale-[1.05] hover:outline-0 transition"
        >
          <ul className="flex justify-center max-md:gap-y-10 max-md:flex-wrap gap-x-20 md:px-10 py-4 cursor-pointer">
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
      </motion.div> */}
    </header>
  );
};
