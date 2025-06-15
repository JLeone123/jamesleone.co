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
      <section className="card bg-zinc-900/10 backdrop-blur-xs py-4 px-3 rounded-lg">
        <section className="card-content row flex-col items-center">
          <Image
            src={leoneProfilePicture}
            alt="Professional headshot of James Leone"
            quality={100}
            priority={true}
            className="object-cover rounded-lg border-[0.05rem] w-[70%] border-black/90 shadow-xl"
          />
          <section className="flex flex-col w-[70%]">
            <a
              href="/leone-resume.pdf"
              target="_blank"
              className="resume text-[1.8vmin] border-[0.05rem] border-slate-50/90 rounded-xl px-[2vmin] py-[1.7vmin] mt-5 text-gray-50 text-center
            hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
            >
              View resume
            </a>
            <a
              href="mailto:jsalleo13@gmail.com"
              className="resume text-[1.8vmin] border-[0.05rem] border-slate-50/90 rounded-xl px-[2vmin] py-[1.7vmin] mt-5 text-gray-50 text-center
            hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
            >
              Email
            </a>
          </section>
          <section className="row mt-5 w-[45%]">
            <a
              href="https://www.github.com/JLeone123"
              target="_blank"
              className="text-[3.33vmin] border-[0.05rem] border-slate-50/90 rounded-full p-[1.5vmin]
            hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/jamesleone1/"
              target="_blank"
              className="text-[3.33vmin] border-[0.05rem] border-slate-50/90 rounded-full p-[1.5vmin]
            hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
            >
              <FaLinkedin />
            </a>
          </section>
        </section>
      </section>
    </motion.div>
    /** *</motion.div>
    //   className="flex border-2 border-red-400 flex-col items-center rounded-lg bg-opacity-70 w-[32%]"
    //   initial={{ opacity: 0, x: -50 }}
    //   animate={{ opacity: 1, x: 0 }}
    //   transition={{
    //     type: "tween",
    //     duration: 0.75,
    //     delay: 0.75,
    //   }}
    // >
    //   {/* <div className="relative"> */
    //   <Image
    //     src={leoneProfilePicture}
    //     alt="Professional headshot of James Leone"
    //     quality={100}
    //     priority={true}
    //     className="object-cover rounded-lg w-[50%] border-[0.05rem] border-black/90 shadow-xl"
    //   />
    //   {/* </div> */}
    //   <div className="flex flex-col items-center">
    //     <a
    //       href="/leone-resume.pdf"
    //       target="_blank"
    //       className="resume border-[0.05rem] border-slate-50/90 rounded-xl px-16 py-3 text-gray-50 text-center
    //         hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
    //     >
    //       View resume
    //     </a>
    //     <a
    //       href="mailto:jsalleo13@gmail.com"
    //       className="resume border-[0.05rem] border-slate-50/90 rounded-xl px-23 py-3 text-gray-50 text-center
    //         hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
    //     >
    //       Email
    //     </a>
    //   </div>
    //   <div className="flex flex-row justify-center">
    //     <a
    //       href="https://www.github.com/JLeone123"
    //       target="_blank"
    //       className="text-[2rem] border-[0.05rem] border-slate-50/90 rounded-full p-3
    //         hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
    //     >
    //       <FaGithubSquare />
    //     </a>
    //     <a
    //       href="https://www.linkedin.com/in/jamesleone1/"
    //       target="_blank"
    //       className="text-[2rem] border-[0.05rem] border-slate-50/90 rounded-full p-3
    //         hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
    //     >
    //       <FaLinkedin />
    //     </a>
    //   </div>
    // </motion.div>
  );
};
