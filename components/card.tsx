"use client";

import Image from "next/image";
import React from "react";
import leoneProfilePicture from "@/public/leone-profile-picture.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

export const Card = () => {
  return (
    <motion.div
      className="col"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <section className="card bg-zinc-700/10 backdrop-blur-xs py-4 px-3 rounded-lg">
        <section className="card-content row flex-col items-center">
          <Image
            src={leoneProfilePicture}
            alt="Professional headshot of James Leone"
            quality={100}
            priority={true}
            className="object-cover rounded-lg border-[0.05rem] max-lg:w-[75%] lg:w-[85%] border-black/90 shadow-xl"
          />
          <section className="flex flex-col w-[75%]">
            <a
              href="/leone-resume.pdf"
              target="_blank"
              className="resume text-[1.8vmin] border-[0.05rem] border-slate-50/90 rounded-xl px-3 py-2 mt-5 text-gray-50 text-center
            hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
            >
              View resume
            </a>
            <a
              href="mailto:jsalleo13@gmail.com"
              className="resume text-[1.8vmin] border-[0.05rem] border-slate-50/90 rounded-xl px-3 py-2 mt-5 text-gray-50 text-center
            hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
            >
              Email
            </a>
          </section>
          <section className="row mt-5 w-[55%]">
            <a
              href="https://www.github.com/JLeone123"
              target="_blank"
              className="text-[2vw] flex items-center justify-center border-[0.05rem] border-slate-50/90 rounded-full p-[1.2vw]
            hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/jamesleone1/"
              target="_blank"
              className="text-[2vw] border-[0.05rem] border-slate-50/90 rounded-full flex items-center justify-center p-[1.2vw]
            hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
            >
              <FaLinkedin />
            </a>
          </section>
        </section>
      </section>
    </motion.div>
  );
};
