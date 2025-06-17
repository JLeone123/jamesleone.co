"use client";

import Image from "next/image";
import React from "react";
import leoneProfilePicture from "@/public/leone-profile-picture.png";
import { motion } from "motion/react";

export const Card = () => {
  return (
    <motion.div
      className="min-w-[250px] max-w-[300px] flex items-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      {/* bg-slate-900/90 */}
      <section className="relative card bg-zinc-700/10 py-4 px-3 rounded-lg">
        {/* <section className="absolute bg-zinc-700/10 -z-[1] h-full w-full rotate-10 -translate-y-5 py-4 px-3 rounded-lg layered-card"></section> */}
        <section className="card-content row flex-col items-center">
          <Image
            src={leoneProfilePicture}
            alt="Professional headshot of James Leone"
            quality={100}
            priority={true}
            className="object-cover rounded-lg border-[0.05rem] max-lg:w-[100%] lg:w-[100%] border-black/90 shadow-xl"
          />
        </section>
      </section>
    </motion.div>
  );
};
