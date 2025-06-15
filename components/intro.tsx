"use client";

import React from "react";
// import { RotateText } from "@/components/rotate-text";
import { ColourfulText } from "./ui/colourful-text";
import { motion } from "motion/react";

// import { Geist } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const Intro = () => {
  return (
    <motion.section
      className="flex flex-col mt-10 justify-around"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <div className="flex flex-col">
        <h1 className="md:text-[2.15rem] lg:text-[2.9rem] xl:text-[3.75rem] text-slate-50 tracking-[0rem]">
          Hi, I'm <br />
          <span className="bg-linear-45 md:text-[1.6] lg:text-[3.10rem] xl:text-[4.5rem] from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">
            James Leone
          </span>
          {/* <ColourfulText words={["James Leone"]} /> */}
        </h1>
      </div>
      <div className="">
        <h2 className="motto md:text-[1.5rem] lg:text-[2.15rem] xl:text-[2.5rem] text-slate-50">
          Always excited about... <br />
          <div className="colorful-text md:text-[1.5rem] lg:text-[2.15rem] xl:text-[2.5rem] flex justify-center">
            {/* <RotateText /> */}
            <ColourfulText
              words={[
                "software engineering",
                "UI / UX design",
                "philosophy",
                "learning new skills",
              ]}
            />
          </div>
        </h2>
      </div>
      <div>
        <h4 className="md:text-[1.00rem] lg:text-[1.10rem] xl:text-[1.20rem] max-w-225 text-slate-300">
          I am a software engineer with one year of professional work
          experience. When I am not writing code, I enjoy building full-stack
          applications, exercising, reading philosophy, and connecting with
          other passionate creators. I am currently looking for a software
          developer role where I can gain new skills and generate positive
          impact.
        </h4>
      </div>
      <div className="flex justify-center">
        <a
          href="#contact"
          className="border-[0.05rem] border-zinc-950/70 bg-zinc-50 text-zinc-800 px-6 py-2.5 xl:px-7 xl:py-3 rounded-lg hover:text-slate-950
          hover:scale-[1.10] focus:scale-[1.10] hover:outline-0 active:scale-[1.07] transition"
        >
          Let's connect!
        </a>
      </div>
      {/* Philosopher, challenge-seeker, lifelong learner */}
    </motion.section>
  );
};
