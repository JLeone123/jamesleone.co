"use client";
import React from "react";

// Cycles through `words` every 5 seconds. Each letter does a small staggered
// lift-and-fade (CSS keyframes in globals.css, transform + opacity only).
// Text color comes from CSS (.intro__colorful-text -> var(--ink)).
export function ColourfulText({ words }: { words: string[] }) {
  const [count, setCount] = React.useState(0);
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 1250);
    const interval = setInterval(() => setCount((c) => c + 1), 5000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const text = words.length > 0 ? words[count % words.length] : "James Leone";

  // Keep a running letter index so the stagger delay flows across words
  let index = 0;
  return (
    <h2 className="intro__colorful-text">
      {text.split(" ").map((word, wordIndex, all) => (
        <React.Fragment key={`${count}-${wordIndex}`}>
          {/* Each word is unbreakable, so wrapping only happens between words */}
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char) => {
              const i = index++;
              return (
                <span
                  key={`${count}-${i}`}
                  className={`colorful-letter${animate ? " colorful-letter--animate" : ""}`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
          {wordIndex < all.length - 1 && " "}
        </React.Fragment>
      ))}
    </h2>
  );
}
