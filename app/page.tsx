"use client";

import { Card } from "@/components/card";
import { Intro } from "@/components/intro";
import { SideInfo } from "@/components/side-info";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-center items-center h-full">
      <main className="main container flex flex-col gap-y-15">
        <Spotlight />
        <section className="col flex gap-x-5 mt-[3vw]">
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
          <Link
            href="#contact"
            className="focus:outline-0 border-2 bg-zinc-100 text-zinc-800/90 border-zinc-800/90 px-7 py-3 rounded-lg
          hover:scale-[1.10] focus:scale-[1.10] hover:outline-0 active:scale-[1.07] transition
          "
          >
            Let's connect!
          </Link>
        </motion.section>
      </main>
    </section>
  );
}
