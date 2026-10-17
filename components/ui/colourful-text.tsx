"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ words }: { words: string[] }) {
  // Text color comes from CSS (.intro__colorful-text -> var(--ink)) so it
  // follows the light / dark theme. `count` drives which word is shown.
  const [count, setCount] = React.useState(1);
  const initialWord = words?.[0] ?? "James Leone";
  const [text, setText] = React.useState(initialWord);

  // Every five seconds, show the next word.
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShouldAnimate(true), 1250);
    const interval = setInterval(() => {
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
      {(() => {
        // Keep a running letter index so the stagger delay flows across words
        let index = 0;
        return text.split(" ").map((word, wordIndex, all) => (
          <React.Fragment key={`${word}-${count}-${wordIndex}`}>
            {/* Each word is unbreakable, so wrapping only happens between words */}
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char) => {
                const i = index++;
                return (
                  <motion.span
                    key={`${char}-${count}-${i}`}
                    initial={{
                      y: 0,
                    }}
                    animate={
                      shouldAnimate
                        ? {
                            y: [0, -3, 0],
                            scale: [1, 1.01, 1],
                            filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
                            opacity: [1, 0.8, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: i * 0.05,
                    }}
                    className="inline-block whitespace-pre font-sans tracking-tight"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
            {wordIndex < all.length - 1 && " "}
          </React.Fragment>
        ));
      })()}
    </h2>
  );
}
