import Image from "next/image";
import React from "react";
import leoneProfilePicture from "@/public/leone-profile-picture.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export const Card = () => {
  return (
    <div className="flex flex-col items-center justify-around mt-25 rounded-lg bg-opacity-70 gap-y-10">
      <div className="relative">
        <Image
          src={leoneProfilePicture}
          alt="Professional headshot of James Leone"
          quality={100}
          priority={true}
          className="max-w-[16rem] object-cover rounded-lg border-[0.05rem] border-black/90 shadow-xl"
        />
        {/* <div className="absolute w-25 h-5 bg-gray-300 top-0 -right-10 border rounded-lg px-7 py-3">
          <div className="relative">
            <p className="text-sm text-slate-950">Open for work</p>
            <span className="absolute -right-2 animate-ping rounded-full bg-green-400 h-3 w-3"></span>
            <span className="absolute -right-2 rounded-full bg-green-500 h-3 w-3"></span>
          </div>
        </div> */}
        {/* Open to work div */}
      </div>
      <div className="w-auto flex flex-col gap-y-8 items-center">
        <a
          href="https://www.google.com"
          className="resume max-w-[14.38rem] border-[0.05rem] border-slate-50/90 rounded-xl px-12 py-3 text-gray-50 text-center w-full
            hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
        >
          Download resume
        </a>
        <a
          href="https://www.google.com"
          className="resume max-w-[14.38rem] border-[0.05rem] border-slate-50/90 rounded-xl px-12 py-3 text-gray-50 text-center w-full
            hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] transition"
        >
          Email
        </a>
      </div>
      <div className="w-auto flex flex-row justify-center gap-x-10">
        <a
          href="https://www.github.com/JLeone123"
          className="text-[1.5rem] border-[0.05rem] border-slate-50/90 rounded-full p-2.5
            hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.github.com/JLeone123"
          className="text-[1.5rem] border-[0.05rem] border-slate-50/90 rounded-full p-2.5
            hover:scale-[1.15] focus:scale-[1.15] hover:outline-0 active:scale-[1.10] transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};
