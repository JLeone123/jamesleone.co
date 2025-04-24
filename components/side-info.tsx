import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export const SideInfo = () => {
  return (
    <div className="flex flex-col justify-around mt-25">
      <div className="">
        <div className="quote-card bg-zinc-800/30 backdrop-blur-sm opacity-90 text-[2rem] flex rounded-lg px-10">
          <p className="">
            <span className="italic">
              "The best way to predict the future is to invent it."
            </span>
            <br />
            <span className="flex justify-center">- Alan Kay</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <p className="text-[2.25rem] italic max-w-52">
          Designing your ideas,{" "}
          <span className="px-1 bg-linear-45 from-aceternity-pink via-aceternity-red to-aceternity-orange text-slate-50 font-bold">
            better.
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-5 my-0">
        <a
          href="https://www.github.com/JLeone123"
          className="text-[2rem] border border-slate-50/30 rounded-full p-3 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] 
          hover:scale-107 active:scale-107 focus:scale-107 hover:outline-0 active:scale-[1.04] transition"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.github.com/JLeone123"
          className="text-[2rem] border border-slate-50/30 rounded-full p-3 hover:bg-[#00acee] 
          hover:scale-107 active:scale-107 focus:scale-107 hover:outline-0 active:scale-[1.04] transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.github.com/JLeone123"
          className="text-[2rem] border border-slate-50/30 rounded-full p-3 hover:bg-[#1877F2]
          hover:scale-107 active:scale-107 focus:scale-107 hover:outline-0 active:scale-[1.04] transition"
        >
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
};
