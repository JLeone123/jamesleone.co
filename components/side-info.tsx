"use client";

import React from "react";
import { FaDiscord, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { motion } from "motion/react";

export const SideInfo = () => {
  return (
    <motion.div
      className="flex flex-col justify-around mt-25"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <div className="quote-card bg-zinc-800/30 text-[2rem] flex rounded-lg px-10 opacity-80">
        <p>
          <span className="italic">
            "The best way to predict the future is to invent it."
          </span>
          <br />
          <span className="flex justify-center">- Alan Kay</span>
        </p>
      </div>
      <div className="flex justify-center w-full">
        <p className="text-[2.25rem] italic max-w-80 text-slate-300">
          Designing your ideas,{" "}
          <span className="px-1 bg-linear-45 from-aceternity-pink via-aceternity-red to-aceternity-orange font-bold">
            better.
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-5 my-0">
        <a
          href="https://www.github.com/JLeone123"
          className="text-[2rem] border border-slate-50/30 rounded-full p-3 hover:bg-[#1877F2]
          hover:scale-[1.07] active:scale-[1.07] focus:scale-[1.07] hover:outline-0 transition"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.github.com/JLeone123"
          className="text-[2rem] border border-slate-50/30 rounded-full p-3 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] 
          hover:scale-[1.07] active:scale-[1.07] focus:scale-[1.07] hover:outline-0 transition bg-[length:125%_125%] bg-[position:50%_50%]"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.github.com/JLeone123"
          className="text-[2rem] border border-slate-50/30 rounded-full p-3 hover:bg-[#7289DA] 
          hover:scale-[1.07] active:scale-[1.07] focus:scale-[1.07] hover:outline-0 transition"
        >
          <FaDiscord />
        </a>
      </div>
    </motion.div>
  );
};
