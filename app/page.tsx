import Image from "next/image";

export default function Home() {
  return (
    <main className="z-10 ">
      <section >
        <div className="absolute gradient ">
          <div className="relative p-7 w-2/5 top-[13rem]">

            <h1 className="h1">Dra. Anna Kampmann</h1>
            <h2 className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos obcaecati laudantium asperiores molestias necessitatibus alias provident.
            </h2>
          </div>
        </div>

        <Image
          src={"/logo_hero_2.png"}
          alt="Anna Logo"
          className="absolute opacity-5"
          width={782}
          height={1127}
        />

        <div className="float-right">
          <Image
            src={"/anna_hero.png"}
            alt="Anna Kampmann"
            className=" right-0 opacity-15 bg-blue-300"
            height={976}
            width={976}
          />
        </div>



      </section>
    </main>
  );
}
