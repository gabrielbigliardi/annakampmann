import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Procedures from "./_components/Procedures";
import Schedule from "./_components/Schedule";
import Footer from "../_components/Footer";

export default function Home() {
  return (
    <main className="z-10 ">
      <Hero />
      <About />
      <Procedures />
      <Schedule />
      <Footer />
    </main>
  );
}