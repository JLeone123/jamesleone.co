"use client";

import Image from "next/image";
import React from "react";
import leoneProfilePicture from "@/public/leone-profile-picture.png";
import { motion } from "motion/react";

export const Card = () => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        duration: 0.75,
        delay: 0.75,
      }}
    >
      <section className="card__content">
        <Image
          src={leoneProfilePicture}
          alt="Professional headshot of James Leone"
          quality={100}
          priority={true}
          className="card__image"
        />
      </section>
    </motion.div>
  );
};
