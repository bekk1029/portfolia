import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
const SectionCard = () => {
  return (
    <div className="w-full mx-auto px-8 my-12 min-h-screen">
      <HoverEffect items={projects} />
    </div>
  );
};
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image:
      "https://images.pexels.com/photos/1700769/pexels-photo-1700769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image:
      "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image:
      "https://images.pexels.com/photos/7350921/pexels-photo-7350921.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image:
      "https://images.pexels.com/photos/17614479/pexels-photo-17614479/free-photo-of-threads-by-meta-on-smartphone-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    image:
      "https://images.pexels.com/photos/2257704/pexels-photo-2257704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    image:
      "https://images.pexels.com/photos/9683980/pexels-photo-9683980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default SectionCard;
