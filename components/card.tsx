import React from "react";
import Image from "next/image";
import leoneProfilePicture from "@/public/leone-profile-picture.png";

export const Card = () => {
  return (
    <Image
      src={leoneProfilePicture}
      className="border border-zinc-200/80 w-[45%] max-w-225 object-top self-center rounded-full object-cover aspect-square hover:scale-[1.10] active:scale-[1.10] transition"
      decoding="async"
      alt="Professional headshot of James Leone"
      quality={100}
      priority={true}
    />
  );
};
