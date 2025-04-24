import React from "react";
// import { RotateText } from "@/components/rotate-text";
import { ColourfulText } from "./ui/colourful-text";
// import { Geist } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const Intro = () => {
  return (
    <section className="mx-5 ml-5 flex flex-col mt-25 justify-between gap-y-5">
      <div className="flex flex-col">
        <h1 className="text-[4.6rem] text-slate-50">
          Hello, I am <br />
          <span className="bg-linear-45 from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">
            James Leone
          </span>
          {/* <ColourfulText words={["James Leone"]} /> */}
        </h1>
      </div>
      <div className="">
        <h2 className="motto text-[2.75rem] text-slate-50">
          I thrive working on <br />
          {/* bg-linear-45 from-orange-400 via-purple-400 to-pink-400 text-transparent bg-clip-text  */}
          <div className="text-[2.3rem] flex justify-center">
            {/* <RotateText /> */}
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
      </div>
      <div>
        <h4 className="text-[1.20rem] max-w-225 text-slate-300">
          I am a software engineer with one year of professional work
          experience. When I am not writing code, I enjoy building full-stack
          applications, exercising, reading philosophy, and connecting with
          other passionate creators. I am currently looking for a software
          developer role where I can gain new skills and generate positive
          impact.
        </h4>
      </div>
      <div className="my-3 flex justify-center">
        <a
          href="#contact"
          className="border-[0.05rem] border-zinc-950/70 bg-zinc-50 text-zinc-800 px-7 py-3 rounded-lg hover:text-slate-500/90"
        >
          Let's connect!
        </a>
      </div>
      {/* Philosopher, challenge-seeker, lifelong learner */}
    </section>
  );
};
