import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Journey from "@/components/journey";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Journey />
    </>
  );
}
