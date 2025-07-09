import Home from "@/components/hero";
import { ContactForm } from "@/lib/components";

export default function Page() {
  return (
    <main className="main container">
      <Home />
      {/* Projects */}
      {/* <section id="projects" className="projects">
        <h2 className="projects__heading">My Projects</h2>
      </section> */}
      <ContactForm />
    </main>
  );
}
