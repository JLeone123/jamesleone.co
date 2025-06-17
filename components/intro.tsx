"use client";

import React from "react";
import { ColourfulText } from "./ui/colourful-text";
import { motion } from "motion/react";

export const Intro = () => {
  return (
    <motion.section
      className="flex flex-col text-center px-3 justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <h1 className="max-lg:text-[4.2vw] lg:text-[7vmin] bg-linear-45 from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">
        James Leone
      </h1>

      <h2 className="motto text-slate-50 max-lg:text-[3vw] lg:text-[5vmin]">
        <div className="colorful-text justify-center flex">
          <ColourfulText
            words={[
              "Software engineer",
              "UI / UX designer",
              "Philosopher ",
              "Lifelong learner",
            ]}
          />
          {/* <span>💻</span>
          <span>🎨</span>
          <span>💭</span>
          <span>⛰️</span> */}
        </div>
      </h2>
      <h4 className="text-[1.25em] w-full max-w-222 text-slate-300 mt-[2em]">
        I'm a software engineer with one year of professional work experience.
        When I'm not writing code, I enjoy building full-stack applications,
        exercising, reading philosophy, and connecting with other passionate
        creators. I am currently looking for a software developer role where I
        can gain new skills and generate positive impact.
      </h4>
    </motion.section>
  );
};
