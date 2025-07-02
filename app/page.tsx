import Hero from "@/components/hero";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className="main container">
      <section
        id="home"
        className="h-[100svh] scroll-mt-[100rem] flex flex-col justify-center"
      >
        <Hero />
      </section>
      <ContactForm />
    </main>
  );
}
