// import Image from "next/image";
// import leoneProfilePicture from "@/public/leone-profile-picture.png";
// import Link from "next/link";
import { Card } from "@/components/card";
// import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";
import { SideInfo } from "@/components/side-info";
// import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    // <Spotlight>
    <main>
      <section className="relative flex flex-row gap-x-15 mt-7 max-h-svw">
        <Card />
        <Intro />
        <SideInfo />
      </section>
    </main>
    // </Spotlight>
  );
}
