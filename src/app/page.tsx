import { CardsCarousel } from "@/components/Cards-carousel";
import Destination from "@/components/Destination";
import Hero from "@/components/Hero";
import { MovingCards } from "@/components/Moving-card";
import SectionCard from "@/components/Section-Card";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
      <Hero />
      <Destination />
      <SectionCard />
      <MovingCards />
      <CardsCarousel />
    </>
  );
}
