// "use client";

import Image from "next/image";
import React from "react";
import leoneProfilePicture from "@/public/leone-profile-picture.png";
// import { motion } from "motion/react";

export const Card = () => {
  return (
    <div
      className="card"
      // initial={{ opacity: 0, x: -50 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{
      //   type: "tween",
      //   duration: 0.75,
      //   delay: 0.75,
      // }}
    >
      <Image
        src={leoneProfilePicture}
        className="border border-zinc-200/80 self-center w-full rounded-lg"
        // width={2000}
        // height={2500}
        sizes="(min-width: 1040px) calc(2.09vw + 212px), (min-width: 780px) 32.08vw, calc(16.3vw + 8px)"
        decoding="async"
        alt="Professional headshot of James Leone"
        quality={100}
        priority={true}
      />
    </div>
  );
};
