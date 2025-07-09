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
        className="border border-zinc-200/80 w-[45%] sm:w-[250px] object-top self-center rounded-full sm:rounded-md object-cover aspect-square hover:scale-[1.10] active:scale-[1.10] transition"
        decoding="async"
        alt="Professional headshot of James Leone"
        quality={100}
        priority={true}
      />
      <IntroText />
      {/* buttons */}
      <section className="display sm:hidden buttons flex flex-col gap-y-5">
        <section className="first-icons flex gap-x-5 mt-[4em] justify-center">
          <Link
            href="https://www.github.com/JLeone123"
            target="_blank"
            className="text-[3em] text-zinc-100 flex items-center justify-center rounded-full
                hover:scale-[1.15] focus:scale-[1.15] focus:outline-0 active:scale-[1.10] transition"
          >
            <FaGithubSquare />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jamesleone1/"
            target="_blank"
            className="text-[3em] text-zinc-100 flex items-center justify-center
                hover:scale-[1.15] focus:scale-[1.15] focus:outline-0 active:scale-[1.10] transition"
          >
            <FaLinkedin />
          </Link>
        </section>
        <section className="second-icons flex flex-col mt-[2em] gap-y-5">
          <a
            href="/leone-resume.pdf"
            target="_blank"
            className="group resume flex justify-center items-center border-1 border-zinc-50 rounded-full text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
          >
            <section className="wrapper px-5 py-3 gap-x-2 flex items-center justify-between">
              Resume <FaRegPaperPlane className="paper-plane-icon" />
            </section>
          </a>
          <a
            href="https://www.linkedin.com/in/jamesleone1/"
            target="_blank"
            className="group email flex justify-center items-center border-1 border-zinc-50 rounded-full text-center cursor-pointer hover:scale-[1.07] focus:scale-[1.07] hover:outline-0 active:scale-[1.04] focus:outline-0 transition"
          >
            <section className="wrapper px-5 py-3 gap-x-2 flex items-center justify-between">
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
