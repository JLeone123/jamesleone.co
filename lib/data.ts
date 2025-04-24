type Link = {
  name: string;
  hash: string;
};

export const links: Link[] = [
  {
    name: "Home",
    hash: "#",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
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
