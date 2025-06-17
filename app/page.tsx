"use client";

import { Card } from "@/components/card";
import { Intro } from "@/components/intro";
import { SideInfo } from "@/components/side-info";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <main className="main container flex flex-col gap-y-15">
      <Spotlight />
      <section className="col flex gap-x-5">
        <Card />
        <Intro />
        <SideInfo />
      </section>
      <motion.section
        className="flex row flex-col items-center"
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
          className="border-2 bg-zinc-100 text-zinc-800/90 border-zinc-800/90 px-7 py-3 rounded-lg
          hover:scale-[1.10] focus:scale-[1.10] hover:outline-0 active:scale-[1.07] transition
          "
        >
          Let's connect!
        </a>
      </motion.section>
    </main>
  );
}
