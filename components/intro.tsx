import React from "react";
import { ColourfulText } from "./ui/colourful-text";
import { IntroText } from "./intro-text";

export const Intro = () => {
  return (
    <section className="intro">
      <h1 className="intro__name">James Leone</h1>

      <ColourfulText
        words={[
          "Software engineer",
          "UI / UX designer",
          "Cloud enthusiast",
          "Armchair philosopher",
          "Lifelong learner",
        ]}
      />

      <IntroText />
    </section>
  );
};
