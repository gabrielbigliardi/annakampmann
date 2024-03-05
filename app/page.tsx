import Image from "next/image";

export default function Home() {
  return (
    <main className="z-10 ">
      <section className="relative h-96 bg-red-300">
        <Image
          src={"/anna_hero.png"}
          alt="Anna Kampmann"
          className="left-0"
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </section>
    </main>
  );
}
