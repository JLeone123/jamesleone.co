import {
  FaGithubSquare,
  FaLinkedin,
  FaRegPaperPlane,
  MdEmail,
  leoneProfilePicture,
} from "@/lib/data";
import { ContactButton, ColourfulText, IntroText } from "@/lib/components";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section id="home" className="home">
      <h1 className="intro__name">James Leone</h1>
      <ColourfulText
        words={[
          "Software engineer",
          "UI / UX designer",
          "Cloud enthusiast",
          "Philosopher",
          "Lifelong learner",
        ]}
      />
      <Image
        src={leoneProfilePicture}
        className="border border-zinc-200/80 w-[min(45%,15rem)] md:w-[clamp(10rem,18vw,13rem)] object-top self-center rounded-full object-cover aspect-square hover:scale-[1.10] active:scale-[1.10] transition"
        decoding="async"
        alt="Professional headshot of James Leone"
        quality={100}
        priority={true}
      />
      <IntroText />
      {/* buttons */}
      {/* Stacked on small screens; a single centered row (wrapping if needed) from md up */}
      <section className="buttons flex flex-col items-center gap-y-5 mt-[4em] md:flex-row md:flex-wrap md:justify-center md:gap-x-[clamp(1rem,2vw,2rem)] md:gap-y-4">
        <section className="first-icons flex gap-x-5 justify-center md:gap-x-[clamp(0.75rem,1.25vw,1.25rem)]">
          <Link
            href="https://www.github.com/JLeone123"
            target="_blank"
            aria-label="GitHub"
            className="social-icon flex items-center justify-center rounded-full
                hover:scale-[1.15] focus:scale-[1.15] focus:outline-0 active:scale-[1.10] transition"
          >
            <FaGithubSquare />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jamesleone1/"
            target="_blank"
            aria-label="LinkedIn"
            className="social-icon flex items-center justify-center
                hover:scale-[1.15] focus:scale-[1.15] focus:outline-0 active:scale-[1.10] transition"
          >
            <FaLinkedin />
          </Link>
        </section>
        <section className="second-icons flex flex-col mt-[2em] gap-y-5 md:mt-0 md:flex-row md:gap-x-[clamp(0.75rem,1.5vw,1.5rem)]">
          <a
            href="/leone-resume.pdf"
            target="_blank"
            className="group resume flex justify-center items-center border-1 border-zinc-50 rounded-full text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
          >
            <section className="wrapper px-[1.25em] py-[0.6em] gap-x-2 flex items-center justify-between">
              Resume <FaRegPaperPlane className="paper-plane-icon" />
            </section>
          </a>
          <a
            href="mailto:jsalleo13@gmail.com"
            className="group email flex justify-center items-center border-1 border-zinc-50 rounded-full text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
          >
            <section className="wrapper px-[1.25em] py-[0.6em] gap-x-2 flex items-center justify-between">
              Email <MdEmail className="email-icon" />
            </section>
          </a>
        </section>
        <ContactButton />
      </section>
    </section>
  );
};

export default Home;
