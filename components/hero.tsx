import React from "react";
import { Card } from "./card";
import { Intro } from "./intro";
import { SideInfo } from "./side-info";
import { ContactButton } from "./contact-button";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Card />
        <Intro />
        <SideInfo />
      </section>
      <section className="flex justify-center mt-[5em]">
        <ContactButton />
      </section>
    </>
  );
};

export default Hero;
