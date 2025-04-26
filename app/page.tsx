// import Image from "next/image";
// import leoneProfilePicture from "@/public/leone-profile-picture.png";
// import Link from "next/link";
import { Card } from "@/components/card";
// import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";
import { SideInfo } from "@/components/side-info";
// import { Divider } from "@/components/divider";

export default function Home() {
  return (
    // <Spotlight>
    <main className="flex flex-col items-center gap-y-10 mx-17">
      <section className="relative flex flex-row gap-x-15 mt-7 max-h-[90vh]">
        <Card />
        <Intro />
        <SideInfo />
      </section>
    </main>
  );
}
