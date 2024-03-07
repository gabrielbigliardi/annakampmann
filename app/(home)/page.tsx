import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Procedures from "./_components/Procedures";
import Schedule from "./_components/Schedule";

export default function Home() {
  return (
    <main className="z-10 ">
      <Hero />
      <About />
      <Procedures />
      <Schedule />
    </main>
  );
}


{/* <section >
        <div className="absolute gradient">
        </div>

        <Image
          src={"/logo_hero_2.png"}
          alt="Anna Logo"
          className="absolute opacity-5 md:-left-56"
          width={782}
          height={1127}
        />

        <div className="float-right relative">
          <div className="hero-image-desktop-gradient"></div>
          <Image
            src={"/anna_hero.png"}
            alt="Anna Kampmann"
            className=" right-0 opacity-35 hero-image-desktop"
            height={976}
            width={976}
          />
        </div>

        <div className="">
          <div className=" hero-text">

            <h1 className="h1 pb-5">Dra. Anna Kampmann</h1>
            <h2 className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos obcaecati laudantium asperiores molestias necessitatibus alias provident.
            </h2>
          </div>
        </div>

      </section> */}
