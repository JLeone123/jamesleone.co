import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";

export const Header = () => {
  return (
    // <div className="w-full h-16 bg-white text-center text-black/90">NAVBAR</div>
    <header className="z-100 relative">
      <div className="fixed w-full flex flex-row justify-center mt-3 left-1/2 -translate-x-[50%] backdrop-blur-[0.5rem]">
        <nav className="rounded-full bg-transparent border border-slate-300/20 text-slate-300/80 z-100">
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
      </div>
    </header>
  );
};
