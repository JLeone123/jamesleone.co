"use client";

import React from "react";
import { FaDiscord, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { motion } from "motion/react";

export const SideInfo = () => {
  return (
    <motion.section
      className="col flex flex-col"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <section className="bg-zinc-800/30 rounded-lg opacity-80 py-4 px-4">
        {" "}
        <p>
          {" "}
          <span className="italic max-lg:text-[3.25vmin] lg:text-[1.75em]">
            "The best way to predict the future is to invent it."{" "}
          </span>
          <br />
          <span className="flex justify-center max-lg:text-[3.25vmin] lg:text-[1.75em]">
            - Alan Kay
          </span>{" "}
        </p>{" "}
      </section>
      <section className="flex text-center flex-col mx-auto max-w-[90%] mt-5">
        <p className="italic text-slate-300 max-lg:text-[3.25vmin] lg:text-[1.75em]">
          Designing your ideas,{" "}
          <span className="px-1 bg-linear-45 from-aceternity-pink via-aceternity-red to-aceternity-orange font-bold max-lg:text-[3.5vmin] lg:text-[1.25em]">
            better.
          </span>
        </p>
      </section>
      <section className="flex flex-col items-center mt-5">
        <a
          href="https://www.github.com/JLeone123"
          className="social max-lg:text-[3vmin] lg:text-[2em] border border-slate-50/30 rounded-full p-3 hover:bg-[#1877F2]
        hover:scale-[1.07] active:scale-[1.07] focus:scale-[1.07] hover:outline-0 transition"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.github.com/JLeone123"
          className="social max-lg:text-[3vmin] lg:text-[2em] border border-slate-50/30 rounded-full p-3 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]
        hover:scale-[1.07] active:scale-[1.07] focus:scale-[1.07] hover:outline-0 transition bg-[length:125%_125%] bg-[position:50%_50%]"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.github.com/JLeone123"
          className="social max-lg:text-[3vmin] lg:text-[2em] border border-slate-50/30 rounded-full p-3 hover:bg-[#7289DA]
        hover:scale-[1.07] active:scale-[1.07] focus:scale-[1.07] hover:outline-0 transition"
        >
          <FaDiscord />
        </a>
      </section>
    </motion.section>
  );
};
