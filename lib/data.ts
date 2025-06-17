type Link = {
  name: string;
  hash: string;
  color: string;
};

export const links: Link[] = [
  {
    name: "Home",
    hash: "#",
    color: "text-green-400",
  },
  {
    name: "Projects",
    hash: "#projects",
    color: "text-blue-400",
  },
  {
    name: "Contact",
    hash: "#contact",
    color: "text-cyan-400",
  },
] as const;
