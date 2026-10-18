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
      {/* Mobile: image, text, buttons stacked. md+: image and buttons side by side, text below */}
      <div className="home__body">
        <Image
          src={leoneProfilePicture}
          className="border border-line/40 w-[min(45%,15rem)] md:w-[clamp(10rem,18vw,13rem)] object-top self-center rounded-full object-cover aspect-square hover:scale-[1.10] active:scale-[1.10] transition"
          alt="Professional headshot of James Leone"
          // Matches the CSS widths above, so the browser downloads a ~240-480px file
          sizes="(min-width: 768px) 13rem, min(45vw, 15rem)"
          // Above the fold: load it right away (the LCP image)
          preload
        />
        <IntroText />
        {/* buttons: below the text on mobile, beside the image from md up */}
        <section className="buttons home__buttons">
          <section className="first-icons flex gap-x-5 justify-center">
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
          <section className="second-icons flex flex-col mt-[2em] gap-y-5 md:mt-6 md:gap-y-4">
            <a
              href="/leone-resume.pdf"
              target="_blank"
              className="group resume flex justify-center items-center border-1 border-line rounded-full text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
            >
              <section className="wrapper px-[1.25em] py-[0.6em] gap-x-2 flex items-center justify-between">
                Resume <FaRegPaperPlane className="paper-plane-icon" />
              </section>
            </a>
            <a
              href="mailto:jsalleo13@gmail.com"
              className="group email flex justify-center items-center border-1 border-line rounded-full text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
            >
              <section className="wrapper px-[1.25em] py-[0.6em] gap-x-2 flex items-center justify-between">
                Email <MdEmail className="email-icon" />
              </section>
            </a>
          </section>
        </section>
        {/* md+: forces the text onto its own row below the image and buttons */}
        <div className="home__break" aria-hidden="true" />
      </div>
      {/* Below the image, text and buttons on every screen size */}
      <ContactButton />
    </section>
  );
};

export default Home;
