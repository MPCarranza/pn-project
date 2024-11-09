import React from "react";
import Presentation from "../components/Presentation";
// import AnimatedCarousel from "../components/AnimatedCarousel";

export default function Home() {
  return (
    <>
      <section className="py-14">
        <Presentation />
      </section>
      <div>
        {/* <AnimatedCarousel
          content="Bienvenido"
          repeat={10}
          color="text-white"
          bgColor="bg-greengy"
        /> */}
      </div>
    </>
  );
}
