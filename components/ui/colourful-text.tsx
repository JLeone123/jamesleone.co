"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ words }: { words: string[] }) {
  // predefined colors
  const colors = [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  // set currentColor order and count, which initially is at zero.
  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(1);
  const initialWord = words?.[0] ?? "James Leone";
  const [text, setText] = React.useState(initialWord);

  // Every five seconds, randomize the color order
  // and increment the count by one.
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShouldAnimate(true), 1250);
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
      if (words.length > 0) {
        setText(words[count % words.length]);
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  });

  return (
    <h2 className="intro__colorful-text">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{
            y: 0,
          }}
          animate={
            shouldAnimate
              ? {
                  color: currentColors[index % currentColors.length],
                  y: [0, -3, 0],
                  scale: [1, 1.01, 1],
                  filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
                  opacity: [1, 0.8, 1],
                }
              : {}
          }
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block whitespace-pre font-sans tracking-tight italic"
        >
          {char}
        </motion.span>
      ))}
    </h2>
  );
}
