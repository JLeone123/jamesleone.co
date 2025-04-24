"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const phrases = [
  "software engineering",
  "philosophy",
  "solving problems",
  "learning new skills",
];

const Card = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const direction = index % 2 === 0 ? 20 : -20;

  return (
    <div className="flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: direction, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -direction, opacity: 0 }}
          transition={{
            y: {
              type: "spring",
              duration: 3,
              bounce: 0.6,
              damping: 12,
            },
            opacity: {
              duration: "0.3",
            },
          }}
          className="text-xl font-semibold text-center"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default Card;
