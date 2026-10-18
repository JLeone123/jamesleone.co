type Link = {
  name: string;
  hash: string;
};

// icons
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// profile picture
// 640x640, pre-cropped square (top-aligned). The original 2400x3000 photo is
// public/leone-profile-picture.png
import leoneProfilePicture from "@/public/leone-profile-picture.jpg";

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

export {
  FaGithubSquare,
  FaLinkedin,
  FaRegPaperPlane,
  MdEmail,
  leoneProfilePicture,
};
