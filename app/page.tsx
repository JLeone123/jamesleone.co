// import Image from "next/image";
// import leoneProfilePicture from "@/public/leone-profile-picture.png";
// import Link from "next/link";
import { Card } from "@/components/card";
import ContactHeader from "@/components/contact-header";
// import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";
import { SideInfo } from "@/components/side-info";
// import { Divider } from "@/components/divider";

export default function Home() {
  return (
    <main className="main container row">
      <Card />
      <section className="border border-green-400 col">
        <h1>hello</h1>
      </section>
      <section className="border border-blue-400 col">
        <h1>hello</h1>
      </section>
    </main>
  );
}
