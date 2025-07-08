import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaRegPaperPlane,
  MdEmail,
} from "@/lib/data";

export const SideInfo = () => {
  return (
    <section className="w-[45%] bg-red-400 flex flex-col justify-between">
      <section className="flex flex-col">
        <section className="flex text-center flex-col mx-auto max-w-[90%]">
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
          <section className="second-icons flex flex-col w-[70%] mx-auto mt-10 gap-y-10">
            <a
              href="/leone-resume.pdf"
              target="_blank"
              className="group resume text-[1.85vmin] flex justify-center items-center border-1 border-zinc-50 gap-3 rounded-full px-7 py-3 text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
            >
              <section className="wrapper flex items-center w-[80%] justify-between mx-auto">
                Resume <FaRegPaperPlane className="paper-plane-icon" />
              </section>
            </a>
            <a
              href="https://www.linkedin.com/in/jamesleone1/"
              target="_blank"
              className="group mail text-[1.85vmin] flex justify-center items-center border-1 border-zinc-50 gap-3 rounded-full px-7 py-3 text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
            >
              <section className="wrapper flex items-center w-[80%] justify-between mx-auto">
                Email <MdEmail className="email-icon" />
              </section>
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};
