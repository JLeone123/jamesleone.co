"use client";

import React from "react";
import {
  // FaDiscord,
  // FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

import { FaRegPaperPlane } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

// import { CiDark } from "react-icons/ci";
import { motion } from "motion/react";

export const SideInfo = () => {
  return (
    <motion.section
      className="max-lg:hidden flex flex-col justify-between items-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      {/* <section className="bg-zinc-800/30 rounded-lg opacity-80 py-4 px-4">
        {" "}
        <p>
          {" "}
          <span className="italic max-lg:text-[2.75vmin] lg:text-[2.75vmin] xl:[3em]">
            "The best way to predict the future is to invent it."{" "}
          </span>
          <br />
          <span className="flex justify-center max-lg:text-[2.25vmin] lg:text-[2.25vmin] xl:[3em]">
            - Alan Kay
          </span>{" "}
        </p>{" "}
      </section> */}
      <section className="flex flex-col justify-center">
        <section className="flex text-center flex-col mx-auto max-w-[90%] mt-5">
          <p className="italic text-slate-300 max-lg:text-[4vmin] lg:text-[4.25vmin]">
            Designing your ideas,{" "}
            <span className="px-1 bg-linear-45 from-aceternity-pink via-aceternity-red to-aceternity-orange font-bold max-lg:text-[4.25vw] lg:text-[4.5vmin]">
              better.
            </span>
          </p>
        </section>
        <section className="flex mt-5 w-[100%] flex-col">
          <section className="first-icons flex self-center">
            <a
              href="https://www.github.com/JLeone123"
              target="_blank"
              className="text-[4vw] text-slate-300 flex items-center justify-center rounded-full p-[1.2vw]
              hover:scale-[1.15] focus:scale-[1.15] focus:outline-0 active:scale-[1.10] transition"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/jamesleone1/"
              target="_blank"
              className="text-[4vw] text-slate-300 flex items-center justify-center p-[1.2vw]
              hover:scale-[1.15] focus:scale-[1.15] focus:outline-0 active:scale-[1.10] transition"
            >
              <FaLinkedin />
            </a>
          </section>
          <section className="second-icons flex flex-col w-[90%] mx-auto mt-10 gap-y-10">
            <a
              href="/leone-resume.pdf"
              target="_blank"
              //   className="resume text-[1.15em] flex items-center text-center border border-red-400 gap-2 cursor-pointer outline-none border-slate-50/90
              // hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
              className="group resume text-[1.15em] flex justify-center items-center border-1 border-zinc-50 gap-3 rounded-xl px-10 py-3 text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
            >
              <section className="wrapper flex items-center w-[50%] justify-between mx-auto">
                Resume{" "}
                <FaRegPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 group-focus:-translate-y-1 group-focus:translate-x-1 transition" />
              </section>
            </a>
            <a
              href="https://www.linkedin.com/in/jamesleone1/"
              target="_blank"
              className="group mail text-[1.15em] flex justify-center items-center border-1 border-zinc-50 gap-3 rounded-xl px-10 py-3 text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
            >
              <section className="wrapper flex items-center w-[50%] justify-between mx-auto">
                Email
                <MdEmail className="group-hover:-translate-y-1 group-focus:-translate-y-1 hover:outline-none transition" />
              </section>
            </a>
          </section>
        </section>
      </section>
      {/* <motion.section
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
          className="border-2 border-zinc-50 bg-zinc-900/10 px-7 py-3 rounded-lg
          hover:scale-[1.10] focus:scale-[1.10] hover:outline-0 active:scale-[1.07] transition
          "
        >
          Let's connect!
        </a>
      </motion.section> */}
      {/* <section className="flex flex-col items-center mt-5">
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
      </section> */}
    </motion.section>
  );
};
