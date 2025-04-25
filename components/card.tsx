"use client";

import Image from "next/image";
import React from "react";
import leoneProfilePicture from "@/public/leone-profile-picture.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

export const Card = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-around mt-25 rounded-lg bg-opacity-70 gap-y-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <div className="relative">
        <Image
          src={leoneProfilePicture}
          alt="Professional headshot of James Leone"
          quality={100}
          priority={true}
          className="max-w-[16rem] object-cover rounded-lg border-[0.05rem] border-black/90 shadow-xl"
        />
      </div>
      <div className="w-auto flex flex-col gap-y-8 items-center">
        <a
          href="/leone-resume.pdf"
          target="_blank"
          className="resume max-w-[14.38rem] border-[0.05rem] border-slate-50/90 rounded-xl px-16 py-3 text-gray-50 text-center w-full
            hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
        >
          View resume
        </a>
        <a
          href="mailto:jsalleo13@gmail.com"
          className="resume max-w-[14.38rem] border-[0.05rem] border-slate-50/90 rounded-xl px-16 py-3 text-gray-50 text-center w-full
            hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
        >
          Email
        </a>
      </div>
      <div className="w-auto flex flex-row justify-center gap-x-10">
        <a
          href="https://www.github.com/JLeone123"
          target="_blank"
          className="text-[1.75rem] border-[0.05rem] border-slate-50/90 rounded-full p-3
            hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/jamesleone1/"
          target="_blank"
          className="text-[1.75rem] border-[0.05rem] border-slate-50/90 rounded-full p-3
            hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
};
