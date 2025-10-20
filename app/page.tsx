import Encryption from "@/Components/main/About";
import Footer from "@/Components/main/Footer";
import Hero from "@/Components/main/Hero";
import Projects from "@/Components/main/Projects";
import Skills from "@/Components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="container mx-auto">
          <Hero />
          <Skills />
          <Encryption />
          <Projects />
          <Footer />
        </div>
      </div>
    </main>
  );
}
