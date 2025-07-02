type Link = {
  name: string;
  hash: string;
};

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const links: Link[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export { FaGithubSquare, FaLinkedin, FaRegPaperPlane, MdEmail };
