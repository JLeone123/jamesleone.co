"use client";

import React from "react";
import { ColourfulText } from "./ui/colourful-text";
import { motion } from "motion/react";

export const Intro = () => {
  return (
    <motion.section
      className="col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <h1 className="max-lg:text-[4vw] lg:text-[5vmin] text-slate-50 tracking-[0rem] mt-0">
        Hi, I'm <br />{" "}
        <span className="max-lg:text-[4.2vw] lg:text-[6vmin] bg-linear-45 from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">
          James Leone{" "}
        </span>{" "}
      </h1>
      <h2 className="motto text-slate-50 mt-[1em] max-lg:text-[3vw] lg:text-[4vmin]">
        Always excited about... <br />
        <div className="colorful-text justify-center flex w-[350] max-w-[350]">
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
      <h4 className="text-[1.05em] w-full max-w-225 text-slate-300 mt-[2em]">
        I am a software engineer with one year of professional work experience.
        When I am not writing code, I enjoy building full-stack applications,
        exercising, reading philosophy, and connecting with other passionate
        creators. I am currently looking for a software developer role where I
        can gain new skills and generate positive impact.
      </h4>
    </motion.section>
  );
};
