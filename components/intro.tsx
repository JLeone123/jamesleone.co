"use client";

import React from "react";
import { ColourfulText } from "./ui/colourful-text";
import { motion } from "motion/react";
import { IntroText } from "./intro-text";

export const Intro = () => {
  return (
    <motion.section
      className="intro"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <h1 className="intro__name">James Leone</h1>

      <ColourfulText
        words={[
          "Software engineer",
          "UI / UX designer",
          "Cloud enthusiast",
          "Philosopher",
          "Lifelong learner",
        ]}
      />

      <IntroText />
    </motion.section>
  );
};
