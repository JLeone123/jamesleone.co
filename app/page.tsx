"use client";

import { Card } from "@/components/card";
import { Intro } from "@/components/intro";
import { SideInfo } from "@/components/side-info";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="main container flex flex-col">
      <section className="col flex mt-[2em]">
        <Card />
        <Intro />
        <SideInfo />
      </section>
      <motion.section
        className="flex row flex-col items-center mt-[2em]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.75,
          delay: 0.85,
        }}
      >
        <a
          href="#contact"
          className="border-2 border-zinc-50 bg-zinc-900/10 px-7 py-3 rounded-lg
          hover:scale-[1.10] focus:scale-[1.10] hover:outline-0 active:scale-[1.07] transition"
        >
          Let's connect!
        </a>
      </motion.section>
    </main>
  );
}
